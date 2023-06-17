import{r as S,j as e,g as w,u as q,c as C,a as F,n as E,o as b}from"./index-23a5d042.js";import{c as T,a as d,b as H,F as A,d as I,e as l,L as m,I as x,E as h,f as $,S as R,g as z,h as L,T as M,i as k}from"./index.esm-dbfec7dd.js";import{s as U,S as O}from"./StyledPages-e8259471.js";import{u as V}from"./useDispatch-016e1038.js";import{l as G}from"./left-631a3c6a.js";import"./iconBase-76a6928b.js";const J=({handleBooking:p})=>{const[s,o]=S.useState(!1),t=()=>{o(!s)},r={username:"",telephone:"+374",email:"",password:"",confirmPassword:"",reminder:"",comment:""},g=T({username:d().required("Username is required"),telephone:d().matches(/^\+374/,"Telephone must start with +374").min(8,"Telephone must be at least 8 characters").required("Telephone is required"),email:d().email("Invalid email address").required("Email is required"),password:d().min(6,"Password must be at least 4 characters").max(32,"Password must not exceed 32 characters").required("Password is required"),confirmPassword:d().oneOf([H("password"),void 0],"Passwords must match").required("Confirm Password is required"),reminder:d(),comment:d()}),v=[{label:"Per 1 hour",value:"option1"},{label:"Per 2 hours",value:"option2"},{label:"Per 3 hours",value:"option3"}],y=async(u,{setSubmitting:i})=>{await p(u,i)};return e.jsx(A,{initialValues:r,validationSchema:g,onSubmit:y,children:({isSubmitting:u})=>e.jsxs(I,{children:[e.jsxs(l,{children:[e.jsx(m,{htmlFor:"username",children:"Username"}),e.jsx(x,{type:"text",id:"username",name:"username"}),e.jsx(h,{name:"username",component:"div",className:"error"})]}),e.jsxs(l,{children:[e.jsx(m,{htmlFor:"telephone",children:"Telephone"}),e.jsx(x,{type:"text",id:"telephone",name:"telephone",placeholder:"+374"}),e.jsx(h,{name:"telephone",component:"div",className:"error"})]}),e.jsxs(l,{children:[e.jsx(m,{htmlFor:"email",children:"Email"}),e.jsx(x,{type:"email",id:"email",name:"email"}),e.jsx(h,{name:"email",component:"div",className:"error"})]}),e.jsxs(l,{children:[e.jsx(m,{htmlFor:"password",children:"Password"}),e.jsxs($,{children:[e.jsx(x,{type:s?"text":"password",id:"password",name:"password"}),e.jsx(R,{type:"button",onClick:t,children:s?e.jsx(z,{}):e.jsx(L,{})})]}),e.jsx(h,{name:"password",component:"div",className:"error"})]}),e.jsxs(l,{children:[e.jsx(m,{htmlFor:"confirmPassword",children:"Confirm Password"}),e.jsx(x,{type:"password",id:"confirmPassword",name:"confirmPassword"}),e.jsx(h,{name:"confirmPassword",component:"div",className:"error"})]}),e.jsxs(l,{children:[e.jsx(m,{htmlFor:"reminder",children:"Reminder"}),e.jsxs(x,{as:"select",id:"reminder",name:"reminder",style:{width:"100%"},children:[e.jsx("option",{value:"",disabled:!0,children:"Select a reminder"}),v.map(i=>e.jsx("option",{value:i.value,children:i.label},i.value))]}),e.jsx(h,{name:"reminder",component:"div",className:"error"})]}),e.jsxs(l,{children:[e.jsx(m,{htmlFor:"comment",children:"Comment"}),e.jsx(M,{as:"textarea",id:"comment",name:"comment"}),e.jsx(h,{name:"comment",component:"div",className:"error"})]}),e.jsx(k,{type:"submit",disabled:u,children:"Submit"})]})})},K=()=>{const s=w("selectedServices").reduce((o,{price:t})=>o+t,0);return e.jsxs("span",{children:["Total Price: ",s," AMD"]})},Q=U.div`
  text-align: start; 
  padding-inline: 20px;
  font-size: 18px;

  .hours {
    display: flex;
    gap: 20px;
    justify-content: start; 
  }

  .desc {
    display: flex;
    gap: 10px;
    justify-content: start; 
  }

  span:last-child {
    font-weight: bold;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`,W=()=>{const p=V(),s=w("selectedServices");let{currentDay:o,selectedDay:t,selectedHour:r}=q(a=>a.calendar);o||(o=w("currentDay")),t||(t=w("selectedDay")),r||(r=w("selectedHour"));const g=C.get("token"),[v,y]=S.useState(r);S.useEffect(()=>{if(r&&s.length>0){const[a,n]=r.split(":");for(const{duration:c}of s){const j=parseInt(c),f=new Date;f.setHours(Number(a),Number(n));const P=new Date(f.getTime()+j*60*60*1e3),B=`${P.getHours()}:${P.getMinutes().toString().padStart(2,"0")}`;y(B)}}},[r,s]);const u=F(),i=t||o,N=async a=>{try{await p(E(a));for(const{description:n,price:c,duration:j}of s)await b.post("/createService",{description:n,price:c,duration:j,hour:r,day:t}),u("/user")}catch(n){console.error(n)}},D=async()=>{try{for(const{description:a,price:n,duration:c}of s)await b.post("/createService",{description:a,price:n,duration:c,hour:r,day:t}),u("/user")}catch(a){console.error(a)}};return e.jsxs(e.Fragment,{children:[e.jsxs(Q,{children:[e.jsx("h4",{children:"Booking details"}),e.jsxs("div",{className:"hours",children:[e.jsxs("span",{children:[i," "]}),e.jsxs("span",{children:["From: ",r]})," - ",e.jsxs("span",{children:[" To:",v]})]}),s.map(({id:a,description:n,category:c,price:j,duration:f})=>e.jsxs("div",{className:"desc",children:[e.jsx("span",{children:n}),e.jsx("span",{children:c}),e.jsxs("span",{children:[j," AMD"]}),e.jsxs("span",{children:[f," hour(s)"]})]},a)),e.jsx(K,{})]}),e.jsx("hr",{}),g?e.jsx(e.Fragment,{children:e.jsx(k,{onClick:D,children:"Booking"})}):e.jsx(J,{handleBooking:N})]})},re=()=>{const p=F(),s=()=>{p("/services")};return e.jsxs("div",{children:[e.jsxs(O,{children:[e.jsx("img",{onClick:s,src:G,alt:""}),e.jsx("h3",{children:"Booking"})]}),e.jsx("hr",{}),e.jsx(W,{})]})};export{re as default};
