(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{45:function(e,a,n){e.exports=n.p+"static/media/spacex.01f34322.png"},47:function(e,a,n){e.exports=n(63)},52:function(e,a,n){},61:function(e,a,n){},63:function(e,a,n){"use strict";n.r(a);var t=n(0),c=n.n(t),l=n(37),r=n.n(l),s=(n(52),n(46)),m=n(5),i=n(17),u=n(15),o=n(20),h=n(21),p=n(27),E=n(22),d=n(28),g=n(23),b=n(16),f=n.n(b),_=n(64),N=n(26),v=n.n(N),y=n(38),k=n.n(y);function w(e){var a=e.launch,n=a.flight_number,t=a.mission_name,l=a.launch_date_local,r=a.launch_success;return c.a.createElement("div",{className:"card card-body mb-3"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-md-9"},c.a.createElement("h4",null,"Mission: ",c.a.createElement("span",{className:v()({"text-success":r,"text-danger":!r})},t)),c.a.createElement("p",null,"Date: ",c.a.createElement(k.a,{format:"YYYY-MM-DD HH:mm"},l))),c.a.createElement("div",{className:"col-md-9"},c.a.createElement(i.b,{to:"/launch/".concat(n),className:"btn btn-secondary"},"Launch Details"))))}function j(){return c.a.createElement("div",{className:"my-3"},c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-success"})," = Success"),c.a.createElement("p",null,c.a.createElement("span",{className:"px-3 mr-2 bg-danger"})," = Fail"))}function x(){var e=Object(g.a)(["\nquery launchesQuery {\n    launches {\n        flight_number\n        mission_name\n        launch_date_local\n        launch_success\n    }\n}\n"]);return x=function(){return e},e}var O=f()(x()),L=function(e){function a(){return Object(o.a)(this,a),Object(p.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:"container"},c.a.createElement(t.Fragment,null,c.a.createElement("h1",{className:"ml-3"},"Launches"),c.a.createElement(j,null),c.a.createElement(_.a,{query:O},(function(e){var a=e.loading,n=e.error,l=e.data;return a?c.a.createElement("h4",null,"Loading..."):(n&&console.log(n),c.a.createElement(t.Fragment,null,l.launches.map((function(e){return c.a.createElement(w,{key:e.flight_number,launch:e})}))))}))))}}]),a}(t.Component);function D(){var e=Object(g.a)(["\n  query LaunchQuery($flight_number: Int!) {\n    launch(flight_number: $flight_number) {\n      flight_number\n      mission_name\n      launch_year\n      launch_success\n      launch_date_local\n      rocket {\n        rocket_id\n        rocket_name\n        rocket_type\n      }\n    }\n  }\n"]);return D=function(){return e},e}var Y=f()(D()),q=function(e){function a(){return Object(o.a)(this,a),Object(p.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){var e=this.props.match.params.flight_number;return e=parseInt(e),c.a.createElement("div",{className:"container"},c.a.createElement(t.Fragment,null,c.a.createElement(_.a,{query:Y,variables:{flight_number:e}},(function(e){var a=e.loading,n=e.error,t=e.data;if(a)return c.a.createElement("h4",null,"Loading...");n&&console.log(n);var l=t.launch,r=l.mission_name,s=l.flight_number,m=l.launch_year,u=l.launch_success,o=l.rocket,h=o.rocket_id,p=o.rocket_name,E=o.rocket_type;return c.a.createElement("div",null,c.a.createElement("h1",{className:"display-4 my-3"},c.a.createElement("span",{className:"text-dark"},"Mission:")," ",r),c.a.createElement("h4",{className:"mb-3"},"Launch Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Flight Number: ",s),c.a.createElement("li",{className:"list-group-item"},"Launch Year: ",m),c.a.createElement("li",{className:"list-group-item"},"Launch Successful:"," ",c.a.createElement("span",{className:v()({"text-success":u,"text-danger":!u})},u?"Yes":"No"))),c.a.createElement("h4",{className:"my-3"},"Rocket Details"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},"Rocket ID: ",h),c.a.createElement("li",{className:"list-group-item"},"Rocket Name: ",p),c.a.createElement("li",{className:"list-group-item"},"Rocket Type: ",E)),c.a.createElement("hr",null),c.a.createElement(i.b,{to:"/",className:"btn btn-secondary"},"Back"))}))))}}]),a}(t.Component),F=(n(61),n(45)),I=n.n(F),M=new s.a({uri:"/graphql"});var R=function(){return c.a.createElement(m.a,{client:M},c.a.createElement(i.a,null,c.a.createElement("div",{className:"Container"},c.a.createElement("img",{src:I.a,alt:"SpaceX",style:{width:300,display:"block",margin:"auto"}}),c.a.createElement(u.a,{exact:!0,path:"/",component:L}),c.a.createElement(u.a,{exact:!0,path:"/launch/:flight_number",component:q}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.061cb2e6.chunk.js.map