import{N as p}from"./iframe-BpFT_bh4.js";import{P as Y}from"./PieProgress-CGpr5fU8.js";import{b as R}from"./StatusTimeline-BQ6m2BD9.js";import"./preload-helper-Dp1pzeXC.js";import"./colors-BttFFNdH.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./InfoGrid-D7BjtZ63.js";import"./StatusCard-CMOnUk1Q.js";import"./base-ui.es-D_bKqeCp.js";import"./StripedCard-DR6KUJJZ.js";import"./VBreadcrumbs-DRP4HXRP.js";import"./QMenu-BWlA1g2q.js";import"./VDate-C2gxBhKK.js";import"./VFormRow-DKlbCTdv.js";const l={success:"Зеленый",error:"Красный",info:"Синий",warning:"Желтый",gray:"Серый"},er={component:R,argTypes:{title:{description:"Заголовок карточки"},stretch:{description:"Растягиваться на всего родителя",control:"boolean"},color:{description:"Цвет заднего фона карточки",options:Object.keys(l),control:{type:"select",labels:l}},paddingX:{description:"Внутренний отступ по горизонтали"},paddingY:{description:"Внутренний отступ по вертикали"},menuItems:{description:"Список пунктов меню из компонента [VList](/?path=/docs/ui-vlist--docs)"},borderRadius:{description:"Радиус границы"},isFlex:{description:"Применить flex к контенту"},default:{table:{disable:!0}}},args:{title:"Заголовок карточки",stretch:!0,paddingX:"20px",paddingY:"20px",menuItems:[],borderRadius:"8px",isFlex:!1},parameters:{docs:{description:{component:"Простой компонент-обертка. Через слот добавляется нужный контент. Также поддерживает показ меню справа наверху - для этого необходимо передать массив пунктов через проп `menuItems`"}}}},r={},e={args:{color:"info"}},o={args:{color:"error"}},s={args:{color:"warning"}},n={args:{color:"success"}},a={args:{color:"gray"}},t={args:{title:"",stretch:!1},render:X=>({components:{VCard:R,PieProgress:Y},setup(){return{args:X}},template:`
      <v-card v-bind="args">
        <pie-progress size="60"/>
      </v-card>`})},c={args:{title:"Карточка с меню",menuItems:[{icon:"pencil",label:"Редактировать",handler:()=>{p.create({message:"Нажатие на кнопку"})}},{icon:"trash",iconColor:"primary",label:"Удалить",topDivider:!0,handler:()=>{p.create({message:"Нажатие на кнопку"})}}]}},i={args:{title:"Карточка с кнопкой",btnConf:{icon:"pencil",handler:()=>p.create({message:"Нажатие на кнопку"})}}};var m,d,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(g=(d=r.parameters)==null?void 0:d.docs)==null?void 0:g.source}}};var u,h,f;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    color: 'info'
  }
}`,...(f=(h=e.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,C,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    color: 'error'
  }
}`,...(y=(C=o.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var S,v,x;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    color: 'warning'
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var W,I,N;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    color: 'success'
  }
}`,...(N=(I=n.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var P,w,E;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    color: 'gray'
  }
}`,...(E=(w=a.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var T,V,z;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    title: '',
    stretch: false
  },
  render: args => ({
    components: {
      VCard,
      PieProgress
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <v-card v-bind="args">
        <pie-progress size="60"/>
      </v-card>\`
  })
}`,...(z=(V=t.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var B,D,F;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    title: 'Карточка с меню',
    menuItems: [{
      icon: 'pencil',
      label: 'Редактировать',
      handler: () => {
        Notify.create({
          message: 'Нажатие на кнопку'
        });
      }
    }, {
      icon: 'trash',
      iconColor: 'primary',
      label: 'Удалить',
      topDivider: true,
      handler: () => {
        Notify.create({
          message: 'Нажатие на кнопку'
        });
      }
    }]
  }
}`,...(F=(D=c.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var G,M,O;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    title: 'Карточка с кнопкой',
    btnConf: {
      icon: 'pencil',
      handler: () => Notify.create({
        message: 'Нажатие на кнопку'
      })
    }
  }
}`,...(O=(M=i.parameters)==null?void 0:M.docs)==null?void 0:O.source}}};const or=["WithTitle","InfoColor","ErrorColor","WarningColor","SuccessColor","GrayColor","NoStretch","WithMenu","WithBtn"];export{o as ErrorColor,a as GrayColor,e as InfoColor,t as NoStretch,n as SuccessColor,s as WarningColor,i as WithBtn,c as WithMenu,r as WithTitle,or as __namedExportsOrder,er as default};
