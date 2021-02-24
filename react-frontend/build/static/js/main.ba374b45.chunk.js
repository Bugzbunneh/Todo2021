(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{43:function(t,n,e){},56:function(t,n,e){},57:function(t,n,e){"use strict";e.r(n);var r=e(1),o=e(0),c=e.n(o),a=e(27),i=e.n(a),u=(e(43),e(20)),s=e(3),d=e.n(s),b=e(7),p=e(31),l=e(17),f=e(6),j=e(25),O=e(10),h=e(35),v="".concat("https://todo2021-staging-backend.azurewebsites.net","/api"),x={domain:"dev-61ugus9t.eu.auth0.com",client_id:"ymZcnf95xHi18p8NLjVsU2XV3tCT3jdu",redirect_uri:window.location.origin+"/signin-callback",scope:"openid profile email",audience:"https://todo"},g=c.a.createContext({isAuthenticated:!1,signIn:function(){},signOut:function(){},loading:!0}),w=function(){return c.a.useContext(g)},m=function(t){var n=t.children,e=c.a.useState(!1),o=Object(O.a)(e,2),a=o[0],i=o[1],u=c.a.useState(void 0),s=Object(O.a)(u,2),p=s[0],l=s[1],f=c.a.useState(),j=Object(O.a)(f,2),v=j[0],w=j[1],m=c.a.useState(!0),y=Object(O.a)(m,2),k=y[0],T=y[1];c.a.useEffect((function(){(function(){var t=Object(b.a)(d.a.mark((function t(){var n,e,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return T(!0),t.next=3,Object(h.a)(x);case 3:if(n=t.sent,w(n),!("/signin-callback"===window.location.pathname&&window.location.search.indexOf("code=")>-1)){t.next=9;break}return t.next=8,n.handleRedirectCallback();case 8:window.location.replace(window.location.origin);case 9:return t.next=11,n.isAuthenticated();case 11:if(!(e=t.sent)){t.next=17;break}return t.next=15,n.getUser();case 15:r=t.sent,l(r);case 17:i(e),T(!1);case 19:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]);var D=function(){if(void 0===v)throw new Error("Auth0 client not set");return v};return Object(r.jsx)(g.Provider,{value:{isAuthenticated:a,user:p,signIn:function(){return D().loginWithRedirect()},signOut:function(){return D().logout({client_id:x.client_id,returnTo:window.location.origin+"/signout-callback"})},loading:k},children:n})},y=function(){var t=Object(b.a)(d.a.mark((function t(){var n,e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(h.a)(x);case 2:return n=t.sent,t.next=5,n.getTokenSilently();case 5:return e=t.sent,t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),k=function(){var t=Object(b.a)(d.a.mark((function t(n){var e,r,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new Request("".concat(v).concat(n.path),{method:n.method||"get",headers:{"Content-Type":"application/json"},body:n.body?JSON.stringify(n.body):void 0}),n.accessToken&&e.headers.set("authorization","bearer ".concat(n.accessToken)),t.next=4,fetch(e);case 4:if(204!==(r=t.sent).status){t.next=7;break}return t.abrupt("return",{ok:r.ok});case 7:if(!r.ok){t.next=14;break}return t.next=10,r.json();case 10:return o=t.sent,t.abrupt("return",{ok:r.ok,body:o});case 14:return T(e,r),t.abrupt("return",{ok:r.ok});case 16:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),T=function(){var t=Object(b.a)(d.a.mark((function t(n,e){var r,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(r=e.headers.get("content-type"))||-1===r.indexOf("application/json")){t.next=7;break}return t.next=4,e.json();case 4:o=t.sent,t.next=10;break;case 7:return t.next=9,e.text();case 9:o=t.sent;case 10:console.error("Error requesting ".concat(n.method," ").concat(n.url),o);case 11:case"end":return t.stop()}}),t)})));return function(n,e){return t.apply(this,arguments)}}(),D=function(){function t(){Object(u.a)(this,t)}return Object(p.a)(t,null,[{key:"getTodos",value:function(){var t=Object(b.a)(d.a.mark((function t(){var n,e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:return n=t.sent,t.next=5,k({path:"/todo",accessToken:n});case 5:if(!(e=t.sent).ok||!e.body){t.next=10;break}return t.abrupt("return",e.body.map(this.mapTodoFromServer));case 10:return t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getTodo",value:function(){var t=Object(b.a)(d.a.mark((function t(n){var e,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:return e=t.sent,t.next=5,k({path:"/todo/"+n,accessToken:e});case 5:if(!(r=t.sent).ok||!r.body){t.next=10;break}return t.abrupt("return",this.mapTodoFromServer(r.body));case 10:return t.abrupt("return",null);case 11:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}()},{key:"postTodo",value:function(){var t=Object(b.a)(d.a.mark((function t(n){var e,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:return e=t.sent,t.next=5,k({path:"/todo",method:"post",body:n,accessToken:e});case 5:if(!(r=t.sent).ok||!r.body){t.next=10;break}return t.abrupt("return",this.mapTodoFromServer(r.body));case 10:return t.abrupt("return",void 0);case 11:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}()},{key:"putTodo",value:function(){var t=Object(b.a)(d.a.mark((function t(n){var e,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:return e=t.sent,t.next=5,k({path:"/todo/"+n.todoId,method:"put",body:n,accessToken:e});case 5:if(!(r=t.sent).ok||!r.body){t.next=10;break}return t.abrupt("return",this.mapTodoFromServer(r.body));case 10:return t.abrupt("return",void 0);case 11:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}()},{key:"deleteTodo",value:function(){var t=Object(b.a)(d.a.mark((function t(n){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,y();case 2:return e=t.sent,t.next=5,k({path:"/todo/"+n,method:"delete",accessToken:e});case 5:if(!t.sent.ok){t.next=8;break}return t.abrupt("return",!0);case 8:return t.abrupt("return",!1);case 9:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}]),t}();D.mapTodoFromServer=function(t){return Object(j.a)(Object(j.a)({},t),{},{dateCreated:new Date(t.dateCreated),dateDeadline:t.dateDeadline?new Date(t.dateDeadline):null,dateCompleted:t.dateCompleted?new Date(t.dateCompleted):null})};var S,C=D,L=(S=function(){function t(n){Object(u.a)(this,t),this._todoList=void 0,Object(f.m)(this),this.rootStore=n,this._todoList=[]}return Object(p.a)(t,[{key:"fetchTodos",value:function(){var t=Object(b.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.getTodos();case 2:n=t.sent,this._todoList=n;case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"deleteTodo",value:function(){var t=Object(b.a)(d.a.mark((function t(n){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.deleteTodo(n);case 2:return(e=t.sent)&&this.removeTodo(n),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}()},{key:"postTodo",value:function(){var t=Object(b.a)(d.a.mark((function t(n){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.postTodo(n);case 2:return(e=t.sent)&&this.addTodo(e),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}()},{key:"putTodo",value:function(){var t=Object(b.a)(d.a.mark((function t(n){var e;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.putTodo(n);case 2:return(e=t.sent)&&this.updateTodo(e),t.abrupt("return",e);case 5:case"end":return t.stop()}}),t,this)})));return function(n){return t.apply(this,arguments)}}()},{key:"removeTodo",value:function(t){var n=this._todoList.findIndex((function(n){return n.todoId===t}));n>-1&&this._todoList.splice(n,1)}},{key:"addTodo",value:function(t){this._todoList.push(t)}},{key:"updateTodo",value:function(t){var n=this._todoList.findIndex((function(n){return n.todoId===t.todoId}));n>-1&&this._todoList.splice(n,1,t)}},{key:"todoList",get:function(){return this._todoList},set:function(t){this._todoList=t}}]),t}(),Object(l.a)(S.prototype,"todoList",[f.f],Object.getOwnPropertyDescriptor(S.prototype,"todoList"),S.prototype),Object(l.a)(S.prototype,"fetchTodos",[f.f],Object.getOwnPropertyDescriptor(S.prototype,"fetchTodos"),S.prototype),Object(l.a)(S.prototype,"deleteTodo",[f.f],Object.getOwnPropertyDescriptor(S.prototype,"deleteTodo"),S.prototype),Object(l.a)(S.prototype,"postTodo",[f.f],Object.getOwnPropertyDescriptor(S.prototype,"postTodo"),S.prototype),Object(l.a)(S.prototype,"putTodo",[f.f],Object.getOwnPropertyDescriptor(S.prototype,"putTodo"),S.prototype),Object(l.a)(S.prototype,"removeTodo",[f.f],Object.getOwnPropertyDescriptor(S.prototype,"removeTodo"),S.prototype),Object(l.a)(S.prototype,"addTodo",[f.f],Object.getOwnPropertyDescriptor(S.prototype,"addTodo"),S.prototype),Object(l.a)(S.prototype,"updateTodo",[f.f],Object.getOwnPropertyDescriptor(S.prototype,"updateTodo"),S.prototype),S),I=new function t(){Object(u.a)(this,t),this.todoListStore=new L(this)},F=c.a.createContext(I),_=function(t){var n=t.children;return Object(r.jsx)(F.Provider,{value:I,children:n})},P=e(2),E=e(4),A=e(5),z=e(18),B=e(13);function q(){var t=Object(E.a)(["\n  margin-top: 10px;\n  color: red;\n"]);return q=function(){return t},t}function H(){var t=Object(E.a)(["\n  color: ",";\n"]);return H=function(){return t},t}function N(){var t=Object(E.a)(["\n  margin: 30px 0px 0px 0px;\n  padding: 20px 0px 0px 0px;\n  border-top: 1px solid ",";\n"]);return N=function(){return t},t}function Y(){var t=Object(E.a)(["\n  font-size: 12px;\n  color: red;\n"]);return Y=function(){return t},t}function J(){var t=Object(E.a)(["\n  ","\n"]);return J=function(){return t},t}function R(){var t=Object(E.a)(["\n  ","\n"]);return R=function(){return t},t}function U(){var t=Object(E.a)(["\n  scrollbar-width: thin;\n  scrollbar-color: "," ",";\n"]);return U=function(){return t},t}function W(){var t=Object(E.a)(["\n  font-weight: bold;\n"]);return W=function(){return t},t}function M(){var t=Object(E.a)(["\n  margin-bottom: 10px;\n"]);return M=function(){return t},t}function V(){var t=Object(E.a)(["\n  width: inherit;\n  background-color: ",";\n  border-radius: 8px;\n  border: 1px solid ",";\n  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n"]);return V=function(){return t},t}function G(){var t=Object(E.a)(["\n  ",";\n  color: ",";\n  background-color: ",";\n  cursor: pointer;\n\n  :hover {\n    animation: "," 1s;\n    border-color: ",";\n    color: ",";\n    background-color: ",";\n  }\n\n  :active {\n    background-color: ",";\n  }\n"]);return G=function(){return t},t}function X(){var t=Object(E.a)(["\n  ",";\n  color: ",";\n  background-color: ",";\n  cursor: pointer;\n\n  :hover {\n    animation: "," 1s;\n    border-color: ",";\n    color: ",";\n    background-color: ",";\n  }\n\n  :active {\n    background-color: ",";\n  }\n"]);return X=function(){return t},t}function Z(){var t=Object(E.a)(["\n  0% {\n    box-shadow: 0 0 0 0px ",";\n  }\n  50% {\n    box-shadow: 0 0 20px 2px ",";\n  }\n  100% {\n    box-shadow: 0 0 20px 0px transparent;\n  }\n"]);return Z=function(){return t},t}function K(){var t=Object(E.a)(["\n  0% {\n    box-shadow: 0 0 0 0px ",";\n  }\n  50% {\n    box-shadow: 0 0 20px 2px ",";\n  }\n  100% {\n    box-shadow: 0 0 20px 0px transparent;\n  }\n"]);return K=function(){return t},t}function Q(){var t=Object(E.a)(["\n  background-color: ",";\n  border: 2px solid;\n  font-family: ",";\n  font-size: ",";\n  font-weight: bold;\n  line-height: 1;\n  padding: 0.5em 1.25em;\n\n  :disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n"]);return Q=function(){return t},t}function $(){var t=Object(E.a)(["\n  box-sizing: border-box;\n  font-family: ",";\n  font-size: ",";\n  margin-bottom: 5px;\n  padding: 8px 10px;\n  border: 1px solid ",";\n  border-radius: 5px;\n  color: ",";\n  background-color: white;\n  width: 100%;\n  :focus {\n    box-shadow: 0 0 5pt 4pt ",";\n    outline: 0;\n  }\n  :disabled {\n    background-color: ",";\n  }\n"]);return $=function(){return t},t}var tt="#383737",nt="#5c5a5a",et="#857c81",rt="#e3e2e2",ot="#f7f8fa",ct="#444444",at="#87CEEB",it="#6495ED",ut="#00CE30",st="#00B92B",dt="#FF0000",bt="#DC143C",pt="'Segoe UI', 'Helvetica Neue',sans-serif",lt="16px",ft=Object(A.a)($(),pt,lt,rt,nt,it,ot),jt=Object(A.a)(Q(),tt,pt,lt),Ot=Object(A.b)(K(),dt,bt),ht=Object(A.b)(Z(),st,"#00A626"),vt=B.a.button(X(),jt,st,tt,ht,ut,ot,nt,et),xt=B.a.button(G(),jt,dt,tt,Ot,bt,ot,nt,et),gt=B.a.fieldset(V(),ct,ct),wt=(B.a.div(M()),B.a.label(W())),mt=Object(A.a)(U(),it,ct),yt=B.a.input(R(),ft),kt=(B.a.textarea(J(),ft),B.a.div(Y())),Tt=(B.a.div(N(),rt),B.a.div(H(),ut));B.a.div(q());function Dt(){var t=Object(E.a)(["\n              text-decoration: none;\n            "]);return Dt=function(){return t},t}function St(){var t=Object(E.a)(["\n              text-decoration: none;\n            "]);return St=function(){return t},t}function Ct(){var t=Object(E.a)(["\n          text-decoration: none;\n        "]);return Ct=function(){return t},t}function Lt(){var t=Object(E.a)(["\n          text-decoration: none;\n        "]);return Lt=function(){return t},t}function It(){var t=Object(E.a)(["\n        display: flex;\n        justify-content: space-evenly;\n        padding: 1%;\n        background-color: ",";\n        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n      "]);return It=function(){return t},t}var Ft=function(){var t=w(),n=t.isAuthenticated,e=t.loading;return Object(P.b)("div",{css:Object(A.a)(It(),"#96A9EB"),children:[Object(P.b)("span",{children:["Environment: ","staging"]}),Object(P.a)(z.b,{to:"todo",css:Object(A.a)(Lt()),children:"Todos"}),Object(P.a)(z.b,{to:"wotd",css:Object(A.a)(Ct()),children:"Word of the Day"}),!e&&(n?Object(P.a)(z.b,{to:"signout",css:Object(A.a)(St()),children:"Sign Out"}):Object(P.a)(z.b,{to:"signin",css:Object(A.a)(Dt()),children:"Sign in"}))]})},_t=e(8);function Pt(){var t=Object(E.a)(["\n      margin: 10px auto 20px auto;\n      padding: 30px 20px;\n      max-width: 60%;\n    "]);return Pt=function(){return t},t}var Et=function(t){var n=t.children;return Object(P.a)("div",{css:Object(A.a)(Pt()),children:n})},At=e(22),zt=function(t){var n=t.todoId,e=Object(o.useContext)(F).todoListStore,c=function(){var t=Object(b.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.deleteTodo(n);case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.jsx)(xt,{onClick:c,children:"Delete"})},Bt=function(t){var n=t.todoId,e=Object(o.useContext)(F).todoListStore,c=function(){var t=Object(b.a)(d.a.mark((function t(){var r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r={todoId:n,dateCompleted:new Date},t.next=3,e.putTodo(r);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(r.jsx)(vt,{onClick:c,children:"Complete"})};function qt(){var t=Object(E.a)(["\n            display: flex;\n            width: 30%;\n            justify-content: space-around;\n            align-items: center;\n          "]);return qt=function(){return t},t}function Ht(){var t=Object(E.a)(["\n                color: ",";\n              "]);return Ht=function(){return t},t}function Nt(){var t=Object(E.a)(["\n                margin: 0 25px 0 0;\n                color: ",";\n              "]);return Nt=function(){return t},t}function Yt(){var t=Object(E.a)(["\n              font-size: 12px;\n            "]);return Yt=function(){return t},t}function Jt(){var t=Object(E.a)(["\n              font-size: 18px;\n              color: ",";\n              margin: 0 0 3px 0;\n              width: 100%;\n              overflow: hidden;\n              white-space: nowrap;\n              text-overflow: ellipsis;\n            "]);return Jt=function(){return t},t}function Rt(){var t=Object(E.a)(["\n              font-weight: bold;\n              font-size: 30px;\n              color: ",";\n              width: 100%;\n              overflow: hidden;\n              white-space: nowrap;\n              text-overflow: ellipsis;\n            "]);return Rt=function(){return t},t}function Ut(){var t=Object(E.a)(["\n            width: 70%;\n            text-align: left;\n          "]);return Ut=function(){return t},t}function Wt(){var t=Object(E.a)(["\n          display: flex;\n        "]);return Wt=function(){return t},t}function Mt(){var t=Object(E.a)(["\n        box-sizing: border-box;\n        display: flex;\n        flex-direction: column;\n        width: inherit;\n        height: 100%;\n        padding: 5px 10px 5px 10px;\n        margin: 0 0 10px 0;\n        background-color: ",";\n        border-radius: 8px;\n        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);\n      "]);return Mt=function(){return t},t}var Vt=Object(At.a)((function(t){var n=t.todo;return Object(P.a)("div",{css:Object(A.a)(Mt(),ct),children:Object(P.b)("div",{css:Object(A.a)(Wt()),children:[Object(P.b)("div",{css:Object(A.a)(Ut()),children:[Object(P.a)("div",{css:Object(A.a)(Rt(),at),children:n.title}),Object(P.a)("div",{css:Object(A.a)(Jt(),at),children:n.description}),Object(P.b)("div",{css:Object(A.a)(Yt()),children:[Object(P.a)("i",{css:Object(A.a)(Nt(),rt),children:Object(P.b)("span",{children:["Created at: ",n.dateCreated.toLocaleDateString()]})}),Object(P.a)("i",{css:Object(A.a)(Ht(),dt),children:n.dateDeadline&&Object(P.b)("span",{children:["Deadline: ",n.dateDeadline.toLocaleDateString()]})})]})]}),Object(P.b)("div",{css:Object(A.a)(qt()),children:[!n.dateCompleted&&Object(P.a)("div",{children:Object(P.a)(Bt,{todoId:n.todoId})}),Object(P.a)("div",{children:Object(P.a)(zt,{todoId:n.todoId})})]})]})})}));function Gt(){var t=Object(E.a)(["\n            width: inherit;\n          "]);return Gt=function(){return t},t}function Xt(){var t=Object(E.a)(["\n        list-style: none;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        justify-content: center;\n        width: inherit;\n        padding: 0;\n        margin: 0;\n      "]);return Xt=function(){return t},t}var Zt=Object(At.a)((function(t){var n=t.data;return Object(P.a)("ul",{css:Object(A.a)(Xt()),children:n.map((function(t){return Object(P.a)("li",{css:Object(A.a)(Gt()),children:Object(P.a)(Vt,{todo:t})},t.todoId)}))})})),Kt=e(37);function Qt(){var t=Object(E.a)(["\n              grid-row: 3 / 3;\n              grid-column: 4 / 4;\n            "]);return Qt=function(){return t},t}function $t(){var t=Object(E.a)(["\n              grid-row: 3 / 3;\n              grid-column: 3 / 3;\n            "]);return $t=function(){return t},t}function tn(){var t=Object(E.a)(["\n              grid-row: 3 / 3;\n              grid-column: 2 / 2;\n            "]);return tn=function(){return t},t}function nn(){var t=Object(E.a)(["\n              grid-row: 3 / 3;\n              grid-column: 1 / 1;\n            "]);return nn=function(){return t},t}function en(){var t=Object(E.a)(["\n              grid-row: 2 / 2;\n              grid-column: 4 / 4;\n            "]);return en=function(){return t},t}function rn(){var t=Object(E.a)(["\n              grid-row: 2 / 2;\n              grid-column: 3 / 3;\n            "]);return rn=function(){return t},t}function on(){var t=Object(E.a)(["\n              grid-row: 2 / 2;\n              grid-column: 2 / 2;\n            "]);return on=function(){return t},t}function cn(){var t=Object(E.a)(["\n              grid-row: 2 / 2;\n              grid-column: 1 / 1;\n            "]);return cn=function(){return t},t}function an(){var t=Object(E.a)(["\n                color: white;\n              "]);return an=function(){return t},t}function un(){var t=Object(E.a)(["\n              grid-column: 3 / 3;\n            "]);return un=function(){return t},t}function sn(){var t=Object(E.a)(["\n                color: white;\n              "]);return sn=function(){return t},t}function dn(){var t=Object(E.a)(["\n              grid-column: 2 / 2;\n            "]);return dn=function(){return t},t}function bn(){var t=Object(E.a)(["\n                color: white;\n              "]);return bn=function(){return t},t}function pn(){var t=Object(E.a)(["\n              grid-column: 1 / 1;\n            "]);return pn=function(){return t},t}function ln(){var t=Object(E.a)(["\n            display: grid;\n            grid-gap: 5px;\n          "]);return ln=function(){return t},t}var fn=function(){var t=Object(o.useContext)(F).todoListStore,n=Object(Kt.a)({mode:"onBlur"}),e=n.register,r=n.errors,a=n.handleSubmit,i=n.formState,u=n.reset,s=c.a.useState(!1),p=Object(O.a)(s,2),l=p[0],f=p[1],h=function(){var n=Object(b.a)(d.a.mark((function n(e){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:f(!1),t.postTodo(Object(j.a)({},e))&&(f(!0),u());case 3:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return Object(P.a)("form",{onSubmit:a(h),children:Object(P.a)(gt,{disabled:i.isSubmitting,children:Object(P.b)("div",{css:Object(A.a)(ln()),children:[Object(P.a)("div",{css:Object(A.a)(pn()),children:Object(P.a)(wt,{htmlFor:"title",css:Object(A.a)(bn()),children:"Title"})}),Object(P.a)("div",{css:Object(A.a)(dn()),children:Object(P.a)(wt,{htmlFor:"description",css:Object(A.a)(sn()),children:"Description"})}),Object(P.a)("div",{css:Object(A.a)(un()),children:Object(P.a)(wt,{htmlFor:"dateDeadline",css:Object(A.a)(an()),children:"Deadline"})}),Object(P.a)("div",{css:Object(A.a)(cn()),children:Object(P.a)(yt,{id:"title",name:"title",type:"text",ref:e({required:!0})})}),Object(P.a)("div",{css:Object(A.a)(on()),children:Object(P.a)(yt,{id:"description",name:"description",ref:e({required:!0})})}),Object(P.a)("div",{css:Object(A.a)(rn()),children:Object(P.a)(yt,{id:"dateDeadline",name:"dateDeadline",type:"date",ref:e({validate:function(t){return new Date(t)>=new Date}})})}),Object(P.a)("div",{css:Object(A.a)(en()),children:Object(P.a)(vt,{type:"submit",children:"Add Todo"})}),Object(P.a)("div",{css:Object(A.a)(nn()),children:r.title&&"required"===r.title.type&&Object(P.a)(kt,{children:"*You must enter a title"})}),Object(P.a)("div",{css:Object(A.a)(tn()),children:r.description&&"required"===r.description.type&&Object(P.a)(kt,{children:"*You must enter a description"})}),Object(P.a)("div",{css:Object(A.a)($t()),children:r.dateDeadline&&"validate"===r.dateDeadline.type&&Object(P.a)(kt,{children:"*The deadline cannot be in the past"})}),Object(P.a)("div",{css:Object(A.a)(Qt()),children:l&&Object(P.a)(Tt,{children:"Success!"})})]})})})};function jn(){var t=Object(E.a)(["\n              height: 52vh;\n              width: inherit;\n              overflow: auto;\n              margin: 10px 0 0 0;\n              padding: 0 15px 0 0;\n              ","\n            "]);return jn=function(){return t},t}function On(){var t=Object(E.a)(["\n            width: 50vw;\n          "]);return On=function(){return t},t}function hn(){var t=Object(E.a)(["\n            color: white;\n          "]);return hn=function(){return t},t}function vn(){var t=Object(E.a)(["\n          display: flex;\n          flex-direction: column;\n          align-items: center;\n          border-radius: 15px;\n          background-color: ",";\n          height: 75vh;\n        "]);return vn=function(){return t},t}var xn=Object(At.a)((function(){var t=Object(o.useContext)(F).todoListStore;return Object(o.useEffect)((function(){(function(){var n=Object(b.a)(d.a.mark((function n(){return d.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.fetchTodos();case 2:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]),Object(P.a)(Et,{children:Object(P.b)("div",{css:Object(A.a)(vn(),"#333333"),children:[Object(P.a)("h1",{css:Object(A.a)(hn()),children:"My Todos"}),Object(P.b)("div",{css:Object(A.a)(On()),children:[Object(P.a)(fn,{}),Object(P.a)("div",{css:Object(A.a)(jn(),mt),children:Object(P.a)(Zt,{data:t.todoList})})]})]})})})),gn=function(){return Object(r.jsx)(Et,{children:Object(r.jsx)("div",{children:"Page not found!"})})},wn={word:"Hello",results:{definition:"A common greeting."}},mn=function(t){var n=t.data;return Object(r.jsxs)("div",{children:[Object(r.jsx)("p",{children:n.word}),Object(r.jsx)("p",{children:n.results.definition})]})},yn=function(){return c.a.useEffect((function(){Object(b.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Here is the word data: ");case 1:case"end":return t.stop()}}),t)})))()}),[]),Object(r.jsxs)("div",{children:[Object(r.jsx)("h1",{children:"Word of the day!"}),Object(r.jsx)(mn,{data:wn}),Object(r.jsx)("button",{children:"Generate new word..."})]})},kn=function(t){var n=t.action,e=w().signIn;return"signin"===n&&e(),Object(r.jsxs)(Et,{children:[Object(r.jsx)("h1",{children:"Sign in page"}),Object(r.jsx)("h2",{children:"Signing in ..."})]})},Tn=function(t){var n=t.action,e="Signing out ...",o=w().signOut;switch(n){case"signout":o();break;case"signout-callback":e="You successfully signed out!"}return Object(r.jsxs)(Et,{children:[Object(r.jsx)("h1",{children:"Sign out page"}),Object(r.jsx)("h2",{children:e})]})},Dn=function(t){var n=t.children;return w().isAuthenticated?Object(r.jsx)(r.Fragment,{children:n}):Object(r.jsx)(Et,{children:Object(r.jsx)("h1",{children:"You do not have access to this page"})})},Sn=function(){return Object(r.jsxs)(_t.c,{children:[Object(r.jsx)(_t.a,{path:"",element:Object(r.jsx)(Dn,{children:Object(r.jsx)(xn,{})})}),Object(r.jsx)(_t.a,{path:"signin",element:Object(r.jsx)(kn,{action:"signin"})}),Object(r.jsx)(_t.a,{path:"signin-callback",element:Object(r.jsx)(kn,{action:"signin-callback"})}),Object(r.jsx)(_t.a,{path:"signout",element:Object(r.jsx)(Tn,{action:"signout"})}),Object(r.jsx)(_t.a,{path:"signout-callback",element:Object(r.jsx)(Tn,{action:"signout-callback"})}),Object(r.jsx)(_t.a,{path:"todo",element:Object(r.jsx)(Dn,{children:Object(r.jsx)(xn,{})})}),Object(r.jsx)(_t.a,{path:"wotd",element:Object(r.jsx)(yn,{})}),Object(r.jsx)(_t.a,{path:"*",element:Object(r.jsx)(gn,{})})]})};e(56);var Cn=function(){return Object(r.jsx)(_,{children:Object(r.jsx)(m,{children:Object(r.jsx)(z.a,{children:Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(Ft,{}),Object(r.jsx)(Sn,{})]})})})})},Ln=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,58)).then((function(n){var e=n.getCLS,r=n.getFID,o=n.getFCP,c=n.getLCP,a=n.getTTFB;e(t),r(t),o(t),c(t),a(t)}))};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(Cn,{})}),document.getElementById("root")),Ln()}},[[57,1,2]]]);
//# sourceMappingURL=main.ba374b45.chunk.js.map