webpackJsonp([58],{480:function(n,a){n.exports={content:["article",["h3","\u56fe\u7247\u8f6cbase64"],["pre",{lang:null,highlighted:'\t<span class="token function">getUrlBase64</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span>  callback<span class="token punctuation">)</span> {\n\t\tvar canvas <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"canvas"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;   //\u521b\u5efacanvas DOM\u5143\u7d20</span>\n\t\tvar ctx <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token string">"2d"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\t\tvar img <span class="token operator">=</span> new Image<span class="token comment" spellcheck="true">;</span>\n\t\timg<span class="token punctuation">.</span>crossOrigin <span class="token operator">=</span> <span class="token string">\'Anonymous\'</span><span class="token comment" spellcheck="true">;</span>\n\t\timg<span class="token punctuation">.</span>src <span class="token operator">=</span> url<span class="token comment" spellcheck="true">;</span>\n\t\tvar ext <span class="token operator">=</span> url<span class="token punctuation">.</span><span class="token function">substring</span><span class="token punctuation">(</span>img<span class="token punctuation">.</span>src<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span><span class="token string">"."</span><span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;  </span>\n\t\timg<span class="token punctuation">.</span>onload <span class="token operator">=</span> function <span class="token punctuation">(</span><span class="token punctuation">)</span> {\n\t\t\tcanvas<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">60</span><span class="token comment" spellcheck="true">; //\u6307\u5b9a\u753b\u677f\u7684\u9ad8\u5ea6,\u81ea\u5b9a\u4e49</span>\n\t\t\tcanvas<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token number">85</span><span class="token comment" spellcheck="true">; //\u6307\u5b9a\u753b\u677f\u7684\u5bbd\u5ea6\uff0c\u81ea\u5b9a\u4e49</span>\n\t\t\tctx<span class="token punctuation">.</span><span class="token function">drawImage</span><span class="token punctuation">(</span>img<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">85</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">; //\u53c2\u6570\u53ef\u81ea\u5b9a\u4e49</span>\n\t\t\tvar dataURL <span class="token operator">=</span> canvas<span class="token punctuation">.</span><span class="token function">toDataURL</span><span class="token punctuation">(</span><span class="token string">"image/"</span> <span class="token operator">+</span> ext<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\t\t\tcallback<span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>this<span class="token punctuation">,</span> dataURL<span class="token punctuation">)</span><span class="token comment" spellcheck="true">; //\u56de\u6389\u51fd\u6570\u83b7\u53d6Base64\u7f16\u7801</span>\n\t\t\tcanvas <span class="token operator">=</span> <span class="token keyword">null</span><span class="token comment" spellcheck="true">;</span>\n\t\t}<span class="token comment" spellcheck="true">;</span>\n\t}'},["code",'\tgetUrlBase64(url,  callback) {\n\t\tvar canvas = document.createElement("canvas");   //\u521b\u5efacanvas DOM\u5143\u7d20\n\t\tvar ctx = canvas.getContext("2d");\n\t\tvar img = new Image;\n\t\timg.crossOrigin = \'Anonymous\';\n\t\timg.src = url;\n\t\tvar ext = url.substring(img.src.lastIndexOf(".")+1).toLowerCase();  \n\t\timg.onload = function () {\n\t\t\tcanvas.height = 60; //\u6307\u5b9a\u753b\u677f\u7684\u9ad8\u5ea6,\u81ea\u5b9a\u4e49\n\t\t\tcanvas.width = 85; //\u6307\u5b9a\u753b\u677f\u7684\u5bbd\u5ea6\uff0c\u81ea\u5b9a\u4e49\n\t\t\tctx.drawImage(img, 0, 0, 60, 85); //\u53c2\u6570\u53ef\u81ea\u5b9a\u4e49\n\t\t\tvar dataURL = canvas.toDataURL("image/" + ext);\n\t\t\tcallback.call(this, dataURL); //\u56de\u6389\u51fd\u6570\u83b7\u53d6Base64\u7f16\u7801\n\t\t\tcanvas = null;\n\t\t};\n\t}']],["h3","base64\u8f6cfile\u6587\u4ef6\u7684\u4e24\u79cd\u65b9\u5f0f"],["p"," \u6700\u8fd1\u9879\u76ee\u4e2d\u9700\u8981\u5b9e\u73b0\u628a\u56fe\u7247\u7684base64\u7f16\u7801\u8f6c\u6210file\u6587\u4ef6\u7684\u529f\u80fd\uff0c\u7136\u540e\u518d\u4e0a\u4f20\u81f3\u670d\u52a1\u5668\u3002\u8d77\u521d\u662f\u76f4\u63a5\u901a\u8fc7new File()"],["p"," \u7684\u65b9\u5f0f\u8fdb\u884c\u8f6c\u6362\uff0c\u5728\u5404\u4e2a\u4e3b\u6d41\u7684\u6d4f\u89c8\u5668\u57fa\u672c\u4e0a\u90fd\u652f\u6301\uff0cAndroid\u4e5f\u6ca1\u95ee\u9898\uff0c\u4f46\u662f\u5728ios\u7cfb\u7edf\u57cb\u4e86\u4e2a\u5751\uff0cios11.4\u4ee5\u4e0b\u7684\u7cfb\u7edf\u4e0a\u4f20\u5931\u8d25\u3002\u5b9a\u4f4dbug\u53d1\u73b0\u662fnew File()"],["p"," \u8fd9\u4e2a\u65b9\u6cd5\u4e0d\u517c\u5bb9ios\u7cfb\u7edf\uff0c\u53ea\u80fd\u53e6\u8f9f\u8e4a\u5f84\uff0c\u6700\u540e\u627e\u5230\u4e00\u4e2a\u65b9\u6cd5\u5c31\u662f\uff1a"],["p","\u5c06base64\u8f6c\u6210blob \u2014\u2014> blob\u8f6c\u6210file"],["p","\u8fd9\u79cd\u65b9\u5f0f\u6d4b\u8bd5\u901a\u8fc7\uff0c\u89e3\u51b3\u4e86new File()\u4e0d\u517c\u5bb9ios\u7cfb\u7edf\u95ee\u9898\u3002\u4e0b\u9762\u5c06base64\u8f6cfile\u6587\u4ef6\u4e24\u79cd\u65b9\u5f0f\u7684\u4ee3\u7801\u8d34\u51fa\u6765"],["p","1.\u901a\u8fc7new File()\u5c06base64\u8f6c\u6362\u6210file\u6587\u4ef6\uff0c\u6b64\u65b9\u5f0f\u9700\u8003\u8651\u6d4f\u89c8\u5668\u517c\u5bb9\u95ee\u9898\u3002"],["pre",{lang:null,highlighted:' <span class="token operator">/</span><span class="token operator">/</span>\u5c06base64\u8f6c\u6362\u4e3a\u6587\u4ef6\n    dataURLtoFile<span class="token punctuation">:</span> <span class="token function">function</span><span class="token punctuation">(</span>dataurl<span class="token punctuation">,</span> filename<span class="token punctuation">)</span> { \n\t    var arr <span class="token operator">=</span> dataurl<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\',\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t        mime <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token operator">/</span><span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">?</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;/)[1],</span>\n\t        bstr <span class="token operator">=</span> <span class="token function">atob</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t        n <span class="token operator">=</span> bstr<span class="token punctuation">.</span>length<span class="token punctuation">,</span>\n\t        u8arr <span class="token operator">=</span> new <span class="token function">Uint8Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\t    <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token operator">-</span><span class="token punctuation">)</span> {\n\t        u8arr<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> bstr<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\t    }\n\t    return new <span class="token function">File</span><span class="token punctuation">(</span><span class="token punctuation">[</span>u8arr<span class="token punctuation">]</span><span class="token punctuation">,</span> filename<span class="token punctuation">,</span> { type<span class="token punctuation">:</span> mime }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\t}<span class="token punctuation">,</span>\n \n    <span class="token operator">/</span><span class="token operator">/</span>\u8c03\u7528\n   var file <span class="token operator">=</span> <span class="token function">dataURLtoFile</span><span class="token punctuation">(</span>base64Data<span class="token punctuation">,</span> imgName<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code"," //\u5c06base64\u8f6c\u6362\u4e3a\u6587\u4ef6\n    dataURLtoFile: function(dataurl, filename) { \n\t    var arr = dataurl.split(','),\n\t        mime = arr[0].match(/:(.*?);/)[1],\n\t        bstr = atob(arr[1]),\n\t        n = bstr.length,\n\t        u8arr = new Uint8Array(n);\n\t    while (n--) {\n\t        u8arr[n] = bstr.charCodeAt(n);\n\t    }\n\t    return new File([u8arr], filename, { type: mime });\n\t},\n \n    //\u8c03\u7528\n   var file = dataURLtoFile(base64Data, imgName);"]],["p","2.\u5148\u5c06base64\u8f6c\u6362\u6210blob\uff0c\u518d\u5c06blob\u8f6c\u6362\u6210file\u6587\u4ef6\uff0c\u6b64\u65b9\u6cd5\u4e0d\u5b58\u5728\u6d4f\u89c8\u5668\u4e0d\u517c\u5bb9\u95ee\u9898\u3002"],["pre",{lang:null,highlighted:'  <span class="token operator">/</span><span class="token operator">/</span>\u5c06base64\u8f6c\u6362\u4e3ablob\n    dataURLtoBlob<span class="token punctuation">:</span> <span class="token function">function</span><span class="token punctuation">(</span>dataurl<span class="token punctuation">)</span> { \n        var arr <span class="token operator">=</span> dataurl<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\',\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            mime <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token operator">/</span><span class="token punctuation">:</span><span class="token punctuation">(</span><span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">?</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;/)[1],</span>\n            bstr <span class="token operator">=</span> <span class="token function">atob</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n            n <span class="token operator">=</span> bstr<span class="token punctuation">.</span>length<span class="token punctuation">,</span>\n            u8arr <span class="token operator">=</span> new <span class="token function">Uint8Array</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        <span class="token keyword">while</span> <span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token operator">-</span><span class="token punctuation">)</span> {\n            u8arr<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> bstr<span class="token punctuation">.</span><span class="token function">charCodeAt</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        }\n        return new <span class="token function">Blob</span><span class="token punctuation">(</span><span class="token punctuation">[</span>u8arr<span class="token punctuation">]</span><span class="token punctuation">,</span> { type<span class="token punctuation">:</span> mime }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }<span class="token punctuation">,</span>\n    <span class="token operator">/</span><span class="token operator">/</span>\u5c06blob\u8f6c\u6362\u4e3afile\n    blobToFile<span class="token punctuation">:</span> <span class="token function">function</span><span class="token punctuation">(</span>theBlob<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span>{\n       theBlob<span class="token punctuation">.</span>lastModifiedDate <span class="token operator">=</span> new <span class="token function">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n       theBlob<span class="token punctuation">.</span>name <span class="token operator">=</span> fileName<span class="token comment" spellcheck="true">;</span>\n       return theBlob<span class="token comment" spellcheck="true">;</span>\n    }<span class="token punctuation">,</span>\n    <span class="token operator">/</span><span class="token operator">/</span>\u8c03\u7528\n    var blob <span class="token operator">=</span> <span class="token function">dataURLtoBlob</span><span class="token punctuation">(</span>base64Data<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    var file <span class="token operator">=</span> <span class="token function">blobToFile</span><span class="token punctuation">(</span>blob<span class="token punctuation">,</span> imgName<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","  //\u5c06base64\u8f6c\u6362\u4e3ablob\n    dataURLtoBlob: function(dataurl) { \n        var arr = dataurl.split(','),\n            mime = arr[0].match(/:(.*?);/)[1],\n            bstr = atob(arr[1]),\n            n = bstr.length,\n            u8arr = new Uint8Array(n);\n        while (n--) {\n            u8arr[n] = bstr.charCodeAt(n);\n        }\n        return new Blob([u8arr], { type: mime });\n    },\n    //\u5c06blob\u8f6c\u6362\u4e3afile\n    blobToFile: function(theBlob, fileName){\n       theBlob.lastModifiedDate = new Date();\n       theBlob.name = fileName;\n       return theBlob;\n    },\n    //\u8c03\u7528\n    var blob = dataURLtoBlob(base64Data);\n    var file = blobToFile(blob, imgName);"]]],meta:{title:"\u56fe\u7247\u8f6c\u6362\uff1a\u56fe\u7247\u8f6cbase64\u53cabase64\u8f6cfile\u6587\u4ef6\u7684\u4e24\u79cd\u65b9\u5f0f",publishDate:"2019-07-29T00:00:00.000Z",abstract:"\u56fe\u7247\u8f6c\u6362\uff1a\u56fe\u7247\u8f6cbase64\u53cabase64\u8f6cfile\u6587\u4ef6\u7684\u4e24\u79cd\u65b9\u5f0f",filename:"posts/\u6280\u672f\u5206\u7c7b/javascript/\u56fe\u7247\u8f6c\u6362\uff1a\u56fe\u7247\u8f6cbase64\u53cabase64\u8f6cfile\u6587\u4ef6\u7684\u4e24\u79cd\u65b9\u5f0f.md"}}}});