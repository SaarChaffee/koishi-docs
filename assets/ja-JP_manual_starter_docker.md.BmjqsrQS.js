import{_ as l,k as h,f as i,A as e,m as o,l as s,D as t,C as r,j as n}from"./chunks/framework.C_JOKtkG.js";const T=JSON.parse('{"title":"コンテナーで実行","description":"","frontmatter":{"prev":{"text":"インストーラーを選択","link":"/ja-JP/manual/starter/"},"next":{"text":"安装和配置插件","link":"/zh-CN/manual/usage/market.html"}},"headers":[],"relativePath":"ja-JP/manual/starter/docker.md","filePath":"ja-JP/manual/starter/docker.md"}'),p={name:"ja-JP/manual/starter/docker.md"},c=o('<h1 id="コンテナーで実行" tabindex="-1">コンテナーで実行 <a class="header-anchor" href="#コンテナーで実行" aria-label="Permalink to &quot;コンテナーで実行&quot;">​</a></h1><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Docker 等容器化软件是以服务生产环境而开发的应用平台，在使用此类软件部署之时，我们相信你已经掌握了运维一台服务器所必须的知识，同时也理解了容器化的概念与相关软件的基础操作。如若不然，在除路由器或 NAS 等特殊环境外，请 <a href="./">选择其他安装方式</a>。</p></div><p>Koishi 提供了 <a href="https://hub.docker.com/r/koishijs/koishi" target="_blank" rel="noreferrer">Docker</a> 镜像，方便你在容器中运行 Koishi。你需要首先安装 <a href="https://podman.io" target="_blank" rel="noreferrer">Podman</a> 或 <a href="https://www.docker.com" target="_blank" rel="noreferrer">Docker</a> 来运行容器。</p><h2 id="启动容器" tabindex="-1">启动容器 <a class="header-anchor" href="#启动容器" aria-label="Permalink to &quot;启动容器&quot;">​</a></h2><p>使用以下命令启动容器：</p>',5),k=s("div",{class:"language-podman vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"podman"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"podman"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run -p "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"5140"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},":5140 koishijs/koishi")])])])],-1),d=s("div",{class:"language-docker vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"docker"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"docker"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run -p "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"5140"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},":5140 koishijs/koishi")])])])],-1),_=s("p",null,[t("许多插件依赖 "),s("a",{href:"https://www.npmjs.com/package/koishi-plugin-puppeteer",target:"_blank",rel:"noreferrer"},"koishi-plugin-puppeteer"),t(" 来进行图片渲染，故默认镜像中包含 Chromium。如果你认为镜像过大，不需要预装 Chromium，我们也提供了轻量版本：")],-1),m=s("div",{class:"language-podman vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"podman"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"podman"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run -p "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"5140"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},":5140 koishijs/koishi:latest-lite")])])])],-1),u=s("div",{class:"language-docker vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"docker"),s("pre",{class:"shiki shiki-themes github-light one-dark-pro vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#61AFEF"}},"docker"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}}," run -p "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#D19A66"}},"5140"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#98C379"}},":5140 koishijs/koishi:latest-lite")])])])],-1),g=o('<p>启动后将会绑定 Koishi 控制台到 5140 端口。</p><p>如果你需要持久化，请使用 <code>-v /some/place:/koishi</code> 来映射 Koishi 的文件。</p><p>如果需要更正时区，请使用 <code>-e TZ=Asia/Shanghai</code> 来设置时区。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>Koishi 本体及其插件都可以控制台完成更新。在持久化文件过后更新容器仅会更新 Chromium 和 Node.js 等的版本。</p></div><h2 id="安装插件" tabindex="-1">安装插件 <a class="header-anchor" href="#安装插件" aria-label="Permalink to &quot;安装插件&quot;">​</a></h2><p>在容器运行时，可以通过在浏览器中访问 <code>http://宿主机地址:5140</code> 在控制台中安装和启用插件。若无法访问请检查你的防火墙配置是否正确。</p>',6);function C(b,v,y,f,F,A){const a=r("tab-select");return n(),h("div",null,[c,i(a,{class:"code"},{"tab-podman":e(()=>[k]),"tab-docker":e(()=>[d]),_:1}),_,i(a,{class:"code"},{"tab-podman":e(()=>[m]),"tab-docker":e(()=>[u]),_:1}),g])}const j=l(p,[["render",C]]);export{T as __pageData,j as default};
