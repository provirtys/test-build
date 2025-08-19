<template>
  <v-button class="app-settings" color="secondary" height="sm" fit-width :is-rounded="false" :is-disabled="isDisabled">
    <v-icon name="settings"/>
    <q-menu style="width: 300px" target=".app-settings">
      <q-list class="q-pa-md">
        <div v-if="options.userSettings" class="app-settings__groups">
          <app-settings-options :options="options.userSettings"/>
        </div>
        <q-toggle class="q-my-md" :model-value="options.devMode" @update:modelValue="updateDevMode"
                  label="Режим разработчика"/>
        <div v-if="options.devMode && options.devSettings" class="app-settings__groups">
          <app-settings-options :options="options.devSettings"/>
        </div>
      </q-list>
    </q-menu>
  </v-button>
</template>

<script setup lang="ts">
import { VButton, VIcon } from '@base';
import { AppSettingsOptions } from '@';
import type { AppSettingsEmits, AppSettingsProps } from '@/components/Blocks/AppSettings/AppSettings.types';

const props = withDefaults(defineProps<AppSettingsProps>(), {
  isDisabled: false,
});

const emit = defineEmits<AppSettingsEmits>();

const updateDevMode = (val: boolean) => {
  emit('update:options', {
    ...props.options,
    devMode: val,
  });
};
</script>

<style lang="scss" scoped>
.app-settings {

  &__groups {
    display: grid;
    gap: 10px;
  }
}
</style>