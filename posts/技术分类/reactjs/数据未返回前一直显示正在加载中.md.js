webpackJsonp([29],{485:function(n,a){n.exports={content:["article",["h2","\u6570\u636e\u672a\u8fd4\u56de\u524d\u4e00\u76f4\u663e\u793a\u6b63\u5728\u52a0\u8f7d\u4e2d"],["pre",{lang:null,highlighted:'let { loading } <span class="token operator">=</span> this<span class="token punctuation">.</span>props<span class="token comment" spellcheck="true">;</span>\nlet animating <span class="token operator">=</span> loading<span class="token punctuation">.</span>effects<span class="token punctuation">[</span>`${modelName}<span class="token operator">/</span>schedulequery`<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>\n     <span class="token function">if</span><span class="token punctuation">(</span>animating!<span class="token operator">==</span><span class="token boolean">false</span><span class="token punctuation">)</span>{\n        <span class="token function">return</span><span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>ActivityIndicator\n            animating<span class="token operator">=</span>{animating <span class="token operator">==</span><span class="token operator">=</span> undefined <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token punctuation">:</span> animating}\n            toast\n            text<span class="token operator">=</span>{<span class="token string">"\u52a0\u8f7d\u4e2d..."</span>}<span class="token operator">/</span><span class="token operator">></span>\n        <span class="token punctuation">)</span>\n    }\nexport <span class="token keyword">default</span> <span class="token function">connect</span><span class="token punctuation">(</span><span class="token punctuation">(</span>{loading<span class="token punctuation">,</span>cert}<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>{\n  loading<span class="token punctuation">,</span>\n\tcert<span class="token punctuation">,</span>\n}<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">(</span>Certresult<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code",'let { loading } = this.props;\nlet animating = loading.effects[`${modelName}/schedulequery`];\n     if(animating!==false){\n        return(\n            <ActivityIndicator\n            animating={animating === undefined ? false : animating}\n            toast\n            text={"\u52a0\u8f7d\u4e2d..."}/>\n        )\n    }\nexport default connect(({loading,cert}) => ({\n  loading,\n\tcert,\n}))(Certresult);']]],meta:{title:"\u6570\u636e\u672a\u8fd4\u56de\u524d\u4e00\u76f4\u663e\u793a\u6b63\u5728\u52a0\u8f7d\u4e2d",publishDate:"2019-07-11T00:00:00.000Z",abstract:"\u6570\u636e\u672a\u8fd4\u56de\u524d\u4e00\u76f4\u663e\u793a\u6b63\u5728\u52a0\u8f7d\u4e2d",filename:"posts/\u6280\u672f\u5206\u7c7b/reactjs/\u6570\u636e\u672a\u8fd4\u56de\u524d\u4e00\u76f4\u663e\u793a\u6b63\u5728\u52a0\u8f7d\u4e2d.md"}}}});