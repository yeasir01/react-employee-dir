(this["webpackJsonpreact-employee-dir"]=this["webpackJsonpreact-employee-dir"]||[]).push([[0],{19:function(e,t,a){e.exports=a(43)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),s=a.n(c),l=a(2),o=a(3),i=a(5),m=a(4),u=a(18),d=a(6),h=a(17),p=a.n(h),f=function(){return r.a.createElement("div",{class:"d-flex justify-content-center"},r.a.createElement("div",{className:"spinner-border text-primary ",style:{width:"3rem",height:"3rem"},role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))},E=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"alert alert-danger text-center",role:"alert"},r.a.createElement("h2",null,"An error occured, please try again later."),r.a.createElement("p",null,this.props.error))}}]),a}(n.Component),y=(a(41),function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"table-responsive"},r.a.createElement("table",{className:"table table-hover"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"}),r.a.createElement("th",{scope:"col",className:"text-secondary"},"First ",r.a.createElement("i",{className:"fas fa-sort cursor",onClick:function(){return e.props.sort.sortBy("first")}})),r.a.createElement("th",{scope:"col",className:"text-secondary"},"Last ",r.a.createElement("i",{className:"fas fa-sort cursor",onClick:function(){return e.props.sort.sortBy("last")}})),r.a.createElement("th",{scope:"col",className:"text-secondary"},"Email"),r.a.createElement("th",{scope:"col",className:"text-secondary"},"Cell"))),r.a.createElement("tbody",null,this.props.emplyData.data.map((function(e,t){return r.a.createElement("tr",{className:"cursor",key:t},r.a.createElement("th",{scope:"row"},r.a.createElement("img",{id:"thumbnail",src:e.picture.thumbnail,alt:"employee pic"})),r.a.createElement("td",{className:"align-middle"},e.name.first),r.a.createElement("td",{className:"align-middle"},e.name.last),r.a.createElement("td",{className:"align-middle"},e.email),r.a.createElement("td",{className:"align-middle"},e.cell))})))))}}]),a}(n.Component)),b=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={data:[],count:0,isLoading:!0,error:"",search:"",directionOfSort:"descending"},n.sortBy=n.sortBy.bind(Object(d.a)(n)),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://randomuser.me/api/?seed=employee&results=30&nat=us").then((function(t){e.setState({data:t.data.results,count:t.data.results.length,isLoading:!1,error:""})})).catch((function(t){e.setState({isLoading:!1,error:t.message})}))}},{key:"sortBy",value:function(e){var t=Object(u.a)(this.state.data);if("descending"===this.state.directionOfSort){var a=t.sort((function(t,a){return t.name[e]<a.name[e]?-1:t.name[e]>a.name[e]?1:0}));this.setState({data:a,directionOfSort:"ascending"})}else{var n=t.sort((function(t,a){return t.name[e]>a.name[e]?-1:t.name[e]<a.name[e]?1:0}));this.setState({data:n,directionOfSort:"descending"})}}},{key:"handleInputChange",value:function(e){var t=e.target.value;this.setState({search:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col"},!0===this.state.isLoading&&r.a.createElement(f,null),""!==this.state.error&&r.a.createElement(E,{error:this.state.error}),!1===this.state.isLoading&&0!==this.state.count&&r.a.createElement(y,{emplyData:this.state,sort:this})))}}]),a}(n.Component),v=(a(42),function(){return r.a.createElement("nav",{className:"navbar navbar-light bg-info mb-4 custom-nav"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"navbar-brand text-light display-4",href:"/"},"Employee Directory"),r.a.createElement("form",{className:"form-inline"},r.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"comming soon..","aria-label":"Search"}))))}),g=function(e){Object(i.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement(v,null)),r.a.createElement("main",{className:"container"},r.a.createElement(b,null)))}}]),a}(n.Component);s.a.render(r.a.createElement(g,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.562e4fd5.chunk.js.map