<template>
  <div class="v-alert">
    <div class="v-alert__alert flex items-center" :style="alertStyles">
      <q-icon
        name="report_gmailerrorred"
        :style="iconStyles"
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
    bgColor: {
        type: String,
        default: '#206DC8',
    },
    iconColor: {
        type: String,
        default: '#206DC8',
    },
    text: {
        type: String,
        default: 'Info',
    },
    isTransparent: {
        type: Boolean,
        default: true,
    },
});

const alertStyles = computed(() => ({
    backgroundColor: props.isTransparent ? `${props.bgColor}10` : `${props.bgColor}`,
}));
const iconStyles = computed(() => ({
    color: props.iconColor,
}));
</script>

<style lang="scss">
.v-alert {
  width: 100%;

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
