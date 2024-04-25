"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7214],{7501:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>s,default:()=>l,frontMatter:()=>p,metadata:()=>c,toc:()=>a});var o=r(4848),t=r(8453);const p={id:"prop"},s=void 0,c={id:"prop",title:"prop",description:"prop() function",source:"@site/docs/prop.md",sourceDirName:".",slug:"/prop",permalink:"/docs/prop",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"prop"},sidebar:"api",previous:{title:"pipe",permalink:"/docs/pipe"},next:{title:"props",permalink:"/docs/props"}},i={},a=[{value:"prop() function",id:"prop-function",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h2,{id:"prop-function",children:"prop() function"}),"\n",(0,o.jsx)(n.p,{children:"Get the value of a property from an object, or return undefined if the property does not exist on the object."}),"\n",(0,o.jsx)("b",{children:"Signature:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-typescript",children:"declare function prop<K extends Key, T>(key: K, obj: T): Prop<T, K>;\n\ndeclare function prop<K extends Key>(key: K): <T>(obj: T) => Prop<T, K>;\n"})}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:'// get the `name` property from an object\r\nconst person = { name: "John", age: 30 };\r\nconst name = prop("name", person); // "John"\r\n\r\n// with pipe\r\npipe(\r\n person,\r\n prop("name"),\r\n);\r\n\r\n// get the `address` property from an object that may be null or undefined\r\nconst maybePerson = null;\r\nconst address = prop("address", maybePerson); // undefined\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/marpple/FxTS/blob/main/src/prop.ts",children:"Open Source Code"})})]})}function l(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>c});var o=r(6540);const t={},p=o.createContext(t);function s(e){const n=o.useContext(p);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),o.createElement(p.Provider,{value:n},e.children)}}}]);