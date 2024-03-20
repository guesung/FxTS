"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8712],{7611:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>i});var r=t(4848),c=t(8453);const a={id:"pluck"},s=void 0,o={id:"pluck",title:"pluck",description:"pluck() function",source:"@site/docs/pluck.md",sourceDirName:".",slug:"/pluck",permalink:"/docs/pluck",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"pluck"},sidebar:"api",previous:{title:"pipeLazy",permalink:"/docs/pipeLazy"},next:{title:"prepend",permalink:"/docs/prepend"}},l={},i=[{value:"pluck() function",id:"pluck-function",level:2},{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"pluck-function",children:"pluck() function"}),"\n",(0,r.jsx)(n.p,{children:"Returns Iterable/AsyncIterable by plucking the same named property off all objects in Iterable/AsyncIterable supplied."}),"\n",(0,r.jsx)("b",{children:"Signature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"declare function pluck<O extends object, K extends keyof O>(key: K, iterable: Iterable<O>): IterableIterator<O[K]>;\n\ndeclare function pluck<O extends object, K extends keyof O>(key: K): (iterable: Iterable<O>) => IterableIterator<O[K]>;\n\ndeclare function pluck<O extends object, K extends keyof O>(key: K, iterable: AsyncIterable<O>): AsyncIterableIterator<O[K]>;\n\ndeclare function pluck<O extends object, K extends keyof O>(key: K): (iterable: AsyncIterable<O>) => AsyncIterableIterator<O[K]>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const iter = pluck('age', [{age:21}, {age:22}, {age:23}]);\r\niter.next(); // {done:false, value: 21}\r\niter.next(); // {done:false, value: 22}\r\niter.next(); // {done:false, value: 23}\r\n\r\n// with pipe\r\npipe(\r\n [{age:21}, {age:22}, {age:23}],\r\n pluck('age'),\r\n toArray,\r\n); // [21, 22 ,23]\r\n\r\n// if you want to use asynchronous callback\r\nawait pipe(\r\n Promise.resolve([{age:21}, {age:22}, {age:23}]),\r\n toAsync,\r\n pluck('age'),\r\n toArray,\r\n); // [21, 22 ,23]\r\n\r\n// with toAsync\r\nawait pipe(\r\n [Promise.resolve({age:21}), Promise.resolve({age:22}), Promise.resolve({age:23})],\r\n toAsync,\r\n pluck('age'),\r\n toArray,\r\n); // [21, 22 ,23]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["see ",(0,r.jsx)(n.a,{href:"https://fxts.dev/docs/pipe",children:"pipe"}),", ",(0,r.jsx)(n.a,{href:"https://fxts.dev/docs/toAsync",children:"toAsync"}),", ",(0,r.jsx)(n.a,{href:"https://fxts.dev/docs/toArray",children:"toArray"})]})]})}function u(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(6540);const c={},a=r.createContext(c);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);