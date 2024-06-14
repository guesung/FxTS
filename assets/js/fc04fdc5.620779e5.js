"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4940],{8505:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=r(4848),o=r(8453);const i={id:"dropUntil"},s=void 0,l={id:"dropUntil",title:"dropUntil",description:"dropUntil() function",source:"@site/docs/dropUntil.md",sourceDirName:".",slug:"/dropUntil",permalink:"/docs/dropUntil",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"dropUntil"},sidebar:"api",previous:{title:"differenceBy",permalink:"/docs/differenceBy"},next:{title:"dropWhile",permalink:"/docs/dropWhile"}},a={},d=[{value:"dropUntil() function",id:"dropuntil-function",level:2},{value:"Example",id:"example",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"dropuntil-function",children:"dropUntil() function"}),"\n",(0,t.jsx)(n.p,{children:"Returns Iterable/AsyncIterable excluding elements dropped from the beginning. Elements are deleted until the value applied to f returns truly. (It is deleted including the first value applied as true)"}),"\n",(0,t.jsx)("b",{children:"Signature:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"declare function dropUntil<A, B = unknown>(f: (a: A) => B, iterable: Iterable<A>): IterableIterator<A>;\n\ndeclare function dropUntil<A, B = unknown>(f: (a: A) => B, iterable: AsyncIterable<A>): AsyncIterableIterator<A>;\n\ndeclare function dropUntil<A extends Iterable<unknown> | AsyncIterable<unknown>, B>(f: (a: IterableInfer<A>) => B): (iterable: A) => ReturnIterableIteratorType<A>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const iter = dropUntil((a) => a > 3, [1, 2, 3, 4, 5, 1, 2]);\r\niter.next(); // {done:false, value: 5}\r\niter.next(); // {done:false, value: 1}\r\niter.next(); // {done:false, value: 2}\r\n\r\n// with pipe\r\npipe(\r\n [1, 2, 3, 4, 5, 1, 2],\r\n dropUntil((a) => a > 3),\r\n toArray,\r\n); // [5, 1, 2]\r\n\r\nawait pipe(\r\n Promise.resolve([1, 2, 3, 4, 5, 1, 2]),\r\n dropUntil((a) => a > 3),\r\n toArray,\r\n); // [5, 1, 2]\r\n\r\n// if you want to use asynchronous callback\r\nawait pipe(\r\n Promise.resolve([1, 2, 3, 4, 5, 1, 2]),\r\n toAsync,\r\n dropUntil(async (a) => a > 3),\r\n toArray,\r\n); // [5, 1, 2]\r\n\r\n// with toAsync\r\nawait pipe(\r\n [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3), Promise.resolve(4),\r\nPromise.resolve(5), Promise.resolve(1), Promise.resolve(2)],\r\n toAsync,\r\n dropUntil((a) => a > 3),\r\n toArray,\r\n); // [5, 1, 2]\n"})}),"\n",(0,t.jsxs)(n.p,{children:["see ",(0,t.jsx)(n.a,{href:"https://fxts.dev/docs/pipe",children:"pipe"}),", ",(0,t.jsx)(n.a,{href:"https://fxts.dev/docs/toAsync",children:"toAsync"}),", ",(0,t.jsx)(n.a,{href:"https://fxts.dev/docs/toArray",children:"toArray"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/marpple/FxTS/blob/main/src/Lazy/dropUntil.ts",children:"Open Source Code"})})]})}function p(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>l});var t=r(6540);const o={},i=t.createContext(o);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);