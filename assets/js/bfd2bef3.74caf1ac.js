"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7195],{9764:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var t=r(4848),a=r(8453);const i={id:"uniqBy"},s=void 0,o={id:"uniqBy",title:"uniqBy",description:"uniqBy() function",source:"@site/docs/uniqBy.md",sourceDirName:".",slug:"/uniqBy",permalink:"/docs/uniqBy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"uniqBy"},sidebar:"api",previous:{title:"uniq",permalink:"/docs/uniq"},next:{title:"values",permalink:"/docs/values"}},c={},l=[{value:"uniqBy() function",id:"uniqby-function",level:2},{value:"Example",id:"example",level:2}];function u(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"uniqby-function",children:"uniqBy() function"}),"\n",(0,t.jsxs)(n.p,{children:["Unlike ",(0,t.jsx)(n.a,{href:"https://fxts.dev/docs/uniq",children:"uniq"})," returns Iterable/AsyncIterable with duplicate values removed by applying with ",(0,t.jsx)(n.code,{children:"f"})," inside the given Iterable/AsyncIterable. The order of result values is determined by the order they occur in the array."]}),"\n",(0,t.jsx)("b",{children:"Signature:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"declare function uniqBy<A, B>(f: (a: A) => B, iterable: Iterable<A>): IterableIterator<A>;\n\ndeclare function uniqBy<A, B>(f: (a: A) => B, iterable: AsyncIterable<A>): AsyncIterableIterator<A>;\n\ndeclare function uniqBy<A extends Iterable<unknown> | AsyncIterable<unknown>, B>(f: (a: IterableInfer<A>) => B, iterable?: A): (iterable: A) => ReturnIterableIteratorType<A>;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const iter = uniqBy(a => a.age, [{age: 21}, {age: 23}, {age: 21}, {age: 34}]);\r\niter.next() // {done:false, value: {age: 21}}\r\niter.next() // {done:false, value: {age: 23}}\r\niter.next() // {done:false, value: {age: 34}}\r\niter.next() // {done:true, value: undefined}\r\n\r\n// with pipe\r\npipe(\r\n [{age: 21}, {age: 23}, {age: 21}, {age: 34}],\r\n uniqBy(a => a.age),\r\n toArray,\r\n); // [{age: 21}, {age: 23}, {age: 34}]\r\n\r\nawait pipe(\r\n Promise.resolve([{age: 21}, {age: 23}, {age: 21}, {age: 34}]),\r\n uniqBy(a => a.age),\r\n toArray,\r\n); // [{age: 21}, {age: 23}, {age: 34}]\r\n\r\n// if you want to use asynchronous callback\r\nawait pipe(\r\n Promise.resolve([{age: 21}, {age: 23}, {age: 21}, {age: 34}]),\r\n toAsync,\r\n uniqBy(async (a) => a.age),\r\n toArray,\r\n); // [{age: 21}, {age: 23}, {age: 34}]\r\n\r\n// toAsync\r\nawait pipe(\r\n [Promise.resolve({age: 21}), Promise.resolve({age: 23}), Promise.resolve({age: 21}), Promise.resolve({age: 34})],\r\n toAsync,\r\n uniqBy(a => a.age),\r\n toArray,\r\n); // [{age: 21}, {age: 23}, {age: 34}]\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://codesandbox.io/s/fxts-uniqby-zb5d9",children:"Try It"})}),"\n",(0,t.jsxs)(n.p,{children:["see ",(0,t.jsx)(n.a,{href:"https://fxts.dev/docs/pipe",children:"pipe"}),", ",(0,t.jsx)(n.a,{href:"https://fxts.dev/docs/toAsync",children:"toAsync"}),", ",(0,t.jsx)(n.a,{href:"https://fxts.dev/docs/toArray",children:"toArray"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://github.com/marpple/FxTS/blob/main/src/Lazy/uniqBy.ts",children:"Open Source Code"})})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>s,x:()=>o});var t=r(6540);const a={},i=t.createContext(a);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);