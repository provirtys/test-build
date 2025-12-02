import{Q as Ye}from"./VTable-DQX6bRF2.js";import{c as v}from"./iframe-BMvi5wpB.js";import{V as T}from"./VSelect-CnqL67n3.js";import"./use-model-toggle-BJR_KrtC.js";import"./use-dark-64yaaoq3.js";import"./option-sizes-CT-NW1P-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Dp1pzeXC.js";import"./BarcodeIcon-DFjiR5Zt.js";import"./DatamatrixIcon-BCc4cwb-.js";import"./VBadge-BHGbBCeA.js";import"./VExpansionItem-DCA6hHRU.js";import"./VIcon-CFACg57l.js";import"./VRadio-v15LJOPu.js";const q={primary:"Основной",secondary:"Второстепенный",plain:"Плоский",outline:"С границей",red:"Красная"},L={left:"Слева",center:"По центру",right:"Справа"},Ze="bad",$e="arrow",et="aggregation",tt="finish-aggregation",rt="barcode",nt="data-matrix",ot="restart",e={Нет:void 0,bad:Ze,arrow:$e,aggregation:et,finishAggregation:tt,barcode:rt,dataMatrix:nt,restart:ot},St={component:T,argTypes:{color:{description:"Цвет кнопки",options:Object.keys(q),control:{type:"select",labels:q}},text:{description:"Текст кнопки"},textAlignment:{description:"Положение текста",options:Object.keys(L),control:{type:"select",labels:L}},centeredContent:{description:"Располагать контент по центру <br/>Если `true`, то проп `textAlignment` не учитывается при расположении текста"},disable:{description:"Неактивное состояние",options:[!0,!1],control:{type:"boolean"}},fontSize:{description:"Размер шрифта. <br/> Переопределяет соответствующее значение из пропа `size`"},height:{description:"Высота кнопки. <br/> Переопределяет соответствующее значение из пропа `size`"},gap:{description:"Расстояние между текстом и иконками. <br/> Переопределяет соответствующее значение из пропа `size`"},padding:{description:"Внутренний отступ кнопки. <br/> Переопределяет соответствующее значение из пропа `size`",control:{type:"text"}},icon:{description:"Имя для левой иконки (название файла из папки с иконками без расширения)",options:Object.keys(e),mapping:e,control:{type:"select",labels:e}},iconRight:{description:"Имя для правой иконки (название файла из папки с иконками без расширения)",options:Object.keys(e),mapping:e,control:{type:"select",labels:e}},iconSize:{description:"Размер иконки. <br/> Переопределяет соответствующее значение из пропа `size`",control:"text"},fitWidth:{description:"Отменить растягивание кнопки",options:[!0,!1],control:{type:"boolean"}},once:{description:"Кнопка срабатывает один раз, после чего становится disable, и иконка меняется на галочку",options:[!0,!1],control:{type:"boolean"}},enableHold:{description:"Удерживание кнопки с прогресс баром",options:[!0,!1],control:{type:"boolean"}},borderRadius:{description:"Радиус границы"},default:{table:{disable:!0}},menu:{description:"Слот для меню. <br/> Пример использования см. ниже"},noCaps:{table:{disable:!0}},push:{table:{disable:!0}},unelevated:{table:{disable:!0}},ripple:{table:{disable:!0}},glossy:{table:{disable:!0}},flat:{table:{disable:!0}},rounded:{table:{disable:!0}}},args:{color:"primary",text:"Кнопка",textAlignment:"center",centeredContent:!0,borderRadius:"8px",disable:!1,icon:void 0,iconRight:void 0,iconSize:20,fitWidth:!1,once:!1,enableHold:!1,fontSize:void 0,height:void 0,gap:void 0,padding:void 0},render:I=>({components:{VButton:T},setup(){const Ke=v(()=>{const{text:st,...Xe}=I;return Xe}),Ue=v(()=>I.text);return{bindingArgs:Ke,text:Ue}},template:`
      <v-button v-bind="bindingArgs">
        <template #default v-if="text">
          {{ text }}
        </template>
      </v-button>`}),parameters:{docs:{description:{component:"Компонент кнопки, базово использует QBtn. Поддерживает отображение иконок с обеих сторон, удержание кнопки, а также однократное срабатывание. <br/>\n Кнопка принимает квадратный вид, если используется только ОДНА иконка, проп `fit-width = true` и в слот `default` не прокидывается ничего (см. пример [OnlyIcon](?path=/story/ui-vbutton--only-icon)) <br/>\n Проп `size` вынесен из этого компонента и настраивается для каждого пакета индивидуально через пропсы `fontSize`, `height`, `padding`, `gap`, `iconSize`."}}}},t={args:{text:"Основной вариант"}},r={args:{text:"Вторичный вариант",color:"secondary"}},n={args:{text:"Вариант без границы и заднего фона",color:"plain"}},o={args:{text:"Вариант с границами",color:"outline"}},s={args:{text:"Красная кнопка",color:"red"}},a={args:{text:"Неактивная кнопка",disable:!0}},c={name:"Border Radius 4px",args:{borderRadius:"4px"}},i={args:{text:"Не скругленная",borderRadius:"0"}},d={args:{text:"Текст слева",textAlignment:"left",centeredContent:!1}},l={args:{text:"Текст справа",textAlignment:"right",centeredContent:!1}},p={args:{text:"Иконка слева текст слева",icon:"bad",textAlignment:"left",centeredContent:!1}},m={args:{text:"Иконка слева текст по центру",icon:"bad",centeredContent:!1}},g={args:{text:"Иконка слева текст справа",icon:"bad",textAlignment:"right",centeredContent:!1}},u={args:{text:"Иконка справа текст слева",iconRight:"bad",textAlignment:"left",centeredContent:!1}},x={args:{text:"Иконка справа текст по центру",iconRight:"bad",centeredContent:!1}},b={args:{text:"Иконка справа текст справа",iconRight:"bad",textAlignment:"right",centeredContent:!1}},h={args:{text:"Обе иконки текст слева",icon:"arrow",iconRight:"bad",textAlignment:"left",centeredContent:!1}},f={args:{text:"Обе иконки текст по центру",icon:"arrow",iconRight:"bad",textAlignment:"center",centeredContent:!1}},R={args:{text:"Обе иконки текст справа",icon:"arrow",iconRight:"bad",textAlignment:"right",centeredContent:!1}},S={args:{text:"Кнопка с удержанием",enableHold:!0}},C={args:{text:"Однократное срабатывание",once:!0}},y={args:{text:"Однократное срабатывание с удержанием",once:!0,enableHold:!0}},A={render:()=>({components:{VButton:T,QMenu:Ye},setup(){},template:`
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
      </v-button>`})},W={args:{text:void 0,icon:"pencil",fitWidth:!0}};var O,B,z;t.parameters={...t.parameters,docs:{...(O=t.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    text: 'Основной вариант'
  }
}`,...(z=(B=t.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var H,w,M;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    text: 'Вторичный вариант',
    color: 'secondary'
  }
}`,...(M=(w=r.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var j,k,P;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    text: 'Вариант без границы и заднего фона',
    color: 'plain'
  }
}`,...(P=(k=n.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var Q,V,D;o.parameters={...o.parameters,docs:{...(Q=o.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    text: 'Вариант с границами',
    color: 'outline'
  }
}`,...(D=(V=o.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var _,E,N;s.parameters={...s.parameters,docs:{...(_=s.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    text: 'Красная кнопка',
    color: 'red'
  }
}`,...(N=(E=s.parameters)==null?void 0:E.docs)==null?void 0:N.source}}};var F,G,J;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    text: 'Неактивная кнопка',
    disable: true
  }
}`,...(J=(G=a.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,U,X;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Border Radius 4px',
  args: {
    borderRadius: '4px'
  }
}`,...(X=(U=c.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Y,Z,$;i.parameters={...i.parameters,docs:{...(Y=i.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    text: 'Не скругленная',
    borderRadius: '0'
  }
}`,...($=(Z=i.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,re;d.parameters={...d.parameters,docs:{...(ee=d.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    text: 'Текст слева',
    textAlignment: 'left',
    centeredContent: false
  }
}`,...(re=(te=d.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ne,oe,se;l.parameters={...l.parameters,docs:{...(ne=l.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    text: 'Текст справа',
    textAlignment: 'right',
    centeredContent: false
  }
}`,...(se=(oe=l.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ae,ce,ie;p.parameters={...p.parameters,docs:{...(ae=p.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    text: 'Иконка слева текст слева',
    icon: 'bad',
    textAlignment: 'left',
    centeredContent: false
  }
}`,...(ie=(ce=p.parameters)==null?void 0:ce.docs)==null?void 0:ie.source}}};var de,le,pe;m.parameters={...m.parameters,docs:{...(de=m.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    text: 'Иконка слева текст по центру',
    icon: 'bad',
    centeredContent: false
  }
}`,...(pe=(le=m.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};var me,ge,ue;g.parameters={...g.parameters,docs:{...(me=g.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    text: 'Иконка слева текст справа',
    icon: 'bad',
    textAlignment: 'right',
    centeredContent: false
  }
}`,...(ue=(ge=g.parameters)==null?void 0:ge.docs)==null?void 0:ue.source}}};var xe,be,he;u.parameters={...u.parameters,docs:{...(xe=u.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  args: {
    text: 'Иконка справа текст слева',
    iconRight: 'bad',
    textAlignment: 'left',
    centeredContent: false
  }
}`,...(he=(be=u.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var fe,Re,Se;x.parameters={...x.parameters,docs:{...(fe=x.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  args: {
    text: 'Иконка справа текст по центру',
    iconRight: 'bad',
    centeredContent: false
  }
}`,...(Se=(Re=x.parameters)==null?void 0:Re.docs)==null?void 0:Se.source}}};var Ce,ye,Ae;b.parameters={...b.parameters,docs:{...(Ce=b.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    text: 'Иконка справа текст справа',
    iconRight: 'bad',
    textAlignment: 'right',
    centeredContent: false
  }
}`,...(Ae=(ye=b.parameters)==null?void 0:ye.docs)==null?void 0:Ae.source}}};var We,Te,Ie;h.parameters={...h.parameters,docs:{...(We=h.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    text: 'Обе иконки текст слева',
    icon: 'arrow',
    iconRight: 'bad',
    textAlignment: 'left',
    centeredContent: false
  }
}`,...(Ie=(Te=h.parameters)==null?void 0:Te.docs)==null?void 0:Ie.source}}};var ve,qe,Le;f.parameters={...f.parameters,docs:{...(ve=f.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    text: 'Обе иконки текст по центру',
    icon: 'arrow',
    iconRight: 'bad',
    textAlignment: 'center',
    centeredContent: false
  }
}`,...(Le=(qe=f.parameters)==null?void 0:qe.docs)==null?void 0:Le.source}}};var Oe,Be,ze;R.parameters={...R.parameters,docs:{...(Oe=R.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  args: {
    text: 'Обе иконки текст справа',
    icon: 'arrow',
    iconRight: 'bad',
    textAlignment: 'right',
    centeredContent: false
  }
}`,...(ze=(Be=R.parameters)==null?void 0:Be.docs)==null?void 0:ze.source}}};var He,we,Me;S.parameters={...S.parameters,docs:{...(He=S.parameters)==null?void 0:He.docs,source:{originalSource:`{
  args: {
    text: 'Кнопка с удержанием',
    enableHold: true
  }
}`,...(Me=(we=S.parameters)==null?void 0:we.docs)==null?void 0:Me.source}}};var je,ke,Pe;C.parameters={...C.parameters,docs:{...(je=C.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    text: 'Однократное срабатывание',
    once: true
  }
}`,...(Pe=(ke=C.parameters)==null?void 0:ke.docs)==null?void 0:Pe.source}}};var Qe,Ve,De;y.parameters={...y.parameters,docs:{...(Qe=y.parameters)==null?void 0:Qe.docs,source:{originalSource:`{
  args: {
    text: 'Однократное срабатывание с удержанием',
    once: true,
    enableHold: true
  }
}`,...(De=(Ve=y.parameters)==null?void 0:Ve.docs)==null?void 0:De.source}}};var _e,Ee,Ne;A.parameters={...A.parameters,docs:{...(_e=A.parameters)==null?void 0:_e.docs,source:{originalSource:`{
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
}`,...(Ne=(Ee=A.parameters)==null?void 0:Ee.docs)==null?void 0:Ne.source}}};var Fe,Ge,Je;W.parameters={...W.parameters,docs:{...(Fe=W.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
  args: {
    text: undefined,
    icon: 'pencil',
    fitWidth: true
  }
}`,...(Je=(Ge=W.parameters)==null?void 0:Ge.docs)==null?void 0:Je.source}}};const Ct=["Primary","Secondary","Plain","Outline","Red","Disabled","BorderRadius4px","Square","TextLeft","TextRight","IconLeftWithTextLeft","IconLeftWithTextCenter","IconLeftWithTextRight","IconRightWithTextLeft","IconRightTextCenter","IconRightWithTextCenter","BothIconsWithTextLeft","BothIconsWithTextCenter","BothIconsWithTextRight","Hold","Once","OnceWithHold","WithMenu","OnlyIcon"];export{c as BorderRadius4px,f as BothIconsWithTextCenter,h as BothIconsWithTextLeft,R as BothIconsWithTextRight,a as Disabled,S as Hold,m as IconLeftWithTextCenter,p as IconLeftWithTextLeft,g as IconLeftWithTextRight,x as IconRightTextCenter,b as IconRightWithTextCenter,u as IconRightWithTextLeft,C as Once,y as OnceWithHold,W as OnlyIcon,o as Outline,n as Plain,t as Primary,s as Red,r as Secondary,i as Square,d as TextLeft,l as TextRight,A as WithMenu,Ct as __namedExportsOrder,St as default};
