import{a as d,r as w,j as s,p as g}from"./index-23a5d042.js";import{c as f,a as t,F as P,d as S,e as o,L as n,I as l,E as m,f as F,S as b,g as v,h as y,i as E}from"./index.esm-dbfec7dd.js";import{u as L}from"./useDispatch-016e1038.js";import{l as q}from"./left-631a3c6a.js";import{S as C}from"./StyledPages-e8259471.js";import"./iconBase-76a6928b.js";const I=()=>{const a=L(),e=d(),[r,c]=w.useState(!1),p=()=>{c(!r)},x={email:"",password:""},h=f({email:t().email("Invalid email address").required("Email is required"),password:t().min(6,"Password must be at least 4 characters").max(32,"Password must not exceed 32 characters").required("Password is required")}),u=async(i,{setSubmitting:j})=>{await a(g(i)),await e("/user"),j(!1)};return s.jsx(P,{initialValues:x,validationSchema:h,onSubmit:u,children:({isSubmitting:i})=>s.jsxs(S,{children:[s.jsxs(o,{children:[s.jsx(n,{htmlFor:"email",children:"Email"}),s.jsx(l,{type:"email",id:"email",name:"email"}),s.jsx(m,{name:"email",component:"div",className:"error"})]}),s.jsxs(o,{children:[s.jsx(n,{htmlFor:"password",children:"Password"}),s.jsxs(F,{children:[s.jsx(l,{type:r?"text":"password",id:"password",name:"password"}),s.jsx(b,{type:"button",onClick:p,children:r?s.jsx(v,{}):s.jsx(y,{})})]}),s.jsx(m,{name:"password",component:"div",className:"error"})]}),s.jsx(E,{type:"submit",disabled:i,children:"Submit"})]})})},G=()=>{const a=d(),e=()=>{a("/profile")};return s.jsxs(s.Fragment,{children:[s.jsxs(C,{children:[s.jsx("img",{onClick:e,src:q,alt:""}),s.jsx("h3",{children:"Login Page"})]}),s.jsx(I,{})]})};export{G as default};