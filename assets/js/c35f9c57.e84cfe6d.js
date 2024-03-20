"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4468],{4185:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>s,default:()=>o,frontMatter:()=>l,metadata:()=>u,toc:()=>a});var i=t(4848),c=t(8453);const l={id:"includes"},s=void 0,u={id:"includes",title:"includes",description:"includes() function",source:"@site/docs/includes.md",sourceDirName:".",slug:"/includes",permalink:"/docs/includes",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"includes"},sidebar:"api",previous:{title:"identity",permalink:"/docs/identity"},next:{title:"indexBy",permalink:"/docs/indexBy"}},r={},a=[{value:"includes() function",id:"includes-function",level:2},{value:"Example",id:"example",level:2}];function d(e){const n={code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"includes-function",children:"includes() function"}),"\n",(0,i.jsx)(n.p,{children:"Checks if the specified value is equal. (contains)"}),"\n",(0,i.jsx)("b",{children:"Signature:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"declare function includes<T>(value: unknown, iterable: Iterable<T>): boolean;\n\ndeclare function includes<T extends readonly []>(value: unknown, iterable: T): false;\n\ndeclare function includes<T, U extends T>(value: T, iterable: Iterable<U>): value is U;\n\ndeclare function includes<T>(value: unknown, iterable: AsyncIterable<T>): Promise<boolean>;\n\ndeclare function includes<T extends Iterable<unknown> | AsyncIterable<unknown>>(value: unknown): (iterable: T) => ReturnValueType<T, boolean>;\n"})}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"includes('c', 'abcd'); // true\r\nincludes('e', 'abcd'); // false\r\nincludes(3, [1,2,3,4]); // true\r\nincludes(5, [1,2,3,4]); // false\n"})})]})}function o(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>u});var i=t(6540);const c={},l=i.createContext(c);function s(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function u(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);