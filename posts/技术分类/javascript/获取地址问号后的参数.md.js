webpackJsonp([47],{482:function(n,a){n.exports={content:["article",["h2","\u83b7\u53d6\u5730\u5740\u95ee\u53f7\u540e\u7684\u53c2\u6570"],["pre",{lang:null,highlighted:'import qs from <span class="token string">\'qs\'</span><span class="token comment" spellcheck="true">;</span>\nexport function <span class="token function">getQueryParams</span><span class="token punctuation">(</span>location<span class="token punctuation">)</span> {\n  let {params}<span class="token operator">=</span>location<span class="token comment" spellcheck="true">;</span>\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>!params<span class="token punctuation">)</span>{\n    params<span class="token operator">=</span>qs<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>location<span class="token punctuation">.</span>search<span class="token punctuation">,</span>{ignoreQueryPrefix<span class="token punctuation">:</span><span class="token boolean">true</span>}<span class="token punctuation">)</span>\n\n  }\n  return params<span class="token comment" spellcheck="true">;</span>\n}\n<span class="token keyword">const</span> {letterNo} <span class="token operator">=</span> <span class="token function">getQueryParams</span><span class="token punctuation">(</span>window<span class="token punctuation">.</span>location<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","import qs from 'qs';\nexport function getQueryParams(location) {\n  let {params}=location;\n  if (!params){\n    params=qs.parse(location.search,{ignoreQueryPrefix:true})\n\n  }\n  return params;\n}\nconst {letterNo} = getQueryParams(window.location);"]]],meta:{title:"\u83b7\u53d6\u5730\u5740\u95ee\u53f7\u540e\u7684\u53c2\u6570",publishDate:"2019-07-11T00:00:00.000Z",abstract:"\u83b7\u53d6\u5730\u5740\u95ee\u53f7\u540e\u7684\u53c2\u6570",filename:"posts/\u6280\u672f\u5206\u7c7b/javascript/\u83b7\u53d6\u5730\u5740\u95ee\u53f7\u540e\u7684\u53c2\u6570.md"}}}});