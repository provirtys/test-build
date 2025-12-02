import{_ as v}from"./VTable-DnoZjJu1.js";import"./BarcodeIcon-CtJXGP-A.js";import"./DatamatrixIcon-B55ioFzH.js";import"./VExpansionItem-8mNTCM7g.js";import{r as A,c as _,o as w}from"./iframe-Cpxs_JI5.js";import"./preload-helper-Dp1pzeXC.js";const M="data-matrix",T={component:v,argTypes:{name:{description:"Id иконки из svg-sprite. Можно узнать из пакета @integrity/icons в папке icons, либо в `AllIcons` на этой же story",control:{type:"text"}},size:{description:"Приоритет ниже, чем у `width ` и `height`",control:{type:"text"}},width:{description:"Приоритет выше, чем у `size`",control:{type:"text"}},height:{description:"Приоритет выше, чем у `size`",control:{type:"text"}},color:{description:"Цвет иконки (используется в `AllIcons` story). При использовании меняется автоматически на основе родительского css-свойства `color`",control:{type:"color"}}},args:{name:M,width:"",height:"",size:"80px",color:""},parameters:{docs:{description:{component:"Компонент для вывода иконки. <br>\nИконки берутся из пакета @integrity/icons. <br>\nПоддерживает динамическую смену цвета и размера. <br>\nМожно отдельно менять ширину и высоту, для этого существуют пропсы `width` и `height`. Но в большинстве случаев используйте проп `size` <br>\nЕсли размер не задан, то размер берется из viewbox самой иконки. Размер задается либо числом (например, `40`), либо строкой (например, `'40px'`) <br>"}}}},e={name:"80px",args:{size:"80px"}},o={name:"40px",args:{size:"40px"}},s={name:"20px",args:{size:"20px"}},n={args:{size:40},render:r=>({components:{VIcon:v},setup(){const i=A([]),b=_(()=>({color:r.color}));return w(()=>{const c=Array.from(document.querySelectorAll("#svg-sprite symbol"));if(c.length)for(const h of c){const t=h.getAttribute("id"),a=t==null?void 0:t.split("icon-")[1];a&&i.value.push(a)}}),{iconIds:i,iconItemStyle:b,iconSize:r.size}},template:`
    <div class="icon-list">
      <div v-for="icon in iconIds" :key="icon" class="icon-item" :style=iconItemStyle>
        <span class="icon-item__name">{{ icon }}</span>
        <v-icon :name="icon" :size="iconSize"/>
      </div>
    </div>
  `})};var m,l,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '80px',
  args: {
    size: '80px'
  }
}`,...(p=(l=e.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var d,g,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '40px',
  args: {
    size: '40px'
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,x,I;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '20px',
  args: {
    size: '20px'
  }
}`,...(I=(x=s.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var S,z,f;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 40
  },
  render: (args: Args) => ({
    components: {
      VIcon
    },
    setup() {
      const iconIds = ref<string[]>([]);
      const iconItemStyle = computed(() => ({
        color: args.color
      }));
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
        iconItemStyle,
        iconSize: args.size
      };
    },
    template: \`
    <div class="icon-list">
      <div v-for="icon in iconIds" :key="icon" class="icon-item" :style=iconItemStyle>
        <span class="icon-item__name">{{ icon }}</span>
        <v-icon :name="icon" :size="iconSize"/>
      </div>
    </div>
  \`
  })
}`,...(f=(z=n.parameters)==null?void 0:z.docs)==null?void 0:f.source}}};const j=["Big","Standard","Small","AllIcons"];export{n as AllIcons,e as Big,s as Small,o as Standard,j as __namedExportsOrder,T as default};
