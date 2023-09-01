"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[919],{80937:function(e,o,r){r.d(o,{Z:function(){return R}});var t=r(46750),n=r(40431),a=r(86006),l=r(73702),i=r(95135),s=r(47562),c=r(13809),p=r(96263),d=r(38295),u=r(86601),y=r(89587),h=r(91559),v=r(48527),m=r(9268);let f=["component","direction","spacing","divider","children","className","useFlexGap"],g=(0,y.Z)(),Z=(0,p.Z)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,o)=>o.root});function x(e){return(0,d.Z)({props:e,name:"MuiStack",defaultTheme:g})}let b=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],D=({ownerState:e,theme:o})=>{let r=(0,n.Z)({display:"flex",flexDirection:"column"},(0,h.k9)({theme:o},(0,h.P$)({values:e.direction,breakpoints:o.breakpoints.values}),e=>({flexDirection:e})));if(e.spacing){let t=(0,v.hB)(o),n=Object.keys(o.breakpoints.values).reduce((o,r)=>(("object"==typeof e.spacing&&null!=e.spacing[r]||"object"==typeof e.direction&&null!=e.direction[r])&&(o[r]=!0),o),{}),a=(0,h.P$)({values:e.direction,base:n}),l=(0,h.P$)({values:e.spacing,base:n});"object"==typeof a&&Object.keys(a).forEach((e,o,r)=>{let t=a[e];if(!t){let t=o>0?a[r[o-1]]:"column";a[e]=t}}),r=(0,i.Z)(r,(0,h.k9)({theme:o},l,(o,r)=>e.useFlexGap?{gap:(0,v.NA)(t,o)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${b(r?a[r]:e.direction)}`]:(0,v.NA)(t,o)}}))}return(0,h.dt)(o.breakpoints,r)};var k=r(50645),S=r(88930);let T=function(e={}){let{createStyledComponent:o=Z,useThemeProps:r=x,componentName:i="MuiStack"}=e,p=()=>(0,s.Z)({root:["root"]},e=>(0,c.Z)(i,e),{}),d=o(D),y=a.forwardRef(function(e,o){let i=r(e),s=(0,u.Z)(i),{component:c="div",direction:y="column",spacing:h=0,divider:v,children:g,className:Z,useFlexGap:x=!1}=s,b=(0,t.Z)(s,f),D=p();return(0,m.jsx)(d,(0,n.Z)({as:c,ownerState:{direction:y,spacing:h,useFlexGap:x},ref:o,className:(0,l.Z)(D.root,Z)},b,{children:v?function(e,o){let r=a.Children.toArray(e).filter(Boolean);return r.reduce((e,t,n)=>(e.push(t),n<r.length-1&&e.push(a.cloneElement(o,{key:`separator-${n}`})),e),[])}(g,v):g}))});return y}({createStyledComponent:(0,k.Z)("div",{name:"JoyStack",slot:"Root",overridesResolver:(e,o)=>o.root}),useThemeProps:e=>(0,S.Z)({props:e,name:"JoyStack"})});var R=T},22046:function(e,o,r){r.d(o,{eu:function(){return x},FR:function(){return Z},ZP:function(){return I}});var t=r(46750),n=r(40431),a=r(86006),l=r(53832),i=r(44542),s=r(86601),c=r(47562),p=r(50645),d=r(88930),u=r(47093),y=r(326),h=r(18587);function v(e){return(0,h.d6)("MuiTypography",e)}(0,h.sI)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","body1","body2","body3","noWrap","gutterBottom","startDecorator","endDecorator","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]);var m=r(9268);let f=["color","textColor"],g=["component","gutterBottom","noWrap","level","levelMapping","children","endDecorator","startDecorator","variant","slots","slotProps"],Z=a.createContext(!1),x=a.createContext(!1),b=e=>{let{gutterBottom:o,noWrap:r,level:t,color:n,variant:a}=e,i={root:["root",t,o&&"gutterBottom",r&&"noWrap",n&&`color${(0,l.Z)(n)}`,a&&`variant${(0,l.Z)(a)}`],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return(0,c.Z)(i,v,{})},D=(0,p.Z)("span",{name:"JoyTypography",slot:"StartDecorator",overridesResolver:(e,o)=>o.startDecorator})(({ownerState:e})=>{var o;return(0,n.Z)({display:"inline-flex",marginInlineEnd:"clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"},"string"!=typeof e.startDecorator&&("flex-start"===e.alignItems||(null==(o=e.sx)?void 0:o.alignItems)==="flex-start")&&{marginTop:"2px"})}),k=(0,p.Z)("span",{name:"JoyTypography",slot:"endDecorator",overridesResolver:(e,o)=>o.endDecorator})(({ownerState:e})=>{var o;return(0,n.Z)({display:"inline-flex",marginInlineStart:"clamp(4px, var(--Typography-gap, 0.375em), 0.75rem)"},"string"!=typeof e.endDecorator&&("flex-start"===e.alignItems||(null==(o=e.sx)?void 0:o.alignItems)==="flex-start")&&{marginTop:"2px"})}),S=(0,p.Z)("span",{name:"JoyTypography",slot:"Root",overridesResolver:(e,o)=>o.root})(({theme:e,ownerState:o})=>{var r,t,a,l;return(0,n.Z)({"--Icon-fontSize":"1.25em",margin:"var(--Typography-margin, 0px)"},o.nesting?{display:"inline"}:{fontFamily:e.vars.fontFamily.body,display:"block"},(o.startDecorator||o.endDecorator)&&(0,n.Z)({display:"flex",alignItems:"center"},o.nesting&&(0,n.Z)({display:"inline-flex"},o.startDecorator&&{verticalAlign:"bottom"})),o.level&&"inherit"!==o.level&&e.typography[o.level],{fontSize:`var(--Typography-fontSize, ${o.level&&"inherit"!==o.level&&null!=(r=null==(t=e.typography[o.level])?void 0:t.fontSize)?r:"inherit"})`},o.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},o.gutterBottom&&{marginBottom:"0.35em"},o.color&&"context"!==o.color&&{color:`rgba(${null==(a=e.vars.palette[o.color])?void 0:a.mainChannel} / 1)`},o.variant&&(0,n.Z)({borderRadius:e.vars.radius.xs,paddingBlock:"min(0.15em, 4px)",paddingInline:"0.375em"},!o.nesting&&{marginInline:"-0.375em"},null==(l=e.variants[o.variant])?void 0:l[o.color]))}),T={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",display1:"h1",display2:"h2",body1:"p",body2:"p",body3:"span",body4:"span",body5:"span",inherit:"p"},R=a.forwardRef(function(e,o){let r=(0,d.Z)({props:e,name:"JoyTypography"}),{color:l,textColor:c}=r,p=(0,t.Z)(r,f),h=a.useContext(Z),v=a.useContext(x),R=(0,s.Z)((0,n.Z)({},p,{color:c})),{component:I,gutterBottom:w=!1,noWrap:C=!1,level:j="body1",levelMapping:N={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",body1:"p",body2:"p",body3:"p",inherit:"p"},children:P,endDecorator:B,startDecorator:$,variant:E,slots:J={},slotProps:M={}}=R,F=(0,t.Z)(R,g),{getColor:W}=(0,u.VT)(E),z=W(e.color,E?null!=l?l:"neutral":l),A=h||v?e.level||"inherit":j,O=I||(h?"span":N[A]||T[A]||"span"),_=(0,n.Z)({},R,{level:A,component:O,color:z,gutterBottom:w,noWrap:C,nesting:h,variant:E}),G=b(_),L=(0,n.Z)({},F,{component:O,slots:J,slotProps:M}),[V,q]=(0,y.Z)("root",{ref:o,className:G.root,elementType:S,externalForwardedProps:L,ownerState:_}),[H,K]=(0,y.Z)("startDecorator",{className:G.startDecorator,elementType:D,externalForwardedProps:L,ownerState:_}),[Q,U]=(0,y.Z)("endDecorator",{className:G.endDecorator,elementType:k,externalForwardedProps:L,ownerState:_});return(0,m.jsx)(Z.Provider,{value:!0,children:(0,m.jsxs)(V,(0,n.Z)({},q,{children:[$&&(0,m.jsx)(H,(0,n.Z)({},K,{children:$})),(0,i.Z)(P,["Skeleton"])?a.cloneElement(P,{variant:P.props.variant||"inline"}):P,B&&(0,m.jsx)(Q,(0,n.Z)({},U,{children:B}))]}))})});var I=R},96263:function(e,o,r){var t=r(9312);let n=(0,t.ZP)();o.Z=n},3146:function(e,o,r){r.d(o,{Z:function(){return n}});var t=r(86006);function n(){let[,e]=t.useReducer(e=>e+1,0);return e}}}]);