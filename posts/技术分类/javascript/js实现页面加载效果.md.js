webpackJsonp([48],{470:function(n,s){n.exports={content:["article",["h3","js\u5b9e\u73b0\u9875\u9762\u52a0\u8f7d\u6548\u679c"],["pre",{lang:null,highlighted:'var _LoadingHtml <span class="token operator">=</span> <span class="token string">\'&lt;div id="loadpage">&lt;div class="pic">&lt;i>&lt;/i>&lt;i>&lt;/i>&lt;i>&lt;/i>&lt;i>&lt;/i>&lt;i>&lt;/i>&lt;/div>&lt;/div>\'</span><span class="token comment" spellcheck="true">;</span>\ndocument<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>_LoadingHtml<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\ndocument<span class="token punctuation">.</span>onreadystatechange <span class="token operator">=</span> function <span class="token punctuation">(</span><span class="token punctuation">)</span> {\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>document<span class="token punctuation">.</span>readyState <span class="token operator">==</span> <span class="token string">\'complete\'</span><span class="token punctuation">)</span> {\n\t\t$<span class="token punctuation">(</span><span class="token string">\'#loadpage\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fadeOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n\t}\n}\n\n<span class="token directive keyword">#loadpage</span>{\n    position<span class="token punctuation">:</span> fixed<span class="token comment" spellcheck="true">;</span>\n    width<span class="token punctuation">:</span> <span class="token number">100</span>%<span class="token comment" spellcheck="true">;</span>\n    height<span class="token punctuation">:</span> <span class="token number">100</span>%<span class="token comment" spellcheck="true">;</span>\n    left<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n    top<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n    z<span class="token operator">-</span>index<span class="token punctuation">:</span> <span class="token number">100</span><span class="token comment" spellcheck="true">;</span>\n    background<span class="token punctuation">:</span> #fff<span class="token comment" spellcheck="true">;</span>\n    <span class="token punctuation">.</span>pic{\n        width<span class="token punctuation">:</span> 50px<span class="token comment" spellcheck="true">;</span>\n        height<span class="token punctuation">:</span> 50px<span class="token comment" spellcheck="true">;</span>\n        position<span class="token punctuation">:</span> absolute<span class="token comment" spellcheck="true">;</span>\n        left<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n        top<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n        right<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n        bottom<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n        margin<span class="token punctuation">:</span> auto<span class="token comment" spellcheck="true">;</span>\n    }\n    <span class="token punctuation">.</span>pic i{\n        display<span class="token punctuation">:</span> block<span class="token comment" spellcheck="true">;</span>\n        float<span class="token punctuation">:</span> left<span class="token comment" spellcheck="true">;</span>\n        width<span class="token punctuation">:</span> 6px<span class="token comment" spellcheck="true">;</span>\n        height<span class="token punctuation">:</span> 50px<span class="token comment" spellcheck="true">;</span>\n        margin<span class="token punctuation">:</span> <span class="token number">0</span> 2px<span class="token comment" spellcheck="true">;</span>\n        background<span class="token punctuation">:</span> #007DDB<span class="token comment" spellcheck="true">;</span>\n        <span class="token operator">-</span>webkit<span class="token operator">-</span>transform<span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span><span class="token number">0.4</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n            <span class="token operator">-</span>ms<span class="token operator">-</span>transform<span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span><span class="token number">0.4</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n                transform<span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span><span class="token number">0.4</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        <span class="token operator">-</span>webkit<span class="token operator">-</span>animation<span class="token punctuation">:</span> load <span class="token number">1</span><span class="token punctuation">.</span>2s infinite<span class="token comment" spellcheck="true">;</span>\n                animation<span class="token punctuation">:</span> load <span class="token number">1</span><span class="token punctuation">.</span>2s infinite<span class="token comment" spellcheck="true">;</span>\n    }\n    i<span class="token punctuation">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>{}\n    i<span class="token punctuation">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>{\n        <span class="token operator">-</span>webkit<span class="token operator">-</span>animation<span class="token operator">-</span>delay<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">.</span>1s<span class="token comment" spellcheck="true">;</span>\n                animation<span class="token operator">-</span>delay<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">.</span>1s<span class="token comment" spellcheck="true">;</span>\n    }\n    i<span class="token punctuation">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span>{\n        <span class="token operator">-</span>webkit<span class="token operator">-</span>animation<span class="token operator">-</span>delay<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">.</span>2s<span class="token comment" spellcheck="true">;</span>\n                animation<span class="token operator">-</span>delay<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">.</span>2s<span class="token comment" spellcheck="true">;</span>\n    }\n    i<span class="token punctuation">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>{\n        <span class="token operator">-</span>webkit<span class="token operator">-</span>animation<span class="token operator">-</span>delay<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">.</span>3s<span class="token comment" spellcheck="true">;</span>\n                animation<span class="token operator">-</span>delay<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">.</span>3s<span class="token comment" spellcheck="true">;</span>\n    }\n    i<span class="token punctuation">:</span>nth<span class="token operator">-</span><span class="token function">child</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>{\n        <span class="token operator">-</span>webkit<span class="token operator">-</span>animation<span class="token operator">-</span>delay<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">.</span>4s<span class="token comment" spellcheck="true">;</span>\n                animation<span class="token operator">-</span>delay<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">.</span>4s<span class="token comment" spellcheck="true">;</span>\n    }\n    @<span class="token operator">-</span>webkit<span class="token operator">-</span>keyframes load{\n        <span class="token number">0</span>%<span class="token punctuation">,</span><span class="token number">40</span>%<span class="token punctuation">,</span><span class="token number">100</span>%{\n            <span class="token operator">-</span>webkit<span class="token operator">-</span>transform<span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span><span class="token number">0.4</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n                    transform<span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span><span class="token number">0.4</span><span class="token punctuation">)</span>\n        }\n        <span class="token number">20</span>%{\n            <span class="token operator">-</span>webkit<span class="token operator">-</span>transform<span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n                    transform<span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n        }\n    }\n    <span class="token variable">@keyframes</span> load{\n        <span class="token number">0</span>%<span class="token punctuation">,</span><span class="token number">40</span>%<span class="token punctuation">,</span><span class="token number">100</span>%{\n            <span class="token operator">-</span>webkit<span class="token operator">-</span>transform<span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span><span class="token number">0.4</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n                    transform<span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span><span class="token number">0.4</span><span class="token punctuation">)</span>\n        }\n        <span class="token number">20</span>%{\n            <span class="token operator">-</span>webkit<span class="token operator">-</span>transform<span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n                    transform<span class="token punctuation">:</span> <span class="token function">scaleY</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n        }\n    }\n}'},["code","var _LoadingHtml = '<div id=\"loadpage\"><div class=\"pic\"><i></i><i></i><i></i><i></i><i></i></div></div>';\ndocument.write(_LoadingHtml);\ndocument.onreadystatechange = function () {\n\tif (document.readyState == 'complete') {\n\t\t$('#loadpage').fadeOut()\n\t}\n}\n\n#loadpage{\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    z-index: 100;\n    background: #fff;\n    .pic{\n        width: 50px;\n        height: 50px;\n        position: absolute;\n        left: 0;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        margin: auto;\n    }\n    .pic i{\n        display: block;\n        float: left;\n        width: 6px;\n        height: 50px;\n        margin: 0 2px;\n        background: #007DDB;\n        -webkit-transform: scaleY(0.4);\n            -ms-transform: scaleY(0.4);\n                transform: scaleY(0.4);\n        -webkit-animation: load 1.2s infinite;\n                animation: load 1.2s infinite;\n    }\n    i:nth-child(1){}\n    i:nth-child(2){\n        -webkit-animation-delay: 0.1s;\n                animation-delay: 0.1s;\n    }\n    i:nth-child(3){\n        -webkit-animation-delay: 0.2s;\n                animation-delay: 0.2s;\n    }\n    i:nth-child(4){\n        -webkit-animation-delay: 0.3s;\n                animation-delay: 0.3s;\n    }\n    i:nth-child(5){\n        -webkit-animation-delay: 0.4s;\n                animation-delay: 0.4s;\n    }\n    @-webkit-keyframes load{\n        0%,40%,100%{\n            -webkit-transform: scaleY(0.4);\n                    transform: scaleY(0.4)\n        }\n        20%{\n            -webkit-transform: scaleY(1);\n                    transform: scaleY(1)\n        }\n    }\n    @keyframes load{\n        0%,40%,100%{\n            -webkit-transform: scaleY(0.4);\n                    transform: scaleY(0.4)\n        }\n        20%{\n            -webkit-transform: scaleY(1);\n                    transform: scaleY(1)\n        }\n    }\n}"]]],meta:{title:"js\u5b9e\u73b0\u9875\u9762\u52a0\u8f7d\u6548\u679c",publishDate:"2019-07-30T00:00:00.000Z",abstract:"js\u5b9e\u73b0\u9875\u9762\u52a0\u8f7d\u6548\u679c",filename:"posts/\u6280\u672f\u5206\u7c7b/javascript/js\u5b9e\u73b0\u9875\u9762\u52a0\u8f7d\u6548\u679c.md"}}}});