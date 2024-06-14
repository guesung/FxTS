"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4873],{753:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(4848),r=t(8453);const s={id:"flatMap"},l=void 0,o={id:"flatMap",title:"flatMap",description:"flatMap() function",source:"@site/docs/flatMap.md",sourceDirName:".",slug:"/flatMap",permalink:"/docs/flatMap",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"flatMap"},sidebar:"api",previous:{title:"flat",permalink:"/docs/flat"},next:{title:"fx",permalink:"/docs/fx"}},i={},c=[{value:"flatMap() function",id:"flatmap-function",level:2},{value:"Example",id:"example",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"flatmap-function",children:"flatMap() function"}),"\n",(0,a.jsx)(n.p,{children:"Returns flattened Iterable/AsyncIterable of values by running each element flattening the mapped results."}),"\n",(0,a.jsx)("b",{children:"Signature:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:"declare function flatMap<A, B = unknown>(f: (a: A) => B, iterable: Iterable<A>): IterableIterator<DeepFlatSync<B, 1>>;\n\ndeclare function flatMap<A, B = unknown>(f: (a: A) => B, iterable: AsyncIterable<A>): AsyncIterableIterator<DeepFlat<Awaited<B>, 1>>;\n\ndeclare function flatMap<A extends Iterable<unknown> | AsyncIterable<unknown>, B = unknown>(f: (a: IterableInfer<A>) => B): (iterable: A) => ReturnFlatMapType<A, B>;\n\ndeclare function flatMap<A extends Iterable<unknown> | AsyncIterable<unknown>, B = unknown>(f: (a: IterableInfer<A>) => B, iterable?: A): (iterable: A) => ReturnFlatMapType<A, B>;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'const iter = flatMap(s => s.split(" "), ["It is", "a good", "day"]);\r\niter.next() // {done:false, value: "It"}\r\niter.next() // {done:false, value: "is"}\r\niter.next() // {done:false, value: "a"}\r\niter.next() // {done:false, value: "good"},\r\niter.next() // {done:false, value: "day"},\r\niter.next() // {done:true, value: undefined}\r\n\r\n// with pipe\r\npipe(\r\n ["It is", "a good", "day"],\r\n flatMap(s => s.split(" ")),\r\n toArray,\r\n); // ["It", "is", "a", "good", "day"]\r\n\r\nawait pipe(\r\n Promise.resolve(["It is", "a good", "day"]),\r\n flatMap(s => s.split(" ")),\r\n toArray,\r\n); // ["It", "is", "a", "good", "day"]\r\n\r\n// if you want to use asynchronous callback\r\nawait pipe(\r\n Promise.resolve(["It is", "a good", "day"]),\r\n toAsync,\r\n flatMap(async (s) => s.split(" ")),\r\n toArray,\r\n); // ["It", "is", "a", "good", "day"]\n'})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://codesandbox.io/s/fxts-flatmap-3g9k8",children:"Try It"})}),"\n",(0,a.jsxs)(n.p,{children:["see ",(0,a.jsx)(n.a,{href:"https://fxts.dev/docs/pipe",children:"pipe"}),", ",(0,a.jsx)(n.a,{href:"https://fxts.dev/docs/toAsync",children:"toAsync"}),", ",(0,a.jsx)(n.a,{href:"https://fxts.dev/docs/toArray",children:"toArray"})]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"https://github.com/marpple/FxTS/blob/main/src/Lazy/flatMap.ts",children:"Open Source Code"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var a=t(6540);const r={},s=a.createContext(r);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);