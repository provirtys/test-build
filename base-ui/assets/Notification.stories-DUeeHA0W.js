import{N as i}from"./iframe-BMvi5wpB.js";import{V as c}from"./VSelect-CnqL67n3.js";import"./BarcodeIcon-DFjiR5Zt.js";import"./DatamatrixIcon-BCc4cwb-.js";import"./VBadge-BHGbBCeA.js";import"./VExpansionItem-DCA6hHRU.js";import"./VIcon-CFACg57l.js";import"./VRadio-v15LJOPu.js";import"./VTable-DQX6bRF2.js";import"./preload-helper-Dp1pzeXC.js";import"./use-model-toggle-BJR_KrtC.js";import"./use-dark-64yaaoq3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./option-sizes-CT-NW1P-.js";const{expect:s,userEvent:m,waitFor:p}=__STORYBOOK_MODULE_TEST__,E={render:t=>({components:{VButton:c},setup(){return{createNotification:()=>{i.create({type:t.type,message:t.message,timeout:0})}}},template:`
    <v-button text-alignment="center" @action="createNotification">Показать сообщение</v-button>`}),parameters:{docs:{description:{component:"Пример того, как можно создать уведомление. Необходимо вызвать Notify.create с типом `error`"}}}},e={args:{type:"error",message:"{{Статус/описание ошибки}}"},play:async({canvas:t})=>{await m.click(t.getByRole("button")),await p(()=>{const o=document.querySelector(".main-notification");s(o).toBeVisible()})}};var r,a,n;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
}`,...(n=(a=e.parameters)==null?void 0:a.docs)==null?void 0:n.source}}};const O=["Standard"];export{e as Standard,O as __namedExportsOrder,E as default};
