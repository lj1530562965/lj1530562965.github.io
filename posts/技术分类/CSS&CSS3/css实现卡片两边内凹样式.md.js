webpackJsonp([66],{465:function(n,s){n.exports={content:["article",["pre",{lang:null,highlighted:'<span class="token operator">&lt;</span>!DOCTYPE html<span class="token operator">></span>\n<span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>\n<span class="token operator">&lt;</span>head<span class="token operator">></span>\n    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">"Content-Type"</span> content<span class="token operator">=</span>"text<span class="token operator">/</span>html<span class="token comment" spellcheck="true">; charset=UTF-8"></span>\n    <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1,, maximum-scale=1,maximum-scale=1.0,user-scalable=no"</span><span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>\n<span class="token operator">&lt;</span>style<span class="token operator">></span>\n  <span class="token operator">*</span> {\n    margin<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n    padding<span class="token punctuation">:</span> <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n  }\n\n  body {\n    display<span class="token punctuation">:</span> flex<span class="token comment" spellcheck="true">;</span>\n    justify<span class="token operator">-</span>content<span class="token punctuation">:</span> center<span class="token comment" spellcheck="true">;</span>\n    align<span class="token operator">-</span>items<span class="token punctuation">:</span> center<span class="token comment" spellcheck="true">;</span>\n    width<span class="token punctuation">:</span> <span class="token number">100</span>%<span class="token comment" spellcheck="true">;</span>\n    height<span class="token punctuation">:</span> 100vh<span class="token comment" spellcheck="true">;</span>\n    background<span class="token operator">-</span>color<span class="token punctuation">:</span> #f8f8f8<span class="token comment" spellcheck="true">;</span>\n  }\n\n  <span class="token punctuation">.</span>content<span class="token operator">-</span>wrap {\n    position<span class="token punctuation">:</span> relative<span class="token comment" spellcheck="true">;</span>\n    width<span class="token punctuation">:</span> <span class="token number">80</span>%<span class="token comment" spellcheck="true">;</span>\n    height<span class="token punctuation">:</span> 500px<span class="token comment" spellcheck="true">;</span>\n    background<span class="token operator">-</span>color<span class="token punctuation">:</span> #fff<span class="token comment" spellcheck="true">;</span>\n    box<span class="token operator">-</span>shadow<span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">0</span> 2px 2px lightgray<span class="token comment" spellcheck="true">;</span>\n  }\n\n  <span class="token punctuation">.</span>left<span class="token operator">-</span>icon<span class="token punctuation">:</span><span class="token punctuation">:</span>before<span class="token punctuation">,</span> <span class="token punctuation">.</span>right<span class="token operator">-</span>icon<span class="token punctuation">:</span><span class="token punctuation">:</span>before {\n    position<span class="token punctuation">:</span> absolute<span class="token comment" spellcheck="true">;</span>\n    content<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token comment" spellcheck="true">;</span>\n    top<span class="token punctuation">:</span> 50px<span class="token comment" spellcheck="true">;</span>\n    width<span class="token punctuation">:</span> 40px<span class="token comment" spellcheck="true">;</span>\n    padding<span class="token punctuation">:</span> 20px <span class="token number">0</span><span class="token comment" spellcheck="true">;</span>\n    border<span class="token operator">-</span>radius<span class="token punctuation">:</span> <span class="token number">50</span>%<span class="token comment" spellcheck="true">;</span>\n    box<span class="token operator">-</span>shadow<span class="token punctuation">:</span>  0px 0px 2px 2px lightgray inset<span class="token comment" spellcheck="true">;</span>\n    background<span class="token operator">-</span>color<span class="token punctuation">:</span> #f8f8f8<span class="token comment" spellcheck="true">;</span>\n  }\n  <span class="token punctuation">.</span>left<span class="token operator">-</span>icon<span class="token punctuation">:</span><span class="token punctuation">:</span>before {\n    left<span class="token punctuation">:</span> <span class="token operator">-</span>20px<span class="token comment" spellcheck="true">;</span>\n  }\n  <span class="token punctuation">.</span>right<span class="token operator">-</span>icon<span class="token punctuation">:</span><span class="token punctuation">:</span>before {\n    right<span class="token punctuation">:</span> <span class="token operator">-</span>20px<span class="token comment" spellcheck="true">;</span>\n  }\n  <span class="token punctuation">.</span>left<span class="token operator">-</span>icon<span class="token punctuation">:</span><span class="token punctuation">:</span>after<span class="token punctuation">,</span> <span class="token punctuation">.</span>right<span class="token operator">-</span>icon<span class="token punctuation">:</span><span class="token punctuation">:</span>after {\n    position<span class="token punctuation">:</span> absolute<span class="token comment" spellcheck="true">;</span>\n    top<span class="token punctuation">:</span> 50px<span class="token comment" spellcheck="true">;</span>\n    content<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token comment" spellcheck="true">;</span>\n    width<span class="token punctuation">:</span> 20px<span class="token comment" spellcheck="true">;</span>\n    height<span class="token punctuation">:</span> 40px<span class="token comment" spellcheck="true">;</span>\n    background<span class="token operator">-</span>color<span class="token punctuation">:</span> #f8f8f8<span class="token comment" spellcheck="true">;</span>\n  }\n  <span class="token punctuation">.</span>left<span class="token operator">-</span>icon<span class="token punctuation">:</span><span class="token punctuation">:</span>after {\n    left<span class="token punctuation">:</span> <span class="token operator">-</span>22px<span class="token comment" spellcheck="true">;</span>\n  }\n  <span class="token punctuation">.</span>right<span class="token operator">-</span>icon<span class="token punctuation">:</span><span class="token punctuation">:</span>after {\n    right<span class="token punctuation">:</span> <span class="token operator">-</span>22px<span class="token comment" spellcheck="true">;</span>\n  }\n  <span class="token punctuation">.</span>center<span class="token operator">-</span>line{\n    position<span class="token punctuation">:</span> absolute<span class="token comment" spellcheck="true">;</span>\n    left<span class="token punctuation">:</span> 35px<span class="token comment" spellcheck="true">;</span>\n    height<span class="token punctuation">:</span> 1px<span class="token comment" spellcheck="true">;</span>\n    top<span class="token punctuation">:</span> 65px<span class="token comment" spellcheck="true">;</span>\n    border<span class="token operator">-</span>bottom<span class="token punctuation">:</span> 1px dashed red<span class="token comment" spellcheck="true">;</span>\n    right<span class="token punctuation">:</span> 35px<span class="token comment" spellcheck="true">;</span>\n  }\n<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>\n<span class="token operator">&lt;</span>body<span class="token operator">></span>\n<span class="token operator">&lt;</span>div class<span class="token operator">=</span><span class="token string">"content-wrap"</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>div class<span class="token operator">=</span><span class="token string">"left-icon"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div class<span class="token operator">=</span><span class="token string">"center-line"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n    <span class="token operator">&lt;</span>div class<span class="token operator">=</span><span class="token string">"right-icon"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>'},["code",'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1,, maximum-scale=1,maximum-scale=1.0,user-scalable=no">\n</head>\n<style>\n  * {\n    margin: 0;\n    padding: 0;\n  }\n\n  body {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 100vh;\n    background-color: #f8f8f8;\n  }\n\n  .content-wrap {\n    position: relative;\n    width: 80%;\n    height: 500px;\n    background-color: #fff;\n    box-shadow: 0 0 2px 2px lightgray;\n  }\n\n  .left-icon::before, .right-icon::before {\n    position: absolute;\n    content: \'\';\n    top: 50px;\n    width: 40px;\n    padding: 20px 0;\n    border-radius: 50%;\n    box-shadow:  0px 0px 2px 2px lightgray inset;\n    background-color: #f8f8f8;\n  }\n  .left-icon::before {\n    left: -20px;\n  }\n  .right-icon::before {\n    right: -20px;\n  }\n  .left-icon::after, .right-icon::after {\n    position: absolute;\n    top: 50px;\n    content: \'\';\n    width: 20px;\n    height: 40px;\n    background-color: #f8f8f8;\n  }\n  .left-icon::after {\n    left: -22px;\n  }\n  .right-icon::after {\n    right: -22px;\n  }\n  .center-line{\n    position: absolute;\n    left: 35px;\n    height: 1px;\n    top: 65px;\n    border-bottom: 1px dashed red;\n    right: 35px;\n  }\n</style>\n<body>\n<div class="content-wrap">\n    <div class="left-icon"></div>\n    <div class="center-line"></div>\n    <div class="right-icon"></div>\n  </div>\n</body>\n</html>']],["pre",{lang:null,highlighted:'<span class="token operator">&lt;</span>!DOCTYPE html<span class="token operator">></span>\n<span class="token operator">&lt;</span>html<span class="token operator">></span>\n<span class="token operator">&lt;</span>head lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>meta http<span class="token operator">-</span>equiv<span class="token operator">=</span><span class="token string">"X-UA-Compatible"</span> content<span class="token operator">=</span><span class="token string">"IE=edge"</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>meta content<span class="token operator">=</span><span class="token string">"yes"</span> name<span class="token operator">=</span><span class="token string">"apple-mobile-web-app-capable"</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>meta content<span class="token operator">=</span><span class="token string">"yes"</span> name<span class="token operator">=</span><span class="token string">"apple-touch-fullscreen"</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>meta content<span class="token operator">=</span><span class="token string">"telephone=no,email=no"</span> name<span class="token operator">=</span><span class="token string">"format-detection"</span><span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span>\n<span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/javascript"</span><span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n<span class="token operator">&lt;</span>style<span class="token operator">></span>\n<span class="token punctuation">.</span>raidal {\n    height<span class="token punctuation">:</span> 100px<span class="token comment" spellcheck="true">;</span>\n    width<span class="token punctuation">:</span> 100px<span class="token comment" spellcheck="true">;</span>\n    background<span class="token punctuation">:</span>radial<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>200px at left top<span class="token punctuation">,</span>transparent <span class="token number">50</span>%<span class="token punctuation">,</span>blue <span class="token number">50</span>%<span class="token punctuation">)</span><span class="token punctuation">,</span>radial<span class="token operator">-</span><span class="token function">gradient</span><span class="token punctuation">(</span>200px at right top<span class="token punctuation">,</span>transparent <span class="token number">50</span>%<span class="token punctuation">,</span>blue <span class="token number">50</span>%<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n}\n\n<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>\n<span class="token operator">&lt;</span>body<span class="token operator">></span>\n<span class="token operator">&lt;</span>div class<span class="token operator">=</span><span class="token string">\'raidal\'</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span>\n\n<span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span>'},["code",'<!DOCTYPE html>\n<html>\n<head lang="en">\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta content="yes" name="apple-mobile-web-app-capable">\n    <meta content="yes" name="apple-touch-fullscreen">\n    <meta content="telephone=no,email=no" name="format-detection">\n</head>\n<script type="text/javascript">\n<\/script>\n<style>\n.raidal {\n    height: 100px;\n    width: 100px;\n    background:radial-gradient(200px at left top,transparent 50%,blue 50%),radial-gradient(200px at right top,transparent 50%,blue 50%);\n}\n\n</style>\n<body>\n<div class=\'raidal\'></div>\n</body>\n\n</html>']]],meta:{title:"css\u5b9e\u73b0\u5361\u7247\u4e24\u8fb9\u5185\u51f9\u6837\u5f0f",publishDate:"2019-06-18T00:00:00.000Z",abstract:"css\u5b9e\u73b0\u5361\u7247\u4e24\u8fb9\u5185\u51f9\u6837\u5f0f",filename:"posts/\u6280\u672f\u5206\u7c7b/CSS&CSS3/css\u5b9e\u73b0\u5361\u7247\u4e24\u8fb9\u5185\u51f9\u6837\u5f0f.md"}}}});