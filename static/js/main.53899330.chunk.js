(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,r,t){},9:function(e,r,t){"use strict";t.r(r);var s=t(8),a=t(3),n=t(4),c=t(6),i=t(5),o=t(1),u=t.n(o),d=t(7),l=t.n(d),h=(t(14),t(0));function j(e){return Object(h.jsx)("button",{className:"square",onClick:e.onClick,children:e.value})}function b(e){return Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{className:"history-board",children:[Object(h.jsx)("div",{className:"square",children:e.currentBoard[0]}),Object(h.jsx)("div",{className:"square",children:e.currentBoard[1]}),Object(h.jsx)("div",{className:"square",children:e.currentBoard[2]})]}),Object(h.jsxs)("div",{className:"history-board",children:[Object(h.jsx)("div",{className:"square",children:e.currentBoard[3]}),Object(h.jsx)("div",{className:"square",children:e.currentBoard[4]}),Object(h.jsx)("div",{className:"square",children:e.currentBoard[5]})]}),Object(h.jsxs)("div",{className:"history-board",children:[Object(h.jsx)("div",{className:"square",children:e.currentBoard[6]}),Object(h.jsx)("div",{className:"square",children:e.currentBoard[7]}),Object(h.jsx)("div",{className:"square",children:e.currentBoard[8]})]})]})}var v=function(e){Object(c.a)(t,e);var r=Object(i.a)(t);function t(){return Object(a.a)(this,t),r.apply(this,arguments)}return Object(n.a)(t,[{key:"renderSquare",value:function(e){var r=this;return Object(h.jsx)(j,{winner:this.props.winner,value:this.props.squares[e],onClick:function(){return r.props.onClick(e)}})}},{key:"gerarBoard",value:function(){for(var e=[],r=0,t=0;t<3;t++){for(var s=[],a=0;a<3;a++)s.push(this.renderSquare(r)),r++;e.push(Object(h.jsx)("div",{className:"board-row",children:s}))}return e}},{key:"render",value:function(){var e=this.gerarBoard();return Object(h.jsx)("div",{children:e})}}]),t}(u.a.Component),x=function(e){Object(c.a)(t,e);var r=Object(i.a)(t);function t(e){var s;return Object(a.a)(this,t),(s=r.call(this,e)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0,historyReversed:!1},s}return Object(n.a)(t,[{key:"handleClick",value:function(e){var r=this.state.history.slice(0,this.state.stepNumber+1),t=r[r.length-1].squares.slice();m(t)||t[e]||(t[e]=this.state.xIsNext?"X":"O",this.setState({history:r.concat([{squares:t}]),stepNumber:r.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"reordernar",value:function(){this.state.historyReversed?this.setState({historyReversed:!1}):this.setState({historyReversed:!0})}},{key:"gerarBoardHistorico",value:function(){var e=this,r=this.state.history;this.state.historyReversed&&(r=this.state.history.slice(0).reverse());var t=0;return r.map((function(s,a){e.state.historyReversed&&(a=e.state.history.length-1-t,t++);var n=a?"Go to move #"+a:"Go to game start";return Object(h.jsxs)("li",{children:[a===e.state.stepNumber?Object(h.jsx)("button",{className:"current-board",onClick:function(){return e.jumpTo(a)},children:n}):Object(h.jsx)("button",{onClick:function(){return e.jumpTo(a)},children:n}),e.state.historyReversed?Object(h.jsx)(b,{className:"history-board",currentBoard:r[t-1].squares}):Object(h.jsx)(b,{className:"history-board",currentBoard:r[a].squares})]},a)}))}},{key:"render",value:function(){var e,r=this,t=this.state.history[this.state.stepNumber],s=m(t.squares),a=this.gerarBoardHistorico();return e=s?"Winner: "+t.squares[s[0]]:"Next Player: "+(this.state.xIsNext?"X":"O"),Object(h.jsxs)("div",{className:"game",children:[Object(h.jsx)("div",{className:"game-board",children:Object(h.jsx)(v,{winner:s,squares:t.squares,onClick:function(e){return r.handleClick(e)}})}),Object(h.jsxs)("div",{className:"game-info",children:[Object(h.jsx)("div",{children:e}),Object(h.jsx)("button",{className:"reorder",onClick:function(){return r.reordernar()},children:"Reordenar Jogadas"}),this.state.historyReversed?Object(h.jsx)("ol",{reversed:!0,children:a}):Object(h.jsx)("ol",{children:a})]})]})}}]),t}(u.a.Component);function m(e){for(var r=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<r.length;t++){var a=Object(s.a)(r[t],3),n=a[0],c=a[1],i=a[2];if(e[n]&&e[n]===e[c]&&e[n]===e[i])return r[t]}return null}l.a.render(Object(h.jsx)(x,{}),document.getElementById("root"))}},[[9,1,2]]]);
//# sourceMappingURL=main.53899330.chunk.js.map