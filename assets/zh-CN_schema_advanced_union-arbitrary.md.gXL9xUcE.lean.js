import{_ as s,k as i,j as a,m as n}from"./chunks/framework.C_JOKtkG.js";const g=JSON.parse(`{"title":"Union：联合类型","description":"","frontmatter":{"layout":"schema","code":"Schema.object({\\n  value: Schema.union([\\n    Schema.const().description('unset'),\\n    Schema.number().description('number'),\\n    Schema.string().description('string'),\\n    Schema.const(true).description('true'),\\n    Schema.const(false).description('false'),\\n    Schema.object({\\n      foo: Schema.string().description('对象的一个属性。'),\\n      bar: Schema.number().description('对象的另一个属性。'),\\n    }).description('object'),\\n  ]).description('从六种可能情况中选择一个。'),\\n}).description('配置项')\\n"},"headers":[],"relativePath":"zh-CN/schema/advanced/union-arbitrary.md","filePath":"zh-CN/schema/advanced/union-arbitrary.md"}`),h={name:"zh-CN/schema/advanced/union-arbitrary.md"},t=n("",3),k=[t];function p(e,l,r,B,d,c){return a(),i("div",null,k)}const y=s(h,[["render",p]]);export{g as __pageData,y as default};
