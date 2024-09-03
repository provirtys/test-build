<template>
  <!--  Стрелка-->
  <svg v-if="props.icon === 'arrowIcon'" class="pointer-icon" :width="props.iconSize" :height="props.iconSize" viewBox="0 0 29 28"
       fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2001_6362)">
      <path
          d="M19.644 15.1048H4.80469V12.8953H19.644L12.7695 6.02079L14.3333 4.46674L23.8666 14L14.3333 23.5286L12.7695 21.9792L19.644 15.1048Z"
          fill="currentColor"/>
    </g>
    <defs>
      <clipPath id="clip0_2001_6362">
        <rect width="28" height="28" fill="white" transform="translate(0.333008)"/>
      </clipPath>
    </defs>
  </svg>
  <!--Открыть задачу-->
  <svg v-if="props.icon === 'openTaskIcon'" class="pointer-icon" :width="props.iconSize" :height="props.iconSize" viewBox="0 0 36 36"
       fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2105_4774)">
      <path
          d="M28.5 12H27V4.5H9V12H7.5C5.01 12 3 14.01 3 16.5V25.5H9V31.5H27V25.5H33V16.5C33 14.01 30.99 12 28.5 12ZM12 7.5H24V12H12V7.5ZM24 28.5H12V22.5H24V28.5ZM27 22.5V19.5H9V22.5H6V16.5C6 15.675 6.675 15 7.5 15H28.5C29.325 15 30 15.675 30 16.5V22.5H27Z"
          fill="currentColor"/>
      <path
          d="M27 18.75C27.8284 18.75 28.5 18.0784 28.5 17.25C28.5 16.4216 27.8284 15.75 27 15.75C26.1716 15.75 25.5 16.4216 25.5 17.25C25.5 18.0784 26.1716 18.75 27 18.75Z"
          fill="currentColor"/>
    </g>
    <defs>
      <clipPath id="clip0_2105_4774">
        <rect width="36" height="36" fill="currentColor"/>
      </clipPath>
    </defs>
  </svg>
  <!--Новое задание-->
  <svg v-if="props.icon === 'newTaskIcon'" class="pointer-icon" :width="props.iconSize" viewBox="0 0 36 36" fill="none"
       xmlns="http://www.w3.org/2000/svg">
    <path d="M28.5 19.5H19.5V28.5H16.5V19.5H7.5V16.5H16.5V7.5H19.5V16.5H28.5V19.5Z" fill="currentColor"/>
  </svg>

  <!--Начать маркировку-->
