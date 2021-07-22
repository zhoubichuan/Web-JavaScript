(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{209:function(t,e,s){"use strict";s.r(e);var r=s(0),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("我们先抛开这个概念，尝试使用刚才说到的知识点进行翻牌（咦）效果的尝试，聪明的你一定分分钟码出来：")]),t._v(" "),t._m(3),t._m(4),s("p",[t._v("但是放浏览器里一看，这不对呀，为什么用 3D 的代码写出了 2D 的效果？")]),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),s("p",[t._v("学过素描的人一定对透视的概念不陌生，透视是保证素描写生真实合理的基础。")]),t._v(" "),s("blockquote",[s("p",[t._v("视频："),s("a",{attrs:{href:"https://www.bilibili.com/video/av14392523/",target:"_blank",rel:"noopener noreferrer"}},[t._v("透视学之一点透视法"),s("OutboundLink")],1)])]),t._v(" "),t._m(7),t._v(" "),s("p",[t._v("这里有幅图或许能帮助我们想象 3D 效果强度这个概念。")]),t._v(" "),t._m(8),t._v(" "),s("p",[t._v("（图片来源："),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Perspective_%28graphical%29",target:"_blank",rel:"noopener noreferrer"}},[t._v("维基百科"),s("OutboundLink")],1),t._v("）")]),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("（图片来源："),s("a",{attrs:{href:"https://desandro.github.io/3dtransforms/docs/perspective.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intro to CSS 3D transforms - Perspective"),s("OutboundLink")],1),t._v("）")]),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("明眼人会说，这样子可以画个正方体出来了耶。我看见 CSS3 又笑了。")]),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),s("p",[t._v("现实总是乳齿残酷~")]),t._v(" "),t._m(16),t._v(" "),s("p",[t._v("有了浏览器为我们处理空间体系规则，可以省不少事，不需要你担心层级问题，不需要你操心哪个元素转到哪里要消失，哪个元素转到哪里要出现。嗯，笔者从没自己这么干过，从没。")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),s("p",[t._v("一本合上的书正常来说是在 Y 轴右侧，每一页都包含两面，也就是说一本书是由若干个翻页效果组合而成，每一页的变换原点在元素左侧。由此可以在翻牌的基础上迅速整出一个翻书 DEMO（猛戳 "),s("a",{attrs:{href:"http://lyxuncle.github.io/pageturning/demo/demo.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看翻书 DEMO"),s("OutboundLink")],1),t._v("）。")]),t._v(" "),s("p",[t._v("阴影的使用能让翻书效果变得更真实。")]),t._v(" "),t._m(19),t._v(" "),s("p",[t._v("（猛戳 "),s("a",{attrs:{href:"http://lyxuncle.github.io/pageturning/demo/demo2.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看 DEMO（带阴影）"),s("OutboundLink")],1),t._v("）")]),t._v(" "),t._m(20),t._v(" "),s("p",[t._v("立体书在外国叫 Pop-Up Book，满满的 “Surprise!” 感。这种超越传统平面书籍的阅读模式常被用于儿童书籍。")]),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("（图片来源："),s("a",{attrs:{href:"http://melbirnkrant.com/collection/page48.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("A Guided Tour of THE MEL BIRNKRANT COLLECTION"),s("OutboundLink")],1),t._v("）")]),t._v(" "),s("p",[t._v("要用 CSS3 实现这种效果，想想还有点小激动。")]),t._v(" "),s("p",[t._v("首先建立一个立体书规则：")]),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),s("p",[t._v("（"),s("a",{attrs:{href:"http://www.html5tricks.com/demo/css3-3d-book/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Mozzilla 的小 DEMO"),s("OutboundLink")],1),t._v("）")]),t._v(" "),t._m(25),t._v(" "),s("p",[t._v("猛戳进入 "),s("a",{attrs:{href:"http://jdc.jd.com/fd/pp/maimang/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("麦芒推广页"),s("OutboundLink")],1),t._v(" 体验 3D 立体书效果。")]),t._v(" "),t._m(26),t._v(" "),s("p",[t._v("由于截至目前为止，CSS3 的 3D 功能还止于炫技的阶段，安卓机与 iOS 的支持效果存在差异且难以调和，从上面那个案例中肉眼可见的坑就能看出，因此除了简单的 3D 转换，不建议在生产项目中大面积使用 3D 深层功能。")]),t._v(" "),t._m(27),t._v(" "),t._m(28),t._v(" "),s("p",[t._v("坊间流传这这样一个传说：一旦使用 3D 属性，就能触发设备的硬件加速，从而使得浏览器的表现更佳。但这句话也得看情境——")]),t._v(" "),s("blockquote",[s("p",[t._v("想象使用 GPU 加速的动画就像是 Vin Diesel（速度与激情的主角）开着 Dominic 标志性的汽车 —— Dodge Charger。它的定制 900 hp 引擎可以让它在一瞬间从 0 加速到 60 码。但是如果你开着它在拥挤的高速公路上又有什么用呢？这种情况下错的不是你的车辆，而是你还在一条拥堵的高速公路上。—— "),s("a",{attrs:{href:"http://efe.baidu.com/blog/hardware-accelerated-css-the-nice-vs-the-naughty/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《CSS 硬件加速的好与坏》"),s("OutboundLink")],1)])]),t._v(" "),s("p",[t._v("因此千万别贪心，将 3D 效果数量控制在一定范围内，页面性能才是重中之重。——来自得到惨痛教训的笔者的忠告。")]),t._v(" "),t._m(29),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://desandro.github.io/3dtransforms/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Intro to CSS3 3D transforms"),s("OutboundLink")],1),t._v(" by David DeSandro —— 详尽又新鲜的 3D Transformers 手册，包含许多一看就懂的小 Demo，妈妈再也不用担心我的 3D 了。")]),t._v(" "),s("li",[s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Perspective_%28graphical%29",target:"_blank",rel:"noopener noreferrer"}},[t._v("Perspective (graphical)"),s("OutboundLink")],1),t._v(" —— 对透视学还一知半解的可以看看维基的详细说明。")]),t._v(" "),s("li",[s("a",{attrs:{href:"http://rupl.github.io/unfold/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Unfolding the Box Model: Exploring CSS 3D Transforms"),s("OutboundLink")],1),t._v(" by Chris Ruppel —— 非常赞的 3D Transforms 介绍，从 2D 到 3D 过渡，启动联想学习法，一看就明白，就怕你不看。")]),t._v(" "),s("li",[s("a",{attrs:{href:"http://efe.baidu.com/blog/hardware-accelerated-css-the-nice-vs-the-naughty/",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSS 硬件加速的好与坏"),s("OutboundLink")],1),t._v(" —— 很多事情都不是一两句能讲清楚的，但是只要深入了解原理，一两句都不用讲就清楚了。")])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"动效开发-2：聊一聊-3d"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#动效开发-2：聊一聊-3d"}},[this._v("#")]),this._v(" 动效开发 2：聊一聊 3D")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"perspective-概念理解"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#perspective-概念理解"}},[this._v("#")]),this._v(" "),e("code",[this._v("perspective")]),this._v(" 概念理解")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("什么是 "),e("code",[this._v("perspective")]),this._v(" ？词典中翻译为观点、远景、透视图。这是一个非常抽象的概念，需要一点空间想象力。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[t._v("<div class="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"card"')]),t._v(">\n  \x3c!-- 卡牌正面 --\x3e\n  <figure class="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"card-front"')]),t._v(">1</figure>\n  \x3c!-- 卡牌反面 --\x3e\n  <figure class="),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"card-back"')]),t._v(">2</figure>\n</div>\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card-front")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card-back")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("background")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" blue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotateY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" 180deg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 翻牌动作 */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".card.flipped")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotateY")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" 180deg "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161be021b5fca407",alt:"示例图片"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("这个时候有请我们的 "),e("code",[this._v("perspective")]),this._v(" 透视君。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("CSS3 中的 "),e("code",[this._v("perspective")]),this._v(" 在这样一个体系里就代表着元素与观者之间的距离，形象点说，就是元素 3D 效果的强度。CSS3 中的 3D 效果消失点固定，变化的是观者与元素之间的距离。不过 "),e("code",[this._v("perspective")]),this._v(" 数值与 3D 效果强度是成反比的，数值越大，元素的 3D 效果越不明显 —— 2000px 的视点意味着你看的是远方的物体，而 100px 则意味着这个物体就在你眼前。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161be0368bf94a1a?w=750&h=296&f=png&s=13189",alt:"3D效果"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果还是不懂，还有一个办法，就是在浏览器中边调整 "),e("code",[this._v("perspective")]),this._v(" 数值边观察 3D 效果。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161be041596ded52?w=375&h=250&f=gif&s=141903",alt:"3D效果"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"消失点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#消失点"}},[this._v("#")]),this._v(" 消失点")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161be04955ddd5e2",alt:"消失点"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("左图与右图的元素均绕 Y 轴旋转了 45°，但差别很明显，右图更容易让人想到一个画面中集体开启的窗户。左图的问题就在于，每个元素的消失点各自为政，都在元素的中心点位置，而右图的消失点则统一在实线方框的中心位置。实现方法就是将元素的 "),e("code",[this._v("perspective")]),this._v(" 设置转移至元素父容器上。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"建立三维空间体系"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#建立三维空间体系"}},[this._v("#")]),this._v(" 建立三维空间体系")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161be073a53fcfca?w=750&h=440&f=png&s=55534",alt:"三维空间体系"}})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("有了 "),s("code",[t._v("perspective")]),t._v(" 属性，我们顶多是一群会在纸上画素描的家伙，要想徒手造模型，还是太嫩。就拿刚才的翻牌效果来说，如果你翻滚 "),s("code",[t._v("card")]),t._v(" 父容器，无论怎么翻，能看到的只有正面的卡片，因为现在的体系就是一张素描绘画，你拿着再逼真的素描画翻到背面，也是看不到真实物体的背面的对吧。超越平面 3D 的关隘就在于 "),s("code",[t._v("transform-style: preserve-3d")]),t._v(" 的属性设置，默认值为 "),s("code",[t._v("flat")]),t._v("，即“素描作品”。这个属性的设置旨在告诉子元素需要遵循怎样的空间体系规则。这个属性不能继承，因此只要有子元素需要设置空间体系规则，就得在父元素声明这个属性。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"从翻牌到翻书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从翻牌到翻书"}},[this._v("#")]),this._v(" 从翻牌到翻书")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("翻牌那是皇帝干的事儿，我们文化人得翻书。刚才的翻牌都是在方块的中部为轴进行的变换，我们把变换原点 "),e("code",[this._v("transform-origin")]),this._v(" 一换，就变成书页在翻了。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161be0897748f7f1?w=750&h=474&f=png&s=9157",alt:"翻书demo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3d-动画之-hard-level：立体书"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3d-动画之-hard-level：立体书"}},[this._v("#")]),this._v(" 3D 动画之 Hard Level：立体书")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161be095c5d6b89c?w=750&h=343&f=png&s=105713",alt:"立体书"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("书开，元素起")]),this._v(" "),e("li",[this._v("元素竖起速度小于等于书页开启速度")]),this._v(" "),e("li",[this._v("元素折叠后不可露出书边")]),this._v(" "),e("li",[this._v("元素层叠关系不可反自然")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("剩下的事也就水到渠成，无非是在每一页建立 3D 体系、立体元素从 "),e("code",[this._v("rotateY(90deg)")]),this._v(" 转换到 "),e("code",[this._v("rotateY(0deg)")]),this._v(" 的事儿。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161be0b6c5cee676?w=375&h=254&f=gif&s=491562",alt:"Mozzilla的小demo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("笔者曾做过一个丧心病狂的立体书触屏页，由于立体书左右两页互相关联的特性，翻牌的方式不太适合用在这里，这里使用的是另一种较为麻烦的方式 —— 不像翻牌方式中的前后两页捆绑，这里的书页左右两页属于一个 3D 体系，通过 "),e("code",[this._v("translateZ")]),this._v(" 值的变换控制层级关系，因为在 3D 体系里，"),e("code",[this._v("z-index")]),this._v(" 已被抛弃。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"终端支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#终端支持"}},[this._v("#")]),this._v(" 终端支持")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/2/22/161be0c7c0d7c03d?w=750&h=320&f=png&s=30011",alt:"买家秀"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"_3d-与硬件加速"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_3d-与硬件加速"}},[this._v("#")]),this._v(" 3D 与硬件加速")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"扩展阅读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#扩展阅读"}},[this._v("#")]),this._v(" 扩展阅读")])}],!1,null,null,null);e.default=n.exports}}]);