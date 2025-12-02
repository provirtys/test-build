import{s as k}from"./sleep-B5LgeCuU.js";import{d as D,s as E,g as d,h as V,i as g,f as l,c as I,j as R,e as p,a as m,F,k as O,n as Q,b as y,w as L}from"./iframe-Qc53npuj.js";import{u as q,M}from"./MainLayout-CT8nnaly.js";import{l as z,n as U,r as W}from"./base-ui.es-BJxydbDr.js";import{n as j}from"./navigation-DMtNgwHt.js";import"./AppSettings-DLMfLkHL.js";import"./AppSettingsOptions-Be914qET.js";import"./BarChart-CrvAPWE0.js";import"./BarChartTimeSeries-DFjbYa2z.js";import"./CodeCard-DteNLFZA.js";import"./FallbackLoader-D588njKg.js";import"./LabelingProgress-C3csWvr4.js";import"./ProgressPie-V3GcZL7N.js";import"./TaskCard-aiwjSP9z.js";import{N as H}from"./NumericRatio-CyUDWrfV.js";import"./StatusIndicator-BpsS_F8k.js";import"./TableAttributes-BmY6FmuQ.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-Dp1pzeXC.js";import"./private.use-form-DbMdEKWf.js";import"./apexcharts.esm-PvBfBjQs.js";const K=""+new URL("aggregation-D2mNviJ3.png",import.meta.url).href,x=D({__name:"AggregationPage",props:{inPackageCurrent:{default:0},inPackageError:{default:0},inPackageTotal:{default:0},codesTotal:{default:0},inQueue:{default:0},packagesTotal:{default:0},hasError:{type:Boolean,default:!1}},setup(t){const{isFullscreen:e,isStatusReady:o}=E(q()),a=t,c=d(()=>[{term:"В упаковке",slot:"inPackage"},{term:"Всего кодов маркировки",definition:a.codesTotal.toString()},{term:"В очереди",definition:a.inQueue.toString()},{term:"Всего упаковок",definition:a.packagesTotal.toString()}]),n=d(()=>({current:a.inPackageCurrent,error:a.inPackageError,total:a.inPackageTotal})),u=d(()=>({"task-name--light":i.value})),_=d(()=>({type:o.value?"success":"error",sync:!0,active:!1})),i=d(()=>a.hasError?a.hasError:a.inPackageCurrent>0&&a.inPackageCurrent<a.inPackageTotal),A={type:"complete",fn:()=>j("/?path=/docs/pages-taskdetailpage--docs")},N=()=>{e.value=!e.value};return(Y,s)=>(y(),V(l(M),{"header-status":_.value,"header-action":A,"is-fullscreen":l(e),"sidebar-has-error":i.value,title:"Вода Артезианская 5 литров"},{main:g(()=>[m("div",{class:"image-container",onDblclick:N},[...s[0]||(s[0]=[m("img",{src:K},null,-1)])],32)]),"sidebar-top":g(()=>[m("h2",{class:Q(["task-name",u.value])},"Вода Артезианская 5 литров",2),p(l(W),{items:c.value,"is-light":i.value,inline:"","align-center":""},{inPackage:g(()=>[p(l(H),{value:n.value.current,"secondary-value":t.inPackageError>0?t.inPackageError:void 0,total:n.value.total,"is-light":i.value},null,8,["value","secondary-value","total","is-light"])]),_:1},8,["items","is-light"])]),"sidebar-bottom":g(()=>[i.value?(y(),I(F,{key:0},[p(l(z),{text:"Не все коды подтверждены",color:"error","is-background-white":""}),s[1]||(s[1]=m("p",{class:"alert-description"},"Печатать код неполной упаковки",-1))],64)):R("",!0),p(l(U),{"text-alignment":"left","icon-right":"finish-aggregation","icon-size":30,"enable-hold":"",disable:!i.value},{default:g(()=>[...s[2]||(s[2]=[O(" Подтвердить код неполной упаковки ",-1)])]),_:1},8,["disable"])]),_:1},8,["header-status","is-fullscreen","sidebar-has-error"]))}}),S=J(x,[["__scopeId","data-v-fb792afe"]]);x.__docgenInfo={exportName:"default",displayName:"AggregationPage",description:"",tags:{},props:[{name:"inPackageCurrent",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"inPackageError",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"inPackageTotal",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"codesTotal",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"inQueue",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"packagesTotal",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"0"}},{name:"hasError",required:!1,type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],sourceFiles:["/home/runner/work/test-build/test-build/packages/tablet-ui/src/components/Pages/AggregationPage/AggregationPage.vue"]};const{expect:r,waitFor:w}=__STORYBOOK_MODULE_TEST__,ke={component:S,parameters:{layout:"fullscreen",docs:{description:{component:`Страница с информацией об агрегировании. <br>
В левой части находится изображение с камеры. <br>
В правой - статистика по агрегации текущего выбранного задания: <br>
**- В упаковке** - текущее число сканированных кодов / текущее количество ошибочных кодов и общее количество кодов одной упаковке. <br>
**- Всего кодов маркировки** - количество кодов отсканированных у выбранного задания, включая те которые находятся в очереди. <br>
**- В очереди** - количество упаковок, которые находятся в очереди <br>
**- Всего упаковок** - количество успешно агрегированных упаковок. Сюда не включаются упаковки, которые находятся в очереди. <br><br>

Если количество отсканированных кодов меньше, чем количество кодов в упаковке, то оператору показывается предупреждающее сообщение и кнопка для подтверждения разблокируется. <br>
Если количество отсканированных кодов равно количеству кодов в упаковке, то данная группа кодов собирается в один "виртуальный" агрегат и добавляется в очередь. <br><br>

При двойном нажатии на изображение с камеры, оно открывается во весь экран, закрывая сайдбар. Закрыть его можно, нажав на кнопку в углу блока с изображением или сделав двойное нажатие снова <br>`}}},argTypes:{inPackageCurrent:{description:"Количество отсканированных кодов на текущем шаге",control:"number"},inPackageError:{description:"Количество ошибочных кодов на текущем шаге",control:"number"},inPackageTotal:{description:"Количество кодов в упаковке",control:"number"},codesTotal:{description:"Общее количество отсканированных кодов",control:"number"},inQueue:{description:"Количество кодов, находящихся в очереди",control:"number"},packagesTotal:{description:"Общее количество агрегированных упаковок",control:"number"},hasError:{description:"Состояние ошибки",control:"boolean"},headerStatusReady:{description:"Статус `Готово`",control:"boolean"}},args:{inPackageCurrent:0,inPackageError:0,inPackageTotal:0,codesTotal:0,inQueue:0,packagesTotal:0,hasError:!1,headerStatusReady:!1},globals:{backgrounds:{value:"dark"}},render:t=>({components:{AggregationPage:S},setup(){const{isStatusReady:e}=E(q());return L(()=>t.headerStatusReady,o=>{e.value=o},{immediate:!0}),{args:t}},template:`
    <aggregation-page v-bind="args"/>`})},b={},f={args:{inPackageCurrent:2,inPackageTotal:6},play:async({args:t})=>{const e=document.querySelector(".main-layout__sidebar");if(e){const o=async()=>{const c=e==null?void 0:e.querySelector(".v-alert"),n=e==null?void 0:e.querySelector(".alert-description"),u=e==null?void 0:e.querySelector("button");n&&(await r(window.getComputedStyle(e).backgroundColor).toBe("rgba(211, 20, 28, 0.85)"),await r(c).toBeVisible(),await r(n.textContent).toBe("Печатать код неполной упаковки"),await r(u).not.toBeDisabled())},a=async()=>{const c=e==null?void 0:e.querySelector(".v-alert"),n=e==null?void 0:e.querySelector(".alert-description"),u=e==null?void 0:e.querySelector("button");await r(window.getComputedStyle(e).backgroundColor).toBe("rgba(0, 0, 0, 0)"),await r(c).toBeNull(),await r(n).toBeNull(),await r(u).toBeDisabled()};await o(),await k(1e3),await w(()=>{t.inPackageCurrent=6}),await a(),await k(1e3),await w(()=>{t.inPackageCurrent=0}),await a(),await k(1e3),await w(()=>{t.inPackageCurrent=1}),await o()}}};var v,P,C;b.parameters={...b.parameters,docs:{...(v=b.parameters)==null?void 0:v.docs,source:{originalSource:"{}",...(C=(P=b.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var h,B,T;f.parameters={...f.parameters,docs:{...(h=f.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    inPackageCurrent: 2,
    inPackageTotal: 6
  },
  play: async ({
    args
  }) => {
    const sidebar = document.querySelector('.main-layout__sidebar');
    if (sidebar) {
      const isSidebarInErrorState = async () => {
        const sidebarAlert = sidebar?.querySelector('.v-alert');
        const sidebarAlertDescription = sidebar?.querySelector('.alert-description');
        const sidebarButton = sidebar?.querySelector('button');
        if (sidebarAlertDescription) {
          await expect(window.getComputedStyle(sidebar).backgroundColor).toBe('rgba(211, 20, 28, 0.85)');
          await expect(sidebarAlert).toBeVisible();
          await expect(sidebarAlertDescription.textContent).toBe('Печатать код неполной упаковки');
          await expect(sidebarButton).not.toBeDisabled();
        }
      };
      const isSidebarInNormalState = async () => {
        const sidebarAlert = sidebar?.querySelector('.v-alert');
        const sidebarAlertDescription = sidebar?.querySelector('.alert-description');
        const sidebarButton = sidebar?.querySelector('button');
        await expect(window.getComputedStyle(sidebar).backgroundColor).toBe('rgba(0, 0, 0, 0)');
        await expect(sidebarAlert).toBeNull();
        await expect(sidebarAlertDescription).toBeNull();
        await expect(sidebarButton).toBeDisabled();
      };
      await isSidebarInErrorState();
      await sleep(1000);
      await waitFor(() => {
        (args as any).inPackageCurrent = 6;
      });
      await isSidebarInNormalState();
      await sleep(1000);
      await waitFor(() => {
        (args as any).inPackageCurrent = 0;
      });
      await isSidebarInNormalState();
      await sleep(1000);
      await waitFor(() => {
        (args as any).inPackageCurrent = 1;
      });
      await isSidebarInErrorState();
    }
  }
}`,...(T=(B=f.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};const we=["Standard","WithError"];export{b as Standard,f as WithError,we as __namedExportsOrder,ke as default};
