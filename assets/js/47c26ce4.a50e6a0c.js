"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[47629],{23959:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var o=i(85893),t=i(11151);const s={custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_surfer.ipynb",description:"Browse the web with agents.",source_notebook:"/notebook/agentchat_surfer.ipynb",tags:["web","nested chat","tool/function"],title:"WebSurferAgent"},r="WebSurferAgent",a={id:"notebooks/agentchat_surfer",title:"WebSurferAgent",description:"Browse the web with agents.",source:"@site/docs/notebooks/agentchat_surfer.mdx",sourceDirName:"notebooks",slug:"/notebooks/agentchat_surfer",permalink:"/ag2/docs/notebooks/agentchat_surfer",draft:!1,unlisted:!1,editUrl:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_surfer.ipynb",tags:[{label:"web",permalink:"/ag2/docs/tags/web"},{label:"nested chat",permalink:"/ag2/docs/tags/nested-chat"},{label:"tool/function",permalink:"/ag2/docs/tags/tool-function"}],version:"current",frontMatter:{custom_edit_url:"https://github.com/ag2ai/ag2/edit/main/notebook/agentchat_surfer.ipynb",description:"Browse the web with agents.",source_notebook:"/notebook/agentchat_surfer.ipynb",tags:["web","nested chat","tool/function"],title:"WebSurferAgent"},sidebar:"notebooksSidebar",previous:{title:"Interactive LLM Agent Dealing with Data Stream",permalink:"/ag2/docs/notebooks/agentchat_stream"},next:{title:"Swarm Orchestration with AG2",permalink:"/ag2/docs/notebooks/agentchat_swarm"}},c={},l=[{value:"Requirements",id:"requirements",level:2},{value:"Set your API Endpoint",id:"set-your-api-endpoint",level:2},{value:"Configure Bing",id:"configure-bing",level:2},{value:"Construct Agents",id:"construct-agents",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"websurferagent",children:"WebSurferAgent"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://colab.research.google.com/github/ag2ai/ag2/blob/main/notebook/agentchat_surfer.ipynb",children:(0,o.jsx)(n.img,{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,o.jsx)(n.a,{href:"https://github.com/ag2ai/ag2/blob/main/notebook/agentchat_surfer.ipynb",children:(0,o.jsx)(n.img,{src:"https://img.shields.io/badge/Open%20on%20GitHub-grey?logo=github",alt:"Open on GitHub"})})]}),"\n",(0,o.jsxs)(n.p,{children:["AutoGen provides a proof-of-concept WebSurferAgent that can command a\nsimple text-based browser (similar to\n",(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Lynx_(web_browser)",children:"Lynx"}),") to search the\nweb, visit pages, navigate within pages, download files, etc. The\nbrowsing is stateful, meaning that browsing history, viewport state, and\nother details are maintained throughout the conversation."]}),"\n",(0,o.jsxs)(n.p,{children:["This work was largely inspired by OpenAI\u2019s\n",(0,o.jsx)(n.a,{href:"https://openai.com/research/webgpt",children:"WebGPT"})," project from December 2021."]}),"\n",(0,o.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,o.jsxs)(n.p,{children:["AutoGen requires ",(0,o.jsx)(n.code,{children:"Python>=3.8"}),". To run this notebook example, please\ninstall AutoGen with the optional ",(0,o.jsx)(n.code,{children:"websurfer"})," dependencies:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'pip install "autogen[websurfer]"\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'%pip install --quiet "autogen[websurfer]"\n'})}),"\n",(0,o.jsx)(n.h2,{id:"set-your-api-endpoint",children:"Set your API Endpoint"}),"\n",(0,o.jsxs)(n.p,{children:["The\n",(0,o.jsx)(n.a,{href:"https://ag2ai.github.io/ag2/docs/reference/oai/openai_utils#config_list_from_json",children:(0,o.jsx)(n.code,{children:"config_list_from_json"})}),"\nfunction loads a list of configurations from an environment variable or\na json file."]}),"\n",(0,o.jsx)(n.p,{children:"It first looks for environment variable \u201cOAI_CONFIG_LIST\u201d which needs to\nbe a valid json string. If that variable is not found, it then looks for\na json file named \u201cOAI_CONFIG_LIST\u201d. It filters the configs by models\n(you can filter by other keys as well)."}),"\n",(0,o.jsx)(n.p,{children:"The WebSurferAgent uses a combination of models. GPT-4 and\nGPT-3.5-turbo-16k are recommended."}),"\n",(0,o.jsx)(n.p,{children:"Your json config should look something like the following:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "model": "gpt-4",\n        "api_key": "<your OpenAI API key here>"\n    },\n    {\n        "model": "gpt-3.5-turbo-16k",\n        "api_key": "<your OpenAI API key here>"\n    }\n]\n'})}),"\n",(0,o.jsx)(n.p,{children:"If you open this notebook in colab, you can upload your files by\nclicking the file icon on the left panel and then choose \u201cupload file\u201d\nicon."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import autogen  # noqa: E402\n\nllm_config = {\n    "timeout": 600,\n    "cache_seed": 44,  # change the seed for different trials\n    "config_list": autogen.config_list_from_json(\n        "OAI_CONFIG_LIST",\n        filter_dict={"model": ["gpt-4", "gpt-4-0613", "gpt-4-32k", "gpt-4-32k-0613", "gpt-4-1106-preview"]},\n    ),\n    "temperature": 0,\n}\n\nsummarizer_llm_config = {\n    "timeout": 600,\n    "cache_seed": 44,  # change the seed for different trials\n    "config_list": autogen.config_list_from_json(\n        "OAI_CONFIG_LIST",\n        filter_dict={"model": ["gpt-3.5-turbo-1106", "gpt-3.5-turbo-16k-0613", "gpt-3.5-turbo-16k"]},\n    ),\n    "temperature": 0,\n}\n'})}),"\n",(0,o.jsx)(n.h2,{id:"configure-bing",children:"Configure Bing"}),"\n",(0,o.jsxs)(n.p,{children:["For WebSurferAgent to be reasonably useful, it needs to be able to\nsearch the web \u2013 and that means it needs a Bing API key. You can read\nmore about how to get an API on the ",(0,o.jsx)(n.a,{href:"https://www.microsoft.com/en-us/bing/apis/bing-web-search-api",children:"Bing Web Search\nAPI"}),"\npage."]}),"\n",(0,o.jsxs)(n.p,{children:["Once you have your key, either set it as the ",(0,o.jsx)(n.code,{children:"BING_API_KEY"})," system\nenvironment variable, or simply input your key below."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'import os  # noqa: E402\n\nbing_api_key = os.environ["BING_API_KEY"]\n'})}),"\n",(0,o.jsx)(n.h3,{id:"construct-agents",children:"Construct Agents"}),"\n",(0,o.jsx)(n.p,{children:"We now create out WebSurferAgent, and a UserProxyAgent to surf the web."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'from autogen.agentchat.contrib.web_surfer import WebSurferAgent  # noqa: E402\n\nweb_surfer = WebSurferAgent(\n    "web_surfer",\n    llm_config=llm_config,\n    summarizer_llm_config=summarizer_llm_config,\n    browser_config={"viewport_size": 4096, "bing_api_key": bing_api_key},\n)\n\nuser_proxy = autogen.UserProxyAgent(\n    "user_proxy",\n    human_input_mode="NEVER",\n    code_execution_config=False,\n    default_auto_reply="",\n    is_termination_msg=lambda x: True,\n)\n'})}),"\n",(0,o.jsx)(n.p,{children:"Navigational search, scroll, answer questions - Search for Microsoft\u2019s\nwikipedia page, then naviagate to it - Scroll down - Answer questions\nabout the content"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'task1 = """Find Microsoft\'s Wikipedia page."""\nuser_proxy.initiate_chat(web_surfer, message=task1, clear_history=False)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:'user_proxy (to web_surfer):\n\nFind Microsoft\'s Wikipedia page.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING FUNCTION navigational_web_search...\nweb_surfer (to user_proxy):\n\nAddress: https://en.wikipedia.org/wiki/Microsoft\nTitle: Microsoft - Wikipedia\nViewport position: Showing page 1 of 64.\n=======================\n# Microsoft\n\nAmerican multinational technology corporation\n\nMicrosoft Corporation| [A square divided into four sub-squares, colored red-orange, green, yellow and blue (clockwise), with the company name appearing to its right](/wiki/File:Microsoft_logo_(2012).svg) |\n| Building 92 on the [Microsoft Redmond campus](/wiki/Microsoft_Redmond_campus "Microsoft Redmond campus") |\n| Type | [Public](/wiki/Public_company "Public company") |\n| [Traded as](/wiki/Ticker_symbol "Ticker symbol") | * [Nasdaq](/wiki/Nasdaq "Nasdaq"):\xa0[MSFT](https://www.nasdaq.com/market-activity/stocks/msft)\n* [Nasdaq-100](/wiki/Nasdaq-100 "Nasdaq-100") component\n* [DJIA](/wiki/Dow_Jones_Industrial_Average "Dow Jones Industrial Average") component\n* [S&P 100](/wiki/S%26P_100 "S&P 100") component\n* [S&P 500](/wiki/S%26P_500 "S&P 500") component\n |\n| [ISIN](/wiki/International_Securities_Identification_Number "International Securities Identification Number") | [US5949181045](https://isin.toolforge.org/?language=en&isin=US5949181045) |\n| Industry | [Information technology](/wiki/Information_technology "Information technology") |\n| Founded | April\xa04, 1975; 48 years ago\xa0(1975-04-04) in [Albuquerque, New Mexico](/wiki/Albuquerque,_New_Mexico "Albuquerque, New Mexico"), U.S. |\n| Founders | * [Bill Gates](/wiki/Bill_Gates "Bill Gates")\n* [Paul Allen](/wiki/Paul_Allen "Paul Allen")\n |\n| Headquarters | [One Microsoft Way](/wiki/Microsoft_campus "Microsoft campus")[Redmond, Washington](/wiki/Redmond,_Washington "Redmond, Washington"), U.S. |\n| Area served | Worldwide |\n| Key people | * [Satya Nadella](/wiki/Satya_Nadella "Satya Nadella")([Chairman](/wiki/Chairman "Chairman") & [CEO](/wiki/Chief_executive_officer "Chief executive officer"))\n* [Brad Smith](/wiki/Brad_Smith_(American_lawyer) "Brad Smith (American lawyer)")([Vice Chairman](/wiki/Vice-Chairman "Vice-Chairman") & [President](/wiki/President_(corporate_title) "President (corporate title)"))\n* [Bill Gates](/wiki/Bill_Gates "Bill Gates")([technical adviser](/wiki/Adviser "Adviser"))\n |\n| Products | * [Software development](/wiki/Software_development "Software development")\n* [Computer hardware](/wiki/Computer_hardware "Computer hardware")\n* [Consumer electronics](/wiki/Consumer_electronics "Consumer electronics")\n* [Social networking service](/wiki/Social_networking_service "Social networking service")\n* [Cloud computing](/wiki/Cloud_computing "Cloud computing")\n* [Video games](/wiki/Video_game_industry "Video game industry")\n* [Internet](/wiki/Internet "Internet")\n* [Corporate venture capital](/wiki/Corporate_venture_capital "Corporate venture capital")\n |\n| Brands | \n* [Windows](/wiki/Microsoft_Windows "Microsoft Windows")\n* [Microsoft 365](/wiki/Microsoft_365 "Microsoft 365")\n* [Skype](/wiki/Skype "Skype")\n* [Visual Studio](/wiki/Visual_Studio "Visual Studio")\n* [Xbox](/wiki/Xbox "Xbox")\n* [Dynamics](/wiki/Microsoft_Dynamics_365 "Microsoft Dynamics 365")\n* [Surface](/wiki/Microsoft_Surface "Microsoft Surface")\n\n |\n| Services | \n* [Edge](/wiki/Microsoft_Edge "Microsoft Edge")\n* [Azure](/wiki/Microsoft_Azure "Microsoft Azure")\n* [Bing](/wiki/Microsoft_Bing "Microsoft Bing")\n* [LinkedIn](/wiki/LinkedIn "LinkedIn")\n* [Yammer](/wiki/Yammer "Yammer")\n* [Microsoft 365](/wiki/Microsoft_365 "Microsoft 365")\n* [OneDrive](/wiki/OneDrive "OneDrive")\n* [Outlook](/wiki/Microsoft_Outlook "Microsoft Outlook")\n* [GitHub](/wiki/GitHub "GitHub")\n* [Microsoft Store](/wiki/Microsoft_Store_(digital) "Microsoft Store (digital)")\n* [Windows Update](/wiki/Windows_Update "Windows Update")\n* [Xbox Game Pass](/wiki/Xbox_Game_Pass "Xbox Game Pass")\n* [Xbox network](/wiki/Xbox_network "Xbox network")\n\n |\n| Revenue | Increase [US$](/wiki/United_States_dollar "United States dollar")211.9 billion (2023) |\n| [Operating income](/wiki/Earnings_before_interest_and_taxes "Earnings before interest and taxes") | Increase US$88.5 billion (2023) |\n| [Net income](/wiki/Net_income "Net income") | Increase US$73.4 billion (2023) |\n| [Total assets](/wiki/Asset "Asset") | Increase US$411.9 billion (2023) |\n| [Total equity](/wiki/Equity_(finance) "Equity \n\n--------------------------------------------------------------------------------\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'task2 = """Scroll down."""\nuser_proxy.initiate_chat(web_surfer, message=task2, clear_history=False)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:'user_proxy (to web_surfer):\n\nScroll down.\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING FUNCTION page_down...\nweb_surfer (to user_proxy):\n\nAddress: https://en.wikipedia.org/wiki/Microsoft\nTitle: Microsoft - Wikipedia\nViewport position: Showing page 2 of 64.\n=======================\n(finance)") | Increase US$206.2 billion (2023) |\n| Number of employees | 238,000 (2023) |\n| [Divisions](/wiki/Division_(business) "Division (business)") | \n* [Microsoft Engineering Groups](/wiki/Microsoft_engineering_groups "Microsoft engineering groups")\n* [Microsoft Digital Crimes Unit](/wiki/Microsoft_Digital_Crimes_Unit "Microsoft Digital Crimes Unit")\n* [Microsoft Press](/wiki/Microsoft_Press "Microsoft Press")\n* [Microsoft Japan](/wiki/Microsoft_Japan "Microsoft Japan")\n* [Microsoft Gaming](/wiki/Microsoft_Gaming "Microsoft Gaming")\n\n |\n| [Subsidiaries](/wiki/Subsidiary "Subsidiary") | \n* [GitHub](/wiki/GitHub "GitHub")\n* [LinkedIn](/wiki/LinkedIn "LinkedIn")\n* [Metaswitch](/wiki/Metaswitch "Metaswitch")\n* [Nuance Communications](/wiki/Nuance_Communications "Nuance Communications")\n* [RiskIQ](/wiki/RiskIQ "RiskIQ")\n* [Skype Technologies](/wiki/Skype_Technologies "Skype Technologies")\n* [OpenAI](/wiki/OpenAI "OpenAI") (49%)[[1]](#cite_note-1)\n* [Xamarin](/wiki/Xamarin "Xamarin")\n* [Xandr](/wiki/Xandr "Xandr")\n\n |\n|  |\n| [ASN](/wiki/Autonomous_System_Number "Autonomous System Number") | * [8075](https://bgp.tools/as/8075)\n |\n|  |\n| Website | [microsoft.com](https://www.microsoft.com/) |\n| **Footnotes\xa0/ references**Financials as of June\xa030, 2023[[update]](https://en.wikipedia.org/w/index.php?title=Microsoft&action=edit)[[2]](#cite_note-2) |\n\n|  |  |  |\n| --- | --- | --- |\n| \n\n|  |  |\n| --- | --- |\n| [Bill Gates in 2023](/wiki/File:Bill_Gates_2017_(cropped).jpg) | This article is part of a series about\n[Bill Gates](/wiki/Bill_Gates "Bill Gates") |\n\n |\n| * [Awards and honors](/wiki/Bill_Gates#Recognition "Bill Gates")\n* [Philanthropy](/wiki/Bill_Gates#Philanthropy "Bill Gates")\n* [Political positions](/wiki/Bill_Gates#Political_positions "Bill Gates")\n* [Public image](/wiki/Bill_Gates#Public_image "Bill Gates")\n* [Residence](/wiki/Bill_Gates%27s_house "Bill Gates\'s house")\n\n---\n\nCompanies* [Traf-O-Data](/wiki/Traf-O-Data "Traf-O-Data")\n* Microsoft ([criticism](/wiki/Criticism_of_Microsoft "Criticism of Microsoft"))\n* [BEN](/wiki/Branded_Entertainment_Network "Branded Entertainment Network")\n* [Cascade Investment](/wiki/Cascade_Investment "Cascade Investment")\n* [TerraPower](/wiki/TerraPower "TerraPower")\n* [Gates Ventures](/wiki/Gates_Ventures "Gates Ventures")\n\n---\n\nCharitable organizations* [Bill & Melinda Gates Foundation](/wiki/Bill_%26_Melinda_Gates_Foundation "Bill & Melinda Gates Foundation")\n* [Match for Africa](/wiki/Match_for_Africa "Match for Africa")\n* [The Giving Pledge](/wiki/The_Giving_Pledge "The Giving Pledge")\n* [OER Project](/wiki/OER_Project "OER Project")\n* [Breakthrough Energy](/wiki/Breakthrough_Energy "Breakthrough Energy")\n* [Mission Innovation](/wiki/Mission_Innovation "Mission Innovation")\n\n---\n\nWritings* "[An Open Letter to Hobbyists](/wiki/An_Open_Letter_to_Hobbyists "An Open Letter to Hobbyists")"\n* *[The Road Ahead](/wiki/The_Road_Ahead_(Gates_book) "The Road Ahead (Gates book)")*\n* *[Business @ the Speed of Thought](/wiki/Business_@_the_Speed_of_Thought "Business @ the Speed of Thought")*\n* *[How to Avoid a Climate Disaster](/wiki/How_to_Avoid_a_Climate_Disaster "How to Avoid a Climate Disaster")*\n* *[How to Prevent the Next Pandemic](/wiki/How_to_Prevent_the_Next_Pandemic "How to Prevent the Next Pandemic")*\n\n---\n\nRelated* [Bill Gates\' flower fly](/wiki/Bill_Gates%27_flower_fly "Bill Gates\' flower fly")\n* [Codex Leicester](/wiki/Codex_Leicester "Codex Leicester")\n* *[Lost on the Grand Banks](/wiki/Lost_on_the_Grand_Banks "Lost on the Grand Banks")*\n* [History of Microsoft](/wiki/History_of_Microsoft "History of Microsoft")\n* [Timeline of Microsoft](/wiki/Timeline_of_Microsoft "Timeline of Microsoft")\n* [Paul Allen](/wiki/Paul_Allen "Paul Allen")\n\n---\n\n |\n| * [v](/wiki/Template:Bill_Gates_series "Template:Bill Gates series")\n* [t](/wiki/Template_talk:Bill_Gates_series "Template talk:Bill Gates series")\n* [e](/wiki/Special:EditPage/Template:Bill_Gates_series "Special:EditPage/Template:Bill Gates series")\n |\n\n**Microsoft Corporation** is an American multinational [technology corporation](/wiki/Technology_company \n\n--------------------------------------------------------------------------------\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-python",children:'task3 = """Where was the first office location, and when did they move to Redmond?"""\nuser_proxy.initiate_chat(web_surfer, message=task3, clear_history=False)\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",children:"user_proxy (to web_surfer):\n\nWhere was the first office location, and when did they move to Redmond?\n\n--------------------------------------------------------------------------------\n\n>>>>>>>> USING AUTO REPLY...\n\n>>>>>>>> EXECUTING FUNCTION answer_from_page...\nweb_surfer (to user_proxy):\n\nMicrosoft's first office location was in Albuquerque, New Mexico, where it was founded on April 4, 1975. However, Microsoft later moved its headquarters to Redmond, Washington in January 1979. Since then, Redmond has been the main office location for Microsoft.\n\n--------------------------------------------------------------------------------\n"})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var o=i(67294);const t={},s=o.createContext(t);function r(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);