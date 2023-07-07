const e=JSON.parse(`{"key":"v-52d2453a","path":"/md/opensource/shenyu/ApacheShenYu-sentinel.html","title":"Apache ShenYu整合Sentinel源码分析","lang":"en-US","frontmatter":{"author":"moremind","post":true,"copyright":true,"comments":true,"title":"Apache ShenYu整合Sentinel源码分析","date":"2023-05-16T00:00:00.000Z","category":["opensource"],"tag":["Apache ShenYu","sentinel"],"description":"1.前言 Apache ShenYu是一款支持多语言、多协议(Dubbo,SpringCloud,gRPC,Motan,SofaTars, BRPC)、插件化设计、高度可动态化配置、高度可自主化开发的Java网关。内置丰富的插件支持，鉴权，限流，熔断，防火墙等等。流量配置动态化，性能极高。支持集群部署，支持 A/B Test，蓝绿发布等功能。","head":[["meta",{"property":"og:url","content":"https://moremind.cn/md/opensource/shenyu/ApacheShenYu-sentinel.html"}],["meta",{"property":"og:site_name","content":"Moremind's Blog"}],["meta",{"property":"og:title","content":"Apache ShenYu整合Sentinel源码分析"}],["meta",{"property":"og:description","content":"1.前言 Apache ShenYu是一款支持多语言、多协议(Dubbo,SpringCloud,gRPC,Motan,SofaTars, BRPC)、插件化设计、高度可动态化配置、高度可自主化开发的Java网关。内置丰富的插件支持，鉴权，限流，熔断，防火墙等等。流量配置动态化，性能极高。支持集群部署，支持 A/B Test，蓝绿发布等功能。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-25T15:39:48.000Z"}],["meta",{"property":"article:author","content":"moremind"}],["meta",{"property":"article:tag","content":"Apache ShenYu"}],["meta",{"property":"article:tag","content":"sentinel"}],["meta",{"property":"article:published_time","content":"2023-05-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-25T15:39:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Apache ShenYu整合Sentinel源码分析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-05-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-25T15:39:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"moremind\\"}]}"]]},"headers":[{"level":2,"title":"1.前言","slug":"_1-前言","link":"#_1-前言","children":[]},{"level":2,"title":"2.Apache ShenYu整合Sentinel源码分析","slug":"_2-apache-shenyu整合sentinel源码分析","link":"#_2-apache-shenyu整合sentinel源码分析","children":[{"level":3,"title":"2.1 如何设置Sentinel加载资源的resourceName","slug":"_2-1-如何设置sentinel加载资源的resourcename","link":"#_2-1-如何设置sentinel加载资源的resourcename","children":[]},{"level":3,"title":"2.1 Sentinel加载ShenYu配置的限流、降级规则","slug":"_2-1-sentinel加载shenyu配置的限流、降级规则","link":"#_2-1-sentinel加载shenyu配置的限流、降级规则","children":[]},{"level":3,"title":"2.2 ShenYu是如何获取应用错误并进行流控、降级的","slug":"_2-2-shenyu是如何获取应用错误并进行流控、降级的","link":"#_2-2-shenyu是如何获取应用错误并进行流控、降级的","children":[]}]}],"git":{"createdTime":1687707588000,"updatedTime":1687707588000,"contributors":[{"name":"moremind","email":"hefengen@apache.org","commits":1}]},"readingTime":{"minutes":2.14,"words":641},"filePathRelative":"md/opensource/shenyu/ApacheShenYu-sentinel.md","localizedDate":"May 16, 2023","excerpt":"<h2> 1.前言</h2>\\n<p>Apache ShenYu是一款支持多语言、多协议(Dubbo,SpringCloud,gRPC,Motan,SofaTars, BRPC)、插件化设计、高度可动态化配置、高度可自主化开发的Java网关。内置丰富的插件支持，鉴权，限流，熔断，防火墙等等。流量配置动态化，性能极高。支持集群部署，支持 A/B Test，蓝绿发布等功能。</p>","autoDesc":true}`);export{e as data};
