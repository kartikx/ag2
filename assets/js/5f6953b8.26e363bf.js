"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[59327],{8120:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(74848),r=t(28453);const i={title:"Enhanced Support for Non-OpenAI Models",authors:["marklysze","Hk669"],tags:["mistral ai","anthropic","together.ai","gemini"]},a=void 0,s={permalink:"/ag2/blog/2024/06/24/AltModels-Classes",source:"@site/blog/2024-06-24-AltModels-Classes/index.mdx",title:"Enhanced Support for Non-OpenAI Models",description:"agents",date:"2024-06-24T00:00:00.000Z",formattedDate:"June 24, 2024",tags:[{label:"mistral ai",permalink:"/ag2/blog/tags/mistral-ai"},{label:"anthropic",permalink:"/ag2/blog/tags/anthropic"},{label:"together.ai",permalink:"/ag2/blog/tags/together-ai"},{label:"gemini",permalink:"/ag2/blog/tags/gemini"}],readingTime:10.55,hasTruncateMarker:!1,authors:[{name:"Mark Sze",title:"AI Freelancer",url:"https://github.com/marklysze",imageURL:"https://github.com/marklysze.png",key:"marklysze"},{name:"Hrushikesh Dokala",title:"CS Undergraduate Based in India",url:"https://github.com/Hk669",imageURL:"https://github.com/Hk669.png",key:"Hk669"}],frontMatter:{title:"Enhanced Support for Non-OpenAI Models",authors:["marklysze","Hk669"],tags:["mistral ai","anthropic","together.ai","gemini"]},unlisted:!1,prevItem:{title:"AgentOps, the Best Tool for AutoGen Agent Observability",permalink:"/ag2/blog/2024/07/25/AgentOps"},nextItem:{title:"AgentEval: A Developer Tool to Assess Utility of LLM-powered Applications",permalink:"/ag2/blog/2024/06/21/AgentEval"}},c={authorsImageUrls:[void 0,void 0]},l=[{value:"TL;DR",id:"tldr",level:2},{value:"Benefits of choice",id:"benefits-of-choice",level:2},{value:"Mix and match",id:"mix-and-match",level:2},{value:"Capabilities",id:"capabilities",level:2},{value:"Tips",id:"tips",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"Installation",id:"installation",level:3},{value:"Configuration Setup",id:"configuration-setup",level:3},{value:"Usage",id:"usage",level:3},{value:"Construct Agents",id:"construct-agents",level:3},{value:"Start chat",id:"start-chat",level:3},{value:"Function Calls",id:"function-calls",level:2},{value:"More tips and tricks",id:"more-tips-and-tricks",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"agents",src:t(72650).A+"",width:"1536",height:"1536"})}),"\n",(0,o.jsx)(n.h2,{id:"tldr",children:"TL;DR"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"AutoGen has expanded integrations with a variety of cloud-based model providers beyond OpenAI."})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Leverage models and platforms from Gemini, Anthropic, Mistral AI, Together.AI, and Groq for your AutoGen agents."})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"Utilise models specifically for chat, language, image, and coding."})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.strong,{children:"LLM provider diversification can provide cost and resilience benefits."})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["In addition to the recently released AutoGen ",(0,o.jsx)(n.a,{href:"https://ai.google.dev/",children:"Google Gemini"})," client, new client classes for ",(0,o.jsx)(n.a,{href:"https://mistral.ai/",children:"Mistral AI"}),", ",(0,o.jsx)(n.a,{href:"https://www.anthropic.com/",children:"Anthropic"}),", ",(0,o.jsx)(n.a,{href:"https://www.together.ai/",children:"Together.AI"}),", and ",(0,o.jsx)(n.a,{href:"https://groq.com/",children:"Groq"})," enable you to utilize over 75 different large language models in your AutoGen agent workflow."]}),"\n",(0,o.jsx)(n.p,{children:"These new client classes tailor AutoGen's underlying messages to each provider's unique requirements and remove that complexity from the developer, who can then focus on building their AutoGen workflow."}),"\n",(0,o.jsxs)(n.p,{children:["Using them is as simple as installing the client-specific library and updating your LLM config with the relevant ",(0,o.jsx)(n.code,{children:"api_type"})," and ",(0,o.jsx)(n.code,{children:"model"}),". We'll demonstrate how to use them below."]}),"\n",(0,o.jsxs)(n.p,{children:["The community is continuing to enhance and build new client classes as cloud-based inference providers arrive. So, watch this space, and feel free to ",(0,o.jsx)(n.a,{href:"https://discord.gg/pAbnFJrkgZ",children:"discuss"})," or ",(0,o.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/pulls",children:"develop"})," another one."]}),"\n",(0,o.jsx)(n.h2,{id:"benefits-of-choice",children:"Benefits of choice"}),"\n",(0,o.jsx)(n.p,{children:"The need to use only the best models to overcome workflow-breaking LLM inconsistency has diminished considerably over the last 12 months."}),"\n",(0,o.jsx)(n.p,{children:"These new classes provide access to the very largest trillion-parameter models from OpenAI, Google, and Anthropic, continuing to provide the most consistent\nand competent agent experiences. However, it's worth trying smaller models from the likes of Meta, Mistral AI, Microsoft, Qwen, and many others. Perhaps they\nare capable enough for a task, or sub-task, or even better suited (such as a coding model)!"}),"\n",(0,o.jsx)(n.p,{children:"Using smaller models will have cost benefits, but they also allow you to test models that you could run locally, allowing you to determine if you can remove cloud inference costs\naltogether or even run an AutoGen workflow offline."}),"\n",(0,o.jsx)(n.p,{children:"On the topic of cost, these client classes also include provider-specific token cost calculations so you can monitor the cost impact of your workflows. With costs per million\ntokens as low as 10 cents (and some are even free!), cost savings can be noticeable."}),"\n",(0,o.jsx)(n.h2,{id:"mix-and-match",children:"Mix and match"}),"\n",(0,o.jsx)(n.p,{children:"How does Google's Gemini 1.5 Pro model stack up against Anthropic's Opus or Meta's Llama 3?"}),"\n",(0,o.jsx)(n.p,{children:"Now you have the ability to quickly change your agent configs and find out. If you want to run all three in the one workflow,\nAutoGen's ability to associate specific configurations to each agent means you can select the best LLM for each agent."}),"\n",(0,o.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,o.jsx)(n.p,{children:"The common requirements of text generation and function/tool calling are supported by these client classes."}),"\n",(0,o.jsxs)(n.p,{children:["Multi-modal support, such as for image/audio/video, is an area of active development. The ",(0,o.jsx)(n.a,{href:"https://ag2ai.github.io/ag2/docs/topics/non-openai-models/cloud-gemini",children:"Google Gemini"})," client class can be\nused to create a multimodal agent."]}),"\n",(0,o.jsx)(n.h2,{id:"tips",children:"Tips"}),"\n",(0,o.jsx)(n.p,{children:"Here are some tips when working with these client classes:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Most to least capable"})," - start with larger models and get your workflow working, then iteratively try smaller models."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Right model"})," - choose one that's suited to your task, whether it's coding, function calling, knowledge, or creative writing."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Agent names"})," - these cloud providers do not use the ",(0,o.jsx)(n.code,{children:"name"})," field on a message, so be sure to use your agent's name in their ",(0,o.jsx)(n.code,{children:"system_message"})," and ",(0,o.jsx)(n.code,{children:"description"})," fields, as well as instructing the LLM to 'act as' them. This is particularly important for \"auto\" speaker selection in group chats as we need to guide the LLM to choose the next agent based on a name, so tweak ",(0,o.jsx)(n.code,{children:"select_speaker_message_template"}),", ",(0,o.jsx)(n.code,{children:"select_speaker_prompt_template"}),", and ",(0,o.jsx)(n.code,{children:"select_speaker_auto_multiple_template"})," with more guidance."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Context length"})," - as your conversation gets longer, models need to support larger context lengths, be mindful of what the model supports and consider using ",(0,o.jsx)(n.a,{href:"https://ag2ai.github.io/ag2/docs/topics/handling_long_contexts/intro_to_transform_messages",children:"Transform Messages"})," to manage context size."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Provider parameters"})," - providers have parameters you can set such as temperature, maximum tokens, top-k, top-p, and safety. See each client class in AutoGen's ",(0,o.jsx)(n.a,{href:"https://ag2ai.github.io/ag2/docs/reference/oai/gemini",children:"API Reference"})," or ",(0,o.jsx)(n.a,{href:"https://ag2ai.github.io/ag2/docs/topics/non-openai-models/cloud-gemini",children:"documentation"})," for details."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Prompts"})," - prompt engineering is critical in guiding smaller LLMs to do what you need. ",(0,o.jsx)(n.a,{href:"https://ag2ai.github.io/ag2/docs/reference/agentchat/conversable_agent",children:"ConversableAgent"}),", ",(0,o.jsx)(n.a,{href:"https://ag2ai.github.io/ag2/docs/reference/agentchat/groupchat",children:"GroupChat"}),", ",(0,o.jsx)(n.a,{href:"https://ag2ai.github.io/ag2/docs/reference/agentchat/user_proxy_agent",children:"UserProxyAgent"}),", and ",(0,o.jsx)(n.a,{href:"https://ag2ai.github.io/ag2/docs/reference/agentchat/assistant_agent",children:"AssistantAgent"})," all have customizable prompt attributes that you can tailor. Here are some prompting tips from ",(0,o.jsx)(n.a,{href:"https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview",children:"Anthropic"}),"(",(0,o.jsx)(n.a,{href:"https://docs.anthropic.com/en/prompt-library/library",children:"+Library"}),"), ",(0,o.jsx)(n.a,{href:"https://docs.mistral.ai/guides/prompting_capabilities/",children:"Mistral AI"}),", ",(0,o.jsx)(n.a,{href:"https://docs.together.ai/docs/examples",children:"Together.AI"}),", and ",(0,o.jsx)(n.a,{href:"https://llama.meta.com/docs/how-to-guides/prompting/",children:"Meta"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Help!"})," - reach out on the AutoGen ",(0,o.jsx)(n.a,{href:"https://discord.gg/pAbnFJrkgZ",children:"Discord"})," or ",(0,o.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/issues",children:"log an issue"})," if you need help with or can help improve these client classes."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Now it's time to try them out."}),"\n",(0,o.jsx)(n.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,o.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,o.jsx)(n.p,{children:"Install the appropriate client based on the model you wish to use."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:'pip install autogen["mistral"] # for Mistral AI client\npip install autogen["anthropic"] # for Anthropic client\npip install autogen["together"] # for Together.AI client\npip install autogen["groq"] # for Groq client\n'})}),"\n",(0,o.jsx)(n.h3,{id:"configuration-setup",children:"Configuration Setup"}),"\n",(0,o.jsxs)(n.p,{children:["Add your model configurations to the ",(0,o.jsx)(n.code,{children:"OAI_CONFIG_LIST"}),". Ensure you specify the ",(0,o.jsx)(n.code,{children:"api_type"})," to initialize the respective client (Anthropic, Mistral, or Together)."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:'[\n    {\n        "model": "your anthropic model name",\n        "api_key": "your Anthropic api_key",\n        "api_type": "anthropic"\n    },\n    {\n        "model": "your mistral model name",\n        "api_key": "your Mistral AI api_key",\n        "api_type": "mistral"\n    },\n    {\n        "model": "your together.ai model name",\n        "api_key": "your Together.AI api_key",\n        "api_type": "together"\n    },\n    {\n        "model": "your groq model name",\n        "api_key": "your Groq api_key",\n        "api_type": "groq"\n    }\n]\n'})}),"\n",(0,o.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"[config_list_from_json](https://ag2ai.github.io/ag2/docs/reference/oai/openai_utils/#config_list_from_json)"})," function loads a list of configurations from an environment variable or a json file."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:'import autogen\nfrom autogen import AssistantAgent, UserProxyAgent\n\nconfig_list = autogen.config_list_from_json(\n    "OAI_CONFIG_LIST"\n)\n'})}),"\n",(0,o.jsx)(n.h3,{id:"construct-agents",children:"Construct Agents"}),"\n",(0,o.jsx)(n.p,{children:"Construct a simple conversation between a User proxy and an Assistant agent"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:'user_proxy =  UserProxyAgent(\n    name="User_proxy",\n    code_execution_config={\n        "last_n_messages": 2,\n        "work_dir": "groupchat",\n        "use_docker": False, # Please set use_docker = True if docker is available to run the generated code. Using docker is safer than running the generated code directly.\n    },\n    human_input_mode="ALWAYS",\n    is_termination_msg=lambda msg: not msg["content"]\n)\n\nassistant = AssistantAgent(\n    name="assistant",\n    llm_config = {"config_list": config_list}\n)\n'})}),"\n",(0,o.jsx)(n.h3,{id:"start-chat",children:"Start chat"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:'\nuser_proxy.intiate_chat(assistant, message="Write python code to print Hello World!")\n\n'})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsxs)(n.strong,{children:["NOTE: To integrate this setup into GroupChat, follow the ",(0,o.jsx)(n.a,{href:"https://ag2ai.github.io/ag2/docs/notebooks/agentchat_groupchat",children:"tutorial"})," with the same config as above."]})}),"\n",(0,o.jsx)(n.h2,{id:"function-calls",children:"Function Calls"}),"\n",(0,o.jsx)(n.p,{children:"Now, let's look at how Anthropic's Sonnet 3.5 is able to suggest multiple function calls in a single response."}),"\n",(0,o.jsx)(n.p,{children:"This example is a simple travel agent setup with an agent for function calling and a user proxy agent for executing the functions."}),"\n",(0,o.jsxs)(n.p,{children:["One thing you'll note here is Anthropic's models are more verbose than OpenAI's and will typically provide chain-of-thought or general verbiage when replying. Therefore we provide more explicit instructions to ",(0,o.jsx)(n.code,{children:"functionbot"})," to not reply with more than necessary. Even so, it can't always help itself!"]}),"\n",(0,o.jsx)(n.p,{children:"Let's start with setting up our configuration and agents."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:'import os\nimport autogen\nimport json\nfrom typing import Literal\nfrom typing_extensions import Annotated\n\n# Anthropic configuration, using api_type=\'anthropic\'\nanthropic_llm_config = {\n    "config_list":\n    [\n        {\n            "api_type": "anthropic",\n            "model": "claude-3-5-sonnet-20240620",\n            "api_key": os.getenv("ANTHROPIC_API_KEY"),\n            "cache_seed": None\n        }\n    ]\n}\n\n# Our functionbot, who will be assigned two functions and\n# given directions to use them.\nfunctionbot = autogen.AssistantAgent(\n    name="functionbot",\n    system_message="For currency exchange tasks, only use "\n    "the functions you have been provided with. Do not "\n    "reply with helpful tips. Once you\'ve recommended functions "\n    "reply with \'TERMINATE\'.",\n    is_termination_msg=lambda x: x.get("content", "") and (x.get("content", "").rstrip().endswith("TERMINATE") or x.get("content", "") == ""),\n    llm_config=anthropic_llm_config,\n)\n\n# Our user proxy agent, who will be used to manage the customer\n# request and conversation with the functionbot, terminating\n# when we have the information we need.\nuser_proxy = autogen.UserProxyAgent(\n    name="user_proxy",\n    system_message="You are a travel agent that provides "\n        "specific information to your customers. Get the "\n        "information you need and provide a great summary "\n        "so your customer can have a great trip. If you "\n        "have the information you need, simply reply with "\n        "\'TERMINATE\'.",\n    is_termination_msg=lambda x: x.get("content", "") and (x.get("content", "").rstrip().endswith("TERMINATE") or x.get("content", "") == ""),\n    human_input_mode="NEVER",\n    max_consecutive_auto_reply=10,\n)\n'})}),"\n",(0,o.jsx)(n.p,{children:"We define the two functions."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:'CurrencySymbol = Literal["USD", "EUR"]\n\ndef exchange_rate(base_currency: CurrencySymbol, quote_currency: CurrencySymbol) -> float:\n    if base_currency == quote_currency:\n        return 1.0\n    elif base_currency == "USD" and quote_currency == "EUR":\n        return 1 / 1.1\n    elif base_currency == "EUR" and quote_currency == "USD":\n        return 1.1\n    else:\n        raise ValueError(f"Unknown currencies {base_currency}, {quote_currency}")\n\ndef get_current_weather(location, unit="fahrenheit"):\n    """Get the weather for some location"""\n    if "chicago" in location.lower():\n        return json.dumps({"location": "Chicago", "temperature": "13", "unit": unit})\n    elif "san francisco" in location.lower():\n        return json.dumps({"location": "San Francisco", "temperature": "55", "unit": unit})\n    elif "new york" in location.lower():\n        return json.dumps({"location": "New York", "temperature": "11", "unit": unit})\n    else:\n        return json.dumps({"location": location, "temperature": "unknown"})\n'})}),"\n",(0,o.jsxs)(n.p,{children:["And then associate them with the ",(0,o.jsx)(n.code,{children:"user_proxy"})," for execution and ",(0,o.jsx)(n.code,{children:"functionbot"})," for the LLM to consider using them."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:'@user_proxy.register_for_execution()\n@functionbot.register_for_llm(description="Currency exchange calculator.")\ndef currency_calculator(\n    base_amount: Annotated[float, "Amount of currency in base_currency"],\n    base_currency: Annotated[CurrencySymbol, "Base currency"] = "USD",\n    quote_currency: Annotated[CurrencySymbol, "Quote currency"] = "EUR",\n) -> str:\n    quote_amount = exchange_rate(base_currency, quote_currency) * base_amount\n    return f"{quote_amount} {quote_currency}"\n\n@user_proxy.register_for_execution()\n@functionbot.register_for_llm(description="Weather forecast for US cities.")\ndef weather_forecast(\n    location: Annotated[str, "City name"],\n) -> str:\n    weather_details = get_current_weather(location=location)\n    weather = json.loads(weather_details)\n    return f"{weather[\'location\']} will be {weather[\'temperature\']} degrees {weather[\'unit\']}"\n'})}),"\n",(0,o.jsx)(n.p,{children:"Finally, we start the conversation with a request for help from our customer on their upcoming trip to New York and the Euro they would like exchanged to USD."}),"\n",(0,o.jsxs)(n.p,{children:["Importantly, we're also using Anthropic's Sonnet to provide a summary through the ",(0,o.jsx)(n.code,{children:"summary_method"}),". Using ",(0,o.jsx)(n.code,{children:"summary_prompt"}),", we guide Sonnet to give us an email output."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:'# start the conversation\nres = user_proxy.initiate_chat(\n    functionbot,\n    message="My customer wants to travel to New York and "\n        "they need to exchange 830 EUR to USD. Can you please "\n        "provide them with a summary of the weather and "\n        "exchanged currently in USD?",\n    summary_method="reflection_with_llm",\n    summary_args={\n        "summary_prompt": """Summarize the conversation by\n        providing an email response with the travel information\n        for the customer addressed as \'Dear Customer\'. Do not\n        provide any additional conversation or apologise,\n        just provide the relevant information and the email."""\n    },\n)\n'})}),"\n",(0,o.jsx)(n.p,{children:"After the conversation has finished, we'll print out the summary."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-py",children:"print(f\"Here's the LLM summary of the conversation:\\n\\n{res.summary['content']}\")\n"})}),"\n",(0,o.jsx)(n.p,{children:"Here's the resulting output."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:'user_proxy (to functionbot):\n\nMy customer wants to travel to New York and they need to exchange 830 EUR\nto USD. Can you please provide them with a summary of the weather and\nexchanged currently in USD?\n\n--------------------------------------------------------------------------------\nfunctionbot (to user_proxy):\n\nCertainly! I\'d be happy to help your customer with information about the\nweather in New York and the currency exchange from EUR to USD. Let\'s use\nthe available tools to get this information.\n\n***** Suggested tool call (toolu_016wBUKVX2TToBaMqmiGvhav): weather_forecast *****\nArguments:\n{"location": "New York"}\n**********************************************************************************\n***** Suggested tool call (toolu_01Nxjeew2BspfKdZ85on3XkP): currency_calculator *****\nArguments:\n{"base_amount": 830, "base_currency": "EUR", "quote_currency": "USD"}\n*************************************************************************************\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> EXECUTING FUNCTION weather_forecast...\n\n>>>>>>>> EXECUTING FUNCTION currency_calculator...\nuser_proxy (to functionbot):\n\nuser_proxy (to functionbot):\n\n***** Response from calling tool (toolu_016wBUKVX2TToBaMqmiGvhav) *****\nNew York will be 11 degrees fahrenheit\n***********************************************************************\n\n--------------------------------------------------------------------------------\nuser_proxy (to functionbot):\n\n***** Response from calling tool (toolu_01Nxjeew2BspfKdZ85on3XkP) *****\n913.0000000000001 USD\n***********************************************************************\n\n--------------------------------------------------------------------------------\nfunctionbot (to user_proxy):\n\nThank you for providing the information. I can now give your customer a\nsummary of the weather in New York and the currency exchange from EUR to USD.\n\nWeather in New York:\nThe current forecast for New York indicates that it will be 11 degrees\nFahrenheit. This is quite cold, so your customer should be prepared with\nwarm clothing for their trip.\n\nCurrency Exchange:\nFor 830 EUR, your customer will receive approximately 913 USD. This is based\non the current exchange rate provided by our currency calculator.\n\nTo summarize:\n1. Weather in New York: 11\xb0F (very cold)\n2. Currency exchange: 830 EUR = 913 USD\n\nYour customer should pack warm clothes for the cold weather in New York and\ncan expect to have about 913 USD for their trip after exchanging 830 EUR.\n\nTERMINATE\n\n--------------------------------------------------------------------------------\nHere\'s the LLM summary of the conversation:\n\nCertainly. I\'ll provide an email response to the customer with the travel\ninformation as requested.\n\nDear Customer,\n\nWe are pleased to provide you with the following information for your\nupcoming trip to New York:\n\nWeather Forecast:\nThe current forecast for New York indicates a temperature of 11 degrees\nFahrenheit. Please be prepared for very cold weather and pack appropriate\nwarm clothing.\n\nCurrency Exchange:\nWe have calculated the currency exchange for you. Your 830 EUR will be\nequivalent to approximately 913 USD at the current exchange rate.\n\nWe hope this information helps you prepare for your trip to New York. Have\na safe and enjoyable journey!\n\nBest regards,\nTravel Assistance Team\n'})}),"\n",(0,o.jsx)(n.p,{children:"So we can see how Anthropic's Sonnet is able to suggest multiple tools in a single response, with AutoGen executing them both and providing the results back to Sonnet. Sonnet then finishes with a nice email summary that can be the basis for continued real-life conversation with the customer."}),"\n",(0,o.jsx)(n.h2,{id:"more-tips-and-tricks",children:"More tips and tricks"}),"\n",(0,o.jsxs)(n.p,{children:["For an interesting chess game between Anthropic's Sonnet and Mistral's Mixtral, we've put together a sample notebook that highlights some of the tips and tricks for working with non-OpenAI LLMs. ",(0,o.jsx)(n.a,{href:"https://ag2ai.github.io/ag2/docs/notebooks/agentchat_nested_chats_chess_altmodels",children:"See the notebook here"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},72650:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/agentstogether-6b3c3c2c1e48ca43fe619ca0959f319b.jpeg"},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>s});var o=t(96540);const r={},i=o.createContext(r);function a(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);