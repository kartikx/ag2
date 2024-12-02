"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7114],{6399:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(74848),i=n(28453);const o={sidebar_label:"tool_retriever",title:"agentchat.contrib.tool_retriever"},l=void 0,c={id:"reference/agentchat/contrib/tool_retriever",title:"agentchat.contrib.tool_retriever",description:"ToolBuilder",source:"@site/docs/reference/agentchat/contrib/tool_retriever.md",sourceDirName:"reference/agentchat/contrib",slug:"/reference/agentchat/contrib/tool_retriever",permalink:"/ag2/docs/reference/agentchat/contrib/tool_retriever",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/reference/agentchat/contrib/tool_retriever.md",tags:[],version:"current",frontMatter:{sidebar_label:"tool_retriever",title:"agentchat.contrib.tool_retriever"},sidebar:"referenceSideBar",previous:{title:"text_analyzer_agent",permalink:"/ag2/docs/reference/agentchat/contrib/text_analyzer_agent"},next:{title:"web_surfer",permalink:"/ag2/docs/reference/agentchat/contrib/web_surfer"}},a={},s=[{value:"ToolBuilder",id:"toolbuilder",level:2},{value:"bind",id:"bind",level:3},{value:"bind_user_proxy",id:"bind_user_proxy",level:3},{value:"get_full_tool_description",id:"get_full_tool_description",level:3},{value:"find_callables",id:"find_callables",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"toolbuilder",children:"ToolBuilder"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"class ToolBuilder()\n"})}),"\n",(0,r.jsx)(t.h3,{id:"bind",children:"bind"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"def bind(agent: AssistantAgent, functions: str)\n"})}),"\n",(0,r.jsx)(t.p,{children:"Binds the function to the agent so that agent is aware of it."}),"\n",(0,r.jsx)(t.h3,{id:"bind_user_proxy",children:"bind_user_proxy"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"def bind_user_proxy(agent: UserProxyAgent, tool_root: str)\n"})}),"\n",(0,r.jsx)(t.p,{children:"Updates user proxy agent with a executor so that code executor can successfully execute function-related code.\nReturns an updated user proxy."}),"\n",(0,r.jsx)(t.h3,{id:"get_full_tool_description",children:"get_full_tool_description"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"def get_full_tool_description(py_file)\n"})}),"\n",(0,r.jsx)(t.p,{children:"Retrieves the function signature for a given Python file."}),"\n",(0,r.jsx)(t.h3,{id:"find_callables",children:"find_callables"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"def find_callables(directory)\n"})}),"\n",(0,r.jsx)(t.p,{children:"Find all callable objects defined in Python files within the specified directory."})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>l,x:()=>c});var r=n(96540);const i={},o=r.createContext(i);function l(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);