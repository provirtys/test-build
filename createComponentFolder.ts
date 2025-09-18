import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

function createStorybookComponent(componentName: string, basePath: string) {
  if (!componentName) {
    console.error('❌ Укажите имя компонента!');
    process.exit(1);
  }

  if (!basePath) {
    console.error('❌ Укажите путь для папки компонента!');
    process.exit(1);
  }

  const componentPath = path.join(basePath, componentName);

  // Создаем папку
  if (!fs.existsSync(componentPath)) {
    fs.mkdirSync(componentPath, { recursive: true });
  }

  // Шаблоны файлов
  const templates = {
    [`${componentName}.vue`]: `<template>
    <!-- Содержимое компонента -->
</template>

<script setup lang="ts">
import type { ${componentName}Props } from './${componentName}.types'

withDefaults(defineProps<${componentName}Props>(), {
  // Значения по умолчанию
})
</script>

<style scoped lang="scss">

</style>`,

    [`${componentName}.types.ts`]: `export interface ${componentName}Props {
  // Определите здесь пропсы компонента
}`,

    [`${componentName}.stories.ts`]: `import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ${componentName} from './${componentName}.vue'

type Story = StoryObj<typeof ${componentName}>

const meta: Meta<typeof ${componentName}> = {
  component: ${componentName},
  argTypes: {
    // Настройка контролов
  },
  args: {
    // Значения по умолчанию
  }
}
  
export default meta

export const Standard: Story = {
  args: {
    // Значения для стори
  }
}`,

    'index.ts': `export type { ${componentName}Props } from './${componentName}.types'
export { default as ${componentName} } from './${componentName}.vue'`,
  };

  // Создаем файлы
  Object.entries(templates).forEach(([filename, content]) => {
    const filePath = path.join(componentPath, filename);
    fs.writeFileSync(filePath, content, 'utf8');
  });

  // Добавляем созданную папку в git
  try {
    execSync(`git add "${componentPath}"`);
    console.log(`🟢 Папка ${componentName} добавлена в git`);
  } catch (error) {
    console.warn(`⚠️ Не удалось выполнить git add: ${error}`);
  }

  console.log(`✅ Папка для компонента ${componentName} успешно создана!`);
  console.log(`📁 Структура:`);
  console.log(`├── ${componentName}/`);
  console.log(`│   ├── ${componentName}.vue`);
  console.log(`│   ├── ${componentName}.types.ts`);
  console.log(`│   ├── ${componentName}.stories.ts`);
  console.log(`│   └── index.ts`);
}

// Запуск из командной строки
const componentName = process.argv[2];
const basePath = process.argv[3];
createStorybookComponent(componentName, basePath);

export default createStorybookComponent;
