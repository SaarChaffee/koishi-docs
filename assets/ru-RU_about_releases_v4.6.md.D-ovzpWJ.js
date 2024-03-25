import{_ as e,k as r,j as a,m as t}from"./chunks/framework.C_JOKtkG.js";const p=JSON.parse('{"title":"v4.6 版本介绍","description":"","frontmatter":{},"headers":[],"relativePath":"ru-RU/about/releases/v4.6.md","filePath":"ru-RU/about/releases/v4.6.md"}'),i={name:"ru-RU/about/releases/v4.6.md"},o=t('<h1 id="v4-6-版本介绍" tabindex="-1">v4.6 版本介绍 <a class="header-anchor" href="#v4-6-版本介绍" aria-label="Permalink to &quot;v4.6 版本介绍&quot;">​</a></h1><ul><li><a href="https://github.com/koishijs/koishi/issues/578" target="_blank" rel="noreferrer">Roadmap (Part 1)</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.5.1" target="_blank" rel="noreferrer">v4.5.1</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.5.2" target="_blank" rel="noreferrer">v4.5.2</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.6.0" target="_blank" rel="noreferrer">v4.6.0</a></li><li><a href="https://github.com/koishijs/koishi/issues/615" target="_blank" rel="noreferrer">Roadmap (Part 2)</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.6.1" target="_blank" rel="noreferrer">v4.6.1</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.6.2" target="_blank" rel="noreferrer">v4.6.2</a></li><li><a href="https://github.com/koishijs/koishi/releases/tag/4.6.3" target="_blank" rel="noreferrer">v4.6.3</a></li></ul><h2 id="版本规划调整" tabindex="-1">版本规划调整 <a class="header-anchor" href="#版本规划调整" aria-label="Permalink to &quot;版本规划调整&quot;">​</a></h2><p>如你所见，我们调整了 minor 版本的规划。在此之前，每个 minor 版本的规划是从前一个 minor 版本发布后开始计算的；而从 v4.6 开始，每个 minor 版本的规划将会计算到下一个 minor 版本发布之前。同时，未来的每个 minor 版本也将会包含更多的 patch 版本，每个 patch 版本的发布周期暂定为一周。</p><h2 id="更强大的-orm" tabindex="-1">更强大的 ORM <a class="header-anchor" href="#更强大的-orm" aria-label="Permalink to &quot;更强大的 ORM&quot;">​</a></h2><p>在这个版本中，我们将 ORM 相关功能移至了一个新仓库 cosmotype (后更名为 minato) 中。在完成与 Koishi 的解耦的同时，我们也引入了全新的 Selection API 和 Evaluation Callback。这些新功能将允许包括连接在内的更多高级数据库操作。</p><p>与此同时，我们也增加和细化了许多单元测试，并完善了初始化和空值判断相关的各项功能。</p><p>参见：<a href="https://github.com/koishijs/koishi/issues/595" target="_blank" rel="noreferrer">Query Builder Roadmap</a></p><h2 id="功能解耦" tabindex="-1">功能解耦 <a class="header-anchor" href="#功能解耦" aria-label="Permalink to &quot;功能解耦&quot;">​</a></h2><p>在两年多的开发过程中，Koishi 已经成长为一个综合性框架了，其中的许多功能完全可以独立成库。而实际上 Koishi 中的很多模块都可以或已经被用于其他项目中。正是考虑到这些情况，除了 ORM 以外，我们也解耦了其他一些功能，例如 <a href="https://github.com/shigma/reggol" target="_blank" rel="noreferrer">reggol</a>，<a href="https://github.com/shigma/ns-require" target="_blank" rel="noreferrer">ns-require</a> 和 <a href="https://github.com/shigma/yakumo" target="_blank" rel="noreferrer">yakumo</a> 等。在未来的版本中，我们也将对 Koishi 的核心功能进行拆分，以便满足更多开发者的需求，敬请期待。</p><p>除此以外，部分大型官方插件也被拆分至独立的仓库，例如 <a href="https://github.com/koishijs/koishi-plugin-eval" target="_blank" rel="noreferrer">eval</a>, <a href="https://github.com/koishijs/koishi-plugin-github" target="_blank" rel="noreferrer">github</a> 和 <a href="https://github.com/koishijs/koishi-plugin-dialogue" target="_blank" rel="noreferrer">teach</a> 等。</p>',11),s=[o];function h(l,n,u,g,k,c){return a(),r("div",null,s)}const b=e(i,[["render",h]]);export{p as __pageData,b as default};
