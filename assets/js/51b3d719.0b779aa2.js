"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9661],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=l,d=f["".concat(i,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(d,a(a({ref:t},p),{},{components:n})):r.createElement(d,a({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9977:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),l=n(3366),o=(n(7294),n(3905)),a=["components"],c={id:"lte"},i=void 0,u={unversionedId:"lte",id:"lte",isDocsHomePage:!1,title:"lte",description:"lte() function",source:"@site/docs/lte.md",sourceDirName:".",slug:"/lte",permalink:"/docs/lte",tags:[],version:"current",frontMatter:{id:"lte"},sidebar:"api",previous:{title:"lt",permalink:"/docs/lt"},next:{title:"max",permalink:"/docs/max"}},p=[{value:"lte() function",id:"lte-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],s={toc:p};function f(e){var t=e.components,n=(0,l.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"lte-function"},"lte() function"),(0,o.kt)("p",null,"Returns true if the first argument is less or equal than the second; false otherwise."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function lte(a: string): (b: string) => boolean;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"(b: string) =",">"," boolean"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'lte(5, 1) // expected false\nlte(1, 1) // expected true\nlte(1, 5) // expected true\nlte("a", "b") // expected true\nlte("b", "a") // expected false\n\nfilter(lte(5), [1, 2, 4, 5, 8, 9]) // Iterable<[5, 8, 9]>\nfilter(lte(9), [6, 7, 8]) // Iterable<[]>\nfilter(lte("b"), ["a", "b", "c"]) // Iterable<["b", "c"]>\nfilter(lte("e"), ["c", "d"]) // Itreable<[]>\n')))}f.isMDXComponent=!0}}]);