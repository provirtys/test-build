import{c}from"./iframe-BMvi5wpB.js";import{G as t}from"./VSelect-CnqL67n3.js";import"./BarcodeIcon-DFjiR5Zt.js";import"./DatamatrixIcon-BCc4cwb-.js";import"./VBadge-BHGbBCeA.js";import"./VExpansionItem-DCA6hHRU.js";import"./VIcon-CFACg57l.js";import"./VRadio-v15LJOPu.js";import"./VTable-DQX6bRF2.js";import"./preload-helper-Dp1pzeXC.js";import"./use-model-toggle-BJR_KrtC.js";import"./use-dark-64yaaoq3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./option-sizes-CT-NW1P-.js";const M={component:t,argTypes:{data:{description:"Сообщение для генерации"},size:{description:"Размер изображения",control:{type:"number"}},dark:{description:"Темный режим",control:{type:"boolean"}}},args:{data:void 0,size:180,dark:!1},render:e=>({components:{GeneratedDatamatrix:t},setup(){const m=c(()=>JSON.stringify(e.data)+e.dark);return{args:e,componentKey:m}},template:`
      <generated-datamatrix :key="componentKey" :data="args.data" :size="args.size" :dark="args.dark"/>`}),parameters:{docs:{description:{component:"Компонент для генерации Datamatrix изображения на основе получаемого сообщения. Можно менять размер изображения и переключать светлый/темный режим."}}}},a={args:{data:{name:"Вода Артезианская 1 л.",stackSize:6,palletSize:100}}},r={args:{data:{name:"Вода Артезианская 1 л.",stackSize:6,palletSize:100},dark:!0},globals:{backgrounds:{value:"dark"}}};var o,n,s;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    data: {
      name: 'Вода Артезианская 1 л.',
      stackSize: 6,
      palletSize: 100
    }
  }
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var d,i,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    data: {
      name: 'Вода Артезианская 1 л.',
      stackSize: 6,
      palletSize: 100
    },
    dark: true
  },
  globals: {
    backgrounds: {
      value: 'dark'
    }
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};const O=["Standard","DarkMode"];export{r as DarkMode,a as Standard,O as __namedExportsOrder,M as default};
