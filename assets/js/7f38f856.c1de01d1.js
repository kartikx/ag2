"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9142],{75320:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var t=s(74848),i=s(28453);const r={sidebar_label:"mistral",title:"oai.mistral"},l=void 0,a={id:"reference/oai/mistral",title:"oai.mistral",description:"Create an OpenAI-compatible client using Mistral.AI's API.",source:"@site/docs/reference/oai/mistral.md",sourceDirName:"reference/oai",slug:"/reference/oai/mistral",permalink:"/ag2/docs/reference/oai/mistral",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/website/docs/reference/oai/mistral.md",tags:[],version:"current",frontMatter:{sidebar_label:"mistral",title:"oai.mistral"},sidebar:"referenceSideBar",previous:{title:"groq",permalink:"/ag2/docs/reference/oai/groq"},next:{title:"ollama",permalink:"/ag2/docs/reference/oai/ollama"}},c={},o=[{value:"MistralAIClient",id:"mistralaiclient",level:2},{value:"__init__",id:"__init__",level:3},{value:"message_retrieval",id:"message_retrieval",level:3},{value:"parse_params",id:"parse_params",level:3},{value:"tool_def_to_mistral",id:"tool_def_to_mistral",level:3},{value:"calculate_mistral_cost",id:"calculate_mistral_cost",level:3}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Create an OpenAI-compatible client using Mistral.AI's API."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Example"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"llm_config={"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'"config_list"'})," - [{"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'"api_type"'}),' - "mistral",']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'"model"'}),' - "open-mixtral-8x22b",']}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:'"api_key"'}),' - os.environ.get("MISTRAL_API_KEY")\n}\n]}']}),"\n",(0,t.jsx)(n.p,{children:'agent = autogen.AssistantAgent("my_agent", llm_config=llm_config)'}),"\n",(0,t.jsx)(n.p,{children:"Install Mistral.AI python library using: pip install --upgrade mistralai"}),"\n",(0,t.jsx)(n.p,{children:"Resources:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.mistral.ai/getting-started/quickstart/",children:"https://docs.mistral.ai/getting-started/quickstart/"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"NOTE"})," - Requires mistralai package version >= 1.0.1"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"mistralaiclient",children:"MistralAIClient"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"class MistralAIClient()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Client for Mistral.AI's API."}),"\n",(0,t.jsx)(n.h3,{id:"__init__",children:"__init__"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def __init__(**kwargs)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Requires api_key or environment variable to be set"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Arguments"}),":"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"api_key"})," ",(0,t.jsx)(n.em,{children:"str"})," - The API key for using Mistral.AI (or environment variable MISTRAL_API_KEY needs to be set)"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"message_retrieval",children:"message_retrieval"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def message_retrieval(\n        response: ChatCompletion\n) -> Union[List[str], List[ChatCompletionMessage]]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Retrieve the messages from the response."}),"\n",(0,t.jsx)(n.h3,{id:"parse_params",children:"parse_params"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def parse_params(params: Dict[str, Any]) -> Dict[str, Any]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Loads the parameters for Mistral.AI API from the passed in parameters and returns a validated set. Checks types, ranges, and sets defaults"}),"\n",(0,t.jsx)(n.h3,{id:"tool_def_to_mistral",children:"tool_def_to_mistral"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def tool_def_to_mistral(\n        tool_definitions: List[Dict[str, Any]]) -> List[Dict[str, Any]]\n"})}),"\n",(0,t.jsx)(n.p,{children:"Converts AutoGen tool definition to a mistral tool format"}),"\n",(0,t.jsx)(n.h3,{id:"calculate_mistral_cost",children:"calculate_mistral_cost"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-python",children:"def calculate_mistral_cost(input_tokens: int, output_tokens: int,\n                           model_name: str) -> float\n"})}),"\n",(0,t.jsx)(n.p,{children:"Calculate the cost of the mistral response."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>a});var t=s(96540);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);