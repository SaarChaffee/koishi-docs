import{_ as s,k as i,j as a,m as h}from"./chunks/framework.C_JOKtkG.js";const F=JSON.parse(`{"title":"禁用与隐藏","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\nfoo: Schema.string().disabled().description('这是一个禁用配置项。'),\\nbar: Schema.number().hidden(),\\nchoice: Schema.union([\\nSchema.const('foo'),\\nSchema.const('bar').disabled(),\\nSchema.const('baz').hidden(),\\n]).description('这个选择器中有一个禁用选项和一个隐藏选项。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"fr-FR/schema/meta/hidden.md","filePath":"fr-FR/schema/meta/hidden.md"}`),n={name:"fr-FR/schema/meta/hidden.md"},t=h("",4),e=[t];function k(p,l,d,r,B,c){return a(),i("div",null,e)}const g=s(n,[["render",k]]);export{F as __pageData,g as default};
