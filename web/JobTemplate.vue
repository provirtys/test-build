<template>
  <div class="template">
    <div class="template__empty-space"></div>
    <div class="template__content">
      <div class="template__form">
        <q-input
            outlined
            v-model="taskText"
            :placeholder="$t('taskText')"
            :rules="[val => !!val || $t('error.noEmpty')]"
        ></q-input>
        <q-input
            outlined
            v-model="taskSku"
            :placeholder="$t('sku')"
            class="template__sku"
            :rules="[val => !!val || $t('error.noEmpty')]"
        ></q-input>
        <div class="template__attributes">
          <form>
            <label v-for="row in rows" :key="row.uuid">
              <q-input
                  outlined
                  v-model="row.key"
                  :placeholder="$t('taskName')"
                  class="template__attribute"
                  :rules="[val => !!val || $t('error.noEmpty'), val => !notUniqueValue(row, val) || $t('error.uniqueValue')]"
              ></q-input>
              <q-input
                  outlined
                  v-model="row.value"
                  :placeholder="$t('value')"
                  class="template__attribute"
                  :rules="[val => !!val || $t('error.noEmpty')]"
              ></q-input>
              <q-icon
                  name="sym_o_delete"
                  color="primary"
                  class="cursor-pointer mb-20"
                  size="40px"
                  @click="removeRow(row)"
              ></q-icon>
            </label>
            <div>
              <q-btn
                  v-if="rows.length < 10"
                  unelevated
                  color="gray"
                  text-color="dark"
                  no-caps
                  :label="$t('add')"
                  class="template__add-attribute-button"
                  @click="addRow"
              />
            </div>
          </form>
        </div>
      </div>

      <div class="template__actions">
        <q-btn
            :disable="isDisabledButton"
            unelevated
            color="gray"
            text-color="dark"
            no-caps
            :label="$t('generateDataMatrix')"
            @click="generateDataMatrix"
        />
        <q-btn
            :disable="isDisabledButton"
            unelevated
            color="primary"
            text-color="secondary"
            no-caps
            :label="$t('save')"
            @click="createTemplate"
        />
      </div>
    </div>
    <div class="template__code">
      <p class="template__code-task-title">{{ taskText }}</p>
      <p class="template__code-title">DataMatrix</p>
      <div id="factory-barcode" v-html="svgnode"></div>
    </div>
  </div>
</template>

<script setup>
import {reactive, ref, watch} from 'vue'
import bwipjs from 'bwip-js'
import {v4 as uuidv4} from 'uuid'
import {TemplateModel} from "../util/template_pb.js";

const rows = reactive([{uuid: uuidv4(), key: '', value: ''}])
const svgnode = ref('')
const attributes = ref([])
const taskText = ref('')
const taskSku = ref('')
const isDisabledButton = ref(true)

const addRow = () => {
  rows.push({uuid: uuidv4(), key: '', value: ''})
}
const removeRow = (row) => {
  const idx = rows.indexOf(row)
  console.log(idx)
  if (idx > -1) {
    rows.splice(idx, 1)
  }
}

// Проверка на пустое поле Название задачи
function notEmptyInputs() {
  if (taskText.value !== '' && taskSku.value !== '') {
    return true
  }
}

// Проверка на пустое поле Наименование - Значение
function notEmpty() {
  let hasErrorNoEmpty = false
  for (let i = 0; i <= rows.length - 1; i++) {
    if (rows[i].key === '' || rows[i].value === '') {
      hasErrorNoEmpty = true // поле пустое
      break
    } else {
      hasErrorNoEmpty = false // поле не пустое
    }
  }
  return !hasErrorNoEmpty
}

// Проверка на уникальность поля Наименование
function notUniqueValue(currentRow, val) {
  let hasErrorUniqueValue = false
  // console.log(currentRow)
  for (const row of rows) { // В ЦИКЛЕ РАССМАТРИВАЕМ ВСЕ СТРОЧКИ
    if (row.uuid !== currentRow.uuid) { // если uuid строки из массива не совпадает с проверяемой, то выполняем проверку
      if (row.key === currentRow.key) {
        hasErrorUniqueValue = true// есть совпадение
        // console.log('Требуется уникальное наименование')
        break
      } else {
        hasErrorUniqueValue = false// отсутствует совпадение
        // console.log('Все наименования разные')
      }
    }
  }
  return hasErrorUniqueValue
}

watch((taskText), () => {
  notStoke()
})
watch((taskSku), () => {
  notStoke()
})
watch(() => rows, () => {
      notStoke()
    },
    {deep: true}
)

