import{r as m,o as l,c,a as t,t as d,b as h,w as p,d as f,F as _,e as b,v as g,f as x,n as y,p as k,g as I,h as S,i as $,j as A,k as w}from"./vendor.737e4e7d.js";const C=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}};C();var v=(e,i)=>{for(const[r,a]of i)e[r]=a;return e};const N={data(){return{version:"#.#.#"}},mounted(){fetch("/api/info").then(e=>e.json()).then(e=>{this.version=e.version})}},j={id:"header"},D={class:"title"},L=t("div",{class:"logo"},"Synology Photos Deleter",-1),P={class:"version"},O={class:"header-items"},E=f("Home"),H=f("About");function V(e,i,r,a,s,o){const n=m("router-link");return l(),c("div",j,[t("div",D,[L,t("div",P,d(s.version),1)]),t("div",O,[h(n,{to:"/",class:"header-item"},{default:p(()=>[E]),_:1}),h(n,{to:"/about",class:"header-item"},{default:p(()=>[H]),_:1})])])}var z=v(N,[["render",V]]);const B={class:"page-container"},F={setup(e){return(i,r)=>{const a=m("router-view");return l(),c(_,null,[h(z),t("div",B,[h(a)])],64)}}};const T={data(){return{items:null}},computed:{selectedItems(){return this.items.filter(e=>e.seleted)}},mounted(){this.fetchItems()},methods:{fetchItems(){fetch("/api/list").then(e=>e.json()).then(e=>{this.items=e.map(i=>({url:i,seleted:!1}))})},selectAll(){this.items.forEach(e=>e.seleted=!0)},unselectAll(){this.items.forEach(e=>e.seleted=!1)},async deleteSeleted(){const e=this.selectedItems.map(i=>i.url);this.items=null,await fetch("/api/delete",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then(i=>i.json()),this.fetchItems()}}},q={key:0},G={class:"header"},J={class:"page-title"},K={class:"actions"},M={class:"items"},R=["onClick"],U=["src"],W={class:"text"},Q={key:1},X=t("div",{class:"header"},[t("div",{class:"page-title"},"No photos")],-1),Y=t("p",null," If you think this is an error, please check that your photos folder is correctly mapped to '/app/photos' and that it contains images such as screenshots ",-1),Z=[X,Y],ee={key:2},te=t("div",{class:"header"},[t("div",{class:"page-title"},"Loading...")],-1),se=[te];function oe(e,i,r,a,s,o){return s.items&&s.items.length?(l(),c("div",q,[t("div",G,[t("div",J,d(s.items.length)+" photos",1),t("div",K,[b(t("a",{onClick:i[0]||(i[0]=(...n)=>o.selectAll&&o.selectAll(...n)),class:"btn"},"Select All",512),[[g,o.selectedItems.length!=s.items.length]]),b(t("a",{onClick:i[1]||(i[1]=(...n)=>o.unselectAll&&o.unselectAll(...n)),class:"btn"},"Unselect all",512),[[g,o.selectedItems.length==s.items.length]])])]),t("div",M,[(l(!0),c(_,null,x(s.items,n=>(l(),c("div",{key:n.url,class:y(["item",{seleted:n.seleted}]),onClick:be=>n.seleted=!n.seleted},[t("img",{src:`/api/${n.url}`},null,8,U)],10,R))),128))]),t("div",{class:y(["toolbar",{show:o.selectedItems.length>0}])},[t("div",W,d(o.selectedItems.length)+" photos selected",1),t("a",{class:"btn",onClick:i[2]||(i[2]=(...n)=>o.deleteSeleted&&o.deleteSeleted(...n))},"Delete")],2)])):s.items?(l(),c("div",Q,Z)):(l(),c("div",ee,se))}var ie=v(T,[["render",oe]]);const ne={data(){return{version:"#.#.#"}},mounted(){fetch("/api/info").then(e=>e.json()).then(e=>{this.version=e.version})}},u=e=>(k("data-v-3749ed09"),e=e(),I(),e),ae=u(()=>t("div",{class:"page-title"},"About",-1)),le=u(()=>t("p",null,"Delete screenshots uploaded from your iPhone by analyzing the photo Exif",-1)),ce={class:"about-box-items"},re={class:"about-box-item"},de=u(()=>t("div",{class:"about-box-item-icon"},[t("i",{class:"bx bx-info-circle"})],-1)),he={class:"about-box-item-title"},ue=u(()=>t("div",{class:"about-box-item-subtitle"},"Version",-1)),_e=S('<div class="about-box-item" data-v-3749ed09><div class="about-box-item-icon" data-v-3749ed09><i class="bx bxl-github" data-v-3749ed09></i></div><a class="about-box-item-title" href="https://github.com/gnehs/SynologyPhotosDeleter" target="_blank" data-v-3749ed09> SynologyPhotosDeleter </a><div class="about-box-item-subtitle" data-v-3749ed09>GitHub</div></div><div class="about-box-item" data-v-3749ed09><div class="about-box-item-icon" data-v-3749ed09><i class="bx bx-user" data-v-3749ed09></i></div><a class="about-box-item-title" href="https://github.com/gnehs" target="_blank" data-v-3749ed09> gnehs </a><div class="about-box-item-subtitle" data-v-3749ed09>Author</div></div>',2);function ve(e,i,r,a,s,o){return l(),c(_,null,[ae,le,t("div",ce,[t("div",re,[de,t("div",he,d(s.version),1),ue]),_e])],64)}var me=v(ne,[["render",ve],["__scopeId","data-v-3749ed09"]]);const pe=[{path:"/",name:"Index",component:ie},{path:"/about",name:"About",component:me}],fe=$({history:A(),routes:pe});w(F).use(fe).mount("#app");
