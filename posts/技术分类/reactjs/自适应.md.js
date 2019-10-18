webpackJsonp([31],{496:function(n,s){n.exports={content:["article",["h2","postcss-px-to-viewport \u81ea\u9002\u5e94"],["p",["a",{title:null,href:"https://umijs.org/zh/config/#extrapostcssplugins"},"https://umijs.org/zh/config/#extrapostcssplugins"]],["pre",{lang:null,highlighted:'<span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1, maximum-scale=1,maximum-scale=1.0,user-scalable=no"</span><span class="token operator">></span>'},["code",'<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1,maximum-scale=1.0,user-scalable=no">']],["p",".umirc.js\u4e2d\u914d\u7f6e"],["pre",{lang:null,highlighted:' extraPostCSSPlugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token function">pxToViewPort</span><span class="token punctuation">(</span>{\n      viewportWidth<span class="token punctuation">:</span> <span class="token number">375</span><span class="token punctuation">,</span>   <span class="token operator">/</span><span class="token operator">/</span> \u89c6\u7a97\u7684\u5bbd\u5ea6\uff0c\u5bf9\u5e94\u7684\u662f\u6211\u4eec\u8bbe\u8ba1\u7a3f\u7684\u5bbd\u5ea6\uff0c\u4e00\u822c\u662f<span class="token number">750</span>\n      viewportHeight<span class="token punctuation">:</span> <span class="token number">667</span><span class="token punctuation">,</span> <span class="token operator">/</span><span class="token operator">/</span> \u89c6\u7a97\u7684\u9ad8\u5ea6\uff0c\u6839\u636e<span class="token number">750</span>\u8bbe\u5907\u7684\u5bbd\u5ea6\u6765\u6307\u5b9a\uff0c\u4e00\u822c\u6307\u5b9a<span class="token number">1334</span>\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u914d\u7f6e\n      unitPrecision<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>     <span class="token operator">/</span><span class="token operator">/</span> \u6307\u5b9a`px`\u8f6c\u6362\u4e3a\u89c6\u7a97\u5355\u4f4d\u503c\u7684\u5c0f\u6570\u4f4d\u6570\n      viewportUnit<span class="token punctuation">:</span> <span class="token string">"vw"</span><span class="token punctuation">,</span>   <span class="token operator">/</span><span class="token operator">/</span>\u6307\u5b9a\u9700\u8981\u8f6c\u6362\u6210\u7684\u89c6\u7a97\u5355\u4f4d\uff0c\u5efa\u8bae\u4f7f\u7528vw\n      selectorBlackList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'.ignore\'</span><span class="token punctuation">,</span> <span class="token string">\'.hairlines\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token operator">/</span><span class="token operator">/</span> \u6307\u5b9a\u4e0d\u8f6c\u6362\u4e3a\u89c6\u7a97\u5355\u4f4d\u7684\u7c7b\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\uff0c\u53ef\u4ee5\u65e0\u9650\u6dfb\u52a0<span class="token punctuation">,</span>\u5efa\u8bae\u5b9a\u4e49\u4e00\u81f3\u4e24\u4e2a\u901a\u7528\u7684\u7c7b\u540d\n      minPixelValue<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span>     <span class="token operator">/</span><span class="token operator">/</span> \u5c0f\u4e8e\u6216\u7b49\u4e8e`1px`\u4e0d\u8f6c\u6362\u4e3a\u89c6\u7a97\u5355\u4f4d\uff0c\u4f60\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u4f60\u60f3\u8981\u7684\u503c\n      mediaQuery<span class="token punctuation">:</span> <span class="token boolean">false</span>     <span class="token operator">/</span><span class="token operator">/</span> \u5141\u8bb8\u5728\u5a92\u4f53\u67e5\u8be2\u4e2d\u8f6c\u6362`px`\n    }<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>'},["code"," extraPostCSSPlugins: [\n    pxToViewPort({\n      viewportWidth: 375,   // \u89c6\u7a97\u7684\u5bbd\u5ea6\uff0c\u5bf9\u5e94\u7684\u662f\u6211\u4eec\u8bbe\u8ba1\u7a3f\u7684\u5bbd\u5ea6\uff0c\u4e00\u822c\u662f750\n      viewportHeight: 667, // \u89c6\u7a97\u7684\u9ad8\u5ea6\uff0c\u6839\u636e750\u8bbe\u5907\u7684\u5bbd\u5ea6\u6765\u6307\u5b9a\uff0c\u4e00\u822c\u6307\u5b9a1334\uff0c\u4e5f\u53ef\u4ee5\u4e0d\u914d\u7f6e\n      unitPrecision: 3,     // \u6307\u5b9a`px`\u8f6c\u6362\u4e3a\u89c6\u7a97\u5355\u4f4d\u503c\u7684\u5c0f\u6570\u4f4d\u6570\n      viewportUnit: \"vw\",   //\u6307\u5b9a\u9700\u8981\u8f6c\u6362\u6210\u7684\u89c6\u7a97\u5355\u4f4d\uff0c\u5efa\u8bae\u4f7f\u7528vw\n      selectorBlackList: ['.ignore', '.hairlines'],// \u6307\u5b9a\u4e0d\u8f6c\u6362\u4e3a\u89c6\u7a97\u5355\u4f4d\u7684\u7c7b\uff0c\u53ef\u4ee5\u81ea\u5b9a\u4e49\uff0c\u53ef\u4ee5\u65e0\u9650\u6dfb\u52a0,\u5efa\u8bae\u5b9a\u4e49\u4e00\u81f3\u4e24\u4e2a\u901a\u7528\u7684\u7c7b\u540d\n      minPixelValue: 1,     // \u5c0f\u4e8e\u6216\u7b49\u4e8e`1px`\u4e0d\u8f6c\u6362\u4e3a\u89c6\u7a97\u5355\u4f4d\uff0c\u4f60\u4e5f\u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u4f60\u60f3\u8981\u7684\u503c\n      mediaQuery: false     // \u5141\u8bb8\u5728\u5a92\u4f53\u67e5\u8be2\u4e2d\u8f6c\u6362`px`\n    }),\n  ],"]],["h2","postcss-plugin-px2rem \u81ea\u9002\u5e94"],["pre",{lang:null,highlighted:'index<span class="token punctuation">.</span>ejs\u7684head\u4e2d\n<span class="token operator">&lt;</span>script<span class="token operator">></span>\n<span class="token comment" spellcheck="true">;(function(win, lib) {</span>\n    var doc <span class="token operator">=</span> win<span class="token punctuation">.</span>document<span class="token comment" spellcheck="true">;</span>\n    var docEl <span class="token operator">=</span> doc<span class="token punctuation">.</span>documentElement<span class="token comment" spellcheck="true">;</span>\n    var metaEl <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'meta[name="viewport"]\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    var flexibleEl <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">\'meta[name="flexible"]\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    var dpr <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n    var scale <span class="token operator">=</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n    var tid<span class="token comment" spellcheck="true">;</span>\n    var flexible <span class="token operator">=</span> lib<span class="token punctuation">.</span>flexible || <span class="token punctuation">(</span>lib<span class="token punctuation">.</span>flexible <span class="token operator">=</span> {}<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>metaEl<span class="token punctuation">)</span> {\n        console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">\'\u5c06\u6839\u636e\u5df2\u6709\u7684meta\u6807\u7b7e\u6765\u8bbe\u7f6e\u7f29\u653e\u6bd4\u4f8b\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        var match <span class="token operator">=</span> metaEl<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">\'content\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token operator">/</span>initial\\<span class="token operator">-</span>scale<span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\\d\\<span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>match<span class="token punctuation">)</span> {\n            scale <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>match<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n            dpr <span class="token operator">=</span> <span class="token function">parseInt</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">/</span> scale<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        }\n    } <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>flexibleEl<span class="token punctuation">)</span> {\n        var content <span class="token operator">=</span> flexibleEl<span class="token punctuation">.</span><span class="token function">getAttribute</span><span class="token punctuation">(</span><span class="token string">\'content\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>content<span class="token punctuation">)</span> {\n            var initialDpr <span class="token operator">=</span> content<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token operator">/</span>initial\\<span class="token operator">-</span>dpr<span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\\d\\<span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n            var maximumDpr <span class="token operator">=</span> content<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token operator">/</span>maximum\\<span class="token operator">-</span>dpr<span class="token operator">=</span><span class="token punctuation">(</span><span class="token punctuation">[</span>\\d\\<span class="token punctuation">.</span><span class="token punctuation">]</span><span class="token operator">+</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>initialDpr<span class="token punctuation">)</span> {\n                dpr <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>initialDpr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n                scale <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">/</span> dpr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n            }\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>maximumDpr<span class="token punctuation">)</span> {\n                dpr <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>maximumDpr<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n                scale <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">/</span> dpr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toFixed</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n            }\n        }\n    }\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>!dpr <span class="token operator">&amp;</span><span class="token operator">&amp;</span> !scale<span class="token punctuation">)</span> {\n        var isAndroid <span class="token operator">=</span> win<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>appVersion<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token operator">/</span>android<span class="token operator">/</span>gi<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        var isIPhone <span class="token operator">=</span> win<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>appVersion<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token operator">/</span>iphone<span class="token operator">/</span>gi<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        var devicePixelRatio <span class="token operator">=</span> win<span class="token punctuation">.</span>devicePixelRatio<span class="token comment" spellcheck="true">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>isIPhone<span class="token punctuation">)</span> {\n            <span class="token operator">/</span><span class="token operator">/</span> iOS\u4e0b\uff0c\u5bf9\u4e8e<span class="token number">2</span>\u548c<span class="token number">3</span>\u7684\u5c4f\uff0c\u7528<span class="token number">2</span>\u500d\u7684\u65b9\u6848\uff0c\u5176\u4f59\u7684\u7528<span class="token number">1</span>\u500d\u65b9\u6848\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>devicePixelRatio <span class="token operator">>=</span> <span class="token number">3</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span> <span class="token punctuation">(</span>!dpr || dpr <span class="token operator">>=</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span> {\n                dpr <span class="token operator">=</span> <span class="token number">3</span><span class="token comment" spellcheck="true">;</span>\n            } <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>devicePixelRatio <span class="token operator">>=</span> <span class="token number">2</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span> <span class="token punctuation">(</span>!dpr || dpr <span class="token operator">>=</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span>{\n                dpr <span class="token operator">=</span> <span class="token number">2</span><span class="token comment" spellcheck="true">;</span>\n            } <span class="token keyword">else</span> {\n                dpr <span class="token operator">=</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>\n            }\n        } <span class="token keyword">else</span> {\n            <span class="token operator">/</span><span class="token operator">/</span> \u5176\u4ed6\u8bbe\u5907\u4e0b\uff0c\u4ecd\u65e7\u4f7f\u7528<span class="token number">1</span>\u500d\u7684\u65b9\u6848\n            dpr <span class="token operator">=</span> <span class="token number">1</span><span class="token comment" spellcheck="true">;</span>\n        }\n        scale <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">/</span> dpr<span class="token comment" spellcheck="true">;</span>\n    }\n    <span class="token operator">/</span><span class="token operator">/</span>\u4e3ahtml\u6807\u7b7e\u6dfb\u52a0data<span class="token operator">-</span>dpr\u5c5e\u6027\n    docEl<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">\'data-dpr\'</span><span class="token punctuation">,</span> dpr<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>!metaEl<span class="token punctuation">)</span> {\n        metaEl <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'meta\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        metaEl<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">\'name\'</span><span class="token punctuation">,</span> <span class="token string">\'viewport\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        <span class="token operator">/</span><span class="token operator">/</span> \u52a8\u6001\u8bbe\u7f6emeta\n        metaEl<span class="token punctuation">.</span><span class="token function">setAttribute</span><span class="token punctuation">(</span><span class="token string">\'content\'</span><span class="token punctuation">,</span> <span class="token string">\'initial-scale=\'</span> <span class="token operator">+</span> scale <span class="token operator">+</span> <span class="token string">\', maximum-scale=\'</span> <span class="token operator">+</span> scale <span class="token operator">+</span> <span class="token string">\', minimum-scale=\'</span> <span class="token operator">+</span> scale <span class="token operator">+</span> <span class="token string">\', user-scalable=no\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>docEl<span class="token punctuation">.</span>firstElementChild<span class="token punctuation">)</span> {\n            docEl<span class="token punctuation">.</span>firstElementChild<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>metaEl<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        } <span class="token keyword">else</span> {\n            var wrap <span class="token operator">=</span> doc<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n            wrap<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>metaEl<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n            doc<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>wrap<span class="token punctuation">.</span>innerHTML<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        }\n    }\n\n    <span class="token operator">/</span><span class="token operator">/</span>\u6839\u636edpr\u548c\u7269\u7406\u50cf\u7d20\u8bbe\u7f6erem\n    function <span class="token function">refreshRem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>{\n        <span class="token operator">/</span><span class="token operator">/</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>width\u76f8\u5f53\u4e8e\u7269\u7406\u50cf\u7d20\n        var width <span class="token operator">=</span> docEl<span class="token punctuation">.</span><span class="token function">getBoundingClientRect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>width<span class="token comment" spellcheck="true">;</span>\n        <span class="token operator">/</span><span class="token operator">/</span> width <span class="token operator">/</span> dpr <span class="token operator">></span> <span class="token number">540</span>\u7b49\u4e8e\u72ec\u7acb\u50cf\u7d20\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>width <span class="token operator">/</span> dpr <span class="token operator">></span> <span class="token number">540</span><span class="token punctuation">)</span> {\n            width <span class="token operator">=</span> <span class="token number">540</span> <span class="token operator">*</span> dpr<span class="token comment" spellcheck="true">;</span>\n        }\n        var rem <span class="token operator">=</span> width <span class="token operator">/</span> <span class="token number">10</span><span class="token comment" spellcheck="true">;   // \u5c06\u5c4f\u5e55\u5bbd\u5ea6\u5206\u621010\u4efd\uff0c 1\u4efd\u4e3a1rem.  rem\u8f6c\u5316px\u8ba1\u7b97\u516c\u5f0f=d*(width/10)</span>\n        docEl<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> rem <span class="token operator">+</span> <span class="token string">\'px\'</span><span class="token comment" spellcheck="true">;</span>\n        flexible<span class="token punctuation">.</span>rem <span class="token operator">=</span> win<span class="token punctuation">.</span>rem <span class="token operator">=</span> rem<span class="token comment" spellcheck="true">;</span>\n    }\n    <span class="token operator">/</span><span class="token operator">/</span> \u76d1\u542c\u7a97\u53e3\u53d8\u5316\uff0c\u91cd\u65b0\u8bbe\u7f6e\u5c3a\u5bf8\n    win<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'resize\'</span><span class="token punctuation">,</span> <span class="token function">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n        <span class="token function">clearTimeout</span><span class="token punctuation">(</span>tid<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        tid <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>refreshRem<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\n    <span class="token operator">/</span><span class="token operator">/</span> \u5f53\u91cd\u65b0\u8f7d\u5165\u9875\u9762\u65f6\uff0c\u5224\u65ad\u662f\u5426\u662f\u7f13\u5b58\uff0c\u5982\u679c\u662f\u7f13\u5b58\uff0c\u6267\u884c<span class="token function">refreshRem</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    win<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'pageshow\'</span><span class="token punctuation">,</span> <span class="token function">function</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> {\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>persisted<span class="token punctuation">)</span> {\n            <span class="token function">clearTimeout</span><span class="token punctuation">(</span>tid<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n            tid <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span>refreshRem<span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        }\n    }<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>doc<span class="token punctuation">.</span>readyState <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">\'complete\'</span><span class="token punctuation">)</span> {\n        doc<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token number">12</span> <span class="token operator">*</span> dpr <span class="token operator">+</span> <span class="token string">\'px\'</span><span class="token comment" spellcheck="true">;</span>\n    } <span class="token keyword">else</span> {\n        doc<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">\'DOMContentLoaded\'</span><span class="token punctuation">,</span> <span class="token function">function</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> {\n            doc<span class="token punctuation">.</span>body<span class="token punctuation">.</span>style<span class="token punctuation">.</span>fontSize <span class="token operator">=</span> <span class="token number">12</span> <span class="token operator">*</span> dpr <span class="token operator">+</span> <span class="token string">\'px\'</span><span class="token comment" spellcheck="true">;</span>\n        }<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n\n\n    <span class="token function">refreshRem</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n\n    flexible<span class="token punctuation">.</span>dpr <span class="token operator">=</span> win<span class="token punctuation">.</span>dpr <span class="token operator">=</span> dpr<span class="token comment" spellcheck="true">;</span>\n    flexible<span class="token punctuation">.</span>refreshRem <span class="token operator">=</span> refreshRem<span class="token comment" spellcheck="true">;</span>\n    flexible<span class="token punctuation">.</span>rem2px <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> {\n        var val <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">*</span> this<span class="token punctuation">.</span>rem<span class="token comment" spellcheck="true">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>typeof d <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">\'string\'</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span> d<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token operator">/</span>rem$<span class="token operator">/</span><span class="token punctuation">)</span><span class="token punctuation">)</span> {\n            val <span class="token operator">+=</span> <span class="token string">\'px\'</span><span class="token comment" spellcheck="true">;</span>\n        }\n        return val<span class="token comment" spellcheck="true">;</span>\n    }\n    flexible<span class="token punctuation">.</span>px2rem <span class="token operator">=</span> <span class="token function">function</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> {\n        var val <span class="token operator">=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>d<span class="token punctuation">)</span> <span class="token operator">/</span> this<span class="token punctuation">.</span>rem<span class="token comment" spellcheck="true">;</span>\n        <span class="token keyword">if</span> <span class="token punctuation">(</span>typeof d <span class="token operator">==</span><span class="token operator">=</span> <span class="token string">\'string\'</span> <span class="token operator">&amp;</span><span class="token operator">&amp;</span> d<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span><span class="token operator">/</span>px$<span class="token operator">/</span><span class="token punctuation">)</span><span class="token punctuation">)</span> {\n            val <span class="token operator">+=</span> <span class="token string">\'rem\'</span><span class="token comment" spellcheck="true">;</span>\n        }\n        return val<span class="token comment" spellcheck="true">;</span>\n    }\n\n}<span class="token punctuation">)</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> window<span class="token punctuation">[</span><span class="token string">\'lib\'</span><span class="token punctuation">]</span> || <span class="token punctuation">(</span>window<span class="token punctuation">[</span><span class="token string">\'lib\'</span><span class="token punctuation">]</span> <span class="token operator">=</span> {}<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>'},["code","index.ejs\u7684head\u4e2d\n<script>\n;(function(win, lib) {\n    var doc = win.document;\n    var docEl = doc.documentElement;\n    var metaEl = doc.querySelector('meta[name=\"viewport\"]');\n    var flexibleEl = doc.querySelector('meta[name=\"flexible\"]');\n    var dpr = 0;\n    var scale = 0;\n    var tid;\n    var flexible = lib.flexible || (lib.flexible = {});\n\n    if (metaEl) {\n        console.warn('\u5c06\u6839\u636e\u5df2\u6709\u7684meta\u6807\u7b7e\u6765\u8bbe\u7f6e\u7f29\u653e\u6bd4\u4f8b');\n        var match = metaEl.getAttribute('content').match(/initial\\-scale=([\\d\\.]+)/);\n        if (match) {\n            scale = parseFloat(match[1]);\n            dpr = parseInt(1 / scale);\n        }\n    } else if (flexibleEl) {\n        var content = flexibleEl.getAttribute('content');\n        if (content) {\n            var initialDpr = content.match(/initial\\-dpr=([\\d\\.]+)/);\n            var maximumDpr = content.match(/maximum\\-dpr=([\\d\\.]+)/);\n            if (initialDpr) {\n                dpr = parseFloat(initialDpr[1]);\n                scale = parseFloat((1 / dpr).toFixed(2));\n            }\n            if (maximumDpr) {\n                dpr = parseFloat(maximumDpr[1]);\n                scale = parseFloat((1 / dpr).toFixed(2));\n            }\n        }\n    }\n\n    if (!dpr && !scale) {\n        var isAndroid = win.navigator.appVersion.match(/android/gi);\n        var isIPhone = win.navigator.appVersion.match(/iphone/gi);\n        var devicePixelRatio = win.devicePixelRatio;\n        if (isIPhone) {\n            // iOS\u4e0b\uff0c\u5bf9\u4e8e2\u548c3\u7684\u5c4f\uff0c\u75282\u500d\u7684\u65b9\u6848\uff0c\u5176\u4f59\u7684\u75281\u500d\u65b9\u6848\n            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {\n                dpr = 3;\n            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){\n                dpr = 2;\n            } else {\n                dpr = 1;\n            }\n        } else {\n            // \u5176\u4ed6\u8bbe\u5907\u4e0b\uff0c\u4ecd\u65e7\u4f7f\u75281\u500d\u7684\u65b9\u6848\n            dpr = 1;\n        }\n        scale = 1 / dpr;\n    }\n    //\u4e3ahtml\u6807\u7b7e\u6dfb\u52a0data-dpr\u5c5e\u6027\n    docEl.setAttribute('data-dpr', dpr);\n    if (!metaEl) {\n        metaEl = doc.createElement('meta');\n        metaEl.setAttribute('name', 'viewport');\n        // \u52a8\u6001\u8bbe\u7f6emeta\n        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');\n        if (docEl.firstElementChild) {\n            docEl.firstElementChild.appendChild(metaEl);\n        } else {\n            var wrap = doc.createElement('div');\n            wrap.appendChild(metaEl);\n            doc.write(wrap.innerHTML);\n        }\n    }\n\n    //\u6839\u636edpr\u548c\u7269\u7406\u50cf\u7d20\u8bbe\u7f6erem\n    function refreshRem(){\n        //getBoundingClientRect().width\u76f8\u5f53\u4e8e\u7269\u7406\u50cf\u7d20\n        var width = docEl.getBoundingClientRect().width;\n        // width / dpr > 540\u7b49\u4e8e\u72ec\u7acb\u50cf\u7d20\n        if (width / dpr > 540) {\n            width = 540 * dpr;\n        }\n        var rem = width / 10;   // \u5c06\u5c4f\u5e55\u5bbd\u5ea6\u5206\u621010\u4efd\uff0c 1\u4efd\u4e3a1rem.  rem\u8f6c\u5316px\u8ba1\u7b97\u516c\u5f0f=d*(width/10)\n        docEl.style.fontSize = rem + 'px';\n        flexible.rem = win.rem = rem;\n    }\n    // \u76d1\u542c\u7a97\u53e3\u53d8\u5316\uff0c\u91cd\u65b0\u8bbe\u7f6e\u5c3a\u5bf8\n    win.addEventListener('resize', function() {\n        clearTimeout(tid);\n        tid = setTimeout(refreshRem, 300);\n    }, false);\n\n    // \u5f53\u91cd\u65b0\u8f7d\u5165\u9875\u9762\u65f6\uff0c\u5224\u65ad\u662f\u5426\u662f\u7f13\u5b58\uff0c\u5982\u679c\u662f\u7f13\u5b58\uff0c\u6267\u884crefreshRem()\n    win.addEventListener('pageshow', function(e) {\n        if (e.persisted) {\n            clearTimeout(tid);\n            tid = setTimeout(refreshRem, 300);\n        }\n    }, false);\n\n    if (doc.readyState === 'complete') {\n        doc.body.style.fontSize = 12 * dpr + 'px';\n    } else {\n        doc.addEventListener('DOMContentLoaded', function(e) {\n            doc.body.style.fontSize = 12 * dpr + 'px';\n        }, false);\n    }\n\n\n    refreshRem();\n\n    flexible.dpr = win.dpr = dpr;\n    flexible.refreshRem = refreshRem;\n    flexible.rem2px = function(d) {\n        var val = parseFloat(d) * this.rem;\n        if (typeof d === 'string' && d.match(/rem$/)) {\n            val += 'px';\n        }\n        return val;\n    }\n    flexible.px2rem = function(d) {\n        var val = parseFloat(d) / this.rem;\n        if (typeof d === 'string' && d.match(/px$/)) {\n            val += 'rem';\n        }\n        return val;\n    }\n\n})(window, window['lib'] || (window['lib'] = {}));\n<\/script>"]],["p",".umirc.js\u4e2d\u914d\u7f6e"],["pre",{lang:null,highlighted:' extraPostCSSPlugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    <span class="token function">pxToRem</span><span class="token punctuation">(</span>{\n      rootValue<span class="token punctuation">:</span> <span class="token number">37.5</span><span class="token punctuation">,</span>\n      unitPrecision<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n      propWhiteList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      propBlackList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      exclude<span class="token punctuation">:</span><span class="token boolean">false</span><span class="token punctuation">,</span>\n      selectorBlackList<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n      ignoreIdentifier<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      replace<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      mediaQuery<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n      minPixelValue<span class="token punctuation">:</span> <span class="token number">0</span>\n    }<span class="token punctuation">)</span>\n  <span class="token punctuation">]</span><span class="token punctuation">,</span>'},["code"," extraPostCSSPlugins: [\n    pxToRem({\n      rootValue: 37.5,\n      unitPrecision: 5,\n      propWhiteList: [],\n      propBlackList: [],\n      exclude:false,\n      selectorBlackList: [],\n      ignoreIdentifier: false,\n      replace: true,\n      mediaQuery: false,\n      minPixelValue: 0\n    })\n  ],"]]],meta:{title:"postcss-px-to-viewport \u81ea\u9002\u5e94",publishDate:"2019-09-03T00:00:00.000Z",abstract:"postcss-px-to-viewport \u81ea\u9002\u5e94",filename:"posts/\u6280\u672f\u5206\u7c7b/reactjs/\u81ea\u9002\u5e94.md"}}}});