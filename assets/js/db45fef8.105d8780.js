"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3289],{7264:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var r=t(4848),s=t(8453);const i={id:"slice"},l=void 0,c={id:"slice",title:"slice",description:"slice() function",source:"@site/docs/slice.md",sourceDirName:".",slug:"/slice",permalink:"/docs/slice",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"slice"},sidebar:"api",previous:{title:"scan",permalink:"/docs/scan"},next:{title:"split",permalink:"/docs/split"}},a={},o=[{value:"slice() function",id:"slice-function",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"slice-function",children:"slice() function"}),"\n",(0,r.jsx)(n.p,{children:"Returns Iterable/AsyncIterable of the given elements from startIndex(inclusive) to endIndex(exclusive)."}),"\n",(0,r.jsx)("b",{children:"Signature:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:"declare function slice<T>(start: number, iterable: Iterable<T>): IterableIterator<T>;\n\ndeclare function slice<T>(start: number, iterable: AsyncIterable<T>): AsyncIterableIterator<T>;\n\ndeclare function slice<T>(start: number, end: number, iterable: Iterable<T>): IterableIterator<T>;\n\ndeclare function slice<T>(start: number, end: number, iterable: AsyncIterable<T>): AsyncIterableIterator<T>;\n\ndeclare function slice<A extends Iterable<unknown> | AsyncIterable<unknown>>(start: number): (iterable: A) => ReturnIterableIteratorType<A>;\n\ndeclare function slice<A extends Iterable<unknown> | AsyncIterable<unknown>>(start: number, end: number): (iterable: A) => ReturnIterableIteratorType<A>;\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const iter1 = slice(1, 3, ['a', 'b', 'c', 'd', 'e']);\r\niter1.next(); // {value: 'b', done: false};\r\niter1.next(); // {value: 'c', done: false};\r\niter1.next(); // {value: undefined, done: true};\r\n\r\nconst iter2 = slice(3, ['a', 'b', 'c', 'd', 'e']);\r\niter2.next(); // {value: 'd', done: false};\r\niter2.next(); // {value: 'e', done: false};\r\niter2.next(); // {value: undefined, done: true};\r\n\r\nconst iter3 = slice(3, \"abcde\");\r\niter3.next(); // {value: 'd', done: false};\r\niter3.next(); // {value: 'e', done: false};\r\niter3.next(); // {value: undefined, done: true};\r\n\r\n// with pipe\r\npipe(\r\n [1, 2, 3, 4, 5],\r\n slice(3),\r\n toArray,\r\n); // [4, 5]\r\n\r\npipe(\r\n [1, 2, 3, 4, 5],\r\n slice(1, 3),\r\n toArray,\r\n); // [2, 3]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["see ",(0,r.jsx)(n.a,{href:"https://fxts.dev/docs/pipe",children:"pipe"}),", ",(0,r.jsx)(n.a,{href:"https://fxts.dev/docs/toArray",children:"toArray"})]})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>c});var r=t(6540);const s={},i=r.createContext(s);function l(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);