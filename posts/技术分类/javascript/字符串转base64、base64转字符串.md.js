webpackJsonp([44],{475:function(n,s){n.exports={content:["article",["p","##\u3010JavaScript\u539f\u751f\u63d0\u4f9b\u4e24\u4e2aBase64\u76f8\u5173\u65b9\u6cd5\u3011"],["ul",["li",["p","btoa()\uff1a\u5b57\u7b26\u4e32\u6216\u4e8c\u8fdb\u5236\u503c\u8f6c\u4e3aBase64\u7f16\u7801"]],["li",["p","atob()\uff1aBase64\u7f16\u7801\u8f6c\u4e3a\u539f\u6765\u7684\u7f16\u7801"]],["li",["p","\u5907\u6ce8\uff1a\u5229\u7528\u8fd9\u4e24\u4e2a\u539f\u751f\u65b9\u6cd5\uff0c\u6211\u4eec\u6765\u5c01\u88c5\u4e00\u4e0b\u5b57\u7b26\u4e32\u8f6cbase64\u3001base64\u8f6c\u5b57\u7b26\u4e32\u65b9\u6cd5"],["h3","\u4e00\u3001\u3010\u4f7f\u7528\u51fd\u6570\u65b9\u5f0f\u3011"]]],["pre",{lang:null,highlighted:'var str <span class="token operator">=</span> <span class="token string">\'\u602a\u8bde\u5496\u5561\'</span><span class="token comment" spellcheck="true">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">encode</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;//JUU2JTgwJUFBJUU4JUFGJTlFJUU1JTkyJTk2JUU1JTk1JUEx</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">decode</span><span class="token punctuation">(</span><span class="token function">encode</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;//\u602a\u8bde\u5496\u5561</span>\n<span class="token operator">/</span><span class="token operator">/</span> \u5b57\u7b26\u4e32\u8f6cbase64\nfunction <span class="token function">encode</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>{\n    <span class="token operator">/</span><span class="token operator">/</span> \u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u7f16\u7801\n    var encode <span class="token operator">=</span> <span class="token function">encodeURI</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    <span class="token operator">/</span><span class="token operator">/</span> \u5bf9\u7f16\u7801\u7684\u5b57\u7b26\u4e32\u8f6c\u5316base64\n    var base64 <span class="token operator">=</span> <span class="token function">btoa</span><span class="token punctuation">(</span>encode<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    return base64<span class="token comment" spellcheck="true">;</span>\n}\n<span class="token operator">/</span><span class="token operator">/</span> base64\u8f6c\u5b57\u7b26\u4e32\nfunction <span class="token function">decode</span><span class="token punctuation">(</span>base64<span class="token punctuation">)</span>{\n    <span class="token operator">/</span><span class="token operator">/</span> \u5bf9base64\u8f6c\u7f16\u7801\n    var decode <span class="token operator">=</span> <span class="token function">atob</span><span class="token punctuation">(</span>base64<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    <span class="token operator">/</span><span class="token operator">/</span> \u7f16\u7801\u8f6c\u5b57\u7b26\u4e32\n    var str <span class="token operator">=</span> <span class="token function">decodeURI</span><span class="token punctuation">(</span>decode<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    return str<span class="token comment" spellcheck="true">;</span>\n}'},["code","var str = '\u602a\u8bde\u5496\u5561';\nconsole.log(encode(str));//JUU2JTgwJUFBJUU4JUFGJTlFJUU1JTkyJTk2JUU1JTk1JUEx\nconsole.log(decode(encode(str)));//\u602a\u8bde\u5496\u5561\n// \u5b57\u7b26\u4e32\u8f6cbase64\nfunction encode(str){\n    // \u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u7f16\u7801\n    var encode = encodeURI(str);\n    // \u5bf9\u7f16\u7801\u7684\u5b57\u7b26\u4e32\u8f6c\u5316base64\n    var base64 = btoa(encode);\n    return base64;\n}\n// base64\u8f6c\u5b57\u7b26\u4e32\nfunction decode(base64){\n    // \u5bf9base64\u8f6c\u7f16\u7801\n    var decode = atob(base64);\n    // \u7f16\u7801\u8f6c\u5b57\u7b26\u4e32\n    var str = decodeURI(decode);\n    return str;\n}"]],["h3","\u4e8c\u3001\u3010\u4f7f\u7528\u51fd\u6570\u65b9\u5f0f\u3011"],["p","\u3010\u4f7f\u7528\u5bf9\u8c61\u65b9\u5f0f\u3011"],["pre",{lang:null,highlighted:'var base64 <span class="token operator">=</span> {\n    <span class="token function">encode</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span>{\n        <span class="token operator">/</span><span class="token operator">/</span> \u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u7f16\u7801\n        var encode <span class="token operator">=</span> <span class="token function">encodeURI</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        <span class="token operator">/</span><span class="token operator">/</span> \u5bf9\u7f16\u7801\u7684\u5b57\u7b26\u4e32\u8f6c\u5316base64\n        var base64 <span class="token operator">=</span> <span class="token function">btoa</span><span class="token punctuation">(</span>encode<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        return base64<span class="token comment" spellcheck="true">;</span>\n    }<span class="token punctuation">,</span>\n    <span class="token function">decode</span><span class="token punctuation">(</span>base64<span class="token punctuation">)</span>{\n        <span class="token operator">/</span><span class="token operator">/</span> \u5bf9base64\u8f6c\u7f16\u7801\n        var decode <span class="token operator">=</span> <span class="token function">atob</span><span class="token punctuation">(</span>base64<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        <span class="token operator">/</span><span class="token operator">/</span> \u7f16\u7801\u8f6c\u5b57\u7b26\u4e32\n        var str <span class="token operator">=</span> <span class="token function">decodeURI</span><span class="token punctuation">(</span>decode<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        return str<span class="token comment" spellcheck="true">;</span>\n    }\n}<span class="token comment" spellcheck="true">;</span>\n<span class="token operator">/</span><span class="token operator">/</span> \u5b57\u7b26\u4e32\u8f6cbase64\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>base64<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token string">\'\u602a\u8bde\u5496\u5561\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;//JUU2JTgwJUFBJUU4JUFGJTlFJUU1JTkyJTk2JUU1JTk1JUEx</span>\n<span class="token operator">/</span><span class="token operator">/</span> base64\u8f6c\u5b57\u7b26\u4e32\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>base64<span class="token punctuation">.</span><span class="token function">decode</span><span class="token punctuation">(</span>base64<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token string">\'\u602a\u8bde\u5496\u5561\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;//\u602a\u8bde\u5496\u5561</span>'},["code","var base64 = {\n    encode(str){\n        // \u5bf9\u5b57\u7b26\u4e32\u8fdb\u884c\u7f16\u7801\n        var encode = encodeURI(str);\n        // \u5bf9\u7f16\u7801\u7684\u5b57\u7b26\u4e32\u8f6c\u5316base64\n        var base64 = btoa(encode);\n        return base64;\n    },\n    decode(base64){\n        // \u5bf9base64\u8f6c\u7f16\u7801\n        var decode = atob(base64);\n        // \u7f16\u7801\u8f6c\u5b57\u7b26\u4e32\n        var str = decodeURI(decode);\n        return str;\n    }\n};\n// \u5b57\u7b26\u4e32\u8f6cbase64\nconsole.log(base64.encode('\u602a\u8bde\u5496\u5561'));//JUU2JTgwJUFBJUU4JUFGJTlFJUU1JTkyJTk2JUU1JTk1JUEx\n// base64\u8f6c\u5b57\u7b26\u4e32\nconsole.log(base64.decode(base64.encode('\u602a\u8bde\u5496\u5561')));//\u602a\u8bde\u5496\u5561"]]],meta:{title:"\u5b57\u7b26\u4e32\u8f6cbase64\u3001base64\u8f6c\u5b57\u7b26\u4e32",publishDate:"2019-05-30T00:00:00.000Z",abstract:"\u5b57\u7b26\u4e32\u8f6cbase64\u3001base64\u8f6c\u5b57\u7b26\u4e32",filename:"posts/\u6280\u672f\u5206\u7c7b/javascript/\u5b57\u7b26\u4e32\u8f6cbase64\u3001base64\u8f6c\u5b57\u7b26\u4e32.md"}}}});