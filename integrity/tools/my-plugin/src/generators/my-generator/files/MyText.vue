<template>
    <div>{{ t('noTasks') }}</div>
</template>

<script setup>
import { setupI18n } from './i18n.js';

const { t } = setupI18n();
</script>