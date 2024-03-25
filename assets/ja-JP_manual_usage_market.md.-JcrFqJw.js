import{_ as a,k as s,j as l,m as i,b8 as e,b9 as t,ba as o,bb as p,bc as r,bd as c,be as n,bf as h,bg as d,bh as m,bi as u,bj as _}from"./chunks/framework.C_JOKtkG.js";const T=JSON.parse('{"title":"プラグインのインストールと設定","description":"","frontmatter":{"prev":{"text":"インストール方法","link":"/ja-JP/manual/starter/"}},"headers":[],"relativePath":"ja-JP/manual/usage/market.md","filePath":"ja-JP/manual/usage/market.md"}'),b={name:"ja-JP/manual/usage/market.md"},g=i('<h1 id="プラグインのインストールと設定" tabindex="-1">プラグインのインストールと設定 <a class="header-anchor" href="#プラグインのインストールと設定" aria-label="Permalink to &quot;プラグインのインストールと設定&quot;">​</a></h1><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>本节将介绍「插件市场」「插件配置」和「依赖管理」页面的使用方法。</p></div><p>Koishi 的一个核心特性是强大的控制台。控制台是一个对用户友好的图形界面，封装了 Koishi 的绝大多数功能：</p><ul><li>安装、卸载和更新插件</li><li>启用、停用和配置插件</li><li>管理指令、数据库、输出文本</li><li>在模拟和真实环境下聊天</li><li>状态监控、数据统计</li><li>查看日志</li></ul><p>本节中我们将以 <a href="./../../plugins/common/echo.html">echo</a> 插件为例来演示插件的安装与配置。echo 插件注册了一个名为 <code>echo</code> 的指令，调用此指令可以将输入原样输出给用户。</p><h2 id="コンソールについて" tabindex="-1">コンソールについて <a class="header-anchor" href="#コンソールについて" aria-label="Permalink to &quot;コンソールについて&quot;">​</a></h2><p>在你成功安装了模板项目或启动器后，控制台将自动打开。</p><p>控制台的界面主要分为两部分，左侧是活动栏，用来切换右边的界面，右边默认打开的是仪表盘页面。在宽屏设备的下方还有一个状态栏，主要用来显示机器人的运行状态。</p><p class="light-only"><img src="'+e+'" alt="home"></p><p class="dark-only"><img src="'+t+'" alt="home"></p><p>在之后的几节里，我们会逐一介绍各界面的功能和使用。</p><h2 id="安装插件" tabindex="-1">安装插件 <a class="header-anchor" href="#安装插件" aria-label="Permalink to &quot;安装插件&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Koishi 不对非官方插件的安全性做任何保证。请不要随意下载来源不明的插件，因为它们可能导致 Koishi 无法运行，甚至更严重的后果。如果你下载插件后遇到了问题，可以前往用户群或论坛进行反馈。此外，部分插件带有「不安全」标识，安装此类插件将不会受到官方群内的支持。</p></div><p>前往「插件市场」页面，你将在这里看到所有可下载的插件。在搜索框中输入 <code>echo</code>，找到我们想要的插件，点击「添加」按钮，然后在弹出的对话框中点击「安装」。等待片刻，插件就已经安装成功了。</p><p class="light-only"><img src="'+o+'" alt="select-version"></p><p class="dark-only"><img src="'+p+'" alt="select-version"></p><h2 id="启用和停用插件" tabindex="-1">启用和停用插件 <a class="header-anchor" href="#启用和停用插件" aria-label="Permalink to &quot;启用和停用插件&quot;">​</a></h2><p>Koishi 不会自动启用刚刚安装的插件，你需要手动配置并启用。前往「插件配置」页面，左侧栏中列出了已配置的各种插件。其中<span class="light-only">黑色</span><span class="dark-only">白色</span>字体显示的是正在运行的插件，而灰色字体则对应尚未运行的插件。</p><p class="light-only"><img src="'+r+'" alt="plugins"></p><p class="dark-only"><img src="'+c+'" alt="plugins"></p><p>我们可以看到此时 echo 插件的名字是灰色的，这表明它并未处于运行状态。echo 插件没有可配置的项目，因此右侧的详情页是空白的。我们可以直接点击右上角的「启用插件」按钮，看到「启用成功」的提示信息，这表明 echo 插件就已经处于运行状态了。</p><p>要停用 echo 插件同样很简单。点击右上角的「停用插件」按钮，插件便会停止运行。停用插件既不会删除插件的代码，也不会删除插件的配置，你可以随时重新启用它。</p><h2 id="配置插件" tabindex="-1">配置插件 <a class="header-anchor" href="#配置插件" aria-label="Permalink to &quot;配置插件&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>在配置插件的过程中，请大家记住这个原则：<strong>如无必要，勿动配置</strong>。Koishi 在设计上兼顾了扩展性和实用性，许多基础功能是以预装插件的形式提供的。前面我们已经用到的「插件市场」和「插件配置」页面本身就分别由预装的 market 插件和 config 插件提供。正是因为所有的预装插件均已配置完善，通常情况下你不需要修改预装插件的配置。随意改动插件配置、删除预装插件都可能导致 Koishi 无法正常运行。</p></div><p>虽然 echo 插件没有需要配置的地方，但更复杂的插件则通常会提供各种配置项，允许使用者控制插件的行为。下图展示了 novelai 插件的配置界面。</p><p class="light-only"><img src="'+n+'" alt="settings"></p><p class="dark-only"><img src="'+h+'" alt="settings"></p><p>在这个界面中，我们可以看到许多配置项。其中你需要注意：</p><ul><li>必选但尚未填入的配置项会在左侧呈现 <span style="font-weight:bold;color:var(--vp-c-red-1);">红色</span> 的提示条，只有正确填写配置才能启动插件。</li><li>已修改但未保存的配置项会在左侧呈现 <span style="font-weight:bold;color:var(--vp-c-indigo-1);">紫色</span> 的提示条，点击「启用插件」或「保存配置」按钮后会保存配置；如果你想撤销这些改动，可以在配置名称旁的小三角处呼出菜单，选择「撤销更改」使该配置恢复到上次保存时的状态。</li></ul><h2 id="管理插件" tabindex="-1">管理插件 <a class="header-anchor" href="#管理插件" aria-label="Permalink to &quot;管理插件&quot;">​</a></h2><h3 id="分组管理" tabindex="-1">分组管理 <a class="header-anchor" href="#分组管理" aria-label="Permalink to &quot;分组管理&quot;">​</a></h3><p>Koishi 提供了插件分组的机制，分组内可以添加插件，方便同时管理多个插件。</p><p>Koishi 在安装时预先配置了一些分组，而新安装的插件会放置在插件列表的底部，这表明它不属于任何分组。插件和分组都可以通过点选并拖拽的方式改变排列顺序或在分组之间移动。相信你也发现了，分组是可以嵌套的。</p><p>创建新的分组同样很简单。点击「全局配置」或任意分组名后，点击右上角的「创建分组」按钮可以在此创建一个新的插件分组。新分组的名字是随机生成的，但你可以点击名字修改成你喜欢的名字。分组可以在左侧栏中点击小三角来控制展开和收起。</p><p>此外，<a href="./../usage/customize.html#过滤器">过滤器</a> 机制也可用于分组，便于控制一系列插件的行为。</p><h3 id="添加更多插件" tabindex="-1">添加更多插件 <a class="header-anchor" href="#添加更多插件" aria-label="Permalink to &quot;添加更多插件&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>通常情况下，一个插件只能同时运行一份配置。请参考 <a href="./../recipe/multiple.html">维护多份配置</a> 章节。</p></div><p>如果某个已安装的插件并未显示在插件列表中，你也可以手动添加它。在「全局配置」或任意分组界面中，点击右上角的「添加插件」将会弹出对话框。在对话框中点击要添加的插件，即可创建一份未启用的插件配置。</p><p class="light-only"><img src="'+d+'" alt="select-plugin"></p><p class="dark-only"><img src="'+m+'" alt="select-plugin"></p><h3 id="删除插件或分组" tabindex="-1">删除插件或分组 <a class="header-anchor" href="#删除插件或分组" aria-label="Permalink to &quot;删除插件或分组&quot;">​</a></h3><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>注意：此操作无法被撤销，如果你想要恢复之前的配置，只能再次手动添加。请谨慎操作。</p></div><p>在任何插件的配置界面点击右上角的「删除插件」可删除这份配置。与之类似，在分组的配置界面点击右上角的「删除分组」可删除这个分组。删除分组时，分组内的所有插件也会一并删除。</p><h2 id="更新和卸载插件" tabindex="-1">更新和卸载插件 <a class="header-anchor" href="#更新和卸载插件" aria-label="Permalink to &quot;更新和卸载插件&quot;">​</a></h2><p>前往「依赖管理」页面，你可以在这里看到依赖列表。依赖可能包括 Koishi 本体，各种插件，以及支持插件运行的软件包等。</p><p>当依赖的状态显示为「可更新」时，点击其右侧的「修改」按钮，在弹出的窗口左上角选择你需要的版本，点击右下角的「更新」按钮即可完成更新。</p><p>你也可以批量更新多个插件，通过依赖名右侧的下拉菜单选择好所需更改的版本，点击右上角的「应用更改」按钮即可。此外，右上角的「全部更新」按钮可以一键更新所有依赖。</p><p class="light-only"><img src="'+u+'" alt="dependencies"></p><p class="dark-only"><img src="'+_+'" alt="dependencies"></p>',49),k=[g];function f(q,v,P,y,x,K){return l(),s("div",null,k)}const I=a(b,[["render",f]]);export{T as __pageData,I as default};
