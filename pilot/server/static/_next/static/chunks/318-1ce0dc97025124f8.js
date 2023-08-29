"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[318],{72474:function(e,r,t){t.d(r,{Z:function(){return l}});var a=t(40431),o=t(86006),i={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M885.2 446.3l-.2-.8-112.2-285.1c-5-16.1-19.9-27.2-36.8-27.2H281.2c-17 0-32.1 11.3-36.9 27.6L139.4 443l-.3.7-.2.8c-1.3 4.9-1.7 9.9-1 14.8-.1 1.6-.2 3.2-.2 4.8V830a60.9 60.9 0 0060.8 60.8h627.2c33.5 0 60.8-27.3 60.9-60.8V464.1c0-1.3 0-2.6-.1-3.7.4-4.9 0-9.6-1.3-14.1zm-295.8-43l-.3 15.7c-.8 44.9-31.8 75.1-77.1 75.1-22.1 0-41.1-7.1-54.8-20.6S436 441.2 435.6 419l-.3-15.7H229.5L309 210h399.2l81.7 193.3H589.4zm-375 76.8h157.3c24.3 57.1 76 90.8 140.4 90.8 33.7 0 65-9.4 90.3-27.2 22.2-15.6 39.5-37.4 50.7-63.6h156.5V814H214.4V480.1z"}}]},name:"inbox",theme:"outlined"},n=t(1240),l=o.forwardRef(function(e,r){return o.createElement(n.Z,(0,a.Z)({},e,{ref:r,icon:i}))})},59534:function(e,r,t){var a=t(78997);r.Z=void 0;var o=a(t(76906)),i=t(9268),n=(0,o.default)((0,i.jsx)("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm4.59-12.42L10 14.17l-2.59-2.58L6 13l4 4 8-8z"}),"CheckCircleOutlined");r.Z=n},68949:function(e,r,t){var a=t(78997);r.Z=void 0;var o=a(t(76906)),i=t(9268),n=(0,o.default)((0,i.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5-1-1h-5l-1 1H5v2h14V4z"}),"DeleteOutline");r.Z=n},47611:function(e,r,t){t.d(r,{Z:function(){return B}});var a=t(46750),o=t(40431),i=t(86006),n=t(53832),l=t(47562),c=t(24263),d=t(21454),s=t(99179),u=t(50645),h=t(88930),v=t(47093),m=t(326),p=t(18587);function x(e){return(0,p.d6)("MuiSwitch",e)}let g=(0,p.sI)("MuiSwitch",["root","checked","disabled","action","input","thumb","track","focusVisible","readOnly","colorPrimary","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","sizeSm","sizeMd","sizeLg","variantOutlined","variantSoft","variantSolid","startDecorator","endDecorator"]);var f=t(31857),b=t(9268);let S=["checked","defaultChecked","disabled","onBlur","onChange","onFocus","onFocusVisible","readOnly","required","id","color","variant","size","startDecorator","endDecorator","component","slots","slotProps"],w=e=>{let{checked:r,disabled:t,focusVisible:a,readOnly:o,color:i,variant:c}=e,d={root:["root",r&&"checked",t&&"disabled",a&&"focusVisible",o&&"readOnly",c&&`variant${(0,n.Z)(c)}`,i&&`color${(0,n.Z)(i)}`],thumb:["thumb",r&&"checked"],track:["track",r&&"checked"],action:["action",a&&"focusVisible"],input:["input"],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return(0,l.Z)(d,x,{})},k=({theme:e,ownerState:r})=>(t={})=>{var a;let o=(null==(a=e.variants[`${r.variant}${t.state||""}`])?void 0:a[r.color])||{};return{"--Switch-trackBackground":o.backgroundColor,"--Switch-trackColor":o.color,"--Switch-trackBorderColor":"outlined"===r.variant?o.borderColor:"currentColor","--Switch-thumbBackground":o.color,"--Switch-thumbColor":o.backgroundColor}},T=(0,u.Z)("div",{name:"JoySwitch",slot:"Root",overridesResolver:(e,r)=>r.root})(({theme:e,ownerState:r})=>{var t;let a=k({theme:e,ownerState:r});return(0,o.Z)({"--variant-borderWidth":null==(t=e.variants[r.variant])||null==(t=t[r.color])?void 0:t["--variant-borderWidth"],"--Switch-trackRadius":e.vars.radius.lg,"--Switch-thumbShadow":"soft"===r.variant?"none":"0 0 0 1px var(--Switch-trackBackground)"},"sm"===r.size&&{"--Switch-trackWidth":"40px","--Switch-trackHeight":"20px","--Switch-thumbSize":"12px","--Switch-gap":"6px",fontSize:e.vars.fontSize.sm},"md"===r.size&&{"--Switch-trackWidth":"48px","--Switch-trackHeight":"24px","--Switch-thumbSize":"16px","--Switch-gap":"8px",fontSize:e.vars.fontSize.md},"lg"===r.size&&{"--Switch-trackWidth":"64px","--Switch-trackHeight":"32px","--Switch-thumbSize":"24px","--Switch-gap":"12px"},{"--unstable_paddingBlock":"max((var(--Switch-trackHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Switch-thumbSize)) / 2, 0px)","--Switch-thumbRadius":"max(var(--Switch-trackRadius) - var(--unstable_paddingBlock), min(var(--unstable_paddingBlock) / 2, var(--Switch-trackRadius) / 2))","--Switch-thumbWidth":"var(--Switch-thumbSize)","--Switch-thumbOffset":"max((var(--Switch-trackHeight) - var(--Switch-thumbSize)) / 2, 0px)"},a(),{"&:hover":(0,o.Z)({},a({state:"Hover"})),[`&.${g.checked}`]:(0,o.Z)({},a(),{"&:hover":(0,o.Z)({},a({state:"Hover"}))}),[`&.${g.disabled}`]:(0,o.Z)({pointerEvents:"none",color:e.vars.palette.text.tertiary},a({state:"Disabled"})),display:"inline-flex",alignItems:"center",alignSelf:"center",fontFamily:e.vars.fontFamily.body,position:"relative",padding:"calc((var(--Switch-thumbSize) / 2) - (var(--Switch-trackHeight) / 2)) calc(-1 * var(--Switch-thumbOffset))",backgroundColor:"initial",border:"none",margin:"var(--unstable_Switch-margin)"})}),y=(0,u.Z)("div",{name:"JoySwitch",slot:"Action",overridesResolver:(e,r)=>r.action})(({theme:e})=>({borderRadius:"var(--Switch-trackRadius)",position:"absolute",top:0,left:0,bottom:0,right:0,[e.focus.selector]:e.focus.default})),Z=(0,u.Z)("input",{name:"JoySwitch",slot:"Input",overridesResolver:(e,r)=>r.input})({margin:0,height:"100%",width:"100%",opacity:0,position:"absolute",cursor:"pointer"}),z=(0,u.Z)("span",{name:"JoySwitch",slot:"Track",overridesResolver:(e,r)=>r.track})(({theme:e,ownerState:r})=>(0,o.Z)({position:"relative",color:"var(--Switch-trackColor)",height:"var(--Switch-trackHeight)",width:"var(--Switch-trackWidth)",display:"flex",flexShrink:0,justifyContent:"space-between",alignItems:"center",boxSizing:"border-box",border:"var(--variant-borderWidth, 0px) solid",borderColor:"var(--Switch-trackBorderColor)",backgroundColor:"var(--Switch-trackBackground)",borderRadius:"var(--Switch-trackRadius)",fontFamily:e.vars.fontFamily.body},"sm"===r.size&&{fontSize:e.vars.fontSize.xs},"md"===r.size&&{fontSize:e.vars.fontSize.sm},"lg"===r.size&&{fontSize:e.vars.fontSize.md})),C=(0,u.Z)("span",{name:"JoySwitch",slot:"Thumb",overridesResolver:(e,r)=>r.thumb})({"--Icon-fontSize":"calc(var(--Switch-thumbSize) * 0.75)",display:"inline-flex",justifyContent:"center",alignItems:"center",position:"absolute",top:"50%",left:"calc(50% - var(--Switch-trackWidth) / 2 + var(--Switch-thumbWidth) / 2 + var(--Switch-thumbOffset))",transform:"translate(-50%, -50%)",width:"var(--Switch-thumbWidth)",height:"var(--Switch-thumbSize)",borderRadius:"var(--Switch-thumbRadius)",boxShadow:"var(--Switch-thumbShadow)",color:"var(--Switch-thumbColor)",backgroundColor:"var(--Switch-thumbBackground)",[`&.${g.checked}`]:{left:"calc(50% + var(--Switch-trackWidth) / 2 - var(--Switch-thumbWidth) / 2 - var(--Switch-thumbOffset))"}}),H=(0,u.Z)("span",{name:"JoySwitch",slot:"StartDecorator",overridesResolver:(e,r)=>r.startDecorator})({display:"inline-flex",marginInlineEnd:"var(--Switch-gap)"}),R=(0,u.Z)("span",{name:"JoySwitch",slot:"EndDecorator",overridesResolver:(e,r)=>r.endDecorator})({display:"inline-flex",marginInlineStart:"var(--Switch-gap)"}),D=i.forwardRef(function(e,r){var t,n,l,u,p;let x=(0,h.Z)({props:e,name:"JoySwitch"}),{checked:g,defaultChecked:k,disabled:D,onBlur:B,onChange:I,onFocus:W,onFocusVisible:O,readOnly:j,id:E,color:N,variant:F="solid",size:P="md",startDecorator:M,endDecorator:V,component:$,slots:J={},slotProps:_={}}=x,L=(0,a.Z)(x,S),q=i.useContext(f.Z),A=null!=(t=null!=(n=e.disabled)?n:null==q?void 0:q.disabled)?t:D,G=null!=(l=null!=(u=e.size)?u:null==q?void 0:q.size)?l:P,{getColor:K}=(0,v.VT)(F),Q=K(e.color,null!=q&&q.error?"danger":null!=(p=null==q?void 0:q.color)?p:N),{getInputProps:U,checked:X,disabled:Y,focusVisible:ee,readOnly:er}=function(e){let{checked:r,defaultChecked:t,disabled:a,onBlur:n,onChange:l,onFocus:u,onFocusVisible:h,readOnly:v,required:m}=e,[p,x]=(0,c.Z)({controlled:r,default:!!t,name:"Switch",state:"checked"}),g=e=>r=>{var t;r.nativeEvent.defaultPrevented||(x(r.target.checked),null==l||l(r),null==(t=e.onChange)||t.call(e,r))},{isFocusVisibleRef:f,onBlur:b,onFocus:S,ref:w}=(0,d.Z)(),[k,T]=i.useState(!1);a&&k&&T(!1),i.useEffect(()=>{f.current=k},[k,f]);let y=i.useRef(null),Z=e=>r=>{var t;y.current||(y.current=r.currentTarget),S(r),!0===f.current&&(T(!0),null==h||h(r)),null==u||u(r),null==(t=e.onFocus)||t.call(e,r)},z=e=>r=>{var t;b(r),!1===f.current&&T(!1),null==n||n(r),null==(t=e.onBlur)||t.call(e,r)},C=(0,s.Z)(w,y);return{checked:p,disabled:!!a,focusVisible:k,getInputProps:(e={})=>(0,o.Z)({checked:r,defaultChecked:t,disabled:a,readOnly:v,ref:C,required:m,type:"checkbox"},e,{onChange:g(e),onFocus:Z(e),onBlur:z(e)}),inputRef:C,readOnly:!!v}}({checked:g,defaultChecked:k,disabled:A,onBlur:B,onChange:I,onFocus:W,onFocusVisible:O,readOnly:j}),et=(0,o.Z)({},x,{id:E,checked:X,disabled:Y,focusVisible:ee,readOnly:er,color:X?Q||"primary":Q||"neutral",variant:F,size:G}),ea=w(et),eo=(0,o.Z)({},L,{component:$,slots:J,slotProps:_}),[ei,en]=(0,m.Z)("root",{ref:r,className:ea.root,elementType:T,externalForwardedProps:eo,ownerState:et}),[el,ec]=(0,m.Z)("startDecorator",{additionalProps:{"aria-hidden":!0},className:ea.startDecorator,elementType:H,externalForwardedProps:eo,ownerState:et}),[ed,es]=(0,m.Z)("endDecorator",{additionalProps:{"aria-hidden":!0},className:ea.endDecorator,elementType:R,externalForwardedProps:eo,ownerState:et}),[eu,eh]=(0,m.Z)("track",{className:ea.track,elementType:z,externalForwardedProps:eo,ownerState:et}),[ev,em]=(0,m.Z)("thumb",{className:ea.thumb,elementType:C,externalForwardedProps:eo,ownerState:et}),[ep,ex]=(0,m.Z)("action",{className:ea.action,elementType:y,externalForwardedProps:eo,ownerState:et}),[eg,ef]=(0,m.Z)("input",{additionalProps:{id:null!=E?E:null==q?void 0:q.htmlFor,"aria-describedby":null==q?void 0:q["aria-describedby"]},className:ea.input,elementType:Z,externalForwardedProps:eo,getSlotProps:U,ownerState:et});return(0,b.jsxs)(ei,(0,o.Z)({},en,{children:[M&&(0,b.jsx)(el,(0,o.Z)({},ec,{children:"function"==typeof M?M(et):M})),(0,b.jsxs)(eu,(0,o.Z)({},eh,{children:[null==eh?void 0:eh.children,(0,b.jsx)(ev,(0,o.Z)({},em))]})),(0,b.jsx)(ep,(0,o.Z)({},ex,{children:(0,b.jsx)(eg,(0,o.Z)({},ef))})),V&&(0,b.jsx)(ed,(0,o.Z)({},es,{children:"function"==typeof V?V(et):V}))]}))});var B=D},96323:function(e,r,t){t.d(r,{Z:function(){return O}});var a=t(46750),o=t(40431),i=t(86006),n=t(53832),l=t(47562),c=t(8431),d=t(99179),s=t(30165),u=t(22099),h=t(11059),v=t(9268);let m=["onChange","maxRows","minRows","style","value"];function p(e){return parseInt(e,10)||0}let x={shadow:{visibility:"hidden",position:"absolute",overflow:"hidden",height:0,top:0,left:0,transform:"translateZ(0)"}};function g(e){return null==e||0===Object.keys(e).length||0===e.outerHeightStyle&&!e.overflow}let f=i.forwardRef(function(e,r){let{onChange:t,maxRows:n,minRows:l=1,style:f,value:b}=e,S=(0,a.Z)(e,m),{current:w}=i.useRef(null!=b),k=i.useRef(null),T=(0,d.Z)(r,k),y=i.useRef(null),Z=i.useRef(0),[z,C]=i.useState({outerHeightStyle:0}),H=i.useCallback(()=>{let r=k.current,t=(0,s.Z)(r),a=t.getComputedStyle(r);if("0px"===a.width)return{outerHeightStyle:0};let o=y.current;o.style.width=a.width,o.value=r.value||e.placeholder||"x","\n"===o.value.slice(-1)&&(o.value+=" ");let i=a.boxSizing,c=p(a.paddingBottom)+p(a.paddingTop),d=p(a.borderBottomWidth)+p(a.borderTopWidth),u=o.scrollHeight;o.value="x";let h=o.scrollHeight,v=u;l&&(v=Math.max(Number(l)*h,v)),n&&(v=Math.min(Number(n)*h,v)),v=Math.max(v,h);let m=v+("border-box"===i?c+d:0),x=1>=Math.abs(v-u);return{outerHeightStyle:m,overflow:x}},[n,l,e.placeholder]),R=(e,r)=>{let{outerHeightStyle:t,overflow:a}=r;return Z.current<20&&(t>0&&Math.abs((e.outerHeightStyle||0)-t)>1||e.overflow!==a)?(Z.current+=1,{overflow:a,outerHeightStyle:t}):e},D=i.useCallback(()=>{let e=H();g(e)||C(r=>R(r,e))},[H]),B=()=>{let e=H();g(e)||c.flushSync(()=>{C(r=>R(r,e))})};return i.useEffect(()=>{let e;let r=(0,u.Z)(()=>{Z.current=0,k.current&&B()}),t=k.current,a=(0,s.Z)(t);return a.addEventListener("resize",r),"undefined"!=typeof ResizeObserver&&(e=new ResizeObserver(r)).observe(t),()=>{r.clear(),a.removeEventListener("resize",r),e&&e.disconnect()}}),(0,h.Z)(()=>{D()}),i.useEffect(()=>{Z.current=0},[b]),(0,v.jsxs)(i.Fragment,{children:[(0,v.jsx)("textarea",(0,o.Z)({value:b,onChange:e=>{Z.current=0,w||D(),t&&t(e)},ref:T,rows:l,style:(0,o.Z)({height:z.outerHeightStyle,overflow:z.overflow?"hidden":void 0},f)},S)),(0,v.jsx)("textarea",{"aria-hidden":!0,className:e.className,readOnly:!0,ref:y,tabIndex:-1,style:(0,o.Z)({},x.shadow,f,{paddingTop:0,paddingBottom:0})})]})});var b=t(50645),S=t(88930),w=t(47093),k=t(326),T=t(18587);function y(e){return(0,T.d6)("MuiTextarea",e)}let Z=(0,T.sI)("MuiTextarea",["root","textarea","startDecorator","endDecorator","formControl","disabled","error","focused","colorPrimary","colorNeutral","colorDanger","colorInfo","colorSuccess","colorWarning","colorContext","sizeSm","sizeMd","sizeLg","variantPlain","variantOutlined","variantSoft"]);var z=t(17795);let C=["propsToForward","rootStateClasses","inputStateClasses","getRootProps","getInputProps","formControl","focused","error","disabled","size","color","variant","startDecorator","endDecorator","minRows","maxRows","component","slots","slotProps"],H=e=>{let{disabled:r,variant:t,color:a,size:o}=e,i={root:["root",r&&"disabled",t&&`variant${(0,n.Z)(t)}`,a&&`color${(0,n.Z)(a)}`,o&&`size${(0,n.Z)(o)}`],textarea:["textarea"],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return(0,l.Z)(i,y,{})},R=(0,b.Z)("div",{name:"JoyTextarea",slot:"Root",overridesResolver:(e,r)=>r.root})(({theme:e,ownerState:r})=>{var t,a,i,n,l;let c=null==(t=e.variants[`${r.variant}`])?void 0:t[r.color];return[(0,o.Z)({"--Textarea-radius":e.vars.radius.sm,"--Textarea-gap":"0.5rem","--Textarea-placeholderColor":"inherit","--Textarea-placeholderOpacity":.5,"--Textarea-focused":"0","--Textarea-focusedThickness":e.vars.focus.thickness},"context"===r.color?{"--Textarea-focusedHighlight":e.vars.palette.focusVisible}:{"--Textarea-focusedHighlight":null==(a=e.vars.palette["neutral"===r.color?"primary":r.color])?void 0:a[500]},"sm"===r.size&&{"--Textarea-minHeight":"2rem","--Textarea-paddingBlock":"calc(0.5rem - var(--variant-borderWidth, 0px))","--Textarea-paddingInline":"0.5rem","--Textarea-decoratorChildHeight":"min(1.5rem, var(--Textarea-minHeight))","--Icon-fontSize":"1.25rem"},"md"===r.size&&{"--Textarea-minHeight":"2.5rem","--Textarea-paddingBlock":"calc(0.5rem - var(--variant-borderWidth, 0px))","--Textarea-paddingInline":"0.75rem","--Textarea-decoratorChildHeight":"min(2rem, var(--Textarea-minHeight))","--Icon-fontSize":"1.5rem"},"lg"===r.size&&{"--Textarea-minHeight":"3rem","--Textarea-paddingBlock":"calc(0.75rem - var(--variant-borderWidth, 0px))","--Textarea-paddingInline":"1rem","--Textarea-gap":"0.75rem","--Textarea-decoratorChildHeight":"min(2.375rem, var(--Textarea-minHeight))","--Icon-fontSize":"1.75rem"},{"--_Textarea-paddingBlock":"max((var(--Textarea-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Textarea-decoratorChildHeight)) / 2, 0px)","--Textarea-decoratorChildRadius":"max(var(--Textarea-radius) - var(--variant-borderWidth, 0px) - var(--_Textarea-paddingBlock), min(var(--_Textarea-paddingBlock) + var(--variant-borderWidth, 0px), var(--Textarea-radius) / 2))","--Button-minHeight":"var(--Textarea-decoratorChildHeight)","--IconButton-size":"var(--Textarea-decoratorChildHeight)","--Button-radius":"var(--Textarea-decoratorChildRadius)","--IconButton-radius":"var(--Textarea-decoratorChildRadius)",boxSizing:"border-box",minWidth:0,minHeight:"var(--Textarea-minHeight)",cursor:"text",position:"relative",display:"flex",flexDirection:"column",paddingInlineStart:"var(--Textarea-paddingInline)",paddingBlock:"var(--Textarea-paddingBlock)",borderRadius:"var(--Textarea-radius)",fontFamily:e.vars.fontFamily.body,fontSize:e.vars.fontSize.md,lineHeight:e.vars.lineHeight.md},"sm"===r.size&&{fontSize:e.vars.fontSize.sm,lineHeight:e.vars.lineHeight.sm},{"&:before":{boxSizing:"border-box",content:'""',display:"block",position:"absolute",pointerEvents:"none",top:0,left:0,right:0,bottom:0,zIndex:1,borderRadius:"inherit",margin:"calc(var(--variant-borderWidth, 0px) * -1)",boxShadow:"var(--Textarea-focusedInset, inset) 0 0 0 calc(var(--Textarea-focused) * var(--Textarea-focusedThickness)) var(--Textarea-focusedHighlight)"}}),(0,o.Z)({},c,{backgroundColor:null!=(i=null==c?void 0:c.backgroundColor)?i:e.vars.palette.background.surface,"&:hover":(0,o.Z)({},null==(n=e.variants[`${r.variant}Hover`])?void 0:n[r.color],{backgroundColor:null,cursor:"text"}),[`&.${Z.disabled}`]:null==(l=e.variants[`${r.variant}Disabled`])?void 0:l[r.color],"&:focus-within::before":{"--Textarea-focused":"1"}})]}),D=(0,b.Z)(f,{name:"JoyTextarea",slot:"Textarea",overridesResolver:(e,r)=>r.textarea})({resize:"none",border:"none",minWidth:0,outline:0,padding:0,paddingInlineEnd:"var(--Textarea-paddingInline)",flex:"auto",alignSelf:"stretch",color:"inherit",backgroundColor:"transparent",fontFamily:"inherit",fontSize:"inherit",fontStyle:"inherit",fontWeight:"inherit",lineHeight:"inherit","&::-webkit-input-placeholder":{color:"var(--Textarea-placeholderColor)",opacity:"var(--Textarea-placeholderOpacity)"},"&::-moz-placeholder":{color:"var(--Textarea-placeholderColor)",opacity:"var(--Textarea-placeholderOpacity)"},"&:-ms-input-placeholder":{color:"var(--Textarea-placeholderColor)",opacity:"var(--Textarea-placeholderOpacity)"},"&::-ms-input-placeholder":{color:"var(--Textarea-placeholderColor)",opacity:"var(--Textarea-placeholderOpacity)"}}),B=(0,b.Z)("div",{name:"JoyTextarea",slot:"StartDecorator",overridesResolver:(e,r)=>r.startDecorator})(({theme:e})=>({display:"flex",marginInlineStart:"calc(var(--Textarea-paddingBlock) - var(--Textarea-paddingInline))",marginInlineEnd:"var(--Textarea-paddingBlock)",marginBlockEnd:"var(--Textarea-gap)",color:e.vars.palette.text.tertiary,cursor:"initial"})),I=(0,b.Z)("div",{name:"JoyTextarea",slot:"EndDecorator",overridesResolver:(e,r)=>r.endDecorator})(({theme:e})=>({display:"flex",marginInlineStart:"calc(var(--Textarea-paddingBlock) - var(--Textarea-paddingInline))",marginInlineEnd:"var(--Textarea-paddingBlock)",marginBlockStart:"var(--Textarea-gap)",color:e.vars.palette.text.tertiary,cursor:"initial"})),W=i.forwardRef(function(e,r){var t,i,n,l,c,d,s;let u=(0,S.Z)({props:e,name:"JoyTextarea"}),h=(0,z.Z)(u,Z),{propsToForward:m,rootStateClasses:p,inputStateClasses:x,getRootProps:g,getInputProps:f,formControl:b,focused:T,error:y=!1,disabled:W=!1,size:O="md",color:j="neutral",variant:E="outlined",startDecorator:N,endDecorator:F,minRows:P,maxRows:M,component:V,slots:$={},slotProps:J={}}=h,_=(0,a.Z)(h,C),L=null!=(t=null!=(i=e.disabled)?i:null==b?void 0:b.disabled)?t:W,q=null!=(n=null!=(l=e.error)?l:null==b?void 0:b.error)?n:y,A=null!=(c=null!=(d=e.size)?d:null==b?void 0:b.size)?c:O,{getColor:G}=(0,w.VT)(E),K=G(e.color,q?"danger":null!=(s=null==b?void 0:b.color)?s:j),Q=(0,o.Z)({},u,{color:K,disabled:L,error:q,focused:T,size:A,variant:E}),U=H(Q),X=(0,o.Z)({},_,{component:V,slots:$,slotProps:J}),[Y,ee]=(0,k.Z)("root",{ref:r,className:[U.root,p],elementType:R,externalForwardedProps:X,getSlotProps:g,ownerState:Q}),[er,et]=(0,k.Z)("textarea",{additionalProps:{id:null==b?void 0:b.htmlFor,"aria-describedby":null==b?void 0:b["aria-describedby"]},className:[U.textarea,x],elementType:D,internalForwardedProps:(0,o.Z)({},m,{minRows:P,maxRows:M}),externalForwardedProps:X,getSlotProps:f,ownerState:Q}),[ea,eo]=(0,k.Z)("startDecorator",{className:U.startDecorator,elementType:B,externalForwardedProps:X,ownerState:Q}),[ei,en]=(0,k.Z)("endDecorator",{className:U.endDecorator,elementType:I,externalForwardedProps:X,ownerState:Q});return(0,v.jsxs)(Y,(0,o.Z)({},ee,{children:[N&&(0,v.jsx)(ea,(0,o.Z)({},eo,{children:N})),(0,v.jsx)(er,(0,o.Z)({},et)),F&&(0,v.jsx)(ei,(0,o.Z)({},en,{children:F}))]}))});var O=W}}]);