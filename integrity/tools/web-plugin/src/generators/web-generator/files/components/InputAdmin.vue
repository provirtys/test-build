<template>
  <div class="table-container">
    <q-input
        outlined
        dense
        standout
        bg-color="secondary"
        v-model="filter"
        :placeholder="props.placeholder"
    >
      <template v-slot:prepend>
        <q-icon v-if="filter === ''" name="sym_o_search"/>
        <q-icon
            v-else
            name="sym_o_close"
            class="cursor-pointer"
            @click="filter = ''"
        />
      </template>
    </q-input>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import { QInput, QIcon } from 'quasar';
import 'quasar/dist/quasar.css'

let props = defineProps({
  /** Подпись элемента*/
  placeholder: {
    type: String,
    default: ''
  },
})

const filter = ref('')
</script>

<style lang="scss">
@import '../assets/css/main.scss';

.bg-secondary {
  background: $secondary !important;
}

.q-field--dense {
  max-width: 242px;
}

.q-field__control {
  color: $primary !important;
}
</style>