<!--  <svg v-if="props.icon === 'startLabelingIcon'" :width="props.iconSize" :height="props.iconSize" viewBox="0 0 36 36"-->
<!--       fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--    <g clip-path="url(#clip0_2105_4774)">-->
<!--      <path-->
<!--          d="M28.5 12H27V4.5H9V12H7.5C5.01 12 3 14.01 3 16.5V25.5H9V31.5H27V25.5H33V16.5C33 14.01 30.99 12 28.5 12ZM12 7.5H24V12H12V7.5ZM24 28.5H12V22.5H24V28.5ZM27 22.5V19.5H9V22.5H6V16.5C6 15.675 6.675 15 7.5 15H28.5C29.325 15 30 15.675 30 16.5V22.5H27Z"-->
<!--          fill="currentColor"/>-->
<!--      <path-->
<!--          d="M27 18.75C27.8284 18.75 28.5 18.0784 28.5 17.25C28.5 16.4216 27.8284 15.75 27 15.75C26.1716 15.75 25.5 16.4216 25.5 17.25C25.5 18.0784 26.1716 18.75 27 18.75Z"-->
<!--          fill="currentColor"/>-->
<!--    </g>-->
<!--    <defs>-->
<!--      <clipPath id="clip0_2105_4774">-->
<!--        <rect width="36" height="36" fill="currentColor"/>-->
<!--      </clipPath>-->
<!--    </defs>-->
<!--  </svg>-->
  <!--  Подтвердить-->
  <svg v-if="props.icon === 'verifyIcon'" class="pointer-icon" :width="props.iconSize" :height="props.iconSize" viewBox="0 0 36 36"
       fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2105_7302)">
      <path
          d="M13.1916 23.8134L6.93664 17.5584L4.80664 19.6734L13.1916 28.0584L31.1916 10.0584L29.0766 7.94336L13.1916 23.8134Z"
          fill="currentColor"/>
    </g>
    <defs>
      <clipPath id="clip0_2105_7302">
        <rect width="36" height="36" fill="currentColor"/>
      </clipPath>
    </defs>
  </svg>
  <!--  Печать этикетки-->
  <svg v-if="props.icon === 'labelPrintingIcon'" class="pointer-icon" :width="props.iconSize" :height="props.iconSize" viewBox="0 0 36 36"
       fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2105_3186)">
      <path
          d="M24 31.5H7.5C6.675 31.5 5.96875 31.2063 5.38125 30.6188C4.79375 30.0313 4.5 29.325 4.5 28.5V7.5C4.5 6.675 4.79375 5.96875 5.38125 5.38125C5.96875 4.79375 6.675 4.5 7.5 4.5H28.5C29.325 4.5 30.0313 4.79375 30.6188 5.38125C31.2063 5.96875 31.5 6.675 31.5 7.5V24L24 31.5ZM22.5 28.5V25.5C22.5 24.675 22.7938 23.9688 23.3813 23.3813C23.9688 22.7938 24.675 22.5 25.5 22.5H28.5V7.5H7.5V28.5H22.5ZM16.5 24H19.5V15H24V12H12V15H16.5V24Z"
          fill="currentColor"/>
    </g>
    <defs>
      <clipPath id="clip0_2105_3186">
        <rect width="36" height="36" fill="currentColor"/>
      </clipPath>
    </defs>
  </svg>
  <!--  Начать агрегацию-->
  <svg v-if="props.icon === 'startAggregationIcon'" class="pointer-icon" :width="props.iconSize" :height="props.iconSize" viewBox="0 0 36 36"
       fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M4.5 7.5H7.5V4.5C5.85 4.5 4.5 5.85 4.5 7.5ZM4.5 19.5H7.5V16.5H4.5V19.5ZM10.5 31.5H13.5V28.5H10.5V31.5ZM4.5 13.5H7.5V10.5H4.5V13.5ZM19.5 4.5H16.5V7.5H19.5V4.5ZM28.5 4.5V7.5H31.5C31.5 5.85 30.15 4.5 28.5 4.5ZM7.5 31.5V28.5H4.5C4.5 30.15 5.85 31.5 7.5 31.5ZM4.5 25.5H7.5V22.5H4.5V25.5ZM13.5 4.5H10.5V7.5H13.5V4.5ZM16.5 31.5H19.5V28.5H16.5V31.5ZM28.5 19.5H31.5V16.5H28.5V19.5ZM28.5 31.5C30.15 31.5 31.5 30.15 31.5 28.5H28.5V31.5ZM28.5 13.5H31.5V10.5H28.5V13.5ZM28.5 25.5H31.5V22.5H28.5V25.5ZM22.5 31.5H25.5V28.5H22.5V31.5ZM22.5 7.5H25.5V4.5H22.5V7.5ZM10.5 25.5H25.5V10.5H10.5V25.5ZM13.5 13.5H22.5V22.5H13.5V13.5Z"
        fill="currentColor"/>
  </svg>
  <!--  Единичная маркировка-->
<!--  <svg v-if="props.icon === 'singleMarkingIcon'" :width="props.iconSize" :height="props.iconSize" viewBox="0 0 36 36"-->
<!--       fill="none" xmlns="http://www.w3.org/2000/svg">-->
<!--    <g clip-path="url(#clip0_2105_3186)">-->
<!--      <path-->
<!--          d="M24 31.5H7.5C6.675 31.5 5.96875 31.2063 5.38125 30.6188C4.79375 30.0313 4.5 29.325 4.5 28.5V7.5C4.5 6.675 4.79375 5.96875 5.38125 5.38125C5.96875 4.79375 6.675 4.5 7.5 4.5H28.5C29.325 4.5 30.0313 4.79375 30.6188 5.38125C31.2063 5.96875 31.5 6.675 31.5 7.5V24L24 31.5ZM22.5 28.5V25.5C22.5 24.675 22.7938 23.9688 23.3813 23.3813C23.9688 22.7938 24.675 22.5 25.5 22.5H28.5V7.5H7.5V28.5H22.5ZM16.5 24H19.5V15H24V12H12V15H16.5V24Z"-->
<!--          fill="currentColor"/>-->
<!--    </g>-->
<!--    <defs>-->
<!--      <clipPath id="clip0_2105_3186">-->
<!--        <rect width="36" height="36" fill="currentColor"/>-->
<!--      </clipPath>-->
<!--    </defs>-->
<!--  </svg>-->
  <!--  Сканировать-->
