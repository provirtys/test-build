<template>
  <div class="code-list">
    <v-expansion-item no-paddings label="Коды в упаковке" default-opened>
      <div class="code-list__items">
        <code-item v-for="(item, idx) in items" :label="item.label" :status="item.status" :cancelable="idx === 0"
                   @on-cancel="() => onItemCancel(item)"/>
      </div>
    </v-expansion-item>
  </div>
</template>

<script setup lang="ts">
import { VExpansionItem } from '@base';
import { CodeItem } from '@terminal';

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
    required: true,
  },
});

const emit = defineEmits(['onItemCancel']);

const onItemCancel = (item) => {
  emit('onItemCancel', item);
};
</script>

<style scoped lang="scss">
.code-list {

  &__items {
    display: grid;
    gap: 8px;
  }
}
</style>