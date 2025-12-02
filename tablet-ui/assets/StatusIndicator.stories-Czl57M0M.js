import{S as v}from"./StatusIndicator-BpsS_F8k.js";import"./iframe-Qc53npuj.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const a={info:"Синий",success:"Зеленый",error:"Красный",warning:"Желтый"},_={component:v,argTypes:{color:{description:"Цвет статуса",options:Object.keys(a),control:{type:"radio",labels:a}},isAnimate:{description:"Анимированное состояние иконки",options:[!0,!1]}},args:{isAnimate:!0},parameters:{backgrounds:{default:"white",values:[{name:"dark",value:"#242a2b"},{name:"white",value:"#ffffff"},{name:"light",value:"#ededed"},{name:"light-gray",value:"#f1f1f1"}]},docs:{description:{component:"Компонент для отображения статуса сервиса. Можно регулировать цвет и включать/отключать анимацию."}}}},r={args:{color:"info"}},e={args:{color:"warning"}},o={args:{color:"success"}},s={args:{color:"error"}};var c,n,t;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    color: 'info'
  }
}`,...(t=(n=r.parameters)==null?void 0:n.docs)==null?void 0:t.source}}};var i,m,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: 'warning'
  }
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,d,l;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    color: 'success'
  }
}`,...(l=(d=o.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var g,f,S;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    color: 'error'
  }
}`,...(S=(f=s.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const k=["Info","Warning","Success","_Error"];export{r as Info,o as Success,e as Warning,s as _Error,k as __namedExportsOrder,_ as default};
