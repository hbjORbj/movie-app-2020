(this["webpackJsonpmovie-app-2020"]=this["webpackJsonpmovie-app-2020"]||[]).push([[0],{19:function(e,t,a){e.exports=a(44)},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),i=a.n(s),c=a(2),m=a.n(c),o=a(13),l=a(14),u=a(15),v=a(18),p=a(17),d=a(16),g=a.n(d);a(42);var _=function(e){var t=e.title,a=e.summary,n=e.year,s=e.genres,i=e.rating,c=e.poster;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:c,alt:t,title:t}),r.a.createElement("div",{className:"movie__description"},r.a.createElement("h3",{className:"movie__title"},t),r.a.createElement("h5",{className:"movie__year"},n),r.a.createElement("ul",{className:"movie__genres"},s.map((function(e,t){return r.a.createElement("li",{key:t},e)}))),r.a.createElement("h3",{className:"movie__summary"},a.slice(0,140),"..."),r.a.createElement("h5",{className:"movie__rating"},"\u2b50\ufe0f",i)))},y=(a(43),function(e){Object(v.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(o.a)(m.a.mark((function t(){var a,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,e.setState({isLoading:!1,movies:n});case 5:case"end":return t.stop()}}),t)}))),e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},a.map((function(e){return r.a.createElement(_,{key:e.id,id:e.id,title:e.title,summary:e.summary,year:e.year,rating:e.rating,genres:e.genres,poster:e.medium_cover_image})}))))}}]),a}(r.a.Component));i.a.render(r.a.createElement(y,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.3247aa40.chunk.js.map