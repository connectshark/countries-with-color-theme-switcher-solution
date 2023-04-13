import{c as f,u as x,r as k,o as e,a,b as s,d,w as _,e as t,t as n,f as l,F as u,g as p,h as y}from"./index-37340ac9.js";const w={class:"min-h"},v={class:"w-11/12 mx-auto py-10"},C=s("i",{class:"bx bx-left-arrow-alt bx-sm"},null,-1),B=s("span",{class:""},"Back",-1),V={key:0,class:"text-center"},N=s("i",{class:"bx bx-loader-alt bx-spin bx-md"},null,-1),j=[N],D={key:1,class:"w-11/12 mx-auto grid lg:grid-cols-2 grid-rows-2 gap-4"},S={class:"row-span-2"},F=["src"],O={class:"p-6 grid grid-cols-2 gap-4"},R={class:"col-span-2 font-extrabold text-2xl mb-6"},E=s("span",{class:"font-semibold"},"Population:",-1),L=s("span",{class:"font-semibold"},"Region:",-1),P=s("span",{class:"font-semibold"},"Sub Region:",-1),T=s("span",{class:"font-semibold"},"Capital:",-1),q=s("span",{class:"font-semibold"},"currencies:",-1),z=s("span",{class:"font-semibold"},"languages:",-1),A={class:"inline-block"},G={key:0,class:"p-6"},H=s("h3",{class:"font-extrabold"},"Border Countries:",-1),I={class:"space-x-4"},J={class:"inline-block mb-4"},U={__name:"DetailView",props:{country:String},setup(m){const h=m,g=f(()=>h.country),{data:o,loading:b,borders:i}=x(g);return(K,M)=>{const r=k("router-link");return e(),a("main",w,[s("aside",v,[d(r,{to:"/",class:"w-40 shadow py-4 bg-primary-white dark:bg-primary-dark flex items-center justify-center"},{default:_(()=>[C,B]),_:1})]),t(b)?(e(),a("div",V,j)):(e(),a("div",D,[s("figure",S,[s("img",{class:"mx-auto",src:t(o).flags.svg,alt:"country flag"},null,8,F)]),s("div",O,[s("h2",R,n(t(o).name.common),1),s("p",null,[E,l(" "+n(t(o).population),1)]),s("p",null,[L,l(" "+n(t(o).region),1)]),s("p",null,[P,l(" "+n(t(o).subregion),1)]),s("p",null,[T,l(" "+n(t(o).capital[0]),1)]),s("p",null,[q,l(" "+n(Object.keys(t(o).currencies)[0]),1)]),s("p",null,[z,(e(!0),a(u,null,p(Object.values(t(o).languages),c=>(e(),a("span",A,n(c),1))),256))])]),t(i).length>0?(e(),a("div",G,[H,s("ul",I,[(e(!0),a(u,null,p(t(i),c=>(e(),a("li",J,[d(r,{class:"bg-primary-white dark:bg-primary-dark block p-4 shadow",to:c.code},{default:_(()=>[l(n(c.name),1)]),_:2},1032,["to"])]))),256))])])):y("",!0)]))])}}};export{U as default};