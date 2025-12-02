import{r as a}from"./iframe-Qc53npuj.js";import{A as e,a as r}from"./AppSettings-DLMfLkHL.js";import"./AppSettingsOptions-Be914qET.js";import"./preload-helper-Dp1pzeXC.js";import"./sleep-B5LgeCuU.js";import"./base-ui.es-BJxydbDr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./private.use-form-DbMdEKWf.js";const U={component:e,argTypes:{options:{description:"Все настройки компонента, включающая настройки для пользователя и разработчика"}},parameters:{docs:{description:{component:`Компонент с настройками приложения как для пользователя, так и для разработчика.<br>
Более подробно на странице [AppSettingsOptions](?path=/docs/blocks-appsettingsoptions--docs)`}}}},c=()=>({components:{AppSettings:e},setup(){const p=a(r);return{appSettingsOptions:p,onUpdateOptions:i=>{p.value=i}}},template:'<app-settings :options="appSettingsOptions" @update:options="onUpdateOptions" />'}),t=c.bind({});var o,s,n;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`() => ({
  components: {
    AppSettings
  },
  setup() {
    const appSettingsOptions = ref(appSettings);
    const onUpdateOptions = (opt: AppSettingsConf) => {
      appSettingsOptions.value = opt;
    };
    return {
      appSettingsOptions,
      onUpdateOptions
    };
  },
  template: '<app-settings :options="appSettingsOptions" @update:options="onUpdateOptions" />'
})`,...(n=(s=t.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const b=["Standard"];export{t as Standard,b as __namedExportsOrder,U as default};
