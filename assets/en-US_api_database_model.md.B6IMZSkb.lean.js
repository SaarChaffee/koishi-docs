import{_ as i,k as d,l as t,D as e,f as n,A as s,m as a,C as r,j as c}from"./chunks/framework.C_JOKtkG.js";const V=JSON.parse('{"title":"Data Model","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/api/database/model.md","filePath":"en-US/api/database/model.md"}'),o={name:"en-US/api/database/model.md"},h=a("",16),g=t("li",null,[t("strong",null,"name:"),e(),t("code",null,"string"),e(" 数据表名")],-1),y=t("li",null,[t("strong",null,"fields:"),e(),t("code",null,"Field.Config"),e(" 字段信息")],-1),p=t("strong",null,"config:",-1),x=t("code",null,"Table.Meta",-1),k=t("li",null,[t("strong",null,"config.primary:"),e(),t("code",null,"string | string[]"),e(" 主键名，默认为 "),t("code",null,"'id'")],-1),_=t("li",null,[t("strong",null,"config.unique:"),e(),t("code",null,"(string | string[])[]"),e(" 值唯一的键名列表")],-1),u=t("strong",null,"config.foreign:",-1),m=t("code",null,"Dict<[string, string]>",-1),b=t("li",null,[t("strong",null,"config.autoInc:"),e(),t("code",null,"boolean"),e(" 是否使用自增主键")],-1),C=a("",4),f={id:"ctx-model-migrate",tabindex:"-1"},B=t("a",{class:"header-anchor",href:"#ctx-model-migrate","aria-label":'Permalink to "ctx.model.migrate(name, fields, callback) <badge type="warning">实验性</badge>"'},"​",-1),D=a("",2);function A(E,T,P,q,S,F){const l=r("badge");return c(),d("div",null,[h,t("ul",null,[g,y,t("li",null,[p,e(),x,e(" 表的基本配置 "),t("ul",null,[k,_,t("li",null,[u,e(),m,e(" 外键列表 "),n(l,{type:"warning"},{default:s(()=>[e("实验性")]),_:1})]),b])])]),C,t("h3",f,[e("ctx.model.migrate(name, fields, callback) "),n(l,{type:"warning"},{default:s(()=>[e("实验性")]),_:1}),e(),B]),D])}const I=i(o,[["render",A]]);export{V as __pageData,I as default};
