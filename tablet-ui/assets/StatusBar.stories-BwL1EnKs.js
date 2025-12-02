import{r as x,g as S}from"./iframe-Qc53npuj.js";import{a as C}from"./AppSettings-DLMfLkHL.js";import{b as k}from"./MainLayout-CT8nnaly.js";import"./preload-helper-Dp1pzeXC.js";import"./sleep-B5LgeCuU.js";import"./AppSettingsOptions-Be914qET.js";import"./private.use-form-DbMdEKWf.js";import"./base-ui.es-BJxydbDr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./BarChart-CrvAPWE0.js";import"./apexcharts.esm-PvBfBjQs.js";import"./BarChartTimeSeries-DFjbYa2z.js";import"./CodeCard-DteNLFZA.js";import"./FallbackLoader-D588njKg.js";import"./LabelingProgress-C3csWvr4.js";import"./ProgressPie-V3GcZL7N.js";import"./TaskCard-aiwjSP9z.js";import"./NumericRatio-CyUDWrfV.js";import"./StatusIndicator-BpsS_F8k.js";import"./TableAttributes-BmY6FmuQ.js";const{expect:o}=__STORYBOOK_MODULE_TEST__,B={home:"Домой",back:"Назад",logout:"Выйти",complete:"Завершить"},l=(t,a,u,n,p,e)=>{var f;const d=document.querySelector(".status-line .v-button__icon-container use"),m=document.querySelector(".status-line .v-button__text"),s=document.querySelector(".status-line .status-label"),g=s==null?void 0:s.querySelector(".status-indicator__dot"),y=document.querySelector(".status-line__settings-button"),b={true:{label:p?"rgba(116, 200, 32, 0.25)":"rgba(0, 0, 0, 0)",dot:"rgb(116, 200, 32)"},false:{label:p?"rgba(200, 52, 32, 0.25)":"rgba(0, 0, 0, 0)",dot:"rgb(200, 52, 32)"}};d&&m&&s&&g&&y&&(o(d.getAttribute("xlink:href")).toBe(t),o(m.textContent).toBe(a),o((f=s.textContent)==null?void 0:f.trim()).toBe(u),o(window.getComputedStyle(s).backgroundColor).toBe(b[n?"true":"false"].label),o(window.getComputedStyle(g).backgroundColor).toBe(b[n?"true":"false"].dot),o(y.classList.contains("disabled")).toBe(e))},Z={component:k,argTypes:{action:{description:"Тип кнопки перехода",options:Object.keys(B),control:{type:"select",labels:B}},statusIsReady:{description:"Статус - `Готово`/`Не готово`",control:{type:"boolean"}},statusIsAnimated:{description:"Статус - анимация",control:{type:"boolean"}},statusShowBackground:{description:"Статус - показывать задний фон",control:{type:"boolean"}},title:{description:"Наименование задачи"},isDisabled:{description:"Неактивное состояние."},status:{description:"Статус подключения. Меняется через аргументы `statusIsReady`, `statusIsAnimated` и `statusShowBackground`",table:{readonly:!0}}},args:{title:"Список заданий",action:{type:"home",fn:()=>{}},statusIsReady:!1,statusIsAnimated:!1,statusShowBackground:!1,isDisabled:!1},render:t=>({components:{StatusBar:k},setup(){const a=x(C),u=S(()=>({type:t.statusIsReady?"success":"error",sync:t.statusIsAnimated,active:t.statusShowBackground})),n=S(()=>{var e;return{type:(e=t.action)==null?void 0:e.type,to:"/"}});return{args:t,status:u,action:n,appSettingsOptions:a,onUpdateOptions:e=>{a.value=e}}},template:`
    <StatusBar :action="action" :title="args.title" :status="status" :is-disabled="args.isDisabled">
      <template #append>
        <app-settings :options="appSettingsOptions" :is-disabled="args.isDisabled" @update:options="onUpdateOptions"/>
      </template>
    </StatusBar>`}),parameters:{docs:{description:{component:"Компонент верхней части приложения. <br>\nСодержит:\n - Одну из кнопок действия - `Домой`, `Назад`, `Выход`\n - Заголовок текущего контекста приложения\n - Статус бэкенда\n - Кнопку для настроек приложения (через слот `append`)"}}}},r={play:()=>{l("#icon-home","Домой","Не готово",!1,!1,!1)}},i={args:{statusIsReady:!0,action:{type:"back",fn:()=>{}},isDisabled:!0},play:()=>{l("#icon-arrow-back","Назад","Готово",!0,!1,!0)}},c={args:{statusIsReady:!0,statusIsAnimated:!0,statusShowBackground:!0,action:{type:"logout",fn:()=>{}}},play:()=>{l("#icon-logout-dark","Выход","Готово",!0,!0,!1)}};var I,_,R;r.parameters={...r.parameters,docs:{...(I=r.parameters)==null?void 0:I.docs,source:{originalSource:`{
  play: () => {
    testElements('#icon-home', 'Домой', 'Не готово', false, false, false);
  }
}`,...(R=(_=r.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var h,w,A;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    statusIsReady: true,
    action: {
      type: 'back',
      fn: () => {}
    },
    isDisabled: true
  },
  play: () => {
    testElements('#icon-arrow-back', 'Назад', 'Готово', true, false, true);
  }
}`,...(A=(w=i.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var O,E,D;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    statusIsReady: true,
    statusIsAnimated: true,
    statusShowBackground: true,
    action: {
      type: 'logout',
      fn: () => {}
    }
  },
  play: () => {
    testElements('#icon-logout-dark', 'Выход', 'Готово', true, true, false);
  }
}`,...(D=(E=c.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};const $=["HomeNotReady","BackReadySettingsDisabled","LogoutReadyWithBackgroundAndAnimation"];export{i as BackReadySettingsDisabled,r as HomeNotReady,c as LogoutReadyWithBackgroundAndAnimation,$ as __namedExportsOrder,Z as default};
