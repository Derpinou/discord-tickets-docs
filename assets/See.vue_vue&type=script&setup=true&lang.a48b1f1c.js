import{d as e,c as t,g as n,o as s,b as r,f as a,t as l,w as o,h as i,e as p,y as u,F as c,z as y,k,l as d}from"./vendor.69e20ee9.js";import{u as m,b as f}from"./index.ae809121.js";import{m as b}from"./SourceButton.vue_vue&type=script&setup=true&lang.689f639d.js";function h(e,t){const n=/\{@link\s+(.+?)(?:\s+(.+?))?\s*\}/i.exec(e);n&&(e=n[1]);const s=n?n[2]:null,r=e.split(/(\.|#)/);return t.links[r[0]]?{text:null!=s?s:e,link:"object"==typeof t.links[r[0]]?{name:t.links[r[0]].name,params:t.links[r[0]].params,query:{scrollTo:r[1]?`${"."===r[1]?"s-":""}${r[2]}`:void 0}}:t.links[r[0]]}:/^https?:\/\//i.exec(e)?{text:null!=s?s:e,link:e}:{text:null!=s?s:e}}function v(e,t,n,s){if(!e)return null;const r=/\{@link\s+(.+?)(?:\s+(.+?))?\s*\}/gi;let a,l="",o=0;for(;a=r.exec(e);){l+=e.slice(o,a.index);const r=h(a[0],t);if(r.link){let e;"object"==typeof r.link?(r.link.params||(r.link.params={}),r.link.params.source=s.params.source,r.link.params.tag=s.params.tag,e=n.resolve(r.link).href):e=r.link,l+=`[${r.text}](${e})`}else l+=r.text;o=a.index+a[0].length}return l?(l+=e.slice(o),l):e}function x(e){return"string"==typeof e?e:e.join("-")}const g={key:0},w={key:3};var j=e({props:{type:{type:[String,Array],required:!0}},setup(e){const y=e,k=m(),d=t((()=>k.state.docs)),b=t((()=>"function"===y.type[0]?"Function":y.type[0])),h=t((()=>{var e;return(null==(e=d.value)?void 0:e.links[y.type[0]])?d.value.links[y.type[0]]:null}));return(t,y)=>{const k=n("router-link"),d=f;return s(),r(c,null,[a(h)?"object"==typeof a(h)?(s(),r(k,{key:1,to:a(h)},{default:o((()=>[i(l(a(b)),1)])),_:1},8,["to"])):(s(),r("a",{key:2,href:a(h),target:"_blank",rel:"noopener"},[i(l(a(b))+" ",1),p(d,{class:"h-5 w-5 inline-block mb-1","aria-hidden":"true"})],8,["href"])):(s(),r("span",g,l(a(b)),1)),e.type[1]?(s(),r("span",w,l(e.type[1]),1)):u("",!0)],64)}}});const A={class:"docs-type inline-block whitespace-pre-wrap"},_={class:"font-semibold"},q={key:0};var M=e({props:{names:{type:[String,Array,Array],required:!0},nullable:{type:Boolean,required:!1},variable:{type:Boolean,required:!1}},setup:e=>(t,n)=>(s(),r("div",A,[p("span",_,l(e.nullable?"?":"")+l(e.variable?"...":""),1),Array.isArray(e.names)?(s(),r("span",q,[(s(!0),r(c,null,y(e.names,(e=>(s(),r(j,{key:a(x)(e),type:e},null,8,["type"])))),128))])):u("",!0)]))});const T={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"1.2em",height:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 24 24"},L=p("g",{fill:"none"},[p("path",{d:"M5 13l4 4L19 7",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})],-1);var $={name:"heroicons-outline-check",render:function(e,t){return s(),r("svg",T,[L])}};const B={class:"grid"},H={class:"overflow-x-auto lg:custom-scroll border dark:border-gray-600 rounded-md mt-2 mb-8"},S={class:"!text-base !text-center !my-0 min-w-max xl:min-w-0"},D={class:"bg-discord-red-500 !text-gray-200"},F={class:"!uppercase"},z=p("th",{class:"!p-4 w-96"},"Parameter",-1),C=p("th",{class:"!p-4 w-48"},"Type",-1),O={key:0,class:"!p-4 w-40"},P={key:1,class:"!p-4 w-40"},R=p("th",{class:"!p-4 w-96"},"Description",-1),Y={class:"!pl-2.5 !py-5"},E={class:"!py-5"},G={key:0,class:"!py-5"},I=p("span",{class:"sr-only"},"True",-1),J={key:1,class:"!py-5"},K={key:0};var N=e({props:{parameters:{type:Array,required:!0}},setup(e){const n=e,o=k(),i=d(),f=m(),h=t((()=>f.state.docs)),g=t((()=>n.parameters.some((e=>e.optional)))),w=e=>b(v(e.description,h.value,o,i)),j=e=>e.optional?`<code>${e.default}</code>`:"";return(t,n)=>{const o=$;return s(),r("div",B,[p("div",H,[p("table",S,[p("thead",D,[p("tr",F,[z,C,a(g)?(s(),r("th",O,"Optional")):u("",!0),a(g)?(s(),r("th",P,"Default")):u("",!0),R])]),p("tbody",null,[(s(!0),r(c,null,y(e.parameters,(e=>(s(),r("tr",{key:e.name},[p("td",Y,l(e.name),1),p("td",E,[p("div",null,[(s(!0),r(c,null,y(e.type,(t=>(s(),r(M,{key:a(x)(t),names:t,variable:e.variable,nullable:e.nullable},null,8,["names","variable","nullable"])))),128))])]),a(g)?(s(),r("td",G,[I,e.optional?(s(),r(o,{key:0,class:"h-5 w-5 mx-auto","aria-hidden":"true"})):u("",!0)])):u("",!0),a(g)?(s(),r("td",J,[e.optional&&void 0===e.default?(s(),r("em",K,"none")):(s(),r("span",{key:1,innerHTML:j(e)},null,8,["innerHTML"]))])):u("",!0),p("td",{class:"!pr-2.5 !py-0",innerHTML:w(e)},null,8,["innerHTML"])])))),128))])])])])}}});const Q={class:"break-words-legacy mt-4"},U=i(" See also: "),V={key:0},W={key:2},X={key:1},Z={key:2};var ee=e({props:{see:{type:Array,required:!0}},setup(e){const u=e,k=m(),d=t((()=>k.state.docs)),b=t((()=>{const e=new Array(u.see.length);for(let t=0;t<u.see.length;t++)e[t]=h(u.see[t],d.value);return e}));return(t,u)=>{const k=n("router-link"),d=f;return s(),r("div",Q,[U,e.see.length>1?(s(),r("ul",V,[(s(!0),r(c,null,y(a(b),(e=>(s(),r("li",{key:e.text},["object"==typeof e.link?(s(),r(k,{key:0,to:e.link},{default:o((()=>[i(l(e.text),1)])),_:2},1032,["to"])):"string"==typeof e.link?(s(),r("a",{key:1,href:e.link,target:"_blank",rel:"noopener"},[i(l(e.text)+" ",1),p(d,{class:"h-5 w-5 inline-block mb-1","aria-hidden":"true"})],8,["href"])):(s(),r("span",W,l(e.text),1))])))),128))])):(s(),r("span",X,["object"==typeof a(b)[0].link?(s(),r(k,{key:0,to:a(b)[0].link},{default:o((()=>[i(l(a(b)[0].text),1)])),_:1},8,["to"])):"string"==typeof a(b)[0].link?(s(),r("a",{key:1,href:a(b)[0].link,target:"_blank",rel:"noopener"},[i(l(a(b)[0].text)+" ",1),p(d,{class:"h-5 w-5 inline-block mb-1","aria-hidden":"true"})],8,["href"])):(s(),r("span",Z,l(a(b)[0].text),1))]))])}}});export{N as _,M as a,ee as b,v as c,j as d,h as p,x as t};
