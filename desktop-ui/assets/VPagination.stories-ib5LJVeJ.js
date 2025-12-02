import{r as d,N as e}from"./iframe-00K2Dmlk.js";import{d as s}from"./StatusTimeline-BhYA58nB.js";import"./preload-helper-BVW3a-N4.js";import"./InfoGrid-BumvPpB6.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PieProgress-VQzY7NmE.js";import"./colors-BttFFNdH.js";import"./StatusCard-BbuMKw16.js";import"./base-ui.es-KFfLC6Sd.js";import"./StripedCard-C6yiNRs2.js";import"./VBreadcrumbs-Cjt9RhH1.js";import"./QMenu-KnACDGFu.js";import"./VDate-bQpefhqx.js";import"./VFormRow-CBooC6AN.js";const h={component:s,argTypes:{modelValue:{description:"Объект с пагинацией: <br/>`page` — текущая страница<br/>`totalEl` — общее количество элементов<br/>`elPerPage` — кол-во элементов на странице<br/>"}},args:{modelValue:{page:1,totalEl:20,elPerPage:3}},render:g=>({components:{VPagination:s},setup(){const t=d(g.modelValue);return{pagination:t,paginationHandler:o=>{switch(t.value&&(t.value.page=o.page),o.type){case"prev":e.create({message:"Запрос на предыдущую страницу"});break;case"next":e.create({message:"Запрос на следующую страницу"});break;case"first":e.create({message:"Запрос на первую страницу"});break;case"last":e.create({message:"Запрос на последнюю страницу"});break}}}},template:`
      <v-pagination v-model="pagination" @navigate="paginationHandler"/>`})},a={},r={args:{modelValue:{page:1,totalEl:6,elPerPage:6}}};var n,p,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,l,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    modelValue: {
      page: 1,
      totalEl: 6,
      elPerPage: 6
    }
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const w=["Standard","OnePage"];export{r as OnePage,a as Standard,w as __namedExportsOrder,h as default};
