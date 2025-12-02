import{r as J,c as K}from"./iframe-Cpxs_JI5.js";import{d as m}from"./VTable-DnoZjJu1.js";import"./preload-helper-Dp1pzeXC.js";import"./VExpansionItem-8mNTCM7g.js";import"./BarcodeIcon-CtJXGP-A.js";import"./DatamatrixIcon-B55ioFzH.js";const p={lg:"Большой",md:"Средний",sm:"Маленький",xs:"Очень маленький"},L="",B="qr",Q="aggregation",R="finish-aggregation",U="barcode",X="data-matrix",Y="done",d={none:L,qr:B,aggregation:Q,finishAggregation:R,barCode:U,dataMatrix:X,done:Y},te={component:m,argTypes:{label:{description:"Текст кнопки"},modelValue:{description:"Выбранное значение",options:[!0,!1]},iconName:{description:"Имя иконки (название файла из папки с иконками без расширения)",options:Object.keys(d),mapping:d,control:{type:"select",labels:{...d,none:"Нет"}}},isPlane:{description:"Без границ",options:[!0,!1]},height:{description:"Размер элемента",options:Object.keys(p),control:{type:"select",labels:p}},isDisabled:{description:"Активность чекбокса",options:[!0,!1]},border:{description:"Радиус границы"},borderColor:{description:"Цвет границы"},bgAlwaysFilled:{description:"Цвет фона всегда заполненный"},fitWidth:{description:"Отменить растягивание кнопки"}},parameters:{backgrounds:{default:"white",values:[{name:"dark",value:"#242a2b"},{name:"white",value:"#ffffff"},{name:"light",value:"#ededed"},{name:"light-gray",value:"#f1f1f1"}]}},args:{modelValue:!1,label:"Checkbox",height:"lg",iconName:"",isPlane:!1,isDisabled:!1,border:"8px",borderColor:"dark-gray",bgAlwaysFilled:!1,fitWidth:!1},render:l=>({components:{VCheckboxButton:m},setup(){const T=J(l.modelValue),z=K(()=>{const{modelValue:Z,...G}=l;return G});return{checkboxValue:T,bindingArgs:z}},template:'<v-checkbox-button v-model="checkboxValue" v-bind="bindingArgs"/>'})},e={},r={args:{modelValue:!0}},s={args:{iconName:B}},a={args:{isPlane:!0}},o={args:{height:"md"}},t={args:{height:"sm"}},n={args:{height:"xs"}},i={args:{isDisabled:!0}},c={args:{fitWidth:!0}};var g,u,h;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(h=(u=e.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var b,f,x;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    modelValue: true
  }
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,k,y;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    iconName: qr
  }
}`,...(y=(k=s.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var V,v,C;a.parameters={...a.parameters,docs:{...(V=a.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    isPlane: true
  }
}`,...(C=(v=a.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var A,D,H;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    height: 'md'
  }
}`,...(H=(D=o.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var P,W,N;t.parameters={...t.parameters,docs:{...(P=t.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    height: 'sm'
  }
}`,...(N=(W=t.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var w,F,q;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    height: 'xs'
  }
}`,...(q=(F=n.parameters)==null?void 0:F.docs)==null?void 0:q.source}}};var E,M,O;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(O=(M=i.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};var j,I,_;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    fitWidth: true
  }
}`,...(_=(I=c.parameters)==null?void 0:I.docs)==null?void 0:_.source}}};const ne=["Standard","Checked","WithIcon","Plane","MediumHeight","SmallHeight","ExtraSmallHeight","Disabled","Fit"];export{r as Checked,i as Disabled,n as ExtraSmallHeight,c as Fit,o as MediumHeight,a as Plane,t as SmallHeight,e as Standard,s as WithIcon,ne as __namedExportsOrder,te as default};
