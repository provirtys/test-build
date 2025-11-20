<template>
  <div v-if="gtin" class="gtin-info">
    <v-input v-for="(field, key) in gtin" :key dense :model-value="field.toString()" type="text" label-outside
             :label="fieldLabels[key]" label-color="gray" x-padding="12px" readonly/>
  </div>
</template>

<script setup lang="ts">
import { VInput } from '@integrity/base-ui';
import type { GtinInfoProps } from '@/components/Blocks/GtinInfo/GtinInfo.types';

defineProps<GtinInfoProps>();

const fieldLabels: Record<keyof GtinInfoProps['gtin'], string> = {
  id: 'GTIN',
  name: 'Наименование',
  quantityInPallet: 'Кол-во в упаковке',
  quantityInPackage: 'Упаковок в палете',
};
</script>

<style scoped lang="scss">

</style>