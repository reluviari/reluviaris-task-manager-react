(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{127:function(e,t,a){},128:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(12),s=a.n(c),o=(a(69),a(13)),l=a(14),i=a(16),u=a(15),m=a(17),p=a(63),d=a.n(p),f=a(25),k=a(34),h=a(35),v=a.n(h),E=a(26),b=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(v.a,null,r.a.createElement(v.a.Brand,null,r.a.createElement(E.a,{icon:"check-circle",size:"lg"})," Reluviaris Tarefas")))}}]),t}(n.Component),j=a(9),y=a.n(j),O=a(18),T=a(28),w=a(33),g=a.n(w),x=a(29),C=a.n(x),N=a(36),S=a.n(N),B=a(61),_=a.n(B),z=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"deleteTask",value:function(){var e=Object(O.a)(y.a.mark(function e(t){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.confirm('Are you sure you want to delete: "'.concat(t.title,'"'))){e.next=4;break}return e.next=3,fetch("https://reluviaris-task-manager-api.herokuapp.com/tasks/".concat(t.id),{method:"DELETE"});case 3:this.props.loadTasks();case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"checkTask",value:function(){var e=Object(O.a)(y.a.mark(function e(t){return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return{task:{done:"true"}},e.next=3,fetch("https://reluviaris-task-manager-api.herokuapp.com/tasks/".concat(t.id),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({task:{done:!0}})});case 3:this.props.loadTasks();case 4:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(S.a,null,r.a.createElement(S.a.Body,null,r.a.createElement(_.a,{responsive:!0},r.a.createElement("tbody",null,this.props.tasks.map(function(t,a){return r.a.createElement("tr",{key:t.id},r.a.createElement("td",{className:"col-md-10"},t.title),r.a.createElement("td",null,0==t.done?r.a.createElement("a",{className:"check",href:"#"},r.a.createElement(E.a,{icon:"check-circle",onClick:function(){return e.checkTask(t)},size:"lg"})):null),r.a.createElement("td",null,r.a.createElement("a",{className:"delete",href:"#",onClick:function(){return e.deleteTask(t)}},r.a.createElement(E.a,{icon:"trash-alt"}))))}))))))}}]),t}(n.Component),A=a(37),J=a(22),D=a.n(J),P=a(21),R=a.n(P),F=a(62),H=a.n(F);var W=function(e){var t=Object(n.useState)(""),a=Object(A.a)(t,2),c=a[0],s=a[1],o=Object(n.useState)(""),l=Object(A.a)(o,2),i=l[0],u=l[1],m=function(){var t=Object(O.a)(y.a.mark(function t(){return y.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://reluviaris-task-manager-api.herokuapp.com/tasks",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({task:{title:c,done:!1}})});case 2:u(!1),s(""),e.loadTasks();case 5:case"end":return t.stop()}},t)}));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement(R.a,{onClick:function(e){return u(!0)},variant:"dark",className:"float-right create_task_btn"},"+ Tarefas"),r.a.createElement(D.a,{show:i||!1,onHide:function(e){return u(!1)}},r.a.createElement(D.a.Header,{closeButton:!0},r.a.createElement(D.a.Title,null,"Nova Tarefa")),r.a.createElement(D.a.Body,null,r.a.createElement(H.a.Control,{type:"text",placeholder:"Digite sua nova tarefa...",value:c||"",onChange:function(e){return s(e.target.value)}})),r.a.createElement(D.a.Footer,null,r.a.createElement(R.a,{variant:"secondary",onClick:function(e){return u(!1)}},"Fechar"),r.a.createElement("form",{onSubmit:m},r.a.createElement(R.a,{variant:"dark",type:"submit"},"Adicionar")))))},I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={tasks:[]},a.loadTasks=a.loadTasks.bind(Object(T.a)(a)),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"loadTasks",value:function(){var e=Object(O.a)(y.a.mark(function e(){var t,a;return y.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://reluviaris-task-manager-api.herokuapp.com/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,this.setState({tasks:a});case 7:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.loadTasks()}},{key:"render",value:function(){return r.a.createElement(g.a,null,r.a.createElement(C.a,{xs:{span:8,offset:2},className:"tasks_list"},r.a.createElement("p",{className:"title"},"Para fazer"),r.a.createElement(z,{loadTasks:this.loadTasks,tasks:this.state.tasks.filter(function(e){return 1!=e.done})}),r.a.createElement(W,{loadTasks:this.loadTasks})),r.a.createElement(C.a,{xs:{span:8,offset:2},className:"tasks_list"},r.a.createElement("p",{className:"title"},"Realizadas"),r.a.createElement(z,{loadTasks:this.loadTasks,tasks:this.state.tasks.filter(function(e){return 1==e.done})}),r.a.createElement(R.a,{variant:"dark",className:"float-right remove_tasks_btn"},"Remover todas as tarefas")))}}]),t}(n.Component);a(127);f.b.add(k.a,k.b);var L=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(d.a,null,r.a.createElement(I,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},64:function(e,t,a){e.exports=a(128)},69:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.cd3fd64b.chunk.js.map