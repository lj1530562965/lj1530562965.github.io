webpackJsonp([22],{505:function(n,s){n.exports={content:["article",["h2","\u7ec4\u4ef6\u5e93\u5305\u7684package.json\u8981\u6dfb\u52a0miniprogram\u53cafiles\u914d\u7f6e"],["pre",{lang:null,highlighted:'{\n  <span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"sc-weapp-master"</span><span class="token punctuation">,</span>\n  <span class="token string">"version"</span><span class="token punctuation">:</span> <span class="token string">"0.0.2"</span><span class="token punctuation">,</span>\n  <span class="token string">"miniprogram"</span><span class="token punctuation">:</span> <span class="token string">"es"</span><span class="token punctuation">,</span>\n  <span class="token string">"description"</span><span class="token punctuation">:</span> <span class="token string">"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u57fa\u7840\u7ec4\u4ef6"</span><span class="token punctuation">,</span>\n  <span class="token string">"files"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token string">"es"</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token string">"scripts"</span><span class="token punctuation">:</span> {\n    <span class="token string">"build"</span><span class="token punctuation">:</span> <span class="token string">"gulp --gulpfile scripts/gulpfile.js"</span><span class="token punctuation">,</span>\n    <span class="token string">"test"</span><span class="token punctuation">:</span> <span class="token string">"echo \\"</span>Error<span class="token punctuation">:</span> no test specified\\<span class="token string">" &amp;&amp; exit 1"</span>\n  }<span class="token punctuation">,</span>\n  <span class="token string">"author"</span><span class="token punctuation">:</span> <span class="token string">""</span><span class="token punctuation">,</span>\n  <span class="token string">"license"</span><span class="token punctuation">:</span> <span class="token string">"ISC"</span><span class="token punctuation">,</span>\n  <span class="token string">"devDependencies"</span><span class="token punctuation">:</span> {\n    <span class="token string">"extract-text-webpack-plugin"</span><span class="token punctuation">:</span> <span class="token string">"^3.0.2"</span><span class="token punctuation">,</span>\n    <span class="token string">"gulp"</span><span class="token punctuation">:</span> <span class="token string">"^3.9.1"</span><span class="token punctuation">,</span>\n    <span class="token string">"gulp-less"</span><span class="token punctuation">:</span> <span class="token string">"^4.0.1"</span><span class="token punctuation">,</span>\n    <span class="token string">"gulp-rename"</span><span class="token punctuation">:</span> <span class="token string">"^1.4.0"</span><span class="token punctuation">,</span>\n    <span class="token string">"less"</span><span class="token punctuation">:</span> <span class="token string">"^3.8.1"</span><span class="token punctuation">,</span>\n    <span class="token string">"less-loader"</span><span class="token punctuation">:</span> <span class="token string">"^4.1.0"</span>\n  }\n}'},["code",'{\n  "name": "sc-weapp-master",\n  "version": "0.0.2",\n  "miniprogram": "es",\n  "description": "\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u57fa\u7840\u7ec4\u4ef6",\n  "files": [\n    "es"\n  ],\n  "scripts": {\n    "build": "gulp --gulpfile scripts/gulpfile.js",\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "author": "",\n  "license": "ISC",\n  "devDependencies": {\n    "extract-text-webpack-plugin": "^3.0.2",\n    "gulp": "^3.9.1",\n    "gulp-less": "^4.0.1",\n    "gulp-rename": "^1.4.0",\n    "less": "^3.8.1",\n    "less-loader": "^4.1.0"\n  }\n}']],["h2","\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u4f7f\u7528npm\u7ec4\u4ef6\u5e93\u5305"],["p","1.npm install sc-weapp-master --production //\u52a1\u5fc5\u4f7f\u7528--production\u9009\u9879\uff0c\u53ef\u4ee5\u51cf\u5c11\u5b89\u88c5\u4e00\u4e9b\u4e1a\u52a1\u65e0\u5173\u7684npm\u5305\uff0c\u4ece\u800c\u51cf\u5c11\u6574\u4e2a\u5c0f\u7a0b\u5e8f\u5305\u7684\u5927\u5c0f\u3002"],["p","2.\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\uff1a\u8be6\u60c5-\u52fe\u9009\u201c\u4f7f\u7528npm\u6a21\u5757\u201d"],["p","3.\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\uff1a\u5de5\u5177-\u6784\u5efanpm"],["p","4.\u9875\u9762index.json\u7684usingComponents\u914d\u7f6e\u4e2d"],["pre",{lang:null,highlighted:'<span class="token string">"sc-button"</span><span class="token punctuation">:</span> <span class="token string">"sc-weapp-master/button/index"</span>\n\u6216\n<span class="token string">"sc-button"</span><span class="token punctuation">:</span> <span class="token string">"/sc-weapp-master/button/index"</span>\n\u6216\n<span class="token string">"sc-button"</span><span class="token punctuation">:</span> <span class="token string">"/miniprogram_npm/sc-weapp-master/button/index"</span>'},["code",'"sc-button": "sc-weapp-master/button/index"\n\u6216\n"sc-button": "/sc-weapp-master/button/index"\n\u6216\n"sc-button": "/miniprogram_npm/sc-weapp-master/button/index"']],["p","5.\u9875\u9762index.wxml\u4e2d"],["pre",{lang:null,highlighted:'<span class="token operator">&lt;</span>sc<span class="token operator">-</span>button inline type<span class="token operator">=</span><span class="token string">"primary"</span><span class="token operator">></span>\u884c\u5185\u6309\u94ae<span class="token operator">&lt;</span><span class="token operator">/</span>sc<span class="token operator">-</span>button<span class="token operator">></span>'},["code",'<sc-button inline type="primary">\u884c\u5185\u6309\u94ae</sc-button>']],["h2","\u5176\u4ed6\u63d2\u4ef6\u5f15\u7528"],["p","\u9875\u9762index.js\u4e2d"],["pre",{lang:null,highlighted:'import {QrCode} from <span class="token string">\'javascript-qrcode\'</span><span class="token comment" spellcheck="true">;</span>'},["code","import {QrCode} from 'javascript-qrcode';"]]],meta:{title:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f - \u4f7f\u7528npm\uff08\u7b2c\u4e09\u65b9\u5305/\u7ec4\u4ef6\u5e93\u5305\uff09",publishDate:"2019-07-01T00:00:00.000Z",abstract:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f - \u4f7f\u7528npm\uff08\u7b2c\u4e09\u65b9\u5305/\u7ec4\u4ef6\u5e93\u5305\uff09",filename:"posts/\u6280\u672f\u5206\u7c7b/weixin/\u5fae\u4fe1\u5c0f\u7a0b\u5e8f - \u4f7f\u7528npm\uff08\u7b2c\u4e09\u65b9\u5305\uff09.md"}}}});