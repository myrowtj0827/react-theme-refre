(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1441:function(e,t,n){"use strict";n.r(t);var a=n(19),r=n(20),c=n(22),s=n(21),l=n(23),i=n(0),o=n.n(i),m=n(94),p=n(97),u=n(93),d=(n(100),n(101),n(102)),h=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(d.PrismCode,{component:"pre",className:"language-javascript"},"\nconst id = x => x\n            ")}}]),t}(o.a.Component),g=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(d.PrismCode,{component:"pre",className:"language-css"},'\ncode[class*="language-"],\npre[class*="language-"] {\n  color: black;\n  /* \u2026\u2026 */\n}\n            ')}}]),t}(o.a.Component),b=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(d.PrismCode,{component:"pre",className:"language-markup"},'\n <!DOCTYPE html>\n <html lang="en">\n   <head>\n     <script>\n       // Just a lil\u2019 script to show off that inline JS gets highlighted\n       window.console && console.log(\'foo\');\n     <\/script>\n     <meta charset="utf-8" />\n     <link rel="shortcut icon" href="favicon.png" />\n     <title>Prism</title>\n     <link rel="stylesheet" href="style.css" />\n     <link rel="stylesheet" href="themes/prism.css" data-noprefix />\n     <script src="prefixfree.min.js"><\/script>\n     <script>var _gaq = [[\'_setAccount\', \'UA-33746269-1\'], [\'_trackPageview\']];<\/script>\n     <script src="http://www.google-analytics.com/ga.js" async><\/script>\n   </head>\n   <body></body>\n </html>\n            ')}}]),t}(o.a.Component),f=function(e){function t(){return Object(a.a)(this,t),Object(c.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return o.a.createElement(i.Fragment,null,o.a.createElement(m.a,null,"Syntax Highlighter"),o.a.createElement("p",null,"Apex React use"," ",o.a.createElement("a",{href:"react-prism",terget:"_blank"},"react-prism")," ","for Syntax Highlighter. Put your code inside"," ",o.a.createElement("code",null,"<PrismCode>")," component, and it will highlight it and wraps it into a ",o.a.createElement("code",null,"<code>")," component:"),o.a.createElement(u.kb,null,o.a.createElement(u.A,{sm:"12"},o.a.createElement(u.i,null,o.a.createElement(u.j,null,o.a.createElement(u.u,null,"JavaScript Example"),o.a.createElement("p",null,"You can use this component for JavaScript code by using ",o.a.createElement("code",null,'<PrismCode component="pre" className="language-javascript">..<PrismCode>')),o.a.createElement(p.a,{TabContent1:o.a.createElement(h,null),TabContent2:o.a.createElement(d.PrismCode,{component:"pre",className:"language-javascript"},' import React from "react";\n\n//Prism\n// eslint-disable-next-line\nimport Prism from "prismjs";  //Include JS\nimport "prismjs/themes/prism-okaidia.css"; //Include CSS\nimport { PrismCode } from "react-prism"; //Prism Component\n\nexport default class Example extends React.Component {\n   render() {\n      return (\n         <PrismCode component="pre" className="language-javascript">\n            {`\n            const id = x => x\n            `}\n         </PrismCode>\n      );\n   }\n}')})))),o.a.createElement(u.A,{sm:"12"},o.a.createElement(u.i,null,o.a.createElement(u.j,null,o.a.createElement(u.u,null,"CSS Example"),o.a.createElement("p",null,"You can use this component for CSS code by using ",o.a.createElement("code",null,'<PrismCode component="pre" className="language-css">..<PrismCode>')),o.a.createElement(p.a,{TabContent1:o.a.createElement(g,null),TabContent2:o.a.createElement(d.PrismCode,{component:"pre",className:"language-javascript"},' import React from "react";\n\n//Prism\n// eslint-disable-next-line\nimport Prism from "prismjs";  //Include JS\nimport "prismjs/themes/prism-okaidia.css"; //Include CSS\nimport { PrismCode } from "react-prism"; //Prism Component\n\nexport default class Example extends React.Component {\n   render() {\n      return (\n         <PrismCode component="pre" className="language-css">\n            {`\n            code[class*="language-"],\n            pre[class*="language-"] {\n               color: black;\n               /* \u2026\u2026 */\n            }\n            `}\n         </PrismCode>\n      );\n   }\n}')})))),o.a.createElement(u.A,{sm:"12"},o.a.createElement(u.i,null,o.a.createElement(u.j,null,o.a.createElement(u.u,null,"HTML Example"),o.a.createElement("p",null,"You can use this component for HTML code by using ",o.a.createElement("code",null,'<PrismCode component="pre" className="language-markup">..<PrismCode>')),o.a.createElement(p.a,{TabContent1:o.a.createElement(b,null),TabContent2:o.a.createElement(d.PrismCode,{component:"pre",className:"language-javascript"},' import React from "react";\n\n//Prism\n// eslint-disable-next-line\nimport Prism from "prismjs";  //Include JS\nimport "prismjs/themes/prism-okaidia.css"; //Include CSS\nimport { PrismCode } from "react-prism"; //Prism Component\n\nexport default class Example extends React.Component {\n   render() {\n      return (\n         <PrismCode component="pre" className="language-markup">\n            {`\n            <!DOCTYPE html>\n            <html lang="en">\n              <head>\n                <script>\n                  // Just a lil\u2019 script to show off that inline JS gets highlighted\n                  window.console && console.log(\'foo\');\n                <\/script>\n                <meta charset="utf-8" />\n                <link rel="shortcut icon" href="favicon.png" />\n                <title>Prism</title>\n                <link rel="stylesheet" href="style.css" />\n                <link rel="stylesheet" href="themes/prism.css" data-noprefix />\n                <script src="prefixfree.min.js"><\/script>\n                <script>var _gaq = [[\'_setAccount\', \'UA-33746269-1\'], [\'_trackPageview\']];<\/script>\n                <script src="http://www.google-analytics.com/ga.js" async><\/script>\n              </head>\n              <body></body>\n            </html>\n            }\n            `}\n         </PrismCode>\n      );\n   }\n}')}))))))}}]),t}(i.Component);t.default=f},94:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){var t=e.className;return r.a.createElement("div",{className:"content-header".concat(void 0===t?"":" ".concat(t))},e.children)}},97:function(e,t,n){"use strict";n.d(t,"a",function(){return g});var a=n(19),r=n(20),c=n(22),s=n(21),l=n(24),i=n(23),o=n(0),m=n.n(o),p=n(96),u=n(93),d=n(13),h=n.n(d),g=function(e){function t(e){var n;return Object(a.a)(this,t),(n=Object(c.a)(this,Object(s.a)(t).call(this,e))).toggle=n.toggle.bind(Object(l.a)(n)),n.state={activeTab:"1"},n}return Object(i.a)(t,e),Object(r.a)(t,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this;return m.a.createElement("div",{className:"nav-tabs-vc"},m.a.createElement(u.Z,{tabs:!0},m.a.createElement(u.ab,null,m.a.createElement(u.bb,{className:h()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},m.a.createElement(p.Eye,{size:18}))),m.a.createElement(u.ab,null,m.a.createElement(u.bb,{className:h()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},m.a.createElement(p.Code,{size:18})))),m.a.createElement(u.lb,{activeTab:this.state.activeTab,className:"px-0"},m.a.createElement(u.mb,{tabId:"1"},m.a.createElement(u.kb,null,m.a.createElement(u.A,{sm:"12"},this.props.TabContent1))),m.a.createElement(u.mb,{tabId:"2"},m.a.createElement(u.kb,null,m.a.createElement(u.A,{sm:"12"},this.props.TabContent2)))))}}]),t}(m.a.Component)}}]);
//# sourceMappingURL=20.3df7593e.chunk.js.map