"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5341],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return m}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=t.createContext({}),l=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=l(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=u(e,["components","mdxType","originalType","parentName"]),s=l(r),m=a,f=s["".concat(c,".").concat(m)]||s[m]||p[m]||o;return r?t.createElement(f,i(i({ref:n},d),{},{components:r})):t.createElement(f,i({ref:n},d))}));function m(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=s;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,i[1]=u;for(var l=2;l<o;l++)i[l]=r[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}s.displayName="MDXCreateElement"},9667:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return d},default:function(){return s}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],u={id:"add"},c=void 0,l={unversionedId:"add",id:"add",isDocsHomePage:!1,title:"add",description:"add() function",source:"@site/docs/add.md",sourceDirName:".",slug:"/add",permalink:"/docs/add",tags:[],version:"current",frontMatter:{id:"add"},sidebar:"api",previous:{title:"zipWithIndex",permalink:"/docs/zipWithIndex"},next:{title:"always",permalink:"/docs/always"}},d=[{value:"add() function",id:"add-function",children:[],level:2},{value:"Example",id:"example",children:[],level:2}],p={toc:d};function s(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"add-function"},"add() function"),(0,o.kt)("p",null,"Adds two values."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Signature:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"declare function add<A extends number | Promise<number>, B extends number | Promise<number>>(a: A, b: B): ReturnAddType<number | Promise<number>, A, B>;\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"ReturnAddType","<","number ","|"," Promise","<","number",">",", A, B",">"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"add(1, 2); // 3\nawait add(1, Promise.resolve(2)); // 3\nawait add(Promise.resolve(1), 2); // 3\nawait add(Promise.resolve(1), Promise.resolve(2)); // 3\n\nadd('a', 'b'); // 'ab'\nawait add('a', Promise.resolve('b')); // 'ab'\nawait add(Promise.resolve('a'), 'b'); // 'ab'\nawait add(Promise.resolve('a'), Promise.resolve('b')); // 'ab'\n")))}s.isMDXComponent=!0}}]);