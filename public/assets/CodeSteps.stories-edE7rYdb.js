import{C as q}from"./VTable-DnoZjJu1.js";import"./BarcodeIcon-CtJXGP-A.js";import"./DatamatrixIcon-B55ioFzH.js";import"./VExpansionItem-8mNTCM7g.js";import"./iframe-Cpxs_JI5.js";import"./preload-helper-Dp1pzeXC.js";const K={component:q,argTypes:{codeType:{description:"Вариант изображения кода",options:["barcode","dataMatrix"],control:{type:"radio",labels:{barcode:"Barcode",dataMatrix:"DataMatrix"}}},currentCodeIndex:{description:"Текущий сканируемый код"},codesLength:{description:"Общее количество кодов"},showBorder:{description:"Показывать рамку вокруг кода"}},parameters:{docs:{description:{component:"CodeSteps component with customizable number and type of code"}}}},e={args:{codeType:"barcode",currentCodeIndex:0,codesLength:2,showBorder:!0}},r={args:{codeType:"barcode",currentCodeIndex:3,codesLength:5,showBorder:!0}},o={args:{codeType:"barcode",currentCodeIndex:-1,codesLength:1,showBorder:!1}},a={args:{codeType:"dataMatrix",currentCodeIndex:0,codesLength:2,showBorder:!0}},t={args:{codeType:"dataMatrix",currentCodeIndex:3,codesLength:5,showBorder:!0}},s={args:{codeType:"dataMatrix",currentCodeIndex:-1,codesLength:1,showBorder:!1}};var d,n,c,i,p;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    codeType: 'barcode',
    currentCodeIndex: 0,
    codesLength: 2,
    showBorder: true
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source},description:{story:"Cканирование первого кода, всего кодов для сканирования 2",...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.description}}};var m,u,g,y,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    codeType: 'barcode',
    currentCodeIndex: 3,
    codesLength: 5,
    showBorder: true
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source},description:{story:"Cканирование кода с индексом 3, всего кодов для сканирования 5",...(h=(y=r.parameters)==null?void 0:y.docs)==null?void 0:h.description}}};var x,C,l,L,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    codeType: 'barcode',
    currentCodeIndex: -1,
    codesLength: 1,
    showBorder: false
  }
}`,...(l=(C=o.parameters)==null?void 0:C.docs)==null?void 0:l.source},description:{story:"Выброр типа кода для сканирования",...(w=(L=o.parameters)==null?void 0:L.docs)==null?void 0:w.description}}};var B,T,I,P,S;a.parameters={...a.parameters,docs:{...(B=a.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    codeType: 'dataMatrix',
    currentCodeIndex: 0,
    codesLength: 2,
    showBorder: true
  }
}`,...(I=(T=a.parameters)==null?void 0:T.docs)==null?void 0:I.source},description:{story:"Cканирование первого кода, всего кодов для сканирования 2",...(S=(P=a.parameters)==null?void 0:P.docs)==null?void 0:S.description}}};var b,M,f,D,_;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    codeType: 'dataMatrix',
    currentCodeIndex: 3,
    codesLength: 5,
    showBorder: true
  }
}`,...(f=(M=t.parameters)==null?void 0:M.docs)==null?void 0:f.source},description:{story:"Cканирование кода с индексом 3, всего кодов для сканирования 5",...(_=(D=t.parameters)==null?void 0:D.docs)==null?void 0:_.description}}};var z,E,O,j,k;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    codeType: 'dataMatrix',
    currentCodeIndex: -1,
    codesLength: 1,
    showBorder: false
  }
}`,...(O=(E=s.parameters)==null?void 0:E.docs)==null?void 0:O.source},description:{story:"Выброр типа кода для сканирования",...(k=(j=s.parameters)==null?void 0:j.docs)==null?void 0:k.description}}};const N=["PrimaryCode","PrimaryCodeLength","PrimaryCodeSelect","PrimaryDatamatrix","PrimaryDatamatrixLength","PrimaryDatamatrixSelect"];export{e as PrimaryCode,r as PrimaryCodeLength,o as PrimaryCodeSelect,a as PrimaryDatamatrix,t as PrimaryDatamatrixLength,s as PrimaryDatamatrixSelect,N as __namedExportsOrder,K as default};
