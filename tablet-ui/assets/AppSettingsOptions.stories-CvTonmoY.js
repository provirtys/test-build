import{r as u,N as s}from"./iframe-Qc53npuj.js";import{A as n}from"./AppSettingsOptions-Be914qET.js";import"./preload-helper-Dp1pzeXC.js";import"./private.use-form-DbMdEKWf.js";import"./base-ui.es-BJxydbDr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const c={inputs:{input1:{label:"Поле ввода 1",value:"",resetFn(){this.value=""}},input2:{label:"Поле ввода 2",value:"",resetFn(){this.value=""}}},buttons:{button1:{label:"Кнопка 1",fn(){s.create({message:"Сообщение"})}},button2:{label:"Кнопка 2",fn(){s.create({message:"Сообщение 2"})}}}},m={flags:{flag1:{label:"Флажок 1",value:!1},flag2:{label:"Флажок 2",value:!0}},buttons:{button1:{label:"Кнопка 1",fn(){s.create({message:"Сообщение"})}}}},h={component:n,argTypes:{options:{description:"Настройки компонента"}},render:b=>({components:{AppSettingsOptions:n},setup(){return{appSettingsOptions:u(b.options)}},template:'<app-settings-options :options="appSettingsOptions" />'}),parameters:{docs:{description:{component:`Компонент для непосредственного отображения настроек приложения<br>
Поддерживает три типа элементов, сгруппированных по типам:<br>
<br>
**inputs** - поля ввода<br>
\`label\` - отображаемая подпись для поля ввода<br>
\`value\` - значение поля (модель)<br>
\`resetFn\` - функция, вызываемая при сбросе значения<br>
<br>
**buttons** - кнопки<br>
\`label\` - текст внутри кнопки<br>
\`fn\` - функция-обработчик кнопки<br>
<br>
**flags** - чекбоксы<br>
\`label\` - подпись элемента<br>
\`value\` - значение флага (true/false)<br>
<br>
Порядок отображения групп соответствует порядку следования ключей в объекте настроек<br>`}}}},t={args:{options:c}},e={args:{options:m}};var o,r,a;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    options: options1
  }
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var p,i,l;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    options: options2
  }
}`,...(l=(i=e.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const x=["Options1","Options2"];export{t as Options1,e as Options2,x as __namedExportsOrder,h as default};
