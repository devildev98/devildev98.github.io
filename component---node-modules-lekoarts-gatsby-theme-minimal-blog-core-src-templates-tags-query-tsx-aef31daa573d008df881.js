(self.webpackChunkdevil_blog=self.webpackChunkdevil_blog||[]).push([[726],{8797:function(e,t,r){var n="[object Symbol]",a=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,o=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,l="\\u2700-\\u27bf",i="a-z\\xdf-\\xf6\\xf8-\\xff",u="A-Z\\xc0-\\xd6\\xd8-\\xde",c="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",f="['’]",s="["+c+"]",m="[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]",d="\\d+",E="[\\u2700-\\u27bf]",x="["+i+"]",h="[^\\ud800-\\udfff"+c+d+l+i+u+"]",b="(?:\\ud83c[\\udde6-\\uddff]){2}",g="[\\ud800-\\udbff][\\udc00-\\udfff]",p="["+u+"]",v="(?:"+x+"|"+h+")",y="(?:"+p+"|"+h+")",j="(?:['’](?:d|ll|m|re|s|t|ve))?",C="(?:['’](?:D|LL|M|RE|S|T|VE))?",O="(?:[\\u0300-\\u036f\\ufe20-\\ufe23\\u20d0-\\u20f0]|\\ud83c[\\udffb-\\udfff])?",L="[\\ufe0e\\ufe0f]?",k=L+O+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",b,g].join("|")+")"+L+O+")*"),z="(?:"+[E,b,g].join("|")+")"+k,w=RegExp(f,"g"),A=RegExp(m,"g"),S=RegExp([p+"?"+x+"+"+j+"(?="+[s,p,"$"].join("|")+")",y+"+"+C+"(?="+[s,p+v,"$"].join("|")+")",p+"?"+v+"+"+j,p+"+"+C,d,z].join("|"),"g"),Z=/[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,W="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g,D="object"==typeof self&&self&&self.Object===Object&&self,I=W||D||Function("return this")();var U,B=(U={"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"ss"},function(e){return null==U?void 0:U[e]});var N=Object.prototype.toString,R=I.Symbol,T=R?R.prototype:void 0,_=T?T.toString:void 0;function G(e){if("string"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&N.call(e)==n}(e))return _?_.call(e):"";var t=e+"";return"0"==t&&1/e==-Infinity?"-0":t}function J(e){return null==e?"":G(e)}var M,F=(M=function(e,t,r){return e+(r?"-":"")+t.toLowerCase()},function(e){return function(e,t,r,n){var a=-1,o=e?e.length:0;for(n&&o&&(r=e[++a]);++a<o;)r=t(r,e[a],a,e);return r}(function(e,t,r){return e=J(e),void 0===(t=r?void 0:t)?function(e){return Z.test(e)}(e)?function(e){return e.match(S)||[]}(e):function(e){return e.match(a)||[]}(e):e.match(t)||[]}(function(e){return(e=J(e))&&e.replace(o,B).replace(A,"")}(e).replace(w,"")),M,"")});e.exports=F},6011:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(7294),a=r(7690),o=r(7361),l=r(2331),i=r(7951),u=r(8540),c=r(8797),f=r.n(c),s=r(5444),m=r(3672),d=r(2949),E=r(6471),x=function(e){var t=e.list,r=(0,d.Z)(),c=r.tagsPath,x=r.blogPath,h=r.basePath;return n.createElement(m.Z,{title:"tags"},n.createElement(a.xu,{p:"8",w:"100%"},n.createElement(o.k,{mb:["4","5"]},n.createElement(a.xu,null,n.createElement(l.X,{size:"3xl"},"Tags")),n.createElement(i.L,null),n.createElement(a.xu,{pt:"6"},n.createElement(u.r,{as:s.Link,mt:"2",mb:"2",to:(0,E.Z)("/"+h+"/"+x)},"View all blogs"))),n.createElement(a.xu,{mt:[4,5]},t.map((function(e){return n.createElement(o.k,{key:e.fieldValue,mb:[1,1,2],alignItems:"center"},n.createElement(u.r,{as:s.Link,mr:"2",to:(0,E.Z)("/"+h+"/"+c+"/"+f()(e.fieldValue))},e.fieldValue," ",n.createElement(a.xu,{as:"span",color:"gray.400"},"(",e.totalCount,")")))})))))};var h=function(e){var t=Object.assign({},e),r=t.data.allPost;return n.createElement(x,Object.assign({list:r.group},t))}},3672:function(e,t,r){"use strict";r.d(t,{Z:function(){return W}});var n=r(7294),a=r(5444),o=r(1852),l=r(3201),i=r(3750),u=r(5230),c=r(8206),f=r(7361),s=r(7690),m=r(8540),d=r(2200),E=r(7951),x=r(7717),h=r(132),b=r(2543),g=r(3888),p=r(7487),v=r(6511),y=r(5587),j=r(4667);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function O(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}var L=(0,b.G)((function(e,t){var r=(0,g.m)("Divider",e),a=r.borderLeftWidth,o=r.borderBottomWidth,l=r.borderTopWidth,i=r.borderRightWidth,u=r.borderWidth,c=r.borderStyle,f=r.borderColor,s=O(r,["borderLeftWidth","borderBottomWidth","borderTopWidth","borderRightWidth","borderWidth","borderStyle","borderColor"]),m=(0,p.Lr)(e),d=m.className,E=m.orientation,x=void 0===E?"horizontal":E,h=m.__css,b=O(m,["className","orientation","__css"]),j={vertical:{borderLeftWidth:a||i||u||"1px",height:"100%"},horizontal:{borderBottomWidth:o||l||u||"1px",width:"100%"}};return n.createElement(v.m$.hr,C({ref:t,"aria-orientation":x},b,{__css:C({},s,{border:"0",borderColor:f,borderStyle:c},j[x],h),className:(0,y.cx)("chakra-divider",d)}))}));j.Ts&&(L.displayName="Divider");var k=function(){var e=(0,u.useColorMode)(),t=e.colorMode,r=e.toggleColorMode;return n.createElement(c.gC,{align:"stretch",p:"1"},n.createElement(f.k,{p:"4"},n.createElement(s.xu,null,n.createElement(m.r,{as:a.Link,to:"/",textDecoration:"none"},n.createElement(d.x,{bgGradient:"linear(to-l, #7928CA,#FF0080)",bgClip:"text",fontSize:"4xl",fontWeight:"extrabold",_hover:{bgGradient:"linear(to-l,#FF0080,#7928CA)",transition:"all 0.80s ease-out"}},"DevilDev"))),n.createElement(E.L,null),n.createElement(x.z,{onClick:r},"light"===t?n.createElement(h.J,{as:o.s1t}):n.createElement(h.J,{as:l.Mei}))),n.createElement(f.k,null,n.createElement(s.xu,{mr:"4",ml:"4"},n.createElement(m.r,{as:a.Link,to:"/about"},"About")),n.createElement(s.xu,{mr:"4"},n.createElement(m.r,{as:a.Link,to:"/blog"},"Blog")),n.createElement(s.xu,{mr:"4"},n.createElement(m.r,{as:a.Link,to:"/contact"},"Contact")),n.createElement(E.L,null),n.createElement(s.xu,{mr:"4"},n.createElement(m.r,{href:"https://github.com/devildev98",isExternal:!0,color:"primary"},n.createElement(i.uOf,{fontSize:"1.4rem"}))),n.createElement(s.xu,{mr:"4"},n.createElement(m.r,{href:"https://github.com/devildev98",isExternal:!0,color:"blue.800"},n.createElement(l.ltd,{fontSize:"1.4rem"}))),n.createElement(s.xu,{mr:"4"},n.createElement(m.r,{href:"https://github.com/devildev98",isExternal:!0,color:"blue.400"},n.createElement(l.jnu,{fontSize:"1.4rem"})))),n.createElement(L,{orientation:"horizontal",opacity:"1.0"}))},z=r(5341),w=r(9845),A=function(e){return n.createElement(h.J,Object.assign({viewBox:"0 0 257 257"},e),n.createElement("rect",{width:"257",height:"257",rx:"128.5",fill:"url(#logo)"}),n.createElement("path",{d:"M69.558 133.985l87.592-86.9891c1.636-1.6251 4.27.3525 3.165 2.377l-32.601 59.7521c-.728 1.332.237 2.958 1.755 2.958h56.34c1.815 0 2.691 2.223 1.364 3.462l-98.7278 92.142c-1.7702 1.652-4.4051-.676-2.9839-2.636l46.7357-64.473c.958-1.322.014-3.174-1.619-3.174H70.9673c-1.7851 0-2.6759-2.161-1.4093-3.419z",fill:"#fff"}),n.createElement("defs",null,n.createElement("linearGradient",{id:"logo",x1:"128.5",x2:"128.5",y2:"257",gradientUnits:"userSpaceOnUse"},n.createElement("stop",{stopColor:"#7BCBD4"}),n.createElement("stop",{offset:"1",stopColor:"#29C6B7"}))))},S=function(){return n.createElement(s.xu,{p:"2"},n.createElement(L,{orientation:"horizontal",opacity:"1.0"}),n.createElement(z.M,{h:"4rem"},n.createElement(d.x,{as:"span",mx:"1"},"© ",(new Date).getFullYear()," ",n.createElement("span",null,"Devil Blogs")," Built With"," "),n.createElement(m.r,{href:"https://reactjs.org/",isExternal:!0},n.createElement(h.J,{as:l.huN,w:5,h:5,mx:1,color:"rgb(83, 220, 251)"})),n.createElement(m.r,{href:"https://www.gatsbyjs.com/",isExternal:!0},n.createElement(h.J,{as:w.Ldc,w:5,h:5,mx:1,color:"rgb(96, 48, 156)"})),n.createElement(m.r,{href:"https://chakra-ui.com/",isExternal:!0},n.createElement(A,{w:5,h:5,mx:1}))))},Z=r(5725),W=function(e){var t=e.title,r=void 0===t?"":t,a=e.description,o=void 0===a?"":a,l=e.image,i=void 0===l?"":l,u=e.pathname,c=void 0===u?"":u,f=e.children;return n.createElement(s.xu,{w:"100%",justifyContent:"center",display:"flex"},n.createElement(s.xu,{w:"90%",p:"1"},n.createElement(Z.Z,{title:r,description:o,image:i,pathname:c}),n.createElement(k,null),f,n.createElement(S,null)))}},2949:function(e,t,r){"use strict";var n=r(5444);t.Z=function(){return(0,n.useStaticQuery)("3090400250").minimalBlogConfig}},6471:function(e,t){"use strict";t.Z=function(e){return e.replace(/\/\/+/g,"/")}}}]);
//# sourceMappingURL=component---node-modules-lekoarts-gatsby-theme-minimal-blog-core-src-templates-tags-query-tsx-aef31daa573d008df881.js.map