import{r as w}from"./iframe-Cpxs_JI5.js";import{k as n}from"./VTable-DnoZjJu1.js";import"./preload-helper-Dp1pzeXC.js";import"./VExpansionItem-8mNTCM7g.js";import"./BarcodeIcon-CtJXGP-A.js";import"./DatamatrixIcon-B55ioFzH.js";const z=[{label:"Опция 1",value:"opt1"},{label:"Опция 2",value:"opt2"},{label:"Опция 3",value:"opt3"},{label:"Опция 4",value:"opt4"},{label:"Опция 5",value:"opt5"},{label:"Опция 6",value:"opt6"},{label:"Опция 7",value:"opt7"},{label:"Опция 8",value:"opt8"},{label:"Опция 9",value:"opt9"},{label:"Опция 10",value:"opt10"},{label:"Опция 11",value:"opt11"},{label:"Опция 12",value:"opt12"},{label:"Опция 13",value:"opt13"},{label:"Опция 14",value:"opt14"},{label:"Опция 15",value:"opt15"},{label:"Опция 16",value:"opt16"},{label:"Опция 17",value:"opt17"},{label:"Опция 18",value:"opt18"},{label:"Опция 19",value:"opt19"},{label:"Опция 20",value:"opt20"}],u=[{label:"029000000001381",labelLight:"Вода минеральная 0.3 л.",value:"opt1"},{label:"029000000001382",labelLight:"Вода минеральная 0.5 л.",value:"opt2"},{label:"029000000001383",labelLight:"Вода минеральная 1 л.",value:"opt3"},{label:"029000000001384",labelLight:"Вода минеральная 2 л.",value:"opt4"},{label:"029000000001385",labelLight:"Вода минеральная 5 л.",value:"opt5"}],P={component:n,argTypes:{label:{description:"Текст внутри селекта",table:{category:"props"}},outsideLabel:{description:"Текст снаружи селекта"},required:{description:"Показывать обязательность поля"},useSearch:{description:"Использовать поиск по опциям"},options:{description:"Список опций. Каждая опция принимает те же параметры, что опция из QSelect, но с дополнениями: <br/>— `label` - текст опции <br/> — `labelLight` - светлый текст опции (отображается после `label`, [пример](?path=/story/ui-vselect--light-label)) <br/> — `value` - значение опции <br/> ",table:{category:"props"}},optionsDense:{description:"Уменьшить размер опций",table:{category:"props"}},labelColor:{table:{disable:!0}},outlined:{table:{disable:!0}},dense:{table:{disable:!0}},color:{table:{disable:!0}}},args:{label:"Выберите опцию",outsideLabel:"",useSearch:!1,required:!1,staticLabel:!1,options:z,optionsDense:!1},render:E=>({components:{VSelect:n},setup(){const j=w();return{args:E,selectValue:j}},template:`
      <v-select v-bind="args" v-model="selectValue"/>`}),parameters:{docs:{description:{component:"Компонент вывода меню опций. Является оберткой компоненте QSelect с дополнительной стилистикой и пропсами."}}}},e={args:{}},a={args:{optionsDense:!0}},t={args:{outsideLabel:"GTIN"}},r={args:{outsideLabel:"GTIN",required:!0}},s={args:{useSearch:!0}},l={args:{staticLabel:!0}},o={args:{options:u}},p={args:{useChips:!0,staticLabel:!0,options:u}},i={args:{multiple:!0,modelValue:[],useChips:!0,staticLabel:!0,options:u}};var c,b,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {}
}`,...(d=(b=e.parameters)==null?void 0:b.docs)==null?void 0:d.source}}};var m,g,L;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    optionsDense: true
  }
}`,...(L=(g=a.parameters)==null?void 0:g.docs)==null?void 0:L.source}}};var h,v,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    outsideLabel: 'GTIN'
  }
}`,...(S=(v=t.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var O,f,C;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    outsideLabel: 'GTIN',
    required: true
  }
}`,...(C=(f=r.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var q,D,y;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    useSearch: true
  }
}`,...(y=(D=s.parameters)==null?void 0:D.docs)==null?void 0:y.source}}};var T,V,G;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    staticLabel: true
  }
}`,...(G=(V=l.parameters)==null?void 0:V.docs)==null?void 0:G.source}}};var I,N,W;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    options: lightLabelOptions
  }
}`,...(W=(N=o.parameters)==null?void 0:N.docs)==null?void 0:W.source}}};var x,M,Q;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    useChips: true,
    staticLabel: true,
    options: lightLabelOptions
  }
}`,...(Q=(M=p.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var R,_,k;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    multiple: true,
    modelValue: [],
    useChips: true,
    staticLabel: true,
    options: lightLabelOptions
  }
}`,...(k=(_=i.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};const U=["Standard","OptionsDense","LabelOutside","RequiredWithLabelOutside","WithSearch","StaticLabel","LightLabel","Chips","MultiSelect"];export{p as Chips,t as LabelOutside,o as LightLabel,i as MultiSelect,a as OptionsDense,r as RequiredWithLabelOutside,e as Standard,l as StaticLabel,s as WithSearch,U as __namedExportsOrder,P as default};
