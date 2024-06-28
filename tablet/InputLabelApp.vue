<template>
  <div class="input-amount">
    <div class="full-width">
      <q-input v-model.number="amount" pattern="[0-9]*" inputmode="numeric" type="number" label="$t('amount')"
               stack-label outlined autofocus/>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";

const amount = ref(0)
</script>

<style lang="scss">
.q-radio__label {
  font-size: $font-size-h6;
  margin-left: $s-1;
}

.input-amount {
  width: 360px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: $s-3;
  align-items: center;
  border-radius: $s-3;
  background: $secondary;
  font-family: Golos UI;

  .q-field__label {
    top: 0;
    background: $secondary;
    padding: 0 6px;
    z-index: 10;
  }

  .q-field__native {
    font-size: $font-size-h6;
    padding: 6px 0;
  }

  .q-field__control {
    color: $primary;
    background: $secondary;
  }
}

//&__title {
//  font-size: $font-size-p3;
//  margin-bottom: $m-2;
//  text-align: left;
//  width: 100%;
//  font-family: "Golos UI-medium";
//}

</style>
