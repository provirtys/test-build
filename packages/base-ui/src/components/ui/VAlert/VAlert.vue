<template>
  <div class="v-alert" :class="classList">
    <div class="v-alert__alert flex items-center">
      <q-icon
        name="report_gmailerrorred"
        :color="color"
        size="21px"
        class="v-alert__icon q-pa-sm"
      />
      <span class="v-alert__label" v-html="text" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: 'info',
    required: false,
    validator: (val) => ['success', 'error', 'info', 'warning'].includes(val),
  },
  text: {
    type: String,
    default: 'Info',
  },
  isBackgroundWhite: Boolean,
});

const classList = computed(() => [
  {
    [`bg-${props.color}-10`]: !props.isBackgroundWhite,
  },
]);
</script>

<style lang="scss">
.v-alert {
  width: 100%;
  background-color: $secondary;
  border-radius: $d-1;

  &__alert {
    border-radius: 8px;
    min-height: 44px;
    padding: 8px;
    display: flex;
    align-items: center;
  }

  &__label {
    font-family: 'Golos';
    color: $dark-gray;
    font-size: 18px;
    line-height: 24px;
  }
}
</style>
