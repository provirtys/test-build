import{h as u}from"./base-ui.es-D_bKqeCp.js";import{V as e}from"./VFormRow-DKlbCTdv.js";import"./iframe-BpFT_bh4.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const y={component:e,argTypes:{columns:{description:"Количество колонок"}},args:{columns:1},render:p=>({components:{VFormRow:e,VInput:u},setup(){return{args:p}},template:`
      <v-form-row :columns="args.columns">
        <v-input v-for="(_, key) in Array.from({length:args.columns})"
                 :key="key"
                 outlined
                 :label="'Поле ввода ' + (key + 1)"/>
      </v-form-row>
    `}),parameters:{docs:{description:{component:"Компонент для вывода полей формы в одной строке в несколько равных колонок"}}}},o={},r={args:{columns:2}};var s,n,m;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:"{}",...(m=(n=o.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var a,t,c;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    columns: 2
  }
}`,...(c=(t=r.parameters)==null?void 0:t.docs)==null?void 0:c.source}}};const w=["OneColumn","TwoColumns"];export{o as OneColumn,r as TwoColumns,w as __namedExportsOrder,y as default};
