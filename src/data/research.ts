import type { ResearchArea } from '../types';
// Only areas that appear here are shown. Topics link to projects/publications by matching text.
export const research: ResearchArea[] = [
  { title: 'Computer Vision', icon: 'eye', status: 'Active', currentlyExploring: true,
    description: 'Detection, Segmentation, Classification, geospatial extraction and handwriting recognition with modern vision backbones.',
    topics: ['Object Detection','Spatial Attention', 'Channel Attention', 'Polygon Extraction', 'Handwriting Recognition(HTR-OCR)'] },
  { title: 'Generative AI', icon: 'sparkles', status: 'Active', currentlyExploring: true,
    description: 'Language models built from first principles and retrieval-augmented learning systems.',
    topics: ['Language Models', 'Transfer Learning','LLM backbones','Retrieval-Augmented Generation','Adversarial deep learning'] },
  { title: 'Speech & Audio', icon: 'audio', status: 'Active',
    description: 'Self-supervised audio representations for deepfake detection.',
    topics: ['Audio Deepfake Detection in VoIP conditions'] },
];
