import{r as o,N as r}from"./iframe-BpFT_bh4.js";import"./InfoGrid-D7BjtZ63.js";import"./PieProgress-CGpr5fU8.js";import"./StatusCard-CMOnUk1Q.js";import{M as b,a as m}from"./StatusTimeline-BQ6m2BD9.js";import"./StripedCard-DR6KUJJZ.js";import{V as h}from"./VBreadcrumbs-DRP4HXRP.js";import"./QMenu-BWlA1g2q.js";import"./VDate-C2gxBhKK.js";import"./VFormRow-DKlbCTdv.js";import{s as f}from"./layout-BUhRAFL8.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./colors-BttFFNdH.js";import"./base-ui.es-D_bKqeCp.js";const T={component:m,argTypes:{sidebar:{description:"Слот для сайдбара"},header:{description:"Слот для верхней части приложения"},content:{description:"Слот для контентной части приложения"}},render:()=>({components:{MainLayout:m,MainSidebar:b,VBreadcrumbs:h},setup(){const s=o(f.map((t,a)=>({...t,handler:()=>{c(a)}}))),d=o([{label:"Линии",handler:()=>r.create({type:"info",message:"Нажатие на пункт Линии"})},{label:"Линия 1",handler:()=>r.create({type:"info",message:"Нажатие на пункт Линия 1"})},{label:"Агрегация",handler:()=>r.create({type:"info",message:"Нажатие на пункт Агрегация"})}]),c=t=>{s.value.forEach((a,l)=>{a.active=l===t})};return{sidebarItems:s,headerItems:d}},template:`
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
