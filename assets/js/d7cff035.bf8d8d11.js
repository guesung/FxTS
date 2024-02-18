"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4841],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(t),d=o,m=s["".concat(l,".").concat(d)]||s[d]||f[d]||i;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},5296:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={id:"find"},l=void 0,u={unversionedId:"find",id:"find",isDocsHomePage:!1,title:"find",description:"find() function",source:"@site/docs/find.md",sourceDirName:".",slug:"/find",permalink:"/docs/find",tags:[],version:"current",frontMatter:{id:"find"},sidebar:"api",previous:{title:"evolve",permalink:"/docs/evolve"},next:{title:"findIndex",permalink:"/docs/findIndex"}},p=[{value:"find() function",id:"find-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],f={toc:p};function s(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"find-function"},"find() function"),(0,i.kt)("p",null,"Looks through each value in Iterable/AsyncIterable, returning the first one that passes a truth test ",(0,i.kt)("inlineCode",{parentName:"p"},"f"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined")," if no value passes the test."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Signature:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function find<T>(f: (a: T) => unknown, iterable: Iterable<T>): T | undefined;\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")),(0,i.kt)("p",null,"T ","|"," undefined"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'find((a) => a === 2, [1, 2, 3, 4]); // 2\n\nfind((a) => a === "r", "marpple"); // \'r\'\n')),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/fxts-find-uhl0o"},"Try It")))}s.isMDXComponent=!0}}]);