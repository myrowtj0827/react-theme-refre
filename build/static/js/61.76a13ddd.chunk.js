(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1400:function(e,t,a){"use strict";a.r(t);var l=a(19),n=a(20),c=a(22),r=a(21),m=a(24),o=a(23),i=a(0),s=a.n(i),u=a(851),d=a(93),E=a(96),p=a(262),h=a.n(p),b=a(263),g=a.n(b),x=a(411),k=a.n(x),f=a(162),v=a.n(f),y=a(412),N=a.n(y),C=a(264),w=a.n(C),j=a(224),I=a.n(j),A=a(225),T=a.n(A),S=a(226),q=a.n(S),B=[{src:I.a,altText:"Slide 1",caption:"Slide 1"},{src:T.a,altText:"Slide 2",caption:"Slide 2"},{src:q.a,altText:"Slide 3",caption:"Slide 3"}],F=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(c.a)(this,Object(r.a)(t).call(this,e))).state={activeIndex:0},a.next=a.next.bind(Object(m.a)(a)),a.previous=a.previous.bind(Object(m.a)(a)),a.goToIndex=a.goToIndex.bind(Object(m.a)(a)),a.onExiting=a.onExiting.bind(Object(m.a)(a)),a.onExited=a.onExited.bind(Object(m.a)(a)),a}return Object(o.a)(t,e),Object(n.a)(t,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===B.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?B.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,a=B.map(function(t){return s.a.createElement(d.z,{onExiting:e.onExiting,onExited:e.onExited,key:t.src},s.a.createElement("img",{src:t.src,alt:t.altText}),s.a.createElement(d.w,{captionText:t.caption,captionHeader:t.caption}))});return s.a.createElement(i.Fragment,null,s.a.createElement("h4",{className:"mt-4 mb-0 text-bold-400"},"Basic Cards with Image caps Examples"),s.a.createElement("p",null,"Cards require a small amount of markup and classes to provide you with as much control as possible. These classes and markup are flexible though and can typically be remixed and extended with ease. For example, if your card has no flush content like images, feel free to put the ",s.a.createElement("code",null,".card-block")," class on the"," ",s.a.createElement("code",null,".card")," element to consolidate your markup."),s.a.createElement(d.kb,{className:"row-eq-height"},s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,null,s.a.createElement(d.p,{top:!0,width:"100%",src:h.a,alt:"Card cap"}),s.a.createElement(d.j,null,s.a.createElement(d.u,null,"Card title"),s.a.createElement(d.s,null,"Card subtitle"),s.a.createElement(d.t,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),s.a.createElement(d.e,{className:"btn btn-danger"},"Button")))),s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,null,s.a.createElement(d.j,null,s.a.createElement(d.u,null,"Card title"),s.a.createElement(d.s,null,"Card subtitle"),s.a.createElement(d.t,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),s.a.createElement(d.e,{className:"btn btn-info"},"Button")),s.a.createElement(d.p,{top:!0,width:"100%",src:g.a,alt:"Card cap"}))),s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,null,s.a.createElement(d.j,null,s.a.createElement(d.u,null,"Card title"),s.a.createElement(d.s,null,"Card subtitle")),s.a.createElement(d.p,{top:!0,width:"100%",src:N.a,alt:"Card cap"}),s.a.createElement(d.j,null,s.a.createElement(d.t,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),s.a.createElement(d.e,{className:"btn btn-success"},"Button"))))),s.a.createElement("h4",{className:"mt-4 mb-0 text-bold-400"},"Content Types"),s.a.createElement("p",null,"Cards support a wide variety of content, including images, text, list groups, links, and more. Mix and match multiple content types to create the card you need."),s.a.createElement(d.kb,{className:"row-eq-height"},s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,null,s.a.createElement(d.j,null,s.a.createElement(d.p,{top:!0,width:"100%",src:k.a,alt:"Card cap"}),s.a.createElement(d.u,{className:"mt-3"},"Card title"),s.a.createElement(d.s,null,"Card subtitle"),s.a.createElement(d.t,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),s.a.createElement(d.e,{color:"danger"},"Button")))),s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,null,s.a.createElement(d.j,null,s.a.createElement(d.u,null,"Card title"),s.a.createElement(d.s,null,"Support card subtitle")),s.a.createElement("img",{width:"100%",src:N.a,alt:"Card cap 10"}),s.a.createElement(d.j,null,s.a.createElement(d.t,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),s.a.createElement(d.r,{href:"#"},"Card Link"),s.a.createElement(d.r,{href:"#"},"Another Link")))),s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,null,s.a.createElement(d.j,null,s.a.createElement(d.u,null,"Card title"),s.a.createElement(d.s,null,"Support card subtitle"),s.a.createElement("img",{width:"100%",src:v.a,alt:"Card cap 09",className:"my-4"}),s.a.createElement(d.t,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),s.a.createElement(d.r,{className:"danger",href:"#"},"Card Link"),s.a.createElement(d.r,{className:"danger",href:"#"},"Another Link"))))),s.a.createElement(d.kb,{className:"row-eq-height"},s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,null,s.a.createElement(d.p,{top:!0,width:"100%",src:w.a,alt:"Card cap"}),s.a.createElement(d.j,null,s.a.createElement(d.u,null,"Basic"),s.a.createElement(d.s,null,"Card subtitle"),s.a.createElement(d.t,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),s.a.createElement(d.e,{className:"btn-round",outline:!0,color:"danger"},"Button")))),s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,null,s.a.createElement(d.j,null,s.a.createElement(d.u,null,"LIST GROUP"),s.a.createElement(d.t,null,"Some quick example text to build on the card title and make up the bulk of the card's content.")),s.a.createElement(d.Q,null,s.a.createElement(d.R,null,"Cras justo odio"," ",s.a.createElement(d.b,{className:"float-right",color:"primary"},"7")),s.a.createElement(d.R,null,"Dapibus ac facilisis in"," ",s.a.createElement(d.b,{className:"float-right",color:"success"},"2")),s.a.createElement(d.R,null,"Morbi leo risus"," ",s.a.createElement(d.b,{className:"float-right",color:"danger"},"4")),s.a.createElement(d.R,null,"Porta ac consectetur ac"," ",s.a.createElement(d.b,{className:"float-right",color:"info"},"4"))),s.a.createElement(d.j,null,s.a.createElement(d.r,{className:"info",href:"#"},"Card Link"),s.a.createElement(d.r,{className:"info",href:"#"},"Another Link")))),s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,null,s.a.createElement(d.j,null,s.a.createElement(d.u,null,"CAROUSEL"),s.a.createElement(d.s,null,"Support card subtitle"),s.a.createElement(d.v,{activeIndex:t,next:this.next,previous:this.previous,className:"my-3"},s.a.createElement(d.y,{items:B,activeIndex:t,onClickHandler:this.goToIndex}),a,s.a.createElement(d.x,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),s.a.createElement(d.x,{direction:"next",directionText:"Next",onClickHandler:this.next})),s.a.createElement(d.t,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),s.a.createElement(d.e,{className:"btn-round",outline:!0,color:"danger"},"Button"))))),s.a.createElement("h4",{className:"mt-4 mb-0 text-bold-400"},"Header and footer"),s.a.createElement("p",null,"Add an optional header and/or footer within a card."),s.a.createElement(d.kb,{className:"row-eq-height"},s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,{className:"text-left"},s.a.createElement(d.j,null,s.a.createElement(d.u,null,"Basic Card"),s.a.createElement(d.t,null,"Basic Card With Header & Footer")),s.a.createElement("img",{width:"100%",src:h.a,alt:"Card cap 02"}),s.a.createElement(d.j,null,s.a.createElement(d.t,null,"Bear claw sesame snaps gummies chocolate."),s.a.createElement(d.r,{href:"#"},"Card Link"),s.a.createElement(d.r,{href:"#"},"Another Link")),s.a.createElement(d.m,null,"3 hours ago"," ",s.a.createElement(u.a,{to:"/cards/basic-card",className:"float-right"},"Read More >")))),s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,{className:"text-left"},s.a.createElement(d.j,null,s.a.createElement(d.u,null,"Floating Action Button"),s.a.createElement(d.t,null,"With Header & Footer")),s.a.createElement("div",{className:"card-img"},s.a.createElement("img",{width:"100%",src:v.a,alt:"Card cap 09"}),s.a.createElement(u.a,{to:"/cards/basic-card",className:"btn btn-floating halfway-fab btn-large bg-danger"},s.a.createElement(E.Plus,{size:25,color:"#FFF"}))),s.a.createElement(d.j,null,s.a.createElement(d.t,null,"Bear claw sesame snaps gummies chocolate."),s.a.createElement(d.r,{href:"#"},"Card Link"),s.a.createElement(d.r,{href:"#"},"Another Link")),s.a.createElement(d.m,null,"1 day ago"," ",s.a.createElement(d.b,{className:"float-right",color:"success"},"Technology"),s.a.createElement(d.b,{className:"float-right mr-1",color:"danger"},"Mobile")))),s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,{className:"text-left"},s.a.createElement(d.j,null,s.a.createElement(d.u,null,"Carousel"),s.a.createElement(d.t,null,"Carousel Card With Header & Footer")),s.a.createElement(d.v,{activeIndex:t,next:this.next,previous:this.previous},s.a.createElement(d.y,{items:B,activeIndex:t,onClickHandler:this.goToIndex}),a,s.a.createElement(d.x,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),s.a.createElement(d.x,{direction:"next",directionText:"Next",onClickHandler:this.next})),s.a.createElement(d.j,null,s.a.createElement(d.t,null,"Some quick example text to build on the card title and make up the bulk of the card's content."),s.a.createElement(d.r,{href:"#"},"Card Link"),s.a.createElement(d.r,{href:"#"},"Another Link")),s.a.createElement(d.m,null,"2 day ago"," ",s.a.createElement(d.b,{className:"float-right",color:"success"},"Branding"),s.a.createElement(d.b,{className:"float-right mr-1",color:"danger"},"Design"))))),s.a.createElement("h4",{className:"mt-4 mb-0 text-bold-400"},"Text alignment"),s.a.createElement("p",null,"You can quickly change the text alignment of any card\u2014in its entirety or specific parts\u2014with our text align classes."),s.a.createElement(d.kb,{className:"row-eq-height"},s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,{className:"text-left"},s.a.createElement(d.j,null,s.a.createElement(d.u,{className:"info"},"Text Align Left"),s.a.createElement(d.t,null,"Gummi bears I love oat cake gingerbread donut cotton candy pie biscuit tart. Chocolate cake chocolate cake I love marzipan cookie macaroon. Tart I love I love carrot cake carrot cake chupa chups caramels. Carrot cake pastry cotton candy. Dessert I love brownie biscuit topping I love chocolate cake gingerbread jelly beans. Chocolate cake cake cheesecake. Chocolate cake pastry macaroon."),s.a.createElement(d.e,{color:"info"},"Button")))),s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,{className:"text-center"},s.a.createElement(d.j,null,s.a.createElement(d.u,{className:"danger"},"Text Align Center"),s.a.createElement(d.t,null,"Gummi bears I love oat cake gingerbread donut cotton candy pie biscuit tart. Chocolate cake chocolate cake I love marzipan cookie macaroon. Tart I love I love carrot cake carrot cake chupa chups caramels. Carrot cake pastry cotton candy. Dessert I love brownie biscuit topping I love chocolate cake gingerbread jelly beans. Chocolate cake cake cheesecake. Chocolate cake pastry macaroon."),s.a.createElement(d.e,{color:"danger"},"Button")))),s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,{className:"text-right"},s.a.createElement(d.j,null,s.a.createElement(d.u,{className:"success"},"Text Align Right"),s.a.createElement(d.t,null,"Gummi bears I love oat cake gingerbread donut cotton candy pie biscuit tart. Chocolate cake chocolate cake I love marzipan cookie macaroon. Tart I love I love carrot cake carrot cake chupa chups caramels. Carrot cake pastry cotton candy. Dessert I love brownie biscuit topping I love chocolate cake gingerbread jelly beans. Chocolate cake cake cheesecake. Chocolate cake pastry macaroon."),s.a.createElement(d.e,{color:"success"},"Button"))))),s.a.createElement("h4",{className:"mt-4 mb-0 text-bold-400"},"Sizing"),s.a.createElement("p",null,"Constrain the width of cards via custom CSS, our predefined grid classes, or with custom styles using our grid mixins."),s.a.createElement(d.kb,{className:"row-eq-height"},s.a.createElement(d.A,{sm:"12",md:"6"},s.a.createElement(d.i,null,s.a.createElement(d.j,null,s.a.createElement(d.u,null,"Project Info"),s.a.createElement(d.t,null,"With supporting text below as a natural lead-in to additional content."),s.a.createElement(d.H,null,s.a.createElement("div",{className:"form-body"},s.a.createElement("h4",{className:"form-section"},s.a.createElement(E.User,{size:20,color:"#212529"})," Personal Info"),s.a.createElement(d.kb,null,s.a.createElement(d.A,{md:"6"},s.a.createElement(d.I,null,s.a.createElement(d.K,{type:"text",id:"projectinput1",name:"fname",placeholder:"First Name"}))),s.a.createElement(d.A,{md:"6"},s.a.createElement(d.I,null,s.a.createElement(d.K,{type:"text",id:"projectinput2",name:"lname",placeholder:"Last Name"})))),s.a.createElement(d.kb,null,s.a.createElement(d.A,{md:"6"},s.a.createElement(d.I,null,s.a.createElement(d.K,{type:"text",id:"projectinput3",name:"email",placeholder:"E-mail"}))),s.a.createElement(d.A,{md:"6"},s.a.createElement(d.I,null,s.a.createElement(d.K,{type:"text",id:"projectinput4",name:"phone",placeholder:"Contact Number"})))),s.a.createElement("h4",{className:"form-section"},s.a.createElement(E.CheckCircle,{size:20,color:"#212529"})," Requirements"),s.a.createElement(d.I,null,s.a.createElement(d.K,{type:"text",id:"companyName",name:"company",placeholder:"Company"})),s.a.createElement(d.kb,null,s.a.createElement(d.A,{md:"6"},s.a.createElement(d.I,null,s.a.createElement(d.K,{type:"select",id:"projectinput5",name:"interested"},s.a.createElement("option",{value:"none",defaultValue:!0,disabled:""},"Interested in"),s.a.createElement("option",{value:"design"},"design"),s.a.createElement("option",{value:"development"},"development"),s.a.createElement("option",{value:"illustration"},"illustration"),s.a.createElement("option",{value:"branding"},"branding"),s.a.createElement("option",{value:"video"},"video")))),s.a.createElement(d.A,{md:"6"},s.a.createElement(d.I,null,s.a.createElement(d.K,{type:"select",id:"projectinput6",name:"budget"},s.a.createElement("option",{value:"0",defaultValue:!0,disabled:""},"Budget"),s.a.createElement("option",{value:"less than 5000$"},"less than 5000$"),s.a.createElement("option",{value:"5000$ - 10000$"},"5000$ - 10000$"),s.a.createElement("option",{value:"10000$ - 20000$"},"10000$ - 20000$"),s.a.createElement("option",{value:"more than 20000$"},"more than 20000$"))))),s.a.createElement(d.I,null,s.a.createElement(d.K,{type:"textarea",id:"projectinput8",rows:"5",name:"comment",placeholder:"About Project"}))),s.a.createElement("div",{className:"form-actions text-right"},s.a.createElement(d.e,{color:"warning",className:"mr-1"},s.a.createElement(E.X,{size:20,color:"#FFF"})," Cancel"),s.a.createElement(d.e,{color:"success"},s.a.createElement(E.Check,{size:20,color:"#FFF"})," Save")))))),s.a.createElement(d.A,{sm:"12",md:"6"},s.a.createElement(d.i,null,s.a.createElement(d.j,null,s.a.createElement(d.u,null,"User Profile"),s.a.createElement(d.t,null,"With supporting text below as a natural lead-in to additional content."),s.a.createElement(d.H,null,s.a.createElement("div",{className:"form-body"},s.a.createElement("h4",{className:"form-section"},s.a.createElement(E.User,{size:20,color:"#212529"})," About User"),s.a.createElement(d.kb,null,s.a.createElement(d.A,{md:"6"},s.a.createElement(d.I,null,s.a.createElement(d.K,{type:"text",id:"projectinput1",name:"fname",placeholder:"Name"}))),s.a.createElement(d.A,{md:"6"},s.a.createElement(d.I,null,s.a.createElement(d.K,{type:"text",id:"projectinput2",name:"lname",placeholder:"Company"})))),s.a.createElement(d.kb,null,s.a.createElement(d.A,{md:"6"},s.a.createElement(d.I,null,s.a.createElement(d.K,{type:"text",id:"projectinput3",name:"email",placeholder:"Username"}))),s.a.createElement(d.A,{md:"6"},s.a.createElement(d.I,null,s.a.createElement(d.K,{type:"text",id:"projectinput4",name:"phone",placeholder:"Nick Name"})))),s.a.createElement("h4",{className:"form-section"},s.a.createElement(E.Mail,{size:20,color:"#212529"})," Contact Info & Bio"),s.a.createElement(d.I,null,s.a.createElement(d.K,{type:"email",id:"companyName",name:"company",placeholder:"email"})),s.a.createElement(d.I,null,s.a.createElement(d.K,{type:"url",id:"companyUrl",name:"url",placeholder:"http://"})),s.a.createElement(d.I,null,s.a.createElement(d.K,{type:"textarea",id:"projectinput8",rows:"5",name:"comment",placeholder:"Bio"}))),s.a.createElement("div",{className:"form-actions text-right"},s.a.createElement(d.e,{color:"warning",className:"mr-1"},s.a.createElement(E.X,{size:20,color:"#FFF"})," Cancel"),s.a.createElement(d.e,{color:"success"},s.a.createElement(E.Check,{size:20,color:"#FFF"})," Save"))))))),s.a.createElement("h4",{className:"mt-4 mb-0 text-bold-400"},"Image overlays"),s.a.createElement(d.kb,{className:"row-eq-height"},s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,{inverse:!0},s.a.createElement(d.p,{width:"100%",src:k.a,alt:"Card cap"}),s.a.createElement(d.q,{className:"overlay-danger"},s.a.createElement(d.u,null,"Card Title"),s.a.createElement(d.t,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.")))),s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,{inverse:!0},s.a.createElement(d.p,{width:"100%",src:g.a,alt:"Card cap"}),s.a.createElement(d.q,{className:"overlay-info"},s.a.createElement(d.u,null,"Card Title"),s.a.createElement(d.t,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.")))),s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,{inverse:!0},s.a.createElement(d.p,{width:"100%",src:N.a,alt:"Card cap"}),s.a.createElement(d.q,{className:"overlay-warning"},s.a.createElement(d.u,null,"Card Title"),s.a.createElement(d.t,null,"This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."))))),s.a.createElement("h4",{className:"mt-4 mb-0 text-bold-400"},"Background variants"),s.a.createElement(d.kb,{className:"row-eq-height"},s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,{body:!0,inverse:!0,color:"danger"},s.a.createElement(d.u,null,"Special Title Treatment"),s.a.createElement(d.t,null,"With supporting text below as a natural lead-in to additional content."),s.a.createElement(d.e,{className:"btn btn-raised btn-danger btn-darken-3"},"Buy Now"))),s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,{body:!0,inverse:!0,color:"info"},s.a.createElement(d.u,null,"Special Title Treatment"),s.a.createElement(d.t,null,"With supporting text below as a natural lead-in to additional content."),s.a.createElement(d.e,{className:"btn btn-raised btn-info btn-darken-3"},"Buy Now"))),s.a.createElement(d.A,{sm:"12",md:"4"},s.a.createElement(d.i,{body:!0,inverse:!0,color:"warning"},s.a.createElement(d.u,null,"Special Title Treatment"),s.a.createElement(d.t,null,"With supporting text below as a natural lead-in to additional content."),s.a.createElement(d.e,{className:"btn btn-raised btn-warning btn-darken-3"},"Buy Now")))))}}]),t}(i.Component);t.default=F},162:function(e,t,a){e.exports=a.p+"static/media/09.39215b53.jpg"},224:function(e,t,a){e.exports=a.p+"static/media/12.59d13b93.jpg"},225:function(e,t,a){e.exports=a.p+"static/media/13.f921ea80.jpg"},226:function(e,t,a){e.exports=a.p+"static/media/17.b8f70ccd.jpg"},262:function(e,t,a){e.exports=a.p+"static/media/02.6f364b50.jpg"},263:function(e,t,a){e.exports=a.p+"static/media/06.0b24d35a.jpg"},264:function(e,t,a){e.exports=a.p+"static/media/14.5757a60c.jpg"},411:function(e,t,a){e.exports=a.p+"static/media/08.6d63f216.jpg"},412:function(e,t,a){e.exports=a.p+"static/media/10.4d99c256.jpg"}}]);
//# sourceMappingURL=61.76a13ddd.chunk.js.map