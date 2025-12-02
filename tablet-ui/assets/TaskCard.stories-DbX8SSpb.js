import{T as N}from"./TaskCard-aiwjSP9z.js";import"./iframe-Qc53npuj.js";import"./preload-helper-Dp1pzeXC.js";import"./base-ui.es-BJxydbDr.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const o={new:"Новое",labeling:"Маркировка",ready:"Завершено",canceled:"Отменено"},P={component:N,argTypes:{title:{description:"Наименование задачи/артикула"},status:{description:"Статус маркировки",options:Object.keys(o),control:{type:"select",labels:o}},properties:{description:"Информация об объекте (количество, дата и время)"},id:{description:"id задачи"},priority:{description:"Приоритет задачи",control:{type:"number"}},isActive:{description:"Активность задачи"},hasBackground:{description:"Задний фон"}},args:{id:"",title:"Название задачи",status:"new",priority:void 0,properties:[],isActive:!1,hasBackground:!1},parameters:{docs:{description:{component:`Компонент карточки задания. Отображает статус, приоритет, название и свойства задачи. <br>
Есть 4 типа статуса - new, labeling, ready, canceled.<br>
Цвет заднего фона зависит от статуса задачи, если new или labeling - белый фон, иначе прозрачный.<br>
Имеет флаг активности, который влияет на границу карточки.`}}}},e={args:{properties:[{name:"Количество",value:"50"},{name:"Дата и время",value:"2024-03-19 17:07:15"}]}},a={args:{status:"labeling",properties:[{name:"Количество",value:"50"},{name:"Дата и время",value:"2024-03-19 17:07:15"}]}},r={args:{status:"ready",properties:[{name:"Количество",value:"50"},{name:"Дата и время",value:"2024-03-19 17:07:15"}]}},s={args:{status:"canceled",properties:[{name:"Количество",value:"50"},{name:"Дата и время",value:"2024-03-19 17:07:15"}]}},n={args:{properties:[{name:"Количество",value:"50"},{name:"Дата и время",value:"2024-03-19 17:07:15"}],priority:1}},t={args:{properties:[{name:"Количество",value:"50"},{name:"Дата и время",value:"2024-03-19 17:07:15"}],isActive:!0}};var i,c,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    properties: [{
      name: 'Количество',
      value: '50'
    }, {
      name: 'Дата и время',
      value: '2024-03-19 17:07:15'
    }]
  }
}`,...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,m,l;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    status: 'labeling',
    properties: [{
      name: 'Количество',
      value: '50'
    }, {
      name: 'Дата и время',
      value: '2024-03-19 17:07:15'
    }]
  }
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,v,g;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    status: 'ready',
    properties: [{
      name: 'Количество',
      value: '50'
    }, {
      name: 'Дата и время',
      value: '2024-03-19 17:07:15'
    }]
  }
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var y,S,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    status: 'canceled',
    properties: [{
      name: 'Количество',
      value: '50'
    }, {
      name: 'Дата и время',
      value: '2024-03-19 17:07:15'
    }]
  }
}`,...(b=(S=s.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var w,k,A;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    properties: [{
      name: 'Количество',
      value: '50'
    }, {
      name: 'Дата и время',
      value: '2024-03-19 17:07:15'
    }],
    priority: 1
  }
}`,...(A=(k=n.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var T,f,h;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    properties: [{
      name: 'Количество',
      value: '50'
    }, {
      name: 'Дата и время',
      value: '2024-03-19 17:07:15'
    }],
    isActive: true
  }
}`,...(h=(f=t.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const R=["StatusNew","StatusLabeling","StatusReady","StatusCanceled","StatusNewWithPriority","ActiveTask"];export{t as ActiveTask,s as StatusCanceled,a as StatusLabeling,e as StatusNew,n as StatusNewWithPriority,r as StatusReady,R as __namedExportsOrder,P as default};
