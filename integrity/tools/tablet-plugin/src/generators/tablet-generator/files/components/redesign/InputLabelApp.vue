<template>
  <div class="amount" :class="[{'not-empty': amount > 0}, buttonSize]">
    <q-input v-model.number="amount" pattern="[0-9]*" inputmode="numeric" type="number" :label="label"
             stack-label outlined placeholder="0">
      <template v-slot:prepend>
        <q-icon v-if="isIcon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 5.48135C12.8425 5.48135 15.3775 7.07885 16.615 9.60635C16.1725 10.5213 15.55 11.3088 14.8075 11.9463L15.865 13.0038C16.9075 12.0813 17.7325 10.9263 18.25 9.60635C16.9525 6.31385 13.75 3.98135 10 3.98135C9.0475 3.98135 8.1325 4.13135 7.27 4.40885L8.5075 5.64635C8.995 5.54885 9.49 5.48135 10 5.48135ZM9.1975 6.33635L10.75 7.88885C11.1775 8.07635 11.5225 8.42135 11.71 8.84885L13.2625 10.4013C13.3225 10.1463 13.3675 9.87635 13.3675 9.59885C13.375 7.73885 11.86 6.23135 10 6.23135C9.7225 6.23135 9.46 6.26885 9.1975 6.33635ZM2.5075 3.88385L4.5175 5.89385C3.295 6.85385 2.3275 8.12885 1.75 9.60635C3.0475 12.8988 6.25 15.2313 10 15.2313C11.14 15.2313 12.235 15.0138 13.24 14.6163L15.805 17.1813L16.8625 16.1238L3.565 2.81885L2.5075 3.88385ZM8.1325 9.50885L10.09 11.4663C10.06 11.4738 10.03 11.4813 10 11.4813C8.965 11.4813 8.125 10.6413 8.125 9.60635C8.125 9.56885 8.1325 9.54635 8.1325 9.50885ZM5.5825 6.95885L6.895 8.27135C6.7225 8.68385 6.625 9.13385 6.625 9.60635C6.625 11.4663 8.14 12.9813 10 12.9813C10.4725 12.9813 10.9225 12.8838 11.3275 12.7113L12.0625 13.4463C11.4025 13.6263 10.7125 13.7313 10 13.7313C7.1575 13.7313 4.6225 12.1338 3.385 9.60635C3.91 8.53385 4.675 7.64885 5.5825 6.95885Z"
                fill="#22292A" fill-opacity="0.55"/>
          </svg>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";

const props = defineProps({
  height: {type: String, default: 'large'},
  isIcon: {type: Boolean, default: false},
  label: {type: String, default: 'Label'}
})

const amount = ref(undefined)

const buttonSize = computed(() => {
  switch (props.height) {
    case 'medium':
    case 'small':
    case 'extra-small':
      return props.height
    default:
      return 'large'
  }
})
</script>

<style lang="scss">
.amount {
  .q-field__control {
    display: flex;
    align-items: center;
    font-family: Golos UI;
    font-size: $font-size-h6;
    line-height: $s-4;
    flex-direction: row-reverse;
  }

  //Medium (M)
  &.large .q-field__control {
    height: $xxl-4;
  }

  &.large .q-field__native {
    padding-top: $m-2;
    padding-bottom: $m-2;
  }

  &.large .q-field--labeled {
    padding-top: $s-4;
    padding-bottom: $s-4;
  }

  //Medium (M)
  &.medium .q-field__control {
    height: $xl-4;
  }

  &.medium .q-field__native {
    padding-top: $s-4;
    padding-bottom: $s-4;
  }

  &.medium .q-field--labeled {
    padding-top: $s-4;
    padding-bottom: $s-4;
  }

  //Small (S)
  &.small .q-field__control {
    height: $l-4;
    font-size: $font-size-p1;
  }

  &.small .q-field__native {
    padding-top: 18px;
    padding-bottom: 18px;
  }

  &.small .q-field--labeled {
    padding-top: 18px;
    padding-bottom: 18px;
  }
  &.small .q-field--float .q-field__label  {
    font-size: $font-size-p6;
  }

  //Extra small (XS)
  &.extra-small .q-field__control {
    height: $l-1;
    font-size: $font-size-p1;
  }

  &.extra-small .q-field__native {
    padding-top: $s-1;
    padding-bottom: $s-1;
  }

  &.extra-small .q-field--labeled {
    padding-top: $s-1;
    padding-bottom: $s-1;
  }

  &.extra-small .q-field--float .q-field__label  {
    font-size: $font-size-p6;
  }

  .q-field--float .q-field__label {
    transform: translateY(-110%);
    background: $light-gray-55;
    padding: $d-0;
    z-index: 2;
    color: $dark-gray-70;
    font-size: $font-size-p5;
    font-family: Golos UI;
  }

  .q-field--outlined .q-field__control {
    color: inherit;
    padding: 0 $s-2;
    border-radius: $d-1;
  }

  .q-field--focused .q-field__control {
    color: $primary-text !important;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type=number] {
    -moz-appearance: textfield;
  }

  .q-field--labeled {
    color: $dark-gray-70;
    font-family: Golos UI;
  }

  .q-field__native {
    color: $dark-gray;
    font-family: Golos UI;
  }

  //Ширина рамки при активном элементе
  .q-field--outlined.q-field--highlighted .q-field__control:after {
    border-color: currentColor;
    border-width: 1px;
  }

  .q-field--outlined .q-field__control:after {
    border: 1px solid transparent;
  }

  // стили для иконки
  .q-field__prepend {
    padding-right: 0;
  }

  //если заполнили и нажали за пределами инпута, рамка остатся черной, т.е. стандартное состояние + черная рамка.
  &.not-empty .q-field__control:before {
    border: 1px solid $dark-gray;
    transition: border-color 0.36s cubic-bezier(0.4, 0, 0.2, 1);
  }
}
.q-icon {
  width: 20px;
  height: 20px;
}
</style>
