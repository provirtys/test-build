import{i as d}from"./VTable-DnoZjJu1.js";import"./BarcodeIcon-CtJXGP-A.js";import"./DatamatrixIcon-B55ioFzH.js";import"./VExpansionItem-8mNTCM7g.js";import{r as W,c as _}from"./iframe-Cpxs_JI5.js";import"./preload-helper-Dp1pzeXC.js";const n={lg:"Большой",md:"Средний",sm:"Маленький",xs:"Очень маленький"},i={auto:"Автоматически",dense:"Уменьшенный",full:"На всего родителя"},K={component:d,argTypes:{label:{description:"Подпись к элементу"},val:{description:"Значение элемента"},size:{description:"Размер элемента. <br> Поддерживаемые значения - <code>lg</code>, <code>md</code>, <code>sm</code>, <code>xs</code>",options:Object.keys(n),control:{type:"select",labels:n}},width:{description:"Ширина элемента",options:Object.keys(i),control:{type:"select",labels:i}},dark:{description:"Темный режим",control:{type:"boolean"}}},args:{val:"option1",modelValue:"",label:"Опция 1",size:"lg",width:"auto",dark:!1},render:F=>({components:{VRadio:d},setup(){const M=W("");return{bindingAttrs:_(()=>{const{modelValue:T,...R}=F;return R}),modelValue:M}},template:`
      <v-radio v-model="modelValue" v-bind="bindingAttrs"/>`}),parameters:{docs:{description:{component:`Компонент радио кнопки. Можно менять подпись и размеры.<br>
 Чтобы создать группу радио кнопок, используй компонент [VRadioGroup](/docs/ui-vradiogroup--docs)<br>`}}}},e={},r={args:{size:"md"}},s={args:{size:"sm"}},o={args:{size:"xs"}},a={args:{width:"dense"}},t={args:{width:"full"}},c={args:{dark:!0}};var m,l,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var u,g,S;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var z,b,h;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(h=(b=s.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var f,k,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'xs'
  }
}`,...(x=(k=o.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var w,V,v;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    width: 'dense'
  }
}`,...(v=(V=a.parameters)==null?void 0:V.docs)==null?void 0:v.source}}};var y,A,D;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    width: 'full'
  }
}`,...(D=(A=t.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var E,O,j;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    dark: true
  }
}`,...(j=(O=c.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};const L=["Standard","MediumSize","SmallSize","ExtraSmallSize","Dense","FullWidth","Dark"];export{c as Dark,a as Dense,o as ExtraSmallSize,t as FullWidth,r as MediumSize,s as SmallSize,e as Standard,L as __namedExportsOrder,K as default};
