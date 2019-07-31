webpackJsonp([37],{484:function(n,s){n.exports={content:["article",["h2","\u5229\u7528Nodejs\u542f\u52a8\u670d\u52a1\u53ca\u8fdb\u884c\u4ee3\u7406\u8bbe\u7f6e"],["pre",{lang:null,highlighted:'let http <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'http\'</span><span class="token punctuation">)</span>\nlet url <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'url\'</span><span class="token punctuation">)</span>\nlet fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'fs\'</span><span class="token punctuation">)</span>\nlet server <span class="token operator">=</span> http<span class="token punctuation">.</span><span class="token function">createServer</span><span class="token punctuation">(</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n    var pathname <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>req<span class="token punctuation">.</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>pathname<span class="token comment" spellcheck="true">;</span>\n    fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span>pathname<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">,</span> function <span class="token punctuation">(</span>err<span class="token punctuation">,</span> data<span class="token punctuation">)</span> {\n        <span class="token function">if</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span> {\n        res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">404</span><span class="token punctuation">,</span> {\n            <span class="token string">\'Content-Type\'</span><span class="token punctuation">:</span> <span class="token string">\'text/html\'</span>\n        }<span class="token punctuation">)</span>\n        } <span class="token keyword">else</span> {\n        res<span class="token punctuation">.</span><span class="token function">writeHead</span><span class="token punctuation">(</span><span class="token number">200</span><span class="token punctuation">,</span> {\n            <span class="token string">\'Content-Type\'</span><span class="token punctuation">:</span> <span class="token string">\'text/html\'</span>\n        }<span class="token punctuation">)</span>\n        res<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        }\n        res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    }<span class="token punctuation">)</span> \n}<span class="token punctuation">)</span>\n\nserver<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token string">\'127.0.0.1\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'\u670d\u52a1\u5668\u5df2\u7ecf\u8fd0\u884c\uff0c\u8bf7\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8f93\u5165http://127.0.0.1:3000/\u6765\u8fdb\u884c\u8bbf\u95ee\'</span><span class="token punctuation">)</span>\n}<span class="token punctuation">)</span>'},["code","let http = require('http')\nlet url = require('url')\nlet fs = require('fs')\nlet server = http.createServer((req, res) => {\n    var pathname = url.parse(req.url).pathname;\n    fs.readFile(pathname.substring(1), function (err, data) {\n        if(err) {\n        res.writeHead(404, {\n            'Content-Type': 'text/html'\n        })\n        } else {\n        res.writeHead(200, {\n            'Content-Type': 'text/html'\n        })\n        res.write(data.toString())\n        }\n        res.end()\n    }) \n})\n\nserver.listen(3000, '127.0.0.1', () => {\n  console.log('\u670d\u52a1\u5668\u5df2\u7ecf\u8fd0\u884c\uff0c\u8bf7\u6253\u5f00\u6d4f\u89c8\u5668\uff0c\u8f93\u5165http://127.0.0.1:3000/\u6765\u8fdb\u884c\u8bbf\u95ee')\n})"]],["pre",{lang:null,highlighted:'var express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'express\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\nvar proxy <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'http-proxy-middleware\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\nvar app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">\'/api/*\'</span><span class="token punctuation">,</span> <span class="token function">proxy</span><span class="token punctuation">(</span>{\n    target<span class="token punctuation">:</span> <span class="token string">\'http://172.18.169.72:6677\'</span><span class="token punctuation">,</span>\n    changeOrigin<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    pathRewrite<span class="token punctuation">:</span> {\n        <span class="token string">\'^/api/\'</span> <span class="token punctuation">:</span> <span class="token string">\'/\'</span> <span class="token operator">/</span><span class="token operator">/</span> \u91cd\u5199\u8bf7\u6c42\uff0capi<span class="token operator">/</span>\u89e3\u6790\u4e3a<span class="token operator">/</span>\n    }<span class="token punctuation">,</span>\n}<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\napp<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">"dist"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\napp<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'http://localhost:3000\'</span><span class="token punctuation">)</span>\n}<span class="token punctuation">)</span>'},["code","var express = require('express');\nvar proxy = require('http-proxy-middleware');\nvar app = express();\napp.use('/api/*', proxy({\n    target: 'http://172.18.169.72:6677',\n    changeOrigin: true,\n    pathRewrite: {\n        '^/api/' : '/' // \u91cd\u5199\u8bf7\u6c42\uff0capi/\u89e3\u6790\u4e3a/\n    },\n}));\napp.use(express.static(\"dist\"));\napp.listen(3000, function() {\n    console.log('http://localhost:3000')\n})"]]],meta:{title:"\u5229\u7528Nodejs\u542f\u52a8\u670d\u52a1\u53ca\u8fdb\u884c\u4ee3\u7406\u8bbe\u7f6e",publishDate:"2019-07-10T00:00:00.000Z",abstract:"\u5229\u7528Nodejs\u542f\u52a8\u670d\u52a1\u53ca\u8fdb\u884c\u4ee3\u7406\u8bbe\u7f6e",filename:"posts/\u6280\u672f\u5206\u7c7b/nodejs/\u5229\u7528Nodejs\u542f\u52a8\u670d\u52a1\u53ca\u8fdb\u884c\u4ee3\u7406\u8bbe\u7f6e.md"}}}});