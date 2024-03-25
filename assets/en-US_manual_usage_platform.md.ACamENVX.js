import{_ as r,k as c,f as o,A as e,m as l,l as t,D as n,C as s,j as h,bk as u,bl as d,bm as p,bn as m,bo as g,bp as f,bq as _,br as b}from"./chunks/framework.C_JOKtkG.js";const M=JSON.parse('{"title":"Login and Bind Account","description":"","frontmatter":{},"headers":[],"relativePath":"en-US/manual/usage/platform.md","filePath":"en-US/manual/usage/platform.md"}'),y={name:"en-US/manual/usage/platform.md"},w=l('<h1 id="login-and-bind-account" tabindex="-1">Login and Bind Account <a class="header-anchor" href="#login-and-bind-account" aria-label="Permalink to &quot;Login and Bind Account&quot;">​</a></h1><p>Koishi describes itself as a &quot;cross-platform&quot; framework, but what does this &quot;cross-platform&quot; mean?This doesn&#39;t just mean that Koishi supports multiple running platforms, but that Koishi can access multiple chat platforms simultaneously and provide the most native experience possible:</p><ul><li>Koishi 提供了统一的接口，你可以在任何聊天平台上享受完整的 Koishi 生态。</li><li>Koishi 应用可以同时接入多个聊天平台，用户可以在任意平台上与你的机器人进行交互。</li><li>Koishi 原生地支持了跨平台账号绑定，这使得用户可以带着全部数据进行无感迁移。</li></ul><p>现在就让我们来说说，如何在 Koishi 中使用跨平台的账号系统。</p><h2 id="get-account-information" tabindex="-1">Get Account Information <a class="header-anchor" href="#get-account-information" aria-label="Permalink to &quot;Get Account Information&quot;">​</a></h2><p>有些平台的账号信息是不可见的，所以我们需要借助一些工具来获取它们。</p><p><a href="./../../plugins/common/inspect.html">inspect</a> 插件提供了获取会话信息的能力。安装这个插件后，使用任意平台账号向机器人发送 <code>inspect</code> (这里不要使用沙盒，不然只能获得沙盒用户的数据)，就可以获得下面的会话信息：</p>',7),q=t("p",null,"Platform: discord",-1),k=t("p",null,"Message ID: 1085992290352373951",-1),A=t("p",null,"Channel ID: 835804172850561094",-1),P=t("p",null,"Guild ID: 811975252883800125",-1),T=t("p",null,"User ID: 811972350065115208",-1),K=t("p",null,"Self ID: 952190117479600159",-1),v=l('<p>If you want to login or bind your account, the platform name and user ID here will be useful.</p><h2 id="console-login" tabindex="-1">Console Login <a class="header-anchor" href="#console-login" aria-label="Permalink to &quot;Console Login&quot;">​</a></h2><p>The <a href="./../../plugins/console/auth.html">auth</a> plugin allows any user to log in and manage their Koishi account from the console.In addition, the plugin comes with an administrator account, which is the most convenient way to raise the rights of users who have just built Koishi.</p><h3 id="configure-login-plugin" tabindex="-1">Configure Login Plugin <a class="header-anchor" href="#configure-login-plugin" aria-label="Permalink to &quot;Configure Login Plugin&quot;">​</a></h3><p>Click on the Auth plugin in the Plugin Configuration screen.At this point we will see that there is an &quot;Administrator Settings&quot; tab.</p><p class="light-only"><img src="'+u+'" alt="plugin-login"></p><p class="dark-only"><img src="'+d+'" alt="plugin-login"></p><p>Enter the password you&#39;ve prepared. Click &quot;Activate plugin&quot;.Select &quot;User Password Login&quot;, enter the username (default <code>admin</code> if you haven&#39;t changed it) and password you just configured, and click &quot;Login&quot; to enter your personal page.</p><p class="light-only"><img src="'+p+'" alt="login-password"></p><p class="dark-only"><img src="'+m+'" alt="login-password"></p><h3 id="ordinary-user-login" tabindex="-1">Ordinary user login <a class="header-anchor" href="#ordinary-user-login" aria-label="Permalink to &quot;Ordinary user login&quot;">​</a></h3><p>If you are a regular user of the bot and the bot is configured with the console login plugin, then when you first enter the console, you will find that only a few pages are accessible.The reason for this is that you do not have a login.</p><p>Enter your Platform Name and User ID when you clicked the lower left Login button and selected Platform Account Login.Click &quot;Get Verification Code&quot; and send the verification code that appears on the page to the bot via the private chat of the account above to complete the registration.</p><p class="light-only"><img src="'+g+'" alt="login-platform"></p><p class="dark-only"><img src="'+f+'" alt="login-platform"></p><p>Once you are logged in, you will be redirected to your personal page.In this page you can change your username and password.Ordinary users can only log in with their platform account for the first time, and after setting a username and password, click &quot;Apply Changes&quot; in the upper right corner to log in with a user password in the future.</p><h2 id="account-binding" tabindex="-1">Account Binding <a class="header-anchor" href="#account-binding" aria-label="Permalink to &quot;Account Binding&quot;">​</a></h2><p>Koishi supports account binding. This means that one Koishi account can correspond to multiple platform users at the same time.No matter what platform you are interacting with the bot on, the data will be shared once the binding is complete.</p><p>Koishi currently offers two official plugins for account binding, which we will introduce one by one.</p><h3 id="binding-in-the-console" tabindex="-1">Binding in the console <a class="header-anchor" href="#binding-in-the-console" aria-label="Permalink to &quot;Binding in the console&quot;">​</a></h3><p>Any user can bind a platform account to their personal page after logging in to the console.Click the &quot;Add&quot; button to the right of &quot;Platform Account Binding&quot; and complete the process by logging in with the account you want to bind, and you&#39;re done.</p><p class="light-only"><img src="'+_+'" alt="profile"></p><p class="dark-only"><img src="'+b+'" alt="profile"></p><p>Click the &quot;Disconnect&quot; button on the right side of the platform account if you wish to disconnect.</p><h3 id="binding-by-command" tabindex="-1">Binding by command <a class="header-anchor" href="#binding-by-command" aria-label="Permalink to &quot;Binding by command&quot;">​</a></h3><p><a href="./../../plugins/common/bind.html">bind</a> The plugin also implements the binding of accounts by means of a command.Using the platform account you want to bind to, send <code>bind</code> to the bot:</p>',26),C=t("p",null,"You can use the bind command for binding user data across multiple platforms.During the binding process, the user data on the original platform is completely preserved, while the user data on the target platform is overwritten with the data on the original platform.",-1),x=t("p",null,"Please confirm that the current platform is your target platform and send the following text to the bot on the original platform using your account within 5 minutes:",-1),I=t("p",null,"Koishi/123456",-1),S=t("p",null,[n("Using the original platform account, follow the prompt and send "),t("code",null,"Koishi/123456"),n(" to the bot.The binding is complete at this point if your first message is a private chat message.The bot will ask you to confirm again if your first message is a guild chat message:")],-1),B=t("p",null,"Token verification successful!The second step is described below.",-1),D=t("p",null,"Please use your account to send the following text to the bot on the target platform within the next 5 minutes:",-1),L=t("p",null,"Koishi/654321",-1),N=t("p",null,"Attention: The current platform is your original platform, the user data here will overwrite the data of the target platform.",-1),V=t("p",null,[n("Follow the prompts again and send "),t("code",null,"Koishi/654321"),n(" to the bot using the target platform account to complete the binding.")],-1),U=t("p",null,[n("Once the binding is complete, you can unbind the state at any time by sending "),t("code",null,"bind -r"),n(" to the robot from the target platform.")],-1);function O(E,j,G,$,R,F){const i=s("chat-message"),a=s("chat-panel");return h(),c("div",null,[w,o(a,null,{default:e(()=>[o(i,{nickname:"Alice"},{default:e(()=>[n("inspect")]),_:1}),o(i,{nickname:"Koishi"},{default:e(()=>[q,k,A,P,T,K]),_:1})]),_:1}),v,o(a,null,{default:e(()=>[o(i,{nickname:"Alice"},{default:e(()=>[n("bind")]),_:1}),o(i,{nickname:"Koishi"},{default:e(()=>[C,x,I]),_:1})]),_:1}),S,o(a,null,{default:e(()=>[o(i,{nickname:"Alice"},{default:e(()=>[n("Koishi/123456")]),_:1}),o(i,{nickname:"Koishi"},{default:e(()=>[B,D,L,N]),_:1})]),_:1}),V,U])}const Y=r(y,[["render",O]]);export{M as __pageData,Y as default};
