<template>
  <div class="tabbar" :class="[isBackgroundDark ? 'tabbar-dark' : '']">
    <div class="tabs">
      <router-link tag="div" class="tabbar-item" :to="{name:'FrontPage'}">
        <TabBarIcon class="image" :class="tabbarItemColor('home')" :page="'home'" />
        <div class="label">{{ $t('storybook.home') }}</div>
      </router-link>
      <router-link tag="div" class="tabbar-item" :to="{name:'CheckScan'}">
        <TabBarIcon class="image" :class="tabbarItemColor('scan')" :page="'scan'" />
        <div class="label">{{ $t('storybook.scan') }}</div>
      </router-link>
      <router-link tag="div" class="tabbar-item" :to="{name:'History'}">
        <TabBarIcon class="image" :class="tabbarItemColor('history')" :page="'history'" />
        <div class="label">{{ $t('storybook.history') }}</div>
      </router-link>
      <router-link tag="div" class="tabbar-item" :to="{name:'Profile'}">
        <TabBarIcon class="image" :class="tabbarItemColor('profile')" :page="'profile'" />
        <div class="label">{{ $t('storybook.profile') }}</div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import TabBarIcon from '../icons/TabBarIcon.vue'

const props = defineProps({
    isBackgroundDark: {
        type: Boolean,
        default: false
    },
    currentPage: {
        type: String,
        default: ''
    }
})

function isPageActive(page) {
    switch(page) {
        case 'home':
            return props.currentPage === "FrontPage"
        case 'scan':
            return ["Checking", "CheckScan", "CheckResult"].includes(props.currentPage)
        case 'history':
            return props.currentPage === "History"
        case 'profile':
            return ["Profile", "ProfileAuth", "ProfileRegister",
                "BindingCodeScan", "BindingCodeConfirm",
                "ProfileEdit",
            ].includes(props.currentPage)
        default:
            return false
    }
}

function tabbarItemColor(page) {
    if (isPageActive(page)) {
        return 'active'
    } else if (props.isBackgroundDark) {
        return 'light'
    } else return
}
</script>

<style lang="scss">
.tabbar {
    background-color: $light-gray-55;
    width: 100%;
    padding: 0px;
    display: flex;
    flex-direction: column;

    .tabs {
        height: 50px;
        //width: 375px;
        width: calc(100% - $s-2);
        padding-left: $d-1;
        padding-right: $d-1;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        //justify-content: flex-start;
        justify-content: space-evenly;
        align-items: flex-start;
        gap: $s-3;
        position: relative;

        .tabbar-item {
            //background-color:#ffffff;
            height: 49px;
            width: 74.75px;
            align-self: flex-start;
            //left: $d-1;
            top: 0px;
            //position: absolute;
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
                font-family: Golos UI;
                left: 14.77px;
                top: 35px;
                //width: 46px;
                height: $s-1;
                //position: absolute;
                letter-spacing: -0.23999999463558197px;
                line-height: auto;
            }

            .image {
                height: $s-4;
                width: $s-4;
                padding: 0px;
                left: 25.27px;
                top: $d-1;
                //position:absolute;
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
