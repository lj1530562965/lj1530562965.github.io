webpackJsonp([5],{509:function(n,s){n.exports={content:["article",["h2","\u524d\u7aef\u7684\u56fe\u7247\u538b\u7f29image-compressor\uff08\u53ef\u5728\u56fe\u7247\u4e0a\u4f20\u524d\u5b9e\u73b0\u56fe\u7247\u538b\u7f29\uff09"],["h3","\u5730\u5740\uff1a"],["p",["a",{title:null,href:"https://github.com/xkeshi/image-compressor"},"https://github.com/xkeshi/image-compressor"]],["p",["a",{title:null,href:"http://www.imooc.com/article/40038"},"http://www.imooc.com/article/40038"]],["h3","\u4f7f\u7528"],["pre",{lang:null,highlighted:'npm install image<span class="token operator">-</span>compressor<span class="token punctuation">.</span>js\nnew <span class="token function">ImageCompressor</span><span class="token punctuation">(</span><span class="token punctuation">[</span>file<span class="token punctuation">[</span><span class="token punctuation">,</span> options<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n<span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"file"</span> id<span class="token operator">=</span><span class="token string">"file"</span> accept<span class="token operator">=</span><span class="token string">"image/*"</span><span class="token operator">></span>\nimport axios from <span class="token string">\'axios\'</span><span class="token comment" spellcheck="true">;</span>\nimport ImageCompressor from <span class="token string">\'image-compressor.js\'</span><span class="token comment" spellcheck="true">;</span>\n\ndocument<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">\'file\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'change\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n  <span class="token keyword">const</span> file <span class="token operator">=</span> e<span class="token punctuation">.</span>target<span class="token punctuation">.</span>files<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>\n\n  <span class="token keyword">if</span> <span class="token punctuation">(</span>!file<span class="token punctuation">)</span> {\n    return<span class="token comment" spellcheck="true">;</span>\n  }\n\n  new <span class="token function">ImageCompressor</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> {\n    quality<span class="token punctuation">:</span> <span class="token punctuation">.</span><span class="token number">6</span><span class="token punctuation">,</span>\n    <span class="token function">success</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> {\n      <span class="token keyword">const</span> formData <span class="token operator">=</span> new <span class="token function">FormData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\n      formData<span class="token punctuation">.</span><span class="token function">append</span><span class="token punctuation">(</span><span class="token string">\'file\'</span><span class="token punctuation">,</span> result<span class="token punctuation">,</span> result<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\n      <span class="token operator">/</span><span class="token operator">/</span> Send the compressed image file <span class="token keyword">to</span> server <span class="token keyword">with</span> XMLHttpRequest<span class="token punctuation">.</span>\n      axios<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span><span class="token string">\'/path/to/upload\'</span><span class="token punctuation">,</span> formData<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'Upload success\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n      }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }<span class="token punctuation">,</span>\n    <span class="token function">error</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> {\n      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }<span class="token punctuation">,</span>\n  }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","npm install image-compressor.js\nnew ImageCompressor([file[, options]])\n<input type=\"file\" id=\"file\" accept=\"image/*\">\nimport axios from 'axios';\nimport ImageCompressor from 'image-compressor.js';\n\ndocument.getElementById('file').addEventListener('change', (e) => {\n  const file = e.target.files[0];\n\n  if (!file) {\n    return;\n  }\n\n  new ImageCompressor(file, {\n    quality: .6,\n    success(result) {\n      const formData = new FormData();\n\n      formData.append('file', result, result.name);\n\n      // Send the compressed image file to server with XMLHttpRequest.\n      axios.post('/path/to/upload', formData).then(() => {\n        console.log('Upload success');\n      });\n    },\n    error(e) {\n      console.log(e.message);\n    },\n  });\n});"]]],meta:{title:"\u524d\u7aef\u7684\u56fe\u7247\u538b\u7f29image-compressor\uff08\u53ef\u5728\u56fe\u7247\u4e0a\u4f20\u524d\u5b9e\u73b0\u56fe\u7247\u538b\u7f29\uff09",publishDate:"2019-06-12T00:00:00.000Z",abstract:"\u524d\u7aef\u7684\u56fe\u7247\u538b\u7f29image-compressor\uff08\u53ef\u5728\u56fe\u7247\u4e0a\u4f20\u524d\u5b9e\u73b0\u56fe\u7247\u538b\u7f29\uff09",filename:"posts/\u968f\u7b14\u5206\u7c7b/\u5e38\u89c1\u95ee\u9898\u53ca\u6280\u672f\u65b9\u6848/\u56fe\u7247\u538b\u7f29image-compressor.md"}}}});