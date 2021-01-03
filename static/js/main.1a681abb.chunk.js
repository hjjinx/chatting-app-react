(this.webpackJsonpchitchat=this.webpackJsonpchitchat||[]).push([[0],{133:function(t,e,a){},170:function(t,e,a){"use strict";a.r(e);var s=a(4),o=a(0),c=a(11),r=a.n(c),n=a(17),i=(a(133),a(208)),l=a(209),u=a(210),j=a(64),d=a(109),m=a.n(d),h=a(204),b=a(108),O=a.n(b),p=a(107),y=a.n(p),x=function(){var t=Object(n.c)((function(t){return t}));return 0==t.status.socketState?Object(s.jsx)(h.a,{style:{width:35,height:"auto",color:"#ffc107"},title:"Connecting.."}):1==t.status.socketState?Object(s.jsx)("span",{title:"Connected",children:Object(s.jsx)(y.a,{style:{width:35,height:"auto"}})}):2==t.status.socketState?Object(s.jsx)(h.a,{style:{width:35,height:"auto",color:"#dc3545"},title:"Disconnecting.."}):Object(s.jsx)("span",{title:"Error",children:Object(s.jsx)(O.a,{style:{width:35,height:"auto"}})})},f=function(){return Object(s.jsx)(i.a,{position:"static",children:Object(s.jsxs)(l.a,{children:[Object(s.jsx)(u.a,{edge:"start",style:{marginRight:2},color:"inherit","aria-label":"menu",children:Object(s.jsx)(m.a,{})}),Object(s.jsx)(j.a,{variant:"h6",style:{flexGrow:1},children:"Chat"}),Object(s.jsx)(x,{})]})})},g=a(110),v=a(111),k=a(112),R=a(60),w=a(8),S=function(t,e){switch(e.type){case"rooms/list":return Object(w.a)(Object(w.a)({},t),{},{rooms:e.payload});default:return t}},N=function(t,e){switch(e.type){case"status/setSocketState":return Object(w.a)(Object(w.a)({},t),{},{status:Object(w.a)(Object(w.a)({},t.status),{},{socketState:e.payload})});case"status/setSocketId":return Object(w.a)(Object(w.a)({},t),{},{status:Object(w.a)(Object(w.a)({},t.status),{},{socketId:e.payload})});case"status/switchLoader":return Object(w.a)(Object(w.a)({},t),{},{status:Object(w.a)(Object(w.a)({},t.status),{},{loading:e.payload})});case"status/setCurrentRoom":return Object(w.a)(Object(w.a)({},t),{},{status:Object(w.a)(Object(w.a)({},t.status),{},{currentRoom:e.payload})});case"status/currentRoom/setParticipants":return Object(w.a)(Object(w.a)({},t),{},{status:Object(w.a)(Object(w.a)({},t.status),{},{currentRoom:Object(w.a)(Object(w.a)({},t.status.currentRoom),{},{participants:e.payload})})});case"status/currentRoom/setMessages":return Object(w.a)(Object(w.a)({},t),{},{status:Object(w.a)(Object(w.a)({},t.status),{},{currentRoom:Object(w.a)(Object(w.a)({},t.status.currentRoom),{},{messages:e.payload})})});default:return t}},C=function(t,e){switch(e.type){case"alert/error":return Object(w.a)(Object(w.a)({},t),{},{alertData:{type:"error",text:e.payload}});case"alert/clear":return Object(w.a)(Object(w.a)({},t),{},{alertData:{type:"",text:""}});default:return t}},P={alertData:{type:"",text:""},status:{socketState:3,socketId:"",loading:!1,currentRoom:null},rooms:[]};var D=Object(R.b)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,e=arguments.length>1?arguments[1]:void 0;return e.type.startsWith("status")?N(t,e):e.type.startsWith("rooms")?S(t,e):e.type.startsWith("alert")?C(t,e):t})),F=function(){function t(){Object(g.a)(this,t)}return Object(v.a)(t,null,[{key:"registerSocketServerListeners",value:function(){var t=this;this.socket=Object(k.io)("https://hjjinx.live",{port:"80",path:"/api/chat-app/"}),D.dispatch({type:"status/setSocketState",payload:0}),this.socket.on("connect",(function(){D.dispatch({type:"status/setSocketId",payload:t.socket.id}),D.dispatch({type:"status/setSocketState",payload:1})})),this.socket.on("disconnect",(function(){D.dispatch({type:"status/setSocketState",payload:3})})),this.socket.on("room/list",(function(t){D.dispatch({type:"rooms/list",payload:t.rooms})})),this.socket.on("error/roomAlreadyExists",(function(t){D.dispatch({type:"alert/error",payload:"Room Already Exists! Please choose another room name."}),D.dispatch({type:"status/switchLoader",payload:!1}),setTimeout((function(){D.dispatch({type:"alert/clear"})}),2e3)})),this.socket.on("room/joined",(function(t){D.dispatch({type:"status/setCurrentRoom",payload:t.room}),D.dispatch({type:"status/switchLoader",payload:!1})})),this.socket.on("room/participantsUpdate",(function(t){D.dispatch({type:"status/currentRoom/setParticipants",payload:t})})),this.socket.on("room/messagesUpdate",(function(t){D.dispatch({type:"status/currentRoom/setMessages",payload:t})}))}}]),t}();F.socket=void 0,new F;var I=F,L=a(40),E=a(171),T=a(211),B=a(221),M=a(214),J=a(215),A=a(113),H=a.n(A),W=function(){var t=Object(o.useState)(""),e=Object(L.a)(t,2),a=e[0],c=e[1],r=Object(o.useState)(""),i=Object(L.a)(r,2),l=i[0],u=i[1],d=Object(n.b)();return Object(s.jsxs)(E.a,{elevation:3,className:"createRoomForm",children:[Object(s.jsx)(j.a,{variant:"h4",gutterBottom:!0,children:"Create a New Chat Room"}),Object(s.jsxs)(T.a,{className:"createRoomForm-formControl",children:[Object(s.jsx)(B.a,{id:"createRoomForm-name",label:"Your Name",onChange:function(t){return u(t.target.value)},value:l}),Object(s.jsx)(M.a,{id:"createRoomForm-nameHelper",children:"Your name will be displayed to everyone that is in the same room as you."}),Object(s.jsx)(B.a,{style:{marginTop:10},id:"createRoomForm-room",label:"Room Name",value:a,onChange:function(t){return c(t.target.value)}}),Object(s.jsx)(M.a,{id:"createRoomForm-roomHelper",children:"Room name will be displayed in the 'Join a Room' section"}),Object(s.jsx)(J.a,{variant:"contained",color:"primary",className:"createRoomForm-createButton",endIcon:Object(s.jsx)(H.a,{}),onClick:function(){if(""==l||""==a)return d({type:"alert/error",payload:"Please enter both your name and room name"}),void setTimeout((function(){d({type:"alert/clear"})}),2e3);d({type:"status/switchLoader",payload:!0}),I.socket.emit("room/create",{name:l,roomName:a})},children:"Create"})]})]})},Y=a(216),z=a(217),G=a(224),U=a(218),K=a(219),_=a(213),q=a(114),Q=a.n(q),V=a(115),X=a.n(V),Z=function(){var t=Object(o.useState)(""),e=Object(L.a)(t,2),a=e[0],c=e[1],r=Object(n.c)((function(t){return t})),i=Object(n.b)();Object(o.useEffect)((function(){var t=setInterval((function(){var t;null===(t=I.socket)||void 0===t||t.emit("GET_room/list")}),1e3);return function(){clearInterval(t)}}),[]);return Object(s.jsxs)(E.a,{elevation:3,className:"joinRoomForm",children:[Object(s.jsx)(j.a,{variant:"h4",gutterBottom:!0,children:"Join an Existing Chat Room"}),Object(s.jsxs)(T.a,{className:"RoomsList-formControl",style:{marginBottom:10},children:[Object(s.jsx)(B.a,{id:"RoomsList-name",label:"Your Name",onChange:function(t){return c(t.target.value)},value:a}),Object(s.jsx)(M.a,{id:"RoomsList-nameHelper",children:"Your name will be displayed to everyone that is in the same room as you."})]}),Object(s.jsx)(_.a,{className:"joinRoomForm-list",children:r.rooms.length>0?r.rooms.map((function(t){return Object(s.jsx)("div",{className:"joinRoomForm-listItem",children:Object(s.jsxs)(Y.a,{divider:!0,children:[Object(s.jsx)(z.a,{children:Object(s.jsx)(G.a,{})}),Object(s.jsx)(U.a,{title:t.participants.length+" Participants",classes:{secondary:"ListItem-MuiListItemText-secondary"},primary:t.name,secondary:t.participants.map((function(t){return t.name})).reduce((function(t,e){return t+", "+e}))}),Object(s.jsx)(K.a,{title:"Join Room",onClick:function(){if(""==a)return i({type:"alert/error",payload:"Please enter your name"}),void setTimeout((function(){i({type:"alert/clear"})}),2e3);i({type:"status/switchLoader",payload:!0}),I.socket.emit("room/join",{name:a,room:t})},children:Object(s.jsx)(u.a,{edge:"end","aria-label":"comments",children:Object(s.jsx)(Q.a,{})})})]})})})):Object(s.jsxs)("div",{style:{textAlign:"center",marginTop:25},children:[Object(s.jsx)(X.a,{style:{width:100,height:"auto",display:"block",margin:"auto"}})," ",Object(s.jsx)(j.a,{variant:"h5",gutterBottom:!0,style:{margin:"10px 10%"},children:"There are no rooms available. Please create one using the above form"})]})})]})},$=a(223),tt=a(222),et=function(t){return Object(s.jsx)($.a,{open:""!=t.alertData.text,style:{},autoHideDuration:6e3,anchorOrigin:{vertical:"bottom",horizontal:"right"},children:Object(s.jsx)(tt.a,{elevation:6,variant:"filled",severity:"error",children:t.alertData.text})},1)},at=a(225),st=function(){return Object(s.jsx)(at.a,{open:!0,style:{zIndex:1,color:"#fff"},children:Object(s.jsx)(h.a,{color:"inherit"})})},ot=a(77),ct=a(220),rt=a(116),nt=a.n(rt),it=function(t){var e=Object(n.c)((function(t){return t})),a=Object(o.useState)(""),c=Object(L.a)(a,2),r=c[0],i=c[1];return Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:"chatPanel",children:[Object(s.jsxs)("div",{className:"chatPanel-leftPanel",children:[Object(s.jsx)(j.a,{variant:"h5",gutterBottom:!0,style:{margin:"10px auto 5px",textAlign:"center"},children:"Participants"}),Object(s.jsx)(_.a,{className:"chatPanel-participantList",children:t.roomData.participants.map((function(t,e){return Object(s.jsxs)(Y.a,{children:[Object(s.jsx)(ct.a,{children:Object(s.jsx)(nt.a,{style:{fill:t.color,width:27,height:"auto"}})}),Object(s.jsx)(U.a,{primary:t.name,secondary:"Online"})]})}))})]}),Object(s.jsxs)("div",{className:"chatPanel-rightPanel",children:[Object(s.jsx)("div",{className:"chatPanel-chatSection",children:Object(s.jsx)(ot.ChatFeed,{messages:e.status.currentRoom.messages.map((function(t){return new ot.Message({id:t.sender==e.status.socketId?0:1,message:t.text})}))})}),Object(s.jsx)("div",{className:"chatPanel-inputSection",children:Object(s.jsx)(B.a,{id:"standard-basic",placeholder:"Type a Message",fullWidth:!0,onChange:function(t){return i(t.target.value)},value:r,onKeyDown:function(t){if("Enter"==t.key){if(""==r)return;I.socket.emit("room/newMessage",{text:r,id:e.status.currentRoom.name,timestamp:new Date}),i("")}}})})]})]})})},lt=function(){var t=Object(n.c)((function(t){return t}));return Object(o.useEffect)((function(){I.registerSocketServerListeners()}),[]),Object(s.jsxs)("div",{className:"main",children:[Object(s.jsx)(et,{alertData:t.alertData}),t.status.loading&&Object(s.jsx)(st,{}),Object(s.jsx)(f,{}),t.status.currentRoom?Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(it,{roomData:t.status.currentRoom})}):Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(W,{}),Object(s.jsx)(Z,{})]})]})};r.a.render(Object(s.jsx)(n.a,{store:D,children:Object(s.jsx)(lt,{})}),document.getElementById("root"))}},[[170,1,2]]]);
//# sourceMappingURL=main.1a681abb.chunk.js.map