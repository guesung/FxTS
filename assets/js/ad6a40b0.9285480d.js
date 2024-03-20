"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8133],{8449:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var a=t(4848),c=t(8453);const s={id:"method-chaining"},r="Method Chaining",o={id:"method-chaining",title:"Method Chaining",description:"You can handle Iterable/AsyncIterable through a pipe, but fxts also provides data change in the form of method chaining.",source:"@site/docs/method-chaining.md",sourceDirName:".",slug:"/method-chaining",permalink:"/docs/method-chaining",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"method-chaining"},sidebar:"docs",previous:{title:"Error handling",permalink:"/docs/error-handling"},next:{title:"When to use the toAsync function?",permalink:"/docs/to-async"}},i={},d=[{value:"Note",id:"note",level:3},{value:"Support for handling AsyncIterable",id:"support-for-handling-asynciterable",level:3},{value:"Handle Concurrency",id:"handle-concurrency",level:3},{value:"Etc",id:"etc",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"method-chaining",children:"Method Chaining"}),"\n",(0,a.jsxs)(n.p,{children:["You can handle Iterable/AsyncIterable through a ",(0,a.jsx)(n.a,{href:"https://fxts.dev/docs/pipe",children:"pipe"}),", but ",(0,a.jsx)(n.code,{children:"fxts"})," also provides data change in the form of method chaining."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:'fx([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])\n  .filter((a) => a % 2 === 0) // [0, 2]\n  .map((a) => a * a) // [0, 4]\n  .take(2) // [0, 4]\n  .reduce(sum); // 4\n\nfx("abc")\n  .map((a) => a.toUpperCase()) // ["a", "b"]\n  .take(2)\n  .toArray(); // ["a", "b"]\n'})}),"\n",(0,a.jsx)(n.h3,{id:"note",children:"Note"}),"\n",(0,a.jsxs)(n.p,{children:["Since ",(0,a.jsx)(n.code,{children:"fx"})," defaults to lazy evaluation, it is not actually evaluated until strict evaluation methods such as ",(0,a.jsx)(n.code,{children:"toArray"}),", ",(0,a.jsx)(n.code,{children:"groupBy"}),", ",(0,a.jsx)(n.code,{children:"indexBy"}),", and ",(0,a.jsx)(n.code,{children:"some"})," are executed."]}),"\n",(0,a.jsxs)(n.p,{children:["For details on lazy evaluation, please refer to ",(0,a.jsx)(n.a,{href:"https://fxts.dev/docs/lazy-evaluation",children:"https://fxts.dev/docs/lazy-evaluation"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"support-for-handling-asynciterable",children:"Support for handling AsyncIterable"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"fx"})," can also handle ",(0,a.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/AsyncIterator",children:"AsyncIterator"})," values. ",(0,a.jsx)(n.code,{children:"toAsync"})," is used in the example below to create an ",(0,a.jsx)(n.code,{children:"AsyncIterator"})," value."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"await fx(toAsync([1, 2, 3, 4]))\n  .filter(async (a) => a % 2 === 0)\n  .map(async (a) => a * a)\n  .reduce(sum);\n\nawait fx([1, 2, 3, 4])\n  .filter((a) => a % 2 === 0)\n  .toAsync() // if async function returns\n  .map(async (a) => a * a)\n  .reduce(sum);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"handle-concurrency",children:"Handle Concurrency"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"fx"})," supports concurrent operation. As we saw in concurrent, concurrent can only be used in asyncIterable."]}),"\n",(0,a.jsxs)(n.p,{children:["For details on handling concurrent with ",(0,a.jsx)(n.code,{children:"fxts"}),", please refer to ",(0,a.jsx)(n.a,{href:"https://fxts.dev/docs/handle-concurrency",children:"https://fxts.dev/docs/handle-concurrency"})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"/**\n *\n *  evaluation\n *               \u250c\u2500\u2500\u2500\u2500\u2500\u2510  \u250c\u2500\u2500\u2500\u2500\u2500\u2510  \u250c\u2500\u2500\u2500\u2500\u2500\u2510  \u250c\u2500\u2500\u2500\u2500\u2500\u2510  \u250c\u2500\u2500\u2500\u2500\u2500\u2510  \u250c\u2500\u2500\u2500\u2500\u2500\u2510\n *               \u2502  1  \u2502\u2500\u2500\u2502  2  \u2502\u2500\u2500\u2502  3  \u2502\u2500\u2500\u2502  4  \u2502\u2500\u2500\u2502  5  \u2502\u2500\u2500\u2502  6  \u2502\n *               \u2514\u2500\u2500\u252c\u2500\u2500\u2518  \u2514\u2500\u2500\u252c\u2500\u2500\u2518  \u2514\u2500\u2500\u252c\u2500\u2500\u2518  \u2514\u2500\u2500\u252c\u2500\u2500\u2518  \u2514\u2500\u2500\u252c\u2500\u2500\u2518  \u2514\u2500\u2500\u252c\u2500\u2500\u2518\n *       map        \u2502        \u2502        \u2502        \u2502        \u2502        \u2502\n *  concurrent(2)  (1)      (1)      (2)      (2)      (3)      (3)\n *                  \u2502        \u2502        \u2502        \u2502        \u2502        \u2502\n *                  \u25bc        \u25bc        \u25bc        \u25bc        \u25bc        \u25bc\n */\nawait fx(toAsync(range(1, 7)))\n  // async function returns\n  .map(async (a) => delay(100, a))\n  .concurrent(2)\n  .consume(); // It takes approximately 300ms.\n"})}),"\n",(0,a.jsx)(n.h3,{id:"etc",children:"Etc"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"fx"})," does not provide all the functions of ",(0,a.jsx)(n.code,{children:"fxts"})," as methods."]}),"\n",(0,a.jsxs)(n.p,{children:["If you want to use the ",(0,a.jsx)(n.code,{children:"fxts"})," function which is not provided or additional functions, you can use the ",(0,a.jsx)(n.code,{children:"chain"})," method."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"fx([1, 2, 3, 4])\n  .chain(append(5))\n  .map((a) => a + 10)\n  .toArray(); // [11, 12, 13, 14, 15]\n"})})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var a=t(6540);const c={},s=a.createContext(c);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);