import{s as o}from"./sleep-B5LgeCuU.js";import{V as r}from"./VExpansionItem-DCA6hHRU.js";import"./iframe-BMvi5wpB.js";import"./preload-helper-Dp1pzeXC.js";import"./use-model-toggle-BJR_KrtC.js";import"./use-dark-64yaaoq3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{expect:t,userEvent:c,waitFor:p}=__STORYBOOK_MODULE_TEST__,I={component:r,argTypes:{label:{description:"Текст шапки элемента"},noPaddings:{description:"Отключить горизонтальный отступ у шапки"}},args:{label:"Текст в шапке",noPaddings:!1},render:n=>({components:{VExpansionItem:r},setup(){return{args:n}},template:`
      <v-expansion-item v-bind="args">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consectetur culpa, dicta, ducimus ea error
      exercitationem explicabo fugiat illum ipsa iste necessitatibus nobis, odit porro praesentium provident quidem
      repellendus sapiente sed sequi sunt vitae voluptas voluptate voluptates voluptatum! Autem blanditiis dolore
      ducimus enim iusto, necessitatibus numquam praesentium sed sequi sint.
    </v-expansion-item>`}),parameters:{docs:{description:{component:`Компонент раскрывающегося элемента. Является оберткой над аналогичным компонентом из Quasar. <br>
Поддерживает всё API из оригинального компонента <a href="https://quasar.dev/vue-components/expansion-item#qexpansionitem-api" target="_blank">QExpansionItem</a>`}}}},a={args:{noPaddings:!0},play:async({canvas:n})=>{const e=n.getByRole("button"),i=document.querySelector(`#${e.getAttribute("aria-controls")}`),m=async()=>{await p(()=>{t(e).toHaveAttribute("aria-expanded","true"),t(i).toBeVisible()})},s=async()=>{await p(()=>{t(e).toHaveAttribute("aria-expanded","false"),t(i).not.toBeVisible()})};await s(),await c.click(e),await m(),await o(500),await c.click(e),await s(),await o(500)}};var d,u,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    noPaddings: true
  },
  play: async ({
    canvas
  }) => {
    const header = canvas.getByRole('button');
    const content = document.querySelector(\`#\${header.getAttribute('aria-controls')}\`);
    const isItemExpanded = async () => {
      await waitFor(() => {
        expect(header).toHaveAttribute('aria-expanded', 'true');
        expect(content).toBeVisible();
      });
    };
    const isItemCollapsed = async () => {
      await waitFor(() => {
        expect(header).toHaveAttribute('aria-expanded', 'false');
        expect(content).not.toBeVisible();
      });
    };
    await isItemCollapsed();
    await userEvent.click(header);
    await isItemExpanded();
    await sleep(500);
    await userEvent.click(header);
    await isItemCollapsed();
    await sleep(500);
  }
}`,...(l=(u=a.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const h=["Standard"];export{a as Standard,h as __namedExportsOrder,I as default};
