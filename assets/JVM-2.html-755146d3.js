const e=JSON.parse(`{"key":"v-102c762f","path":"/md/java/jvm/JVM-2.html","title":"JVM进行时-JVM堆栈内存详解","lang":"en-US","frontmatter":{"author":"finen","post":true,"copyright":true,"comments":true,"title":"JVM进行时-JVM堆栈内存详解","date":"2021-04-16T00:00:00.000Z","category":["JVM"],"tag":["JVM"],"description":"1 结合字节码指令理解Java虚拟机栈和栈帧 官网 ：https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html#jvms-2.6 栈帧：每个栈帧对应一个被调用的方法，可以理解为一个方法的运行空间。","head":[["meta",{"property":"og:url","content":"https://moremind.cn/md/java/jvm/JVM-2.html"}],["meta",{"property":"og:site_name","content":"Moremind's Blog"}],["meta",{"property":"og:title","content":"JVM进行时-JVM堆栈内存详解"}],["meta",{"property":"og:description","content":"1 结合字节码指令理解Java虚拟机栈和栈帧 官网 ：https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html#jvms-2.6 栈帧：每个栈帧对应一个被调用的方法，可以理解为一个方法的运行空间。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-03-21T06:09:44.000Z"}],["meta",{"property":"article:author","content":"finen"}],["meta",{"property":"article:tag","content":"JVM"}],["meta",{"property":"article:published_time","content":"2021-04-16T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-21T06:09:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM进行时-JVM堆栈内存详解\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-04-16T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-21T06:09:44.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"finen\\"}]}"]]},"headers":[{"level":2,"title":"1 结合字节码指令理解Java虚拟机栈和栈帧","slug":"_1-结合字节码指令理解java虚拟机栈和栈帧","link":"#_1-结合字节码指令理解java虚拟机栈和栈帧","children":[]},{"level":2,"title":"2 折腾一下","slug":"_2-折腾一下","link":"#_2-折腾一下","children":[{"level":3,"title":"2.1栈指向堆","slug":"_2-1栈指向堆","link":"#_2-1栈指向堆","children":[]},{"level":3,"title":"2.2 方法区指向堆","slug":"_2-2-方法区指向堆","link":"#_2-2-方法区指向堆","children":[]},{"level":3,"title":"2.3 堆指向方法区","slug":"_2-3-堆指向方法区","link":"#_2-3-堆指向方法区","children":[]},{"level":3,"title":"2.4 Java对象内存布局","slug":"_2-4-java对象内存布局","link":"#_2-4-java对象内存布局","children":[]}]},{"level":2,"title":"3 内存模型","slug":"_3-内存模型","link":"#_3-内存模型","children":[{"level":3,"title":"3.1 图解","slug":"_3-1-图解","link":"#_3-1-图解","children":[]},{"level":3,"title":"3.2 对象创建所在区域","slug":"_3-2-对象创建所在区域","link":"#_3-2-对象创建所在区域","children":[]},{"level":3,"title":"3.3 Survivor区详解","slug":"_3-3-survivor区详解","link":"#_3-3-survivor区详解","children":[]},{"level":3,"title":"3.4 Old区详解","slug":"_3-4-old区详解","link":"#_3-4-old区详解","children":[]},{"level":3,"title":"3.5 对象的一辈子理解","slug":"_3-5-对象的一辈子理解","link":"#_3-5-对象的一辈子理解","children":[]},{"level":3,"title":"3.6 常见问题","slug":"_3-6-常见问题","link":"#_3-6-常见问题","children":[]}]},{"level":2,"title":"4 体验与验证","slug":"_4-体验与验证","link":"#_4-体验与验证","children":[{"level":3,"title":"4.1 使用jvisualvm查看","slug":"_4-1-使用jvisualvm查看","link":"#_4-1-使用jvisualvm查看","children":[]},{"level":3,"title":"4.1 堆内存溢出","slug":"_4-1-堆内存溢出","link":"#_4-1-堆内存溢出","children":[]},{"level":3,"title":"4.2 方法区内存溢出","slug":"_4-2-方法区内存溢出","link":"#_4-2-方法区内存溢出","children":[]},{"level":3,"title":"4.3 虚拟机栈","slug":"_4-3-虚拟机栈","link":"#_4-3-虚拟机栈","children":[]}]}],"git":{"createdTime":1679378984000,"updatedTime":1679378984000,"contributors":[{"name":"moremind","email":"hefengen@apache.org","commits":1}]},"readingTime":{"minutes":10.57,"words":3172},"filePathRelative":"md/java/jvm/JVM-2.md","localizedDate":"April 16, 2021","excerpt":"<h2> 1 结合字节码指令理解Java虚拟机栈和栈帧</h2>\\n<blockquote>\\n<p>官网 ：<a href=\\"https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html#jvms-2.6\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">https://docs.oracle.com/javase/specs/jvms/se8/html/jvms-2.html#jvms-2.6</a></p>\\n<p>栈帧：每个栈帧对应一个被调用的方法，可以理解为一个方法的运行空间。</p>\\n</blockquote>","autoDesc":true}`);export{e as data};
