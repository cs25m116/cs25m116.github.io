import type { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    title: 'Innovation Recognition Award',
    organization: 'Ministry of Panchayati Raj (MoPR)',
    category: 'Hackathon',
    year: '2026',
    description: 'MoPR Geospatial Intelligence All India AI/ML Hackathon 2026.',
    featured: true,
  },
  { title: 'KIA Scholarship', category: 'Scholarship', description: 'Awarded for academic performance.', year: '2026', featured: true },
  { title: 'GATE (Computer Science)', category: 'Competitive Exam', year: '2025', rank: 'All India Rank 871', gateScore: '731' },
  { title: 'GATE (Data Science & Artificial Intelligence)', category: 'Competitive Exam', year: '2025', rank: 'All India Rank 1023' },
  { title: 'IIT JAM (Mathematics)', category: 'Competitive Exam', year: '2017', rank: 'All India Rank 85' },
  { title: 'IIT JAM (Statistics)', category: 'Competitive Exam', year: '2017', rank: 'All India Rank 459' },
  { title: 'CSIR NET (Mathematics)', category: 'Competitive Exam', year: '2022', rank: 'All India Rank 111' },
];