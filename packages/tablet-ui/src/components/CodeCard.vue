<template>
  <div class="code-card">
    <div class="code-card__code">
      <v-icon :name="codeType === 'Code128' ? 'dataMatrix' : 'barCode'" />
      <v-icon v-if="statusIcon" class="code-card__status" :name="statusIcon" />
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
import { VIcon } from "@base";
import { computed } from "vue";
const props = defineProps({
    codeType: { type: String, default: "DataMatrix" },
    codeText: { type: String, default: "" },
    status: { type: String, default: "none" },
    time: { type: String, default: "" },
    position: { type: Number, default: 0 },
});

const statusIcon = computed(() => {
    switch (props.status) {
        case "verified":
        case "synced":
            return "status-success";
        case "broken":
            return "status-error";
        default:
            return "";
    }
});
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
