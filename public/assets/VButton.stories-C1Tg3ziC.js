import{V as W,Q as $e}from"./VTable-DnoZjJu1.js";import{c as L}from"./iframe-Cpxs_JI5.js";import"./VExpansionItem-8mNTCM7g.js";import"./BarcodeIcon-CtJXGP-A.js";import"./DatamatrixIcon-B55ioFzH.js";import"./preload-helper-Dp1pzeXC.js";const I={primary:"Основной",secondary:"Второстепенный",plane:"Плоский",outline:"С границей",red:"Красная"},O={left:"Слева",center:"По центру",right:"Справа"},H={lg:"Большой",md:"Средний",sm:"Маленький",xs:"Очень маленький",xxs:"Крохотный"},v={empty:"Без иконки",left:"Слева",right:"Справа"},et="bad",tt="arrow",rt="aggregation",st="finish-aggregation",ot="barcode",nt="data-matrix",at="restart",T={bad:et,arrow:tt,aggregation:rt,finishAggregation:st,barcode:ot,dataMatrix:nt,restart:at},ut={component:W,argTypes:{color:{description:"Цвет кнопки",options:Object.keys(I),control:{type:"select",labels:I}},text:{description:"Текст кнопки"},textAlignment:{description:"Положение текста",options:Object.keys(O),control:{type:"select",labels:O}},isDisabled:{description:"Неактивное состояние",options:[!0,!1],control:{type:"boolean"}},height:{description:"Размер кнопки",options:Object.keys(H),control:{type:"select",labels:H}},isRounded:{description:"Скругленные края",options:[!0,!1],control:{type:"boolean"}},icon:{description:"Имя иконки (название файла из папки с иконками без расширения)",options:Object.keys(T),mapping:T,control:{type:"select",labels:T}},iconPosition:{description:"Расположение иконки",options:Object.keys(v),mapping:location,control:{type:"select",labels:v}},iconSize:{description:"Размер иконки",control:"number"},fitWidth:{description:"Отменить растягивание кнопки",options:[!0,!1],control:{type:"boolean"}},once:{description:"Кнопка срабатывает один раз, после чего становится disable, и иконка меняется на галочку",options:[!0,!1],control:{type:"boolean"}},enableHold:{description:"Удерживание кнопки с прогресс баром",options:[!0,!1],control:{type:"boolean"}},borderRadius:{description:"Радиус границы"},default:{table:{disable:!0}},menu:{description:"Слот для меню. <br/> Пример использования см. ниже"}},args:{color:"primary",height:"lg",text:"Кнопка",textAlignment:"center",borderRadius:"8px",isDisabled:!1,isRounded:!0,icon:"",iconPosition:void 0,iconSize:30,fitWidth:!1,once:!1,enableHold:!1},render:q=>({components:{VButton:W},setup(){const Xe=L(()=>{const{text:ct,...Ze}=q;return Ze}),Ye=L(()=>q.text);return{bindingArgs:Xe,text:Ye}},template:`
      <v-button v-bind="bindingArgs">{{ text }}</v-button>`}),parameters:{docs:{description:{component:`Компонент кнопки с длительным нажатием, используемый на планшетах. Можно регулировать цвет кнопки, её текст и управлять
наличием иконки и её расположением`}}}},t={args:{text:"Основной вариант"}},r={args:{text:"Вторичный вариант",color:"secondary"}},s={args:{text:"Вариант без границы и заднего фона",color:"plane"}},o={args:{text:"Вариант с границами",color:"outline"}},n={args:{text:"Красная кнопка",color:"red"}},a={args:{text:"Неактивная кнопка",isDisabled:!0}},c={name:"Border Radius 4px",args:{borderRadius:"4px"}},i={args:{text:"Не скругленная",isRounded:!1}},l={args:{text:"Текст слева",textAlignment:"left"}},p={args:{text:"Текст справа",textAlignment:"right"}},d={args:{text:"Большая кнопка",height:"lg"}},m={args:{text:"Маленькая кнопка",height:"sm"}},g={args:{text:"Очень маленькая кнопка",height:"xs"}},u={args:{text:"Крохотная кнопка",height:"xxs"}},x={args:{text:"Иконка слева текст слева",iconPosition:"left",icon:"bad",textAlignment:"left"}},h={args:{text:"Иконка слева текст по центру",iconPosition:"left",icon:"bad"}},b={args:{text:"Иконка слева текст справа",iconPosition:"left",icon:"bad",textAlignment:"right"}},f={args:{text:"Иконка справа текст слева",iconPosition:"right",icon:"bad",textAlignment:"left"}},e={args:{}};e.args={text:"Иконка справа текст по центру",iconPosition:"right",icon:"bad"};const S={args:{text:"Иконка справа текст справа",iconPosition:"right",icon:"bad",textAlignment:"right"}},y={args:{text:"Кнопка с удержанием",enableHold:!0}},R={args:{text:"Однократное срабатывание",once:!0}},A={args:{text:"Однократное срабатывание с удержанием",once:!0,enableHold:!0}},P={render:()=>({components:{VButton:W,QMenu:$e},setup(){},template:`
      <v-button>
        Кнопка с меню
        <template #menu>
          <q-menu class="q-pa-sm">
            <ul>
              <li class="q-pa-sm">Пункт 1</li>
              <li class="q-pa-sm">Пункт 2</li>
              <li class="q-pa-sm">Пункт 3</li>
            </ul>
          </q-menu>
        </template>
      </v-button>`})};var E,B,C;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    text: 'Основной вариант'
  }
}`,...(C=(B=t.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var D,j,k;r.parameters={...r.parameters,docs:{...(D=r.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    text: 'Вторичный вариант',
    color: 'secondary'
  }
}`,...(k=(j=r.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var M,Q,V;s.parameters={...s.parameters,docs:{...(M=s.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    text: 'Вариант без границы и заднего фона',
    color: 'plane'
  }
}`,...(V=(Q=s.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var w,z,_;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    text: 'Вариант с границами',
    color: 'outline'
  }
}`,...(_=(z=o.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};var N,F,G;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    text: 'Красная кнопка',
    color: 'red'
  }
}`,...(G=(F=n.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var J,K,U;a.parameters={...a.parameters,docs:{...(J=a.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    text: 'Неактивная кнопка',
    isDisabled: true
  }
}`,...(U=(K=a.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var X,Y,Z;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Border Radius 4px',
  args: {
    borderRadius: '4px'
  }
}`,...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;i.parameters={...i.parameters,docs:{...($=i.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    text: 'Не скругленная',
    isRounded: false
  }
}`,...(te=(ee=i.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,se,oe;l.parameters={...l.parameters,docs:{...(re=l.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    text: 'Текст слева',
    textAlignment: 'left'
  }
}`,...(oe=(se=l.parameters)==null?void 0:se.docs)==null?void 0:oe.source}}};var ne,ae,ce;p.parameters={...p.parameters,docs:{...(ne=p.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    text: 'Текст справа',
    textAlignment: 'right'
  }
}`,...(ce=(ae=p.parameters)==null?void 0:ae.docs)==null?void 0:ce.source}}};var ie,le,pe;d.parameters={...d.parameters,docs:{...(ie=d.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    text: 'Большая кнопка',
    height: 'lg'
  }
}`,...(pe=(le=d.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var de,me,ge;m.parameters={...m.parameters,docs:{...(de=m.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    text: 'Маленькая кнопка',
    height: 'sm'
  }
}`,...(ge=(me=m.parameters)==null?void 0:me.docs)==null?void 0:ge.source}}};var ue,xe,he;g.parameters={...g.parameters,docs:{...(ue=g.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  args: {
    text: 'Очень маленькая кнопка',
    height: 'xs'
  }
}`,...(he=(xe=g.parameters)==null?void 0:xe.docs)==null?void 0:he.source}}};var be,fe,Se;u.parameters={...u.parameters,docs:{...(be=u.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    text: 'Крохотная кнопка',
    height: 'xxs'
  }
}`,...(Se=(fe=u.parameters)==null?void 0:fe.docs)==null?void 0:Se.source}}};var ye,Re,Ae;x.parameters={...x.parameters,docs:{...(ye=x.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    text: 'Иконка слева текст слева',
    iconPosition: 'left',
    icon: 'bad',
    textAlignment: 'left'
  }
}`,...(Ae=(Re=x.parameters)==null?void 0:Re.docs)==null?void 0:Ae.source}}};var Pe,Te,We;h.parameters={...h.parameters,docs:{...(Pe=h.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    text: 'Иконка слева текст по центру',
    iconPosition: 'left',
    icon: 'bad'
  }
}`,...(We=(Te=h.parameters)==null?void 0:Te.docs)==null?void 0:We.source}}};var qe,Le,Ie;b.parameters={...b.parameters,docs:{...(qe=b.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    text: 'Иконка слева текст справа',
    iconPosition: 'left',
    icon: 'bad',
    textAlignment: 'right'
  }
}`,...(Ie=(Le=b.parameters)==null?void 0:Le.docs)==null?void 0:Ie.source}}};var Oe,He,ve;f.parameters={...f.parameters,docs:{...(Oe=f.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    text: 'Иконка справа текст слева',
    iconPosition: 'right',
    icon: 'bad',
    textAlignment: 'left'
  }
}`,...(ve=(He=f.parameters)==null?void 0:He.docs)==null?void 0:ve.source}}};var Ee,Be,Ce;e.parameters={...e.parameters,docs:{...(Ee=e.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {}
}`,...(Ce=(Be=e.parameters)==null?void 0:Be.docs)==null?void 0:Ce.source}}};var De,je,ke;S.parameters={...S.parameters,docs:{...(De=S.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    text: 'Иконка справа текст справа',
    iconPosition: 'right',
    icon: 'bad',
    textAlignment: 'right'
  }
}`,...(ke=(je=S.parameters)==null?void 0:je.docs)==null?void 0:ke.source}}};var Me,Qe,Ve;y.parameters={...y.parameters,docs:{...(Me=y.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    text: 'Кнопка с удержанием',
    enableHold: true
  }
}`,...(Ve=(Qe=y.parameters)==null?void 0:Qe.docs)==null?void 0:Ve.source}}};var we,ze,_e;R.parameters={...R.parameters,docs:{...(we=R.parameters)==null?void 0:we.docs,source:{originalSource:`{
  args: {
    text: 'Однократное срабатывание',
    once: true
  }
}`,...(_e=(ze=R.parameters)==null?void 0:ze.docs)==null?void 0:_e.source}}};var Ne,Fe,Ge;A.parameters={...A.parameters,docs:{...(Ne=A.parameters)==null?void 0:Ne.docs,source:{originalSource:`{
  args: {
    text: 'Однократное срабатывание с удержанием',
    once: true,
    enableHold: true
  }
}`,...(Ge=(Fe=A.parameters)==null?void 0:Fe.docs)==null?void 0:Ge.source}}};var Je,Ke,Ue;P.parameters={...P.parameters,docs:{...(Je=P.parameters)==null?void 0:Je.docs,source:{originalSource:`{
  render: () => ({
    components: {
      VButton,
      QMenu
    },
    setup() {},
    template: \`
      <v-button>
        Кнопка с меню
        <template #menu>
          <q-menu class="q-pa-sm">
            <ul>
              <li class="q-pa-sm">Пункт 1</li>
              <li class="q-pa-sm">Пункт 2</li>
              <li class="q-pa-sm">Пункт 3</li>
            </ul>
          </q-menu>
        </template>
      </v-button>\`
  })
}`,...(Ue=(Ke=P.parameters)==null?void 0:Ke.docs)==null?void 0:Ue.source}}};const xt=["Primary","Secondary","Plane","Outline","Red","Disabled","BorderRadius4px","Square","TextLeft","TextRight","Large","Small","ExtraSmall","ExtraExtraSmall","IconLeftWithTextLeft","IconLeftWithTextCenter","IconLeftWithTextRight","IconRightWithTextLeft","IconRightTextCenter","IconRightWithTextCenter","Hold","Once","OnceWithHold","WithMenu"];export{c as BorderRadius4px,a as Disabled,u as ExtraExtraSmall,g as ExtraSmall,y as Hold,h as IconLeftWithTextCenter,x as IconLeftWithTextLeft,b as IconLeftWithTextRight,e as IconRightTextCenter,S as IconRightWithTextCenter,f as IconRightWithTextLeft,d as Large,R as Once,A as OnceWithHold,o as Outline,s as Plane,t as Primary,n as Red,r as Secondary,m as Small,i as Square,l as TextLeft,p as TextRight,P as WithMenu,xt as __namedExportsOrder,ut as default};
