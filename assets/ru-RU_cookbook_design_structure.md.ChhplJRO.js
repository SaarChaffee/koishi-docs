import{_ as o,k as e,j as t,m as s}from"./chunks/framework.C_JOKtkG.js";const m=JSON.parse('{"title":"项目架构","description":"","frontmatter":{},"headers":[],"relativePath":"ru-RU/cookbook/design/structure.md","filePath":"ru-RU/cookbook/design/structure.md"}'),c={name:"ru-RU/cookbook/design/structure.md"},a=s('<h1 id="项目架构" tabindex="-1">项目架构 <a class="header-anchor" href="#项目架构" aria-label="Permalink to &quot;项目架构&quot;">​</a></h1><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>本文档正在编写中，内容可能不完整或者不准确。</p></div><p>大家在编写 Koishi 插件的时候想必都会从 Koishi 导入各种东西。然而，Koishi 也并不是单一的包，而是拆分为了多个仓库和模块进行开发的。我们熟悉的 <code>Command</code>, <code>Context</code>, <code>Session</code> 和 <code>Schema</code> 就来自于不同的包中。而为了简化插件开发流程并提高可靠性，Koishi 将这些包统一重新导出，这才有了我们熟悉的 Koishi 框架。</p><p>下面就让我们用一张图介绍 Koishi 的底层架构吧。</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>这里应该有一张架构图但是还没有画。</p></div>',5),i=[a];function r(d,n,_,l,p,u){return t(),e("div",null,i)}const k=o(c,[["render",r]]);export{m as __pageData,k as default};
