"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[94546],{41830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var o=n(74848),s=n(28453);const a={title:"Pass JVM options",sidebar_position:2,description:"Passing Java virtual machine JVM options to Hyperledger Besu at runtime",tags:["public networks","private networks"]},r="Pass JVM options",i={id:"public-networks/how-to/configure-java/pass-jvm-options",title:"Pass JVM options",description:"Passing Java virtual machine JVM options to Hyperledger Besu at runtime",source:"@site/docs/public-networks/how-to/configure-java/pass-jvm-options.md",sourceDirName:"public-networks/how-to/configure-java",slug:"/public-networks/how-to/configure-java/pass-jvm-options",permalink:"/development/public-networks/how-to/configure-java/pass-jvm-options",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/how-to/configure-java/pass-jvm-options.md",tags:[{inline:!0,label:"public networks",permalink:"/development/tags/public-networks"},{inline:!0,label:"private networks",permalink:"/development/tags/private-networks"}],version:"current",lastUpdatedAt:172249208e4,sidebarPosition:2,frontMatter:{title:"Pass JVM options",sidebar_position:2,description:"Passing Java virtual machine JVM options to Hyperledger Besu at runtime",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Install and update Java",permalink:"/development/public-networks/how-to/configure-java/install-update-java"},next:{title:"Manage JVM memory",permalink:"/development/public-networks/how-to/configure-java/manage-memory"}},p={},c=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"pass-jvm-options",children:"Pass JVM options"}),"\n",(0,o.jsx)(t.p,{children:"To perform tasks such as attaching a debugger or configuring the garbage collector, pass Java Virtual Machine (JVM) options to Hyperledger Besu."}),"\n",(0,o.jsxs)(t.p,{children:["Besu passes the contents of the ",(0,o.jsx)(t.code,{children:"BESU_OPTS"})," environment variable to the JVM. Set standard JVM options in the ",(0,o.jsx)(t.code,{children:"BESU_OPTS"})," variable."]}),"\n",(0,o.jsx)(t.p,{children:"For Bash-based executions, you can set the variable for only the scope of the program execution by setting it before starting Besu."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"BESU_OPTS=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=5005 \\\nbesu --network=holesky\n"})})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var o=n(96540);const s={},a=o.createContext(s);function r(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);