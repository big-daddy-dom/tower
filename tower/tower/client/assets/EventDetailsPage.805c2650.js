import{C as j,u as D,m as M,c as d,a as m,o as s,b as a,d as t,t as i,g as f,w as A,H as B,j as I,h as v,F as k,E as g,e as _,A as w}from"./vendor.8b5ed6d6.js";import{_ as N,a as C,l as b,P as c,e as T,t as u,A as l,c as V}from"./index.eff3016d.js";const P={setup(){j(async()=>{await C.getMyEvents(),await C.getMyTickets()});const r=D();return M(async()=>{try{r.name=="EventDetails"&&(await T.getEvent(r.params.id),await u.getTicketsByEvent(r.params.id),await V.getCommentsByEvent(r.params.id))}catch(n){b.error(n),c.toast(n.message,"error")}}),{async deleteEvent(n){try{b.log(n),await c.confirm("cancel event?")&&await T.deleteEvent(n),c.toast("Event deleted","success")}catch(h){c.toast(h.message,"error")}},async createTicket(){try{await u.createTicket({eventId:r.params.id,userId:l.account.id}),c.toast("Ticket created","success")}catch{c.toast("You already have a ticket for this event","error")}},async deleteTicket(){try{await c.confirm("cancel ticket?")&&(await u.deleteTicket(props.ticket.id),c.toast("Ticket deleted successfully"))}catch(n){c.error(n.message)}},event:d(()=>l.activeEvent),comments:d(()=>l.comments),myTickets:d(()=>l.myTickets),tickets:d(()=>l.tickets),account:d(()=>l.account)}}},F={class:"event-details-page container-fluid bg-secondary"},G={id:"event",class:"justify-content-center container-fluid text-center"},L={class:"py-4 d-flex justify-content-around"},R=t("h4",{class:"mdi mdi-delete"},"Cancel your Event?",-1),H=[R],O={key:0,class:"text-warning"},W=["src"],Y={class:"px-5"},q={id:"ticket-container ",class:"container-fluid justify-content-center d-flex flex-column"},z={key:0,class:"text-center"},J=t("h2",null," Get Ticket!",-1),K=t("h4",null,null,-1),Q=[J,K],U={class:"container-fluid text-center d-flex justify-content-center flex-column"},X=t("h1",null,"Who's attending?",-1),Z={class:"row"},$={class:""},ee=t("div",{class:"container d-flex flex-column justify-content-center"},[t("div",{class:"row"},[t("h1",null,"See what people are saying"),t("div",null,[t("button",{type:"button",class:"btn btn-primary","data-bs-toggle":"modal","data-bs-target":"#create-comment"}," CREATE A COMMENT ")])])],-1),te={class:"container-fluid"};function ne(r,n,h,e,se,ae){var y;const E=m("Ticket"),x=m("Comment"),p=m("CreateComment"),S=m("Modal");return s(),a("div",F,[t("section",G,[t("h1",null,"Event Creator: "+i((y=e.event.creator)==null?void 0:y.name),1),t("h1",L,[f("Details for "+i(e.event.name),1),e.account.id==e.event.creatorId?A((s(),a("button",{key:0,class:"btn btn-danger",onClick:n[0]||(n[0]=I(o=>e.deleteEvent(e.event.id),["stop"]))},H,512)),[[B,e.event.isCanceled==!1]]):v("",!0)]),e.event.isCanceled==!0?(s(),a("h1",O,"Sorry, this event is cancelled")):v("",!0),t("h2",null," It's habbening on "+i(new Date(e.event.startDate).toLocaleDateString("en-us",{weekday:"long",year:"numeric",month:"short",day:"numeric"})),1),t("h2",null,"It's habbening "+i(e.event.location),1),t("img",{class:"img-fluid",src:e.event.coverImg,alt:""},null,8,W)]),t("h4",Y,i(e.event.description),1),t("section",q,[e.event.isCanceled==!1?(s(),a("h1",z,"Get Tickets! Tickets remaining: "+i(e.event.capacity),1)):v("",!0),e.event.isCanceled==!1&&e.event.capacity>=1?(s(),a("button",{key:1,class:"btn bg-success",onClick:n[1]||(n[1]=(...o)=>e.createTicket&&e.createTicket(...o))},Q)):v("",!0),t("div",U,[X,t("div",Z,[(s(!0),a(k,null,g(e.tickets,o=>(s(),a("div",{key:o.id},[_(E,{ticket:o},null,8,["ticket"])]))),128))])])]),t("section",$,[ee,t("div",te,[(s(!0),a(k,null,g(e.comments,o=>(s(),a("div",{class:"row",key:o.id},[_(x,{comment:o},null,8,["comment"])]))),128))])]),_(S,{id:"create-comment"},{header:w(()=>[f("Comment on "+i(e.event.name),1)]),body:w(()=>[_(p)]),_:1})])}var ie=N(P,[["render",ne]]);export{ie as default};
