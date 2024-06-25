<template>
    <div class="code-card">
        <div class="code-card__code">
            <img v-if="codeType == codeTypes.CODE128" :src="barCode">
            <img v-else :src="dataMatrix">
            <img v-if="status === statuses.VERIFIED || status === statuses.SYNCED" class="code-card__status" :src="success">
            <img v-if="status === statuses.BROKEN" class="code-card__status" :src="error">
        </div>
        <div class="code-card__info">
            <p class="code-card__title">{{ codeText }}</p>
            <p class="code-card__time">{{ time }}</p>
        </div>
        <div class="code-card__position">
            {{ position }}
        </div>
    </div>
</template>

<script setup>
import dataMatrix from '../../assets/images/tablet-icons/dataMatrix.svg'
import barCode from '../../assets/images/tablet-icons/barCode.svg'
import success from '../../assets/images/tablet-icons/status-success.svg'
import error from '../../assets/images/tablet-icons/status-error.svg'
import * as codeTypes from '../../constants/codeTypes.js'
import * as statuses from '../../constants/status.js'

defineProps({
  codeType: { type: String, default: codeTypes.DATAMATRIX },
  codeText: { type: String, default: '' },
  status: { type: String, default: 'none' },
  time: { type: String, default: '' },
  position: { type: Number, default: 0 }
})
</script>

<style lang="scss">
.code-card {
    width: 100%;
    border-radius: $s-1;
    padding: $s-3;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: $secondary;

    &__code {
        position: relative;
        display: flex;
        align-items: center;
    }

    &__status {
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-30%, -30%);
        width: $s-4;
        height: $s-4;
    }

    &__info {
        flex: 1;
        margin: 0 14px;
    }

    &__title {
        font-size: $font-size-p1;
        margin: 0;
        color: $dark-gray;
    }

    &__time {
        font-size: $font-size-p3;
        margin: 0;
        color: $dark-gray-40;
    }

    &__position {
        font-size: $font-size-p1;
        color: $dark-gray-40;
        margin: 0;
        margin-bottom: auto;
        margin-top: -6px;
        margin-right: -6px;
    }
}
</style>
