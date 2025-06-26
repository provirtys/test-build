<template>
  <div>
    <q-select
      clearable
      dense
      standout
      outlined
      v-model="filter"
      :options="props.options"
      :label="props.label"
    />
  </div>
</template>

<script setup>
import { QSelect } from "quasar";
import { ref } from "vue";

const props = defineProps({
    /** Значения раскрывющегося списка*/
    options: {
        type: Array,
        default: () => [],
    },
    /** Подпись элемента*/
    label: {
        type: String,
        default: "",
    },
});

const filter = ref("");
</script>

<style lang="scss">
.q-field__control {
  color: $primary !important;
}

.mb-16 {
  margin-bottom: $s-2 !important;
}

.pt-0 {
  padding-top: 0 !important;
}

.q-select {
  width: 200px;
  margin-right: $s-3;
}

@media (min-width: 600px) {
  .q-dialog__inner--minimized > div {
    max-width: 100%;
  }
}

.q-dialog__inner > div {
  border-radius: $s-3;
  width: 500px;
  padding: $m-1;
}

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
</style>
