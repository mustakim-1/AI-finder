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
}










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