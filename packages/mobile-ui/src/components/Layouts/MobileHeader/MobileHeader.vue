<template>
  <div class="mobile-header">
    <button v-if="showBackButton" @click="onBackButton" class="back-button">
      <img v-if="isBackgroundDark" src="../../../assets/images/back-arrow-light.svg" alt="back" />
      <img v-else src="../../../assets/images/back-arrow-dark.svg" alt="back" />
    </button>
    <div class="integrity-logo-block">
      <div v-if="getPageHeader" class="integrity-header-name">
        {{ getPageHeader }}
      </div>
      <img
        v-else-if="isBackgroundDark"
        class="integrity-logo"
        alt="integrity"
        src="../../../assets/images/integrity-logo-light.svg"
      />
      <img
        v-else
        class="integrity-logo"
        alt="integrity"
        src="../../../assets/images/integrity-logo.svg"
      />
    </div>

    <div class="offline-mode-marker" :class="{ light: isBackgroundDark }" v-if="isOffline">
      <span>offline mode</span>
    </div>
  </div>
</template>

<script setup>
import { setupI18n } from '@integrity/base-ui/src/i18n.js';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

const { t } = setupI18n();
const router = useRouter();

const props = defineProps({
    showBackButton: {
        type: Boolean,
        default: false,
    },
    isBackgroundDark: {
        type: Boolean,
        default: false,
    },
    isOffline: {
        type: Boolean,
        default: false,
    },
    page: {
        type: String,
        default: '',
    },
});

function onBackButton() {
    switch (props.page) {
        case 'FrontPage':
            break;

        case 'CheckResult':
            router.push({ name: 'CheckScan' });
            break;

        case 'Checking':
        case 'History':
        case 'CheckScan':
        case 'Settings':
        case 'Auth':
        case 'ProfileRegister':
        case 'ForgotPassword':
            router.push({ name: 'FrontPage' });
            break;

        default:
            router.go(-1);
            break;
    }
}

const getPageHeader = computed(() => {
    switch (props.page) {
        case 'Profile':
            return t('storybook.profile');
        case 'ProfileRegister':
            return t('storybook.register');
        default:
            return undefined;
    }
});
</script>

<style lang="scss">
.mobile-header {
  --safe-area-inset-top: env(safe-area-inset-top);
  --safe-area-inset-bottom: env(safe-area-inset-bottom);
  font-family: 'Golos';
  width: calc(100% - $m-2);
  height: $xxl-2;
  margin: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: calc(max($s-2, var(--safe-area-inset-top))) $s-2 $s-2 $s-2;

  .back-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: $d-0 $s-2;
    gap: $d-0;
    width: $l-2;
    height: $l-2;
    box-shadow: none;
    border-width: 0px;
    background-color: transparent;
    margin-right: -48px;
  }

  .integrity-logo-block {
    align-self: center;
    margin: $d-1 auto 0px auto;

    .integrity-logo {
      width: $b-1;
      height: $s-3;
    }
  }

  .offline-mode-marker {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 1px 6px 3px;
    gap: $d-0;
    border: 1px solid $dark-gray;
    border-radius: 25px;
    position: absolute;
    right: $s-2;

    &.light {
      border: 1px solid $light-gray-55;

      span {
        color: $light-gray-55;
      }
    }

    span {
      font-style: normal;
      font-weight: 600;
      font-size: $font-size-p5;
      line-height: $line-height-120;
      letter-spacing: -0.24px;
      color: $dark-gray;
    }
  }
}
</style>
