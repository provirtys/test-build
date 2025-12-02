import{r as C,c as H}from"./iframe-BMvi5wpB.js";import{h as d}from"./VSelect-CnqL67n3.js";import"./preload-helper-Dp1pzeXC.js";import"./use-model-toggle-BJR_KrtC.js";import"./use-dark-64yaaoq3.js";import"./VTable-DQX6bRF2.js";import"./option-sizes-CT-NW1P-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./BarcodeIcon-DFjiR5Zt.js";import"./DatamatrixIcon-BCc4cwb-.js";import"./VBadge-BHGbBCeA.js";import"./VExpansionItem-DCA6hHRU.js";import"./VIcon-CFACg57l.js";import"./VRadio-v15LJOPu.js";const p={lg:"Большой",md:"Средний",sm:"Маленький",xs:"Очень маленький"},m={auto:"Автоматически",dense:"В одну строку",full:"На всего родителя"},ne={component:d,argTypes:{label:{description:"Текст группы кнопок"},options:{description:"Опции для кнопок"},size:{description:"Размер кнопок <br> Поддерживаемые значения - <code>lg</code>, <code>md</code>, <code>sm</code>, <code>xs</code>",options:Object.keys(p),control:{type:"select",labels:p}},width:{description:"Ширина кнопок. ",options:Object.keys(m),control:{type:"select",labels:m}}},args:{label:"",options:[{val:"option1",modelValue:"option1",label:"Опция 1"},{val:"option2",modelValue:"option2",label:"Опция 2"},{val:"option3",modelValue:"option3",label:"Опция 3"}],modelValue:"",size:"lg",width:"auto",dark:!1},render:l=>({components:{VRadioGroup:d},setup(){const q=C(l.modelValue);return{bindingAttrs:H(()=>{const{modelValue:K,...B}=l;return B}),value:q}},template:'<v-radio-group v-model="value" v-bind="bindingAttrs" />'}),parameters:{docs:{description:{component:`Компонент для группировки радио кнопок. <br>
Можно задавать отображаемое название для группы, менять размеры кнопок и делать их в одну строку. <br>
Если нужна отдельная радио кнопка, то используй компонент [VRadio](/docs/ui-vradio--docs)`}}}},e={args:{label:"Выберите значение"}},r={},o={args:{label:"Одна опция",options:[{val:"option1",modelValue:"option1",label:"Опция 1"}]}},s={args:{size:"md"}},a={args:{size:"sm"}},t={args:{size:"xs"}},n={args:{dark:!0}},i={args:{width:"dense"}},c={args:{width:"full"}};var u,g,b;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Выберите значение'
  }
}`,...(b=(g=e.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var S,z,h;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(h=(z=r.parameters)==null?void 0:z.docs)==null?void 0:h.source}}};var v,V,f;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Одна опция',
    options: [{
      val: 'option1',
      modelValue: 'option1',
      label: 'Опция 1'
    }]
  }
}`,...(f=(V=o.parameters)==null?void 0:V.docs)==null?void 0:f.source}}};var x,k,w;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...(w=(k=s.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var O,y,A;a.parameters={...a.parameters,docs:{...(O=a.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(A=(y=a.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var W,E,j;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: 'xs'
  }
}`,...(j=(E=t.parameters)==null?void 0:E.docs)==null?void 0:j.source}}};var D,F,I;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    dark: true
  }
}`,...(I=(F=n.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var L,M,R;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    width: 'dense'
  }
}`,...(R=(M=i.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var _,G,T;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    width: 'full'
  }
}`,...(T=(G=c.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};const ie=["Standard","WithoutLabel","OneOption","MediumSize","SmallSize","ExtraSmallSize","Dark","Inline","FullWidth"];export{n as Dark,t as ExtraSmallSize,c as FullWidth,i as Inline,s as MediumSize,o as OneOption,a as SmallSize,e as Standard,r as WithoutLabel,ie as __namedExportsOrder,ne as default};
