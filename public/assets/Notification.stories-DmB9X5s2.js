import{V as i}from"./VTable-DnoZjJu1.js";import"./BarcodeIcon-CtJXGP-A.js";import"./DatamatrixIcon-B55ioFzH.js";import"./VExpansionItem-8mNTCM7g.js";import{N as c}from"./iframe-Cpxs_JI5.js";import"./preload-helper-Dp1pzeXC.js";const{expect:s,userEvent:m,waitFor:p}=__STORYBOOK_MODULE_TEST__,_={render:t=>({components:{VButton:i},setup(){return{createNotification:()=>{c.create({type:t.type,message:t.message})}}},template:`
    <v-button height="xs" text-alignment="center" @action="createNotification">Показать сообщение</v-button>`}),parameters:{docs:{description:{component:"Пример того, как можно создать уведомление. Необходимо вызвать Notify.create с типом `error`"}}}},e={args:{type:"error",message:"{{Статус/описание ошибки}}"},play:async({canvas:t})=>{await m.click(t.getByRole("button")),await p(()=>{const o=document.querySelector(".main-notification");s(o).toBeVisible()})}};var a,n,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    type: 'error',
    message: '{{Статус/описание ошибки}}'
  },
  play: async ({
    canvas
  }) => {
    await userEvent.click(canvas.getByRole('button'));
    await waitFor(() => {
      const el = document.querySelector('.main-notification');
      expect(el).toBeVisible();
    });
  }
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const S=["Standard"];export{e as Standard,S as __namedExportsOrder,_ as default};
