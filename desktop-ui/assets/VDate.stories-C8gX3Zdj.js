import{r as b,c as g}from"./iframe-BpFT_bh4.js";import{V as s}from"./VDate-C2gxBhKK.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={component:s,argTypes:{mask:{table:{disable:!0}},locale:{table:{disable:!0}},minimal:{table:{disable:!0}},firstDayOfWeek:{table:{disable:!0}}},render:t=>({components:{VDate:s},setup(){const D=b(t.modelValue),Y=g(()=>{const{modelValue:M,...V}=t;return V});return{modelValue:D,bindingProps:Y}},template:`
      <v-date v-bind="bindingProps" v-model="modelValue"/>
      <div class="q-mt-md">
          modelValue: {{ modelValue }}
      </div>
    `}),parameters:{docs:{description:{component:"Компонент-обертка над QDate. Наследует все пропсы, слоты и эмиты от QDate."}}}},e={},a={args:{mask:"YYYY_MM_DD"}},r={args:{modelValue:new Date(Date.now()-4320*60*1e3).toLocaleDateString(),mask:"DD.MM.YYYY"}};var o,m,n;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:"{}",...(n=(m=e.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var l,d,c;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    mask: 'YYYY_MM_DD'
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var i,u,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    modelValue: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toLocaleDateString(),
    mask: 'DD.MM.YYYY'
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const w=["Standard","CustomMask","InitialValue"];export{a as CustomMask,r as InitialValue,e as Standard,w as __namedExportsOrder,v as default};
