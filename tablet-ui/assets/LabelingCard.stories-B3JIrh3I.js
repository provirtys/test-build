import{n as oe}from"./base-ui.es-BJxydbDr.js";import{g as ae,u as ne}from"./iframe-Qc53npuj.js";import{L as p}from"./MainLayout-CT8nnaly.js";import"./preload-helper-Dp1pzeXC.js";import"./AppSettings-DLMfLkHL.js";import"./sleep-B5LgeCuU.js";import"./AppSettingsOptions-Be914qET.js";import"./private.use-form-DbMdEKWf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./BarChart-CrvAPWE0.js";import"./apexcharts.esm-PvBfBjQs.js";import"./BarChartTimeSeries-DFjbYa2z.js";import"./CodeCard-DteNLFZA.js";import"./FallbackLoader-D588njKg.js";import"./LabelingProgress-C3csWvr4.js";import"./ProgressPie-V3GcZL7N.js";import"./TaskCard-aiwjSP9z.js";import"./NumericRatio-CyUDWrfV.js";import"./StatusIndicator-BpsS_F8k.js";import"./TableAttributes-BmY6FmuQ.js";const ie=Date.now(),ke={component:p,argTypes:{showProgressBadge:{description:"Идет агрегация"},showProgressPie:{description:"Прогресс"},showRepeat:{description:"Повторная маркировка"},codeInfo:{description:"Информация по объекту"},buttons:{description:"Отображаемые кнопки",options:[0,1,2,3,4,5],control:{type:"select",labels:{0:"Нет",1:"Сканировать/Начать агрегацию",2:"Повторить маркировку/Брак маркировки",3:"Сканировать",4:"Подтвердить",5:"Сканировать/Закончить агрегацию"}}}},args:{buttons:0,codeInfo:{labeled:50,total:120,time:ie,code:"wv985fjs934",position:10}},render:se=>({components:{MarkingCard:p,VButton:oe},setup(){const te=ae(()=>se),{t:re}=ne();return{bindingArgs:te,t:re}},template:`
      <marking-card v-bind="bindingArgs">
        <template v-if="bindingArgs.buttons" #buttons>
          <template v-if="bindingArgs.buttons === 1">
            <v-button
                icon-right="scan"
                text-alignment="left"
                color="red"
            >
              {{ t('scan') }}
            </v-button>
            <v-button
                text-alignment="left"
            >
              {{ t('startAggregation') }}
            </v-button>
          </template>
          <template v-else-if="bindingArgs.buttons === 2">
            <v-button
                icon-right="restart"
                text-alignment="left"
                color="red"
            >
              {{ t('repeatLabeling') }}
            </v-button>
            <v-button
                icon-right="bad"
                text-alignment="left"
                color="secondary"
            >
              {{ t('labelingDefect') }}
            </v-button>
          </template>
          <template v-else-if="bindingArgs.buttons === 3">
            <v-button
                icon-right="scan"
                text-alignment="left"
                color="red"
            >
              {{ t('scan') }}
            </v-button>
          </template>
          <template v-else-if="bindingArgs.buttons === 4">
            <v-button
                icon-right="done"
                text-alignment="left"
                color="red"
            >
              {{ t('confirm') }}
            </v-button>
          </template>
          <template v-else-if="bindingArgs.buttons === 5">
            <v-button
                icon-right="scan"
                text-alignment="left"
                color="red"
            >
              {{ t('scan') }}
            </v-button>
            <v-button
                icon-right="aggregation"
                text-alignment="left"
            >
              {{ t('finishAggregation') }}
            </v-button>
          </template>
        </template>
      </marking-card>`}),parameters:{docs:{description:{component:"Компонент карточки маркировки"}}}},e={args:{showProgressBadge:!1,showProgressPie:!0,showRepeat:!1}},s={args:{showProgressBadge:!0,showProgressPie:!1,showRepeat:!1}},t={args:{showProgressBadge:!0,showProgressPie:!1,showRepeat:!0}},r={args:{showProgressBadge:!1,showProgressPie:!0,showRepeat:!1,buttons:1}},o={args:{showProgressBadge:!1,showProgressPie:!0,showRepeat:!1,buttons:2}},a={args:{showProgressBadge:!1,showProgressPie:!0,showRepeat:!0,buttons:2}},n={args:{showProgressBadge:!1,showProgressPie:!0,showRepeat:!1,buttons:3}},i={args:{showProgressBadge:!1,showProgressPie:!0,showRepeat:!1,buttons:4}},g={args:{showProgressBadge:!1,showProgressPie:!0,showRepeat:!1,buttons:5}};var c,d,u,l,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    showProgressBadge: false,
    showProgressPie: true,
    showRepeat: false
  }
}`,...(u=(d=e.parameters)==null?void 0:d.docs)==null?void 0:u.source},description:{story:"Прогресс маркировки",...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.description}}};var h,w,P,f,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    showProgressBadge: true,
    showProgressPie: false,
    showRepeat: false
  }
}`,...(P=(w=s.parameters)==null?void 0:w.docs)==null?void 0:P.source},description:{story:"Идет агрегация",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.description}}};var B,v,S,R,A;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    showProgressBadge: true,
    showProgressPie: false,
    showRepeat: true
  }
}`,...(S=(v=t.parameters)==null?void 0:v.docs)==null?void 0:S.source},description:{story:"Повторная маркировка",...(A=(R=t.parameters)==null?void 0:R.docs)==null?void 0:A.description}}};var y,W,x,k,I;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    showProgressBadge: false,
    showProgressPie: true,
    showRepeat: false,
    buttons: 1
  }
}`,...(x=(W=r.parameters)==null?void 0:W.docs)==null?void 0:x.source},description:{story:"Начало агрегации с кнопками",...(I=(k=r.parameters)==null?void 0:k.docs)==null?void 0:I.description}}};var L,C,D,T,_;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    showProgressBadge: false,
    showProgressPie: true,
    showRepeat: false,
    buttons: 2
  }
}`,...(D=(C=o.parameters)==null?void 0:C.docs)==null?void 0:D.source},description:{story:"Идет агрегация - Брак маркировки/Повторить маркировку",...(_=(T=o.parameters)==null?void 0:T.docs)==null?void 0:_.description}}};var j,E,M,O,V;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    showProgressBadge: false,
    showProgressPie: true,
    showRepeat: true,
    buttons: 2
  }
}`,...(M=(E=a.parameters)==null?void 0:E.docs)==null?void 0:M.source},description:{story:"Идет агрегация с повторной маркировкой - Брак маркировки/Повторить маркировку",...(V=(O=a.parameters)==null?void 0:O.docs)==null?void 0:V.description}}};var q,z,F,G,H;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    showProgressBadge: false,
    showProgressPie: true,
    showRepeat: false,
    buttons: 3
  }
}`,...(F=(z=n.parameters)==null?void 0:z.docs)==null?void 0:F.source},description:{story:"Брак маркировки - Сканировать",...(H=(G=n.parameters)==null?void 0:G.docs)==null?void 0:H.description}}};var J,K,N,Q,U;i.parameters={...i.parameters,docs:{...(J=i.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    showProgressBadge: false,
    showProgressPie: true,
    showRepeat: false,
    buttons: 4
  }
}`,...(N=(K=i.parameters)==null?void 0:K.docs)==null?void 0:N.source},description:{story:"Брак маркировки - Подтвердить",...(U=(Q=i.parameters)==null?void 0:Q.docs)==null?void 0:U.description}}};var X,Y,Z,$,ee;g.parameters={...g.parameters,docs:{...(X=g.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    showProgressBadge: false,
    showProgressPie: true,
    showRepeat: false,
    buttons: 5
  }
}`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source},description:{story:"Завершение агрегации",...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};const Ie=["Progress","goAggregation","repeatAggregation","WithButtonsSlot1","WithButtonsSlot2","WithButtonsSlot3","WithButtonsSlot4","WithButtonsSlot5","WithButtonsSlot6"];export{e as Progress,r as WithButtonsSlot1,o as WithButtonsSlot2,a as WithButtonsSlot3,n as WithButtonsSlot4,i as WithButtonsSlot5,g as WithButtonsSlot6,Ie as __namedExportsOrder,ke as default,s as goAggregation,t as repeatAggregation};
