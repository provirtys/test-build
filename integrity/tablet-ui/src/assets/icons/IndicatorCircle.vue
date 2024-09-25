<template>
  <svg width="100%" height="100%" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Основной круг (индикатор) -->
    <circle cx="50" cy="50" r="5" fill="red">
      <animate
          v-if="isAnimate"
          attributeName="opacity"
          values="1;0.2;1"
          dur="1.5s"
          repeatCount="indefinite"
      />
    </circle>

    <!-- Внешний круг 1 -->
    <circle v-if="isAnimate" cx="50" cy="50" r="5" fill="none" stroke="#007BFF" stroke-width="3">
      <animate
          attributeName="r"
          values="5;20"
          dur="1.5s"
          repeatCount="indefinite"
      />
      <animate
          attributeName="opacity"
          values="0.4;0"
          dur="1.5s"
          repeatCount="indefinite"
      />
    </circle>

    <!-- Внешний круг 2 -->
    <circle v-if="isAnimate" cx="50" cy="50" r="5" fill="none" stroke="#007BFF" stroke-width="3">
      <animate
          attributeName="r"
          values="5;20"
          dur="1.5s"
          begin="0.75s"
          repeatCount="indefinite"
      />
      <animate
          attributeName="opacity"
          values="0.4;0"
          dur="1.5s"
          begin="0.75s"
          repeatCount="indefinite"
      />
    </circle>
  </svg>
</template>

<script setup>
const props = defineProps({
  /** Цвет индикатора статуса принтера */
  color: {type: String, default: 'info'},
  /** Высота кнопки*/
  isAnimate: {type: Boolean, default: false}
})
</script>

<style scoped lang="scss">
.info {
  background: $info;
}

.warning {
  background: $warning;
}

.success {
  background: $success;
}

.error {
  background: $error;
}
</style>
