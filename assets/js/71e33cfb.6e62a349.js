"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7449],{68990:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var o=t(74848),s=t(28453);const a={custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_cost_token_tracking.ipynb",description:"cost calculation",source_notebook:"/notebook/agentchat_cost_token_tracking.ipynb",tags:["cost"],title:"Usage tracking with AutoGen"},r="Usage tracking with AutoGen",i={id:"notebooks/agentchat_cost_token_tracking",title:"Usage tracking with AutoGen",description:"cost calculation",source:"@site/docs/notebooks/agentchat_cost_token_tracking.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_cost_token_tracking",permalink:"/ag2/docs/notebooks/agentchat_cost_token_tracking",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_cost_token_tracking.ipynb",tags:[{label:"cost",permalink:"/ag2/docs/tags/cost"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_cost_token_tracking.ipynb",description:"cost calculation",source_notebook:"/notebook/agentchat_cost_token_tracking.ipynb",tags:["cost"],title:"Usage tracking with AutoGen"},sidebar:"notebooksSidebar",previous:{title:"CaptainAgent",permalink:"/ag2/docs/notebooks/agentchat_captainagent"},next:{title:"Agent Chat with custom model loading",permalink:"/ag2/docs/notebooks/agentchat_custom_model"}},c={},l=[{value:"1. Use AutoGen\u2019s OpenAIWrapper for cost estimation",id:"use-autogens-openaiwrapper-for-cost-estimation",level:2},{value:"2. Track cost and token count for agents",id:"track-cost-and-token-count-for-agents",level:2},{value:"3. Custom token price for up-to-date cost estimation",id:"custom-token-price-for-up-to-date-cost-estimation",level:2},{value:"Caution when using Azure OpenAI!",id:"caution-when-using-azure-openai",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Set your API Endpoint",id:"set-your-api-endpoint",level:2},{value:"OpenAIWrapper with cost estimation",id:"openaiwrapper-with-cost-estimation",level:2},{value:"OpenAIWrapper with custom token price",id:"openaiwrapper-with-custom-token-price",level:2},{value:"Usage Summary for OpenAIWrapper",id:"usage-summary-for-openaiwrapper",level:2},{value:"Usage Summary for Agents",id:"usage-summary-for-agents",level:2}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"usage-tracking-with-autogen",children:"Usage tracking with AutoGen"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://colab.research.google.com/github/ag2ai/ag2/blob/main/notebook/agentchat_cost_token_tracking.ipynb",children:(0,o.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,o.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/agentchat_cost_token_tracking.ipynb",children:(0,o.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,o.jsx)(n.h2,{id:"use-autogens-openaiwrapper-for-cost-estimation",children:"1. Use AutoGen\u2019s OpenAIWrapper for cost estimation"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"OpenAIWrapper"})," from ",(0,o.jsx)(n.code,{children:"autogen"})," tracks token counts and costs of your\nAPI calls. Use the ",(0,o.jsx)(n.code,{children:"create()"})," method to initiate requests and\n",(0,o.jsx)(n.code,{children:"print_usage_summary()"})," to retrieve a detailed usage report, including\ntotal cost and token usage for both cached and actual requests."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:'mode=["actual", "total"]'})," (default): print usage summary for\nnon-caching completions and all completions (including cache)."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"mode='actual'"}),": only print non-cached usage."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"mode='total'"}),": only print all usage (including cache)."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Reset your session\u2019s usage data with ",(0,o.jsx)(n.code,{children:"clear_usage_summary()"})," when\nneeded."]}),"\n",(0,o.jsx)(n.h2,{id:"track-cost-and-token-count-for-agents",children:"2. Track cost and token count for agents"}),"\n",(0,o.jsxs)(n.p,{children:["We also support cost estimation for agents. Use\n",(0,o.jsx)(n.code,{children:"Agent.print_usage_summary()"})," to print the cost summary for the agent.\nYou can retrieve usage summary in a dict using\n",(0,o.jsx)(n.code,{children:"Agent.get_actual_usage()"})," and ",(0,o.jsx)(n.code,{children:"Agent.get_total_usage()"}),". Note that\n",(0,o.jsx)(n.code,{children:"Agent.reset()"})," will also reset the usage summary."]}),"\n",(0,o.jsxs)(n.p,{children:["To gather usage data for a list of agents, we provide an utility\nfunction ",(0,o.jsx)(n.code,{children:"autogen.gather_usage_summary(agents)"})," where you pass in a list\nof agents and gather the usage summary."]}),"\n",(0,o.jsx)(n.h2,{id:"custom-token-price-for-up-to-date-cost-estimation",children:"3. Custom token price for up-to-date cost estimation"}),"\n",(0,o.jsxs)(n.p,{children:["AutoGen tries to keep the token prices up-to-date. However, you can pass\nin a ",(0,o.jsx)(n.code,{children:"price"})," field in ",(0,o.jsx)(n.code,{children:"config_list"})," if the token price is not listed or\nup-to-date. Please creating an issue or pull request to help us keep the\ntoken prices up-to-date!"]}),"\n",(0,o.jsx)(n.p,{children:"Note: in json files, the price should be a list of two floats."}),"\n",(0,o.jsx)(n.p,{children:"Example Usage:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'{\n    "model": "gpt-3.5-turbo-xxxx",\n    "api_key": "YOUR_API_KEY",\n    "price": [0.0005, 0.0015]\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"caution-when-using-azure-openai",children:"Caution when using Azure OpenAI!"}),"\n",(0,o.jsx)(n.p,{children:"If you are using azure OpenAI, the model returned from completion\ndoesn\u2019t have the version information. The returned model is either\n\u2018gpt-35-turbo\u2019 or \u2018gpt-4\u2019. From there, we are calculating the cost based\non gpt-3.5-turbo-0125: (0.0005, 0.0015) per 1k prompt and completion\ntokens and gpt-4-0613: (0.03, 0.06). This means the cost can be wrong if\nyou are using a different version from azure OpenAI."}),"\n",(0,o.jsx)(n.p,{children:"This will be improved in the future. However, the token count summary is\naccurate. You can use the token count to calculate the cost yourself."}),"\n",(0,o.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsxs)(n.p,{children:["AutoGen requires ",(0,o.jsx)(n.code,{children:"Python>=3.8"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'pip install "pyautogen"\n'})}),"\n",(0,o.jsx)(n.h2,{id:"set-your-api-endpoint",children:"Set your API Endpoint"}),"\n",(0,o.jsxs)(n.p,{children:["The\n",(0,o.jsx)(n.a,{href:"https://ag2ai.github.io/ag2/docs/reference/oai/openai_utils#config_list_from_json",children:(0,o.jsx)(n.code,{children:"config_list_from_json"})}),"\nfunction loads a list of configurations from an environment variable or\na json file."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import autogen\nfrom autogen import AssistantAgent, OpenAIWrapper, UserProxyAgent, gather_usage_summary\n\nconfig_list = autogen.config_list_from_json(\n    "OAI_CONFIG_LIST",\n    filter_dict={\n        "tags": ["gpt-4o", "gpt-4o-mini"],  # comment out to get all\n    },\n)\n'})}),"\n",(0,o.jsx)(n.p,{children:"It first looks for environment variable \u201cOAI_CONFIG_LIST\u201d which needs to\nbe a valid json string. If that variable is not found, it then looks for\na json file named \u201cOAI_CONFIG_LIST\u201d. It filters the configs by tags (you\ncan filter by other keys as well)."}),"\n",(0,o.jsx)(n.p,{children:"The config list looks like the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'config_list = [\n    {\n        "model": "gpt-4o",\n        "api_key": "<your OpenAI API key>",\n        "tags": ["gpt-4o"],\n    },  # OpenAI API endpoint for gpt-4o\n    {\n        "model": "gpt-4o-mini",\n        "base_url": "<your Azure OpenAI API base>", \n        "api_type": "azure", \n        "api_version": "2024-07-18",\n        "api_key": "<your Azure OpenAI API key>",\n        "tags": ["gpt-4o-mini", "20240718"],\n    }\n]\n'})}),"\n",(0,o.jsxs)(n.p,{children:["You can set the value of config_list in any way you prefer. Please refer\nto this\n",(0,o.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/blob/main/website/docs/topics/llm_configuration.ipynb",children:"notebook"}),"\nfor full code examples of the different methods."]}),"\n",(0,o.jsx)(n.h2,{id:"openaiwrapper-with-cost-estimation",children:"OpenAIWrapper with cost estimation"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'client = OpenAIWrapper(config_list=config_list)\nmessages = [\n    {"role": "user", "content": "Can you give me 3 useful tips on learning Python? Keep it simple and short."},\n]\nresponse = client.create(messages=messages, cache_seed=None)\nprint(response.cost)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"0.0011125\n"})}),"\n",(0,o.jsx)(n.h2,{id:"openaiwrapper-with-custom-token-price",children:"OpenAIWrapper with custom token price"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# Adding price to the config_list\nfor i in range(len(config_list)):\n    config_list[i]["price"] = [\n        1,\n        1,\n    ]  # Note: This price is just for demonstration purposes. Please replace it with the actual price of the model.\n\nclient = OpenAIWrapper(config_list=config_list)\nmessages = [\n    {"role": "user", "content": "Can you give me 3 useful tips on learning Python? Keep it simple and short."},\n]\nresponse = client.create(messages=messages, cache_seed=None)\nprint("Price:", response.cost)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"Price: 0.144\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage-summary-for-openaiwrapper",children:"Usage Summary for OpenAIWrapper"}),"\n",(0,o.jsxs)(n.p,{children:["When creating a instance of OpenAIWrapper, cost of all completions from\nthe same instance is recorded. You can call ",(0,o.jsx)(n.code,{children:"print_usage_summary()"})," to\ncheckout your usage summary. To clear up, use ",(0,o.jsx)(n.code,{children:"clear_usage_summary()"}),"."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'client = OpenAIWrapper(config_list=config_list)\nmessages = [\n    {"role": "user", "content": "Can you give me 3 useful tips on learning Python? Keep it simple and short."},\n]\nclient.print_usage_summary()  # print usage summary\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:'No usage summary. Please call "create" first.\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'# The first creation\n# By default, cache_seed is set to 41 and enabled. If you don\'t want to use cache, set cache_seed to None.\nresponse = client.create(messages=messages, cache_seed=41)\nclient.print_usage_summary()  # default to ["actual", "total"]\nclient.print_usage_summary(mode="actual")  # print actual usage summary\nclient.print_usage_summary(mode="total")  # print total usage summary\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"----------------------------------------------------------------------------------------------------\nUsage summary excluding cached usage: \nTotal cost: 0.154\n* Model 'gpt-4o-2024-08-06': cost: 0.154, prompt_tokens: 25, completion_tokens: 129, total_tokens: 154\n\nAll completions are non-cached: the total cost with cached completions is the same as actual cost.\n----------------------------------------------------------------------------------------------------\n----------------------------------------------------------------------------------------------------\nUsage summary excluding cached usage: \nTotal cost: 0.154\n* Model 'gpt-4o-2024-08-06': cost: 0.154, prompt_tokens: 25, completion_tokens: 129, total_tokens: 154\n----------------------------------------------------------------------------------------------------\n----------------------------------------------------------------------------------------------------\nUsage summary including cached usage: \nTotal cost: 0.154\n* Model 'gpt-4o-2024-08-06': cost: 0.154, prompt_tokens: 25, completion_tokens: 129, total_tokens: 154\n----------------------------------------------------------------------------------------------------\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# take out cost\nprint(client.actual_usage_summary)\nprint(client.total_usage_summary)\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"{'total_cost': 0.154, 'gpt-4o-2024-08-06': {'cost': 0.154, 'prompt_tokens': 25, 'completion_tokens': 129, 'total_tokens': 154}}\n{'total_cost': 0.154, 'gpt-4o-2024-08-06': {'cost': 0.154, 'prompt_tokens': 25, 'completion_tokens': 129, 'total_tokens': 154}}\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# Since cache is enabled, the same completion will be returned from cache, which will not incur any actual cost.\n# So actual cost doesn't change but total cost doubles.\nresponse = client.create(messages=messages, cache_seed=41)\nclient.print_usage_summary()\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"----------------------------------------------------------------------------------------------------\nUsage summary excluding cached usage: \nTotal cost: 0.154\n* Model 'gpt-4o-2024-08-06': cost: 0.154, prompt_tokens: 25, completion_tokens: 129, total_tokens: 154\n\nUsage summary including cached usage: \nTotal cost: 0.308\n* Model 'gpt-4o-2024-08-06': cost: 0.308, prompt_tokens: 50, completion_tokens: 258, total_tokens: 308\n----------------------------------------------------------------------------------------------------\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# clear usage summary\nclient.clear_usage_summary()\nclient.print_usage_summary()\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:'No usage summary. Please call "create" first.\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"# all completions are returned from cache, so no actual cost incurred.\nresponse = client.create(messages=messages, cache_seed=41)\nclient.print_usage_summary()\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"----------------------------------------------------------------------------------------------------\nNo actual cost incurred (all completions are using cache).\n\nUsage summary including cached usage: \nTotal cost: 0.154\n* Model 'gpt-4o-2024-08-06': cost: 0.154, prompt_tokens: 25, completion_tokens: 129, total_tokens: 154\n----------------------------------------------------------------------------------------------------\n"})}),"\n",(0,o.jsx)(n.h2,{id:"usage-summary-for-agents",children:"Usage Summary for Agents"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Agent.print_usage_summary()"})," will print the cost summary for the\nagent."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Agent.get_actual_usage()"})," and ",(0,o.jsx)(n.code,{children:"Agent.get_total_usage()"})," will return\nthe usage summary in a dict. When an agent doesn\u2019t use LLM, they\nwill return None."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"Agent.reset()"})," will reset the usage summary."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"autogen.gather_usage_summary"})," will gather the usage summary for a\nlist of agents."]}),"\n"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'assistant = AssistantAgent(\n    "assistant",\n    system_message="You are a helpful assistant.",\n    llm_config={\n        "timeout": 600,\n        "cache_seed": None,\n        "config_list": config_list,\n    },\n)\n\nai_user_proxy = UserProxyAgent(\n    name="ai_user",\n    human_input_mode="NEVER",\n    max_consecutive_auto_reply=1,\n    code_execution_config=False,\n    llm_config={\n        "config_list": config_list,\n    },\n    # In the system message the "user" always refers to the other agent.\n    system_message="You ask a user for help. You check the answer from the user and provide feedback.",\n)\nassistant.reset()\n\nmath_problem = "$x^3=125$. What is x?"\nai_user_proxy.initiate_chat(\n    assistant,\n    message=math_problem,\n)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"ai_user (to assistant):\n\n$x^3=125$. What is x?\n\n--------------------------------------------------------------------------------\nassistant (to ai_user):\n\nTo solve the equation \\(x^3 = 125\\), you need to find the value of \\(x\\) that makes this equation true. \n\nYou can solve for \\(x\\) by taking the cube root of both sides of the equation:\n\n\\[\nx = \\sqrt[3]{125}\n\\]\n\nSince \\(125\\) is \\(5^3\\), the cube root of \\(125\\) is \\(5\\). Thus,\n\n\\[\nx = 5\n\\]\n\nTherefore, the solution to the equation \\(x^3 = 125\\) is \\(x = 5\\).\n\n--------------------------------------------------------------------------------\nai_user (to assistant):\n\nCan you help me solve the equation \\(2x^2 - 8x = 0\\)?\n\n--------------------------------------------------------------------------------\nassistant (to ai_user):\n\nCertainly! To solve the equation \\(2x^2 - 8x = 0\\), you can start by factoring the expression on the left-hand side.\n\nFirst, factor out the greatest common factor, which is \\(2x\\):\n\n\\[\n2x(x - 4) = 0\n\\]\n\nNow, you have a product of two factors equal to zero. According to the zero product property, if the product of two factors is zero, at least one of the factors must be zero. So, you set each factor equal to zero and solve for \\(x\\):\n\n1. \\(2x = 0\\)\n\n   Divide both sides by 2 to solve for \\(x\\):\n\n   \\[\n   x = 0\n   \\]\n\n2. \\(x - 4 = 0\\)\n\n   Add 4 to both sides to solve for \\(x\\):\n\n   \\[\n   x = 4\n   \\]\n\nSo, the solutions to the equation \\(2x^2 - 8x = 0\\) are \\(x = 0\\) and \\(x = 4\\).\n\n--------------------------------------------------------------------------------\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"ChatResult(chat_id=None, chat_history=[{'content': '$x^3=125$. What is x?', 'role': 'assistant', 'name': 'ai_user'}, {'content': 'To solve the equation \\\\(x^3 = 125\\\\), you need to find the value of \\\\(x\\\\) that makes this equation true. \\n\\nYou can solve for \\\\(x\\\\) by taking the cube root of both sides of the equation:\\n\\n\\\\[\\nx = \\\\sqrt[3]{125}\\n\\\\]\\n\\nSince \\\\(125\\\\) is \\\\(5^3\\\\), the cube root of \\\\(125\\\\) is \\\\(5\\\\). Thus,\\n\\n\\\\[\\nx = 5\\n\\\\]\\n\\nTherefore, the solution to the equation \\\\(x^3 = 125\\\\) is \\\\(x = 5\\\\).', 'role': 'user', 'name': 'assistant'}, {'content': 'Can you help me solve the equation \\\\(2x^2 - 8x = 0\\\\)?', 'role': 'assistant', 'name': 'ai_user'}, {'content': 'Certainly! To solve the equation \\\\(2x^2 - 8x = 0\\\\), you can start by factoring the expression on the left-hand side.\\n\\nFirst, factor out the greatest common factor, which is \\\\(2x\\\\):\\n\\n\\\\[\\n2x(x - 4) = 0\\n\\\\]\\n\\nNow, you have a product of two factors equal to zero. According to the zero product property, if the product of two factors is zero, at least one of the factors must be zero. So, you set each factor equal to zero and solve for \\\\(x\\\\):\\n\\n1. \\\\(2x = 0\\\\)\\n\\n   Divide both sides by 2 to solve for \\\\(x\\\\):\\n\\n   \\\\[\\n   x = 0\\n   \\\\]\\n\\n2. \\\\(x - 4 = 0\\\\)\\n\\n   Add 4 to both sides to solve for \\\\(x\\\\):\\n\\n   \\\\[\\n   x = 4\\n   \\\\]\\n\\nSo, the solutions to the equation \\\\(2x^2 - 8x = 0\\\\) are \\\\(x = 0\\\\) and \\\\(x = 4\\\\).', 'role': 'user', 'name': 'assistant'}], summary='Certainly! To solve the equation \\\\(2x^2 - 8x = 0\\\\), you can start by factoring the expression on the left-hand side.\\n\\nFirst, factor out the greatest common factor, which is \\\\(2x\\\\):\\n\\n\\\\[\\n2x(x - 4) = 0\\n\\\\]\\n\\nNow, you have a product of two factors equal to zero. According to the zero product property, if the product of two factors is zero, at least one of the factors must be zero. So, you set each factor equal to zero and solve for \\\\(x\\\\):\\n\\n1. \\\\(2x = 0\\\\)\\n\\n   Divide both sides by 2 to solve for \\\\(x\\\\):\\n\\n   \\\\[\\n   x = 0\\n   \\\\]\\n\\n2. \\\\(x - 4 = 0\\\\)\\n\\n   Add 4 to both sides to solve for \\\\(x\\\\):\\n\\n   \\\\[\\n   x = 4\\n   \\\\]\\n\\nSo, the solutions to the equation \\\\(2x^2 - 8x = 0\\\\) are \\\\(x = 0\\\\) and \\\\(x = 4\\\\).', cost={'usage_including_cached_inference': {'total_cost': 0.7649999999999999, 'gpt-4o-2024-08-06': {'cost': 0.7649999999999999, 'prompt_tokens': 390, 'completion_tokens': 375, 'total_tokens': 765}}, 'usage_excluding_cached_inference': {'total_cost': 0.7649999999999999, 'gpt-4o-2024-08-06': {'cost': 0.7649999999999999, 'prompt_tokens': 390, 'completion_tokens': 375, 'total_tokens': 765}}}, human_input=[])\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:"ai_user_proxy.print_usage_summary()\nprint()\nassistant.print_usage_summary()\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"Agent 'ai_user':\n----------------------------------------------------------------------------------------------------\nUsage summary excluding cached usage: \nTotal cost: 0.193\n* Model 'gpt-4o-2024-08-06': cost: 0.193, prompt_tokens: 172, completion_tokens: 21, total_tokens: 193\n\nAll completions are non-cached: the total cost with cached completions is the same as actual cost.\n----------------------------------------------------------------------------------------------------\n\nAgent 'assistant':\n----------------------------------------------------------------------------------------------------\nUsage summary excluding cached usage: \nTotal cost: 0.572\n* Model 'gpt-4o-2024-08-06': cost: 0.572, prompt_tokens: 218, completion_tokens: 354, total_tokens: 572\n\nAll completions are non-cached: the total cost with cached completions is the same as actual cost.\n----------------------------------------------------------------------------------------------------\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'user_proxy = UserProxyAgent(\n    name="user",\n    human_input_mode="NEVER",\n    max_consecutive_auto_reply=2,\n    code_execution_config=False,\n    default_auto_reply="That\'s all. Thank you.",\n)\nuser_proxy.print_usage_summary()\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"No cost incurred from agent 'user'.\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'print("Actual usage summary for assistant (excluding completion from cache):", assistant.get_actual_usage())\nprint("Total usage summary for assistant (including completion from cache):", assistant.get_total_usage())\n\nprint("Actual usage summary for ai_user_proxy:", ai_user_proxy.get_actual_usage())\nprint("Total usage summary for ai_user_proxy:", ai_user_proxy.get_total_usage())\n\nprint("Actual usage summary for user_proxy:", user_proxy.get_actual_usage())\nprint("Total usage summary for user_proxy:", user_proxy.get_total_usage())\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"Actual usage summary for assistant (excluding completion from cache): {'total_cost': 0.572, 'gpt-4o-2024-08-06': {'cost': 0.572, 'prompt_tokens': 218, 'completion_tokens': 354, 'total_tokens': 572}}\nTotal usage summary for assistant (including completion from cache): {'total_cost': 0.572, 'gpt-4o-2024-08-06': {'cost': 0.572, 'prompt_tokens': 218, 'completion_tokens': 354, 'total_tokens': 572}}\nActual usage summary for ai_user_proxy: {'total_cost': 0.193, 'gpt-4o-2024-08-06': {'cost': 0.193, 'prompt_tokens': 172, 'completion_tokens': 21, 'total_tokens': 193}}\nTotal usage summary for ai_user_proxy: {'total_cost': 0.193, 'gpt-4o-2024-08-06': {'cost': 0.193, 'prompt_tokens': 172, 'completion_tokens': 21, 'total_tokens': 193}}\nActual usage summary for user_proxy: None\nTotal usage summary for user_proxy: None\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'usage_summary = gather_usage_summary([assistant, ai_user_proxy, user_proxy])\nusage_summary["usage_including_cached_inference"]\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"{'total_cost': 0.7649999999999999,\n 'gpt-4o-2024-08-06': {'cost': 0.7649999999999999,\n  'prompt_tokens': 390,\n  'completion_tokens': 375,\n  'total_tokens': 765}}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var o=t(96540);const s={},a=o.createContext(s);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);