import{S as E}from"./StatusCard-CMOnUk1Q.js";import"./iframe-BpFT_bh4.js";import"./preload-helper-Dp1pzeXC.js";import"./base-ui.es-D_bKqeCp.js";import"./colors-BttFFNdH.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={success:"Зеленый",error:"Красный",info:"Синий",warning:"Желтый"},_={component:E,argTypes:{title:{description:"Заголовок карточки (сверху вверху)"},text:{description:"Основное значение (слева внизу)"},label:{description:"Дескриптор (рядом с `text`)"},color:{description:"Цвет карточки",options:Object.keys(l),control:{type:"select",labels:l}},progress:{description:"Ширина цветного фона. <br/> От `0` до `100`",control:{min:0,max:100}},togglerStatus:{description:`Статус переключателя:<br/>
<b>null</b> - не отображать переключатель <br/>
<b>false</b> - отображать, неактивный статус <br/>
<b>true</b> - отображать, активный статус <br/><br/>
Можно использовать как <br/> 
v-model:togglerStatus="togglerModel"`,options:[null,!1,!0],control:{type:"select"}},startColor:{description:"Цвет, с которого начинается градиентный фон. По умолчанию `light-gray-55`",control:{type:"text"}},endColor:{description:"Цвет, которым заканчивается градиентный фон. Если не задан, то используется цвет из пропа `color`",control:{type:"text"}},behindColor:{description:"Цвет подложки заднего фона, отображается когда карточка не до конца заполнена",control:{type:"text"}},borderRadius:{description:"Радиус границы"}},args:{title:"",text:"",label:"",color:void 0,togglerStatus:null,progress:0,startColor:"light-gray-55",endColor:"",behindColor:"light-gray-55",borderRadius:"8px"},globals:{backgrounds:{value:"white"}},parameters:{docs:{description:{component:"Компонент для отображения статуса сущности в течение определенного периода."}}}},r={args:{title:"Средняя скорость",text:32,label:"м./час"}},o={args:{title:"Брак",text:"0.01%",label:"149 123 шт.",color:"error",progress:100,togglerStatus:!1}},e={args:{title:"Средняя скорость",text:132,label:"31% от всех задач",color:"info",progress:31,togglerStatus:!1}},t={args:{title:"Общий статус",text:"10%",label:"1ч 32мин.",color:"warning",progress:10,togglerStatus:!1}},s={args:{title:"Общий статус",text:"10%",label:"1ч 32мин.",color:"success",progress:100,togglerStatus:!1}},a={args:{title:"Общий статус",text:"10%",label:"1ч 32мин.",color:"success",progress:75,togglerStatus:!1,startColor:"error",endColor:"info",behindColor:"light-gray-70"}};var n,c,i;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    title: 'Средняя скорость',
    text: 32,
    label: 'м./час'
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var g,p,u;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    title: 'Брак',
    text: '0.01%',
    label: '149 123 шт.',
    color: 'error',
    progress: 100,
    togglerStatus: false
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var d,m,b;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: 'Средняя скорость',
    text: 132,
    label: '31% от всех задач',
    color: 'info',
    progress: 31,
    togglerStatus: false
  }
}`,...(b=(m=e.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var C,f,S;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    title: 'Общий статус',
    text: '10%',
    label: '1ч 32мин.',
    color: 'warning',
    progress: 10,
    togglerStatus: false
  }
}`,...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};var x,y,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Общий статус',
    text: '10%',
    label: '1ч 32мин.',
    color: 'success',
    progress: 100,
    togglerStatus: false
  }
}`,...(h=(y=s.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var k,w,v;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    title: 'Общий статус',
    text: '10%',
    label: '1ч 32мин.',
    color: 'success',
    progress: 75,
    togglerStatus: false,
    startColor: 'error',
    endColor: 'info',
    behindColor: 'light-gray-70'
  }
}`,...(v=(w=a.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};const j=["Default","ErrorColor","InfoColor","WarningColor","SuccessColor","CustomBackgroundColors"];export{a as CustomBackgroundColors,r as Default,o as ErrorColor,e as InfoColor,s as SuccessColor,t as WarningColor,j as __namedExportsOrder,_ as default};
