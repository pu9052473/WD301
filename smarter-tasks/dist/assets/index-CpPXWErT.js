import{u,j as e}from"./index-Ca0gi0pd.js";import{A as m}from"./constants-qZa9FZnL.js";import{u as g}from"./index.esm-CsLqHJ1C.js";const f=()=>{const{register:o,handleSubmit:n,formState:{errors:r}}=g(),i=u(),a=async l=>{const{email:d,password:c}=l;try{const s=await fetch(`${m}/users/sign_in`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:d,password:c})});if(!s.ok)throw console.log("User Credentials are incorrect"),new Error("Sign-in failed");const t=await s.json();localStorage.setItem("authToken",t.token),localStorage.setItem("userData",JSON.stringify(t.user)),console.log("Sign Succesfull"),i("/account")}catch(s){console.log(s)}};return e.jsxs("form",{onSubmit:n(a),children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Email:"}),e.jsx("input",{...o("email",{required:!0}),name:"email",id:"email",className:"w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"}),r.email&&e.jsx("span",{children:"This field is required"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-gray-700 font-semibold mb-2",children:"Password:"}),e.jsx("input",{...o("password",{required:!0}),name:"password",id:"password",type:"password",className:"w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"}),r.password&&e.jsx("span",{children:"This field is required"})]}),e.jsx("button",{type:"submit",className:"w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4",children:"Sign In"})]})},p=()=>e.jsx("div",{className:"min-h-screen flex items-center justify-center bg-gray-100",children:e.jsxs("div",{className:"max-w-md w-full px-6 py-8 bg-white rounded-lg shadow-md",children:[e.jsx("h1",{className:"text-3xl font-bold text-center text-gray-800 mb-8",children:"Sign in"}),e.jsx(f,{})]})});export{p as default};