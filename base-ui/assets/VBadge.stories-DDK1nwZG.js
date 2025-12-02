import{c as m}from"./iframe-BMvi5wpB.js";import{V as p}from"./VBadge-BHGbBCeA.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g={success:"Зеленый",error:"Красный",info:"Синий",warning:"Желтый"},u={lg:"Большой",md:"Средний",sm:"Маленький"},$={component:p,argTypes:{label:{description:"Текст элемента"},size:{description:"Размер элемента",options:Object.keys(u),control:{type:"select",labels:u}},color:{description:"Цвет элемента",options:Object.keys(g),control:{type:"select",labels:g}},isInverted:{description:"Поменять местами цвета",control:{type:"boolean"}}},args:{label:"Название",size:"lg",color:"info",isInverted:!1},render:d=>({components:{VBadge:p},setup(){const N=m(()=>{const{label:R,...Q}=d;return Q}),P=m(()=>d.label);return{bindingArgs:N,label:P}},template:`
      <v-badge v-bind="bindingArgs">{{ label }}</v-badge>`})},r={args:{label:"Новое",size:"lg"}},e={args:{label:"Новое",size:"md"}},s={args:{label:"Новое",size:"sm"}},o={args:{label:"Новое",isInverted:!0}},a={args:{label:"Завершено",color:"success"}},n={args:{label:"Завершено",color:"success",isInverted:!0}},c={args:{label:"Отменено",color:"error"}},t={args:{label:"Отменено",color:"error",isInverted:!0}},l={args:{label:"Маркировка",color:"warning"}},i={args:{label:"Маркировка",color:"warning",isInverted:!0}};var b,v,I;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    label: 'Новое',
    size: 'lg'
  }
}`,...(I=(v=r.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var S,C,z;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Новое',
    size: 'md'
  }
}`,...(z=(C=e.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var f,y,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Новое',
    size: 'sm'
  }
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var E,W,A;o.parameters={...o.parameters,docs:{...(E=o.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Новое',
    isInverted: true
  }
}`,...(A=(W=o.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var O,j,k;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Завершено',
    color: 'success'
  }
}`,...(k=(j=a.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var x,L,M;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Завершено',
    color: 'success',
    isInverted: true
  }
}`,...(M=(L=n.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var V,_,B;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'Отменено',
    color: 'error'
  }
}`,...(B=(_=c.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var T,h,q;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Отменено',
    color: 'error',
    isInverted: true
  }
}`,...(q=(h=t.parameters)==null?void 0:h.docs)==null?void 0:q.source}}};var D,F,G;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Маркировка',
    color: 'warning'
  }
}`,...(G=(F=l.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,K;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: 'Маркировка',
    color: 'warning',
    isInverted: true
  }
}`,...(K=(J=i.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const rr=["Large","Medium","Small","ColorInfoInverted","ColorSuccess","ColorSuccessInverted","ColorError","ColorErrorInverted","ColorWarning","ColorWarningInverted"];export{c as ColorError,t as ColorErrorInverted,o as ColorInfoInverted,a as ColorSuccess,n as ColorSuccessInverted,l as ColorWarning,i as ColorWarningInverted,r as Large,e as Medium,s as Small,rr as __namedExportsOrder,$ as default};
