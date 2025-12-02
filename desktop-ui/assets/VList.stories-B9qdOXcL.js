import{N as i}from"./iframe-BpFT_bh4.js";import{Q as S,_ as C}from"./QMenu-BWlA1g2q.js";import"./InfoGrid-D7BjtZ63.js";import"./PieProgress-CGpr5fU8.js";import"./StatusCard-CMOnUk1Q.js";import{c as y}from"./StatusTimeline-BQ6m2BD9.js";import"./StripedCard-DR6KUJJZ.js";import"./VBreadcrumbs-DRP4HXRP.js";import"./VDate-C2gxBhKK.js";import"./VFormRow-DKlbCTdv.js";import"./preload-helper-Dp1pzeXC.js";import"./base-ui.es-D_bKqeCp.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./colors-BttFFNdH.js";const t=[{label:"Пункт 1",icon:"puzzle",handler:()=>i.create({type:"info",message:"Нажатие на пункт 1"})},{label:"Пункт 2",icon:"aggregation",handler:()=>i.create({type:"info",message:"Нажатие на пункт 2"})},{label:"Пункт 3",icon:"settings",handler:()=>i.create({type:"info",message:"Нажатие на пункт 3"})}],O={component:y,argTypes:{items:{description:"Элементы списка <br/>Каждый элемент содержит: <br/>`label` — текст<br/>`icon` — имя иконки<br/>`iconColor` — цвет иконки<br/>`handler` — обработчик нажатиия на элемент<br/>`topDivider` — отображать ли разделитель перед элементом<br/>"}},args:{items:t},parameters:{docs:{description:{component:"Компонент меню. Используется в кнопке. Выводит список элементов, при нажатии на которые срабатывает callback"}}}},r={},n={args:{items:t.map((e,a)=>({...e,iconColor:a===t.length-1?"primary":void 0}))}},o={args:{items:t.map((e,a)=>({...e,topDivider:a===t.length-1}))}},s={render:e=>({components:{VButton:C,VList:y,QMenu:S},setup(){return{args:e}},template:`
      <v-button>
        Открыть меню
        <template #menu>
          <q-menu>
            <v-list :items="args.items"/>
          </q-menu>
        </template>
      </v-button>`})};var m,p,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,l,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    items: items.map((item, idx) => ({
      ...item,
      iconColor: idx === items.length - 1 ? 'primary' : undefined
    }))
  }
}`,...(u=(l=n.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var g,b,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items: items.map((item, idx) => ({
      ...item,
      topDivider: idx === items.length - 1
    }))
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var v,f,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => ({
    components: {
      VButton,
      VList,
      QMenu
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <v-button>
        Открыть меню
        <template #menu>
          <q-menu>
            <v-list :items="args.items"/>
          </q-menu>
        </template>
      </v-button>\`
  })
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const T=["Standard","IconColor","WithDivider","ExampleWithButton"];export{s as ExampleWithButton,n as IconColor,r as Standard,o as WithDivider,T as __namedExportsOrder,O as default};
