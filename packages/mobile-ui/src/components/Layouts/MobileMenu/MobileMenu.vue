<template>
  <div class="tabbar" :class="[isBackgroundDark ? 'tabbar-dark' : '']">
    <div class="tabs">
      <router-link tag="div" class="tabbar-item" :to="{ name: 'FrontPage' }">
        <tab-bar-icon class="image" :class="tabbarItemColor('home')" :page="'home'" />
        <div class="label">{{ t('storybook.home') }}</div>
      </router-link>
      <router-link tag="div" class="tabbar-item" :to="{ name: 'CheckScan' }">
        <tab-bar-icon class="image" :class="tabbarItemColor('scan')" :page="'scan'" />
        <div class="label">{{ t('storybook.scan') }}</div>
      </router-link>
      <router-link tag="div" class="tabbar-item" :to="{ name: 'History' }">
        <tab-bar-icon class="image" :class="tabbarItemColor('history')" :page="'history'" />
        <div class="label">{{ t('storybook.history') }}</div>
      </router-link>
      <router-link tag="div" class="tabbar-item" :to="{ name: 'Profile' }">
        <tab-bar-icon class="image" :class="tabbarItemColor('profile')" :page="'profile'" />
        <div class="label">{{ t('storybook.profile') }}</div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { TabBarIcon } from '@components/Elements/TabBarIcon/index.js';
import { setupI18n } from '@integrity/base-ui/src/i18n.js';

const { t } = setupI18n();

const props = defineProps({
  isBackgroundDark: {
    type: Boolean,
    default: false,
  },
  currentPage: {
    type: String,
    default: '',
  },
});

function isPageActive(page) {
  switch (page) {
    case 'home':
      return props.currentPage === 'FrontPage';
    case 'scan':
      return ['Checking', 'CheckScan', 'CheckResult'].includes(props.currentPage);
    case 'history':
      return props.currentPage === 'History';
    case 'profile':
      return [
        'Profile',
        'ProfileAuth',
        'ProfileRegister',
        'BindingCodeScan',
        'BindingCodeConfirm',
        'ProfileEdit',
      ].includes(props.currentPage);
    default:
      return false;
  }
}

function tabbarItemColor(page) {
  let style;
  if (isPageActive(page)) {
    style = 'active';
  } else if (props.isBackgroundDark) {
    style = 'light';
  }
  return style;
}
</script>

<style lang="scss" scoped>
.tabbar {
  background-color: $light-gray-55;
  width: 100%;
  padding: 0px;
  display: flex;
  flex-direction: column;

  .tabs {
    height: 50px;
    width: calc(100% - $s-2);
    padding-left: $d-1;
    padding-right: $d-1;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: flex-start;
    gap: $s-3;
    position: relative;

    .tabbar-item {
      height: 49px;
      width: 74.75px;
      align-self: flex-start;
      top: 0px;
      padding: 0px;
      align-content: center;
      justify-content: center;
      align-items: center;
      display: flex;
      flex-direction: column;
      color: $dark-gray;
      text-decoration: none;

      .label {
        color: $dark-gray;
        text-align: center;
        vertical-align: text-top;
        font-size: $font-size-p6;
        font-family: 'Golos';
        left: 14.77px;
        top: 35px;
        height: $s-1;
        letter-spacing: -0.24px;
        line-height: auto;
      }

      .image {
        height: $s-4;
        width: $s-4;
        padding: 0px;
        left: 25.27px;
        top: $d-1;
      }
    }
  }
}

.tabbar-dark {
  background: $dark-gray;
  .tabs {
    .tabbar-item {
      .label {
        color: $light-gray-55;
      }
    }
  }
}

.active {
  color: $primary;
}

.light {
  color: $light-gray-55;
}
</style>
