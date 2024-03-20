"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7902],{81:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=r(4848),d=r(8453);const s={id:"add"},i=void 0,a={id:"add",title:"add",description:"add() function",source:"@site/docs/add.md",sourceDirName:".",slug:"/add",permalink:"/docs/add",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"add"},sidebar:"api",previous:{title:"zipWithIndex",permalink:"/docs/zipWithIndex"},next:{title:"always",permalink:"/docs/always"}},o={},c=[{value:"add() function",id:"add-function",level:2},{value:"Example",id:"example",level:2}];function u(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"add-function",children:"add() function"}),"\n",(0,t.jsx)(n.p,{children:"Adds two values."}),"\n",(0,t.jsx)("b",{children:"Signature:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"declare function add<A extends number | Promise<number>, B extends number | Promise<number>>(a: A, b: B): ReturnAddType<number | Promise<number>, A, B>;\n\ndeclare function add<A extends string | Promise<string>, B extends string | Promise<string>>(a: A, b: B): ReturnAddType<string | Promise<string>, A, B>;\n\ndeclare function add<A extends number | Promise<number>, B extends number | Promise<number>>(a: A): (b: B) => ReturnAddType<number | Promise<number>, A, B>;\n\ndeclare function add<A extends string | Promise<string>, B extends string | Promise<string>>(a: A): (b: B) => ReturnAddType<string | Promise<string>, A, B>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"add(1, 2); // 3\r\nawait add(1, Promise.resolve(2)); // 3\r\nawait add(Promise.resolve(1), 2); // 3\r\nawait add(Promise.resolve(1), Promise.resolve(2)); // 3\r\n\r\nadd('a', 'b'); // 'ab'\r\nawait add('a', Promise.resolve('b')); // 'ab'\r\nawait add(Promise.resolve('a'), 'b'); // 'ab'\r\nawait add(Promise.resolve('a'), Promise.resolve('b')); // 'ab'\n"})})]})}function l(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>a});var t=r(6540);const d={},s=t.createContext(d);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);