import{_ as e,k as o,j as t,m as i}from"./chunks/framework.C_JOKtkG.js";const _=JSON.parse('{"title":"通知服务 (Notifier)","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/plugins/develop/notifier.md","filePath":"zh-CN/plugins/develop/notifier.md"}'),a={name:"zh-CN/plugins/develop/notifier.md"},n=i('<h1 id="通知服务" tabindex="-1">通知服务 (Notifier) <a class="header-anchor" href="#通知服务" aria-label="Permalink to &quot;通知服务 (Notifier)&quot;">​</a></h1><h2 id="上下文-api" tabindex="-1">上下文 API <a class="header-anchor" href="#上下文-api" aria-label="Permalink to &quot;上下文 API&quot;">​</a></h2><h3 id="ctx-notifier-create" tabindex="-1">ctx.notifier.create(options?) <a class="header-anchor" href="#ctx-notifier-create" aria-label="Permalink to &quot;ctx.notifier.create(options?)&quot;">​</a></h3><ul><li><strong>options:</strong> <code>Fragment | <a href="#options">Options</a></code> 通知选项</li><li>返回值: <a href="#notifier"><code>Notifier</code></a></li></ul><p>创建一个通知。如果传入的是字符串或 JSX，则会视为 <a href="#options-content"><code>options.content</code></a>。</p><h2 id="options" tabindex="-1">通知选项 <a class="header-anchor" href="#options" aria-label="Permalink to &quot;通知选项 {#options}&quot;">​</a></h2><h3 id="options-type" tabindex="-1">options.type <a class="header-anchor" href="#options-type" aria-label="Permalink to &quot;options.type&quot;">​</a></h3><ul><li>类型: <code>&#39;primary&#39; | &#39;success&#39; | &#39;warning&#39; | &#39;danger&#39;</code></li><li>默认值: <code>&#39;primary&#39;</code></li></ul><p>通知类型。</p><h3 id="options-content" tabindex="-1">options.content <a class="header-anchor" href="#options-content" aria-label="Permalink to &quot;options.content&quot;">​</a></h3><ul><li>类型: <code>Fragment</code></li><li>默认值: <code>&#39;&#39;</code></li></ul><p>通知内容。</p><h2 id="notifier" tabindex="-1">类：Notifier <a class="header-anchor" href="#notifier" aria-label="Permalink to &quot;类：Notifier {#notifier}&quot;">​</a></h2><h3 id="notifier-update" tabindex="-1">notifier.update(options?) <a class="header-anchor" href="#notifier-update" aria-label="Permalink to &quot;notifier.update(options?)&quot;">​</a></h3><ul><li><strong>options:</strong> <code>Fragment | <a href="#options">Options</a></code> 通知选项</li></ul><p>更新此通知。如果传入的是字符串，则会视为 <a href="#options-content"><code>options.content</code></a>。</p><h3 id="notifier-dispose" tabindex="-1">notifier.dispose() <a class="header-anchor" href="#notifier-dispose" aria-label="Permalink to &quot;notifier.dispose()&quot;">​</a></h3><p>移除此通知。</p>',18),r=[n];function s(l,c,d,p,h,f){return t(),o("div",null,r)}const m=e(a,[["render",s]]);export{_ as __pageData,m as default};
