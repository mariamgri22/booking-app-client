import{j as e,r as m,u as k,a as w,s as v,f as j,b as N,c as C}from"./index-23a5d042.js";import{s as y,C as H}from"./StyledPages-e8259471.js";import{u as D}from"./useDispatch-016e1038.js";const E=(n,i,r,c,a)=>{const p=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],x=[];for(let s=0;s<i;s++){const u=[];for(let h=0;h<7;h++){const l=new Date(n);l.setDate(n.getDate()+s*7+h);const g=l.toDateString()===new Date(r).toDateString(),f=c&&l.toDateString()===new Date(c).toDateString(),o=`calendar-cell ${g?"current-day":""} ${f?"selected":""}`;u.push(e.jsxs("div",{className:o,onClick:()=>a(l),children:[e.jsx("span",{className:"calendar-day",children:p[l.getDay()]}),e.jsx("div",{className:"calendar-date",children:l.getDate()})]},`day-${s}-${h}`))}x.push(e.jsx("div",{className:"calendar-week",children:u},`week-${s}`))}return x},z=y.div`
  padding: 20px;
  position: sticky;
  top: 0;
  background: #fff;
  > div > div {
    overflow-y: auto;
    padding: 10px;

    ::-webkit-scrollbar {
      width: 4px;
    }

    ::-webkit-scrollbar-track {
      background: #fff;
    }

    ::-webkit-scrollbar-thumb {
      background: #fff;
      border-radius: 10px;
    }

    ::-webkit-scrollbar-thumb:hover {
      background: rgb(225, 224, 224);
    }
    > div {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 10px;
      > div {
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        gap: 10px;
        > div {
          padding: 10px;

          > div {
            font-weight: bold;
            font-size: 18px;
          }

          span {
            margin-top: 4px;
            font-size: 14px;
            color: #666;
          }
        }
        .current-day {
          background-color: rgb(225 224 224);
          border-radius: 18px;
        }
        .selected {
          background-color: #000;
          color: #fff;
          border-radius: 18px;
        }
      }
    }
  }
`,$=y.div`
  padding: 20px;

  > div {
    > div {
      border-radius: 25px;
      border: 2px solid;
      border-color: #675f5f94;
      padding: 20px;
      margin: 10px;

      h3 {
        font-size: 16px;
        font-weight: 500;
        text-transform: uppercase;
      }

      img {
        width: 24px;
        height: 24px;
      }
    }

    .button-container {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;

      .hour-button {
        display: block;
        width: 100%;
        padding: 18px;
        border-color: #675f5f94;
        background-color: #fff;
        border-radius: 25px;
        color: #333;
        cursor: pointer;
      }

      .selected {
        background-color: #000;
        color: #fff;
      }
    }
  }

  .selected-hour {
    position: sticky;
    bottom: 0;
    z-index: 1;
    padding: 2rem 0 0 0;

    button {
      background-color: black;
      width: 100%;
      padding: 18px;
      border: none;
      border-radius: 20px;
      color: #fff;
      cursor: pointer;
    }
  }

  @media (max-width: 768px) {
    padding: 10px;

    > div {
      > div {
        padding: 10px;
        margin: 5px;

        h3 {
          font-size: 14px;
        }

        img {
          width: 20px;
          height: 20px;
        }
      }

      .button-container {
        .hour-button {
          padding: 14px;
        }
      }
    }

    .selected-hour {
      padding: 1rem 0 0 0;
    }
  }

  @media (max-width: 480px) {
    padding: 5px;

    > div {
      > div {
        padding: 5px;
        margin: 2px;

        h3 {
          font-size: 12px;
        }

        img {
          width: 16px;
          height: 16px;
        }
      }

      .button-container {
        .hour-button {
          padding: 10px;
        }
      }
    }

    .selected-hour {
      padding: 0.5rem 0 0 0;
    }
  }
`,b=({isHourSelected:n,hour:i,index:r,handleHourClick:c})=>e.jsx(e.Fragment,{children:e.jsx("button",{className:`hour-button ${n(i)?"selected":""}`,onClick:()=>c(i),children:i},r)}),W=()=>{const[n,i]=m.useState(!0),[r,c]=m.useState(!0),[a,p]=m.useState(!0),{availableHours:x,selectedHour:s}=k(o=>o.calendar),u=w(),h=D(),l=o=>{h(v(o))},g=o=>s===o,f=()=>{u("/services")};return e.jsxs($,{children:[x.map((o,S)=>e.jsxs("div",{children:[e.jsxs("div",{children:[e.jsx("div",{onClick:()=>i(!n),children:e.jsx("h3",{className:"time-period",children:"Morning"})}),n&&e.jsx("div",{className:"button-container",children:o.filter(d=>{const t=d.split(":")[0];return t>="10"&&t<"12"}).map((d,t)=>e.jsx(b,{hour:d,index:t,handleHourClick:l,isHourSelected:g}))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"time-period",onClick:()=>c(!r),children:"Day"}),r&&e.jsx("div",{className:"button-container",children:o.filter(d=>{const t=d.split(":")[0];return t>="12"&&t<"18"}).map((d,t)=>e.jsx(b,{hour:d,index:t,handleHourClick:l,isHourSelected:g}))})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"time-period",onClick:()=>p(!a),children:"Evening"}),a&&e.jsx("div",{className:"button-container",children:o.filter(d=>{const t=d.split(":")[0];return t>="18"&&t<="23"}).map((d,t)=>e.jsx(b,{hour:d,index:t,handleHourClick:l,isHourSelected:g}))})]})]},S)),s&&e.jsx("div",{className:"selected-hour",children:e.jsx("button",{onClick:f,children:"Continue"})})]})},M=({startDate:n,numWeeks:i})=>{const r=D(),{selectedDay:c,currentDay:a,status:p}=k(s=>s.calendar),x=async s=>{const u=s.toISOString().split("T")[0];r(N(u)),r(j(u)),r(v(null))};return m.useEffect(()=>{r(j(a)),r(v(null))},[a,r]),m.useEffect(()=>{localStorage.setItem("currentDay",a)},[a]),e.jsxs(e.Fragment,{children:[e.jsx(z,{children:e.jsx("div",{className:"calendar-scroll",children:e.jsx("div",{className:"calendar",children:e.jsxs("div",{className:"calendar-grid",children:[" ",E(n,i,a,c,x)]})})})}),e.jsxs("div",{className:"hours-container",children:[p==="loading"&&e.jsx("div",{children:"Loading..."}),p==="failed"&&e.jsx("div",{children:"Not Available hours"}),p==="succeeded"&&e.jsx(W,{})]})]})},F="/assets/user-d8b9d6d4.svg",O=()=>{const n=new Date,i=5,r=w(),c=C.get("token"),a=()=>{r(c?"/user":"/profile")};return e.jsxs("div",{className:"calendar-container",children:[e.jsxs(H,{children:[e.jsx("h1",{children:"Booking app"}),e.jsx("img",{onClick:a,src:F,alt:""})]}),e.jsx("hr",{}),e.jsx("div",{children:e.jsx(M,{startDate:n,numWeeks:i})})]})};export{O as default};
