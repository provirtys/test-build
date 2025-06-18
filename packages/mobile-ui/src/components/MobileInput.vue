<template>
  <div class="input-field">
    <label :for="inputName"
      >{{ labelText }}<span v-if="isRequired" class="input-field__required-marker">*</span></label
    >
    <input
      class="input-field__input"
      :class="{ 'input--error': errorText }"
      :placeholder="placeholder"
      :type="type"
      :id="inputName"
      :value="modelValue"
      @input="updateModelValue"
      ref="input"
    />
    <p class="input-field__error-text">{{ errorText }}</p>
  </div>
</template>

<script setup>
import { onMounted, onUpdated, ref } from "vue";
const props = defineProps({
    modelValue: { type: String, default: "" },
    inputName: { type: String, default: "" },
    isRequired: { type: Boolean, default: false },
    labelText: { type: String, default: "" },
    type: { type: String, default: "text" },
    placeholder: { type: String, default: "" },
    errorText: { type: String, default: "" },
    icon: { type: String, default: "" },
});

const emit = defineEmits(["update:modelValue"]);

const updateModelValue = ($event) => {
    emit("update:modelValue", $event.target.value);
};

const input = ref(null);

onMounted(() => {
    setIcon();
});

onUpdated(() => {
    setIcon();
});

function setIcon() {
    if (props.icon) {
        input.value.style.background = `#ffffff url(${props.icon}) no-repeat right 12px center`;
        input.value.style.backgroundSize = "31px";
        input.value.style.padding = "12px 48px 12px 16px";
    } else {
        input.value.style.background = "#ffffff";
        input.value.style.backgroundSize = "auto";
        input.value.style.padding = "12px 16px";
    }
}
</script>

<style lang="scss">
.input-field {
  display: flex;
  flex-direction: column;
  gap: $d-1;

  label {
    display: flex;
    gap: $d-1;
  }

  &__required-marker {
    color: $primary;
  }

  &__input {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: $s-1 $s-2;
    gap: $s-3;

    width: 100%;
    height: $l-2;

    background: $secondary;
    border: 1px solid #e0e0e0;
    border-radius: $d-1;

    flex: none;
    flex-grow: 0;

    &.input--error {
      border: 2px solid $primary;
    }
  }

  &__error-text {
    align-self: flex-start;
    font-size: $font-size-p5;
    line-height: $s-4;
    letter-spacing: -0.24px;
    color: $primary-70;
    padding-left: $d-1;
    text-align: left;
  }
}
</style>
