"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6254],{9483:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=t(4848),o=t(8453);const a={id:"tap"},s=void 0,i={id:"tap",title:"tap",description:"tap() function",source:"@site/docs/tap.md",sourceDirName:".",slug:"/tap",permalink:"/docs/tap",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"tap"},sidebar:"api",previous:{title:"sum",permalink:"/docs/sum"},next:{title:"throwError",permalink:"/docs/throwError"}},c={},p=[{value:"tap() function",id:"tap-function",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"tap-function",children:"tap() function"}),"\n",(0,r.jsx)(n.p,{children:"This method invokes interceptor and returns a value. The interceptor is invoked with one argument."}),"\n",(0,r.jsx)("b",{children:"Signature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"declare function tap<T, U>(f: (arg: Awaited<T>) => U, v: T): U extends Promise<any> ? Promise<Awaited<T>> : T;\n\ndeclare function tap<T, U>(f: (arg: Awaited<T>) => U): (v: T) => U extends Promise<any> ? Promise<Awaited<T>> : T;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"tap(console.log, [1,2,3,4,5])\r\n// log [1, 2, 3, 4, 5]\r\n// return [1, 2, 3, 4, 5]\r\n\r\ntap(async (a) => console.log(a), [1,2,3,4,5]);\r\n// log [1, 2, 3, 4, 5]\r\n// return Promise<[1, 2, 3, 4, 5]>\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/marpple/FxTS/blob/main/src/tap.ts",children:"Open Source Code"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(6540);const o={},a=r.createContext(o);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);