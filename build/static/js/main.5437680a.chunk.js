(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1:function(e,t,a){e.exports={bookCard:"BookListItem_bookCard__jIs0-",title:"BookListItem_title__1ShHQ",text:"BookListItem_text__29kvB",subtitle:"BookListItem_subtitle__TPDI9"}},18:function(e,t,a){e.exports={bookList:"BooklList_bookList__3clMR"}},19:function(e,t,a){e.exports={loader:"Loader_loader___n6bB"}},20:function(e){e.exports=["fantasy","thriller","drama","mystery","horror","satire","computers"]},24:function(e,t,a){e.exports=a(50)},3:function(e,t,a){e.exports={form:"SearchForm_form__15cji",input:"SearchForm_input__2Jbal",button:"SearchForm_button__3tmKc",select:"SearchForm_select__2Acse"}},30:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(17),o=a.n(s),c=(a(30),a(4)),i=a(5),l=a(7),u=a(6),m=a(8),p=a(22),h=a(23),b=a(21),g=a(3),d=a.n(g),f=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={value:"",genre:""},a.handleInputChange=function(e){a.setState({value:e.target.value})},a.handleSelectorChange=function(e){a.setState({genre:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.onSubmit(a.state.genre,a.state.value),a.setState({value:"",genre:""})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.value,a=e.genre,n=this.props.genres;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:d.a.form},r.a.createElement("input",{type:"text",value:t,onChange:this.handleInputChange,className:d.a.input}),r.a.createElement("select",{value:a,onChange:this.handleSelectorChange,className:d.a.select},n.map(function(e){return r.a.createElement("option",{key:e,value:e},e)})),r.a.createElement("button",{type:"submit",className:d.a.button},"Search"))}}]),t}(n.Component),v=a(1),_=a.n(v),E=function(e){var t=e.image,a=e.title,n=e.description,s=e.author,o=e.publisher,c=e.publishedDate,i=e.pageCount,l=e.rating,u=void 0===l?0:l;return r.a.createElement("div",{className:_.a.bookCard},r.a.createElement("img",{src:t,alt:""}),r.a.createElement("h2",{className:_.a.title},a),r.a.createElement("p",{className:_.a.text},r.a.createElement("span",{className:_.a.subtitle},"Description: "),n),r.a.createElement("p",{className:_.a.text},r.a.createElement("span",{className:_.a.subtitle},"Author: "),s),r.a.createElement("p",{className:_.a.text},r.a.createElement("span",{className:_.a.subtitle},"Publisher: "),o),r.a.createElement("p",{className:_.a.text},r.a.createElement("span",{className:_.a.subtitle},"Published date: "),c),r.a.createElement("p",{className:_.a.text},r.a.createElement("span",{className:_.a.subtitle},"Page count: "),i),r.a.createElement("p",{className:_.a.text},r.a.createElement("span",{className:_.a.subtitle},"Rating: "),u))};E.defaultProps={description:"",publisher:"",publishedDate:"",pageCount:0,rating:0};var k=E,N=a(18),S=a.n(N),j=function(e){var t=e.items;return r.a.createElement("ul",{className:S.a.bookList},t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(k,e))}))},x=a(19),y=a.n(x),L=function(){return r.a.createElement("h2",{className:y.a.loader},"Loading...")},C=a(20),O=a(10),w=a.n(O),B="https://www.googleapis.com/books/v1/volumes?q=",I=function(e,t){return""===t?w.a.get("".concat(B).concat(e)):w.a.get("".concat(B).concat(e,"+subject:").concat(t))},D=function(e){return e.map(function(e){var t=e.id,a=e.volumeInfo,n=a.imageLinks.thumbnail,r=Object(b.a)(a.authors,1)[0],s=a.averageRating,o=Object(h.a)(a,["imageLinks","authors","averageRating"]);return Object(p.a)({id:t,image:n,author:r,rating:s},o)})},F=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={items:[],isLoading:!1},a.getBooks=function(e,t){a.setState({isLoading:!0}),I(t,e).then(function(e){return a.setState({items:D(e.data.items)})}).catch(function(e){return e.statusText}).finally(function(){return a.setState({isLoading:!1})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e){var t=e.genre,a=this.state.genre;t!==a&&this.getBooks(a)}},{key:"render",value:function(){var e=this.state,t=e.items,a=e.isLoading;return r.a.createElement(n.Fragment,null,r.a.createElement(f,{genres:C,onSubmit:this.getBooks}),a&&r.a.createElement(L,null),t.length>0&&r.a.createElement(j,{items:t}))}}]),t}(n.Component);o.a.render(r.a.createElement(F,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.5437680a.chunk.js.map