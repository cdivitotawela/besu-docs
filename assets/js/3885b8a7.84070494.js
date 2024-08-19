"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[81005],{94744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var i=t(74848),o=t(28453);const r={title:"Public key infrastructure",sidebar_position:5,description:"Public key infrastructure",tags:["private networks"]},s="Public key infrastructure",a={id:"private-networks/concepts/pki",title:"Public key infrastructure",description:"Public key infrastructure",source:"@site/versioned_docs/version-23.7.3/private-networks/concepts/pki.md",sourceDirName:"private-networks/concepts",slug:"/private-networks/concepts/pki",permalink:"/23.7.3/private-networks/concepts/pki",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/concepts/pki.md",tags:[{inline:!0,label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:172249208e4,sidebarPosition:5,frontMatter:{title:"Public key infrastructure",sidebar_position:5,description:"Public key infrastructure",tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Permissioning plugin",permalink:"/23.7.3/private-networks/concepts/permissioning/plugin"},next:{title:"Plugins",permalink:"/23.7.3/private-networks/concepts/plugins"}},c={},p=[{value:"Node permissioning",id:"node-permissioning",level:2},{value:"Block proposal permissioning",id:"block-proposal-permissioning",level:2}];function l(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"public-key-infrastructure",children:"Public key infrastructure"}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"Public key infrastructure (PKI) support is an early access feature, and functionality and options may be updated between releases."})}),"\n",(0,i.jsx)(n.p,{children:"Hyperledger Besu's public key infrastructure allows you to use certificates issued by a trusted authority to manage node and account identities in the following ways:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Node permissioning - Only authorized nodes can connect to other nodes in the network using TLS for the P2P communication."}),"\n",(0,i.jsx)(n.li,{children:"Block proposal permissioning - Only blocks proposed by authorized validators are accepted."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Supported keystore and truststore formats used to store the certificates include PKCS11, PKCS12, and JKS."}),"\n",(0,i.jsx)(n.h2,{id:"node-permissioning",children:"Node permissioning"}),"\n",(0,i.jsx)(n.p,{children:"Allow TLS communication between nodes by using certificates issued by a trusted authority to connect to other authorized nodes in the network."}),"\n",(0,i.jsx)(n.p,{children:"When receiving connection requests, the incoming connection must be from another authorized node. Similarly, when connecting to a node the initiator ensures that the remote node is authorized to participate in the network."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/23.7.3/private-networks/how-to/configure/tls/p2p",children:"Configure TLS for the P2P communication using the Besu command line options"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"block-proposal-permissioning",children:"Block proposal permissioning"}),"\n",(0,i.jsx)(n.admonition,{type:"caution",children:(0,i.jsxs)(n.p,{children:["Only private networks using the ",(0,i.jsx)(n.a,{href:"/23.7.3/private-networks/how-to/configure/consensus/qbft",children:"QBFT consensus protocol"})," support block proposal permissioning."]})}),"\n",(0,i.jsxs)(n.p,{children:["Use certificates issued by a trusted authority to ensure only authorized validator nodes can propose new blocks in the network. The block hash is signed by the validator private certificate and included in the header of the proposed block as a ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Cryptographic_Message_Syntax",children:"CMS (Cryptographic Message Syntax)"}),". This is used by other validators to verify that the proposer is authorized to create a block in the network."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/23.7.3/private-networks/how-to/configure/block-proposal-permissioning",children:"Configure block proposal permissioning using the Besu command line options"}),"."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(96540);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);