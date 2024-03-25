import{_ as d,k as r,f as t,A as a,l as s,D as i,m as h,C as n,j as o}from"./chunks/framework.C_JOKtkG.js";const X=JSON.parse('{"title":"Message Element","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/guide/basic/element.md","filePath":"en-US/guide/basic/element.md"}'),g={name:"en-US/guide/basic/element.md"},c=s("h1",{id:"message-element",tabindex:"-1"},[i("Message Element "),s("a",{class:"header-anchor",href:"#message-element","aria-label":'Permalink to "Message Element"'},"​")],-1),y=s("p",null,[i("当然，一个聊天平台所能发送或接收的内容往往不只有纯文本。为此，我们引入了 "),s("strong",null,"消息元素 (Element)"),i(" 的概念。")],-1),B=s("p",null,"消息元素类似于 HTML 元素，它是组成消息的基本单位。一个元素可以表示具有特定语义的内容，如文本、表情、图片、引用、元信息等。Koishi 会将这些元素转换为平台所支持的格式，以便在不同平台之间发送和接收消息。",-1),E=s("h2",{id:"basic-usage",tabindex:"-1"},[i("Basic Usage "),s("a",{class:"header-anchor",href:"#basic-usage","aria-label":'Permalink to "Basic Usage"'},"​")],-1),F=s("p",null,"一个典型的元素包含名称、属性和内容。在 Koishi 中，我们通常使用 JSX 或 API 的方式创建元素。下面是一些例子：",-1),A=s("div",{class:"language-tsx vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"JSX"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"// 欢迎 @用户名 入群！")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}},"session"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"send"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"(<>欢迎 <"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"at"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}}," id"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}},"="),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#C678DD"}},"{"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"userId"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#C678DD"}},"}"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"/> 入群！</>)")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"// 发送一张 Koishi 图标")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}},"session"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"send"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"(<"),s("span",{style:{"--shiki-light":"#22863A","--shiki-dark":"#E06C75"}},"image"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#D19A66","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}}," url"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},'"https://koishi.chat/logo.png"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"/>)")])])])],-1),C=s("div",{class:"language-ts vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"API"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"// 欢迎 @用户名 入群！")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}},"session"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"send"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"'欢迎 '"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}}," +"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}}," h"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"'at'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},", { "),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"id"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}},"session"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"userId"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," }) "),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#56B6C2"}},"+"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," ' 入群！'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},")")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"// 发送一张 Koishi 图标")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}},"session"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"send"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"("),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"h"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"("),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"'image'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},", { "),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"url"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},": "),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},"'https://koishi.chat/logo.png'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}}," }))")])])])],-1),_=h("",20),u=h("",2),m=s("blockquote",null,"原消息文本",-1),f=h("",3),b=s("img",{src:"https://koishi.chat/logo.png",alt:"Koishi Logo",style:{"max-width":"100px"}},null,-1),D=h("",4),v={id:"message-component",tabindex:"-1"},T=s("a",{class:"header-anchor",href:"#message-component","aria-label":'Permalink to "Message Component <badge type="warning">experimental</badge>"'},"​",-1),x=h("",2),S=h("",10),P=s("div",{class:"language-tsx vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"JSX"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"// 请注意这里的大写字母")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}},"session"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"send"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"(<"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#E5C07B"}},"Custom"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"/>)")])])])],-1),I=s("div",{class:"language-ts vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"API"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#7F848E","--shiki-light-font-style":"inherit","--shiki-dark-font-style":"italic"}},"// 请注意这里的大写字母")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E5C07B"}},"session"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"."),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"send"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"("),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"h"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"("),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E06C75"}},"Custom"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#ABB2BF"}},"))")])])])],-1),q=h("",3);function V(R,N,U,J,K,M){const k=n("tab-select"),l=n("chat-message"),e=n("chat-panel"),p=n("badge");return o(),r("div",null,[c,y,B,E,F,t(k,{class:"code"},{"title-tsx":a(()=>[i("JSX")]),"tab-tsx":a(()=>[A]),"title-ts":a(()=>[i("API")]),"tab-ts":a(()=>[C]),_:1}),_,t(e,null,{default:a(()=>[t(l,{nickname:"Koishi"},{default:a(()=>[i("欢迎 @用户名 入群！")]),_:1})]),_:1}),u,t(e,null,{default:a(()=>[t(l,{nickname:"Koishi"},{default:a(()=>[m,i(" 你说得对 ")]),_:1})]),_:1}),f,t(e,null,{default:a(()=>[t(l,{nickname:"Koishi"},{default:a(()=>[b]),_:1})]),_:1}),D,s("h2",v,[i("Message Component "),t(p,{type:"warning"},{default:a(()=>[i("experimental")]),_:1}),i(),T]),x,t(e,null,{default:a(()=>[t(l,{nickname:"Koishi"},{default:a(()=>[i("Execution result: hello")]),_:1})]),_:1}),S,t(k,{class:"code"},{"title-tsx":a(()=>[i("JSX")]),"tab-tsx":a(()=>[P]),"title-ts":a(()=>[i("API")]),"tab-ts":a(()=>[I]),_:1}),q])}const w=d(g,[["render",V]]);export{X as __pageData,w as default};
