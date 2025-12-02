import{d as M}from"./VSelect-CnqL67n3.js";import"./BarcodeIcon-DFjiR5Zt.js";import"./DatamatrixIcon-BCc4cwb-.js";import{V as _}from"./VBadge-BHGbBCeA.js";import"./VExpansionItem-DCA6hHRU.js";import"./VIcon-CFACg57l.js";import"./VRadio-v15LJOPu.js";import"./VTable-DQX6bRF2.js";import"./use-model-toggle-BJR_KrtC.js";import"./iframe-BMvi5wpB.js";import"./preload-helper-Dp1pzeXC.js";import"./use-dark-64yaaoq3.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./option-sizes-CT-NW1P-.js";const d={bold:"Жирный",normal:"Нормальный"},ee={component:M,argTypes:{items:{description:"Массив элементов"},inline:{description:"Светлый цвет шрифта",control:{type:"boolean"}},isLight:{description:"Светлый цвет шрифта",control:{type:"boolean"}},alignCenter:{description:"Центрировать текст значения по центру",control:{type:"boolean"}},termFontSize:{description:"Размер шрифта у заголовка"},definitionFontSize:{description:"Размер шрифта у значения"},bordered:{description:"Показывать границы у элементов"},contentInline:{description:"Отображать элементы в линию"},itemGap:{description:"Расстояние между term и definition в элементе"},contentGap:{description:"Расстояние между элементами"},fontWeight:{description:"Жирность шрифта",options:Object.keys(d),control:{type:"radio",labels:d}}},args:{items:[{term:"Заголовок 1",definition:"Значение 1"},{term:"Заголовок 2",definition:"Значение 2"},{term:"Заголовок 3",definition:"Значение 3"},{term:"Заголовок 4",definition:"Значение 4"},{term:"Заголовок 5",definition:"Значение 5"},{term:"Заголовок 6",definition:"Значение 6"}],inline:!1,isLight:!1,alignCenter:!1,justifyCenter:!1,termFontSize:"14px",definitionFontSize:"28px",bordered:!1,contentInline:!1,itemGap:"12px",contentGap:"20px",fontWeight:"bold"},parameters:{docs:{description:{component:"Компонент для вывода списка элементов - ключ:значение. Поддерживает слоты для кастомного вывода значений."}}}},e={},n={args:{inline:!0}},t={args:{isLight:!0},globals:{backgrounds:{value:"dark"}}},i={args:{alignCenter:!0}},r={args:{contentInline:!0}},s={name:"Content Inline + Items Inline",args:{inline:!0,contentInline:!0,termFontSize:"16px",definitionFontSize:"16px"}},o={args:{items:[{term:"Заголовок 1",definition:"Значение 1"},{term:"Заголовок 2",slot:"custom-slot"},{term:"Заголовок 3",definition:"Значение 3"}]},render:O=>({components:{VDescriptionList:M,VBadge:_},setup(){return{items:O.items}},template:`
      <v-description-list :items="items" inline>
      <template #custom-slot>
        <v-badge label="Значение 2.1" color="success" style="margin-right: 10px"/>
        <v-badge label="Значение 2.2"/>
      </template>
    </v-description-list>`})},a={args:{items:[{term:"Заголовок 1",definition:[{term:"Заголовок 1.1",definition:[{term:"Заголовок 1.1.1",definition:"Значение 1.1.1"},{term:"Заголовок 1.1.2",definition:"Значение 1.1.2"},{term:"Заголовок 1.1.3",definition:"Значение 1.1.3"}]},{term:"Заголовок 1.2",definition:"Значение 1.2"}]},{term:"Заголовок 2",definition:[{term:"Заголовок 2.1",definition:"Значение 2.1"},{term:"Заголовок 2.2",definition:"Значение 2.2"},{term:"Заголовок 2.3",definition:"Значение 2.3"}]}]}},m={args:{items:[{term:"Заголовок 1",definition:"Значение 1",termClasses:"text-red",definitionClasses:"text-warning"},{term:"Заголовок 2",definition:"Значение 2",termClasses:"text-info",definitionClasses:"text-success"},{term:"Заголовок 3",definition:"Значение 3",definitionClasses:"text-error"}]}};var c,l,p;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var f,u,g;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    inline: true
  }
}`,...(g=(u=n.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var C,x,I;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isLight: true
  },
  globals: {
    backgrounds: {
      value: 'dark'
    }
  }
}`,...(I=(x=t.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var b,S,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    alignCenter: true
  }
}`,...(h=(S=i.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var v,L,y;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    contentInline: true
  }
}`,...(y=(L=r.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};var z,F,k;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Content Inline + Items Inline',
  args: {
    inline: true,
    contentInline: true,
    termFontSize: '16px',
    definitionFontSize: '16px'
  }
}`,...(k=(F=s.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var V,W,A;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    items: [{
      term: 'Заголовок 1',
      definition: 'Значение 1'
    }, {
      term: 'Заголовок 2',
      slot: 'custom-slot'
    }, {
      term: 'Заголовок 3',
      definition: 'Значение 3'
    }]
  },
  render: args => ({
    components: {
      VDescriptionList,
      VBadge
    },
    setup() {
      return {
        items: args.items
      };
    },
    template: \`
      <v-description-list :items="items" inline>
      <template #custom-slot>
        <v-badge label="Значение 2.1" color="success" style="margin-right: 10px"/>
        <v-badge label="Значение 2.2"/>
      </template>
    </v-description-list>\`
  })
}`,...(A=(W=o.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var D,G,T;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    items: [{
      term: 'Заголовок 1',
      definition: [{
        term: 'Заголовок 1.1',
        definition: [{
          term: 'Заголовок 1.1.1',
          definition: 'Значение 1.1.1'
        }, {
          term: 'Заголовок 1.1.2',
          definition: 'Значение 1.1.2'
        }, {
          term: 'Заголовок 1.1.3',
          definition: 'Значение 1.1.3'
        }]
      }, {
        term: 'Заголовок 1.2',
        definition: 'Значение 1.2'
      }]
    }, {
      term: 'Заголовок 2',
      definition: [{
        term: 'Заголовок 2.1',
        definition: 'Значение 2.1'
      }, {
        term: 'Заголовок 2.2',
        definition: 'Значение 2.2'
      }, {
        term: 'Заголовок 2.3',
        definition: 'Значение 2.3'
      }]
    }]
  }
}`,...(T=(G=a.parameters)==null?void 0:G.docs)==null?void 0:T.source}}};var j,w,B;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    items: [{
      term: 'Заголовок 1',
      definition: 'Значение 1',
      termClasses: 'text-red',
      definitionClasses: 'text-warning'
    }, {
      term: 'Заголовок 2',
      definition: 'Значение 2',
      termClasses: 'text-info',
      definitionClasses: 'text-success'
    }, {
      term: 'Заголовок 3',
      definition: 'Значение 3',
      definitionClasses: 'text-error'
    }]
  }
}`,...(B=(w=m.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};const ne=["Standard","Inline","Light","Centered","ContentInline","ContentInlineAndItemsInline","WithCustomSlot","MultiLevel","TermAndDefinitionClasses"];export{i as Centered,r as ContentInline,s as ContentInlineAndItemsInline,n as Inline,t as Light,a as MultiLevel,e as Standard,m as TermAndDefinitionClasses,o as WithCustomSlot,ne as __namedExportsOrder,ee as default};
