webpackJsonp([26],{503:function(n,s){n.exports={content:["article",["h2","\u5355\u9875\u9762\u5e94\u7528\uff0c\u628aJS\u91cc\u9762\u7684CSS\u5355\u72ec\u6253\u5305"],["pre",{lang:null,highlighted:'var ExtractTextPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"extract-text-webpack-plugin"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    module<span class="token punctuation">:</span> {\n      rules<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n            {\n                test<span class="token punctuation">:</span> <span class="token operator">/</span>\\<span class="token punctuation">.</span>less$<span class="token operator">/</span><span class="token punctuation">,</span>\n                loader<span class="token punctuation">:</span> ExtractTextPlugin<span class="token punctuation">.</span><span class="token function">extract</span><span class="token punctuation">(</span>{\n                    fallback<span class="token punctuation">:</span> <span class="token string">\'style-loader\'</span><span class="token punctuation">,</span> \n                    use<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'css-loader\'</span><span class="token punctuation">,</span> <span class="token string">\'postcss-loader\'</span><span class="token punctuation">,</span><span class="token string">"less-loader"</span><span class="token punctuation">]</span>\n                }<span class="token punctuation">)</span>\n            }<span class="token punctuation">,</span>\n        <span class="token punctuation">]</span>\n    }<span class="token punctuation">,</span>\n        plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n        new <span class="token function">ExtractTextPlugin</span><span class="token punctuation">(</span><span class="token string">"styles/[name].css"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n    <span class="token punctuation">]</span>'},["code","var ExtractTextPlugin = require(\"extract-text-webpack-plugin\");\n    module: {\n      rules: [\n            {\n                test: /\\.less$/,\n                loader: ExtractTextPlugin.extract({\n                    fallback: 'style-loader', \n                    use: ['css-loader', 'postcss-loader',\"less-loader\"]\n                })\n            },\n        ]\n    },\n        plugins: [\n        new ExtractTextPlugin(\"styles/[name].css\"),\n    ]"]]],meta:{title:"webpack\u5206\u79bbcss\u5355\u72ec\u6253\u5305\u7684\u65b9\u6cd5",publishDate:"2019-07-31T00:00:00.000Z",abstract:"webpack\u5206\u79bbcss\u5355\u72ec\u6253\u5305\u7684\u65b9\u6cd5",filename:"posts/\u6280\u672f\u5206\u7c7b/webpack/webpack\u5206\u79bbcss\u5355\u72ec\u6253\u5305\u7684\u65b9\u6cd5.md"}}}});