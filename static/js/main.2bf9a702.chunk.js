(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var o=n(8),c=n.n(o),s=n(2),r=n(3),a=n(5),i=n(4),l=n(1),b=n.n(l),u=n(7),h=(n(13),n(0)),d=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={copy:Object(u.a)(t.props.goods)},t.reverse=function(){t.setState((function(t){return{copy:t.copy.reverse()}}))},t.sortAlphabetically=function(){t.setState((function(t){return{copy:t.copy.sort((function(t,e){return t.localeCompare(e)}))}}))},t.reset=function(){t.setState({copy:Object(u.a)(t.props.goods)})},t.sortByLength=function(){t.setState((function(t){return{copy:t.copy.sort((function(t,e){return t.length-e.length}))}}))},t}return Object(r.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:this.reverse,children:"Reverse"}),Object(h.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:this.sortAlphabetically,children:"Sort alphabetically"}),Object(h.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:this.reset,children:"Reset"}),Object(h.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:this.sortByLength,children:"Sort by length"}),Object(h.jsx)("table",{className:"table",children:Object(h.jsx)("tbody",{children:this.state.copy.map((function(t){return Object(h.jsx)("tr",{children:Object(h.jsx)("td",{children:t},t)})}))})})]})}}]),n}(b.a.Component),p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){Object(a.a)(n,t);var e=Object(i.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,c=new Array(o),r=0;r<o;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={showGoods:!1},t}return Object(r.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Goods"}),Object(h.jsx)("button",{type:"button",className:"btn btn-outline-secondary",onClick:function(){t.setState({showGoods:!0})},disabled:this.state.showGoods,children:"Start"}),this.state.showGoods&&Object(h.jsx)(d,{goods:p})]})}}]),n}(b.a.Component);c.a.render(Object(h.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.2bf9a702.chunk.js.map