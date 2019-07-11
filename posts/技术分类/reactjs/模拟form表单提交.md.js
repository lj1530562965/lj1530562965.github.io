webpackJsonp([27],{485:function(n,a){n.exports={content:["article",["pre",{lang:null,highlighted:'export function <span class="token function">createRequestForm</span><span class="token punctuation">(</span>datas<span class="token punctuation">,</span> that<span class="token punctuation">)</span> {\n\tlet items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>\n\t<span class="token keyword">if</span> <span class="token punctuation">(</span>datas<span class="token punctuation">.</span>url<span class="token punctuation">)</span> {\n\t\t<span class="token keyword">for</span> <span class="token punctuation">(</span>let p <span class="token keyword">in</span> datas<span class="token punctuation">.</span>params<span class="token punctuation">)</span> {\n\t\t\titems<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>input key<span class="token operator">=</span>{p} type<span class="token operator">=</span><span class="token string">"hidden"</span> name<span class="token operator">=</span>{p} value<span class="token operator">=</span>{datas<span class="token punctuation">.</span>params<span class="token punctuation">[</span>p<span class="token punctuation">]</span>}<span class="token operator">/</span><span class="token operator">></span><span class="token punctuation">)</span>\n\t\t}\n\t\treturn <span class="token punctuation">(</span>\n\t\t\t<span class="token operator">&lt;</span>form key<span class="token operator">=</span>{datas<span class="token punctuation">.</span>formId} ref<span class="token operator">=</span>{unionForm <span class="token operator">=</span><span class="token operator">></span> {\n\t\t\t\tthat<span class="token punctuation">[</span><span class="token string">"_"</span><span class="token operator">+</span>datas<span class="token punctuation">.</span>formId<span class="token punctuation">]</span> <span class="token operator">=</span> unionForm\n\t\t\t}} id<span class="token operator">=</span>{datas<span class="token punctuation">.</span>formId} action<span class="token operator">=</span>{datas<span class="token punctuation">.</span>url}\n\t\t\t      method<span class="token operator">=</span>{datas<span class="token punctuation">.</span>resMethod}\n\t\t\t      target<span class="token operator">=</span><span class="token string">"_self"</span><span class="token operator">></span>\n\t\t\t\t{items}\n\t\t\t<span class="token operator">&lt;</span><span class="token operator">/</span>form<span class="token operator">></span>\n\t\t<span class="token punctuation">)</span>\n\t}\n}\n{realnameData<span class="token operator">?</span>\n    <span class="token function">createRequestForm</span><span class="token punctuation">(</span>{\n            formId<span class="token punctuation">:</span> <span class="token string">\'authForm\'</span><span class="token punctuation">,</span>\n            params<span class="token punctuation">:</span> realnameData<span class="token punctuation">.</span>paraMap<span class="token punctuation">,</span>\n            url<span class="token punctuation">:</span> realnameData<span class="token punctuation">.</span>url<span class="token punctuation">,</span>\n            resMethod<span class="token punctuation">:</span> <span class="token string">\'POST\'</span>\n            }<span class="token punctuation">,</span> this<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token keyword">null</span>\n}\n<span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n    <span class="token keyword">const</span> {realnameData} <span class="token operator">=</span> this<span class="token punctuation">.</span>props<span class="token punctuation">.</span>auth<span class="token comment" spellcheck="true">;</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>realnameData<span class="token operator">&amp;</span><span class="token operator">&amp;</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>realnameData<span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">></span> <span class="token number">0</span><span class="token punctuation">)</span> {\n        this<span class="token punctuation">.</span>_authForm<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    }\n}'},["code",'export function createRequestForm(datas, that) {\n\tlet items = [];\n\tif (datas.url) {\n\t\tfor (let p in datas.params) {\n\t\t\titems.push(<input key={p} type="hidden" name={p} value={datas.params[p]}/>)\n\t\t}\n\t\treturn (\n\t\t\t<form key={datas.formId} ref={unionForm => {\n\t\t\t\tthat["_"+datas.formId] = unionForm\n\t\t\t}} id={datas.formId} action={datas.url}\n\t\t\t      method={datas.resMethod}\n\t\t\t      target="_self">\n\t\t\t\t{items}\n\t\t\t</form>\n\t\t)\n\t}\n}\n{realnameData?\n    createRequestForm({\n            formId: \'authForm\',\n            params: realnameData.paraMap,\n            url: realnameData.url,\n            resMethod: \'POST\'\n            }, this):null\n}\ncomponentDidUpdate() {\n    const {realnameData} = this.props.auth;\n    if (realnameData&&Object.keys(realnameData).length > 0) {\n        this._authForm.submit()\n    }\n}']]],meta:{title:"\u6a21\u62dfform\u8868\u5355\u63d0\u4ea4",publishDate:"2019-07-11T00:00:00.000Z",abstract:"\u6a21\u62dfform\u8868\u5355\u63d0\u4ea4",filename:"posts/\u6280\u672f\u5206\u7c7b/reactjs/\u6a21\u62dfform\u8868\u5355\u63d0\u4ea4.md"}}}});