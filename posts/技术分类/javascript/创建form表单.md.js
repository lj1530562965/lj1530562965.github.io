webpackJsonp([53],{479:function(n,s){n.exports={content:["article",["h2","\u521b\u5efaform\u8868\u5355"],["pre",{lang:null,highlighted:'export function <span class="token function">createRequestForm</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> {\n  <span class="token operator">/</span><span class="token operator">/</span>\u521b\u5efaform\u8868\u5355\n  var temp_form <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"form"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n  temp_form<span class="token punctuation">.</span>action <span class="token operator">=</span> data<span class="token punctuation">.</span>url<span class="token comment" spellcheck="true">;</span>\n  <span class="token operator">/</span><span class="token operator">/</span>\u5982\u9700\u6253\u5f00\u65b0\u7a97\u53e3\uff0cform\u7684target\u5c5e\u6027\u8981\u8bbe\u7f6e\u4e3a<span class="token string">\'_blank\'</span>\n  temp_form<span class="token punctuation">.</span>target <span class="token operator">=</span> <span class="token string">"_self"</span><span class="token comment" spellcheck="true">;</span>\n  temp_form<span class="token punctuation">.</span>method <span class="token operator">=</span> <span class="token string">"post"</span><span class="token comment" spellcheck="true">;</span>\n  temp_form<span class="token punctuation">.</span>style<span class="token punctuation">.</span>display <span class="token operator">=</span> <span class="token string">"none"</span><span class="token comment" spellcheck="true">;</span>\n  <span class="token operator">/</span><span class="token operator">/</span>\u6dfb\u52a0\u53c2\u6570\n  var PARAMTERS<span class="token operator">=</span>data<span class="token punctuation">.</span>params<span class="token comment" spellcheck="true">;</span>\n  <span class="token keyword">for</span> <span class="token punctuation">(</span>var item <span class="token keyword">in</span> PARAMTERS<span class="token punctuation">)</span> {\n      var opt <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"textarea"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n      opt<span class="token punctuation">.</span>name <span class="token operator">=</span> item<span class="token comment" spellcheck="true">;</span>\n      opt<span class="token punctuation">.</span>value <span class="token operator">=</span> PARAMTERS<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>\n      temp_form<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>opt<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n  }\n  document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>temp_form<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n  <span class="token operator">/</span><span class="token operator">/</span>\u63d0\u4ea4\u6570\u636e\n  temp_form<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}\n <span class="token function">createRequestForm</span><span class="token punctuation">(</span>{\n    url<span class="token punctuation">:</span>result<span class="token punctuation">.</span>url<span class="token punctuation">,</span>\n    params<span class="token punctuation">:</span>result<span class="token punctuation">.</span>data\n}<span class="token punctuation">)</span>'},["code",'export function createRequestForm(data) {\n  //\u521b\u5efaform\u8868\u5355\n  var temp_form = document.createElement("form");\n  temp_form.action = data.url;\n  //\u5982\u9700\u6253\u5f00\u65b0\u7a97\u53e3\uff0cform\u7684target\u5c5e\u6027\u8981\u8bbe\u7f6e\u4e3a\'_blank\'\n  temp_form.target = "_self";\n  temp_form.method = "post";\n  temp_form.style.display = "none";\n  //\u6dfb\u52a0\u53c2\u6570\n  var PARAMTERS=data.params;\n  for (var item in PARAMTERS) {\n      var opt = document.createElement("textarea");\n      opt.name = item;\n      opt.value = PARAMTERS[item];\n      temp_form.appendChild(opt);\n  }\n  document.body.appendChild(temp_form);\n  //\u63d0\u4ea4\u6570\u636e\n  temp_form.submit();\n}\n createRequestForm({\n    url:result.url,\n    params:result.data\n})']]],meta:{title:"\u521b\u5efaform\u8868\u5355",publishDate:"2019-07-11T00:00:00.000Z",abstract:"\u521b\u5efaform\u8868\u5355",filename:"posts/\u6280\u672f\u5206\u7c7b/javascript/\u521b\u5efaform\u8868\u5355.md"}}}});