// проверка на отсутствие хотя бы одной строки Наименование - Значение
async function notStoke() {
  if (rows.length < 1) {
    isDisabledButton.value = true
    // console.log("Добавьте хотя бы один атрибут")
    // alert('Добавьте хотя бы один атрибут')
  } else if (notEmpty() && notEmptyInputs()) {
    for (let i = 0; i <= rows.length - 1; i++) {
      if (notUniqueValue(rows[i])) {
        isDisabledButton.value = true
        break
      } else {
        isDisabledButton.value = false
      }
    }
    return isDisabledButton.value
  } else {
    isDisabledButton.value = true
  }
}

function saveData() {
  const form = {}
  // Добавление свойства в объект
  for (let i = 0; i <= rows.length - 1; i++) {
    if (rows[i].key === '' || rows[i].value === '') {
      rows.filter(item => (item.key !== '' || item.key !== ''))
    } else {
      form[rows[i].key] = rows[i].value
    }
    attributes.value = Object.entries(form).map(([key, value]) => ({key, value}))
    console.log(form)
    console.log(attributes)
  }
}

async function generateDataMatrix() {
  saveData()
  const value = {
    title: taskText.value,
    attributes: attributes.value
  }
  // const extId = uuidv4() // внутренний идентификатор

  const product = new TemplateModel(value)
  // const binData = Product.encode(product).finish()
  const binData = product.toBinary()
  console.log(binData)
  const asciiData = String.fromCharCode.apply(null, binData)
  console.log(asciiData)

  // const root = await protobuf.load('./product.proto')
  // const Product = root.lookupType('Product')
  // const product = Product.create(value)

  // const binData = Product.encode(product).finish()
  // const asciiData = String.fromCharCode.apply(null, binData)
  // console.log(asciiData)

  const decodeBinData = Uint8Array.from(asciiData, c => c.charCodeAt(0))
  // const decodeProduct = Product.decode(decodeBinData)
  const decodeProduct = TemplateModel.fromBinary(decodeBinData)
  console.log(`Decode product: ${JSON.stringify(decodeProduct)}`)
  console.log(JSON.parse(JSON.stringify(decodeProduct)))

  const svg = bwipjs.toSVG({
    bcid: 'datamatrix',
    text: asciiData,
    binarytext: true
  })

  const e = document.getElementById('factory-barcode')
  if (e) {
    while (e.childNodes[0]) {
      e.removeChild(e.childNodes[0])
    }
    // const [, width, height] = /viewBox="0 0 (\d+) (\d+)"/.exec(svg)
    const span = document.createElement('span')
    span.style.display = 'inline-block'
    span.style.width = '90%'
    span.style.height = '90%'
    span.innerHTML = svg
    e.appendChild(span)
  }
}

async function createTemplate() {
  saveData()
}
</script>

<style lang="scss">
.text-secondary {
  color: $secondary !important;
}

.q-btn.disabled {
  opacity: 0.7 !important;
}

.bg-gray {
  background: #ededed;
}

.q-btn {
  line-height: 1.4em;
}

.template {
  width: 100%;
  height: 100%;
  display: flex;

  &__empty-space {
    flex: 1;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow-y: hidden;
    height: 100%;
    width: 50%;
    margin: auto;
    background: white;
    border-radius: 12px;
    padding: 40px;
  }

  &__form {
    display: flex;
    overflow-y: hidden;
    flex-direction: column;
    flex: 1;
  }

  &__sku {
    margin-top: 20px;
  }

  &__attributes {
    flex: 1;
    overflow-y: hidden;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;

    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      overflow-y: auto;
    }

    label {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }

  &__attribute {
    flex: 1;
  }

  &__add-attribute-button {
    //width: 20%;
    height: 56px;
    background: #ededed;
  }

  &__actions {
    display: flex;
    gap: 20px;

    button {
      flex: 1;
      height: 56px;
    }
  }

  &__code {
    margin-top: 40px;
    background-color: white;
    flex: 1;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    &-title {
      padding-right: 35px;
    }

    &-task-title {
      display: none;
    }

    p {
      color: #242a2b;
      font-size: 20px;
      font-family: Ubuntu-medium, serif;
    }

    #factory-barcode {
      width: 100%;
      height: 100%;
    }
  }

  .q-field, .q-btn {
    font-size: 16px;
  }

  .mb-20 {
    margin-bottom: 20px;
  }
}

@media print {
  header {
    display: none;
  }

  aside {
    display: none;
  }

  .template__empty-space {
    display: none;
  }

  .q-page-container {
    padding: 0 !important;
  }

  .template__content {
    display: none;
  }

  .template__code {
    padding: 20px;
    margin: 0 auto;
    width: 80%;
    height: 80%;

    &-task-title {
      display: block;
      color: #242a2b;
      font-size: 20px;
      font-family: Ubuntu-medium, serif;
    }

    &-title {
      display: none;
      padding-right: 0;
    }
  }

  #factory-barcode {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
