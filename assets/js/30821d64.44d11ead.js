"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[94125],{9036:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>a,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var s=n(74848),i=n(28453);const r={title:"Objects",description:"Engine API objects reference",tags:["public networks"]},c="Engine API objects",d={id:"public-networks/reference/engine-api/objects",title:"Objects",description:"Engine API objects reference",source:"@site/versioned_docs/version-24.5.2/public-networks/reference/engine-api/objects.md",sourceDirName:"public-networks/reference/engine-api",slug:"/public-networks/reference/engine-api/objects",permalink:"/24.5.2/public-networks/reference/engine-api/objects",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-24.5.2/public-networks/reference/engine-api/objects.md",tags:[{inline:!0,label:"public networks",permalink:"/24.5.2/tags/public-networks"}],version:"24.5.2",lastUpdatedAt:172249208e4,frontMatter:{title:"Objects",description:"Engine API objects reference",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Engine API",permalink:"/24.5.2/public-networks/reference/engine-api/"},next:{title:"Genesis file items",permalink:"/24.5.2/public-networks/reference/genesis-items"}},l={},h=[{value:"Execution payload object",id:"execution-payload-object",level:2},{value:"Fork choice state object",id:"fork-choice-state-object",level:2},{value:"Payload attributes object",id:"payload-attributes-object",level:2},{value:"Payload status object",id:"payload-status-object",level:2},{value:"Transition configuration object",id:"transition-configuration-object",level:2}];function o(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"engine-api-objects",children:"Engine API objects"}),"\n",(0,s.jsxs)(t.p,{children:["The following objects are parameters for or returned by the ",(0,s.jsx)(t.a,{href:"/24.5.2/public-networks/reference/engine-api/",children:"Engine API methods"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"execution-payload-object",children:"Execution payload object"}),"\n",(0,s.jsxs)(t.p,{children:["Parameter for ",(0,s.jsx)(t.a,{href:"/24.5.2/public-networks/reference/engine-api/#engine_newpayloadv1",children:(0,s.jsx)(t.code,{children:"engine_newPayloadV1"})}),". Returned by ",(0,s.jsx)(t.a,{href:"/24.5.2/public-networks/reference/engine-api/#engine_getpayloadv1",children:(0,s.jsx)(t.code,{children:"engine_getPayloadV1"})}),"."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"parentHash"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Data"}),", 32 Bytes"]}),(0,s.jsx)(t.td,{children:"Hash of the parent block."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"feeRecipient"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Data"}),", 20 Bytes"]}),(0,s.jsx)(t.td,{children:"Beneficiary of the fee."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"stateRoot"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Data"}),", 32 Bytes"]}),(0,s.jsx)(t.td,{children:"Root of the final state trie for the block."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"receiptsRoot"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Data"}),", 32 Bytes"]}),(0,s.jsx)(t.td,{children:"Root of the receipts trie for the block."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"logsBloom"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Data"}),", 256 Bytes"]}),(0,s.jsx)(t.td,{children:"Bloom filter for light clients to quickly retrieve related logs."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"prevRandao"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Data"}),", 32 Bytes"]}),(0,s.jsx)(t.td,{children:"Difficulty for this block."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"blockNumber"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Quantity"}),", 64 Bits"]}),(0,s.jsx)(t.td,{children:"Block number of block containing this transaction."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gasLimit"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Quantity"}),", 64 Bits"]}),(0,s.jsx)(t.td,{children:"Maximum gas allowed in this block."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"gasUsed"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Quantity"}),", 64 Bits"]}),(0,s.jsx)(t.td,{children:"Total gas used by all transactions in this block."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"timestamp"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Quantity"}),", 64 Bits"]}),(0,s.jsx)(t.td,{children:"Unix timestamp (milliseconds) for block assembly."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"extraData"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Data"}),", 0 to 32 Bytes"]}),(0,s.jsx)(t.td,{children:"Extra data field for this block."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"baseFeePerGas"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Quantity"}),", 256 Bits"]}),(0,s.jsxs)(t.td,{children:["The block's ",(0,s.jsx)(t.a,{href:"/24.5.2/public-networks/concepts/transactions/types#eip1559-transactions",children:"base fee per gas"}),". This field is empty for blocks created before ",(0,s.jsx)(t.a,{href:"https://github.com/ethereum/EIPs/blob/2d8a95e14e56de27c5465d93747b0006bd8ac47f/EIPS/eip-1559.md",children:"EIP-1559"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"blockHash"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Data"}),", 32 Bytes"]}),(0,s.jsx)(t.td,{children:"Hash of the execution block."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"transactions"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.em,{children:"Array"})}),(0,s.jsxs)(t.td,{children:["Array of transaction objects, each object is a list representing ",(0,s.jsx)(t.code,{children:"TransactionType"}),", ",(0,s.jsx)(t.code,{children:"TransactionPayload"}),", or ",(0,s.jsx)(t.code,{children:"LegacyTransaction"})," as defined in ",(0,s.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-2718",children:"EIP-2718"}),"."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"fork-choice-state-object",children:"Fork choice state object"}),"\n",(0,s.jsxs)(t.p,{children:["Parameter for ",(0,s.jsx)(t.a,{href:"/24.5.2/public-networks/reference/engine-api/#engine_forkchoiceupdatedv1",children:(0,s.jsx)(t.code,{children:"engine_forkchoiceUpdatedV1"})}),"."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"headBlockHash"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Data"}),", 32 Bytes"]}),(0,s.jsx)(t.td,{children:"Block hash of the head of the canonical chain."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"safeBlockHash"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Data"}),", 32 Bytes"]}),(0,s.jsxs)(t.td,{children:['"Safe" block hash of the canonical chain under certain synchrony and honesty assumptions. This value MUST be either equal to or an ancestor of ',(0,s.jsx)(t.code,{children:"headBlockHash"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"finalizedBlockHash"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Data"}),", 32 Bytes"]}),(0,s.jsx)(t.td,{children:"Block hash of the most recent finalized block."})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"payload-attributes-object",children:"Payload attributes object"}),"\n",(0,s.jsxs)(t.p,{children:["Parameter for ",(0,s.jsx)(t.a,{href:"/24.5.2/public-networks/reference/engine-api/#engine_forkchoiceupdatedv1",children:(0,s.jsx)(t.code,{children:"engine_forkchoiceUpdatedV1"})}),"."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"timestamp"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Quantity"}),", 64 Bits"]}),(0,s.jsxs)(t.td,{children:["Value for the ",(0,s.jsx)(t.code,{children:"timestamp"})," field of the new payload."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"prevRandao"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Data"}),", 32 Bytes"]}),(0,s.jsxs)(t.td,{children:["Value for the ",(0,s.jsx)(t.code,{children:"prevRandao"})," field of the new payload."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"suggestedFeeRecipient"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Data"}),", 20 Bytes"]}),(0,s.jsxs)(t.td,{children:["Suggested value for the ",(0,s.jsx)(t.code,{children:"feeRecipient"})," field of the new payload."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"payload-status-object",children:"Payload status object"}),"\n",(0,s.jsxs)(t.p,{children:["Returned by ",(0,s.jsx)(t.a,{href:"/24.5.2/public-networks/reference/engine-api/#engine_newpayloadv1",children:(0,s.jsx)(t.code,{children:"engine_newPayloadV1"})})," and ",(0,s.jsx)(t.a,{href:"/24.5.2/public-networks/reference/engine-api/#engine_forkchoiceupdatedv1",children:(0,s.jsx)(t.code,{children:"engine_forkchoiceUpdatedV1"})}),"."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"status"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.em,{children:"Enumeration"})}),(0,s.jsxs)(t.td,{children:["Either ",(0,s.jsx)(t.code,{children:'"VALID"'}),", ",(0,s.jsx)(t.code,{children:'"INVALID"'}),", ",(0,s.jsx)(t.code,{children:'"SYNCING"'}),", ",(0,s.jsx)(t.code,{children:'"ACCEPTED"'}),", ",(0,s.jsx)(t.code,{children:'"INVALID_BLOCK_HASH"'}),", or ",(0,s.jsx)(t.code,{children:'"INVALID_TERMINAL_BLOCK"'}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"latestValidHash"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Data"}),", 32 Bytes"]}),(0,s.jsx)(t.td,{children:"Hash of the most recent valid block in the branch defined by payload and its ancestors."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"validationError"})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:(0,s.jsx)(t.em,{children:"String"})}),(0,s.jsxs)(t.td,{children:["Message providing additional details on the validation error if the payload is classified as ",(0,s.jsx)(t.code,{children:"INVALID"}),", ",(0,s.jsx)(t.code,{children:"INVALID_BLOCK_HASH"})," or ",(0,s.jsx)(t.code,{children:"INVALID_TERMINAL_BLOCK"}),"."]})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"transition-configuration-object",children:"Transition configuration object"}),"\n",(0,s.jsxs)(t.p,{children:["Parameter for and returned by ",(0,s.jsx)(t.a,{href:"/24.5.2/public-networks/reference/engine-api/#engine_exchangetransitionconfigurationv1",children:(0,s.jsx)(t.code,{children:"engine_exchangeTransitionConfigurationV1"})}),"."]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Key"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"Type"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"terminalTotalDifficulty"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Quantity"}),", 256 Bits"]}),(0,s.jsxs)(t.td,{children:["Maps on the ",(0,s.jsx)(t.code,{children:"TERMINAL_TOTAL_DIFFICULTY"})," parameter of ",(0,s.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-3675#client-software-configuration",children:"EIP-3675"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"terminalBlockHash"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Data"}),", 32 Bytes"]}),(0,s.jsxs)(t.td,{children:["Maps on the ",(0,s.jsx)(t.code,{children:"TERMINAL_BLOCK_HASH"})," parameter of ",(0,s.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-3675#client-software-configuration",children:"EIP-3675"}),"."]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"terminalBlockNumber"})}),(0,s.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,s.jsx)(t.em,{children:"Quantity"}),", 64 Bits"]}),(0,s.jsxs)(t.td,{children:["Maps on the ",(0,s.jsx)(t.code,{children:"TERMINAL_BLOCK_NUMBER"})," parameter of ",(0,s.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-3675#client-software-configuration",children:"EIP-3675"}),"."]})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>c,x:()=>d});var s=n(96540);const i={},r=s.createContext(i);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);