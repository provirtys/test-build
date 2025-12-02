import{S as T}from"./MainLayout-CT8nnaly.js";import"./iframe-Qc53npuj.js";import"./preload-helper-Dp1pzeXC.js";import"./base-ui.es-BJxydbDr.js";import"./AppSettings-DLMfLkHL.js";import"./sleep-B5LgeCuU.js";import"./AppSettingsOptions-Be914qET.js";import"./private.use-form-DbMdEKWf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./BarChart-CrvAPWE0.js";import"./apexcharts.esm-PvBfBjQs.js";import"./BarChartTimeSeries-DFjbYa2z.js";import"./CodeCard-DteNLFZA.js";import"./FallbackLoader-D588njKg.js";import"./LabelingProgress-C3csWvr4.js";import"./ProgressPie-V3GcZL7N.js";import"./TaskCard-aiwjSP9z.js";import"./NumericRatio-CyUDWrfV.js";import"./StatusIndicator-BpsS_F8k.js";import"./TableAttributes-BmY6FmuQ.js";const i={barcode:"Barcode",dataMatrix:"Data Matrix"},p={info:"Синий",success:"Зеленый",error:"Красный",warning:"Желтый"},m={hidden:"Скрыто",active:"Отображается",processing:"В процессе"},or={component:T,argTypes:{type:{description:"Тип кода",options:Object.keys(i),control:{type:"radio",labels:i}},color:{description:"Цвет статуса",options:Object.keys(p),control:{type:"select",labels:p}},status:{description:"Статус кода",options:Object.keys(m),control:{type:"select",labels:m}}},args:{type:"dataMatrix",color:"success",status:"hidden"},globals:{backgrounds:{value:"dark"}},parameters:{docs:{description:{component:"Компонент отображает иконку с кодом и её статус. Поддерживает DataMatrix и Barcode, 4 цветовых палитры (синий, желтый, зеленый, красный) и статус. Статус показывается, если задан цвет."}}}},r={name:"DataMatrix"},s={args:{type:"barcode"}},o={args:{color:"success"}},e={args:{color:"success",status:"active"}},a={args:{color:"success",status:"processing"}},t={args:{color:"error",status:"processing"}},c={args:{color:"info",status:"processing"}},n={args:{color:"warning",status:"processing"}};var u,l,d;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'DataMatrix'
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var g,S,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    type: 'barcode'
  }
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var y,b,x;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    color: 'success'
  }
}`,...(x=(b=o.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var M,f,D;e.parameters={...e.parameters,docs:{...(M=e.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    color: 'success',
    status: 'active'
  }
}`,...(D=(f=e.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var k,h,v;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    color: 'success',
    status: 'processing'
  }
}`,...(v=(h=a.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var B,O,W;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    color: 'error',
    status: 'processing'
  }
}`,...(W=(O=t.parameters)==null?void 0:O.docs)==null?void 0:W.source}}};var j,w,E;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: 'info',
    status: 'processing'
  }
}`,...(E=(w=c.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var I,P,_;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: 'warning',
    status: 'processing'
  }
}`,...(_=(P=n.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const er=["DataMatrix","Barcode","ColorSuccessSimple","ColorSuccessWithPoint","ColorSuccess","ColorError","ColorInfo","ColorWarning"];export{s as Barcode,t as ColorError,c as ColorInfo,a as ColorSuccess,o as ColorSuccessSimple,e as ColorSuccessWithPoint,n as ColorWarning,r as DataMatrix,er as __namedExportsOrder,or as default};
