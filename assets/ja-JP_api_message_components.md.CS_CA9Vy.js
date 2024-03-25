import{_ as k,k as o,l as t,D as s,f as i,A as a,m as n,C as p,j as d}from"./chunks/framework.C_JOKtkG.js";const Y=JSON.parse('{"title":"内置组件","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/api/message/components.md","filePath":"ja-JP/api/message/components.md"}'),r={name:"ja-JP/api/message/components.md"},c=t("h1",{id:"内置组件",tabindex:"-1"},[s("内置组件 "),t("a",{class:"header-anchor",href:"#内置组件","aria-label":'Permalink to "内置组件"'},"​")],-1),_=t("code",null,"ctx.broadcast()",-1),g=t("h2",{id:"核心组件",tabindex:"-1"},[s("核心组件 "),t("a",{class:"header-anchor",href:"#核心组件","aria-label":'Permalink to "核心组件"'},"​")],-1),B={id:"调用指令",tabindex:"-1"},y=t("a",{class:"header-anchor",href:"#调用指令","aria-label":'Permalink to "调用指令 (execute) <badge>セッション</badge>"'},"​",-1),u=n('<p>按照子元素执行指令，并使用指令的输出替换此元素。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">foo&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">execute</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;echo 123&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">execute</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;bar</span></span></code></pre></div>',2),m={id:"等待输入",tabindex:"-1"},A=t("a",{class:"header-anchor",href:"#等待输入","aria-label":'Permalink to "等待输入 (prompt) <badge>セッション</badge>"'},"​",-1),E=n('<p>输出子元素并等待用户输入，并使用输入内容替换此元素。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">你输入的内容为：&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">prompt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;请输入一段文本。&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">prompt</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div>',2),f={id:"国际化",tabindex:"-1"},b=t("a",{class:"header-anchor",href:"#国际化","aria-label":'Permalink to "国际化 (i18n) <badge>会话+广播</badge>"'},"​",-1),C=n(`<ul><li><strong>path:</strong> 本地化路径</li></ul><p>渲染本地化文件中对应的路径替换此元素。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">i18n</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> path</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;foo.bar&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/&gt;</span></span></code></pre></div><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">foo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">  bar</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">Hello, world!</span></span></code></pre></div><p>传入 <code>path</code> 为 <code>foo.bar</code> 时：</p>`,5),F={id:"时间",tabindex:"-1"},v=t("a",{class:"header-anchor",href:"#时间","aria-label":'Permalink to "时间 (i18n:time) <badge>会话+广播</badge>"'},"​",-1),T=n('<ul><li><strong>value:</strong> 时间长度（毫秒）</li></ul><p>根据本地语言渲染时间长度。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">剩余时间：&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">i18n:time</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">{value}</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">/&gt;</span></span></code></pre></div><p>传入 <code>value</code> 为 <code>114514</code> 时：</p>',4),P={id:"随机选取",tabindex:"-1"},S=t("a",{class:"header-anchor",href:"#随机选取","aria-label":'Permalink to "随机选取 (random) <badge type="warning">实验性</badge>"'},"​",-1),D=n(`<p>选择随机的子元素。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">此次抛硬币的结果是&lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">random</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;正面&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;反面&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">random</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span></code></pre></div>`,2),x={id:"复数",tabindex:"-1"},V=t("a",{class:"header-anchor",href:"#复数","aria-label":'Permalink to "复数 (plural) <badge type="warning">实验性</badge>"'},"​",-1),I=n(`<ul><li><strong>count:</strong> 用于判断的数值</li></ul><p>根据 <code>count</code> 数值决定选择子元素。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">You have &lt;</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">plural</span><span style="--shiki-light:#6F42C1;--shiki-dark:#D19A66;"> count</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">{count}</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;no apples&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;one apple&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;{count} apples&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&lt;/</span><span style="--shiki-light:#B31D28;--shiki-dark:#E06C75;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">plural</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">&gt;.</span></span></code></pre></div><p>传入 <code>count</code> 为 2 时：</p>`,4),N=n('<h2 id="扩展组件" tabindex="-1">扩展组件 <a class="header-anchor" href="#扩展组件" aria-label="Permalink to &quot;扩展组件&quot;">​</a></h2><h3 id="网页渲染" tabindex="-1">网页渲染 (html) <a class="header-anchor" href="#网页渲染" aria-label="Permalink to &quot;网页渲染 (html)&quot;">​</a></h3><h3 id="内容审查" tabindex="-1">内容审查 (censor) <a class="header-anchor" href="#内容审查" aria-label="Permalink to &quot;内容审查 (censor)&quot;">​</a></h3>',3);function q(w,K,R,j,J,$){const e=p("badge"),l=p("chat-message"),h=p("chat-panel");return d(),o("div",null,[c,t("ul",null,[t("li",null,[s("标有 "),i(e,null,{default:a(()=>[s("セッション")]),_:1}),s(" 的组件只能在会话环境下使用 (常见的会话环境包括中间件和指令的内部)")]),t("li",null,[s("标有 "),i(e,null,{default:a(()=>[s("会话+广播")]),_:1}),s(" 的组件只能在会话环境或 "),_,s(" 中使用")])]),g,t("h3",B,[s("调用指令 (execute) "),i(e,null,{default:a(()=>[s("セッション")]),_:1}),s(),y]),u,i(h,null,{default:a(()=>[i(l,{nickname:"Koishi"},{default:a(()=>[s("foo123bar")]),_:1})]),_:1}),t("h3",m,[s("等待输入 (prompt) "),i(e,null,{default:a(()=>[s("セッション")]),_:1}),s(),A]),E,i(h,null,{default:a(()=>[i(l,{nickname:"Koishi"},{default:a(()=>[s("请输入一段文本。")]),_:1}),i(l,{nickname:"Alice"},{default:a(()=>[s("你好！")]),_:1}),i(l,{nickname:"Koishi"},{default:a(()=>[s("你输入的内容为：你好！")]),_:1})]),_:1}),t("h3",f,[s("国际化 (i18n) "),i(e,null,{default:a(()=>[s("会话+广播")]),_:1}),s(),b]),C,i(h,null,{default:a(()=>[i(l,{nickname:"Koishi"},{default:a(()=>[s("Hello, world!")]),_:1})]),_:1}),t("h3",F,[s("时间 (i18n:time) "),i(e,null,{default:a(()=>[s("会话+广播")]),_:1}),s(),v]),T,i(h,null,{default:a(()=>[i(l,{nickname:"Koishi"},{default:a(()=>[s("剩余时间：1 分钟 55 秒")]),_:1})]),_:1}),t("h3",P,[s("随机选取 (random) "),i(e,{type:"warning"},{default:a(()=>[s("实验性")]),_:1}),s(),S]),D,i(h,null,{default:a(()=>[i(l,{nickname:"Koishi"},{default:a(()=>[s("此次抛硬币的结果是反面")]),_:1})]),_:1}),t("h3",x,[s("复数 (plural) "),i(e,{type:"warning"},{default:a(()=>[s("实验性")]),_:1}),s(),V]),I,i(h,null,{default:a(()=>[i(l,{nickname:"Koishi"},{default:a(()=>[s("You have 2 apples.")]),_:1})]),_:1}),N])}const O=k(r,[["render",q]]);export{Y as __pageData,O as default};
