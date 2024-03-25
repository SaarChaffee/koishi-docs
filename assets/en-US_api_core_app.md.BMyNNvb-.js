import{_ as i,k as a,j as s,m as e}from"./chunks/framework.C_JOKtkG.js";const g=JSON.parse('{"title":"App","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/api/core/app.md","filePath":"en-US/api/core/app.md"}'),t={name:"en-US/api/core/app.md"},o=e(`<h1 id="app" tabindex="-1">App <a class="header-anchor" href="#app" aria-label="Permalink to &quot;App&quot;">​</a></h1><p><strong>应用 (App)</strong> 是程序的入口。可以通过 <code>new Context()</code> 构造或通过 <code>ctx.root</code> 访问。</p><p>本节中介绍的配置项可用于传入构造函数，也可以在配置文件或控制台中进行修改。</p><h2 id="网络设置" tabindex="-1">网络设置 <a class="header-anchor" href="#网络设置" aria-label="Permalink to &quot;网络设置&quot;">​</a></h2><h3 id="options-host" tabindex="-1">options.host <a class="header-anchor" href="#options-host" aria-label="Permalink to &quot;options.host&quot;">​</a></h3><ul><li>类型：<code>string</code></li><li>默认值：<code>&#39;127.0.0.1&#39;</code></li></ul><p>服务器监听的 IP 地址。如果将此设置为 <code>0.0.0.0</code> 将监听所有地址，包括局域网和公网地址。</p><h3 id="options-port" tabindex="-1">options.port <a class="header-anchor" href="#options-port" aria-label="Permalink to &quot;options.port&quot;">​</a></h3><ul><li>类型：<code>number</code></li></ul><p>要监听的初始端口号。</p><h3 id="options-maxport" tabindex="-1">options.maxPort <a class="header-anchor" href="#options-maxport" aria-label="Permalink to &quot;options.maxPort&quot;">​</a></h3><ul><li>类型：<code>number</code></li><li>默认值：<a href="#options-port"><code>options.port</code></a></li></ul><p>允许监听的最大端口号。</p><h3 id="options-selfurl" tabindex="-1">options.selfUrl <a class="header-anchor" href="#options-selfurl" aria-label="Permalink to &quot;options.selfUrl&quot;">​</a></h3><ul><li>类型：<code>string</code></li></ul><p>Koishi 服务暴露在公网的地址。部分功能（例如 <a href="./../../plugins/adapter/telegram.html">adapter-telegram</a> 或是 <a href="https://assets.koishi.chat/plugins/local.html" target="_blank" rel="noreferrer">plugin-assets-local</a>）需要用到。</p><h2 id="基础设置" tabindex="-1">基础设置 <a class="header-anchor" href="#基础设置" aria-label="Permalink to &quot;基础设置&quot;">​</a></h2><h3 id="options-prefix" tabindex="-1">options.prefix <a class="header-anchor" href="#options-prefix" aria-label="Permalink to &quot;options.prefix&quot;">​</a></h3><ul><li>类型：<code>Computed&lt;string | string[]&gt;</code></li><li>默认值：<code>[&#39;&#39;]</code></li></ul><p>指令前缀字符，可以是字符串或字符串数组。将用于指令前缀的匹配。例如，如果配置该选项为 <code>.</code>，则你可以通过 <code>.help</code> 来进行 help 指令的调用。参见 <a href="./../../manual/usage/command.html#触发前缀">触发前缀</a> 一节。</p><h3 id="options-nickname" tabindex="-1">options.nickname <a class="header-anchor" href="#options-nickname" aria-label="Permalink to &quot;options.nickname&quot;">​</a></h3><ul><li>类型：<code>string | string[]</code></li><li>默认值：<code>[]</code></li></ul><p>机器人的昵称，可以是字符串或字符串数组。将用于指令前缀的匹配。例如，如果配置该选项为 <code>&#39;恋恋&#39;</code>，则你可以通过 <code>恋恋，help</code> 来进行 help 指令的调用。参见 <a href="./../../manual/usage/command.html#触发前缀">触发前缀</a> 一节。</p><h3 id="options-autoassign" tabindex="-1">options.autoAssign <a class="header-anchor" href="#options-autoassign" aria-label="Permalink to &quot;options.autoAssign&quot;">​</a></h3><ul><li>类型：<code>Computed&lt;boolean&gt;</code></li><li>默认值：<code>true</code></li></ul><p>当获取不到频道数据时，是否将接收到消息的机器人设置为该频道的受理人。</p><h3 id="options-autoauthorize" tabindex="-1">options.autoAuthorize <a class="header-anchor" href="#options-autoauthorize" aria-label="Permalink to &quot;options.autoAuthorize&quot;">​</a></h3><ul><li>类型：<code>Computed&lt;number&gt;</code></li><li>默认值：<code>1</code></li></ul><p>当获取不到用户数据时默认使用的权限等级。</p><h3 id="options-minsimilarity" tabindex="-1">options.minSimilarity <a class="header-anchor" href="#options-minsimilarity" aria-label="Permalink to &quot;options.minSimilarity&quot;">​</a></h3><ul><li>类型：<code>number</code></li><li>默认值：<code>1</code></li></ul><p>用于模糊匹配的相似系数，应该是一个 0 到 1 之间的数值。数值越高，模糊匹配越严格。设置为 1 可以完全禁用模糊匹配。参见 <a href="./../../manual/recipe/execution.html#模糊匹配">模糊匹配</a> 一节。</p><h3 id="options-delay" tabindex="-1">options.delay <a class="header-anchor" href="#options-delay" aria-label="Permalink to &quot;options.delay&quot;">​</a></h3><ul><li>类型：<code>DelayOptions</code></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 所有配置项的单位均为毫秒</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> DelayOptions</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 调用 session.sendQueued() 时消息间发送的最小延迟，按前一条消息的字数计算，默认值为 0</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  character</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 调用 session.sendQueued() 时消息间发送的最小延迟，按固定值计算，默认值为 100</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  message</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 调用 session.cancelQueued() 时默认的延迟，默认值为 0</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  cancel</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 调用 bot.broadcast() 时默认的延迟，默认值为 500</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  broadcast</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  // 调用 session.prompt() 是默认的等待时间，默认值为 60000</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;">  prompt</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">?</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> number</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><h2 id="国际化设置" tabindex="-1">国际化设置 <a class="header-anchor" href="#国际化设置" aria-label="Permalink to &quot;国际化设置&quot;">​</a></h2><h3 id="i18n-locales" tabindex="-1">options.i18n.locales <a class="header-anchor" href="#i18n-locales" aria-label="Permalink to &quot;options.i18n.locales {#i18n-locales}&quot;">​</a></h3><ul><li>类型：<code>string[]</code></li></ul><p>可用的语言列表。按照回退顺序排列。</p><h3 id="i18n-output" tabindex="-1">options.i18n.output <a class="header-anchor" href="#i18n-output" aria-label="Permalink to &quot;options.i18n.output {#i18n-output}&quot;">​</a></h3><ul><li>类型：<code>string</code></li></ul><p>输出语言偏好设置。可选值包括：</p><ul><li><code>prefer-user</code>: 优先使用用户语言</li><li><code>prefer-channel</code>: 优先使用频道语言</li></ul><h2 id="请求设置" tabindex="-1">请求设置 <a class="header-anchor" href="#请求设置" aria-label="Permalink to &quot;请求设置&quot;">​</a></h2><h3 id="options-request-proxyagent" tabindex="-1">options.request.proxyAgent <a class="header-anchor" href="#options-request-proxyagent" aria-label="Permalink to &quot;options.request.proxyAgent&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>配置请求时默认使用的网络代理。</p><h2 id="配置文件选项" tabindex="-1">配置文件选项 <a class="header-anchor" href="#配置文件选项" aria-label="Permalink to &quot;配置文件选项&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>下面的配置项来自 Koishi 的命令行工具，仅可在配置文件中编辑，不支持在控制台中修改。</p></div><h3 id="options-plugins" tabindex="-1">options.plugins <a class="header-anchor" href="#options-plugins" aria-label="Permalink to &quot;options.plugins&quot;">​</a></h3><ul><li>类型：<code>Record&lt;string, any&gt;</code></li></ul><p>要安装的插件列表。以传入的对象的键为插件名，值为插件的选项进行安装。参见：</p><ul><li><a href="./../../guide/develop/config.html">开发 &gt; 开发起步 &gt; 配置文件</a></li><li><a href="./../../guide/plugin/">开发 &gt; 模块化 &gt; 认识插件</a></li></ul><h3 id="options-logger" tabindex="-1">options.logger <a class="header-anchor" href="#options-logger" aria-label="Permalink to &quot;options.logger&quot;">​</a></h3><ul><li>类型：<code>Logger.Config</code></li></ul><p>参见 <a href="./../utils/logger.html">输出日志</a> 一节。</p>`,56),l=[o];function n(p,r,h,d,c,u){return s(),a("div",null,l)}const m=i(t,[["render",n]]);export{g as __pageData,m as default};
