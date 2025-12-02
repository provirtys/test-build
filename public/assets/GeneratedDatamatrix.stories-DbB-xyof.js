import{G as t}from"./VTable-DnoZjJu1.js";import"./BarcodeIcon-CtJXGP-A.js";import"./DatamatrixIcon-B55ioFzH.js";import"./VExpansionItem-8mNTCM7g.js";import{c as m}from"./iframe-Cpxs_JI5.js";import"./preload-helper-Dp1pzeXC.js";const y={component:t,argTypes:{data:{description:"Сообщение для генерации"},size:{description:"Размер изображения",control:{type:"number"}},dark:{description:"Темный режим",control:{type:"boolean"}}},args:{data:void 0,size:180,dark:!1},render:r=>({components:{GeneratedDatamatrix:t},setup(){const p=m(()=>JSON.stringify(r.data)+r.dark);return{args:r,componentKey:p}},template:`
      <generated-datamatrix :key="componentKey" :data="args.data" :size="args.size" :dark="args.dark"/>`}),parameters:{docs:{description:{component:"Компонент для генерации Datamatrix изображения на основе получаемого сообщения. Можно менять размер изображения и переключать светлый/темный режим."}}}},a={args:{data:{name:"Вода Артезианская 1 л.",stackSize:6,palletSize:100}}},e={args:{data:{name:"Вода Артезианская 1 л.",stackSize:6,palletSize:100},dark:!0},globals:{backgrounds:{value:"dark"}}};var n,o,s;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    data: {
      name: 'Вода Артезианская 1 л.',
      stackSize: 6,
      palletSize: 100
    }
  }
}`,...(s=(o=a.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};var d,c,i;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const b=["Standard","DarkMode"];export{e as DarkMode,a as Standard,b as __namedExportsOrder,y as default};
