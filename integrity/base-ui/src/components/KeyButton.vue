<template>
    <div class="key" @click="pressed">
        <img class="icon" v-if="value === 'Back'" alt="" src="../assets/images/backspace.svg"/>
        <span v-else class="key__text">{{value}}</span>
    </div>
</template>

<script setup>
const props = defineProps({
  /** Значение кнопки*/
    value: { type: String, default: '' },
})

const emit = defineEmits(['pressed'])

function pressed () {
    emit('pressed', props.value)
}
</script>

<style lang="scss">
@import '../css/main.scss';

.key {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: $xxl-2;
    height: 45px;
    background: $secondary;
    border-radius: $d-0;
    font-size: $font-size-h6;
    margin-right: 10px;
    box-shadow: 0 1px 1px rgba($dark-gray, .3);
    outline: none !important;

    &:active {
        top: 1px;
        box-shadow: none;
    }

    &:last-child {
        margin-right: 0;
    }

    .icon {
        max-height: 45px;
    }
  &__text {
    font-family: Ubuntu-regular, serif;
    font-size: $m-2;
    margin-bottom: 10px;
  }
}
</style>
