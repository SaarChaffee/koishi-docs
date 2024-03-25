import{_ as a,k as e,j as l,m as t}from"./chunks/framework.C_JOKtkG.js";const f=JSON.parse('{"title":"术语表","description":"","frontmatter":{},"headers":[],"relativePath":"de-DE/api/glossary.md","filePath":"de-DE/api/glossary.md"}'),i={name:"de-DE/api/glossary.md"},r=t('<h1 id="术语表" tabindex="-1">术语表 <a class="header-anchor" href="#术语表" aria-label="Permalink to &quot;术语表&quot;">​</a></h1><p>本页收集了一些 Koishi 设计中的重要概念，按字母表序排列。如果你在阅读文档时对某个概念感到迷惑，可以随时回到这里查看解释。</p><h2 id="适配器" tabindex="-1">适配器 (Adapter) <a class="header-anchor" href="#适配器" aria-label="Permalink to &quot;适配器 (Adapter)&quot;">​</a></h2><p>适配器是指实现了平台协议，能够让机器人接入平台的插件。通常来说一个适配器实例对应了一个机器人用户，同时启用多个适配器就实现了多个机器人的同时接入。</p><ul><li><a href="./../manual/usage/adapter.html">入门 &gt; 接入聊天平台</a></li><li><a href="./../guide/adapter/adapter.html">开发 &gt; 跨平台 &gt; 实现适配器</a></li><li><a href="./core/adapter.html">API &gt; 核心模块 &gt; 适配器</a></li></ul><h2 id="应用" tabindex="-1">应用 (App) <a class="header-anchor" href="#应用" aria-label="Permalink to &quot;应用 (App)&quot;">​</a></h2><ul><li><a href="./../guide/develop/config.html">开发 &gt; 开发起步 &gt; 配置文件</a></li><li><a href="./core/app.html">API &gt; 核心模块 &gt; 应用</a></li></ul><h2 id="机器人" tabindex="-1">机器人 (Bot) <a class="header-anchor" href="#机器人" aria-label="Permalink to &quot;机器人 (Bot)&quot;">​</a></h2><p>机器人是指由 Koishi 操控的平台用户。这里的用户不一定是真实用户，也可以是部分平台专门提供的机器人用户。其他用户通过与机器人进行交互来体验 Koishi 的各项功能。</p><ul><li><a href="./../guide/basic/advanced.html#机器人对象">开发 &gt; 交互基础 &gt; 进阶用法</a></li><li><a href="./../guide/adapter/bot.html">开发 &gt; 跨平台 &gt; 实现机器人</a></li><li><a href="./core/bot.html">API &gt; 核心模块 &gt; 机器人</a></li></ul><h2 id="频道" tabindex="-1">频道 (Channel) <a class="header-anchor" href="#频道" aria-label="Permalink to &quot;频道 (Channel)&quot;">​</a></h2><p>频道是消息的集合。一个频道包含了具备时间、逻辑顺序的一系列消息。频道又分为私聊频道和群聊频道，其中私聊频道有且仅有两人参与，而群聊频道可以有任意多人参与。</p><ul><li><a href="./../guide/adapter/index.html#核心概念">开发 &gt; 跨平台 &gt; 基础知识</a></li><li><a href="./resources/user.html">API &gt; 平台资源 &gt; 频道</a></li><li><a href="./database/built-in.html#channel">API &gt; 数据库 &gt; 内置数据结构</a></li></ul><h2 id="指令" tabindex="-1">指令 (Command) <a class="header-anchor" href="#指令" aria-label="Permalink to &quot;指令 (Command)&quot;">​</a></h2><p>Koishi 推荐使用指令来处理用户的输入。相比直接使用中间件或事件，指令不仅能够更好地处理用户输入，还有统一的帮助信息、权限管理、速率控制等特性。</p><ul><li><a href="./../manual/usage/command.html">入门 &gt; 指令系统</a></li><li><a href="./../guide/basic/command.html">开发 &gt; 交互基础 &gt; 指令开发</a></li><li><a href="./core/command.html">API &gt; 核心模块 &gt; 指令</a></li></ul><h2 id="控制台" tabindex="-1">控制台 (Console) <a class="header-anchor" href="#控制台" aria-label="Permalink to &quot;控制台 (Console)&quot;">​</a></h2><p>控制台是一个用户友好的图形化管理界面，由一系列官方插件提供。你可以在控制台中监控运行状态、管理插件和配置、查看日志、访问数据库、模拟聊天等。</p><ul><li><a href="./../manual/usage/market.html#认识控制台">入门 &gt; 认识控制台</a></li><li><a href="./../guide/console/">开发 &gt; 控制台</a></li><li><a href="./console/server.html">API &gt; 控制台</a></li></ul><h2 id="上下文" tabindex="-1">上下文 (Context) <a class="header-anchor" href="#上下文" aria-label="Permalink to &quot;上下文 (Context)&quot;">​</a></h2><p>上下文是实际业务逻辑的载体。你可以在上下文中访问事件、中间件、指令和更多服务。这些访问所带来的副作用会被上下文自动收集，并在插件被停用时进行回收。</p><ul><li><a href="./../guide/plugin/">开发 &gt; 模块化</a></li><li><a href="./core/context.html">API &gt; 核心模块 &gt; 上下文</a></li></ul><h2 id="数据库" tabindex="-1">数据库 (Database) <a class="header-anchor" href="#数据库" aria-label="Permalink to &quot;数据库 (Database)&quot;">​</a></h2><p>Koishi 设计了一整套对象关系映射 (ORM) 接口，它易于扩展并广泛地运用于各种插件中，足以应对绝大部分使用场景。你可以在插件中通过 <code>ctx.database</code> 访问数据库服务。</p><ul><li><a href="./../guide/database/">开发 &gt; 数据库 &gt; 使用数据库</a></li><li><a href="./database/built-in.html">API &gt; 数据库</a></li></ul><h2 id="消息元素" tabindex="-1">消息元素 (Element) <a class="header-anchor" href="#消息元素" aria-label="Permalink to &quot;消息元素 (Element)&quot;">​</a></h2><p>消息元素类似于 HTML 元素，它是组成消息的基本单位。一个元素可以表示具有特定语义的内容，如文本、表情、图片、引用、元信息等。Koishi 会将这些元素转换为平台所支持的格式，以便在不同平台之间发送和接收消息。</p><ul><li><a href="./../guide/basic/element.html">开发 &gt; 交互基础 &gt; 消息元素</a></li><li><a href="./../guide/adapter/message.html">开发 &gt; 跨平台 &gt; 消息编码</a></li><li><a href="./message/syntax.html">API &gt; 消息元素</a></li></ul><h2 id="事件" tabindex="-1">事件 (Events) <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件 (Events)&quot;">​</a></h2><ul><li><a href="./../guide/basic/events.html">开发 &gt; 交互基础 &gt; 事件系统</a></li><li><a href="./core/events.html">API &gt; 核心模块 &gt; 事件</a></li><li><a href="./service/events.html">API &gt; 内置服务 &gt; 事件系统</a></li></ul><h2 id="过滤器" tabindex="-1">过滤器 (Filter) <a class="header-anchor" href="#过滤器" aria-label="Permalink to &quot;过滤器 (Filter)&quot;">​</a></h2><ul><li><a href="./../manual/usage/customize.html#过滤器">入门 &gt; 过滤器</a></li><li><a href="./../guide/plugin/filter.html">开发 &gt; 模块化 &gt; 过滤器</a></li><li><a href="./service/filter.html">API &gt; 内置服务 &gt; 过滤器</a></li></ul><h2 id="群组" tabindex="-1">群组 (Guild) <a class="header-anchor" href="#群组" aria-label="Permalink to &quot;群组 (Guild)&quot;">​</a></h2><p>群组是平台用户的集合。一个群组通常会同时包含一组<a href="#用户">用户</a>和<a href="#频道">频道</a>，并通过权限机制让其中的部分用户进行管理。在部分平台中，群组和群聊频道的概念恰好是重合的 (例如 Telegram)：一个群组内有且仅有一个群聊频道。私聊频道不属于任何群组。</p><ul><li><a href="./../guide/adapter/index.html#核心概念">开发 &gt; 跨平台 &gt; 基础知识</a></li><li><a href="./resources/guild.html">API &gt; 平台资源 &gt; 群组</a></li></ul><h2 id="生命周期" tabindex="-1">生命周期 (Lifecycle) <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期 (Lifecycle)&quot;">​</a></h2><ul><li><a href="./../guide/plugin/lifecycle.html">开发 &gt; 模块化 &gt; 生命周期</a></li><li><a href="./core/events.html#生命周期事件">API &gt; 核心模块 &gt; 事件</a></li><li><a href="./service/registry.html">API &gt; 内置服务 &gt; 插件系统</a></li></ul><h2 id="中间件" tabindex="-1">中间件 (Middleware) <a class="header-anchor" href="#中间件" aria-label="Permalink to &quot;中间件 (Middleware)&quot;">​</a></h2><ul><li><a href="./../guide/basic/middleware.html">开发 &gt; 交互基础 &gt; 中间件</a></li></ul><h2 id="数据模型" tabindex="-1">数据模型 (Model) <a class="header-anchor" href="#数据模型" aria-label="Permalink to &quot;数据模型 (Model)&quot;">​</a></h2><ul><li><a href="./../guide/database/model.html">开发 &gt; 数据库 &gt; 数据模型</a></li><li><a href="./database/model.html">API &gt; 数据库 &gt; 数据模型</a></li></ul><h2 id="平台" tabindex="-1">平台 (Platform) <a class="header-anchor" href="#平台" aria-label="Permalink to &quot;平台 (Platform)&quot;">​</a></h2><p>平台是指聊天平台，比如 QQ、Discord 等。同一平台内的用户间具有相互发送消息的能力，而不同平台的用户间则没有。对于 Rocket.Chat 这一类可自建的聊天平台而言，每个独立的自建服务器都视为不同的平台。</p><ul><li><a href="./../guide/adapter/index.html#核心概念">开发 &gt; 跨平台 &gt; 基础知识</a></li></ul><h2 id="插件" tabindex="-1">插件 (Plugin) <a class="header-anchor" href="#插件" aria-label="Permalink to &quot;插件 (Plugin)&quot;">​</a></h2><ul><li><a href="./../guide/plugin/">开发 &gt; 模块化 &gt; 认识插件</a></li><li><a href="./service/registry.html">API &gt; 内置服务 &gt; 插件系统</a></li></ul><h2 id="协议" tabindex="-1">协议 (Protocol) <a class="header-anchor" href="#协议" aria-label="Permalink to &quot;协议 (Protocol)&quot;">​</a></h2><h2 id="路由" tabindex="-1">路由 (Router) <a class="header-anchor" href="#路由" aria-label="Permalink to &quot;路由 (Router)&quot;">​</a></h2><ul><li><a href="./service/router.html">API &gt; 内置服务 &gt; 网络服务</a></li></ul><h2 id="配置构型" tabindex="-1">配置构型 (Schema) <a class="header-anchor" href="#配置构型" aria-label="Permalink to &quot;配置构型 (Schema)&quot;">​</a></h2><ul><li><a href="./../guide/plugin/schema.html">开发 &gt; 模块化 &gt; 配置构型</a></li><li><a href="./../schema/">演练场 &gt; 配置构型</a></li></ul><h2 id="服务" tabindex="-1">服务 (Service) <a class="header-anchor" href="#服务" aria-label="Permalink to &quot;服务 (Service)&quot;">​</a></h2><p>服务是一系列挂载于上下文对象上的功能的合集 (例如数据库和路由等)。为避免耦合，这些功能并不直接定义在上下文本身，而是将应用看作一个容器，通过依赖合并的方式来实现控制的反转。</p><ul><li><a href="./../guide/plugin/service.html">开发 &gt; 模块化 &gt; 服务与依赖</a></li><li><a href="./core/context.html#混入属性和方法">API &gt; 核心模块 &gt; 上下文</a></li></ul><h2 id="会话" tabindex="-1">会话 (Session) <a class="header-anchor" href="#会话" aria-label="Permalink to &quot;会话 (Session)&quot;">​</a></h2><p>会话对象封装了一次上报事件所含有的属性以及其上的可用操作。你会在事件，中间件和指令的回调函数中用到它。此外，会话对象还提供了许多实用方法，足以满足绝大部分的使用场景。</p><ul><li><a href="./../guide/basic/events.html">开发 &gt; 交互基础 &gt; 事件系统</a></li><li><a href="./core/session.html">API &gt; 核心模块 &gt; 会话</a></li></ul><h2 id="用户" tabindex="-1">用户 (User) <a class="header-anchor" href="#用户" aria-label="Permalink to &quot;用户 (User)&quot;">​</a></h2><ul><li><a href="./resources/user.html">API &gt; 平台资源 &gt; 用户</a></li><li><a href="./database/built-in.html#user">API &gt; 数据库 &gt; 内置数据结构</a></li></ul>',59),h=[r];function o(d,u,s,n,g,c){return l(),e("div",null,h)}const b=a(i,[["render",o]]);export{f as __pageData,b as default};
