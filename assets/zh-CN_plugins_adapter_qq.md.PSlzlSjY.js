import{_ as e,k as i,j as l,m as o}from"./chunks/framework.C_JOKtkG.js";const m=JSON.parse('{"title":"@koishijs/plugin-adapter-qq","description":"","frontmatter":{},"headers":[],"relativePath":"zh-CN/plugins/adapter/qq.md","filePath":"zh-CN/plugins/adapter/qq.md"}'),a={name:"zh-CN/plugins/adapter/qq.md"},n=o('<h1 id="koishijs-plugin-adapter-qq" tabindex="-1">@koishijs/plugin-adapter-qq <a class="header-anchor" href="#koishijs-plugin-adapter-qq" aria-label="Permalink to &quot;@koishijs/plugin-adapter-qq&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>目前 QQ 群官方 API 尚未支持发送本地图片，但 Koishi 对此类需求做了处理。建议同时安装 <a href="./../develop/server-temp.html">@koishijs/plugin-server-temp</a> 插件，并将 Koishi <a href="./../../manual/recipe/server.html">部署到公网</a>。</p></div><p>QQ 和 QQ 频道官方机器人适配器。</p><h2 id="接入方法" tabindex="-1">接入方法 <a class="header-anchor" href="#接入方法" aria-label="Permalink to &quot;接入方法&quot;">​</a></h2><ol><li>前往 <a href="https://q.qq.com" target="_blank" rel="noreferrer">QQ 开放平台</a> 注册账号</li><li>登陆进入 <a href="https://q.qq.com/#/app/bot" target="_blank" rel="noreferrer">机器人管理后台</a> 并创建官方机器人</li><li>创建完成后，在「开发设置」界面获取机器人三项基本数据 [id, token, key]</li><li>将上面的基本数据作为机器人配置项即可使用</li></ol><h2 id="机器人选项" tabindex="-1">机器人选项 <a class="header-anchor" href="#机器人选项" aria-label="Permalink to &quot;机器人选项&quot;">​</a></h2><h3 id="config-id" tabindex="-1">config.id <a class="header-anchor" href="#config-id" aria-label="Permalink to &quot;config.id&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>机器人 id。</p><h3 id="config-key" tabindex="-1">config.key <a class="header-anchor" href="#config-key" aria-label="Permalink to &quot;config.key&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>机器人密钥，管理端又称呼为 secret。</p><h3 id="config-token" tabindex="-1">config.token <a class="header-anchor" href="#config-token" aria-label="Permalink to &quot;config.token&quot;">​</a></h3><ul><li>类型: <code>string</code></li></ul><p>机器人 token。</p><h3 id="config-type" tabindex="-1">config.type <a class="header-anchor" href="#config-type" aria-label="Permalink to &quot;config.type&quot;">​</a></h3><ul><li>类型: <code>&#39;private&#39; | &#39;public&#39;</code></li></ul><p>是否为公域机器人。</p><h3 id="config-sandbox" tabindex="-1">config.sandbox <a class="header-anchor" href="#config-sandbox" aria-label="Permalink to &quot;config.sandbox&quot;">​</a></h3><ul><li>类型: <code>boolean</code></li><li>默认值: <code>true</code></li></ul><p>是否开启沙盒。</p><h3 id="config-endpoint" tabindex="-1">config.endpoint <a class="header-anchor" href="#config-endpoint" aria-label="Permalink to &quot;config.endpoint&quot;">​</a></h3><ul><li>类型: <code>string</code></li><li>默认值: <code>&#39;https://api.sgroup.qq.com/&#39;</code></li></ul><p>要请求的 API 网址。</p><h3 id="config-authtype" tabindex="-1">config.authType <a class="header-anchor" href="#config-authtype" aria-label="Permalink to &quot;config.authType&quot;">​</a></h3><ul><li>类型: <code>&#39;bot&#39; | &#39;bearer&#39;</code></li><li>默认值: <code>&#39;bot&#39;</code></li></ul><p>验证方式。</p><h2 id="内部接口" tabindex="-1">内部接口 <a class="header-anchor" href="#内部接口" aria-label="Permalink to &quot;内部接口&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>关于内部接口的使用方式，请参见 <a href="./../../guide/adapter/bot.html#access-from-plugin">访问内部接口</a>。</p></div><p>QQ 群和频道有着不同的机器人接口，因此我们提供了两套内部 API。</p><h3 id="群" tabindex="-1">群 (含私聊) <a class="header-anchor" href="#群" aria-label="Permalink to &quot;群 (含私聊)&quot;">​</a></h3><p>对应的平台名称为 <code>qq</code>。</p><ul><li><code>internal.acknowledgeInteraction()</code></li><li><code>internal.sendFileGuild()</code></li><li><code>internal.sendFilePrivate()</code></li><li><code>internal.sendMessage()</code></li><li><code>internal.sendPrivateMessage()</code></li></ul><h3 id="频道" tabindex="-1">频道 (含私聊) <a class="header-anchor" href="#频道" aria-label="Permalink to &quot;频道 (含私聊)&quot;">​</a></h3><p>对应的平台名称为 <code>qqguild</code>。</p><ul><li><code>internal.addGuildMemberRole()</code></li><li><code>internal.createDMS()</code></li><li><code>internal.createGuildApiPermissionDemand()</code></li><li><code>internal.createGuildAnnounce()</code></li><li><code>internal.createGuildChannel()</code></li><li><code>internal.createGuildRole()</code></li><li><code>internal.createPinsMessage()</code></li><li><code>internal.createPost()</code></li><li><code>internal.createSchedule()</code></li><li><code>internal.createReaction()</code></li><li><code>internal.deleteChannel()</code></li><li><code>internal.deleteDM()</code></li><li><code>internal.deleteMessage()</code></li><li><code>internal.deleteReaction()</code></li><li><code>internal.getChannel()</code></li><li><code>internal.getChannelMemberPermissions()</code></li><li><code>internal.getChannelOnlineNums()</code></li><li><code>internal.getChannelRole()</code></li><li><code>internal.getChannels()</code></li><li><code>internal.getGuild()</code></li><li><code>internal.getGuildApiPermissions()</code></li><li><code>internal.getGuildMember()</code></li><li><code>internal.getGuildMembers()</code></li><li><code>internal.getGuildRoleMembers()</code></li><li><code>internal.getGuildRoles()</code></li><li><code>internal.getGuilds()</code></li><li><code>internal.getMe()</code></li><li><code>internal.getMessage()</code></li><li><code>internal.getMessageSetting()</code></li><li><code>internal.getPinsMessage()</code></li><li><code>internal.getSchedule()</code></li><li><code>internal.getSchedules()</code></li><li><code>internal.getReactions()</code></li><li><code>internal.getThread()</code></li><li><code>internal.listThreads()</code></li><li><code>internal.modifyChannel()</code></li><li><code>internal.modifyChannelMemberPermissions()</code></li><li><code>internal.modifyChannelRole()</code></li><li><code>internal.modifyGuildRole()</code></li><li><code>internal.modifySchedule()</code></li><li><code>internal.muteGuild()</code></li><li><code>internal.muteGuildMember()</code></li><li><code>internal.muteGuildMembers()</code></li><li><code>internal.removeGuildAnnounce()</code></li><li><code>internal.removeGuildMember()</code></li><li><code>internal.removeGuildMemberRole()</code></li><li><code>internal.removeGuildRole()</code></li><li><code>internal.removePinsMessage()</code></li><li><code>internal.removePost()</code></li><li><code>internal.removeSchedule()</code></li><li><code>internal.sendDM()</code></li><li><code>internal.sendMessage()</code></li></ul>',36),d=[n];function t(c,r,s,h,u,p){return l(),i("div",null,d)}const f=e(a,[["render",t]]);export{m as __pageData,f as default};
