<template>
    <header class="header ">
        <div class="header__content">
            <img v-if="isMain" class="header__logo" src="../assets/images/logo_favicon.svg" alt="Integrity" @click="toHomePage" />
            <img v-else class="header__back" src="../assets/images/back-arrow.svg" alt="Back" @click="onBackButton" />
            <div class="header__factory-name">{{ factoryName }}</div>
        </div>
        <transition name="fade" mode="out-in">
            <div v-if="needLogout" class="header__logout">
                <img @click="logout" class="header__logout-icon" src="../assets/images/logout.svg" alt="Log out"/>
            </div>
        </transition>
    </header>
</template>

<script setup>
// import * as constants from '../constants/common'
import { useRouter, useRoute } from 'vue-router'

const router = useRouter()
const route = useRoute()

const props = defineProps({
  /** Переключение логотипа*/
  isMain: { type: Boolean, default: true },
  /** Наименование организации*/
    factoryName: { type: String, default: 'integrity' },
  /** Кнопка выхода*/
  needLogout: { type: Boolean, default: false }
})

function logout () {
    router.push({ name: 'Auth' })
}
function onBackButton () {
    if (route.name === 'ScanMode') {
        // this.$store.commit('logout')
        router.push({ name: 'Auth' })
    } else {
        router.go(-1)
    }
}
function toHomePage() {
    router.push({ name: "BindFactory" })
}
</script>

<style scoped lang="scss">
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: $xl-1;
    padding: 0 $m-4;
    border-bottom: 1px solid $dark-gray-40;

    &__content {
        display: flex;
        align-items: center;
    }

    &__logo, &__back {
        margin-right: 10px;
        width: 35px;
        height: 35px;
        cursor: pointer;
    }

    &__factory-name {
        padding: 0 $m-4;
        margin-bottom: 10px;
        font-family: Garamond-medium, serif;
        font-size: 34px;
        letter-spacing: 3px;
        line-height: $line-height-100;
    }

    &__logout {
        display: flex;
        align-items: center;
        margin-left: auto;

        &-icon {
            margin-left: 10px;
            width: 35px;
            height: 35px;
        }
    }
}

@media only screen and (orientation: portrait) {
    .header {
        padding: 0 $s-3;

        &__factory-name {
            display: none;
        }
    }
}
</style>
