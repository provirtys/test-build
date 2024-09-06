<template>
  <div class="table-container">
    <q-btn
        color="primary"
        text-color="secondary"
        icon="sym_o_add"
        no-caps
        :label="t('storybook.table.create')"
        class="add-btn"
    />
  </div>
</template>

<script setup>
import { setupI18n } from '../i18n.js'

const { t } = setupI18n()
</script>

<style scoped lang="scss">
@import 'assets/css/main.scss';

.add-btn {
  height: $m-4;
  width: $b-4;
}

.bg-primary {
  background: $primary !important;
}

.text-secondary {
  color: $secondary !important;
}
</style>
