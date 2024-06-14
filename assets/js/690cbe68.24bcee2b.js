"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4630],{6525:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>v,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=t(4848),r=t(8453);const i={id:"evolve"},s=void 0,c={id:"evolve",title:"evolve",description:"evolve() function",source:"@site/docs/evolve.md",sourceDirName:".",slug:"/evolve",permalink:"/docs/evolve",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"evolve"},sidebar:"api",previous:{title:"every",permalink:"/docs/every"},next:{title:"find",permalink:"/docs/find"}},a={},l=[{value:"evolve() function",id:"evolve-function",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"evolve-function",children:"evolve() function"}),"\n",(0,o.jsx)(n.p,{children:"Creates a new object by recursively evolving a shallow copy of object, according to the transformation functions."}),"\n",(0,o.jsx)("b",{children:"Signature:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"declare function evolve<O extends Record<string, any>, T extends Transformation<O>>(transformation: T, obj: O): EvolveReturnType<O, T>;\n\ndeclare function evolve<O extends Record<string, any>, T extends Transformation<O>>(transformation: T): (obj: O) => EvolveReturnType<O, T>;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'const add1String = (a: number) => String(a + 1);\r\nconst obj = { a: 1, b: 2, c: { d: 3, e: 4 }, f: true };\r\nconst transformation = {\r\n  a: add1String,\r\n  b: add1String,\r\n  c: (obj: { d: number; e: number }) =>\r\n    evolve({ d: add1String, e: add1String }, obj),\r\n};\r\nevolve(transformation, obj);\r\n// { a: "2", b: "3", c: { d: "4", e: "5" }, f: true }\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/marpple/FxTS/blob/main/src/evolve.ts",children:"Open Source Code"})})]})}function v(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(6540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);