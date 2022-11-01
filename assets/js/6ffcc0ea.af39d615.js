"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5497],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return d}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},c=Object.keys(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)n=c[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=t.createContext({}),l=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):u(u({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},s=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=l(n),d=o,y=s["".concat(i,".").concat(d)]||s[d]||f[d]||c;return n?t.createElement(y,u(u({ref:r},p),{},{components:n})):t.createElement(y,u({ref:r},p))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=n.length,u=new Array(c);u[0]=s;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var l=2;l<c;l++)u[l]=n[l];return t.createElement.apply(null,u)}return t.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6957:function(e,r,n){n.r(r),n.d(r,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var t=n(7462),o=n(3366),c=(n(7294),n(3905)),u=["components"],a={id:"curry"},i=void 0,l={unversionedId:"curry",id:"curry",isDocsHomePage:!1,title:"curry",description:"curry() function",source:"@site/docs/curry.md",sourceDirName:".",slug:"/curry",permalink:"/docs/curry",tags:[],version:"current",frontMatter:{id:"curry"},sidebar:"api",previous:{title:"countBy",permalink:"/docs/countBy"},next:{title:"delay",permalink:"/docs/delay"}},p=[{value:"curry() function",id:"curry-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],f={toc:p};function s(e){var r=e.components,n=(0,o.Z)(e,u);return(0,c.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"curry-function"},"curry() function"),(0,c.kt)("p",null,"Returns a curried function of ",(0,c.kt)("inlineCode",{parentName:"p"},"f")),(0,c.kt)("b",null,"Signature:"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function curry<F extends (...args: any[]) => any>(f: F): Curry<F>;\n")),(0,c.kt)("h2",{id:"example"},"Example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-ts"},"const add = (a: number, b: number): number => a + b\n\nconst curried = curry(add)\nconst add10 = curried(10)\nconsole.log(add10(5)) // 15\nconsole.log(curried(3, 4)) // 7\n")))}s.isMDXComponent=!0}}]);