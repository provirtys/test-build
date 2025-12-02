import{i as Y,d as Z,u as $,c as ee,a as c,f as k,b as m,g as ae,n as d,e as B,j as re,t as se,o as a}from"./iframe-BX2wDbTa.js";import{X as h}from"./base-ui.es-n1UhaaiC.js";import{_ as ne}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Dp1pzeXC.js";/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const oe=Symbol("");/*!
 * vue-router v4.6.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */function te(){return Y(oe)}const ie={class:"mobile-header"},ce={class:"integrity-logo-block"},le={key:0,class:"integrity-header-name"},U=Z({__name:"MobileHeader",props:{showBackButton:{type:Boolean},isBackgroundDark:{type:Boolean},isOffline:{type:Boolean},page:{}},setup(e){const{t:u}=$(),l=te(),f=e;function W(){switch(f.page){case"FrontPage":break;case"CheckResult":l.push({name:"CheckScan"});break;case"Checking":case"History":case"CheckScan":case"Settings":case"Auth":case"ProfileRegister":case"ForgotPassword":l.push({name:"FrontPage"});break;default:l.go(-1);break}}const g=ee(()=>{switch(f.page){case"Profile":return u("storybook.profile");case"ProfileRegister":return u("storybook.register");default:return}});return(ue,p)=>(a(),c("div",ie,[e.showBackButton?(a(),c("button",{key:0,onClick:W,class:"back-button"},[ae(B(h),{name:"arrow-back-rounded",class:d({"text-light-gray-40":e.isBackgroundDark})},null,8,["class"])])):k("",!0),m("div",ce,[g.value?(a(),c("div",le,se(g.value),1)):(a(),re(B(h),{key:1,name:"integrity-logo",width:"108",class:d({"text-light-gray-40":e.isBackgroundDark})},null,8,["class"]))]),e.isOffline?(a(),c("div",{key:1,class:d(["offline-mode-marker",{light:e.isBackgroundDark}])},[...p[0]||(p[0]=[m("span",null,"offline mode",-1)])],2)):k("",!0)]))}}),de=ne(U,[["__scopeId","data-v-25a8358a"]]);U.__docgenInfo={exportName:"default",displayName:"MobileHeader",description:"",tags:{},props:[{name:"showBackButton",required:!1,type:{name:"boolean"}},{name:"isBackgroundDark",required:!1,type:{name:"boolean"}},{name:"isOffline",required:!1,type:{name:"boolean"}},{name:"page",required:!1,type:{name:"string"}}],sourceFiles:["/home/runner/work/test-build/test-build/packages/mobile-ui/src/components/Layouts/MobileHeader/MobileHeader.vue"]};const me={component:de,argTypes:{page:{description:"На какой странице находится пользователь?",control:{type:"select"},options:["Index","FrontPage","Checking","CheckScan","CheckResult","History","Profile","ProfileAuth","ProfileRegister","ProfileEdit","BindingCodeScan","BindingCodeConfirm"]},showBackButton:{description:'Должна ли отображаться кнопка "назад"?'},isBackgroundDark:{description:"Фон на странице темный?"},isOffline:{description:"Пользователь в оффлайн режиме?"}},parameters:{backgrounds:{default:"light",values:[{name:"dark",value:"#242a2b"},{name:"light",value:"#f4f4f4"}]},docs:{description:{component:`Компонент шапки, используемый на мобильных устройствах. Содержит кнопку "назад", заголовок и иконку оффлайн режима
 при необходимости. Кнопка "назад" перенаправляет пользователя на другую страницу в зависимости от текущей.
Цвета в шапке могут меняться в зависимости от цвета фона на выбранной странице.`}}}},r={args:{showBackButton:!0,isBackgroundDark:!1,isOffline:!1,page:"Index"}},s={args:{showBackButton:!0,isBackgroundDark:!1,isOffline:!0,page:"Index"}},n={args:{showBackButton:!1,isBackgroundDark:!1,isOffline:!1,page:"FrontPage"}},o={args:{showBackButton:!0,isBackgroundDark:!1,isOffline:!1,page:"Profile"}},t={args:{showBackButton:!1,isBackgroundDark:!0,isOffline:!1,page:"CheckScan"},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#242a2b"},{name:"light",value:"#f4f4f4"}]}}},i={args:{showBackButton:!0,isBackgroundDark:!0,isOffline:!1,page:"ProfileAuth"},parameters:{backgrounds:{default:"dark",values:[{name:"dark",value:"#242a2b"},{name:"light",value:"#f4f4f4"}]}}};var b,y,v,P,w;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    showBackButton: true,
    isBackgroundDark: false,
    isOffline: false,
    page: 'Index'
  }
}`,...(v=(y=r.parameters)==null?void 0:y.docs)==null?void 0:v.source},description:{story:"Базовый вид шапки страницы.",...(w=(P=r.parameters)==null?void 0:P.docs)==null?void 0:w.description}}};var D,O,C,H,S;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    showBackButton: true,
    isBackgroundDark: false,
    isOffline: true,
    page: 'Index'
  }
}`,...(C=(O=s.parameters)==null?void 0:O.docs)==null?void 0:C.source},description:{story:"Шапка страницы при оффлайн режиме.",...(S=(H=s.parameters)==null?void 0:H.docs)==null?void 0:S.description}}};var x,F,_,I,M;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    showBackButton: false,
    isBackgroundDark: false,
    isOffline: false,
    page: 'FrontPage'
  }
}`,...(_=(F=n.parameters)==null?void 0:F.docs)==null?void 0:_.source},description:{story:"Шапка страницы на главной.",...(M=(I=n.parameters)==null?void 0:I.docs)==null?void 0:M.description}}};var A,R,N,q,E;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    showBackButton: true,
    isBackgroundDark: false,
    isOffline: false,
    page: 'Profile'
  }
}`,...(N=(R=o.parameters)==null?void 0:R.docs)==null?void 0:N.source},description:{story:'Шапка страницы "Профиль". На странице регистрации также отображается название страницы.',...(E=(q=o.parameters)==null?void 0:q.docs)==null?void 0:E.description}}};var V,j,X,z,K;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    showBackButton: false,
    isBackgroundDark: true,
    isOffline: false,
    page: 'CheckScan'
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{
        name: 'dark',
        value: '#242a2b'
      }, {
        name: 'light',
        value: '#f4f4f4'
      }]
    }
  }
}`,...(X=(j=t.parameters)==null?void 0:j.docs)==null?void 0:X.source},description:{story:"Шапка страницы сканирования, на которой предусмотрен темный фон.",...(K=(z=t.parameters)==null?void 0:z.docs)==null?void 0:K.description}}};var L,T,G,J,Q;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    showBackButton: true,
    isBackgroundDark: true,
    isOffline: false,
    page: 'ProfileAuth'
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{
        name: 'dark',
        value: '#242a2b'
      }, {
        name: 'light',
        value: '#f4f4f4'
      }]
    }
  }
}`,...(G=(T=i.parameters)==null?void 0:T.docs)==null?void 0:G.source},description:{story:"Шапка страницы авторизации, на которой предусмотрен темный фон. Аналогичная шапка соответствует странице привязки кода.",...(Q=(J=i.parameters)==null?void 0:J.docs)==null?void 0:Q.description}}};const Be=["BaseHeader","OfflineMode","FrontPageHeader","ProfileHeader","CheckScanHeader","ProfileAuthHeader"];export{r as BaseHeader,t as CheckScanHeader,n as FrontPageHeader,s as OfflineMode,i as ProfileAuthHeader,o as ProfileHeader,Be as __namedExportsOrder,me as default};
