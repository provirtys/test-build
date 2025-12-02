import{r as o,N as r}from"./iframe-00K2Dmlk.js";import"./InfoGrid-BumvPpB6.js";import"./PieProgress-VQzY7NmE.js";import"./StatusCard-BbuMKw16.js";import{M as b,a as m}from"./StatusTimeline-BhYA58nB.js";import"./StripedCard-C6yiNRs2.js";import{V as h}from"./VBreadcrumbs-Cjt9RhH1.js";import"./QMenu-KnACDGFu.js";import"./VDate-bQpefhqx.js";import"./VFormRow-CBooC6AN.js";import{s as f}from"./layout-iA7u_1nu.js";import"./preload-helper-BVW3a-N4.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./colors-BttFFNdH.js";import"./base-ui.es-KFfLC6Sd.js";const T={component:m,argTypes:{sidebar:{description:"Слот для сайдбара"},header:{description:"Слот для верхней части приложения"},content:{description:"Слот для контентной части приложения"}},render:()=>({components:{MainLayout:m,MainSidebar:b,VBreadcrumbs:h},setup(){const s=o(f.map((t,a)=>({...t,handler:()=>{c(a)}}))),d=o([{label:"Линии",handler:()=>r.create({type:"info",message:"Нажатие на пункт Линии"})},{label:"Линия 1",handler:()=>r.create({type:"info",message:"Нажатие на пункт Линия 1"})},{label:"Агрегация",handler:()=>r.create({type:"info",message:"Нажатие на пункт Агрегация"})}]),c=t=>{s.value.forEach((a,l)=>{a.active=l===t})};return{sidebarItems:s,headerItems:d}},template:`
      <div style="height: 958px">
        <main-layout>
          <template #sidebar>
            <main-sidebar :items="sidebarItems"/>
          </template>
          <template #header>
            <v-breadcrumbs :items="headerItems"/>
          </template>
          <template #content>
            <div class="flex flex-center full-height text-h5">
              Контент страницы
            </div>
          </template>
        </main-layout>
      </div>
    `}),parameters:{docs:{description:{component:"Главный шаблон для приложения. Поддерживает слоты `sidebar`, `header`, `content`"}}}},e={args:{}};var i,n,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    // Значения для стори
  }
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const $=["Standard"];export{e as Standard,$ as __namedExportsOrder,T as default};
