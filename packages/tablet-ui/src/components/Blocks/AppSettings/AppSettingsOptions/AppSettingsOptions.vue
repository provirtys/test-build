<template>
  <template v-for="(optGroup, optKey) in options" :key="optKey">
    <div class="app-settings__group">
      <v-button
        v-if="optKey === 'buttons'"
        v-for="(btn, btnKey) in optGroup"
        :key="btnKey"
        height="xxs"
        color="secondary"
        :loading="(btn as ButtonOption).loading"
        @click="() => (btn as ButtonOption).fn()"
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
          v-model="(input as InputOption).value"
          :label="input.label"
          outlined
          debounce="500"
          class="full-width"
        >
          <template v-if="(input as InputOption).resetFn" #append>
            <q-icon name="refresh" class="cursor-pointer" @click="() => (input as InputOption).resetFn?.()"/>
          </template>
        </q-input>
      </q-item>
      <q-checkbox
        v-else-if="optKey === 'flags'"
        v-for="(flag, flagKey) in optGroup"
        :key="flagKey"
        v-model="(flag as FlagOption).value"
        :label="(flag as FlagOption).label"
      />
    </div>
  </template>
</template>

<script setup lang="ts">
import { VButton } from '@base';
import type {
  AppSettingsOptionsProps,
  ButtonOption,
  FlagOption,
  InputOption,
} from '@/components/Blocks/AppSettings/AppSettingsOptions/AppSettingsOptions.types';

withDefaults(defineProps<AppSettingsOptionsProps>(), {
  options: () => ({}),
});
</script>

<style lang="scss" scoped>
.app-settings__group {
  display: grid;
  gap: 10px;
}
</style>
