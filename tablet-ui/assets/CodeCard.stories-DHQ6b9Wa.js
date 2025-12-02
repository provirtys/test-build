import{C as V}from"./CodeCard-DteNLFZA.js";import"./iframe-Qc53npuj.js";import"./preload-helper-Dp1pzeXC.js";import"./base-ui.es-BJxydbDr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const i={none:"",broken:"Ошибка",verified:"Подтвержден"},j="dataMatrix",C="barcode",c={dataMatrix:j,barcode:C},q={component:V,argTypes:{codeType:{description:"Тип кода",options:Object.keys(c),mapping:c,control:{type:"radio",labels:{dataMatrix:"DataMatrix",barcode:"Barcode"}}},codeText:{description:"Текст кода"},status:{description:"Статус кода",options:Object.keys(i),control:{type:"radio",labels:i}},time:{description:"Время"},position:{description:"Номер позиции"}},args:{codeType:"dataMatrix",codeText:"wv985fjs934",status:void 0,time:"12:34:56",position:0},parameters:{docs:{description:{component:"Компонент отображает информацию о маркировке кода. Можно настроить тип, текст, статус кода, время и номер позиции."}}}},e={},r={args:{status:"verified",position:1}},o={args:{status:"broken",position:2}},a={args:{codeType:"barcode",position:4}},s={args:{codeType:"barcode",status:"verified",position:5}},t={args:{codeType:"barcode",status:"broken",position:6}};var n,d,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    status: 'verified',
    position: 1
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,x,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    status: 'broken',
    position: 2
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var l,f,T;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    codeType: 'barcode',
    position: 4
  }
}`,...(T=(f=a.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var k,B,M;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    codeType: 'barcode',
    status: 'verified',
    position: 5
  }
}`,...(M=(B=s.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var v,D,S;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    codeType: 'barcode',
    status: 'broken',
    position: 6
  }
}`,...(S=(D=t.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};const z=["DataMatrix","DataMatrixVerified","DataMatrixBroken","Barcode","BarcodeVerified","BarcodeBroken"];export{a as Barcode,t as BarcodeBroken,s as BarcodeVerified,e as DataMatrix,o as DataMatrixBroken,r as DataMatrixVerified,z as __namedExportsOrder,q as default};
