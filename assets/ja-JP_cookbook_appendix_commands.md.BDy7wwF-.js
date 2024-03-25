import{_ as a,k as e,j as o,m as i}from"./chunks/framework.C_JOKtkG.js";const b=JSON.parse('{"title":"案例：指令管理","description":"","frontmatter":{},"headers":[],"relativePath":"ja-JP/cookbook/appendix/commands.md","filePath":"ja-JP/cookbook/appendix/commands.md"}'),l={name:"ja-JP/cookbook/appendix/commands.md"},t=i('<h1 id="案例-指令管理" tabindex="-1">案例：指令管理 <a class="header-anchor" href="#案例-指令管理" aria-label="Permalink to &quot;案例：指令管理&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>主条目：<a href="./../design/disposable.html">可逆的 Koishi</a></p></div><p>本文将以 <a href="./../../plugins/console/commands.html">commands</a> 插件为例，分析 Koishi 中的可逆插件开发。</p><h2 id="功能描述" tabindex="-1">功能描述 <a class="header-anchor" href="#功能描述" aria-label="Permalink to &quot;功能描述&quot;">​</a></h2><p>从文档中可以看到，指令管理插件提供了以下功能：</p><ul><li>设置别名和显示名称</li><li>添加和删除子指令</li><li>权限管理</li><li>速率限制</li></ul><p>与此同时，该插件也允许其他插件通过 <code>ctx.schema</code> 服务注册更多可以被该插件所配置的功能。</p><p>上述所有行为都通过配置文件进行持久化，即：当用户在控制台中做出任何改动时，插件本身的配置项发生变化，并同步至配置文件中；当整个实例重启时这些改动会依然生效。</p><h2 id="实现要求" tabindex="-1">实现要求 <a class="header-anchor" href="#实现要求" aria-label="Permalink to &quot;实现要求&quot;">​</a></h2><p>该插件要实现可逆性，需要满足以下具体的性质：</p><h3 id="副作用回收" tabindex="-1">副作用回收 <a class="header-anchor" href="#副作用回收" aria-label="Permalink to &quot;副作用回收&quot;">​</a></h3><p>可逆的 Koishi 要求 commands 插件回收自身产生的一切副作用，即：当插件被停用时，用户对指令系统做出的一切改动应当复原：已修改的配置项、指令的别名和显示名称全部恢复为未启用此插件时的状态；创建的新指令被移除；被调整的父子指令关系被复原。</p><h3 id="控制台依赖" tabindex="-1">控制台依赖 <a class="header-anchor" href="#控制台依赖" aria-label="Permalink to &quot;控制台依赖&quot;">​</a></h3><p>commands 插件的功能可以分为两个部分：</p><ol><li>读取配置项，并对指令系统做出改动。</li><li>为控制台提供专门的「指令管理」页面，并允许用户进一步改动指令系统。</li></ol><p>其中 1 不依赖控制台插件，2 依赖控制台插件。可逆的 Koishi 要求该插件被启用时，1 会立即生效，而 2 则仅当 console 插件启用时生效；当 console 插件停用时，2 会立即失效并回收相关副作用，1 保持生效。</p><h3 id="指令依赖" tabindex="-1">指令依赖 <a class="header-anchor" href="#指令依赖" aria-label="Permalink to &quot;指令依赖&quot;">​</a></h3><p>可逆的 Koishi 要求插件的加载顺序可以是任意的。而 commands 插件会改动某些指令的行为，因此其不能假定其在加载时对应的指令已存在。具体而言：</p><ol><li>如果对应的指令已存在，那么立即进行对该指令的改动。</li><li>如果对应的指令尚不存在，那么不做出任何改动；当指令被创建时再进行改动。</li></ol><p>对于将 A 指定为 B 的子指令的情形，如果 B 不存在而 A 已存在，则先只对 A 进行除指定父指令以外的改动；当 B 指令被创建时再将 A 设置为 B 的子指令。</p><h2 id="实现原理" tabindex="-1">实现原理 <a class="header-anchor" href="#实现原理" aria-label="Permalink to &quot;实现原理&quot;">​</a></h2><p>以上三个部分使用了不同的实现原理。</p><h3 id="副作用回收-1" tabindex="-1">副作用回收 <a class="header-anchor" href="#副作用回收-1" aria-label="Permalink to &quot;副作用回收&quot;">​</a></h3><p>使用 dispose 事件配合 ctx.command() 本身的自回收实现。</p><h3 id="控制台依赖-1" tabindex="-1">控制台依赖 <a class="header-anchor" href="#控制台依赖-1" aria-label="Permalink to &quot;控制台依赖&quot;">​</a></h3><p>使用 using 实现。</p><h3 id="指令依赖-1" tabindex="-1">指令依赖 <a class="header-anchor" href="#指令依赖-1" aria-label="Permalink to &quot;指令依赖&quot;">​</a></h3><p>对于未加载的指令，维护一个等待中的改动队列，并同时监听 command/added 事件以实现。</p><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><p>commands 插件的设计充分体现了 Koishi 的可逆性。尽管该插件需要考虑非常多边界情况，但得益于自回收、生命周期、服务依赖、事件系统等特性，所有的情况都能够被妥善处理。事实上，大部分插件并不会遇到如此复杂的情况；对于可逆性的考量也更多地存在于架构设计上，并不会显著增加插件开发者的心智负担。</p>',30),r=[t];function s(h,n,d,c,p,m){return o(),e("div",null,r)}const _=a(l,[["render",s]]);export{b as __pageData,_ as default};
