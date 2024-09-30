<script setup>
import ApexCharts from 'apexcharts'
import { ref, onMounted, watch } from 'vue'
import { setupI18n } from '../i18n.js'

const { t } = setupI18n()

const props = defineProps({
  codes: {
    type: Array,
    default: () => []
  }
})
const limit = 200
const ok = ref([])
const broken = ref([])
watch(() => props.codes, (first, second) => {
  changeBarData(props.codes)
})
function changeBarData (codeList) {
  ok.value = []
  broken.value = []
  const totalItems = codeList.length
  const result = Array.from({ length: limit }, () => ({ ok: 0, broken: 0 }))
  // заполнение result
  if (totalItems <= limit) {
    codeList.forEach(({ status }, index) => {
      if (status === 'generated' || status === 'printed' || status === 'verified' || status === 'synced') {
        result[index]['ok']++
      } else if (status === 'broken') {
        result[index]['broken']++
      }
    })
  } else {
    let codesPerColumn = Math.ceil(totalItems / limit)
    let codesInCurrentColumn = 0
    let currentColumn = 0
    codeList.forEach(({ status }, index) => {
      if (status === 'generated' ||  status === 'printed' || status === 'verified' || status === 'synced') {
        result[currentColumn]['ok']++
      } else if (status === 'broken') {
        result[currentColumn]['broken']++
      }
      codesInCurrentColumn++
      if ((totalItems - index - 1 === (limit - currentColumn - 1) * (codesPerColumn - 1))) {
        codesPerColumn--
      }
      if (codesInCurrentColumn >= codesPerColumn) {
        currentColumn++
        codesInCurrentColumn = 0
      }
    })
  }
  result.forEach((col, index) => {
    if (col.broken > 0) {
      ok.value.push([index + 1, 0])
      broken.value.push([index + 1, 1])
    } else if (col.ok > 0) {
      ok.value.push([index + 1, 1])
      broken.value.push([index + 1, 0])
    }
  })
  // для работы с осью х
  const xax = []
  // если группировать ничего не нужно тогда ось х - прописываем номера кодов
  if (codeList.length <= limit) {
    for (let i = 1; i <= codeList.length; i++) {
      xax.push(i)
    }
  } else {
    xax.push(result[0].ok + result[0].broken)
    for (let i = 1; i < limit; i++) {
      xax.push(result[i].ok + result[i].broken + xax[i - 1])
    }
  }
  // группировать при длине оси Х больше 20
  if (xax.length > 20) {
    for (let i = 0; i < limit; i++) {
      // если остаток от деление на 20 != 0 и i != последнему элементу
      if ((i % 20 !== 0) && (i !== xax.length - 1)) {
        xax[i] = ''
      }
    }
  }
  updateData(broken.value, ok.value, xax)
}

window.Apex = {
  chart: {
    type: 'bar',
    stacked: true,
    height: '100%',// storybook
    foreColor: '#000',
    fontFamily: 'Golos UI-medium',
    // меню для скачивания графика
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    }
  },
  colors: ['#d3141c', '#e3e3e3'],
  dataLabels: {
    enabled: false
  },
  grid: {
    show: false
  },
  xaxis: {
    tickAmount: 15,
    axisTicks: {
      color: '#000',
      width: 2,
      height: 6
    },
    axisBorder: {
      color: '#000',
      height: 2
    },
    title: {
      text: t('length')
    }
  },
  // Высплывающая подсказка
  tooltip: {
    enabled: false
  }
}

let chartColumn = null

const optionsColumn = {
  chart: {
    animations: {
      enabled: false
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '100%'
    }
  },
  stroke: {
    colors: ['#d3141c','#e3e3e3'],
    width: 0
  },
  yaxis: {
    show: false
  },
  dataLabels: {
    enabled: false
  },
  series: [
    {
      data: broken.value
    },
    {
      data: ok.value
    }
  ],
  xaxis: {
    tickPlacement: 'on',
    labels: {
      rotate: 0
    },
    axisTicks: {},
    title: {
      text: undefined
    }
  },
  legend: {
    show: false
  }
}

onMounted(() => {
  chartColumn = new ApexCharts(document.querySelector('#columnchart-time'), optionsColumn)
  chartColumn.render()
  changeBarData(props.codes)
})

function updateData (broken, ok, x) {
  chartColumn.updateOptions({
    series: [
      { data: broken },
      { data: ok }
    ],
    xaxis: {
      type: 'category',
      categories: x,
      axisTicks: {
        color: '#ffffff'
      }
    }
  })
  const xaxisTicks = document.getElementById('columnchart-time').getElementsByClassName('apexcharts-inner apexcharts-graphical')[0].getElementsByClassName('apexcharts-xaxis-tick')
  if (xaxisTicks.length > 20) {
    for (let i = 0; i < xaxisTicks.length; i++) {
      if ((i % 20 === 0) || (i === xaxisTicks.length - 1)) {
        xaxisTicks[i].setAttribute('stroke', '#000000')
      }
    }
  } else {
    for (let i = 0; i < xaxisTicks.length; i++) {
      xaxisTicks[i].setAttribute('stroke', '#000000')
    }
  }
}

</script>

<template>
  <div class="bar-chart-time">
    <div id="columnchart-time"></div>
  </div>
</template>

<style lang="scss">
@import '../css/main.scss';

.bar-chart-time {
  height: 100%;
  max-height: 300px;
  padding: 0 $s-3 $s-3;
  background: $secondary;
  border-radius: $s-1;
}

.apexcharts-xaxis-title, .apexcharts-yaxis-label {
  letter-spacing: -0.24px;
  line-height: 24;
  font-size: $font-size-p5;
}
</style>
