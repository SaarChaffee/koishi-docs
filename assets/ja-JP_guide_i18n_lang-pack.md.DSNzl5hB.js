import{_ as l,k as r,l as t,D as e,f as a,A as o,m as s,C as i,j as _}from"./chunks/framework.C_JOKtkG.js";const C=JSON.parse('{"title":"语言包开发 实验性","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/guide/i18n/lang-pack.md","filePath":"ja-JP/guide/i18n/lang-pack.md"}'),h={name:"ja-JP/guide/i18n/lang-pack.md"},p={id:"语言包开发",tabindex:"-1"},u=t("a",{class:"header-anchor",href:"#语言包开发","aria-label":'Permalink to "语言包开发 <badge type="warning">实验性</badge>"'},"​",-1),f=s('<p>Koishi 及其官方插件通常会内置 <code>zh-CN</code> 和 <code>en-US</code> 两种语言。除此以外，还有一些语言同样由官方维护，但是并不会直接内置，而是以专门的插件的形式提供：</p><ul><li><code>de-DE</code></li><li><code>fr-FR</code></li><li><code>ja-JP</code></li><li><code>ru-RU</code></li><li><code>zh-TW</code></li></ul><p>对应的插件名将形如 @koishijs/plugin-locale-zh-tw (请注意插件名中只会使用小写字母)。</p><h2 id="参与官方翻译项目" tabindex="-1">参与官方翻译项目 <a class="header-anchor" href="#参与官方翻译项目" aria-label="Permalink to &quot;参与官方翻译项目&quot;">​</a></h2><p>我们在 <a href="https://crowdin.com/project/koishi" target="_blank" rel="noreferrer">Crowdin</a> 上维护了一个翻译项目，你可以在这里参与上述语言的翻译 (包括 <code>en-US</code>)。经过审核的翻译将会被自动同步到 GitHub 仓库中。如果你想翻译的语言不在上述列表中，可以向我们提交 Issue，也可以按照下面的指南发布第三方语言包。</p><h2 id="编写第三方语言包" tabindex="-1">编写第三方语言包 <a class="header-anchor" href="#编写第三方语言包" aria-label="Permalink to &quot;编写第三方语言包&quot;">​</a></h2><p>如果你不仅仅是想提供标准化的翻译，而是希望为 Koishi 提供不同的说话风格，这同样可以通过语言包来实现。根据 <a href="https://zh.wikipedia.org/wiki/IETF%E8%AA%9E%E8%A8%80%E6%A8%99%E7%B1%A4" target="_blank" rel="noreferrer">IETF 语言标签</a> 规范，我们可以在标准的语言标签后面添加一个后缀，来表示一个语言变种。例如，你可以通过编写名为 <code>zh-CN-ZAKO</code> 的语言包，来为 Koishi 提供一个二次元雌小鬼的说话风格：</p>',7),m=t("p",null,"—— 当要表达「权限不足」时 ——",-1),g=t("p",null,"—— 当要表达「调用过于频繁，请稍后再试」时 ——",-1);function k(b,P,A,E,T,w){const d=i("badge"),n=i("chat-message"),c=i("chat-panel");return _(),r("div",null,[t("h1",p,[e("语言包开发 "),a(d,{type:"warning"},{default:o(()=>[e("实验性")]),_:1}),e(),u]),f,a(c,null,{default:o(()=>[m,a(n,{nickname:"Koishi"},{default:o(()=>[e(" 哼，你以为自己是谁啊？没那个本事就别想在这里装大头！ ")]),_:1})]),_:1}),a(c,null,{default:o(()=>[g,a(n,{nickname:"Koishi"},{default:o(()=>[e(" 哎哟，不要这么着急嘛，稍微等一下下，让人家缓口气~ ")]),_:1})]),_:1})])}const N=l(h,[["render",k]]);export{C as __pageData,N as default};
