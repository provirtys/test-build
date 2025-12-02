import{s as De}from"./sleep-B5LgeCuU.js";import{r as Fe,c as ke,w as Ne}from"./iframe-BMvi5wpB.js";import{f as P}from"./VSelect-CnqL67n3.js";import"./preload-helper-Dp1pzeXC.js";import"./use-model-toggle-BJR_KrtC.js";import"./use-dark-64yaaoq3.js";import"./VTable-DQX6bRF2.js";import"./option-sizes-CT-NW1P-.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./BarcodeIcon-DFjiR5Zt.js";import"./DatamatrixIcon-BCc4cwb-.js";import"./VBadge-BHGbBCeA.js";import"./VExpansionItem-DCA6hHRU.js";import"./VIcon-CFACg57l.js";import"./VRadio-v15LJOPu.js";const{expect:l,userEvent:n,waitFor:f}=__STORYBOOK_MODULE_TEST__,R={standard:"Обычный",outlined:"С границами",filled:"Заполненный"},B={text:"Текст",number:"Число",textarea:"Textarea",password:"Пароль",date:"Дата",time:"Время","datetime-local":"Дата-время"},aa={component:P,argTypes:{type:{description:"Тип поля ввода",options:Object.keys(B),control:{type:"select",labels:B},table:{category:"props"}},variant:{description:"Стиль поля ввода",options:Object.keys(R),control:{type:"select",labels:R},table:{category:"props"}},label:{description:"Название поля",table:{category:"props"}},modelValue:{description:"Значение поля",table:{category:"props"}},placeholder:{description:"Заглушка для поля"},labelOutside:{description:"Название за границами поля ввода",options:[!0,!1]},required:{description:"Обязательное поле",options:[!0,!1]},dense:{description:"Занимать меньше пространства",options:[!0,!1],control:{type:"boolean"},table:{category:"props"}},xPadding:{description:"Горизонтальный отступ"},labelOnBorder:{description:"Отображать название на границе в `outlined` режиме"},displayNumberWithDelimiter:{description:"Отображать значение в формате 1 000 000 (только цифры)"},borderRadius:{description:"Радиус границы"}},args:{type:"text",variant:"standard",label:"",modelValue:"",placeholder:"",labelOutside:!1,required:!1,dense:!1,xPadding:"",labelOnBorder:!0,displayNumberWithDelimiter:!1,borderRadius:"8px"},render:e=>({components:{VInput:P},setup(){const r=Fe(e.modelValue),a=ke(()=>{const t={...e};return t.variant=void 0,e.variant,e.variant&&e.variant!==R.standard&&(t[e.variant]=!0),t});return Ne(r,t=>{e.modelValue=t}),{modelValue:r,inputProps:a,args:e}},template:`
      <v-input v-model="modelValue" v-bind="inputProps"/>`}),parameters:{docs:{description:{component:"Компонент input, который в своей основе использует q-input, но с некоторыми брендовыми изменениями. Можно передавать все пропсы, которые принимает базовый компонент q-input."}}}},s={args:{placeholder:"Введите имя",modelValue:"",label:"Ваше имя"}},o={args:{placeholder:"Введите имя",modelValue:"",label:"Ваше имя",dense:!0}},d={args:{placeholder:"Введите имя",modelValue:"",label:"Ваше имя",labelOutside:!0}},i={args:{placeholder:"Введите имя",modelValue:"",label:"Ваше имя",labelOutside:!0,required:!0}},u={args:{placeholder:"Введите имя",modelValue:"",label:"Ваше имя",variant:"outlined"}},p={args:{placeholder:"Введите имя",modelValue:"",label:"Ваше имя",variant:"outlined",labelOutside:!0}},c={args:{placeholder:"Введите имя",modelValue:"",label:"Ваше имя",variant:"outlined",labelOutside:!0,required:!0}},m={args:{placeholder:"Введите имя",modelValue:"",label:"Ваше имя",variant:"outlined",labelOutside:!0,required:!0,labelOnBorder:!1}},b={name:"Border radius 4px",args:{placeholder:"Введите имя",modelValue:"",variant:"outlined",borderRadius:"4px"}},g={args:{placeholder:"Введите имя",modelValue:"",label:"Ваше имя",variant:"filled"}},y={args:{placeholder:"Введите имя",modelValue:"",label:"Ваше имя",variant:"filled",labelOutside:!0}},h={args:{placeholder:"Введите имя",modelValue:"",label:"Ваше имя",variant:"filled",labelOutside:!0,required:!0}},v={args:{placeholder:"Введите имя",modelValue:"",label:"Ваше имя",xPadding:"12px",labelOutside:!0}},w={args:{type:"password",placeholder:"Введите пароль",modelValue:"",label:"Пароль"},play:async()=>{const e=document.querySelector(".v-input input"),r=document.querySelector(".v-input__eye"),a="Очень_сильный_пароль";e&&r&&(await n.type(e,a,{delay:100}),await n.click(r),await l(e).toHaveAttribute("type","text"),await l(e).toHaveDisplayValue(a),await De(1e3),await n.click(r),await l(e).toHaveAttribute("type","password"))}},O={args:{type:"password",placeholder:"Введите пароль",modelValue:"",label:"Пароль",required:!0}},V={name:"Password With Validation (min:length = 6)",args:{type:"password",placeholder:"Введите пароль",modelValue:"",label:"Пароль",rules:[e=>e.length>=6||"Минимальная длина 6 символов"],lazyRules:!0,required:!0},play:async({canvas:e})=>{const r=document.querySelector(".v-input"),a=e.getByPlaceholderText("Введите пароль"),t="v-input--has-error";a.focus(),a.blur(),await f(()=>{l(e.getByRole("alert")).toHaveTextContent("обязательное")}),await n.type(a,"12345",{delay:200}),a.blur(),await f(()=>{l(e.getByRole("alert")).toHaveTextContent("Минимальная длина")}),await n.type(a,"12345",{delay:200}),a.blur(),await f(()=>{l(r).not.toHaveClass(t)})}},x={args:{type:"textarea",modelValue:"",label:"Сообщение"}},q={args:{type:"textarea",modelValue:"",label:"Сообщение",required:!0}},S={args:{displayNumberWithDelimiter:!0,modelValue:"123456789"}},E={args:{outlined:!0,counter:!0,maxlength:120}};var T,W,_;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя'
  }
}`,...(_=(W=s.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var L,H,C;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    dense: true
  }
}`,...(C=(H=o.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var D,F,k;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    labelOutside: true
  }
}`,...(k=(F=d.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var N,A,I;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    labelOutside: true,
    required: true
  }
}`,...(I=(A=i.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var j,z,K;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    variant: 'outlined'
  }
}`,...(K=(z=u.parameters)==null?void 0:z.docs)==null?void 0:K.source}}};var M,U,Y;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    variant: 'outlined',
    labelOutside: true
  }
}`,...(Y=(U=p.parameters)==null?void 0:U.docs)==null?void 0:Y.source}}};var G,J,Q;c.parameters={...c.parameters,docs:{...(G=c.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    variant: 'outlined',
    labelOutside: true,
    required: true
  }
}`,...(Q=(J=c.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Z,$;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    variant: 'outlined',
    labelOutside: true,
    required: true,
    labelOnBorder: false
  }
}`,...($=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,ae,re;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Border radius 4px',
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    variant: 'outlined',
    borderRadius: '4px'
  }
}`,...(re=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};var te,le,ne;g.parameters={...g.parameters,docs:{...(te=g.parameters)==null?void 0:te.docs,source:{originalSource:`{
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    variant: 'filled'
  }
}`,...(ne=(le=g.parameters)==null?void 0:le.docs)==null?void 0:ne.source}}};var se,oe,de;y.parameters={...y.parameters,docs:{...(se=y.parameters)==null?void 0:se.docs,source:{originalSource:`{
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    variant: 'filled',
    labelOutside: true
  }
}`,...(de=(oe=y.parameters)==null?void 0:oe.docs)==null?void 0:de.source}}};var ie,ue,pe;h.parameters={...h.parameters,docs:{...(ie=h.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    variant: 'filled',
    labelOutside: true,
    required: true
  }
}`,...(pe=(ue=h.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var ce,me,be;v.parameters={...v.parameters,docs:{...(ce=v.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    placeholder: 'Введите имя',
    modelValue: '',
    label: 'Ваше имя',
    xPadding: '12px',
    labelOutside: true
  }
}`,...(be=(me=v.parameters)==null?void 0:me.docs)==null?void 0:be.source}}};var ge,ye,he;w.parameters={...w.parameters,docs:{...(ge=w.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Введите пароль',
    modelValue: '',
    label: 'Пароль'
  },
  play: async () => {
    const inputEl = document.querySelector('.v-input input');
    const eyeEl = document.querySelector('.v-input__eye');
    const password = 'Очень_сильный_пароль';
    if (inputEl && eyeEl) {
      await userEvent.type(inputEl, password, {
        delay: 100
      });
      await userEvent.click(eyeEl);
      await expect(inputEl).toHaveAttribute('type', 'text');
      await expect(inputEl).toHaveDisplayValue(password);
      await sleep(1000);
      await userEvent.click(eyeEl);
      await expect(inputEl).toHaveAttribute('type', 'password');
    }
  }
}`,...(he=(ye=w.parameters)==null?void 0:ye.docs)==null?void 0:he.source}}};var ve,we,Oe;O.parameters={...O.parameters,docs:{...(ve=O.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    type: 'password',
    placeholder: 'Введите пароль',
    modelValue: '',
    label: 'Пароль',
    required: true
  }
}`,...(Oe=(we=O.parameters)==null?void 0:we.docs)==null?void 0:Oe.source}}};var Ve,xe,qe;V.parameters={...V.parameters,docs:{...(Ve=V.parameters)==null?void 0:Ve.docs,source:{originalSource:`{
  name: 'Password With Validation (min:length = 6)',
  args: {
    type: 'password',
    placeholder: 'Введите пароль',
    modelValue: '',
    label: 'Пароль',
    rules: [(val: string) => val.length >= 6 || 'Минимальная длина 6 символов'],
    lazyRules: true,
    required: true
  },
  play: async ({
    canvas
  }) => {
    const inputWrapperEl = document.querySelector('.v-input');
    const inputEl = canvas.getByPlaceholderText('Введите пароль');
    const errorClass = 'v-input--has-error';
    inputEl.focus();
    inputEl.blur();
    await waitFor(() => {
      expect(canvas.getByRole('alert')).toHaveTextContent('обязательное');
    });
    await userEvent.type(inputEl, '12345', {
      delay: 200
    });
    inputEl.blur();
    await waitFor(() => {
      expect(canvas.getByRole('alert')).toHaveTextContent('Минимальная длина');
    });
    await userEvent.type(inputEl, '12345', {
      delay: 200
    });
    inputEl.blur();
    await waitFor(() => {
      expect(inputWrapperEl).not.toHaveClass(errorClass);
    });
  }
}`,...(qe=(xe=V.parameters)==null?void 0:xe.docs)==null?void 0:qe.source}}};var Se,Ee,fe;x.parameters={...x.parameters,docs:{...(Se=x.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    type: 'textarea',
    modelValue: '',
    label: 'Сообщение'
  }
}`,...(fe=(Ee=x.parameters)==null?void 0:Ee.docs)==null?void 0:fe.source}}};var Re,Pe,Be;q.parameters={...q.parameters,docs:{...(Re=q.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    type: 'textarea',
    modelValue: '',
    label: 'Сообщение',
    required: true
  }
}`,...(Be=(Pe=q.parameters)==null?void 0:Pe.docs)==null?void 0:Be.source}}};var Te,We,_e;S.parameters={...S.parameters,docs:{...(Te=S.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    displayNumberWithDelimiter: true,
    modelValue: '123456789'
  }
}`,...(_e=(We=S.parameters)==null?void 0:We.docs)==null?void 0:_e.source}}};var Le,He,Ce;E.parameters={...E.parameters,docs:{...(Le=E.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  args: {
    outlined: true,
    counter: true,
    maxlength: 120
  }
}`,...(Ce=(He=E.parameters)==null?void 0:He.docs)==null?void 0:Ce.source}}};const ra=["Standard","StandardDense","StandardLabelOutside","StandardLabelOutsideRequired","Outlined","OutlinedLabelOutside","OutlinedLabelOnBorderRequired","OutlinedLabelOutsideRequired","BorderRadius4px","Filled","FilledLabelOutside","FilledLabelOutsideRequired","WithInlinePadding","Password","PasswordRequired","PasswordWithValidation","Textarea","TextareaRequired","NumberWithThousandsDelimiter","WithCounter"];export{b as BorderRadius4px,g as Filled,y as FilledLabelOutside,h as FilledLabelOutsideRequired,S as NumberWithThousandsDelimiter,u as Outlined,c as OutlinedLabelOnBorderRequired,p as OutlinedLabelOutside,m as OutlinedLabelOutsideRequired,w as Password,O as PasswordRequired,V as PasswordWithValidation,s as Standard,o as StandardDense,d as StandardLabelOutside,i as StandardLabelOutsideRequired,x as Textarea,q as TextareaRequired,E as WithCounter,v as WithInlinePadding,ra as __namedExportsOrder,aa as default};
