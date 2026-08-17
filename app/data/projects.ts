export type Project ={
    slug: string;
    title: string;
    description: string;
    tech: string[];
    image:string;
    link?: string;
    github?:string;
    demo?: string;
};
export const projects: Project[]=[
    {
        slug: "secure-python-ctf-engine",
        title:"Secure Python CTF Engine",
        description:"An interactive application-security platform that safely executes untrusted Python code in real-time using AST parsing and process isolation.",
        tech:["Python", "FastAPI", "SQLite", "JavaScript", "HTML/CSS"],
        image: "/CTF-ENGINE.png",
        link: "ctf-engine.onrender.com",
        github:"https://github.com/Lyhorng-labs/CTF-Engine",
        demo: "https://youtu.be/Z8sE0C4ZRNc?si=6raX52ymydz1cIHo",


    },
    {
        slug: "math12",
        title:"Math 12 - Khmer Grade 12 Math Practice Web",
        description:"A web app that generates Khmer-language Grade 12 math exercises and step-by-step solutions using AI, with progress tracking and an admin dashboard.",
        tech:["Javascript", "HTML/CSS", "Node.js/Express", "Supabase (Postgres)", "Google Gemini API"],
        image: "/Math12.png",
        link:"https://fullstack-math-ai.pages.dev/",
        github:"https://github.com/Lyhorng-labs/FullStack-Math-AI",
        demo: "https://youtu.be/aJINhGrE-V4",

    },
    {
        slug: "freshguard-agent",
        title:"FreshGuard-Agent - Autonomous Data Freshness Agent",
        description:"An AI agent that finds stale datasets in a DataHub catalog, traces upstream lineage to the root cause, and files incidents back into the catalog — running entirely on a local Ollama model.",
        tech:["Python", "LangChain", "Ollama", "DataHub", "Streamlit"],
        image: "/freshguard.png",
        github:"https://github.com/Lyhorng-labs/FreshGuard-Agent",
        demo: "https://youtu.be/hAxJV6xQLIw",
    },
    {
        slug: "donut-mobile-order",
        title:"Donut Mobile Order",
        description:"A mobile ordering app for donut shops. Each shop gets its own storefront on a subdomain (like pinkdonuts.example.com), can build out its menu, and take orders with card payments or pay-at-counter.",
        tech:["Next.js", "React", "TypeScript", "Tailwind CSS 4", "Node.js", "Express", " auth, realtime: Supabase (Postgres)","Stripe"],
        image: "/donut-hub.png",
        link:"https://fullstack-math-ai.pages.dev/",
        github:"https://github.com/Lyhorng-labs/Donut-mobile-order",
        demo:"https://youtu.be/B_NwMwJ3l_Q",
    }
];