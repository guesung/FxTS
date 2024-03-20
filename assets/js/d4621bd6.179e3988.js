"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[192],{55:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(4848),s=n(8453);const a={id:"take"},o=void 0,i={id:"take",title:"take",description:"take() function",source:"@site/docs/take.md",sourceDirName:".",slug:"/take",permalink:"/docs/take",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"take"},sidebar:"api",previous:{title:"split",permalink:"/docs/split"},next:{title:"takeRight",permalink:"/docs/takeRight"}},l={},c=[{value:"take() function",id:"take-function",level:2},{value:"Example",id:"example",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"take-function",children:"take() function"}),"\n",(0,r.jsxs)(t.p,{children:["Returns Iterable/AsyncIterable that taken the first argument ",(0,r.jsx)(t.code,{children:"l"})," values from iterable"]}),"\n",(0,r.jsx)("b",{children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"declare function take<A>(l: number, iterable: Iterable<A>): IterableIterator<A>;\n\ndeclare function take<A>(l: number, iterable: AsyncIterable<A>): AsyncIterableIterator<A>;\n\ndeclare function take<A extends Iterable<unknown> | AsyncIterable<unknown>>(l: number): (iterable: A) => ReturnIterableIteratorType<A>;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"const iter = take(2, [0, 1, 2, 3, 4, 5, 6]);\r\niter.next() // {done:false, value: 0}\r\niter.next() // {done:false, value: 1}\r\niter.next() // {done:true, value: undefined}\r\n\r\n// with pipe\r\npipe(\r\n [0, 1, 2, 3, 4, 5, 6],\r\n take(2),\r\n toArray,\r\n); // [0, 1]\r\n\r\nawait pipe(\r\n Promise.resolve([0, 1, 2, 3, 4, 5, 6]),\r\n take(2),\r\n toArray,\r\n); // [0, 1]\r\n\r\n// with toAsync\r\nawait pipe(\r\n [Promise.resolve(0), Promise.resolve(1), Promise.resolve(2),\r\n  Promise.resolve(3), Promise.resolve(4), Promise.resolve(5), Promise.resolve(6)],\r\n toAsync,\r\n take(2),\r\n toArray,\r\n); // [0, 1]\n"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"https://codesandbox.io/s/fxts-take-372bs",children:"Try It"})}),"\n",(0,r.jsxs)(t.p,{children:["see ",(0,r.jsx)(t.a,{href:"https://fxts.dev/docs/pipe",children:"pipe"}),", ",(0,r.jsx)(t.a,{href:"https://fxts.dev/docs/toAsync",children:"toAsync"}),", ",(0,r.jsx)(t.a,{href:"https://fxts.dev/docs/toArray",children:"toArray"})]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>i});var r=n(6540);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);