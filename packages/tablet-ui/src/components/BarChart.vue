<template>
  <div class="bar-chart">
    <div id="columnchart"></div>
  </div>
</template>

<script setup>
import { setupI18n } from "@base/i18n.js";
import ApexCharts from "apexcharts";
import { onMounted, ref, watch } from "vue";

const { t } = setupI18n();

// количество видимых итераций (значений по горизонтальной оси)
const limit = 18;

const props = defineProps({
    codes: {
        type: Array,
        default: () => [],
    },
    lastMeter: {
        type: Number,
        default: 0,
    },
});

const ok = ref([]);
const broken = ref([]);
// каждый раз когда изменяется список всех кодов, которые нужно отобразить на графике
watch(
    () => props.codes,
    () => {
        changeBarData(props.codes);
    },
);

function changeBarData(codeList) {
    ok.value = [];
    broken.value = [];
    const totalItems = codeList.length;
    // массив, то что показывается в каждом столбике
    const result = Array.from({ length: limit }, () => ({ ok: 0, broken: 0 }));

    if (totalItems <= limit) {
        codeList.forEach(({ status }, index) => {
            if (status === "generated" || status === "printed" || status === "verified" || status === "synced") {
                result[index].ok++;
            } else if (status === "broken") {
                result[index].broken++;
            }
        });
    } else {
        let codesPerColumn = Math.ceil(totalItems / limit);
        let codesInCurrentColumn = 0;
        let currentColumn = 0;
        codeList.forEach(({ status }, index) => {
            if (status === "generated" || status === "printed" || status === "verified" || status === "synced") {
                result[currentColumn].ok++;
            } else if (status === "broken") {
                result[currentColumn].broken++;
            }
            codesInCurrentColumn++;
            if (totalItems - index - 1 === (limit - currentColumn - 1) * (codesPerColumn - 1)) {
                codesPerColumn--;
            }
            if (codesInCurrentColumn >= codesPerColumn) {
                currentColumn++;
                codesInCurrentColumn = 0;
            }
        });
    }

    for (const col of result) {
        ok.value.push(col.ok);
        broken.value.push(col.broken);
    }
    // для работы с осью х
    const xax = [];
    // если группировать ничего не нужно тогда ось х - прописываем номера кодов
    if (codeList.length <= limit) {
        for (let i = props.lastMeter - codeList.length + 1; i <= props.lastMeter; i++) {
            xax.push(i);
        }
    } else {
        xax.push(result[0].ok + result[0].broken + props.lastMeter - codeList.length);
        for (let i = 1; i < codeList.length; i++) {
            xax.push(ok.value[i] + broken.value[i] + xax[i - 1]);
        }
    }
    updateData(broken.value, ok.value, xax);
}

window.Apex = {
    chart: {
        type: "bar",
        stacked: true,
        height: "100%",
        foreColor: "#000",
        fontFamily: "Golos",
        // меню для скачивания графика
        toolbar: {
            show: false,
        },
        zoom: {
            enabled: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    grid: {
        show: false,
    },
    xaxis: {
        axisTicks: {
            color: "#000",
            width: 2,
            height: 6,
        },
        axisBorder: {
            color: "#000",
            height: 2,
        },
        title: {
            text: t("length"),
        },
    },
    // Высплывающая подсказка
    tooltip: {
        enabled: false,
    },
};

let chartColumn = null;

const optionsColumn = {
    chart: {
        height: "100%",
        animations: {
            enabled: false,
        },
    },
    colors: ["#d3141c", "#e3e3e3"],
    stroke: {
        width: 0,
    },
    plotOptions: {
        bar: {
            columnWidth: "90%",
        },
    },
    yaxis: {
        show: true,
        stepSize: 1,
        axisBorder: {
            show: true,
            color: "#000000",
            width: 2,
        },
        axisTicks: {
            show: true,
            color: "#000000",
            width: 6,
            height: 2,
        },
        title: {
            text: t("errors"),
            rotate: -90,
            style: {
                fontSize: "12px",
                cssClass: "apexcharts-yaxis-label",
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    series: [
        {
            data: broken.value,
        },
        {
            data: ok.value,
        },
    ],
    xaxis: {
        tickPlacement: "on",
    },
    legend: {
        show: false,
    },
};

onMounted(() => {
    chartColumn = new ApexCharts(document.querySelector("#columnchart"), optionsColumn);
    chartColumn.render();
    changeBarData(props.codes);
});

function updateData(broken, ok, x) {
    chartColumn.updateOptions({
        series: [{ data: broken }, { data: ok }],
        xaxis: {
            type: "category",
            categories: x,
        },
    });
}
</script>

<style lang="scss">
.bar-chart {
  height: 80%;
  background: $secondary;

  //style storybook
  border-radius: $s-1;
  min-height: 500px;
  padding: $s-3;
}

.apexcharts-xaxis-title,
.apexcharts-yaxis-label {
  letter-spacing: -0.24px;
  line-height: 24;
  font-size: $font-size-p5;
}
</style>
