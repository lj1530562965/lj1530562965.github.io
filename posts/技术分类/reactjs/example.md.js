webpackJsonp([21],{476:function(n,a){n.exports={content:["article",["h2","\u6570\u636e\u672a\u8fd4\u56de\u524d\u4e00\u76f4\u663e\u793a\u6b63\u5728\u52a0\u8f7d\u4e2d"],["pre",{lang:null,highlighted:'let animating <span class="token operator">=</span> loading<span class="token punctuation">.</span>effects<span class="token punctuation">[</span>`${modelName}<span class="token operator">/</span>schedulequery`<span class="token punctuation">]</span><span class="token comment" spellcheck="true">;</span>\n     <span class="token function">if</span><span class="token punctuation">(</span>animating!<span class="token operator">==</span><span class="token boolean">false</span><span class="token punctuation">)</span>{\n        <span class="token function">return</span><span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>ActivityIndicator\n            animating<span class="token operator">=</span>{animating <span class="token operator">==</span><span class="token operator">=</span> undefined <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token punctuation">:</span> animating}\n            toast\n            text<span class="token operator">=</span>{<span class="token string">"\u52a0\u8f7d\u4e2d..."</span>}<span class="token operator">/</span><span class="token operator">></span>\n        <span class="token punctuation">)</span>\n    }'},["code",'let animating = loading.effects[`${modelName}/schedulequery`];\n     if(animating!==false){\n        return(\n            <ActivityIndicator\n            animating={animating === undefined ? false : animating}\n            toast\n            text={"\u52a0\u8f7d\u4e2d..."}/>\n        )\n    }']],["h2","react\u542f\u52a8\u5f88\u5361\uff0c\u542f\u52a8\u9879\u4e0a\u52a0SOCKET_SERVER=none"],["pre",{lang:null,highlighted:'   <span class="token string">"start"</span><span class="token punctuation">:</span> <span class="token string">"cross-env NODE_ENV=start SOCKET_SERVER=none roadhog server"</span><span class="token punctuation">,</span>'},["code",'   "start": "cross-env NODE_ENV=start SOCKET_SERVER=none roadhog server",']],["h2","\u6e32\u67d3html\u6807\u7b7e"],["p","This is a button:"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Primary<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span><span class="token punctuation">></span></span>Default<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dashed<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Dashed<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Danger<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>link<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode<span class="token punctuation">,</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code",'import { Button } from \'antd\';\n\nReactDOM.render(\n  <div>\n    <Button type="primary">Primary</Button>\n    <Button>Default</Button>\n    <Button type="dashed">Dashed</Button>\n    <Button type="danger">Danger</Button>\n    <Button type="link">Link</Button>\n  </div>,\n  mountNode,\n);']],["pre",{lang:null,highlighted:'import React<span class="token punctuation">,</span> {PureComponent} from <span class="token string">\'react\'</span><span class="token comment" spellcheck="true">;</span>\nexport <span class="token keyword">default</span> class Docs extends PureComponent {\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> {\n    <span class="token function">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    this<span class="token punctuation">.</span>state<span class="token operator">=</span>{\n        data<span class="token punctuation">:</span> props<span class="token punctuation">.</span>data\n    }\n  }\n  <span class="token keyword">static</span> defaultProps <span class="token operator">=</span> {\n    data<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  }\n\n  <span class="token keyword">static</span> propTypes <span class="token operator">=</span> {\n\n  }\n  <span class="token function">UNSAFE_componentWillReceiveProps</span><span class="token punctuation">(</span>nextProps<span class="token punctuation">)</span> {\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>nextProps<span class="token punctuation">[</span><span class="token string">"data"</span><span class="token punctuation">]</span> !<span class="token operator">==</span> this<span class="token punctuation">.</span>props<span class="token punctuation">[</span><span class="token string">"data"</span><span class="token punctuation">]</span><span class="token punctuation">)</span> {\n        this<span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span>{\n            <span class="token string">"data"</span><span class="token punctuation">:</span> nextProps<span class="token punctuation">[</span><span class="token string">"data"</span><span class="token punctuation">]</span>\n        }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n}\n    <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n        let {data} <span class="token operator">=</span> this<span class="token punctuation">.</span>state<span class="token comment" spellcheck="true">;</span>\n        return <span class="token punctuation">(</span>\n            <span class="token operator">&lt;</span>div className<span class="token operator">=</span>{styles<span class="token punctuation">[</span><span class="token string">"docs"</span><span class="token punctuation">]</span>} dangerouslySetInnerHTML <span class="token operator">=</span> {{ __html<span class="token punctuation">:</span>data }}<span class="token operator">></span>\n            <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n            <span class="token punctuation">)</span>\n    }\n}'},["code",'import React, {PureComponent} from \'react\';\nexport default class Docs extends PureComponent {\n  constructor(props) {\n    super(props);\n    this.state={\n        data: props.data\n    }\n  }\n  static defaultProps = {\n    data: [],\n  }\n\n  static propTypes = {\n\n  }\n  UNSAFE_componentWillReceiveProps(nextProps) {\n    if (nextProps["data"] !== this.props["data"]) {\n        this.setState({\n            "data": nextProps["data"]\n        });\n    }\n}\n    render() {\n        let {data} = this.state;\n        return (\n            <div className={styles["docs"]} dangerouslySetInnerHTML = {{ __html:data }}>\n            </div>\n            )\n    }\n}']]],meta:{title:"reactjs",publishDate:"2018-12-06T00:00:00.000Z",abstract:"reactjs",filename:"posts/\u6280\u672f\u5206\u7c7b/reactjs/example.md"}}}});