import{L as P}from"./VTable-DnoZjJu1.js";import"./BarcodeIcon-CtJXGP-A.js";import"./DatamatrixIcon-B55ioFzH.js";import"./VExpansionItem-8mNTCM7g.js";import"./iframe-Cpxs_JI5.js";import"./preload-helper-Dp1pzeXC.js";const I={component:P,argTypes:{loadingType:{description:"Тип загрузки",options:["loading","photo","connection","check","internet_false","try_again","retry"],control:{type:"select"}}},parameters:{docs:{description:{component:"Loading component with customizable massage"}}}},e={args:{loadingType:"loading"}},r={args:{loadingType:"internet_false"}},o={args:{loadingType:"photo"}};var s,a,t,n,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    loadingType: 'loading'
  }
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source},description:{story:"Происходит загрузка в базу",...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.description}}};var p,c,d,m,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    loadingType: 'internet_false'
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source},description:{story:"Нет интернет-соединения",...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.description}}};var l,y,u,T,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    loadingType: 'photo'
  }
}`,...(u=(y=o.parameters)==null?void 0:y.docs)==null?void 0:u.source},description:{story:"Идет обработка фотографии",...(h=(T=o.parameters)==null?void 0:T.docs)==null?void 0:h.description}}};const b=["Primary","InternetFalse","PhotoProcessing"];export{r as InternetFalse,o as PhotoProcessing,e as Primary,b as __namedExportsOrder,I as default};
