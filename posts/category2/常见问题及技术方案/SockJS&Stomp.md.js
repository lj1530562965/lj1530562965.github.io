webpackJsonp([3],{496:function(n,s){n.exports={content:["article",["h2","\u4f7f\u7528SockJS\u5b9e\u73b0webSocket\u901a\u4fe1"],["p","1\u3001\u7b80\u5355\u4ecb\u7ecd\n\u57fa\u4e8ewebSocket\u901a\u4fe1\u7684\u5e93\u4e3b\u8981\u6709 socket.io\uff0cSockJS\uff0c\u8fd9\u6b21\u7528\u7684\u662f SockJS\u3002\n2\u3001\u524d\u63d0\n\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528sockjs-client\u3001stomjs\u8fd9\u4e24\u4e2a\u6a21\u5757\uff0c\u8981\u5b9e\u73b0webSocket\u901a\u4fe1\uff0c\u9700\u8981\u540e\u53f0\u914d\u5408\uff0c\u4e5f\u4f7f\u7528\u76f8\u5e94\u7684\u6a21\u5757\u3002\nsockjs-client\nsockjs-client\u662f\u4eceSockJS\u4e2d\u5206\u79bb\u51fa\u6765\u7684\u7528\u4e8e\u5ba2\u6237\u7aef\u4f7f\u7528\u7684\u901a\u4fe1\u6a21\u5757.\u6240\u4ee5\u6211\u4eec\u5c31\u76f4\u63a5\u6765\u770b\u770bSockJS. SockJS\u662f\u4e00\u4e2a\u6d4f\u89c8\u5668\u7684JavaScript\u5e93,\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7c7b\u4f3c\u4e8e\u7f51\u7edc\u7684\u5bf9\u8c61,SockJS\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8fde\u8d2f\u7684,\u8de8\u6d4f\u89c8\u5668\u7684JavaScriptAPI,\u5b83\u5728\u6d4f\u89c8\u5668\u548cWeb\u670d\u52a1\u5668\u4e4b\u95f4\u521b\u5efa\u4e86\u4e00\u4e2a\u4f4e\u5ef6\u8fdf,\u5168\u53cc\u5de5,\u8de8\u57df\u901a\u4fe1\u901a\u9053. \u4f60\u53ef\u80fd\u4f1a\u95ee,\u6211\u4e3a\u4ec0\u4e48\u4e0d\u76f4\u63a5\u7528\u539f\u751f\u7684WebSocket\u800c\u8981\u4f7f\u7528SockJS\u5462?\u8fd9\u5f97\u76ca\u4e8eSockJS\u7684\u4e00\u5927\u7279\u6027,\u4e00\u4e9b\u6d4f\u89c8\u5668\u4e2d\u7f3a\u5c11\u5bf9WebSocket\u7684\u652f\u6301,\u56e0\u6b64\uff0c\u56de\u9000\u9009\u9879\u662f\u5fc5\u8981\u7684\uff0c\u800cSpring\u6846\u67b6\u63d0\u4f9b\u4e86\u57fa\u4e8eSockJS\u534f\u8bae\u7684\u900f\u660e\u7684\u56de\u9000\u9009\u9879\u3002SockJS\u63d0\u4f9b\u4e86\u6d4f\u89c8\u5668\u517c\u5bb9\u6027,\u4f18\u5148\u4f7f\u7528\u539f\u751f\u7684WebSocket,\u5982\u679c\u67d0\u4e2a\u6d4f\u89c8\u5668\u4e0d\u652f\u6301WebSocket,SockJS\u4f1a\u81ea\u52a8\u964d\u7ea7\u4e3a\u8f6e\u8be2.\nstomjs\nSTOMP(Simple Text-Orientated Messaging Protocol) \u9762\u5411\u6d88\u606f\u7684\u7b80\u5355\u6587\u672c\u534f\u8bae;\nWebSocket\u662f\u4e00\u4e2a\u6d88\u606f\u67b6\u6784,\u4e0d\u5f3a\u5236\u4f7f\u7528\u4efb\u4f55\u7279\u5b9a\u7684\u6d88\u606f\u534f\u8bae,\u5b83\u4f9d\u8d56\u4e8e\u5e94\u7528\u5c42\u89e3\u91ca\u6d88\u606f\u7684\u542b\u4e49.\n\u4e0eHTTP\u4e0d\u540c,WebSocket\u662f\u5904\u5728TCP\u4e0a\u975e\u5e38\u8584\u7684\u4e00\u5c42,\u4f1a\u5c06\u5b57\u8282\u6d41\u8f6c\u5316\u4e3a\u6587\u672c/\u4e8c\u8fdb\u5236\u6d88\u606f,\u56e0\u6b64,\u5bf9\u4e8e\u5b9e\u9645\u5e94\u7528\u6765\u8bf4,WebSocket\u7684\u901a\u4fe1\u5f62\u5f0f\u5c42\u7ea7\u8fc7\u4f4e,\u56e0\u6b64\uff0c\u53ef\u4ee5\u5728 WebSocket \u4e4b\u4e0a\u4f7f\u7528STOMP\u534f\u8bae\uff0c\u6765\u4e3a\u6d4f\u89c8\u5668 \u548c server\u95f4\u7684 \u901a\u4fe1\u589e\u52a0\u9002\u5f53\u7684\u6d88\u606f\u8bed\u4e49\u3002\nSTOMP\u4e0eWebSocket \u7684\u5173\u7cfb:"],["p","HTTP\u534f\u8bae\u89e3\u51b3\u4e86web\u6d4f\u89c8\u5668\u53d1\u8d77\u8bf7\u6c42\u4ee5\u53caweb\u670d\u52a1\u5668\u54cd\u5e94\u8bf7\u6c42\u7684\u7ec6\u8282,\u5047\u8bbeHTTP\u534f\u8bae\u4e0d\u5b58\u5728,\u53ea\u80fd\u4f7f\u7528TCP\u5957\u63a5\u5b57\u6765\u7f16\u5199web\u5e94\u7528,\u4f60\u53ef\u80fd\u8ba4\u4e3a\u8fd9\u662f\u4e00\u4ef6\u75af\u72c2\u7684\u4e8b\u60c5;\n\u76f4\u63a5\u4f7f\u7528WebSocket(SockJS)\u5c31\u5f88\u7c7b\u4f3c\u4e8e\u4f7f\u7528TCP\u5957\u63a5\u5b57\u6765\u7f16\u5199web\u5e94\u7528,\u56e0\u4e3a\u6ca1\u6709\u9ad8\u5c42\u534f\u8bae,\u5c31\u9700\u8981\u6211\u4eec\u5b9a\u4e49\u5e94\u7528\u95f4\u53d1\u9001\u6d88\u606f\u7684\u8bed\u4e49,\u8fd8\u9700\u8981\u786e\u4fdd\u8fde\u63a5\u7684\u4e24\u7aef\u90fd\u80fd\u9075\u5faa\u8fd9\u4e9b\u8bed\u4e49;\n\u540cHTTP\u5728TCP\u5957\u63a5\u5b57\u4e0a\u6dfb\u52a0\u8bf7\u6c42-\u54cd\u5e94\u6a21\u578b\u5c42\u4e00\u6837,STOMP\u5728WebSocket\u4e4b\u4e0a\u63d0\u4f9b\u4e86\u4e00\u4e2a\u57fa\u4e8e\u5e27\u7684\u7ebf\u8def\u683c\u5f0f\u5c42,\u7528\u6765\u5b9a\u4e49\u6d88\u606f\u8bed\u4e49."],["p","3\u3001\u4ee3\u7801\n\u5148\u5b89\u88c5 sockjs-client \u548c stompjs"],["pre",{lang:null,highlighted:'npm install sockjs<span class="token operator">-</span>client\nnpm install stompjs'},["code","npm install sockjs-client\nnpm install stompjs"]],["pre",{lang:null,highlighted:'import SockJS from  <span class="token string">\'sockjs-client\'</span><span class="token comment" spellcheck="true">;</span>\nimport  Stomp from <span class="token string">\'stompjs\'</span><span class="token comment" spellcheck="true">;</span>\nexport <span class="token keyword">default</span> {\n    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span>{\n        return {\n            stompClient<span class="token punctuation">:</span><span class="token string">\'\'</span><span class="token punctuation">,</span>\n            timer<span class="token punctuation">:</span><span class="token string">\'\'</span><span class="token punctuation">,</span>\n        }\n    }<span class="token punctuation">,</span>\n    methods<span class="token punctuation">:</span>{\n        <span class="token function">initWebSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n            this<span class="token punctuation">.</span><span class="token function">connection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n            let that<span class="token operator">=</span> this<span class="token comment" spellcheck="true">;</span>\n            <span class="token operator">/</span><span class="token operator">/</span> \u65ad\u5f00\u91cd\u8fde\u673a\u5236<span class="token punctuation">,</span>\u5c1d\u8bd5\u53d1\u9001\u6d88\u606f<span class="token punctuation">,</span>\u6355\u83b7\u5f02\u5e38\u53d1\u751f\u65f6\u91cd\u8fde\n            this<span class="token punctuation">.</span>timer <span class="token operator">=</span> <span class="token function">setInterval</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n                try {\n                    that<span class="token punctuation">.</span>stompClient<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n                } catch <span class="token punctuation">(</span>err<span class="token punctuation">)</span> {\n                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"\u65ad\u7ebf\u4e86: "</span> <span class="token operator">+</span> err<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n                    that<span class="token punctuation">.</span><span class="token function">connection</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n                }\n            }<span class="token punctuation">,</span> <span class="token number">5000</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        }<span class="token punctuation">,</span>  \n        <span class="token function">connection</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n            <span class="token operator">/</span><span class="token operator">/</span> \u5efa\u7acb\u8fde\u63a5\u5bf9\u8c61\n            let socket <span class="token operator">=</span> new <span class="token function">SockJS</span><span class="token punctuation">(</span><span class="token string">\'http://10.10.91.4:8081/ws\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n            <span class="token operator">/</span><span class="token operator">/</span> \u83b7\u53d6STOMP\u5b50\u534f\u8bae\u7684\u5ba2\u6237\u7aef\u5bf9\u8c61\n            this<span class="token punctuation">.</span>stompClient <span class="token operator">=</span> Stomp<span class="token punctuation">.</span><span class="token function">over</span><span class="token punctuation">(</span>socket<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n            <span class="token operator">/</span><span class="token operator">/</span> \u5b9a\u4e49\u5ba2\u6237\u7aef\u7684\u8ba4\u8bc1\u4fe1\u606f<span class="token punctuation">,</span>\u6309\u9700\u6c42\u914d\u7f6e\n            let headers <span class="token operator">=</span> {\n                Authorization<span class="token punctuation">:</span><span class="token string">\'\'</span>\n            }\n            <span class="token operator">/</span><span class="token operator">/</span> \u5411\u670d\u52a1\u5668\u53d1\u8d77websocket\u8fde\u63a5\n            this<span class="token punctuation">.</span>stompClient<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span>headers<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n                this<span class="token punctuation">.</span>stompClient<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token string">\'/topic/public\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> { <span class="token operator">/</span><span class="token operator">/</span> \u8ba2\u9605\u670d\u52a1\u7aef\u63d0\u4f9b\u7684\u67d0\u4e2atopic\n                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'\u5e7f\u64ad\u6210\u529f\'</span><span class="token punctuation">)</span>\n                    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;  // msg.body\u5b58\u653e\u7684\u662f\u670d\u52a1\u7aef\u53d1\u9001\u7ed9\u6211\u4eec\u7684\u4fe1\u606f</span>\n                }<span class="token punctuation">,</span>headers<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n                this<span class="token punctuation">.</span>stompClient<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"/app/chat.addUser"</span><span class="token punctuation">,</span>\n                    headers<span class="token punctuation">,</span>\n                    JSON<span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>{sender<span class="token punctuation">:</span> <span class="token string">\'\'</span><span class="token punctuation">,</span>chatType<span class="token punctuation">:</span> <span class="token string">\'JOIN\'</span>}<span class="token punctuation">)</span><span class="token punctuation">,</span>\n                <span class="token punctuation">)</span>   <span class="token operator">/</span><span class="token operator">/</span>\u7528\u6237\u52a0\u5165\u63a5\u53e3\n            }<span class="token punctuation">,</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n                <span class="token operator">/</span><span class="token operator">/</span> \u8fde\u63a5\u53d1\u751f\u9519\u8bef\u65f6\u7684\u5904\u7406\u51fd\u6570\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">\'\u5931\u8d25\'</span><span class="token punctuation">)</span>\n                console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n            }<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        }<span class="token punctuation">,</span>    <span class="token operator">/</span><span class="token operator">/</span>\u8fde\u63a5 \u540e\u53f0\n        <span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> {\n            <span class="token keyword">if</span> <span class="token punctuation">(</span>this<span class="token punctuation">.</span>stompClient<span class="token punctuation">)</span> {\n                this<span class="token punctuation">.</span>stompClient<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n            }\n        }<span class="token punctuation">,</span>  <span class="token operator">/</span><span class="token operator">/</span> \u65ad\u5f00\u8fde\u63a5\n    }<span class="token punctuation">,</span>\n    <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span>{\n        this<span class="token punctuation">.</span><span class="token function">initWebSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }<span class="token punctuation">,</span>\n    beforeDestroy<span class="token punctuation">:</span> function <span class="token punctuation">(</span><span class="token punctuation">)</span> {\n        <span class="token operator">/</span><span class="token operator">/</span> \u9875\u9762\u79bb\u5f00\u65f6\u65ad\u5f00\u8fde\u63a5<span class="token punctuation">,</span>\u6e05\u9664\u5b9a\u65f6\u5668\n        this<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n        <span class="token function">clearInterval</span><span class="token punctuation">(</span>this<span class="token punctuation">.</span>timer<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n    }\n}'},["code","import SockJS from  'sockjs-client';\nimport  Stomp from 'stompjs';\nexport default {\n    data(){\n        return {\n            stompClient:'',\n            timer:'',\n        }\n    },\n    methods:{\n        initWebSocket() {\n            this.connection();\n            let that= this;\n            // \u65ad\u5f00\u91cd\u8fde\u673a\u5236,\u5c1d\u8bd5\u53d1\u9001\u6d88\u606f,\u6355\u83b7\u5f02\u5e38\u53d1\u751f\u65f6\u91cd\u8fde\n            this.timer = setInterval(() => {\n                try {\n                    that.stompClient.send(\"test\");\n                } catch (err) {\n                    console.log(\"\u65ad\u7ebf\u4e86: \" + err);\n                    that.connection();\n                }\n            }, 5000);\n        },  \n        connection() {\n            // \u5efa\u7acb\u8fde\u63a5\u5bf9\u8c61\n            let socket = new SockJS('http://10.10.91.4:8081/ws');\n            // \u83b7\u53d6STOMP\u5b50\u534f\u8bae\u7684\u5ba2\u6237\u7aef\u5bf9\u8c61\n            this.stompClient = Stomp.over(socket);\n            // \u5b9a\u4e49\u5ba2\u6237\u7aef\u7684\u8ba4\u8bc1\u4fe1\u606f,\u6309\u9700\u6c42\u914d\u7f6e\n            let headers = {\n                Authorization:''\n            }\n            // \u5411\u670d\u52a1\u5668\u53d1\u8d77websocket\u8fde\u63a5\n            this.stompClient.connect(headers,() => {\n                this.stompClient.subscribe('/topic/public', (msg) => { // \u8ba2\u9605\u670d\u52a1\u7aef\u63d0\u4f9b\u7684\u67d0\u4e2atopic\n                    console.log('\u5e7f\u64ad\u6210\u529f')\n                    console.log(msg);  // msg.body\u5b58\u653e\u7684\u662f\u670d\u52a1\u7aef\u53d1\u9001\u7ed9\u6211\u4eec\u7684\u4fe1\u606f\n                },headers);\n                this.stompClient.send(\"/app/chat.addUser\",\n                    headers,\n                    JSON.stringify({sender: '',chatType: 'JOIN'}),\n                )   //\u7528\u6237\u52a0\u5165\u63a5\u53e3\n            }, (err) => {\n                // \u8fde\u63a5\u53d1\u751f\u9519\u8bef\u65f6\u7684\u5904\u7406\u51fd\u6570\n                console.log('\u5931\u8d25')\n                console.log(err);\n            });\n        },    //\u8fde\u63a5 \u540e\u53f0\n        disconnect() {\n            if (this.stompClient) {\n                this.stompClient.disconnect();\n            }\n        },  // \u65ad\u5f00\u8fde\u63a5\n    },\n    mounted(){\n        this.initWebSocket();\n    },\n    beforeDestroy: function () {\n        // \u9875\u9762\u79bb\u5f00\u65f6\u65ad\u5f00\u8fde\u63a5,\u6e05\u9664\u5b9a\u65f6\u5668\n        this.disconnect();\n        clearInterval(this.timer);\n    }\n}"]]],meta:{title:"SockJS&Stomp",publishDate:"2019-05-24T00:00:00.000Z",abstract:"SockJS&Stomp",filename:"posts/category2/\u5e38\u89c1\u95ee\u9898\u53ca\u6280\u672f\u65b9\u6848/SockJS&Stomp.md"}}}});