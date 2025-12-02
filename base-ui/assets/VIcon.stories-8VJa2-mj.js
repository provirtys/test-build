import{r as S,o as A}from"./iframe-BMvi5wpB.js";import{_ as z}from"./VIcon-CFACg57l.js";import"./preload-helper-Dp1pzeXC.js";const _="data-matrix",q={component:z,argTypes:{name:{description:"Id иконки из svg-sprite. Можно узнать из пакета @integrity/icons в папке icons, либо в `AllIcons` на этой же story",control:{type:"text"}},size:{description:"Приоритет ниже, чем у `width ` и `height`",control:{type:"text"}},width:{description:"Приоритет выше, чем у `size`",control:{type:"text"}},height:{description:"Приоритет выше, чем у `size`",control:{type:"text"}}},args:{name:_,width:"",height:"",size:"80px"},parameters:{docs:{description:{component:"Компонент для вывода иконки. <br>\nИконки берутся из пакета @integrity/icons. <br>\nПоддерживает динамическую смену цвета и размера. <br>\nЧтобы сменить цвет иконки, нужно задать соответствующий css класс (например, `text-info`, `text-warning-10`) или задать цвет в самих стилях (`color: $info` или `color: $warning-10`). <br>\nМожно отдельно менять ширину и высоту, для этого существуют пропсы `width` и `height`. Но в большинстве случаев используйте проп `size` <br>\nЕсли размер не задан, то размер берется из viewbox самой иконки. Размер задается либо числом (например, `40`), либо строкой (например, `'40px'`) <br>"}}}},e={name:"80px",args:{size:"80px"}},s={name:"40px",args:{size:"40px"}},o={name:"20px",args:{size:"20px"}},n={args:{size:"40px"},render:I=>({components:{VIcon:z},setup(){const t=S([]);return A(()=>{const i=Array.from(document.querySelectorAll("#svg-sprite symbol"));if(i.length)for(const h of i){const r=h.getAttribute("id"),a=r==null?void 0:r.split("icon-")[1];a&&t.value.push(a)}}),{iconIds:t,args:I}},template:`
    <div class="icon-list">
      <div v-for="icon in iconIds" :key="icon" class="icon-item">
        <span class="icon-item__name">{{ icon }}</span>
        <v-icon class="text-primary-text" :name="icon" :size="args.size"/>
      </div>
    </div>
  `})};var c,p,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '80px',
  args: {
    size: '80px'
  }
}`,...(m=(p=e.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var d,l,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '40px',
  args: {
    size: '40px'
  }
}`,...(g=(l=s.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '20px',
  args: {
    size: '20px'
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,b,v;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: '40px'
  },
  render: args => ({
    components: {
      VIcon
    },
    setup() {
      const iconIds = ref<string[]>([]);
      onMounted(() => {
        const iconSymbols = Array.from(document.querySelectorAll('#svg-sprite symbol'));
        if (!iconSymbols.length) return;
        for (const symbol of iconSymbols) {
          const rawId = symbol.getAttribute('id');
          const needleId = rawId?.split('icon-')[1];
          if (needleId) iconIds.value.push(needleId);
        }
      });
      return {
        iconIds,
        args
      };
    },
    template: \`
    <div class="icon-list">
      <div v-for="icon in iconIds" :key="icon" class="icon-item">
        <span class="icon-item__name">{{ icon }}</span>
        <v-icon class="text-primary-text" :name="icon" :size="args.size"/>
      </div>
    </div>
  \`
  })
}`,...(v=(b=n.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const B=["Big","Standard","Small","AllIcons"];export{n as AllIcons,e as Big,o as Small,s as Standard,B as __namedExportsOrder,q as default};
