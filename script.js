document.addEventListener('DOMContentLoaded', () => {
    // Your existing tools data with the 'isPaid' property
    const tools = [
        {
            name: "ChatGPT",
            description: "An advanced AI language model for conversations and content generation.",
            category: "writing",
            isTopTool: true,
            isPaid: true,
            logo: "images/chatgpt-logo.png",
            website: "https://chat.openai.com/"
        },
        {
            name: "Midjourney",
            description: "AI art generator that creates stunning images from text prompts.",
            category: "design",
            isTopTool: true,
            isPaid: true,
            logo: "images/midjourney-logo.png",
            website: "https://www.midjourney.com/"
        },
        {
            name: "GitHub Copilot",
            description: "AI pair programmer that suggests code and functions in real-time.",
            category: "coding",
            isTopTool: true,
            isPaid: true,
            logo: "images/github-copilot-logo.png",
            website: "https://github.com/features/copilot"
        },
        {
            name: "Grammarly",
            description: "AI writing assistant that helps with grammar, spelling, and style.",
            category: "writing",
            isTopTool: false,
            isPaid: false,
            logo: "images/grammarly-logo.png",
            website: "https://www.grammarly.com/"
        },
        {
            name: "Canva AI Magic Studio",
            description: "Suite of AI tools for design, image generation, and text editing within Canva.",
            category: "design",
            isTopTool: false,
            isPaid: false,
            logo: "images/canva-ai-logo.png",
            website: "https://www.canva.com/ai-magic-studio/"
        },
        {
            name: "DALL-E 3",
            description: "Generates realistic images and art from natural language descriptions.",
            category: "design",
            isTopTool: false,
            isPaid: true,
            logo: "images/dalle-3-logo.png",
            website: "https://openai.com/dall-e-3"
        },
        {
            name: "Bard (Google Gemini)",
            description: "Google's conversational AI, good for creative text formats and information.",
            category: "writing",
            isTopTool: false,
            isPaid: false,
            logo: "images/bard-logo.png",
            website: "https://gemini.google.com/"
        },
        {
            name: "Tabnine",
            description: "AI code completion tool that speeds up development across languages.",
            category: "coding",
            isTopTool: false,
            isPaid: false,
            logo: "images/tabnine-logo.png",
            website: "https://www.tabnine.com/"
        },
        {
            name: "Jasper AI",
            description: "AI content platform for generating marketing copy, blog posts, and more.",
            category: "writing",
            isTopTool: true,
            isPaid: true,
            logo: "images/jasper-logo.png",
            website: "https://www.jasper.ai/"
        },
        {
            name: "AdCreative.ai",
            description: "Generates high-performing ad creatives and texts in seconds.",
            category: "marketing",
            isTopTool: false,
            isPaid: true,
            logo: "images/adcreative-logo.png",
            website: "https://www.adcreative.ai/"
        },
        {
            name: "Miro AI",
            description: "AI assistant for brainstorming, mind mapping, and diagramming on Miro boards.",
            category: "productivity",
            isTopTool: false,
            isPaid: false,
            logo: "images/miro-ai-logo.png",
            website: "https://miro.com/ai/"
        },
        {
            name: "Writesonic",
            description: "AI writer that generates high-quality articles, ads, landing pages, and more.",
            category: "writing",
            isTopTool: false,
            isPaid: false,
            logo: "images/writesonic-logo.png",
            website: "https://writesonic.com/"
        },
        {
            name: "Claude Opus 4",
            description: "Anthropic’s most powerful AI model, capable of extended reasoning and coding tasks.",
            category: "writing",
            isTopTool: true,
            isPaid: true,
            logo: "images/claude-opus4-logo.png",
            website: "https://www.anthropic.com/"
        },
        {
            name: "Perplexity AI",
            description: "An AI-powered search engine that provides concise answers with source citations.",
            category: "productivity",
            isTopTool: true,
            isPaid: false,
            logo: "images/perplexity-logo.png",
            website: "https://www.perplexity.ai/"
        },
        {
            name: "You.com",
            description: "A privacy-focused AI assistant and search engine with real-time information retrieval.",
            category: "productivity",
            isTopTool: false,
            isPaid: false,
            logo: "images/youcom-logo.png",
            website: "https://you.com/"
        },
        {
            name: "Google Veo 3",
            description: "Generates realistic videos from text prompts, including synchronized audio.",
            category: "design",
            isTopTool: true,
            isPaid: true,
            logo: "images/veo3-logo.png",
            website: "https://ai.google/"
        },
        {
            name: "Runway ML",
            description: "Offers AI tools for video editing, image generation, and creative workflows.",
            category: "design",
            isTopTool: false,
            isPaid: false,
            logo: "images/runwayml-logo.png",
            website: "https://runwayml.com/"
        },
        {
            name: "Stable Diffusion",
            description: "An open-source model for generating images from text prompts.",
            category: "design",
            isTopTool: false,
            isPaid: false,
            logo: "images/stable-diffusion-logo.png",
            website: "https://stability.ai/"
        },
        {
            name: "Replit AI",
            description: "An AI-powered coding environment that assists with code generation and debugging.",
            category: "coding",
            isTopTool: false,
            isPaid: false,
            logo: "images/replit-logo.png",
            website: "https://replit.com/"
        },
        {
            name: "OpenAI Codex",
            description: "Translates natural language into code, powering tools like GitHub Copilot.",
            category: "coding",
            isTopTool: false,
            isPaid: true,
            logo: "images/openai-codex-logo.png",
            website: "https://openai.com/"
        },
        {
            name: "ElevenLabs",
            description: "Provides lifelike text-to-speech synthesis with emotional intonation.",
            category: "productivity",
            isTopTool: false,
            isPaid: false,
            logo: "images/elevenlabs-logo.png",
            Website: "https://elevenlabs.io/"
        },
        {
            name: "Zapier AI",
            description: "Automates workflows by connecting various apps and services using AI.",
            category: "productivity",
            isTopTool: false,
            isPaid: true,
            logo: "images/zapier-logo.png",
            website: "https://zapier.com/"
        },
        {
            name: "NotebookLM",
            description: "An AI-powered note-taking app that helps organize and summarize information.",
            category: "productivity",
            isTopTool: false,
            isPaid: false,
            logo: "images/notebooklm-logo.png",
            website: "https://notebooklm.google/"
        },
        {
    name: "PlayHT",
    description: "Realistic AI voice synthesis with API access for TTS and voice cloning.",
    category: "productivity",
    isTopTool: false,
    isPaid: true,
    logo: "images/playht-logo.png",
    website: "https://play.ht/"
},
{
    name: "Amazon Polly",
    description: "Converts text into lifelike speech using deep learning.",
    category: "productivity",
    isTopTool: false,
    isPaid: true,
    logo: "images/amazon-polly-logo.png",
    website: "https://aws.amazon.com/polly/"
},

{
    name: "OpenAI API",
    description: "API access to models like GPT-4 and DALL·E for text, chat, code, and image tasks.",
    category: "writing",
    isTopTool: true,
    isPaid: true,
    logo: "images/openai-logo.png",
    website: "https://platform.openai.com/"
},
{
    name: "Anthropic Claude API",
    description: "Claude API for safe and helpful AI assistants with advanced reasoning.",
    category: "writing",
    isTopTool: true,
    isPaid: true,
    logo: "images/claude-logo.png",
    website: "https://www.anthropic.com/"
},

{
    name: "Replicate",
    description: "Run ML models (e.g., Stable Diffusion) via API with scalable cloud inference.",
    category: "design",
    isTopTool: false,
    isPaid: true,
    logo: "images/replicate-logo.png",
    website: "https://replicate.com/"
},
{
    name: "RunDiffusion",
    description: "Stable Diffusion and other art models with API integration.",
    category: "design",
    isTopTool: false,
    isPaid: true,
    logo: "images/rundiffusion-logo.png",
    website: "https://rundiffusion.com/"
},

{
    name: "Copy.ai API",
    description: "Generates marketing copy and content with API support for automation.",
    category: "marketing",
    isTopTool: false,
    isPaid: true,
    logo: "images/copyai-logo.png",
    website: "https://www.copy.ai/"
},
{
    name: "INK API",
    description: "AI-powered content optimization for SEO and copywriting.",
    category: "marketing",
    isTopTool: false,
    isPaid: true,
    logo: "images/ink-logo.png",
    website: "https://inkforall.com/"
},
{
    name: "Hugging Face Inference API",
    description: "Wide range of open-source models for NLP, vision, and audio.",
    category: "coding",
    isTopTool: true,
    isPaid: false,
    logo: "images/huggingface-logo.png",
    website: "https://huggingface.co/inference-api"
},
{
    name: "DeepCode by Snyk",
    description: "AI-powered code review and bug detection tool.",
    category: "coding",
    isTopTool: false,
    isPaid: true,
    logo: "images/deepcode-logo.png",
    website: "https://www.snyk.io/deepcode/"
},
{
    name: "Pinokio AI",
    description: "Pinokio is a browser that can install, run, and control AI apps and scripts with one click.",
    category: "productivity",
    isTopTool: false,
    isPaid: false,
    logo: "images/pinokio-logo.png",
    website: "https://pinokio.computer/"
},
{
    name: "Napkin",
    description: "Napkin is an AI-powered note-taking app designed to capture and connect your thoughts effortlessly.",
    category: "productivity",
    isTopTool: false,
    isPaid: true,
    logo: "images/napkin-logo.png",
    website: "https://www.napkin.one/"
},
{
    name: "NotebookLM",
    description: "NotebookLM is an AI-powered research assistant by Google that helps you summarize and ask questions about your uploaded documents.",
    category: "productivity",
    isTopTool: true,
    isPaid: false,
    logo: "images/notebooklm-logo.png",
    website: "https://notebooklm.google/"
},
{
    name: "Hotfrom AI",
    description: "Hotfrom is a modern directory that helps you discover trending AI tools, updated daily with the latest innovations.",
    category: "ai directory",
    isTopTool: false,
    isPaid: false,
    logo: "images/hotfrom-logo.png",
    website: "https://hotfrom.com/"
},

  {
    "name": "InVideo AI",
    "description": "A leading AI video creation platform that generates stunning videos from text prompts, with an inbuilt editor for customization and animation capabilities.",
    "category": "design",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/invideo-ai-logo.png",
    "website": "https://invideo.io/ai/"
  },
  {
    "name": "HeyGen",
    "description": "AI platform for creating professional videos using digital avatars, voice cloning, and automatic content translation for various purposes like education and marketing.",
    "category": "design",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/heygen-logo.png",
    "website": "https://www.heygen.com/"
  },
  {
    "name": "Synthesia",
    "description": "AI platform that transforms text into professional videos featuring digital presenters, with a wide range of AI avatars and language support.",
    "category": "design",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/synthesia-logo.png",
    "website": "https://www.synthesia.io/"
  },
  {
    "name": "Colossyan",
    "description": "AI platform specifically designed for creating training videos, offering AI presenters, script assistance, built-in quizzes, and localization features.",
    "category": "design",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/colossyan-logo.png",
    "website": "https://www.colossyan.com/"
  },
  {
    "name": "UXPin Merge (AI Component Creator)",
    "description": "Integrates live, code-based components into the design environment, with an AI Component Creator to speed up UI design and iteration.",
    "category": "design",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/uxpin-merge-logo.png",
    "website": "https://www.uxpin.com/merge"
  },
  {
    "name": "Lummi AI",
    "description": "AI-powered tool for quickly accessing high-quality images without traditional stock photo searches.",
    "category": "design",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/lummi-ai-logo.png",
    "website": "https://www.lummi.ai/"
  },
  {
    "name": "PNG Maker AI",
    "description": "Specializes in accurately removing backgrounds from images to create transparent PNGs.",
    "category": "design",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/png-maker-ai-logo.png",
    "website": "https://pngmaker.ai/"
  },
  {
    "name": "Color Magic App",
    "description": "Uses AI to generate harmonious color palettes based on specific themes or emotions.",
    "category": "design",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/color-magic-logo.png",
    "website": "https://colormagic.app/"
  },
  {
    "name": "Octopus AI",
    "description": "A research assistant that automates user research by analyzing data, generating insights, and creating visual reports.",
    "category": "productivity",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/octopus-ai-logo.png",
    "website": "https://octopus.ai/"
  },
  {
    "name": "Chart AI",
    "description": "Generates data visualizations based on raw data or natural language descriptions, supporting a wide range of chart types.",
    "category": "productivity",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/chart-ai-logo.png",
    "website": "https://chart.ai/"
  },
  {
    "name": "Motion",
    "description": "An AI-powered scheduling and task prioritization tool that analyzes workloads and deadlines to suggest optimal sequences.",
    "category": "productivity",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/motion-logo.png",
    "website": "https://www.usemotion.com/"
  },
  {
    "name": "Dynamic Yield",
    "description": "AI personalization engine that analyzes customer data to deliver tailored experiences, recommendations, and communications across various channels.",
    "category": "marketing",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/dynamic-yield-logo.png",
    "website": "https://www.dynamicyield.com/"
  },
  {
    "name": "Zendesk (with predictive service capabilities)",
    "description": "Customer service platform with AI tools that anticipate customer needs and proactively address potential issues.",
    "category": "productivity",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/zendesk-logo.png",
    "website": "https://www.zendesk.com/"
  },
  {
    "name": "Braze",
    "description": "Customer journey orchestration platform that uses AI to guide customers through optimized experiences based on their needs and behaviors.",
    "category": "marketing",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/braze-logo.png",
    "website": "https://www.braze.com/"
  },
  {
    "name": "Grok AI",
    "description": "An AI assistant by xAI, built for deep reasoning and live web search, integrated with X (formerly Twitter) and Grok Studio.",
    "category": "writing",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/grok-ai-logo.png",
    "website": "https://grok.x.ai/"
  },
  {
    "name": "Adobe Firefly",
    "description": "Adobe's generative AI models for creating images and creative assets, seamlessly integrated with Creative Cloud applications.",
    "category": "design",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/adobe-firefly-logo.png",
    "website": "https://www.adobe.com/sensei/generative-ai/firefly.html"
  },
  {
    "name": "DeepSeek (API)",
    "description": "An AI company providing foundation models and APIs for various AI applications, including large language models.",
    "category": "coding",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/deepseek-logo.png",
    "website": "https://www.deepseek.com/"
  },
  {
    "name": "Meta AI",
    "description": "Meta's integrated AI assistant for generating images and short animations, with future plans for broader integration across Facebook, Instagram, and WhatsApp.",
    "category": "writing",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/meta-ai-logo.png",
    "website": "https://ai.meta.com/"
  },
  {
    "name": "Dante AI",
    "description": "Personalized AI chatbots that can be trained using your own data and easily deployed on websites without coding.",
    "category": "productivity",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/dante-ai-logo.png",
    "website": "https://dante.ai/"
  },
  {
    "name": "TL;DV",
    "description": "AI meeting assistant for transcription, summarization, and clip creation from video meetings.",
    "category": "productivity",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/tldv-logo.png",
    "website": "https://tldv.io/"
  },
  {
    "name": "Fireflies.ai",
    "description": "AI assistant that records, transcribes, and summarizes meetings, integrating with popular conferencing apps.",
    "category": "productivity",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/fireflies-ai-logo.png",
    "website": "https://fireflies.ai/"
  },
  {
    "name": "Rewind AI",
    "description": "A personal AI assistant that records everything you see, hear, or say on your Mac, allowing you to instantly find information or revisit past content.",
    "category": "productivity",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/rewind-ai-logo.png",
    "website": "https://www.rewind.ai/"
  },
  {
    "name": "Suno",
    "description": "AI model that generates music, including lyrics and instrumentals, from text prompts.",
    "category": "music",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/suno-logo.png",
    "website": "https://www.suno.ai/"
  },
  {
    "name": "ElevenLabs (Sound Effect Generator)",
    "description": "Beyond text-to-speech, ElevenLabs offers a sound effect generator for various creative needs.",
    "category": "productivity",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/elevenlabs-logo.png",
    "website": "https://elevenlabs.io/"
  },
  {
    "name": "Kilo Code",
    "description": "Open-source AI coding assistant for VS Code, enhancing coding efficiency and automation.",
    "category": "coding",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/kilo-code-logo.png",
    "website": "https://github.com/KiloCode" 
  },
  {
    "name": "Trae",
    "description": "AI-powered IDE for enhanced developer collaboration and efficiency.",
    "category": "coding",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/trae-logo.png",
    "website": "https://trae.ai/" 
  },
  {
    "name": "Jazzberry",
    "description": "AI agent for finding bugs via real code execution on pull requests.",
    "category": "coding",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/jazzberry-logo.png",
    "website": "https://jazzberry.ai/" 
  },
  {
    "name": "Meroid.ai",
    "description": "Drives traffic and beats competition with SEO-optimized content creation.",
    "category": "marketing",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/meroid-ai-logo.png",
    "website": "https://meroid.ai/" 
  },
  {
    "name": "AcademicIdeas",
    "description": "AI-powered platform for academic writing and paper generation.",
    "category": "writing",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/academic-ideas-logo.png",
    "website": "https://academicideas.ai/" 
  },
  {
    "name": "PolyBuzz.ai",
    "description": "Free AI chatbot platform for creating and chatting with customized AI characters.",
    "category": "writing",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/polybuzz-ai-logo.png",
    "website": "https://polybuzz.ai/" 
  },
  {
    "name": "DeepAI",
    "description": "Provides AI tools for image generation, editing, and character interaction, along with an API.",
    "category": "design",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/deepai-logo.png",
    "website": "https://deepai.org/" 
  },
  {
    "name": "Fotor",
    "description": "AI-powered online tool for image editing, including background removal and AI image generation.",
    "category": "design",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/fotor-logo.png",
    "website": "https://www.fotor.com/" 
  },
  
  {
    "name": "IBM Watson Assistant API",
    "description": "Build conversational AI interfaces for chatbots and virtual assistants, enabling natural language understanding and dialogue management.",
    "category": "productivity",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/ibm-watson-logo.png",
    "website": "https://www.ibm.com/watson/products/assistant/"
  },
  {
    "name": "Amazon Rekognition API",
    "description": "Add image and video analysis to your applications. Identify objects, people, text, scenes, and activities, and detect inappropriate content.",
    "category": "design",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/amazon-rekognition-logo.png",
    "website": "https://aws.amazon.com/rekognition/"
  },
  {
    "name": "AssemblyAI API",
    "description": "Convert audio to text with highly accurate speech-to-text transcription, including features like speaker diarization, sentiment analysis, and content moderation.",
    "category": "productivity",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/assemblyai-logo.png",
    "website": "https://www.assemblyai.com/"
  },
  {
    "name": "Cohere API",
    "description": "Access powerful language models for natural language understanding, generation, and search, with a focus on enterprise applications.",
    "category": "writing",
    "isTopTool": true,
    "isPaid": true,
    "logo": "images/cohere-logo.png",
    "website": "https://cohere.com/"
  },
  {
    "name": "Clarifai API",
    "description": "Offers advanced computer vision and natural language AI for tasks like image and video recognition, visual search, and content moderation.",
    "category": "design",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/clarifai-logo.png",
    "website": "https://www.clarifai.com/"
  },
  {
    "name": "Twelve Labs API",
    "description": "AI for video understanding. Index, search, and analyze video content at scale using natural language queries.",
    "category": "productivity",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/twelvelabs-logo.png",
    "website": "https://twelvelabs.io/"
  },
  {
    "name": "Symbl.ai API",
    "description": "Real-time conversation intelligence APIs for developers to build applications that understand human conversation, extract insights, and enable smart workflows.",
    "category": "productivity",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/symbl-ai-logo.png",
    "website": "https://symbl.ai/"
  },
  {
    "name": "Datature API",
    "description": "A low-code MLOps platform for building, deploying, and managing computer vision models with ease.",
    "category": "coding",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/datature-logo.png",
    "website": "https://datature.io/"
  },
  {
    "name": "Tavus API",
    "description": "Generates hyper-realistic personalized videos from text and voice, ideal for marketing, sales, and communication at scale.",
    "category": "design",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/tavus-logo.png",
    "website": "https://www.tavus.io/"
  },
  {
    "name": "Imagga API",
    "description": "Provides image recognition API for automatic image tagging, categorization, color extraction, and content moderation.",
    "category": "design",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/imagga-logo.png",
    "website": "https://imagga.com/"
  },
  {
    "name": "Mistral AI API",
    "description": "Access to Mistral's powerful, efficient, and open-source generative AI models for various language tasks, including reasoning and coding.",
    "category": "writing",
    "isTopTool": true,
    "isPaid": true,
    "logo": "images/mistral-ai-logo.png",
    "website": "https://mistral.ai/"
  },
  {
    "name": "Google Cloud Natural Language API",
    "description": "Provides natural language understanding capabilities, including sentiment analysis, entity extraction, syntax analysis, and content classification.",
    "category": "writing",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/google-cloud-natural-language-logo.png",
    "website": "https://cloud.google.com/natural-language"
  },
  {
    "name": "Google Cloud Vision AI",
    "description": "Access to pre-trained computer vision models for image analysis, including object detection, facial recognition, OCR, and safe search.",
    "category": "design",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/google-cloud-vision-ai-logo.png",
    "website": "https://cloud.google.com/vision"
  },
  {
    "name": "Google Cloud Speech-to-Text API",
    "description": "Convert audio to text with high accuracy, supporting various languages and real-time transcription.",
    "category": "productivity",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/google-cloud-speech-to-text-logo.png",
    "website": "https://cloud.google.com/speech-to-text"
  },
  {
    "name": "Google Cloud Translation API",
    "description": "Translate text between thousands of language pairs instantly, with support for both basic and advanced translation features.",
    "category": "productivity",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/google-cloud-translation-logo.png",
    "website": "https://cloud.google.com/translate"
  },
  {
    "name": "Microsoft Azure Computer Vision API",
    "description": "Analyze images for content, recognize text, detect faces, and generate smart thumbnails with Microsoft's AI services.",
    "category": "design",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/azure-computer-vision-logo.png",
    "website": "https://azure.microsoft.com/en-us/products/ai-services/ai-vision/"
  },
  {
    "name": "Microsoft Azure Text Analytics API",
    "description": "Extract insights from text, including sentiment analysis, key phrase extraction, language detection, and entity recognition.",
    "category": "writing",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/azure-text-analytics-logo.png",
    "website": "https://azure.microsoft.com/en-us/products/ai-services/language-understanding/"
  },
  {
    "name": "Microsoft Azure Speech API",
    "description": "Integrate speech-to-text, text-to-speech, and speech translation capabilities into your applications.",
    "category": "productivity",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/azure-speech-logo.png",
    "website": "https://azure.microsoft.com/en-us/products/ai-services/speech-to-text/"
  },
  {
    "name": "Leonardo.AI API",
    "description": "Generate high-quality images and art from text prompts, with advanced controls for style, resolution, and creative parameters.",
    "category": "design",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/leonardo-ai-logo.png",
    "website": "https://leonardo.ai/api/"
  },
  {
    "name": "Eden AI (Unified API)",
    "description": "A single API to access and combine multiple AI models from different providers for various tasks like text-to-image, speech-to-text, and more.",
    "category": "coding",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/eden-ai-logo.png",
    "website": "https://www.edenai.co/"
  },
  {
    "name": "Google AI Studio API (for Gemini & Imagen)",
    "description": "Access the Gemini API for multimodal capabilities (text, image, audio, video, code) and Imagen for high-quality image generation.",
    "category": "writing",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/google-ai-studio-logo.png",
    "website": "https://ai.google.dev/gemini-api/docs/image-generation"
  },
  {
    "name": "Twilio Autopilot API",
    "description": "Build conversational AI bots for SMS, voice, and chat using Twilio's platform, enabling automated customer interactions.",
    "category": "productivity",
    "isTopTool": false,
    "isPaid": true,
    "logo": "images/twilio-autopilot-logo.png",
    "website": "https://www.twilio.com/docs/autopilot"
  },
  
  {
    "name": "Google Gemini API",
    "description": "Access Google's latest large language models (Gemini 1.0 Pro, Gemini 1.5 Flash, etc.) for text generation, multimodal input, multi-turn conversations, and more. Offers a generous free tier for development.",
    "category": "language model",
    "isTopTool": true,
    "isPaid": false,
    "logo": "images/google-gemini-logo.png", 
    "website": "https://ai.google.dev/gemini-api/docs/api-key"
  },
  
  {
    "name": "OpenAI API (GPT-3.5 Turbo Free Tier)",
    "description": "While many OpenAI models are paid, the GPT-3.5 Turbo API often has a limited free tier suitable for prototyping and small-scale projects, offering powerful text generation and chatbot capabilities.",
    "category": "natural language processing, chatbot",
    "isTopTool": true,
    "isPaid": false,
    "logo": "images/openai-logo.png", 
    "website": "https://platform.openai.com/docs/overview"
  },
  {
    "name": "Cohere API (Free Tier)",
    "description": "Provides access to powerful language models for various applications like text generation and understanding. Offers a free tier with a specified request limit.",
    "category": "natural language processing",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/cohere-logo.png",
    "website": "https://cohere.com/pricing"
  },
  {
    "name": "DeepAI API",
    "description": "Offers various AI services, including text generation and image recognition, with easy setup and support for many models. Provides a free API for basic usage.",
    "category": "text generation, image recognition",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/deepai-logo.png", 
    "website": "https://deepai.org/api"
  },
  {
    "name": "IBM Watson API (Free Tier)",
    "description": "IBM Watson offers a suite of AI services, including natural language understanding, visual recognition, and more. Many services provide a free tier for initial exploration.",
    "category": "natural language processing, computer vision",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/ibm-watson-logo.png", 
    "website": "https://www.ibm.com/cloud/watson-api"
  },
  {
    "name": "Clarifai AI API (Free Tier)",
    "description": "Analyze images and videos using AI technology for object recognition, face detection, and custom model training. Includes a free tier for developers.",
    "category": "computer vision",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/clarifai-logo.png", 
    "website": "https://www.clarifai.com/pricing"
  },
  {
    "name": "Tavus API (Free Tier)",
    "description": "Simplifies video production by embedding AI text-to-speech capabilities directly into applications, generating hyper-realistic videos from scripts. Offers a free tier.",
    "category": "video generation, text-to-speech",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/tavus-logo.png", 
    "website": "https://www.tavus.io/api"
  },
  {
    "name": "Imagga API (Free Tier)",
    "description": "Offers image understanding and analysis technologies for tasks like tagging, categorization, visual search, and face detection. Provides a free tier for limited usage.",
    "category": "computer vision",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/imagga-logo.png", 
    "website": "https://imagga.com/pricing"
  },
  {
    "name": "OpenRouter",
    "description": "A unified interface to access various AI APIs, including many free LLM options like DeepSeek, Llama 3 models, and even limited access to GPT-4o. Provides free credits for new users.",
    "category": "language model",
    "isTopTool": false,
    "isPaid": false,
    "logo": "images/openrouter-logo.png", 
    "website": "https://openrouter.ai/"
  },
  {
  "name": "Perplexity AI",
  "description": "An AI-powered conversational answer engine that provides direct, cited answers to queries by synthesizing information from real-time web searches. It offers features like source citations, follow-up questions, and various search modes (Quick, Pro).",
  "category": "search engine, language model, knowledge base",
  "isTopTool": true,
  "isPaid": false,
  "pricing_model": "freemium",
  "logo": "images/perplexity-ai-logo.png",
  "website": "https://www.perplexity.ai",
  "api_documentation": "https://docs.perplexity.ai/docs"
},



    ];

    const searchInput = document.getElementById('searchInput');
    const categoryButtons = document.querySelectorAll('.category-btn');

    const sections = {
        top: { element: document.querySelector('.top-tools-section'), grid: document.querySelector('.top-tools-grid'), title: 'Top AI Tools' },
        free: { element: document.querySelector('.free-tools-section'), grid: document.querySelector('.free-tools-grid'), title: 'Free AI Tools' },
        paid: { element: document.querySelector('.paid-tools-section'), grid: document.querySelector('.paid-tools-grid'), title: 'Paid AI Tools' },
        all: { element: document.querySelector('.all-tools-section'), grid: document.querySelector('.all-tools-grid'), title: 'All AI Tools' }
    };

    const noResultsDiv = document.getElementById('no-results');

    function createToolCard(tool) {
        const toolCard = document.createElement('div');
        toolCard.classList.add('tool-card');
        toolCard.dataset.category = tool.category;
        toolCard.dataset.paid = tool.isPaid ? 'true' : 'false';

        toolCard.innerHTML = `
            <img src="${tool.logo}" alt="${tool.name} Logo">
            <h3>${tool.name}</h3>
            <p>${tool.description}</p>
            <div class="tool-badge"></div>
            <a href="${tool.website}" target="_blank" rel="noopener noreferrer" class="visit-btn">Visit Website</a>
        `;

        const badgeDiv = toolCard.querySelector('.tool-badge');
        if (tool.isPaid) {
            badgeDiv.innerHTML = '<i class="fas fa-dollar-sign"></i> Paid'; // Using Font Awesome
            badgeDiv.classList.add('paid');
        } else {
            badgeDiv.innerHTML = '<i class="fas fa-tag"></i> Free'; // Using Font Awesome
            badgeDiv.classList.add('free');
        }

        return toolCard;
    }

    function renderTools(filteredTools, targetGrid) {
        targetGrid.innerHTML = '';
        if (filteredTools.length > 0) {
            filteredTools.forEach(tool => {
                targetGrid.appendChild(createToolCard(tool));
            });
            return true; // Indicate that tools were rendered
        }
        return false; // Indicate no tools were rendered
    }

    function filterAndSearchTools() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        let activeCategory = document.querySelector('.category-btn.active')?.dataset.category || 'all';

        // If a search term is present, remove active class from all categories and set 'All Tools' to active
        if (searchTerm !== '') {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            document.querySelector('.category-btn[data-category="all"]').classList.add('active');
            activeCategory = 'all'; // Ensure the logic follows this
        }

        // Hide all sections first
        for (const key in sections) {
            sections[key].element.style.display = 'none';
            sections[key].grid.innerHTML = ''; // Clear grids when hiding
        }
        noResultsDiv.style.display = 'none'; // Hide no results initially

        let filteredTools = [];
        let currentSectionKey = 'all'; // Default to 'all' section for display

        // Step 1: Filter by search term
        const searchFilteredTools = tools.filter(tool => {
            return tool.name.toLowerCase().includes(searchTerm) ||
                   tool.description.toLowerCase().includes(searchTerm) ||
                   tool.category.toLowerCase().includes(searchTerm);
        });

        // Step 2: Apply category filter based on the *current* activeCategory
        if (activeCategory === 'all') {
            filteredTools = searchFilteredTools;
            currentSectionKey = 'all';
        } else if (activeCategory === 'free') {
            filteredTools = searchFilteredTools.filter(tool => !tool.isPaid);
            currentSectionKey = 'free';
        } else if (activeCategory === 'paid') {
            filteredTools = searchFilteredTools.filter(tool => tool.isPaid);
            currentSectionKey = 'paid';
        } else { // Specific category like 'writing', 'design', etc.
            filteredTools = searchFilteredTools.filter(tool => tool.category === activeCategory);
            currentSectionKey = 'all'; // Display in All Tools section for specific categories
        }

        let toolsFound = false;

        // Render the filtered tools into the determined section
        toolsFound = renderTools(filteredTools, sections[currentSectionKey].grid);

        // Show the chosen section if tools were found
        if (toolsFound) {
            sections[currentSectionKey].element.style.display = 'block';
            // Update the H2 based on the active filter/search
            let sectionTitle = sections[currentSectionKey].title;
            if (searchTerm !== '') {
                sectionTitle = `Search Results for "${searchTerm}"`;
            } else if (activeCategory !== 'all' && currentSectionKey === 'all') {
                sectionTitle = `AI Tools for ${activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}`;
            }
            sections[currentSectionKey].element.querySelector('h2').textContent = sectionTitle;
        } else if (searchTerm === '' && activeCategory === 'all') {
            // Initial state: show top tools and all tools if no search/filter
            const topTools = tools.filter(tool => tool.isTopTool);
            if (topTools.length > 0) {
                sections.top.element.style.display = 'block';
                renderTools(topTools, sections.top.grid);
            }
            // Always show the "All Tools" section for the full list if no specific filters
            sections.all.element.style.display = 'block';
            renderTools(tools, sections.all.grid);
            sections.all.element.querySelector('h2').textContent = sections.all.title; // Reset to original title
        } else {
            // If no tools match any criteria and it's not the initial state, show no results
            noResultsDiv.style.display = 'block';
        }
    }

    // Initial render when the page loads
    filterAndSearchTools();

    // Event Listeners
    searchInput.addEventListener('keyup', filterAndSearchTools);

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to the clicked button
            button.classList.add('active');
            searchInput.value = ''; // Clear search when category is clicked
            filterAndSearchTools(); // Re-filter based on new category
        });
    });
});