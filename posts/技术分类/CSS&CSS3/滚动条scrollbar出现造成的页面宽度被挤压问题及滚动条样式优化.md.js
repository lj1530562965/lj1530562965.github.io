webpackJsonp([66],{473:function(n,s){n.exports={content:["article",["h2","\u4e00\u3001\u6eda\u52a8\u6761scrollbar\u51fa\u73b0\u9020\u6210\u7684\u9875\u9762\u5bbd\u5ea6\u88ab\u6324\u538b\u95ee\u9898"],["h3","\u6eda\u52a8\u6761\u7684\u5bbd\u5ea6\u662f\u591a\u5c11\uff1f"],["pre",{lang:null,highlighted:'<span class="token operator">*</span> {\n  margin<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n  padding<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n}\nhtml {\n  overflow<span class="token operator">-</span>y<span class="token punctuation">:</span> scroll<span class="token comment" spellcheck="true">;</span>\n}\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'chrome\u4e0b\u6eda\u52a8\u6761\u7684\u5bbd\u5ea6\'</span><span class="token punctuation">,</span> window<span class="token punctuation">.</span>innerWidth <span class="token operator">-</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>clientWidth<span class="token punctuation">)</span>'},["code","* {\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  overflow-y: scroll;\n}\nconsole.log('chrome\u4e0b\u6eda\u52a8\u6761\u7684\u5bbd\u5ea6', window.innerWidth - document.body.clientWidth)"]],["h3","\u5982\u4f55\u89e3\u51b3\u6eda\u52a8\u6761\u6324\u538b\u6211\u4eec\u7684\u5bb9\u5668\u7684\u5bbd\u5ea6\uff0c\u9020\u6210\u9875\u9762\u6643\u52a8\u7684\u73b0\u8c61"],["p","1.\u6700\u539f\u59cb\u7684scroll\u65b9\u6cd5"],["p","\u5176\u601d\u60f3\u662f\u65e2\u7136\u5728\u89e6\u53d1\u6eda\u52a8\u6761\u65f6\u5019\u4f1a\u6324\u538b\u7a7a\u95f4\uff0c\u90a3\u4e48\u76f4\u63a5\u5728\u6ca1\u6709\u6eda\u52a8\u6761\u7684\u65f6\u5019\u4e5f\u89e6\u53d1\u4e0d\u5c31\u53ef\u4ee5\u4e86\u4e48\uff0c\u4e5f\u5c31\u662f\u6211\u4eec\u4e0a\u9762\u7b97\u5bbd\u5ea6\u65f6\u5019\u7684\u8bbe\u7f6e\uff1a"],["pre",{lang:null,highlighted:'<span class="token operator">*</span> {\n  margin<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n  padding<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n}\n\nbody<span class="token punctuation">,</span>\nhtml {\n  margin<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n  padding<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n  width<span class="token punctuation">:</span> <span class="token number">100</span>%<span class="token comment" spellcheck="true">;</span>\n  height<span class="token punctuation">:</span> <span class="token number">100</span>%<span class="token comment" spellcheck="true">;</span>\n}\nhtml{\n  overflow<span class="token punctuation">:</span> hidden<span class="token comment" spellcheck="true">;</span>\n}\nbody{\n  overflow<span class="token operator">-</span>x<span class="token punctuation">:</span> hidden<span class="token comment" spellcheck="true">;</span>\n  overflow<span class="token operator">-</span>y<span class="token punctuation">:</span> scroll<span class="token comment" spellcheck="true">;</span>\n}'},["code","* {\n  margin: 0;\n  padding: 0;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\nhtml{\n  overflow: hidden;\n}\nbody{\n  overflow-x: hidden;\n  overflow-y: scroll;\n}"]],["p","\u4ed6\u7684\u4f18\u70b9\u5728\u4e8e\u65b9\u4fbf\u800c\u4e14\u6ca1\u6709\u517c\u5bb9\u6027\u7684\u95ee\u9898\uff0c\u5176\u5b9e\u5f88\u591a\u5927\u7f51\u7ad9\u6709\u65f6\u5019\u4e5f\u5c31\u8fd9\u6837\u7528\u4e86\u3002\u3002\u3002"],["p","2.\u65b0\u5c5e\u6027overlay\u65b9\u6cd5"],["p","\u6eda\u52a8\u6761\u4f1a\u906e\u76d6\u4f4f\u5bb9\u566817px\u7684\u7a7a\u95f4"],["pre",{lang:null,highlighted:'<span class="token operator">*</span> {\n  margin<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n  padding<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n}\n\nbody<span class="token punctuation">,</span>\nhtml {\n  margin<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n  padding<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n  width<span class="token punctuation">:</span> <span class="token number">100</span>%<span class="token comment" spellcheck="true">;</span>\n  height<span class="token punctuation">:</span> <span class="token number">100</span>%<span class="token comment" spellcheck="true">;</span>\n}\nhtml{\n  overflow<span class="token punctuation">:</span> hidden<span class="token comment" spellcheck="true">;</span>\n}\nbody{\n  overflow<span class="token operator">-</span>x<span class="token punctuation">:</span> hidden<span class="token comment" spellcheck="true">;</span>\n  overflow<span class="token operator">-</span>y<span class="token punctuation">:</span> scroll<span class="token comment" spellcheck="true">;</span>\n  overflow<span class="token operator">-</span>y<span class="token punctuation">:</span> overlay<span class="token comment" spellcheck="true">;</span>\n}'},["code","* {\n  margin: 0;\n  padding: 0;\n}\n\nbody,\nhtml {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: 100%;\n}\nhtml{\n  overflow: hidden;\n}\nbody{\n  overflow-x: hidden;\n  overflow-y: scroll;\n  overflow-y: overlay;\n}"]],["p","\u8fd9\u4e2a\u5c5e\u6027\u503c\u76ee\u524d\u53ea\u6709chrome\u652f\u6301\uff0c\u8981\u662fff/\nie\u90fd\u652f\u6301\uff0c\u540e\u9762\u4e5f\u5c31\u4e0d\u7528\u5199\u4e86\uff0c\u4f46\u662f\u636e\u8bf4\u4ee5\u540e\u90fd\u4f1a\u52a0\u4e0a\u53bb\u652f\u6301\u7684\uff0c\u53ef\u4ee5\u8bf4\u662f\u975e\u5e38\u597d\u7528\u4e86\uff0c\u540e\u9762\u7684\u65b9\u6cd5\u4e5f\u53ea\u662f\u7528\u5176\u4ed6\u65b9\u6cd5\u5b9e\u73b0\u8fd9\u4e2a\u6548\u679c\u800c\u5df2\u3002"],["p","3.\u5229\u7528vw\u548ccalc\u5b9e\u73b0"],["p","\u56e0\u4e3a100vw\u662fwindow\u7684\u5bbd\u5ea6\uff0c\u5176\u5b9e\u5c31\u662fwindow.innerWidth, "],["p","\u800c\u5bb9\u5668\u7684\u5bbd\u5ea6100%\u5c31\u662f\u9664\u4e86\u6eda\u52a8\u6761\u7684\u53ef\u7528\u5bbd\u5ea6"],["p","\u56e0\u6b64\u5728\u6ca1\u6709\u6eda\u52a8\u6761\u65f6\u5019calc(100% - 100vw)\u5c31\u662f0\uff0c\u89e6\u53d1\u6eda\u52a8\u6761\u65f6\u5019\u5176\u503c\u4e3a\u8d1f\u7684\u6eda\u52a8\u6761\u5bbd\u5ea6\uff0c\u6211\u4eec\u5c06\u5176\u8d4b\u503c\u7ed9\u5bb9\u5668\u7684margin-right\uff0c\u5373\u53ef\u5de7\u5999\u8865\u507f\u8fd9\u4e2a\u5bbd\u5ea6\u7684\u6324\u538b\uff0c\u5728\u6eda\u52a8\u6761\u5b58\u5728\u7684\u60c5\u51b5\u4e0b\u5bb9\u5668\u5bbd\u5ea6\u4ecd\u7136\u5360\u636e\u6574\u4e2a\u89c6\u53e3\u7684\u5bbd\u5ea6\u3002"],["pre",{lang:null,highlighted:'<span class="token operator">*</span> {\n  margin<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n  padding<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n}\nhtml {\n  overflow<span class="token operator">-</span>y<span class="token punctuation">:</span> auto<span class="token comment" spellcheck="true">;</span>\n  overflow<span class="token operator">-</span>x<span class="token punctuation">:</span> hidden<span class="token comment" spellcheck="true">;</span>\n}\n<span class="token punctuation">.</span>container {\n  height<span class="token punctuation">:</span> 2000px<span class="token comment" spellcheck="true">;</span>\n  margin<span class="token operator">-</span>right<span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100</span>% <span class="token operator">-</span> 100vw<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n  padding<span class="token punctuation">:</span> 17px<span class="token comment" spellcheck="true">;</span>\n  background<span class="token operator">-</span>color<span class="token punctuation">:</span> #00b83f<span class="token comment" spellcheck="true">;</span>\n  text<span class="token operator">-</span>align<span class="token punctuation">:</span> right<span class="token comment" spellcheck="true">;</span>\n}'},["code","* {\n  margin: 0;\n  padding: 0;\n}\nhtml {\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n.container {\n  height: 2000px;\n  margin-right: calc(100% - 100vw);\n  padding: 17px;\n  background-color: #00b83f;\n  text-align: right;\n}"]],["p","\u6548\u679c\u5982\u540c\u65b9\u6cd5\u4e8c\uff0c\u5f88\u5b8c\u7f8e\uff0c\u5e76\u4e14\u517c\u5bb9\u6027\u8fd8\u4e0d\u9519\uff0c\u8d77\u7801\u9ad8\u7248\u672c\u7684ie\u548cff\u90fd\u6ca1\u95ee\u9898\u4e86\u3002"],["p","4.absolute\u65b9\u6cd5"],["p","\u8fd9\u4e2a\u5229\u7528\u4e86\u7edd\u5bf9\u5b9a\u4f4d\uff0c\u4fdd\u8bc1\u4e86body\u7684\u5bbd\u5ea6\u4e00\u76f4\u4fdd\u6301\u5b8c\u6574\u7a7a\u95f4\u3002"],["pre",{lang:null,highlighted:'html {\n  overflow<span class="token operator">-</span>y<span class="token punctuation">:</span> scroll<span class="token comment" spellcheck="true">; //\u8fd9\u662f\u4e3a\u4e86\u517c\u5bb9ie8\uff0c\u4e0d\u652f\u6301:root, vw</span>\n}\n \n<span class="token punctuation">:</span>root {\n  overflow<span class="token operator">-</span>y<span class="token punctuation">:</span> auto<span class="token comment" spellcheck="true">;</span>\n  overflow<span class="token operator">-</span>x<span class="token punctuation">:</span> hidden<span class="token comment" spellcheck="true">;</span>\n}\n \n<span class="token punctuation">:</span>root body {\n  position<span class="token punctuation">:</span> absolute<span class="token comment" spellcheck="true">;</span>\n}\n \nbody {\n  width<span class="token punctuation">:</span> 100vw<span class="token comment" spellcheck="true">;</span>\n  overflow<span class="token punctuation">:</span> hidden<span class="token comment" spellcheck="true">;</span>\n}'},["code","html {\n  overflow-y: scroll; //\u8fd9\u662f\u4e3a\u4e86\u517c\u5bb9ie8\uff0c\u4e0d\u652f\u6301:root, vw\n}\n \n:root {\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n \n:root body {\n  position: absolute;\n}\n \nbody {\n  width: 100vw;\n  overflow: hidden;\n}"]],["p","5.\u6ce8\uff1a\u5728\u4e00\u4e2a\u666e\u901a\u7684\u5bb9\u5668\u6eda\u52a8\u6761\u6324\u538b\u600e\u4e48\u529e\uff1f"],["p","\u4e0a\u9762\u662f\u9488\u5bf9\u6d4f\u89c8\u5668\u89c6\u53e3\u7684\u6eda\u52a8\u6761\u65b9\u6848\uff0c\u4f46\u662f\u5047\u5982\u5728\u4e00\u4e2a\u666e\u901adiv\u5bb9\u5668\u4e2d\u4e5f\u6709\u5982\u6b64\u7684\u9700\u6c42\u6539\u600e\u4e48\u529e\u5462\uff1f"],["p","\u56e0\u6b64\u6b64\u65f6\u5e76\u6ca1\u6709\u50cf100vw\u8fd9\u6837\u7684\u503c\u76f4\u63a5\u83b7\u53d6\u5bb9\u5668\u7684\u5bbd\u5ea6\uff0c\u53ea\u80fd\u4f7f\u7528js\u7684\u65b9\u6cd5\u6765\u68c0\u6d4b\u8ba1\u7b97\u7136\u540e\u518d\u7528margin-right\u505a\u8865\u507f\uff0c\u539f\u7406\u90fd\u662f\u4e00\u6837\u7684\uff0c"],["p","\u4f46\u662f\u6211\u5f3a\u70c8\u4e0d\u63a8\u8350\u4e5f\u4e0d\u559c\u6b22\u7528js\u6765\u8ba1\u7b97\u5e03\u5c40...\u56e0\u6b64\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\u52c9\u5f3a\u59d4\u5c48\u4e0b\u7528\u4e0a\u9762\u7684\u7b2c\u4e00\u79cd\u65b9\u6cd5\u4e86\uff0c\u5982\u679c\u662fchrome\u4e0b\u7528\u7b2c\u4e8c\u79cd\u65b9\u6cd5\u3002"],["p",".wrap {\n    overflow-y: scroll;\n    overflow-y: overlay;\n}\n\u5f53\u7136\u4f60\u575a\u51b3\u4e0d\u80fd\u5fcd\u7684\u8bdd\u4e5f\u53ef\u4ee5\u7528js\u53bb\u7b97\u5427...\u672c\u8d28\u4e5f\u662f\u4e00\u6837\u7684"],["h2","\u4e8c\u3001\u6eda\u52a8\u6761\u6837\u5f0f\u4f18\u5316"],["pre",{lang:null,highlighted:'body<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span>webkit<span class="token operator">-</span>scrollbar{\n  width<span class="token punctuation">:</span> 4px<span class="token comment" spellcheck="true">;</span>\n}\nbody<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span>webkit<span class="token operator">-</span>scrollbar<span class="token operator">-</span>thumb{\n  border<span class="token operator">-</span>radius<span class="token punctuation">:</span> 10px<span class="token comment" spellcheck="true">;</span>\n  <span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token operator">-</span>shadow<span class="token punctuation">:</span>inset <span class="token number">0</span> <span class="token number">0</span> 5px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0.2</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n   background<span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0.2</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}\nbody<span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span>webkit<span class="token operator">-</span>scrollbar<span class="token operator">-</span>track{\n  <span class="token operator">-</span>webkit<span class="token operator">-</span>box<span class="token operator">-</span>shadow<span class="token punctuation">:</span>inset <span class="token number">0</span> <span class="token number">0</span> 5px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0.2</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n  border<span class="token operator">-</span>radius<span class="token punctuation">:</span><span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n  background<span class="token punctuation">:</span><span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0.1</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}'},["code","body::-webkit-scrollbar{\n  width: 4px;\n}\nbody::-webkit-scrollbar-thumb{\n  border-radius: 10px;\n  -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2);\n  \xa0background: rgba(0,0,0,0.2);\n}\nbody::-webkit-scrollbar-track{\n  -webkit-box-shadow:inset 0 0 5px rgba(0,0,0,0.2);\n  border-radius:0;\n  background:rgba(0,0,0,0.1);\n}"]]],meta:{title:"\u6eda\u52a8\u6761scrollbar\u51fa\u73b0\u9020\u6210\u7684\u9875\u9762\u5bbd\u5ea6\u88ab\u6324\u538b\u95ee\u9898\u53ca\u6eda\u52a8\u6761\u6837\u5f0f\u4f18\u5316",publishDate:"2019-07-31T00:00:00.000Z",abstract:"\u6eda\u52a8\u6761scrollbar\u51fa\u73b0\u9020\u6210\u7684\u9875\u9762\u5bbd\u5ea6\u88ab\u6324\u538b\u95ee\u9898\u53ca\u6eda\u52a8\u6761\u6837\u5f0f\u4f18\u5316",filename:"posts/\u6280\u672f\u5206\u7c7b/CSS&CSS3/\u6eda\u52a8\u6761scrollbar\u51fa\u73b0\u9020\u6210\u7684\u9875\u9762\u5bbd\u5ea6\u88ab\u6324\u538b\u95ee\u9898\u53ca\u6eda\u52a8\u6761\u6837\u5f0f\u4f18\u5316.md"}}}});