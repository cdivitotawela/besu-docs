"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[85809],{48005:(t,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=i(74848),e=i(28453);const o={title:"Transaction validation",sidebar_position:3,description:"What transaction validation and when",tags:["public networks","private networks"]},s="Transaction validation",r={id:"public-networks/concepts/transactions/validation",title:"Transaction validation",description:"What transaction validation and when",source:"@site/versioned_docs/version-24.5.2/public-networks/concepts/transactions/validation.md",sourceDirName:"public-networks/concepts/transactions",slug:"/public-networks/concepts/transactions/validation",permalink:"/24.5.2/public-networks/concepts/transactions/validation",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.5.2/public-networks/concepts/transactions/validation.md",tags:[{inline:!0,label:"public networks",permalink:"/24.5.2/tags/public-networks"},{inline:!0,label:"private networks",permalink:"/24.5.2/tags/private-networks"}],version:"24.5.2",lastUpdatedAt:172249208e4,sidebarPosition:3,frontMatter:{title:"Transaction validation",sidebar_position:3,description:"What transaction validation and when",tags:["public networks","private networks"]},sidebar:"publicDocSidebar",previous:{title:"Transaction pool",permalink:"/24.5.2/public-networks/concepts/transactions/pool"},next:{title:"Network ID and chain ID",permalink:"/24.5.2/public-networks/concepts/network-and-chain-id"}},c={},l=[];function d(t){const n={admonition:"admonition",h1:"h1",img:"img",p:"p",...(0,e.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"transaction-validation",children:"Transaction validation"}),"\n",(0,a.jsx)(n.p,{children:"For transactions submitted and added to a block, Besu validates the transactions, as illustrated in the following diagram."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Transaction Validation",src:i(26520).A+"",width:"1380",height:"1310"})}),"\n",(0,a.jsx)(n.p,{children:"Besu repeats the set of transaction pool validations after propagating the transaction. Besu repeats the same set of validations when importing the block that includes the transaction, except the nonce must be exactly right when importing the block."}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Private transactions are not added to the transaction pool. The privacy marker transaction is submitted to the transaction pool but the private transaction itself is directly distributed to the transaction participants."})}),"\n",(0,a.jsx)(n.p,{children:"When adding the transaction to a block, Besu performs an additional validation to check that the transaction gas limit is less than the remaining block gas limit. After creating a block, the node imports the block and then repeats the transaction pool validations."}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"The transaction is only added if the entire transaction gas limit is less than the remaining gas for the block. The total gas used by the transaction is not relevant to this validation. That is, if the total gas used by the transaction is less than the remaining block gas, but the transaction gas limit is more than the remaining block gas, the transaction is not added."})})]})}function p(t={}){const{wrapper:n}={...(0,e.R)(),...t.components};return n?(0,a.jsx)(n,{...t,children:(0,a.jsx)(d,{...t})}):d(t)}},26520:(t,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/transaction-validation-3e8deafb4d76b8cab2bc1d341ebeb0a9.png"},28453:(t,n,i)=>{i.d(n,{R:()=>s,x:()=>r});var a=i(96540);const e={},o=a.createContext(e);function s(t){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function r(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(e):t.components||e:s(t.components),a.createElement(o.Provider,{value:n},t.children)}}}]);