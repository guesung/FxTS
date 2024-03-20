"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5042],{7556:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=n(4848),s=n(8453);const o={id:"compress"},c=void 0,a={id:"compress",title:"compress",description:"compress() function",source:"@site/docs/compress.md",sourceDirName:".",slug:"/compress",permalink:"/docs/compress",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"compress"},sidebar:"api",previous:{title:"compact",permalink:"/docs/compact"},next:{title:"concat",permalink:"/docs/concat"}},i={},l=[{value:"compress() function",id:"compress-function",level:2},{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"compress-function",children:"compress() function"}),"\n",(0,r.jsx)(t.p,{children:"Returns Iterable/AsyncIterable that filters elements from 'iterable' returning only those that have a corresponding element in 'selectors' that evaluates to 'true'. Stops when either 'iterable' or 'selectors' has been exhausted."}),"\n",(0,r.jsx)("b",{children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"declare function compress<A, B>(selector: Array<A>, iterable: Iterable<B>): IterableIterator<B>;\n\ndeclare function compress<A, B>(selector: Array<A>, iterable: AsyncIterable<B>): AsyncIterableIterator<B>;\n\ndeclare function compress<A, B extends Iterable<unknown> | AsyncIterable<unknown>>(selector: Array<A>): (iterable: B) => ReturnIterableIteratorType<B>;\n"})}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'const iter1 = compress([false,true,false,false,true],  [1, 2, 3, 4, 5]);\r\niter1.next(); // {value: 2, done:false}\r\niter1.next(); // {value: 5, done:false}\r\niter1.next(); // {value: undefined, done:true }\r\n\r\nconst iter2 = compress([1,0,0,1,0],  "abcde");\r\niter2.next(); // {value: "a", done:false}\r\niter2.next(); // {value: "d", done:false}\r\niter2.next(); // {value: undefined, done:true }\r\n\r\n// with pipe\r\npipe(\r\n  [1, 2, 3],\r\n  compress([false, true, true]),\r\n  toArray,\r\n); // [2, 3]\n'})}),"\n",(0,r.jsxs)(t.p,{children:["see ",(0,r.jsx)(t.a,{href:"https://fxts.dev/docs/pipe",children:"pipe"}),", ",(0,r.jsx)(t.a,{href:"https://fxts.dev/docs/toArray",children:"toArray"})]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>a});var r=n(6540);const s={},o=r.createContext(s);function c(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);