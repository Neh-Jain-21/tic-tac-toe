(this.webpackJsonptictactoe=this.webpackJsonptictactoe||[]).push([[0],{10:function(n,t,e){},11:function(n,t,e){"use strict";e.r(t);var l=e(1),c=e.n(l),s=e(4),u=e.n(s),r=e(2),i=e(0),o=function(n){var t=Object(l.useState)(!0),e=Object(r.a)(t,2),c=e[0],s=e[1],u=Object(l.useState)(""),o=Object(r.a)(u,2),a=o[0],b=o[1],j=function(){c&&(n.turn%2!==0?b("X"):n.turn%2===0&&b("O"))};return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{onClick:c?function(){s(!1),j(),n.turnMethod(),n.boxClicked(n.css)}:function(){},className:n.css+" "+a,children:a})})};e(10);var a=function(){var n=Object(l.useState)(1),t=Object(r.a)(n,2),e=t[0],c=t[1],s=Object(l.useState)(!1),u=Object(r.a)(s,2),a=u[0],b=u[1],j=Object(l.useState)(!1),d=Object(r.a)(j,2),x=d[0],O=d[1],h=Object(l.useState)(new Array(9).fill(null)),f=Object(r.a)(h,2),k=f[0],m=f[1];Object(l.useEffect)((function(){k[0]===k[1]&&k[0]===k[2]&&null!==k[0]&&null!==k[1]&&null!==k[2]||k[3]===k[4]&&k[3]===k[5]&&null!==k[3]&&null!==k[4]&&null!==k[5]||k[6]===k[7]&&k[6]===k[8]&&null!==k[6]&&null!==k[7]&&null!==k[8]||k[0]===k[3]&&k[0]===k[6]&&null!==k[0]&&null!==k[3]&&null!==k[6]||k[1]===k[4]&&k[1]===k[7]&&null!==k[1]&&null!==k[4]&&null!==k[7]||k[2]===k[5]&&k[2]===k[8]&&null!==k[2]&&null!==k[5]&&null!==k[8]||k[0]===k[4]&&k[0]===k[8]&&null!==k[0]&&null!==k[4]&&null!==k[8]||k[2]===k[4]&&k[2]===k[6]&&null!==k[2]&&null!==k[4]&&null!==k[6]?b(!0):null!==k[0]&&null!==k[1]&&null!==k[2]&&null!==k[3]&&null!==k[4]&&null!==k[5]&&null!==k[6]&&null!==k[7]&&null!==k[8]&&(console.log("Done"),O(!0),b(!0))}));var v=function(n){m((function(){var t=n[3],l=k;return l[parseInt(t)-1]=e%2===0?1:2,l}))},C=function(){c(e+1)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"container",children:a?Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"final",children:[Object(i.jsx)("h6",{className:"final_text",children:x?"Match Draw":e%2===0?"X is Winner":"O is Winner"}),Object(i.jsx)("button",{className:"final_button",onClick:function(){m(new Array(9).fill(null)),b(!1)},children:"Restart"})]})}):Object(i.jsxs)("div",{className:"outer-container",children:[Object(i.jsxs)("div",{className:"inner-container",children:[Object(i.jsx)(o,{css:"box1",turn:e,turnMethod:C,boxClicked:v}),Object(i.jsx)(o,{css:"box2",turn:e,turnMethod:C,boxClicked:v}),Object(i.jsx)(o,{css:"box3",turn:e,turnMethod:C,boxClicked:v})]}),Object(i.jsxs)("div",{className:"inner-container",children:[Object(i.jsx)(o,{css:"box4",turn:e,turnMethod:C,boxClicked:v}),Object(i.jsx)(o,{css:"box5",turn:e,turnMethod:C,boxClicked:v}),Object(i.jsx)(o,{css:"box6",turn:e,turnMethod:C,boxClicked:v})]}),Object(i.jsxs)("div",{className:"inner-container",children:[Object(i.jsx)(o,{css:"box7",turn:e,turnMethod:C,boxClicked:v}),Object(i.jsx)(o,{css:"box8",turn:e,turnMethod:C,boxClicked:v}),Object(i.jsx)(o,{css:"box9",turn:e,turnMethod:C,boxClicked:v})]})]})})})};u.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(a,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.dad2b24d.chunk.js.map