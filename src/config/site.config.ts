/** Master site configuration. Empty strings hide the matching UI element. */
export const siteConfig = {
  name: 'Ravee Mishra',
  title: 'Computer Scientist | AI/ML Researcher',
  tagline: 'Building intelligent systems at the intersection of machine learning, computer vision, mathematical modeling and software engineering.',
  location: 'India',
  email: '', // TODO: your@email.com
  resume: '/resume.pdf', // file lives in public/resume.pdf
  profileImage: '/profile.png', // file lives in public/profile.png
  availability: { enabled: false, text: 'Open to Research & Engineering Opportunities' },
  social: {
    github: 'https://github.com/cs25m116',
    linkedin: '', // TODO
    googleScholar: '',
    twitter: '',
    medium: '',
    youtube: '',
  },
  seo: {
    title: 'Ravee Mishra | Computer Scientist & AI/ML Researcher',
    description: 'Research, projects and engineering work in machine learning, computer vision, generative AI and systems.',
    keywords: ['computer science', 'machine learning', 'computer vision', 'generative AI', 'research portfolio'],
  },
  deploy: {
    /** GitHub repository name, used as the Vite base path. "" for <user>.github.io repos. */
    repoName: '',
  },
  features: { commandPalette: true, researchMap: true },
};
