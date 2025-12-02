import{r as P}from"./iframe-Qc53npuj.js";import{_ as m}from"./FallbackLoader-D588njKg.js";import"./preload-helper-Dp1pzeXC.js";import"./base-ui.es-BJxydbDr.js";const z={component:m,argTypes:{loadingText:{description:"Текст во время загрузки"},fallbackText:{description:"Текст когда загрузка завершилась с ошибкой"},fallbackIcon:{description:"Имя иконки"},updateBtnText:{description:"Текст для перезагрузки"},isLoading:{type:"boolean"}},parameters:{backgrounds:{default:"white",values:[{name:"dark",value:"#242a2b"},{name:"white",value:"#ffffff"},{name:"light",value:"#ededed"},{name:"light-gray",value:"#f1f1f1"}]},docs:{description:{component:"Компонент представляет собой кастомизируемый лоадер с кнопкой повторной отправки запроса. Можно изменять текст загрузки, текст ошибки, иконку после ошибки и текст для кнопки повторного отправки запроса"}}},render:e=>({components:{FallbackLoader:m},setup(){const r=P(!1),i=U(2e3,(e==null?void 0:e.shouldFail)??!1);return{args:e,isLoading:r,handleUpdate:async()=>{r.value=!0;try{const p=await i();console.log(p)}catch(p){console.log("error = ",p)}finally{r.value=!1}}}},template:`
    <FallbackLoader
      :isLoading="isLoading"
      :fallback-text="args.fallbackText"
      :loading-text="args.loadingText"
      :update-btn-text="args.updateBtnText"
      :fallback-icon="args.fallbackIcon"
      @on-update="handleUpdate"
    />
  `})},U=(e,r)=>()=>new Promise((i,g)=>{console.log(r),setTimeout(()=>{r?g(new Error("Ошибка загрузки данных")):i()},e)}),a={fallbackIcon:"status-error",loadingText:"Обновление...",fallbackText:"Ошибка",updateBtnText:"Обновить",isLoading:!1},s={args:{...a}},o={args:{...a,fallbackIcon:"bad"}},t={args:{...a,fallbackText:"Что-то пошло не так",loadingText:"Загрузка данных...",updateBtnText:"Повторить запрос"}},n={args:{...a,loadingText:""}},c={args:{...a,fallbackText:""}},l={args:{...a,fallbackIcon:""}},d={args:{...a,shouldFail:!0}};var u,f,x;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...BaseArgs
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var b,T,k;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ...BaseArgs,
    fallbackIcon: 'bad'
  }
}`,...(k=(T=o.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var h,B,I;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...BaseArgs,
    fallbackText: 'Что-то пошло не так',
    loadingText: 'Загрузка данных...',
    updateBtnText: 'Повторить запрос'
  }
}`,...(I=(B=t.parameters)==null?void 0:B.docs)==null?void 0:I.source}}};var F,L,y;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    ...BaseArgs,
    loadingText: ''
  }
}`,...(y=(L=n.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var A,v,S;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    ...BaseArgs,
    fallbackText: ''
  }
}`,...(S=(v=c.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var N,_,w;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...BaseArgs,
    fallbackIcon: ''
  }
}`,...(w=(_=l.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var C,E,M;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...BaseArgs,
    shouldFail: true
  }
}`,...(M=(E=d.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const D=["Primary","IconChange","CustomText","NoLoadingText","NoFallbackText","NoFallbackIcon","WithErrorMessage"];export{t as CustomText,o as IconChange,l as NoFallbackIcon,c as NoFallbackText,n as NoLoadingText,s as Primary,d as WithErrorMessage,D as __namedExportsOrder,z as default};
