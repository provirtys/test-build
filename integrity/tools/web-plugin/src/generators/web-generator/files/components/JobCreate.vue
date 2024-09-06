<template>
  <div class="job">
    <div class="job__content">
      <q-input
        outlined
        v-model="taskText"
        :placeholder="t('taskText')"
        :rules="[val => !!val || t('error.noEmpty')]"
        class="job__task"
      ></q-input>

      <q-input
        outlined
        type="number"
        v-model.number="amount"
        :placeholder="t('amountTitle')"
        :rules="[val => !!val || t('error.noEmpty')]"
        class="job__amount"
      ></q-input>

      <q-input
        outlined
        v-model="sku"
        :placeholder="t('sku')"
        :rules="[val => !!val || t('error.noEmpty')]"
        class="job__amount"
      ></q-input>

      <div class="job__attributes">
        <form>
          <label v-for="row in rows" :key="row.uuid">
            <q-input
              outlined
              v-model="row.key"
              :placeholder="t('storybook.taskName')"
              class="job__attribute"
              :rules="[val => !!val || t('error.noEmpty'), val => !notUniqueValue(row, val) || t('error.uniqueValue')]"
            ></q-input>
            <q-input
              outlined
              v-model="row.value"
              :placeholder="t('value')"
              class="job__attribute"
              :rules="[val => !!val || t('error.noEmpty')]"
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
              :label="t('add')"
              class="job__add-attribute-button"
              @click="addRow"
            />
          </div>

        </form>
      </div>
    </div>

    <div class="job__actions">
      <q-btn
        :disable="isDisabledButton"
        unelevated
        color="primary"
        text-color="secondary"
        no-caps
        :label="t('createTask')"
        @click="createTask"
      />
    </div>
  </div>
  <q-dialog v-model="errorModal" class="error-message" position="top">
      <q-card class="full-width">
        <q-card-section class="row items-center no-wrap">
          <p>{{ errorText }}</p>
        </q-card-section>
      </q-card>
    </q-dialog>
</template>

<script setup>
import { reactive, ref, watch } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { setupI18n } from '../i18n.js'

const { t } = setupI18n()

const rows = reactive([{ uuid: uuidv4(), key: '', value: '' }])
const attributes = ref([])
const taskText = ref('')
const amount = ref(null)
const sku = ref(null)
const isDisabledButton = ref(true)
const errorModal = ref(false)
const errorText = ref('')

const addRow = () => {
  rows.push({ uuid: uuidv4(), key: '', value: '' })
}
const removeRow = (row) => {
  const idx = rows.indexOf(row)
  if (idx > -1) {
    rows.splice(idx, 1)
  }
}
// Проверка на пустое поле Название задачи
function notEmptyTaskText () {
  if (taskText.value !== '') {
    return true
  }
}
// Проверка на пустое поле Наименование - Значение
function notEmpty () {
  let hasErrorNoEmpty = false
  for (let i = 0; i <= rows.length - 1; i++) {
    if (rows[i].key === '' || rows[i].value === '') {
      hasErrorNoEmpty = true// поле пустое
      break
    } else {
      hasErrorNoEmpty = false// поле не пустое
    }
  }
  return !hasErrorNoEmpty
}
// Проверка на уникальность поля Наименование
function notUniqueValue (currentRow, val) {
  let hasErrorUniqueValue = false
  // console.log(currentRow)
  for (const row of rows) { // В ЦИКЛЕ РАССМАТРИВАЕМ ВСЕ СТРОЧКИ
    if (row.uuid !== currentRow.uuid) { // если uuid строки из массива не совпадает с проверяемой, то выполняем проверку
      if (row.key === currentRow.key) {
        hasErrorUniqueValue = true// есть совпадение
        break
      } else {
        hasErrorUniqueValue = false// отсутствует совпадение
      }
    }
  }
  return hasErrorUniqueValue
}
watch((taskText), () => {
  notStoke()
})

watch((sku), () => {
  notStoke()
})

watch((amount), () => {
  notStoke()
})

watch(() => rows, () => {
  notStoke()
},
{ deep: true }
)

// проверка на отсутствие хотя бы одной строки Наименование - Значение
async function notStoke () {
  if (rows.length < 1) {
    isDisabledButton.value = true
  } else if (notEmpty() && notEmptyTaskText() && amount.value > 0) {
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

function saveData () {
  const form = {}
  // Добавление свойства в объект
  for (let i = 0; i <= rows.length - 1; i++) {
    if (rows[i].key === '' || rows[i].value === '') {
      rows.filter(item => (item.key !== '' || item.key !== ''))
    } else {
      form[rows[i].key] = rows[i].value
    }
    attributes.value = Object.entries(form).map(([key, value]) => ({ key, value }))
  }
}

async function createTask () {
  saveData()
}
</script>

<style lang="scss">
@import 'assets/css/main.scss';

.text-secondary {
  color: $secondary !important;
}
.q-btn.disabled {
  opacity: 0.7 !important;
}
.bg-gray {
  background: #ededed;
}

.job {
  display: flex;
  overflow-y: hidden;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 50%;
  margin: auto;
  background: white;
  border-radius: 12px;
  padding: 40px;

  .q-field, .q-btn {
    font-size: 16px;
  }

  .mb-20 {
    margin-bottom: 20px;
  }

  &__content {
    display: flex;
    overflow-y: hidden;
    flex-direction: column;
    flex: 1;
  }

  &__amount {
    margin-top: 20px;
  }

  &__attributes {
    width: 100%;
    flex: 1;
    overflow-y: hidden;
    display: flex;
    justify-content: space-between;
    padding: 20px 0;

    form {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: 100%;
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
    height: 56px;
  }

  &__actions {
    button {
      flex: 1;
      height: 56px;
    }
    display: flex;
  }
}
</style>
