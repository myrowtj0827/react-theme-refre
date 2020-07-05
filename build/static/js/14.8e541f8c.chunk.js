(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{1431:function(e,t,a){"use strict";a.r(t);var n=a(19),c=a(20),r=a(22),l=a(21),s=a(23),i=a(0),o=a.n(i),m=a(14),u=a(93),h=a(851),p=function(e){var t=e.onClick,a=e.contactName,n=e.chatExcerpt,c=e.time,r=e.thumb;return o.a.createElement(h.a,{to:"/chat",className:"list-group-item no-border",onClick:t},o.a.createElement(u.U,null,o.a.createElement(u.U,{left:!0},o.a.createElement(u.U,{object:!0,src:r,alt:"Generic placeholder image",className:"media-object d-flex mr-3 bg-primary height-50 rounded-circle"})),o.a.createElement(u.U,{body:!0},o.a.createElement("h6",{className:"list-group-item-heading"},a,o.a.createElement("span",{className:"font-small-3 float-right primary"},c)),o.a.createElement("p",{className:"list-group-item-text text-muted"},o.a.createElement("i",{className:"ft-check primary font-small-2"})," ",n," ",o.a.createElement("span",{className:"float-right primary"},o.a.createElement("i",{className:"font-medium-1 icon-pin blue-grey lighten-3"}))))))},d=function(e){var t=e.chats,a=e.openChat;return o.a.createElement("div",{className:"list-group position-relative",id:"users-list"},o.a.createElement("div",{className:"users-list-padding"},t.map(function(e){return o.a.createElement(p,Object.assign({key:e.id},e,{onClick:function(){return a(e.id)},thumb:e.thumb,contactName:e.name,chatExcerpt:e.excerpt}))})))},f=Object(m.connect)(function(e){return{chats:(t=e.chatApp.chats,a=e.chatApp.chatSearch,""!==a?t.filter(function(e){return e.name.toLocaleLowerCase().includes(a.toLocaleLowerCase())}):t)};var t,a},function(e){return{openChat:function(t){return e(function(e){return{type:"OPEN_CHAT",id:e}}(t))}}})(d),E=a(96),b=function(e){var t=e.onChange,a=e.searchTerm;return o.a.createElement("div",{className:"chat-fixed-search p-2"},o.a.createElement(u.H,null,o.a.createElement("div",{className:"position-relative has-icon-left"},o.a.createElement(u.K,{className:"form-control",id:"searchUser",name:"searchUser",type:"text",onChange:function(e){return t(e.target.value)},value:a}),o.a.createElement("div",{className:"form-control-position"},o.a.createElement(E.User,{size:16})))))},g=Object(m.connect)(function(e){return{searchTerm:e.chatApp.chatSearch}},function(e){return{onChange:function(t){return e(function(e){return{type:"FILTER_CHAT",searchTerm:e}}(t))}}})(b),v=a(111),N=a.n(v),y=a(302),C=a.n(y),j=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.chatDetails;return o.a.createElement("div",null,o.a.createElement("div",{className:"chat-name p-2 bg-white"},o.a.createElement("div",{className:"media"},o.a.createElement("span",{className:"chat-app-sidebar-toggle ft-align-justify font-large-1 mr-2 d-none d-block d-sm-block d-md-none"}),o.a.createElement("div",{className:"media-body"},o.a.createElement("img",{src:t.thumb,width:"37",className:"rounded-circle mr-1",alt:"avatar"}),o.a.createElement("span",null,t.name),o.a.createElement(E.MoreVertical,{size:18,className:"ft-more-vertical float-right mt-1"})))),o.a.createElement(N.a,{containerRef:function(t){e.chatScrollHandler=t}},o.a.createElement("section",{className:"chat-app-window"},o.a.createElement("div",{className:"badge badge-dark mb-1"},"Chat History"),o.a.createElement("div",{className:"chats"},Object.keys(t.chatHistory).map(function(e){return Object.keys(t.chatHistory[e]).map(function(a){return Object.keys(t.chatHistory[e][a]).map(function(n){return"from"===n?o.a.createElement("div",{className:"chat chat-left",key:n},o.a.createElement("div",{className:"chat-avatar"},o.a.createElement("img",{src:t.thumb,className:"width-50 rounded-circle",alt:"avatar"})),o.a.createElement("div",{className:"chat-body"},t.chatHistory[e][a][n].map(function(e){return o.a.createElement("div",{className:"chat-content",key:e},o.a.createElement("p",null,e))}))):o.a.createElement("div",{className:"chat",key:n},o.a.createElement("div",{className:"chat-avatar"},o.a.createElement("img",{src:C.a,className:"width-50 rounded-circle",alt:"avatar"})),o.a.createElement("div",{className:"chat-body"},t.chatHistory[e][a][n].map(function(e){return o.a.createElement("div",{className:"chat-content",key:e},o.a.createElement("p",null,e))})))})})})))))}}]),t}(i.Component),k=Object(m.connect)(function(e){return{chatDetails:e.chatApp.chats[e.chatApp.chatContent-1]}})(j),O=function(e){function t(){var e,a;Object(n.a)(this,t);for(var c=arguments.length,s=new Array(c),i=0;i<c;i++)s[i]=arguments[i];return(a=Object(r.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(s)))).state={msg:""},a.handleChatMsgChange=function(e){a.setState({msg:e.target.value})},a.onChatMsgSubmit=function(e){e.preventDefault(),e.stopPropagation(),a.props.onClick(a.props.id,a.state.msg),a.setState({msg:""})},a}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("section",{className:"chat-app-form bg-blue-grey bg-lighten-5"},o.a.createElement(u.H,{className:"chat-app-input row",onSubmit:this.onChatMsgSubmit},o.a.createElement("fieldset",{className:"col-lg-10 col-8 m-0"},o.a.createElement(u.K,{type:"text",className:"form-control",id:"iconLeft4",placeholder:"Type your message",onChange:this.handleChatMsgChange,value:this.state.msg}),o.a.createElement("div",{className:"form-control-position control-position-right"},o.a.createElement(E.Image,{size:18}))),o.a.createElement("fieldset",{className:"form-group position-relative has-icon-left col-lg-2 col-4 m-0"},o.a.createElement("button",{type:"button",className:"btn btn-raised btn-primary",onClick:function(){e.props.onClick(e.props.id,e.state.msg),e.setState({msg:""})}},o.a.createElement("i",{className:"fa fa-paper-plane-o hidden-lg-up"})," Send"))))}}]),t}(i.Component),w=Object(m.connect)(function(e){return{id:e.chatApp.chatContent}},function(e){return{onClick:function(t,a){return e(function(e,t){return{type:"SEND_MSG",id:e,chatMsg:t}}(t,a))}}})(O),S=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement(i.Fragment,null,o.a.createElement("div",{className:"chat-application"},o.a.createElement("div",{className:"content-overlay"}),o.a.createElement("div",{className:"chat-sidebar float-left d-none d-sm-none d-md-block d-lg-block"},o.a.createElement(N.a,null,o.a.createElement("div",{className:"chat-sidebar-content"},o.a.createElement(g,null),o.a.createElement(f,null)))),o.a.createElement(k,null),o.a.createElement(w,null)))}}]),t}(i.Component);t.default=S}}]);
//# sourceMappingURL=14.8e541f8c.chunk.js.map