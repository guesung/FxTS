"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5090],{653:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var r=t(4848),i=t(8453);const c={id:"intersection"},s=void 0,o={id:"intersection",title:"intersection",description:"intersection() function",source:"@site/docs/intersection.md",sourceDirName:".",slug:"/intersection",permalink:"/docs/intersection",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"intersection"},sidebar:"api",previous:{title:"fx",permalink:"/docs/fx"},next:{title:"intersectionBy",permalink:"/docs/intersectionBy"}},a={},l=[{value:"intersection() function",id:"intersection-function",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"intersection-function",children:"intersection() function"}),"\n",(0,r.jsxs)(n.p,{children:["Returns Iterable/AsyncIterable of all elements in the ",(0,r.jsx)(n.code,{children:"iterable2"})," contained in the ",(0,r.jsx)(n.code,{children:"iterable1"}),"."]}),"\n",(0,r.jsx)("b",{children:"Signature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"declare function intersection<T>(iterable1: Iterable<T>, iterable2: Iterable<T>): IterableIterator<T>;\n\ndeclare function intersection<T>(iterable1: AsyncIterable<T>, iterable2: Iterable<T>): AsyncIterableIterator<T>;\n\ndeclare function intersection<T>(iterable1: Iterable<T>, iterable2: AsyncIterable<T>): AsyncIterableIterator<T>;\n\ndeclare function intersection<T>(iterable1: AsyncIterable<T>, iterable2: AsyncIterable<T>): AsyncIterableIterator<T>;\n\ndeclare function intersection<A extends Iterable<unknown> | AsyncIterable<unknown>, B extends Iterable<unknown> | AsyncIterable<unknown>>(iterable1: A): (iterable2: B) => A extends AsyncIterable<unknown> ? AsyncIterableIterator<IterableInfer<B>> : B extends AsyncIterable<unknown> ? AsyncIterableIterator<IterableInfer<B>> : IterableIterator<IterableInfer<B>>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const iter = intersection([2, 1], [2, 3, 4]);\r\niter.next(); // {value: 2, done:false}\r\niter.next(); // {value: undefined, done: true}\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/marpple/FxTS/blob/main/src/Lazy/intersection.ts",children:"Open Source Code"})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var r=t(6540);const i={},c=r.createContext(i);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);