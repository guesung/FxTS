"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4225],{1881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var i=n(4848),r=n(8453);const a={id:"zipWith"},c=void 0,l={id:"zipWith",title:"zipWith",description:"zipWith() function",source:"@site/docs/zipWith.md",sourceDirName:".",slug:"/zipWith",permalink:"/docs/zipWith",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"zipWith"},sidebar:"api",previous:{title:"zip",permalink:"/docs/zip"},next:{title:"zipWithIndex",permalink:"/docs/zipWithIndex"}},s={},o=[{value:"zipWith() function",id:"zipwith-function",level:2},{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"zipwith-function",children:"zipWith() function"}),"\n",(0,i.jsxs)(t.p,{children:["Returns Iterable/AsyncIterable out of the two supplied by applying ",(0,i.jsx)(t.code,{children:"f"})," to each same positioned pair in Iterable/AsyncIterable."]}),"\n",(0,i.jsx)("b",{children:"Signature:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"declare function zipWith<A, B, C>(f: (a: A, b: B) => C, iterable1: Iterable<A>, iterable2: Iterable<B>): IterableIterator<C>;\n\ndeclare function zipWith<A, B, C>(f: (a: A, b: B) => C, iterable1: Iterable<A>, iterable2: AsyncIterable<B>): AsyncIterableIterator<C>;\n\ndeclare function zipWith<A, B, C>(f: (a: A, b: B) => C, iterable1: AsyncIterable<A>, iterable2: Iterable<B>): AsyncIterableIterator<C>;\n\ndeclare function zipWith<A, B, C>(f: (a: A, b: B) => C, iterable1: AsyncIterable<A>, iterable2: AsyncIterable<B>): AsyncIterableIterator<C>;\n"})}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"const iter = zipWith((a,b) => [a,b], [1,2,3], ['a','b','c']);\r\niter.next(); // {value: [1, 'a'] , done: false}\r\niter.next(); // {value: [2, 'b'] , done: false}\r\niter.next(); // {value: [3, 'c'] , done: false}\r\niter.next(); // {value: undefined , done: true}\n"})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/marpple/FxTS/blob/main/src/Lazy/zipWith.ts",children:"Open Source Code"})})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>l});var i=n(6540);const r={},a=i.createContext(r);function c(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);