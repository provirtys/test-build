<template>
  <template v-for="(optGroup, optKey) in options" :key="optKey">
    <div class="app-settings__group">
      <v-button
        v-if="optKey === 'buttons'"
        v-for="(btn, btnKey) in optGroup"
        :key="btnKey"
        height="xxs"
        color="secondary"
        :loading="btn.loading"
        @click="() => btn.fn()"
      >
        {{ btn.label }}
      </v-button>
      <q-item
        v-else-if="optKey === 'inputs'"
        v-for="(input, inputKey) in optGroup"
        :key="inputKey"
        class="q-px-none"
      >
        <q-input
          v-model="input.value"
          :label="input.label"
          outlined
          debounce="500"
          class="full-width"
        >
          <template v-if="input.resetFn" #append>
            <q-icon name="refresh" class="cursor-pointer" @click="() => input.resetFn()"/>
          </template>
        </q-input>
      </q-item>
      <q-checkbox
        v-else-if="optKey === 'flags'"
        v-for="(flag, flagKey) in optGroup"
        :key="flagKey"
        v-model="flag.value"
        :label="flag.label"
      />
    </div>
  </template>
</template>

<script setup>
import { VButton } from '@base';

const props = defineProps({
  options: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped>
.app-settings__group {
  display: grid;
  gap: 10px;
}
</style>
