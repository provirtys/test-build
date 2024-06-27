<template>
  <div class="table-container">
    <q-btn
        color="primary"
        text-color="secondary"
        icon="sym_o_add"
        no-caps
        :label="$t('storybook.table.create')"
        class="add-btn"
    />
  </div>
</template>

<script setup>

</script>

<style scoped lang="scss">
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
