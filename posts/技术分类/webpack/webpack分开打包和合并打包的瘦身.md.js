webpackJsonp([23],{496:function(n,a){n.exports={content:["article",["h2","webpack.config.js"],["pre",{lang:null,highlighted:'  devtool<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>   <span class="token operator">/</span><span class="token operator">/</span>\u4ea7\u54c1\u9636\u6bb5\u4e0d\u5e94\u8be5\u6709devtool\n\n  entry<span class="token punctuation">:</span> {\n    main<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token string">\'@babel/polyfill\'</span><span class="token punctuation">,</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">\'./src/app.js\'</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>               <span class="token operator">/</span><span class="token operator">/</span>\u9879\u76ee\u7684\u5165\u53e3\u6587\u4ef6\n    vendor<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'jquery\'</span><span class="token punctuation">,</span><span class="token string">\'react\'</span><span class="token punctuation">,</span><span class="token string">\'react-dom\'</span><span class="token punctuation">,</span><span class="token string">\'mobx\'</span><span class="token punctuation">,</span><span class="token string">\'mobx-react\'</span><span class="token punctuation">,</span><span class="token string">\'mobx-state-tree\'</span><span class="token punctuation">,</span><span class="token string">\'react-router-dom\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token operator">/</span><span class="token operator">/</span>\u4f60\u9879\u76ee\u4e2d\u7684\u7b2c\u4e09\u65b9\u5e93\n    element_react<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'element-react\'</span><span class="token punctuation">,</span><span class="token string">\'element-theme-default\'</span><span class="token punctuation">]</span>   <span class="token operator">/</span><span class="token operator">/</span>\u4f60\u4f7f\u7528\u7684\u7b2c\u4e09\u65b9UI\u7b49\n  }<span class="token punctuation">,</span>\n  plugins<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n    new webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span><span class="token function">ModuleConcatenationPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token operator">/</span><span class="token operator">/</span>\u666e\u901a\u4f18\u5316\n    new webpack<span class="token punctuation">.</span>optimize<span class="token punctuation">.</span><span class="token function">CommonsChunkPlugin</span><span class="token punctuation">(</span>{    <span class="token operator">/</span><span class="token operator">/</span>\u63d0\u53d6\u7b2c\u4e09\u65b9\u6587\u4ef6\u548centry\u91cc\u5bf9\u5e94\uff0c\u548c\u4e0a\u9762\u7684\u5bf9\u5e94\uff0c\u8fd9\u6837\u6253\u5305\u51fa\u6765\u7684\u4f1a\u628areact\u5168\u5bb6\u6876\u6253\u5305\u6210\u4e00\u4e2a\u6587\u4ef6<span class="token punctuation">,</span>  \u540c\u65f6\u628aelemnet\u6253\u5305\u6210\u4e00\u4e2a\u6587\u4ef6\n      name<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'vendor\'</span><span class="token punctuation">,</span><span class="token string">\'element_react\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> \n      filename<span class="token punctuation">:</span> <span class="token string">\'js/[name]-[chunkhash].js\'</span>\n    }<span class="token punctuation">)</span><span class="token punctuation">,</span>'},["code","  devtool: false,   //\u4ea7\u54c1\u9636\u6bb5\u4e0d\u5e94\u8be5\u6709devtool\n\n  entry: {\n    main:['@babel/polyfill',path.resolve(__dirname, './src/app.js')],               //\u9879\u76ee\u7684\u5165\u53e3\u6587\u4ef6\n    vendor: ['jquery','react','react-dom','mobx','mobx-react','mobx-state-tree','react-router-dom'],  //\u4f60\u9879\u76ee\u4e2d\u7684\u7b2c\u4e09\u65b9\u5e93\n    element_react: ['element-react','element-theme-default']   //\u4f60\u4f7f\u7528\u7684\u7b2c\u4e09\u65b9UI\u7b49\n  },\n  plugins: [\n    new webpack.optimize.ModuleConcatenationPlugin(),  //\u666e\u901a\u4f18\u5316\n    new webpack.optimize.CommonsChunkPlugin({    //\u63d0\u53d6\u7b2c\u4e09\u65b9\u6587\u4ef6\u548centry\u91cc\u5bf9\u5e94\uff0c\u548c\u4e0a\u9762\u7684\u5bf9\u5e94\uff0c\u8fd9\u6837\u6253\u5305\u51fa\u6765\u7684\u4f1a\u628areact\u5168\u5bb6\u6876\u6253\u5305\u6210\u4e00\u4e2a\u6587\u4ef6,  \u540c\u65f6\u628aelemnet\u6253\u5305\u6210\u4e00\u4e2a\u6587\u4ef6\n      name: ['vendor','element_react'], \n      filename: 'js/[name]-[chunkhash].js'\n    }),"]]],meta:{title:"webpack\u5206\u5f00\u6253\u5305\u548c\u5408\u5e76\u6253\u5305\u7684\u7626\u8eab",publishDate:"2019-07-05T00:00:00.000Z",abstract:"webpack\u5206\u5f00\u6253\u5305\u548c\u5408\u5e76\u6253\u5305\u7684\u7626\u8eab",filename:"posts/\u6280\u672f\u5206\u7c7b/webpack/webpack\u5206\u5f00\u6253\u5305\u548c\u5408\u5e76\u6253\u5305\u7684\u7626\u8eab.md"}}}});