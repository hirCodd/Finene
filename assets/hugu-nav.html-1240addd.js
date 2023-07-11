const e=JSON.parse(`{"key":"v-7e733b0e","path":"/md/opensource/hugo/hugu-nav.html","title":"如何用hugo-webstack搭建属于自己的站长工具","lang":"en-US","frontmatter":{"author":"moremind","post":true,"copyright":true,"comments":true,"title":"如何用hugo-webstack搭建属于自己的站长工具","date":"2023-07-10T00:00:00.000Z","category":"hugo","tag":["hugo"],"description":"说明 本教程是基于 WebStack-Hugo 静态响应式网址导航主题，可以打造的的个人定制版本。 1.安装hugo并且拷贝主题 $ git clone https://github.com/shenweiyan/NavBioIT.git $ rename NavBioIT mysite # 重命名为你的仓库名称 $ cd mysite $ rm -rf .git # 删除原来的git仓库 $ git init # 初始化新的git仓库 $ cd themes/WebStack-Hugo $ git clone https://github.com/shenweiyan/WebStack-Hugo.git","head":[["meta",{"property":"og:url","content":"https://moremind.cn/md/opensource/hugo/hugu-nav.html"}],["meta",{"property":"og:site_name","content":"Moremind's Blog"}],["meta",{"property":"og:title","content":"如何用hugo-webstack搭建属于自己的站长工具"}],["meta",{"property":"og:description","content":"说明 本教程是基于 WebStack-Hugo 静态响应式网址导航主题，可以打造的的个人定制版本。 1.安装hugo并且拷贝主题 $ git clone https://github.com/shenweiyan/NavBioIT.git $ rename NavBioIT mysite # 重命名为你的仓库名称 $ cd mysite $ rm -rf .git # 删除原来的git仓库 $ git init # 初始化新的git仓库 $ cd themes/WebStack-Hugo $ git clone https://github.com/shenweiyan/WebStack-Hugo.git"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-11T06:35:13.000Z"}],["meta",{"property":"article:author","content":"moremind"}],["meta",{"property":"article:tag","content":"hugo"}],["meta",{"property":"article:published_time","content":"2023-07-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-11T06:35:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"如何用hugo-webstack搭建属于自己的站长工具\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-10T00:00:00.000Z\\",\\"dateModified\\":\\"2023-07-11T06:35:13.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"moremind\\"}]}"]]},"headers":[{"level":2,"title":"说明","slug":"说明","link":"#说明","children":[]},{"level":2,"title":"1.安装hugo并且拷贝主题","slug":"_1-安装hugo并且拷贝主题","link":"#_1-安装hugo并且拷贝主题","children":[]},{"level":2,"title":"2.修改hugo-action的配置部署到github pages","slug":"_2-修改hugo-action的配置部署到github-pages","link":"#_2-修改hugo-action的配置部署到github-pages","children":[{"level":3,"title":"2.1 修改hugo-action的配置","slug":"_2-1-修改hugo-action的配置","link":"#_2-1-修改hugo-action的配置","children":[]},{"level":3,"title":"2.2 在github配置","slug":"_2-2-在github配置","link":"#_2-2-在github配置","children":[]}]},{"level":2,"title":"3.部署到vercel","slug":"_3-部署到vercel","link":"#_3-部署到vercel","children":[{"level":3,"title":"3.1 vercel部署","slug":"_3-1-vercel部署","link":"#_3-1-vercel部署","children":[]},{"level":3,"title":"3.2 vercel配置自定义域名","slug":"_3-2-vercel配置自定义域名","link":"#_3-2-vercel配置自定义域名","children":[]},{"level":3,"title":"3.3 说明","slug":"_3-3-说明","link":"#_3-3-说明","children":[]}]},{"level":2,"title":"4.配置","slug":"_4-配置","link":"#_4-配置","children":[{"level":3,"title":"4.1 配置导航","slug":"_4-1-配置导航","link":"#_4-1-配置导航","children":[]},{"level":3,"title":"4.2 配置站点","slug":"_4-2-配置站点","link":"#_4-2-配置站点","children":[]}]}],"git":{"createdTime":1689056329000,"updatedTime":1689057313000,"contributors":[{"name":"moremind","email":"hefengen@apache.org","commits":2}]},"readingTime":{"minutes":5.12,"words":1536},"filePathRelative":"md/opensource/hugo/hugu-nav.md","localizedDate":"July 10, 2023","excerpt":"<h2> 说明</h2>\\n<p>本教程是基于 WebStack-Hugo 静态响应式网址导航主题，可以打造的的个人定制版本。</p>\\n<h2> 1.安装hugo并且拷贝主题</h2>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>$ <span class=\\"token function\\">git</span> clone https://github.com/shenweiyan/NavBioIT.git\\n$ <span class=\\"token function\\">rename</span> NavBioIT mysite <span class=\\"token comment\\"># 重命名为你的仓库名称</span>\\n$ <span class=\\"token builtin class-name\\">cd</span> mysite\\n$ <span class=\\"token function\\">rm</span> <span class=\\"token parameter variable\\">-rf</span> .git <span class=\\"token comment\\"># 删除原来的git仓库</span>\\n$ <span class=\\"token function\\">git</span> init <span class=\\"token comment\\"># 初始化新的git仓库</span>\\n$ <span class=\\"token builtin class-name\\">cd</span> themes/WebStack-Hugo\\n$ <span class=\\"token function\\">git</span> clone https://github.com/shenweiyan/WebStack-Hugo.git\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{e as data};
