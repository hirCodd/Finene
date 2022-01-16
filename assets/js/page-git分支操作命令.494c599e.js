(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{555:function(s,a,t){"use strict";t.r(a);var e=t(1),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git分支操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git分支操作"}},[s._v("#")]),s._v(" git分支操作")]),s._v(" "),t("h2",{attrs:{id:"创建与合并分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建与合并分支"}},[s._v("#")]),s._v(" 创建与合并分支")]),s._v(" "),t("p",[s._v("在版本回滚与更新中，git都是用master分支作为主线，通过时间顺序进行更新或者回滚。")]),s._v(" "),t("h3",{attrs:{id:"创建分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建分支"}},[s._v("#")]),s._v(" 创建分支")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git checkout -b dev \n==（相当于）\ngit branch dev\ngit checkout dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("查看分支信息：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git branch\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),s._v(" "),t("p",[t("img",{attrs:{src:"https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_branch.png",alt:"git_branch"}})]),s._v(" "),t("p",[s._v("现在已经在dev分支目录下，接下来可以在demo.txt中添加信息，我们添加一行数据：1111111111111")]),s._v(" "),t("p",[s._v("此时，我们在dev目录下添加内容，并且提交到暂存区，然后commit。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_branch3.png",alt:"git_branch"}})]),s._v(" "),t("p",[s._v("接着，我们将目前分支切换到master主分支，查看文件新添加的内容是否存在。使用以下命令：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git checkout master\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_branch4.png",alt:"git_branch4"}})]),s._v(" "),t("p",[s._v("然后，发现master分支上并没有我们想要看到的内容，所以我们需要合并两个分支。")]),s._v(" "),t("h3",{attrs:{id:"合并分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#合并分支"}},[s._v("#")]),s._v(" 合并分支")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git merge 分支名\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[s._v("在master分之下合并分dev分支。使用以下命令：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git merger dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_merge.png",alt:"git_merge"}})]),s._v(" "),t("p",[s._v("合并完成后即可删除没有用的额分支了，使用以下命令进行删除分支：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git branch -d dev\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_delete.png",alt:"git_branch_delete"}})]),s._v(" "),t("p",[s._v("所有命令总结：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("查看分支：git branch\n创建分支：git branch name\n切换分支：git checkout name\n创建+切换分支：git checkout -b name\n合并某个分支到当前分支：git merge name\n删除某个分支：git branch -d name\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"处理分支矛盾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#处理分支矛盾"}},[s._v("#")]),s._v(" 处理分支矛盾")]),s._v(" "),t("p",[s._v("新建一个分支，并且other中添加数据：2222222222222，并且检查文件。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_branch_other.png",alt:"git_branch_other"}})]),s._v(" "),t("p",[s._v("切换分支到master之中，并且master分支中增加内容：3333333333333，在增加之前使用cat命令，查看master坟之中是否存在2222222222222，增加后是否存在3333333333333。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_checkout1.png",alt:"git_checkout2"}})]),s._v(" "),t("p",[s._v("master分支数据如上，接下来我们继续合并分支。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_merge2.png",alt:"git_merge"}})]),s._v(" "),t("p",[s._v("由于我之前在master分支写了一个2222222的信息，，所以这有一个2222222222222222222/33333333333333333这样的信息。不过这样的错误信息也不影响分支是错误。"),t("font",{attrs:{color:"red"}},[s._v("Git用<<<<<<<，=======，>>>>>>>标记出不同分支的内容，其中<<<HEAD是指主分支修改的内容，>>>>>fenzhi1 是指fenzhi1上修改的内容，我们可以修改下如下后保存。修改后就是上面的最后一个图。")])],1),s._v(" "),t("p",[s._v("然后我们就可以git log查看commit后的信息，在此我就截图了哈。")]),s._v(" "),t("h3",{attrs:{id:"分支策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#分支策略"}},[s._v("#")]),s._v(" 分支策略")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('1.创建一个dev分支。\n2.修改demo.txt内容。\n3.添加到暂存区。\n4.切换回主分支(master)。\n5.合并dev分支，使用命令 git merge –no-ff -m "注释" dev\n6.查看历史记录\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("具体命令如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('git checkout -b dev\n在demo.txt文件中添加数据4444444444444\ngit add demo.txt\ngit commit -m "add merge"\ngit merge --no-ff -m "merge with no-ff" dev\ngit log 或者git log --graph --pretty=oneline --abbrev-commit\n')])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_dev.png",alt:"git_dev"}})]),s._v(" "),t("p",[t("strong",[s._v("分支策略：首先master主分支应该是非常稳定的，也就是用来发布新版本，一般情况下不允许在上面干活，干活一般情况下在新建的dev分支上干活，干完后，比如上要发布，或者说dev分支代码稳定后可以合并到主分支master上来。")])]),s._v(" "),t("h2",{attrs:{id:"bug分支"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bug分支"}},[s._v("#")]),s._v(" Bug分支")]),s._v(" "),t("p",[s._v("在开发中，会经常碰到bug问题，那么有了bug就需要修复，在Git中，分支是很强大的，每个bug都可以通过一个临时分支来修复，修复完成后，合并分支，然后将临时的分支删除掉。")]),s._v(" "),t("p",[s._v("比如我在开发中接到一个404 bug时候，我们可以创建一个404分支来修复它，但是，当前的dev分支上的工作还没有提交。命令如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git checkout -b dev \n修改demo.txt文件添加数据：5555555555555\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_branch5.png",alt:"git_branch5"}})]),s._v(" "),t("p",[s._v("并不是我不想提交，而是工作进行到一半时候，我们还无法提交，比如我这个分支bug要2天完成，但是我issue-404 bug需要5个小时内完成。怎么办呢？还好，Git还提供了一个stash功能，可以把当前工作现场 ”隐藏起来”，等以后恢复现场后继续工作。")]),s._v(" "),t("p",[s._v("隐藏分支：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git stash\ngit status\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_stash.png",alt:"git_stash"}})]),s._v(" "),t("p",[s._v("首先我们要确定在那个分支上修复bug，比如我现在是在主分支master上来修复的，现在我要在master分支上创建一个临时分支。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_bug.png",alt:"git_bug"}})]),s._v(" "),t("p",[s._v("修改后合并分支，然后删除bug分支即可。")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_bug2.png",alt:"git_bug2"}})]),s._v(" "),t("p",[s._v("接着，我们继续回到dev分支下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git checkout dev\ngit status\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("发现并没有文件，是因为stash隐藏了，所以我们需要从stash恢复。恢复命令如下：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git stash list\ngit stash apply\ngit stash drop\ncat demo.txt\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("p",[s._v("或者：")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("git stash list\ngit stash pop\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[t("img",{attrs:{src:"https://finen-1251602255.cos.ap-shanghai.myqcloud.com/images/blog/git_stash3.png",alt:"git_stash"}})])])}),[],!1,null,null,null);a.default=n.exports}}]);