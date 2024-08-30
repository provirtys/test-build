<template>
    <div class="loading-animation__wrapper">
        <img class="animation__bg" src="images/loading.svg" alt="" />
        <img class="animation animation_25" src="images/loading-part.svg" alt="" />
        <img class="animation animation_50" src="images/loading-part.svg" alt="" />
        <img class="animation animation_75" src="images/loading-part.svg" alt="" />
        <img class="animation animation_100" src="images/loading-part.svg" alt="" />
    </div>
</template>

<script setup></script>

<style lang="scss">
@keyframes loading {
  0% {
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  60% {
    opacity: 0;
  }
  100% {
    opacity: 0;
  }
}

.loading-animation__wrapper {
    position: relative;
    z-index: 2;

    .animation {
        position: absolute;
        top: 0;
        right: 0;
        animation-name: loading;
        animation-duration: 4s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
        opacity: 0;

        &__bg {
            margin-bottom: 50px;
        }

        &_25 {
            animation-delay: 0s;
            transform: rotate(0deg);
        }

        &_50 {
            animation-delay: .3s;
            transform: rotate(90deg);
        }

        &_75 {
            animation-delay: .6s;
            transform: rotate(180deg);
        }

        &_100 {
            animation-delay: .9s;
            transform: rotate(270deg);
        }
    }
}
</style>
