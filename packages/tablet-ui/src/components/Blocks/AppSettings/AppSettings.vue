<template>
  <v-button class="app-settings" color="secondary" height="sm" fit-width :is-rounded="false">
    <v-icon name="settings"/>
    <q-menu style="width: 300px" target=".app-settings">
      <q-list class="q-pa-md">
        <div v-if="options.userSettings" class="q-card--bordered q-pa-md q-mb-md">
          <user-settings :options="options.userSettings"/>
        </div>
        <q-toggle :model-value="options.devMode" @update:modelValue="updateDevMode" label="Режим разработчика"/>
        <dev-settings v-if="options.devMode" :options="options.devSettings"/>
      </q-list>
    </q-menu>
  </v-button>
</template>

<script setup>
import { DevSettings, UserSettings, VButton, VIcon } from '@tablet';

const props = defineProps({
  options: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

const emit = defineEmits(['update:options']);

const updateDevMode = (val) => {
  emit('update:options', {
    ...props.options,
    devMode: val,
  });
};
</script>