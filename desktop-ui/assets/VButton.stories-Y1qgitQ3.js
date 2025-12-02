import{N as dt,c as q}from"./iframe-00K2Dmlk.js";import{_ as L,Q as pt}from"./QMenu-KnACDGFu.js";import"./preload-helper-BVW3a-N4.js";import"./base-ui.es-KFfLC6Sd.js";const B={primary:"Основной",secondary:"Второстепенный",plain:"Плоский",outline:"С границей",red:"Красная"},H={left:"Слева",center:"По центру",right:"Справа"},w={lg:"Большой",md:"Средний",sm:"Маленький",xs:"Очень маленький"},mt="bad",gt="arrow",ut="aggregation",xt="finish-aggregation",bt="barcode",ht="data-matrix",ft="restart",e={Нет:void 0,bad:mt,arrow:gt,aggregation:ut,finishAggregation:xt,barcode:bt,dataMatrix:ht,restart:ft},Wt={component:L,argTypes:{color:{description:"Цвет кнопки",options:Object.keys(B),control:{type:"select",labels:B}},text:{description:"Текст кнопки"},textAlignment:{description:"Положение текста",options:Object.keys(H),control:{type:"select",labels:H}},disable:{description:"Неактивное состояние",options:[!0,!1],control:{type:"boolean"}},size:{description:"Размер элементов и отступов у кнопки (высота кнопки, размер иконок, font-size, padding, gap). Каждое значение может быть через отдельный соответствующий проп: <br/>`fontSize` — размер шрифта <br/>`padding` — отступы <br/>`height` — высота кнопки <br/>`iconSize` — размер иконки <br/>`gap` — расстояние между текстом и иконками <br/>",options:Object.keys(w),control:{type:"select",labels:w}},fontSize:{description:"Размер шрифта. <br/> Переопределяет соответствующее значение из пропа `size`"},height:{description:"Высота кнопки. <br/> Переопределяет соответствующее значение из пропа `size`"},gap:{description:"Расстояние между текстом и иконками. <br/> Переопределяет соответствующее значение из пропа `size`"},padding:{description:"Внутренний отступ кнопки. <br/> Переопределяет соответствующее значение из пропа `size`",control:{type:"text"}},icon:{description:"Имя для левой иконки (название файла из папки с иконками без расширения)",options:Object.keys(e),mapping:e,control:{type:"select",labels:e}},iconRight:{description:"Имя для правой иконки (название файла из папки с иконками без расширения)",options:Object.keys(e),mapping:e,control:{type:"select",labels:e}},iconSize:{description:"Размер иконки. <br/> Переопределяет соответствующее значение из пропа `size`",control:"text"},fitWidth:{description:"Отменить растягивание кнопки",options:[!0,!1],control:{type:"boolean"}},once:{description:"Кнопка срабатывает один раз, после чего становится disable, и иконка меняется на галочку",options:[!0,!1],control:{type:"boolean"}},enableHold:{description:"Удерживание кнопки с прогресс баром",options:[!0,!1],control:{type:"boolean"}},borderRadius:{description:"Радиус границы"},default:{table:{disable:!0}},menu:{description:"Слот для меню. <br/> Пример использования см. ниже"},noCaps:{table:{disable:!0}},push:{table:{disable:!0}},unelevated:{table:{disable:!0}},ripple:{table:{disable:!0}},glossy:{table:{disable:!0}},flat:{table:{disable:!0}},rounded:{table:{disable:!0}}},args:{color:"primary",size:"lg",text:"Кнопка",textAlignment:"center",borderRadius:"4px",disable:!1,icon:void 0,iconRight:void 0,iconSize:void 0,fitWidth:!1,once:!1,enableHold:!1,fontSize:void 0,height:void 0,gap:void 0,padding:void 0},render:O=>({components:{VButton:L},setup(){const ct=q(()=>{const{text:St,...lt}=O;return lt}),it=q(()=>O.text);return{bindingArgs:ct,text:it}},template:`
      <v-button v-bind="bindingArgs">
        <template #default v-if="text">
          {{ text }}
        </template>
      </v-button>`}),parameters:{docs:{description:{component:"Компонент кнопки, базово использует QBtn. Поддерживает отображение иконок с обеих сторон, удержание кнопки, а также однократное срабатывание. <br/>\n Кнопка принимает квадратный вид, если используется только ОДНА иконка, проп `fit-width = true` и в слот `default` не прокидывается ничего (см. пример [OnlyIcon](?path=/story/ui-vbutton--only-icon))"}}}},t={args:{text:"Основной вариант"}},r={args:{text:"Вторичный вариант",color:"secondary"}},s={args:{text:"Вариант без границы и заднего фона",color:"plain"}},n={args:{text:"Вариант с границами",color:"outline"}},o={args:{text:"Красная кнопка",color:"red"}},a={args:{text:"Неактивная кнопка",disable:!0}},c={args:{text:"Не скругленная",borderRadius:"0"}},i={args:{text:"Текст слева",textAlignment:"left"}},l={args:{text:"Текст справа",textAlignment:"right"}},d={args:{text:"Большая кнопка",size:"lg"}},p={args:{text:"Средняя кнопка",size:"md"}},m={args:{text:"Маленькая кнопка",size:"sm"}},g={args:{text:"Очень маленькая кнопка",size:"xs"}},u={args:{text:"Иконка слева текст слева",icon:"bad",textAlignment:"left"}},x={args:{text:"Иконка слева текст по центру",icon:"bad"}},b={args:{text:"Иконка слева текст справа",icon:"bad",textAlignment:"right"}},h={args:{text:"Иконка справа текст слева",iconRight:"bad",textAlignment:"left"}},f={args:{text:"Иконка справа текст по центру",iconRight:"bad"}},S={args:{text:"Иконка справа текст справа",iconRight:"bad",textAlignment:"right"}},y={args:{text:"Обе иконки текст слева",icon:"arrow",iconRight:"bad",textAlignment:"left"}},R={args:{text:"Обе иконки текст по центру",icon:"arrow",iconRight:"bad",textAlignment:"center"}},z={args:{text:"Обе иконки текст справа",icon:"arrow",iconRight:"bad",textAlignment:"right"}},A={args:{text:"Кнопка с удержанием",enableHold:!0}},W={args:{text:"Однократное срабатывание",once:!0}},T={args:{text:"Однократное срабатывание с удержанием",once:!0,enableHold:!0}},I={render:()=>({components:{VButton:L,QMenu:pt,Notify:dt},setup(){},template:`
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
      </v-button>`})},v={args:{size:"xs",text:void 0,icon:"pencil",fitWidth:!0}};var C,M,j;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    text: 'Основной вариант'
  }
}`,...(j=(M=t.parameters)==null?void 0:M.docs)==null?void 0:j.source}}};var k,_,N;r.parameters={...r.parameters,docs:{...(k=r.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    text: 'Вторичный вариант',
    color: 'secondary'
  }
}`,...(N=(_=r.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var P,Q,E;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    text: 'Вариант без границы и заднего фона',
    color: 'plain'
  }
}`,...(E=(Q=s.parameters)==null?void 0:Q.docs)==null?void 0:E.source}}};var V,D,F;n.parameters={...n.parameters,docs:{...(V=n.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    text: 'Вариант с границами',
    color: 'outline'
  }
}`,...(F=(D=n.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var G,J,K;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    text: 'Красная кнопка',
    color: 'red'
  }
}`,...(K=(J=o.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var U,X,Y;a.parameters={...a.parameters,docs:{...(U=a.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    text: 'Неактивная кнопка',
    disable: true
  }
}`,...(Y=(X=a.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    text: 'Не скругленная',
    borderRadius: '0'
  }
}`,...(ee=($=c.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,re,se;i.parameters={...i.parameters,docs:{...(te=i.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    text: 'Текст слева',
    textAlignment: 'left'
  }
}`,...(se=(re=i.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var ne,oe,ae;l.parameters={...l.parameters,docs:{...(ne=l.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    text: 'Текст справа',
    textAlignment: 'right'
  }
}`,...(ae=(oe=l.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var ce,ie,le;d.parameters={...d.parameters,docs:{...(ce=d.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    text: 'Большая кнопка',
    size: 'lg'
  }
}`,...(le=(ie=d.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var de,pe,me;p.parameters={...p.parameters,docs:{...(de=p.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    text: 'Средняя кнопка',
    size: 'md'
  }
}`,...(me=(pe=p.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,ue,xe;m.parameters={...m.parameters,docs:{...(ge=m.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    text: 'Маленькая кнопка',
    size: 'sm'
  }
}`,...(xe=(ue=m.parameters)==null?void 0:ue.docs)==null?void 0:xe.source}}};var be,he,fe;g.parameters={...g.parameters,docs:{...(be=g.parameters)==null?void 0:be.docs,source:{originalSource:`{
  args: {
    text: 'Очень маленькая кнопка',
    size: 'xs'
  }
}`,...(fe=(he=g.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var Se,ye,Re;u.parameters={...u.parameters,docs:{...(Se=u.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    text: 'Иконка слева текст слева',
    icon: 'bad',
    textAlignment: 'left'
  }
}`,...(Re=(ye=u.parameters)==null?void 0:ye.docs)==null?void 0:Re.source}}};var ze,Ae,We;x.parameters={...x.parameters,docs:{...(ze=x.parameters)==null?void 0:ze.docs,source:{originalSource:`{
  args: {
    text: 'Иконка слева текст по центру',
    icon: 'bad'
  }
}`,...(We=(Ae=x.parameters)==null?void 0:Ae.docs)==null?void 0:We.source}}};var Te,Ie,ve;b.parameters={...b.parameters,docs:{...(Te=b.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    text: 'Иконка слева текст справа',
    icon: 'bad',
    textAlignment: 'right'
  }
}`,...(ve=(Ie=b.parameters)==null?void 0:Ie.docs)==null?void 0:ve.source}}};var Le,Oe,qe;h.parameters={...h.parameters,docs:{...(Le=h.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    text: 'Иконка справа текст слева',
    iconRight: 'bad',
    textAlignment: 'left'
  }
}`,...(qe=(Oe=h.parameters)==null?void 0:Oe.docs)==null?void 0:qe.source}}};var Be,He,we;f.parameters={...f.parameters,docs:{...(Be=f.parameters)==null?void 0:Be.docs,source:{originalSource:`{
  args: {
    text: 'Иконка справа текст по центру',
    iconRight: 'bad'
  }
}`,...(we=(He=f.parameters)==null?void 0:He.docs)==null?void 0:we.source}}};var Ce,Me,je;S.parameters={...S.parameters,docs:{...(Ce=S.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    text: 'Иконка справа текст справа',
    iconRight: 'bad',
    textAlignment: 'right'
  }
}`,...(je=(Me=S.parameters)==null?void 0:Me.docs)==null?void 0:je.source}}};var ke,_e,Ne;y.parameters={...y.parameters,docs:{...(ke=y.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  args: {
    text: 'Обе иконки текст слева',
    icon: 'arrow',
    iconRight: 'bad',
    textAlignment: 'left'
  }
}`,...(Ne=(_e=y.parameters)==null?void 0:_e.docs)==null?void 0:Ne.source}}};var Pe,Qe,Ee;R.parameters={...R.parameters,docs:{...(Pe=R.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    text: 'Обе иконки текст по центру',
    icon: 'arrow',
    iconRight: 'bad',
    textAlignment: 'center'
  }
}`,...(Ee=(Qe=R.parameters)==null?void 0:Qe.docs)==null?void 0:Ee.source}}};var Ve,De,Fe;z.parameters={...z.parameters,docs:{...(Ve=z.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  args: {
    text: 'Обе иконки текст справа',
    icon: 'arrow',
    iconRight: 'bad',
    textAlignment: 'right'
  }
}`,...(Fe=(De=z.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};var Ge,Je,Ke;A.parameters={...A.parameters,docs:{...(Ge=A.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
  args: {
    text: 'Кнопка с удержанием',
    enableHold: true
  }
}`,...(Ke=(Je=A.parameters)==null?void 0:Je.docs)==null?void 0:Ke.source}}};var Ue,Xe,Ye;W.parameters={...W.parameters,docs:{...(Ue=W.parameters)==null?void 0:Ue.docs,source:{originalSource:`{
  args: {
    text: 'Однократное срабатывание',
    once: true
  }
}`,...(Ye=(Xe=W.parameters)==null?void 0:Xe.docs)==null?void 0:Ye.source}}};var Ze,$e,et;T.parameters={...T.parameters,docs:{...(Ze=T.parameters)==null?void 0:Ze.docs,source:{originalSource:`{
  args: {
    text: 'Однократное срабатывание с удержанием',
    once: true,
    enableHold: true
  }
}`,...(et=($e=T.parameters)==null?void 0:$e.docs)==null?void 0:et.source}}};var tt,rt,st;I.parameters={...I.parameters,docs:{...(tt=I.parameters)==null?void 0:tt.docs,source:{originalSource:`{
  render: () => ({
    components: {
      VButton,
      QMenu,
      Notify
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
}`,...(st=(rt=I.parameters)==null?void 0:rt.docs)==null?void 0:st.source}}};var nt,ot,at;v.parameters={...v.parameters,docs:{...(nt=v.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    text: undefined,
    icon: 'pencil',
    fitWidth: true
  }
}`,...(at=(ot=v.parameters)==null?void 0:ot.docs)==null?void 0:at.source}}};const Tt=["Primary","Secondary","Plain","Outline","Red","Disabled","Square","TextLeft","TextRight","Large","Medium","Small","ExtraSmall","IconLeftWithTextLeft","IconLeftWithTextCenter","IconLeftWithTextRight","IconRightWithTextLeft","IconRightTextCenter","IconRightWithTextCenter","BothIconsWithTextLeft","BothIconsWithTextCenter","BothIconsWithTextRight","Hold","Once","OnceWithHold","WithMenu","OnlyIcon"];export{R as BothIconsWithTextCenter,y as BothIconsWithTextLeft,z as BothIconsWithTextRight,a as Disabled,g as ExtraSmall,A as Hold,x as IconLeftWithTextCenter,u as IconLeftWithTextLeft,b as IconLeftWithTextRight,f as IconRightTextCenter,S as IconRightWithTextCenter,h as IconRightWithTextLeft,d as Large,p as Medium,W as Once,T as OnceWithHold,v as OnlyIcon,n as Outline,s as Plain,t as Primary,o as Red,r as Secondary,m as Small,c as Square,i as TextLeft,l as TextRight,I as WithMenu,Tt as __namedExportsOrder,Wt as default};
