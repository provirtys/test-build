<template>
  <div class="main-tool">
    <div class="info">
      <p class="info__title">{{ $t('storybook.toolInfo') }}</p>
      <div class="info__item">
        <div v-if="props.img" class="info__img">
          <img :alt="$t('imageTool')" :src="props.img">
        </div>
        <div class="info__items">
          <dl v-for="(item, key) in props.toolItems" :key="key">
            <dt>{{ key }}:</dt>
            <dd>{{ item }}</dd>
          </dl>
        </div>
      </div>
    </div>

    <div class="buttons">
      <MobileButton v-if="props.btn === 'take'" :color="'dark'" :text="$t('storybook.take')"></MobileButton>
      <MobileButton v-if="props.btn === 'returnBtn'" :color="'dark'" :text="$t('storybook.return')"></MobileButton>

      <MobileButton :text="$t('storybook.cancel')"></MobileButton>
    </div>
  </div>
</template>

<script setup>
import MobileButton from "./MobileButton.vue";

let props = defineProps({
  /** Информация об инструменте */
  toolItems: {
    type: Object,
    default: () => ({})
  },
  /** Изображение инструмента */
  img: {
    type: String,
    default: ''
  },
  /** Тип кнопки Получить/Вернуть*/
  btn: {
    type: String,
    default: 'take'
  }
})

</script>

<style scoped lang="scss">
img {
  width: 100%;
  height: 100%;
}

.main-tool {
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  background: $secondary;
  padding: $s-3;
  min-width: 360px;
  min-height: 336px;
  max-width: 825px;
  max-height: 825px;
}

.info {
  width: 90%;
  max-height: 80%;
  font-family: Ubuntu-medium, serif;
  color: $dark-gray;

  &__title {
    margin-bottom: $s-3;
    font-family: Ubuntu-medium, serif;
    text-align: center;
    font-size: $font-size-p3;
  }

  &__item {
    max-height: 100%;
    display: flex;
    flex-direction: column;
    gap: $s-3;
  }

  &__img {
    position: relative;
    width: calc(min(100vh, 100vw) - $xxxl-3);
    min-height: $xxxl-3;
    //aspect-ratio: 1/1;
    //min-width: 90%;
    margin: 0 auto;
  }

  &__items {
    flex: 1;
    //width: 100%;
    max-height: 90%;
    /* добавить полосы прокрутки, если это необходимо */
    overflow: auto;
    scroll-behavior: smooth;
  }
}

dl {
  margin: auto;
}

dl dt {
  font-family: Ubuntu-medium, serif;
  float: left;
  margin-right: 10px;
  padding: 5px;
  width: $xxxl-3;
}

dl dd {
  margin: 2px 0;
  padding: 5px 0;
}

.buttons {
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: $s-3;
}

@media (max-height: 430px) {
  .buttons {
    flex-direction: row-reverse;
  }
}

@media (orientation: landscape) {
  dl dt {
    padding: 0 5px 5px;
  }

  dl dd {
    margin: 0 0 2px 0;
    padding: 0 0 5px 0;
  }

  .info {
    max-height: 80%;

    &__item {
      flex-direction: row;
    }

    &__img {
      flex-direction: row;
    }
  }
}

@media (orientation: portrait) {
  .info {
    &__img {
      width: calc(min(100vh, 100vw) - 30%);
    }
  }
}
</style>