<!--  <svg v-if="props.icon === 'scanIcon'" :width="props.iconSize" :height="props.iconSize" viewBox="0 0 36 36" fill="none"-->
<!--       xmlns="http://www.w3.org/2000/svg">-->
<!--    <g clip-path="url(#clip0_2105_2679)">-->
<!--      <path-->
<!--          d="M9 19.9275C9 17.4525 10.005 15.2025 11.64 13.5675L9.51 11.4375C7.35 13.6125 6 16.6125 6 19.9275C6 26.0475 10.575 31.0875 16.5 31.8225V28.7925C12.255 28.0725 9 24.3825 9 19.9275ZM30 19.9275C30 13.2975 24.63 7.92749 18 7.92749C17.91 7.92749 17.82 7.94249 17.73 7.94249L19.365 6.30749L17.25 4.17749L12 9.42749L17.25 14.6775L19.365 12.5625L17.745 10.9425C17.835 10.9425 17.925 10.9275 18 10.9275C22.965 10.9275 27 14.9625 27 19.9275C27 24.3825 23.745 28.0725 19.5 28.7925V31.8225C25.425 31.0875 30 26.0475 30 19.9275Z"-->
<!--          fill="currentColor"/>-->
<!--    </g>-->
<!--    <defs>-->
<!--      <clipPath id="clip0_2105_2679">-->
<!--        <rect width="36" height="36" fill="currentColor"/>-->
<!--      </clipPath>-->
<!--    </defs>-->
<!--  </svg>-->
  <!--  Закончить агрегацию-->
  <svg v-if="props.icon === 'finishAggregationIcon'" class="pointer-icon" :width="props.iconSize" :height="props.iconSize"
       viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2105_3794)">
      <path
          d="M5.56539 18.4349H8.56539V15.4349H5.56539V18.4349ZM11.5654 30.4349H14.5654V27.4349H11.5654V30.4349ZM20.5654 3.4349H17.5654V6.4349H20.5654V3.4349ZM29.5654 3.4349V6.4349H32.5654C32.5654 4.7849 31.2154 3.4349 29.5654 3.4349ZM8.56539 30.4349V27.4349H5.56539C5.56539 29.0849 6.91539 30.4349 8.56539 30.4349ZM5.56539 24.4349H8.56539V21.4349H5.56539V24.4349ZM17.5654 30.4349H20.5654V27.4349H17.5654V30.4349ZM29.5654 18.4349H32.5654V15.4349H29.5654V18.4349ZM29.5654 12.4349H32.5654V9.4349H29.5654V12.4349ZM23.5654 6.4349H26.5654V3.4349H23.5654V6.4349ZM12.8104 6.4349L11.5654 5.1899V3.4349H14.5654V6.4349H12.8104ZM30.8104 24.4349L29.5654 23.1899V21.4349H32.5654V24.4349H30.8104ZM32.8504 30.7199L5.28039 3.1499L3.15039 5.2649L7.32039 9.4349H5.56539V12.4349H8.56539V10.6799L11.5654 13.6799V24.4349H22.3204L25.3204 27.4349H23.5654V30.4349H26.5654V28.6799L30.7354 32.8499L32.8504 30.7199ZM14.5654 21.4349V16.6799L19.3204 21.4349H14.5654ZM23.5654 17.1899V12.4349H18.8104L15.8104 9.4349H26.5654V20.1899L23.5654 17.1899Z"
          fill="currentColor"/>
    </g>
    <defs>
      <clipPath id="clip0_2105_3794">
        <rect width="36" height="36" fill="currentColor"/>
      </clipPath>
    </defs>
  </svg>
  <!--  Брак маркировки-->
  <svg v-if="props.icon === 'badIcon'" class="pointer-icon" :width="props.iconSize" :height="props.iconSize" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_2130_7962)">
      <path d="M18 3L6 7.5V16.635C6 24.21 11.115 31.275 18 33C24.885 31.275 30 24.21 30 16.635V7.5L18 3ZM27 16.635C27 22.635 23.175 28.185 18 29.88C12.825 28.185 9 22.65 9 16.635V9.585L18 6.21L27 9.585V16.635ZM14.865 12.75L12.75 14.865L15.885 18L12.75 21.135L14.865 23.25L18 20.13L21.135 23.25L23.25 21.135L20.13 18L23.25 14.865L21.135 12.75L18 15.885L14.865 12.75Z" fill="currentColor"/>
    </g>
    <defs>
      <clipPath id="clip0_2130_7962">
        <rect width="36" height="36" fill="currentColor"/>
      </clipPath>
    </defs>
  </svg>
  <!--  Повторить маркировку-->
  <svg v-if="props.icon === 'restartIcon'" class="pointer-icon" :width="props.iconSize" :height="props.iconSize" viewBox="0 0 36 36"
       fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
        d="M9 19.9275C9 17.4525 10.005 15.2025 11.64 13.5675L9.51 11.4375C7.35 13.6125 6 16.6125 6 19.9275C6 26.0475 10.575 31.0875 16.5 31.8225V28.7925C12.255 28.0725 9 24.3825 9 19.9275ZM30 19.9275C30 13.2975 24.63 7.92749 18 7.92749C17.91 7.92749 17.82 7.94249 17.73 7.94249L19.365 6.30749L17.25 4.17749L12 9.42749L17.25 14.6775L19.365 12.5625L17.745 10.9425C17.835 10.9425 17.925 10.9275 18 10.9275C22.965 10.9275 27 14.9625 27 19.9275C27 24.3825 23.745 28.0725 19.5 28.7925V31.8225C25.425 31.0875 30 26.0475 30 19.9275Z"
        fill="currentColor"/>
  </svg>
</template>

<script setup>
const props = defineProps({
  iconSize: {type: Number, default: null},
  icon: {type: String, default: ''}
})
</script>

<style lang="scss">
.pointer-icon {
  pointer-events: none;
}
</style>
