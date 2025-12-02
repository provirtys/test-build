import{r as d,N as e}from"./iframe-BpFT_bh4.js";import{d as s}from"./StatusTimeline-BQ6m2BD9.js";import"./preload-helper-Dp1pzeXC.js";import"./InfoGrid-D7BjtZ63.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PieProgress-CGpr5fU8.js";import"./colors-BttFFNdH.js";import"./StatusCard-CMOnUk1Q.js";import"./base-ui.es-D_bKqeCp.js";import"./StripedCard-DR6KUJJZ.js";import"./VBreadcrumbs-DRP4HXRP.js";import"./QMenu-BWlA1g2q.js";import"./VDate-C2gxBhKK.js";import"./VFormRow-DKlbCTdv.js";const h={component:s,argTypes:{modelValue:{description:"Объект с пагинацией: <br/>`page` — текущая страница<br/>`totalEl` — общее количество элементов<br/>`elPerPage` — кол-во элементов на странице<br/>"}},args:{modelValue:{page:1,totalEl:20,elPerPage:3}},render:g=>({components:{VPagination:s},setup(){const t=d(g.modelValue);return{pagination:t,paginationHandler:o=>{switch(t.value&&(t.value.page=o.page),o.type){case"prev":e.create({message:"Запрос на предыдущую страницу"});break;case"next":e.create({message:"Запрос на следующую страницу"});break;case"first":e.create({message:"Запрос на первую страницу"});break;case"last":e.create({message:"Запрос на последнюю страницу"});break}}}},template:`
      <v-pagination v-model="pagination" @navigate="paginationHandler"/>`})},a={},r={args:{modelValue:{page:1,totalEl:6,elPerPage:6}}};var n,p,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};var m,l,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    modelValue: {
      page: 1,
      totalEl: 6,
      elPerPage: 6
    }
  }
}`,...(c=(l=r.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const w=["Standard","OnePage"];export{r as OnePage,a as Standard,w as __namedExportsOrder,h as default};
