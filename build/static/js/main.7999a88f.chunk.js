(this["webpackJsonppart-2"]=this["webpackJsonppart-2"]||[]).push([[0],{19:function(e,n,t){},39:function(e,n,t){"use strict";t.r(n);var c=t(14),r=t.n(c),a=t(2),o=t.n(a),u=(t(19),t(3)),i=t(4),d=t.n(i),s="/api/persons",j=function(){return d.a.get(s).then((function(e){return e.data}))},h=function(e){return d.a.post(s,e).then((function(e){return e.data}))},l=function(e){return d.a.delete("".concat(s,"/").concat(e))},b=function(e,n){return d.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},f=t(0),O=function(e){var n=e.P,t=e.handleDelete;return Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[n.name,"  ",n.number," "]}),Object(f.jsx)("button",{onClick:t,children:"delete"})]})},m=function(e){var n=e.search,t=e.handleSearch,c=e.person;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("strong",{children:"filter shown with : "})," ",Object(f.jsx)("input",{value:n,onChange:t})]}),Object(f.jsx)(x,{search:n,person:c})]})},p=function(e){var n=e.addPerson,t=e.handleOnChange,c=e.newNumber,r=e.handleNumberInfo,a=e.newName;return Object(f.jsxs)("form",{onSubmit:n,children:[Object(f.jsxs)("div",{children:["name:",Object(f.jsx)("input",{value:a,onChange:t})]}),Object(f.jsxs)("div",{children:["number: ",Object(f.jsx)("input",{value:c,onChange:r})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",children:"add"})})]})},v=function(e){var n=e.person,t=e.handleDelete;return Object(f.jsx)("div",{children:n.map((function(e){return Object(f.jsx)(O,{P:e,handleDelete:function(){return t(e.id)}},e.id)}))})},x=function(e){var n=e.search,t=e.person,c=[];return t.forEach((function(e){-1!==e.name.toUpperCase().search(n.toUpperCase())&&c.push(e)})),Object(f.jsx)("div",{children:c.map((function(e){return Object(f.jsxs)("div",{children:[" ",e.id," ",e.name," ",e.number," "]},e.id)}))})},g=function(e){var n=e.message,t=e.color;return null===n?null:Object(f.jsx)("div",{className:"error",style:{color:t},children:n})},w=function(){var e=Object(a.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)(""),o=Object(u.a)(r,2),i=o[0],d=o[1],s=Object(a.useState)(""),O=Object(u.a)(s,2),x=O[0],w=O[1],S=Object(a.useState)(""),C=Object(u.a)(S,2),N=C[0],D=C[1],k=Object(a.useState)(null),y=Object(u.a)(k,2),P=y[0],E=y[1],I=Object(a.useState)("green"),A=Object(u.a)(I,2),J=A[0],U=A[1];Object(a.useEffect)((function(){j().then((function(e){return c(e)}))}),[]);var B=function(e,n){U(n),E(e),setTimeout((function(){E(null),U(null)}),5e3)};return Object(f.jsxs)("div",{children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(g,{message:P,color:J}),Object(f.jsx)(m,{search:N,handleSearch:function(e){var n=e.target.value;D(n)},person:t}),Object(f.jsx)("h3",{children:"Add a new "}),Object(f.jsx)(p,{addPerson:function(e){e.preventDefault();var n={name:i,number:x},r=t.find((function(e){return e.name===i}));r&&r.name===i?window.confirm("".concat(i," is already added to phonebook,replace the old number with new one?"))&&b(r.id,n).then((function(e){c(t.map((function(n){return n.id!==r.id?n:e}))),B("updated ".concat(e.name),"green")})).catch((function(e){B("".concat(e.response.data.error),"red")})):(r=t.find((function(e){return e.number===x})))&&r.number===x?alert("".concat(x," is already added to phonebook")):h(n).then((function(e){c(t.concat(e)),B("Added ".concat(e.name),"green")})).catch((function(e){B("".concat(e.response.data.error),"red")}))},handleOnChange:function(e){var n=e.target.value;d(n)},newNumber:x,handleNumberInfo:function(e){var n=e.target.value;w(n)},newName:i}),Object(f.jsx)("h2",{children:"Numbers"}),Object(f.jsx)(v,{person:t,handleDelete:function(e){var n=[],r=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(r.name))&&l(e).then((function(){t.forEach((function(t){t.id!==e&&n.push(t)})),c(n),B("Deleted ".concat(r.name),"red")}))}})]})};r.a.render(Object(f.jsx)(o.a.StrictMode,{children:Object(f.jsx)(w,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.7999a88f.chunk.js.map