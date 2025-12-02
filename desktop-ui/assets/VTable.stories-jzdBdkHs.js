import{a as M,c as j,h as m,b as p,g as w,N as u,r as d}from"./iframe-BpFT_bh4.js";import"./InfoGrid-D7BjtZ63.js";import{P as K}from"./PieProgress-CGpr5fU8.js";import"./StatusCard-CMOnUk1Q.js";import{e as c}from"./StatusTimeline-BQ6m2BD9.js";import"./StripedCard-DR6KUJJZ.js";import"./VBreadcrumbs-DRP4HXRP.js";import"./QMenu-BWlA1g2q.js";import"./VDate-C2gxBhKK.js";import"./VFormRow-DKlbCTdv.js";import"./preload-helper-Dp1pzeXC.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./colors-BttFFNdH.js";import"./base-ui.es-D_bKqeCp.js";const S=e=>{const t=new Date(e);return t.getFullYear()+"-"+String(t.getMonth()+1).padStart(2,"0")+"-"+String(t.getDate()).padStart(2,"0")+" "+String(t.getHours()).padStart(2,"0")+":"+String(t.getMinutes()).padStart(2,"0")+":"+String(t.getSeconds()).padStart(2,"0")},h=M({name:"QTd",props:{props:Object,autoWidth:Boolean,noHover:Boolean},setup(e,{slots:t}){const a=w(),o=j(()=>"q-td"+(e.autoWidth===!0?" q-table--col-auto-width":"")+(e.noHover===!0?" q-td--no-hover":"")+" ");return()=>{if(e.props===void 0)return m("td",{class:o.value},p(t.default));const s=a.vnode.key,r=(e.props.colsMap!==void 0?e.props.colsMap[s]:null)||e.props.col;if(r===void 0)return;const{row:n}=e.props;return m("td",{class:o.value+r.__tdClass(n),style:r.__tdStyle(n)},p(t.default))}}}),C=[{label:"Создание",name:"startDate",field:"startDate",align:"left",dateFilter:{active:!0}},{label:"Создание - Завершение",name:"startCompleteDates",field:"startCompleteDates",align:"left",dateFilter:{active:!0,multiple:!0}},{label:"ID",name:"id",field:"id",align:"left",searchable:!0},{label:"Продукция/GTIN",name:"gtin",field:"gtin",align:"left",searchable:!0},{label:"Линия",name:"line",field:"line",align:"left",filter:{active:!0,list:[{id:"line1",label:"Линия 1",value:!1},{id:"line2",label:"Линия 2",value:!1},{id:"line3",label:"Линия 3",value:!1}]}},{label:"Кол-во",name:"quantity",field:"quantity",align:"left",sortable:!0},{label:"Ошибок",name:"error",field:"error",align:"left",sortable:!0},{label:"Брак",name:"reject",field:"reject",align:"left",sortable:!0},{label:"Время выполнения",name:"runtime",field:"runtime",align:"left",sortable:!0},{label:"Статус",name:"statusPercentage",field:"statusPercentage",align:"left",sortable:!0}],x=[{startDate:1762423e6,completeDate:17625094e5,id:"MPK37",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line1",name:"Линия 1",labels:["Сериализация","Агрегация"]},quantity:1e5,error:0,reject:0,runtime:"1ч 02мин.",statusPercentage:58},{startDate:17626822e5,completeDate:17627686e5,id:"MPK38",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line3",name:"Линия 3",labels:["Агрегация"]},quantity:100,error:0,reject:0,runtime:"1ч 02мин.",statusPercentage:99},{startDate:1763287e6,completeDate:void 0,id:"MPK39",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line2",name:"Линия 2",labels:["Сериализация"]},quantity:5e6,error:3,reject:1,runtime:"1ч 02мин.",statusPercentage:5},{startDate:17638918e5,completeDate:17639782e5,id:"MPK40",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line1",name:"Линия 1",labels:["Сериализация","Агрегация"]},quantity:12e6,error:7,reject:42,runtime:"1ч 02мин.",statusPercentage:12},{startDate:17644966e5,completeDate:void 0,id:"MPK41",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line3",name:"Линия 3",labels:["Агрегация"]},quantity:500,error:0,reject:12,runtime:"1ч 02мин.",statusPercentage:80},{startDate:17651014e5,completeDate:17651878e5,id:"MPK42",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line1",name:"Линия 1",labels:["Сериализация","Агрегация"]},quantity:1e4,error:0,reject:57,runtime:"1ч 02мин.",statusPercentage:10},{startDate:17657062e5,completeDate:void 0,id:"MPK43",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line2",name:"Линия 2",labels:["Сериализация"]},quantity:3e3,error:1,reject:0,runtime:"1ч 02мин.",statusPercentage:45},{startDate:1766311e6,completeDate:17663974e5,id:"MPK44",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line3",name:"Линия 3",labels:["Агрегация"]},quantity:750,error:0,reject:5,runtime:"1ч 02мин.",statusPercentage:60},{startDate:17669158e5,completeDate:void 0,id:"MPK45",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line1",name:"Линия 1",labels:["Сериализация","Агрегация"]},quantity:45e3,error:2,reject:7,runtime:"1ч 02мин.",statusPercentage:30},{startDate:17675206e5,completeDate:1767607e6,id:"MPK46",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line2",name:"Линия 2",labels:["Сериализация"]},quantity:9e3,error:1,reject:2,runtime:"1ч 02мин.",statusPercentage:95},{startDate:17681254e5,completeDate:void 0,id:"MPK47",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line3",name:"Линия 3",labels:["Агрегация"]},quantity:380,error:0,reject:0,runtime:"1ч 02мин.",statusPercentage:88},{startDate:17687302e5,completeDate:17688166e5,id:"MPK48",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line1",name:"Линия 1",labels:["Сериализация","Агрегация"]},quantity:47e3,error:3,reject:6,runtime:"1ч 02мин.",statusPercentage:47},{startDate:1769335e6,completeDate:void 0,id:"MPK49",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line2",name:"Линия 2",labels:["Сериализация"]},quantity:5500,error:1,reject:3,runtime:"1ч 02мин.",statusPercentage:50},{startDate:17699398e5,completeDate:17700262e5,id:"MPK50",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line3",name:"Линия 3",labels:["Агрегация"]},quantity:250,error:0,reject:1,runtime:"1ч 02мин.",statusPercentage:75},{startDate:17705446e5,completeDate:1770631e6,id:"MPK51",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line1",name:"Линия 1",labels:["Сериализация","Агрегация"]},quantity:15e3,error:0,reject:2,runtime:"1ч 02мин.",statusPercentage:84},{startDate:17711494e5,completeDate:void 0,id:"MPK52",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line2",name:"Линия 2",labels:["Сериализация"]},quantity:800,error:1,reject:0,runtime:"1ч 02мин.",statusPercentage:90},{startDate:17717542e5,completeDate:17718406e5,id:"MPK53",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line3",name:"Линия 3",labels:["Агрегация"]},quantity:600,error:0,reject:0,runtime:"1ч 02мин.",statusPercentage:97},{startDate:1772359e6,completeDate:void 0,id:"MPK54",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line1",name:"Линия 1",labels:["Сериализация","Агрегация"]},quantity:3500,error:2,reject:3,runtime:"1ч 02мин.",statusPercentage:41},{startDate:17729638e5,completeDate:17730402e5,id:"MPK55",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line2",name:"Линия 2",labels:["Сериализация"]},quantity:12e3,error:1,reject:4,runtime:"1ч 02мин.",statusPercentage:79},{startDate:17735686e5,completeDate:void 0,id:"MPK56",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line3",name:"Линия 3",labels:["Агрегация"]},quantity:550,error:0,reject:2,runtime:"1ч 02мин.",statusPercentage:86},{startDate:17741734e5,completeDate:17742598e5,id:"MPK57",gtin:{name:"Вода минеральная 2 л.",number:"029000000001381"},line:{id:"line1",name:"Линия 1",labels:["Сериализация","Агрегация"]},quantity:4e3,error:3,reject:5,runtime:"1ч 02мин.",statusPercentage:33}],g=e=>{const t={date:"—",time:"—"};if(typeof e=="number"){const a=S(e).split(" ");t.date=a[0],t.time=a[1]}return t},A={component:c,argTypes:{clientPagination:{description:"Пагинация, фильтрация, поиск на стороне клиента"},pagination:{}},args:{rows:x.map(e=>({...e,startDate:g(e.startDate),completeDate:g(e.completeDate)})),columns:C,pagination:{sortBy:null,descending:!1,page:1,rowsPerPage:20,rowsNumber:100,filterBy:{},searchBy:{},dateFilter:{from:"04-01-2025",to:"18-01-2025"}}},render:e=>({components:{VTable:c,QTd:h,PieProgress:K,Notify:u},setup(){var r;const t=d({...e}),a=d({...typeof e.pagination=="object"?e.pagination:{},rowsNumber:e.clientPagination||(r=e.pagination)==null?void 0:r.rowsNumber});return{argsModel:t,onRequest:n=>{console.log("ON REQUEST = ",n.pagination),t.value.pagination=n.pagination},onRowClick:(n,y)=>{u.create({message:`Нажатие по ${y.id}`})},bindingPagination:a}},template:`
      <v-table
        :columns="argsModel.columns"
        :rows="argsModel.rows"
        v-model:pagination="bindingPagination"
        @rowClick="onRowClick"
        @request="onRequest"
      >
        <template #body-cell-startDate="props">
          <q-td :props="props">{{ props.value.date }}<span>{{ props.value.time }}</span></q-td>
        </template>
        <template #body-cell-startCompleteDates="props">
          <q-td :props="props">
            <div class="flex no-wrap">
              <div style="border-right: 1px solid #D9D9D9; padding-right: 8px; min-width: 124px">
                {{ props.row.startDate.date }}
                <span>
                  {{ props.row.startDate.time }}
                </span>
              </div>
              <div style="padding-left:8px">
                {{ props.row.completeDate.date }}
                <span>
                  {{ props.row.completeDate.time }}
                </span>
              </div>
            </div>
          </q-td>
        </template>
        <template #body-cell-gtin="props">
          <q-td :props="props">{{ props.value.name }}<span>{{ props.value.number }}</span></q-td>
        </template>
        <template #body-cell-line="props">
          <q-td :props="props">{{ props.value.name }}<span v-for="l in props.value.labels" :key="l">{{ l }}</span>
          </q-td>
        </template>
        <template #body-cell-quantity="props">
          <q-td :props="props">{{ props.value.toLocaleString() }}</q-td>
        </template>
        <template #body-cell-reject="props">
          <q-td :props="props">{{ props.value }}
            <span>{{ parseFloat(((props.value / props.row.quantity) * 100).toFixed(2)) + '%' }}</span></q-td>
        </template>
        <template #body-cell-statusPercentage="props">
          <q-td :props="props">
            <pie-progress :value="props.value" color="warning" size="14" border-width="1"/>
            {{ props.value + '%' }}
          </q-td>
        </template>
      </v-table>
    `})},i={},l={args:{clientPagination:!0}};var b,D,P;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(P=(D=i.parameters)==null?void 0:D.docs)==null?void 0:P.source}}};var v,q,f;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    clientPagination: true
  }
}`,...(f=(q=l.parameters)==null?void 0:q.docs)==null?void 0:f.source}}};const G=["ServerPagination","ClientPagination"];export{l as ClientPagination,i as ServerPagination,G as __namedExportsOrder,A as default};
