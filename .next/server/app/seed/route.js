(()=>{var e={};e.id=530,e.ids=[530],e.modules={5486:e=>{"use strict";e.exports=require("bcrypt")},846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},9428:e=>{"use strict";e.exports=require("buffer")},5511:e=>{"use strict";e.exports=require("crypto")},4735:e=>{"use strict";e.exports=require("events")},9021:e=>{"use strict";e.exports=require("fs")},1630:e=>{"use strict";e.exports=require("http")},5591:e=>{"use strict";e.exports=require("https")},1645:e=>{"use strict";e.exports=require("net")},1820:e=>{"use strict";e.exports=require("os")},3873:e=>{"use strict";e.exports=require("path")},7910:e=>{"use strict";e.exports=require("stream")},4631:e=>{"use strict";e.exports=require("tls")},9551:e=>{"use strict";e.exports=require("url")},4075:e=>{"use strict";e.exports=require("zlib")},7990:()=>{},2339:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{patchFetch:()=>d,routeModule:()=>m,serverHooks:()=>p,workAsyncStorage:()=>c,workUnitAsyncStorage:()=>l});var r=a(2706),i=a(8203),u=a(5994),n=a(7976),o=e([n]);n=(o.then?(await o)():o)[0];let m=new r.AppRouteRouteModule({definition:{kind:i.RouteKind.APP_ROUTE,page:"/seed/route",pathname:"/seed",filename:"route",bundlePath:"app/seed/route"},resolvedPagePath:"/home/differenz157/Next-js-Project/app/seed/route.ts",nextConfigOutput:"",userland:n}),{workAsyncStorage:c,workUnitAsyncStorage:l,serverHooks:p}=m;function d(){return(0,u.patchFetch)({workAsyncStorage:c,workUnitAsyncStorage:l})}s()}catch(e){s(e)}})},6487:()=>{},8335:()=>{},6603:(e,t,a)=>{"use strict";a.d(t,{VV:()=>s,j8:()=>u,rN:()=>i,yR:()=>r});let s=[{id:"410544b2-4001-4271-9855-fec4b6a6442a",name:"User",email:"user@nextmail.com",password:"123456"}],r=[{id:"d6e15727-9fe1-4961-8c5b-ea44a9bd81aa",name:"Evil Rabbit",email:"evil@rabbit.com",image_url:"/customers/evil-rabbit.png"},{id:"3958dc9e-712f-4377-85e9-fec4b6a6442a",name:"Delba de Oliveira",email:"delba@oliveira.com",image_url:"/customers/delba-de-oliveira.png"},{id:"3958dc9e-742f-4377-85e9-fec4b6a6442a",name:"Lee Robinson",email:"lee@robinson.com",image_url:"/customers/lee-robinson.png"},{id:"76d65c26-f784-44a2-ac19-586678f7c2f2",name:"Michael Novotny",email:"michael@novotny.com",image_url:"/customers/michael-novotny.png"},{id:"CC27C14A-0ACF-4F4A-A6C9-D45682C144B9",name:"Amy Burns",email:"amy@burns.com",image_url:"/customers/amy-burns.png"},{id:"13D07535-C59E-4157-A011-F8D2EF4E0CBB",name:"Balazs Orban",email:"balazs@orban.com",image_url:"/customers/balazs-orban.png"}],i=[{customer_id:r[0].id,amount:15795,status:"pending",date:"2022-12-06"},{customer_id:r[1].id,amount:20348,status:"pending",date:"2022-11-14"},{customer_id:r[4].id,amount:3040,status:"paid",date:"2022-10-29"},{customer_id:r[3].id,amount:44800,status:"paid",date:"2023-09-10"},{customer_id:r[5].id,amount:34577,status:"pending",date:"2023-08-05"},{customer_id:r[2].id,amount:54246,status:"pending",date:"2023-07-16"},{customer_id:r[0].id,amount:666,status:"pending",date:"2023-06-27"},{customer_id:r[3].id,amount:32545,status:"paid",date:"2023-06-09"},{customer_id:r[4].id,amount:1250,status:"paid",date:"2023-06-17"},{customer_id:r[5].id,amount:8546,status:"paid",date:"2023-06-07"},{customer_id:r[1].id,amount:500,status:"paid",date:"2023-08-19"},{customer_id:r[5].id,amount:8945,status:"paid",date:"2023-06-03"},{customer_id:r[2].id,amount:1e3,status:"paid",date:"2022-06-05"}],u=[{month:"Jan",revenue:2e3},{month:"Feb",revenue:1800},{month:"Mar",revenue:2200},{month:"Apr",revenue:2500},{month:"May",revenue:2300},{month:"Jun",revenue:3200},{month:"Jul",revenue:3500},{month:"Aug",revenue:3700},{month:"Sep",revenue:2500},{month:"Oct",revenue:2800},{month:"Nov",revenue:3e3},{month:"Dec",revenue:4800}]},7976:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{GET:()=>l});var r=a(5486),i=a.n(r),u=a(6875),n=a(6603);let e=await u.db.connect();async function o(){return await e.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`,await e.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `,await Promise.all(n.VV.map(async t=>{let a=await i().hash(t.password,10);return e.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${t.id}, ${t.name}, ${t.email}, ${a})
        ON CONFLICT (id) DO NOTHING;
      `}))}async function d(){return await e.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`,await e.sql`
    CREATE TABLE IF NOT EXISTS invoices (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      customer_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `,await Promise.all(n.rN.map(t=>e.sql`
        INSERT INTO invoices (customer_id, amount, status, date)
        VALUES (${t.customer_id}, ${t.amount}, ${t.status}, ${t.date})
        ON CONFLICT (id) DO NOTHING;
      `))}async function m(){return await e.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`,await e.sql`
    CREATE TABLE IF NOT EXISTS customers (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL
    );
  `,await Promise.all(n.yR.map(t=>e.sql`
        INSERT INTO customers (id, name, email, image_url)
        VALUES (${t.id}, ${t.name}, ${t.email}, ${t.image_url})
        ON CONFLICT (id) DO NOTHING;
      `))}async function c(){return await e.sql`
    CREATE TABLE IF NOT EXISTS revenue (
      month VARCHAR(4) NOT NULL UNIQUE,
      revenue INT NOT NULL
    );
  `,await Promise.all(n.j8.map(t=>e.sql`
        INSERT INTO revenue (month, revenue)
        VALUES (${t.month}, ${t.revenue})
        ON CONFLICT (month) DO NOTHING;
      `))}async function l(){try{return await e.sql`BEGIN`,await o(),await m(),await d(),await c(),await e.sql`COMMIT`,Response.json({message:"Database seeded successfully"})}catch(t){return await e.sql`ROLLBACK`,Response.json({error:t},{status:500})}}s()}catch(e){s(e)}},1)},2706:(e,t,a)=>{"use strict";e.exports=a(4870)}};var t=require("../../webpack-runtime.js");t.C(e);var a=e=>t(t.s=e),s=t.X(0,[994,875],()=>a(2339));module.exports=s})();