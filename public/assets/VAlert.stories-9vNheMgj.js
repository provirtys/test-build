import{b as h}from"./VTable-DnoZjJu1.js";import"./VExpansionItem-8mNTCM7g.js";import"./iframe-Cpxs_JI5.js";import"./preload-helper-Dp1pzeXC.js";import"./BarcodeIcon-CtJXGP-A.js";import"./DatamatrixIcon-B55ioFzH.js";const c={success:"Зеленый",error:"Красный",info:"Синий",warning:"Желтый"},I={component:h,argTypes:{color:{description:"Цвет элемента - `success`, `error`, `info`, `warning`",options:Object.keys(c),control:{type:"select",labels:c}},text:{description:"Текст уведомления"},isBackgroundWhite:{description:"Прозрачность фона",control:{type:"boolean"}}},args:{color:"info",text:"Обычное уведомление",isBackgroundWhite:!1},parameters:{docs:{description:{component:"Компонент отображает информацию, на которую стоит обратить внимание пользователю. Фон может быть белым или с непрозрачностью 10% для выбранного цвета."}}}},r={},o={args:{color:"success"}},e={args:{color:"error"}},s={args:{color:"warning"}},a={args:{color:"error",isBackgroundWhite:!0},globals:{backgrounds:{value:"red"}}};var n,t,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(i=(t=r.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var l,p,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    color: 'success'
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,m,g;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    color: 'error'
  }
}`,...(g=(m=e.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var k,b,f;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    color: 'warning'
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var C,W,S;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    color: 'error',
    isBackgroundWhite: true
  },
  globals: {
    backgrounds: {
      value: 'red'
    }
  }
}`,...(S=(W=a.parameters)==null?void 0:W.docs)==null?void 0:S.source}}};const O=["ColorInfo","ColorSuccess","ColorError","ColorWarning","WhiteBackground"];export{e as ColorError,r as ColorInfo,o as ColorSuccess,s as ColorWarning,a as WhiteBackground,O as __namedExportsOrder,I as default};
