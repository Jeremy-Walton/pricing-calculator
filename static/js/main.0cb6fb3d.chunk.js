(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),l=a(2),n=a.n(l),i=(a(14),a(3)),o=a(4),s=a(6),u=a(5),m=a(7),d=(a(15),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={ticket_price:"",tickets_sold:0,gym_revenue:0,user_pays:0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"handlePriceBlur",value:function(e){var t=parseFloat(this.state.ticket_price).toFixed(2);this.setState({ticket_price:t})}},{key:"updatePrice",value:function(e){this.calculatePrices(e.target.value,this.state.tickets_sold)}},{key:"updateSold",value:function(e){this.calculatePrices(this.state.ticket_price,e.target.value)}},{key:"calculatePrices",value:function(e,t){var a=e*t,c=a+(.035*e+1.59)*t,r=a-.025*a;this.setState({ticket_price:e,tickets_sold:t,gym_revenue:r,user_pays:c})}},{key:"render",value:function(){var e=this,t=this.state,a=t.ticket_price,c=t.tickets_sold,l=t.gym_revenue,n=t.user_pays;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"calculator-form"},r.a.createElement("div",{className:"calculator-form__header"},r.a.createElement("h1",null,"Calculate your potential earnings")),r.a.createElement("div",{className:"calculator-form__row"},r.a.createElement("div",{className:"ticket-price"},r.a.createElement("div",{className:"dollar"},"$"),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"ticket_price"},"Ticket Price"),r.a.createElement("input",{id:"ticket_price",type:"number",placeholder:"0.00",onChange:function(t){return e.updatePrice(t)},onBlur:function(t){return e.handlePriceBlur(t)},value:a}))),r.a.createElement("span",{className:"multiply"},"X"),r.a.createElement("div",{className:"form-control"},r.a.createElement("label",{htmlFor:"tickets_sold"},"Tickets Sold"),r.a.createElement("input",{id:"tickets_sold",type:"number",onChange:function(t){return e.updateSold(t)},value:c})))),r.a.createElement("div",{className:"calculator-output"},r.a.createElement("div",{className:"calculator-output__header"},r.a.createElement("h1",null,"Your estimated payout")),r.a.createElement("div",{className:"calculator-output__row"},r.a.createElement("div",null,l.toFixed(2))),r.a.createElement("div",{className:"calculator-output__row"},r.a.createElement("div",{className:"calculator-output__row--header"},"Attendee pays"),r.a.createElement("div",{className:"calculator-output__row--user-pays"},n.toFixed(2)))))}}]),t}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(r.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.0cb6fb3d.chunk.js.map