webpackJsonp([23],{509:function(s,n){s.exports={content:["article",["h2","\u4e00\u3001\u5b9e\u73b0\u539f\u7406"],["p","\u539f\u7406\u5f88\u7b80\u5355 \u628a\u53cc\u5f15\u53f7\u5305\u542b\u4f4f,\u5c31\u4e0d\u4f1a\u6709\u5173\u952e\u5b57\u9519\u8bef\u4e86,\u53ef\u53c2\u8003",["a",{title:null,href:"http://blog.404mzk.com/es6ie8.html"},"http://blog.404mzk.com/es6ie8.html"]],["h2","\u4e8c\u3001\u5b9e\u73b0\u65b9\u6cd5"],["h3","1.es3ify\u65b9\u6cd5"],["pre",{lang:null,highlighted:'npm i es3ify<span class="token operator">-</span>loader <span class="token operator">-</span><span class="token operator">-</span>save\n{\n    test<span class="token punctuation">:</span> <span class="token operator">/</span>\\<span class="token punctuation">.</span>js<span class="token operator">?</span>$<span class="token operator">/</span><span class="token punctuation">,</span>\n    loader<span class="token punctuation">:</span> <span class="token string">\'es3ify-loader\'</span><span class="token punctuation">,</span>\n    enforce<span class="token punctuation">:</span> <span class="token string">\'post\'</span>\n}<span class="token punctuation">,</span>'},["code","npm i es3ify-loader --save\n{\n    test: /\\.js?$/,\n    loader: 'es3ify-loader',\n    enforce: 'post'\n},"]],["h3","2.babel es3\u63d2\u4ef6"],["pre",{lang:null,highlighted:'npm install <span class="token operator">-</span><span class="token operator">-</span>save<span class="token operator">-</span>dev babel<span class="token operator">-</span>plugin<span class="token operator">-</span>transform<span class="token operator">-</span>es3<span class="token operator">-</span>member<span class="token operator">-</span>expression<span class="token operator">-</span>literals babel<span class="token operator">-</span>plugin<span class="token operator">-</span>transform<span class="token operator">-</span>es3<span class="token operator">-</span>property<span class="token operator">-</span>literals babel<span class="token operator">-</span>plugin<span class="token operator">-</span>transform<span class="token operator">-</span>es2015<span class="token operator">-</span>modules<span class="token operator">-</span>commonjs\n<span class="token punctuation">.</span>babelrc\n{\n  <span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n  <span class="token string">"transform-es3-member-expression-literals"</span><span class="token punctuation">,</span>\n  <span class="token string">"transform-es3-property-literals"</span><span class="token punctuation">,</span>\n  <span class="token string">"transform-es2015-modules-commonjs"</span><span class="token punctuation">,</span>\n  <span class="token punctuation">[</span><span class="token string">"transform-es2015-classes"</span><span class="token punctuation">,</span> { <span class="token string">"loose"</span><span class="token punctuation">:</span> <span class="token boolean">true</span> }<span class="token punctuation">]</span>\n  <span class="token punctuation">]</span>\n}'},["code",'npm install --save-dev babel-plugin-transform-es3-member-expression-literals babel-plugin-transform-es3-property-literals babel-plugin-transform-es2015-modules-commonjs\n.babelrc\n{\n  "plugins": [\n  "transform-es3-member-expression-literals",\n  "transform-es3-property-literals",\n  "transform-es2015-modules-commonjs",\n  ["transform-es2015-classes", { "loose": true }]\n  ]\n}']],["h3","3.UglifyJsPlugin\u53bb\u6389\u53cc\u5f15\u53f7\u95ee\u9898"],["pre",{lang:null,highlighted:'npm install uglify<span class="token operator">-</span>js<span class="token operator">-</span>plugin <span class="token operator">-</span><span class="token operator">-</span>save<span class="token operator">-</span>dev\nwebpack<span class="token punctuation">.</span>config<span class="token punctuation">.</span>js\nnew <span class="token function">UglifyJsPlugin</span><span class="token punctuation">(</span>{ <span class="token operator">/</span><span class="token operator">/</span>\u538b\u7f29\u4ee3\u7801\n    compress<span class="token punctuation">:</span> {\n        warnings<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n        screw_ie8<span class="token punctuation">:</span> <span class="token boolean">false</span>\n\n    }<span class="token punctuation">,</span> \n    mangle<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    output<span class="token punctuation">:</span> { screw_ie8<span class="token punctuation">:</span> <span class="token boolean">false</span> }<span class="token punctuation">,</span>\n}<span class="token punctuation">)</span>'},["code","npm install uglify-js-plugin --save-dev\nwebpack.config.js\nnew UglifyJsPlugin({ //\u538b\u7f29\u4ee3\u7801\n    compress: {\n        warnings: false,\n        screw_ie8: false\n\n    }, \n    mangle: false,\n    output: { screw_ie8: false },\n})"]]],meta:{title:"\u5b9e\u73b0IE8\u652f\u6301ES6\u7684\u5173\u952e\u5b57\u95ee\u9898",publishDate:"2019-07-04T00:00:00.000Z",abstract:"\u5b9e\u73b0IE8\u652f\u6301ES6\u7684\u5173\u952e\u5b57\u95ee\u9898",filename:"posts/\u6280\u672f\u5206\u7c7b/webpack/\u5b9e\u73b0IE8\u652f\u6301ES6.md"}}}});