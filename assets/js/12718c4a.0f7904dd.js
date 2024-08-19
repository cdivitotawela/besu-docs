"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[78472],{39418:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=t(74848),i=t(28453);const a={sidebar_position:4,description:"Learn about parallel transaction execution.",tags:["public networks"]},o="Parallel transaction execution",r={id:"public-networks/concepts/parallel-transaction-execution",title:"Parallel transaction execution",description:"Learn about parallel transaction execution.",source:"@site/docs/public-networks/concepts/parallel-transaction-execution.md",sourceDirName:"public-networks/concepts",slug:"/public-networks/concepts/parallel-transaction-execution",permalink:"/development/public-networks/concepts/parallel-transaction-execution",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/docs/public-networks/concepts/parallel-transaction-execution.md",tags:[{inline:!0,label:"public networks",permalink:"/development/tags/public-networks"}],version:"current",lastUpdatedAt:172249208e4,sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Learn about parallel transaction execution.",tags:["public networks"]},sidebar:"publicDocSidebar",previous:{title:"Data storage formats",permalink:"/development/public-networks/concepts/data-storage-formats"},next:{title:"Transaction types",permalink:"/development/public-networks/concepts/transactions/types"}},c={},l=[{value:"Parallelization mechanism overview",id:"parallelization-mechanism-overview",level:2},{value:"Conflict detection strategy",id:"conflict-detection-strategy",level:3},{value:"Metrics",id:"metrics",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"parallel-transaction-execution",children:"Parallel transaction execution"}),"\n",(0,s.jsxs)(n.p,{children:["Besu supports parallel transaction execution, using an optimistic approach to parallelize\ntransactions within a block.\nYou can enable this feature when using the ",(0,s.jsx)(n.a,{href:"/development/public-networks/concepts/data-storage-formats#bonsai-tries",children:"Bonsai Tries"})," data\nstorage format.\nThis page provides an ",(0,s.jsx)(n.a,{href:"#parallelization-mechanism-overview",children:"overview of the parallelization mechanism"}),",\nand ",(0,s.jsx)(n.a,{href:"#metrics",children:"metrics"})," that highlight Besu's improved performance."]}),"\n",(0,s.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,s.jsxs)(n.p,{children:["Parallel transaction execution is an early access feature.\nYou can enable it using the ",(0,s.jsx)(n.code,{children:"--Xbonsai-parallel-tx-processing-enabled"})," option."]})}),"\n",(0,s.jsx)(n.h2,{id:"parallelization-mechanism-overview",children:"Parallelization mechanism overview"}),"\n",(0,s.jsx)(n.p,{children:"When parallel transaction execution is enabled, Besu initially executes all transactions within a\nblock in parallel, operating under the optimistic assumption that they can all be executed\nconcurrently without conflict.\nThis parallel execution runs in the background, and Besu proceeds to sequentially process the\ntransactions without waiting for the parallel execution to complete."}),"\n",(0,s.jsx)(n.p,{children:"The following flowchart outlines the transaction execution flow:"}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)(n.mermaid,{value:"graph TD;\n  X(Start parallel execution as background process) --\x3e A(Start sequential processing);\n  A --\x3e B{{Is transaction completed by background process?}};\n  B --\x3e |Yes| C{{Conflict check}};\n  C --\x3e |No conflict| D(Apply background state modifications);\n  C --\x3e |Conflict detected| E(Replay transaction using background cache);\n  B --\x3e |No| F(Execute transaction sequentially);\n  D --\x3e G(End sequential processing);\n  E --\x3e G;\n  F --\x3e G;"})}),"\n",(0,s.jsx)(n.p,{children:"Besu first determines if a transaction has been completed by the background parallel execution:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Completed:"})," If the transaction is completed, Besu examines whether there are any conflicts with\npreviously executed transactions.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"No conflict:"})," If no conflict is detected, Besu directly applies the state modifications\ngenerated in the background to the block, avoiding re-execution."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Conflict detected:"})," If a conflict is detected, Besu replays the transaction, using a cache of\nbackground reads to improve efficiency."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Not completed:"})," If the transaction is not completed, Besu executes it sequentially within the\nblock to ensure its completion, independent of the background execution."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"conflict-detection-strategy",children:"Conflict detection strategy"}),"\n",(0,s.jsxs)(n.p,{children:["Besu's conflict detection strategy uses the ",(0,s.jsx)(n.em,{children:"accumulator"}),", a\n",(0,s.jsx)(n.a,{href:"/development/public-networks/concepts/data-storage-formats#bonsai-tries",children:"Bonsai Tries"})," feature that tracks addresses and slots touched\nor modified during block or transaction execution."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["You can read more about Bonsai Tries in ",(0,s.jsx)(n.a,{href:"https://consensys.io/blog/bonsai-tries-guide",children:"Consensys' Guide to Bonsai Tries"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"If a slot, code, or anything else related to an account is modified, the Bonsai accumulator keeps\ntrack of this information.\nThis strategy leverages Bonsai's storage benefits, only keeping track of block-to-block state diffs\nin Besu storage."}),"\n",(0,s.jsx)(n.p,{children:"The following flowchart outlines how Besu detects conflicts and imports transactions into the block:"}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)(n.mermaid,{value:"graph TD;\n  A(Start block import) --\x3e B(Fetch block's touched addresses);\n  B --\x3e C{{For each transaction}};\n  C --\x3e|Next transaction| D(Fetch transaction's touched addresses);\n  D --\x3e E{{Compare addresses}};\n  E --\x3e|Conflict detected| F(Replay transaction using cached data);\n  E --\x3e|No conflict| G(Apply transaction result directly \u2013 no replay);\n  F --\x3e H{{Attempt to read from cache}};\n  H --\x3e|Data found in cache| I(Continue replay using cached data);\n  H --\x3e|Data not found in cache| J(Fetch data from disk);\n  I --\x3e K(Transaction replay complete);\n  J --\x3e K;\n  K --\x3e L(Apply transaction changes);\n  G --\x3e L;\n  L --\x3e M{{More transactions?}};\n  M --\x3e|Yes| C;\n  M --\x3e|No| N(End block import);"})}),"\n",(0,s.jsx)(n.p,{children:"Besu takes what the accumulator tracks at the block and transaction level, compares the\ntransaction's list of touched addresses to the block's list, and checks for conflicts.\nIn particular:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Besu identifies conflicts by checking whether a transaction has interacted with accounts modified\nby the block (that is, modified by previous transactions)."}),"\n",(0,s.jsx)(n.li,{children:"If a conflict is detected, Besu replays the transaction using cached data or data fetched from disk."}),"\n",(0,s.jsx)(n.li,{children:"Each time a transaction is added to the block, Besu incorporates the transaction's tracked list\ninto the block's list."}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{title:"Note",type:"info",children:[(0,s.jsx)(n.p,{children:"The following are excluded from the conflict check:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Unchanged accounts read by the block."}),"\n",(0,s.jsx)(n.li,{children:"Rewards given to the validator coinbase address at the end of each transaction.\nIf these were considered, every transaction would conflict with the coinbase address.\nBesu identifies this address as a conflict only if it is accessed for reasons other than receiving\nrewards at the transaction's conclusion."}),"\n"]})]}),"\n",(0,s.jsx)(n.p,{children:"The following flowchart outlines how Besu maintains the lists of tracked addresses:"}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)(n.mermaid,{value:"graph TD;\n  A(Start) --\x3e B(Fetch block's touched addresses);\n  B --\x3e C{{Check each address}};\n  C --\x3e|Unchanged| D(Mark as read);\n  C --\x3e|Modified| E(Add to block's tracked addresses);\n  D --\x3e F{{Next address}};\n  E --\x3e F;\n  F --\x3e|More addresses?| C;\n  F --\x3e|No more| G(Fetch transaction's touched addresses);\n  G --\x3e H{{For each transaction address}};\n  H --\x3e|From, sender, etc.| I(Add to transaction's tracked addresses);\n  I --\x3e J{{Next address}};\n  J --\x3e|More addresses?| H;\n  J --\x3e|No more| K{{Compare block and transaction addresses}};\n  K --\x3e|Conflict detected| L(Conflict is detected);\n  K --\x3e|No conflict| M(Proceed with transaction);\n  L --\x3e N(End);\n  M --\x3e N;"})}),"\n",(0,s.jsxs)(n.p,{children:["Besu's conflict detection strategy is intentionally simple to minimize edge cases.\nWith this approach to parallel transaction execution,\n",(0,s.jsx)(n.a,{href:"#metrics",children:"approximately 40% of transactions do not require replay"}),".\nIn the future, the conflict detection strategy may be refined to reduce false positives."]}),"\n",(0,s.jsxs)(n.p,{children:["You can enable parallel transaction execution using the ",(0,s.jsx)(n.code,{children:"--Xbonsai-parallel-tx-processing-enabled"})," option."]}),"\n",(0,s.jsx)(n.h2,{id:"metrics",children:"Metrics"}),"\n",(0,s.jsx)(n.p,{children:"Parallel transaction execution uses Besu's resources more efficiently than traditional\nsequential execution, significantly improving performance."}),"\n",(0,s.jsx)(n.p,{children:"The following metrics were collected on nodes running on Azure VMs (Standard D8as v5 \u2013 8 vCPUs, 32\nGiB memory), with Teku and Nimbus as consensus layer (CL) clients:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Block processing time"})," - With Teku as CL client, block processing time improves by at least 25%.\nThe 50th percentile decreases from 282 ms to 207 ms and the 95th\npercentile decreases from 479 ms to 393 ms."]}),"\n",(0,s.jsx)(n.p,{children:"With Nimbus as CL client, block processing improves by approximately 45%, with the 50th percentile\nat 155 ms, and the 95th percentile at 299 ms.\nBesu running with Nimbus has better performance than with Teku because Nimbus has less overhead on\nBesu, meaning less context switching and fewer cache misses."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Execution throughput"})," - Execution throughput increases, with an average of 96 Mgas/s and peaks\nof up to 250 Mgas/s."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Parallel transactions"})," - Parallel transaction execution introduces two new metrics, which\nindicate that approximately 40% of transactions are parallelized using this feature:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"besu_block_processing_parallelized_transactions_counter_total"})," - The number of transactions\nexecuted in parallel."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"besu_block_processing_conflicted_transactions_counter_total"})," - The number of transactions that\nencountered conflicts and were therefore executed sequentially."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Sync time"})," - Snap synchronization time is approximately 27 hours and 5 minutes, with block import\ntime approximately 6 ms on average."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CPU profiling"})," - The new payload call time decreases from 251.68 ms to 172.04 ms on average,\nwith notable improvements in SLOAD operation times."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"During the faster block processing time, Besu uses more CPU and more disk accesses in parallel\n(higher IOPS).\nHowever, when these metrics are averaged on different monitoring tools, the resource usage looks the same as\nwith sequential execution.\nOverall, parallel transaction execution improves Besu performance with almost no resource usage\noverhead."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var s=t(96540);const i={},a=s.createContext(i);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);