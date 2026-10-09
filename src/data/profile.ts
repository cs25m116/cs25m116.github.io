import type { Profile } from '../types';

export const profile: Profile = {
  nickname: 'RaveeMishra',
  roles: ['Computer Scientist', 'AI/ML Researcher', 'Software Engineer'],
  intro: 'Building intelligent systems at the intersection of machine learning, deep learning, computer vision, natural language processing, mathematical modeling and software engineering.',
  bio: [
    'M.Tech student in Computer Science and Engineering at IIT Tirupati, with earlier degrees in Mathematics from IIT Kanpur and the University of Delhi.',
    'My work spans computer vision, deep learning, generative AI and Physical AI, with an emphasis on applying AI/ML to real engineering problems.',
  ],
  role: 'AI/ML Engineer',
  focus: 'Artificial Intelligence',
  interests: ['Computer Vision', 'Deep Learning', 'Generative AI', 'Physical AI', 'Distributed Systems'],
  currentFocus: ['Computer Vision', 'Generative AI', 'Deep Learning'],
  terminal: {
    enabled: true,
    lines: [
      { cmd: 'whoami', out: ['computer_vision_scientist'] },
      { cmd: 'focus', out: ['deep_learning', 'machine_learning', 'computer_vision'] },
      { cmd: 'currently_learning', out: ['multi_modal_models'] },
    ],
  },
};