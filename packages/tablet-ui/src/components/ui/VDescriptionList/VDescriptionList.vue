<template>
  <dl class="v-description-list" :class="classList">
    <div v-for="item in items" :key="item.term" class="v-description-list__item">
      <dt class="v-description-list__term">{{ item.term }}</dt>
      <dd class="v-description-list__definition">{{ item.definition }}</dd>
    </div>
  </dl>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => [],
  },
  inline: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const classList = computed(() => [
  `v-description-list--${props.size}`,
  {
    'v-description-list--inline': props.inline,
  },
]);
</script>

<style lang="scss">
.v-description-list {
  display: grid;
  gap: 20px;

  &--inline {
    .v-description-list__item {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__term {
    @include font('Golos', $font-size-p4, 1, 500, -0.02em);
    color: $dark-gray-70;
  }

  &__definition {
    @include font('Golos', $font-size-h5, 1, 500, -0.02em);
    color: $dark-gray;
  }
}
</style>
