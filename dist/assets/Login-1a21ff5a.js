import{_ as c,r as i,u as p,f as m,o as f,c as _,b as o,g as l,v as d,h as w}from"./index-9d262a04.js";const g={setup(){const n=i(""),s=i(""),r=p(),e=m();return{username:n,password:s,login:()=>{window.user=n.value;const a=e.query.redirect||"/protected";r.push(a)}}}},b={class:"login"},h=o("h1",null,"Login",-1),v=o("label",{for:"username"},"Username",-1),x=o("label",{for:"password"},"Password",-1),y=o("button",{class:"btn"},"Login",-1);function B(n,s,r,e,u,a){return f(),_("div",b,[o("form",{class:"form",onSubmit:s[2]||(s[2]=w((...t)=>e.login&&e.login(...t),["prevent"]))},[h,v,l(o("input",{"onUpdate:modelValue":s[0]||(s[0]=t=>e.username=t),type:"text",name:"username",class:"input"},null,512),[[d,e.username]]),x,l(o("input",{"onUpdate:modelValue":s[1]||(s[1]=t=>e.password=t),type:"password",name:"texts",class:"input"},null,512),[[d,e.password]]),y],32)])}const U=c(g,[["render",B]]);export{U as default};