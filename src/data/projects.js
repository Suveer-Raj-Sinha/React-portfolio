// 1. Add your screenshots to src/assets/projects/ and import them here:
import terraLive from '../assets/projects/terra-live.png';
import solaris from '../assets/projects/solaris.png';
import webLens from '../assets/projects/weblens.png';

const projectsData = [
  {
    id: "terra-live",
    image: terraLive,
    title: "Terra Live — Real-Time Disaster Monitoring Platform",
    description: "A full-stack disaster monitoring platform aggregating real-time earthquake, wildfire, volcanic activity, and cyclone data from multiple global hazard feeds. Features an interactive geospatial dashboard with heatmaps, custom markers, analytics, and tectonic plate boundary overlays, backed by FastAPI ingestion services and SQLite caching for live data sync.",
    tags: ["React", "TypeScript", "FastAPI", "SQLite", "React Leaflet"],
    githubUrl: "https://github.com/Suveer-Raj-Sinha/Terra-Live",
    liveUrl: "https://terra-live.vercel.app/"
  },
  {
    id: "solaris",
    image: solaris,
    title: "Solaris — 3D Interactive Solar System Explorer",
    description: "An immersive 3D solar system simulator featuring real-time orbital mechanics and interactive planetary exploration. Built with custom GLSL shaders for atmospheric effects, planetary lighting, and dynamic ring-shadow rendering, plus procedural textures, post-processing effects, and audio systems for an engaging educational experience.",
    tags: ["React", "Three.js", "React Three Fiber", "GLSL", "Zustand"],
    githubUrl: "https://github.com/Suveer-Raj-Sinha/solaris",
    liveUrl: "https://solaris-launchpad.vercel.app/"
  },
  {
    id: "weblens",
    image: webLens,
    imageFit: "contain",
    title: "WebLens — AI-Powered Visual Search Extension",
    description: "A browser extension enabling users to capture webpage regions and perform AI-powered visual searches. Powered by a FastAPI backend integrating Gemini Vision, Google Lens, and Google Custom Search APIs for image analysis and discovery, with persistent search history via Chrome Extension APIs.",
    tags: ["React", "FastAPI", "Python", "Chrome Extension", "Gemini Vision"],
    githubUrl: "https://github.com/Suveer-Raj-Sinha/visual-search-extension"
  }
];

export default projectsData;