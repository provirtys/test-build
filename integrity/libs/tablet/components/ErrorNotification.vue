<template>
  <q-dialog v-model="errorModal" class="error-message" position="top">
    <q-card class="full-width">
      <q-card-section class="row items-center no-wrap">
        <p>{{ errorText }}</p>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  /** Текст ошибки */
  errorText: { type: String, default: '' },
});
const errorModal = ref(true);
</script>

<style lang="scss">
.error-message {
  .q-dialog__inner--minimized {
    padding: 0;
  }

  .q-card {
    background: $primary;
    color: $secondary;
    padding: $m-1;
  }

  .q-card__section {
    padding: 0;
  }

  .q-dialog__inner--minimized > div {
    max-width: 100%;

    p {
      margin: 0;
    }
  }
}
.q-dialog__inner > div {
  border-radius: $s-3;
}
</style>
