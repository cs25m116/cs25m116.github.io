import type { SkillCategory } from '../types';
// Optional per skill: level (1-5), years, projects. Empty list = category hidden.
export const skills: SkillCategory[] = [
  {
    category: 'Programming & Frameworks',
    skills: [{ name: 'Python' }, { name: 'C/C++' }, { name: 'PyTorch' }],
  },
  {
    category: 'Deep Learning Foundations',
    skills: [
      { name: 'CNN' },
      { name: 'ResNet50' },
      { name: 'VGG' },
      { name: 'Channel Attention' },
      { name: 'Spatial Attention' },
    ],
  },
  {
    category: 'Computer Vision',
    skills: [
      { name: 'Object Detection' },
      { name: 'Object Classification' },
      { name: 'Object Segmentation' },
      { name: 'Object Tracking'},
      { name: 'YOLOv9' },
      { name: 'Mask2Former' },
    ],
  },
  {
    category: 'Transformers & LLMs',
    skills: [
      { name: 'Self-Attention' },
      { name: 'Cross-Attention' },
      { name: 'Encoder Transformer' },
      { name: 'Decoder-Only Transformer' },
      { name: 'ViT' },
      { name: 'Swin Transformer' },
      { name: 'GPT-2' },
      { name: 'Context Window' },
    ],
  },
  {
    category: 'Generative AI',
    skills: [
      { name: 'Autoencoder' },
      { name: 'Variational Autoencoder (VAE)' },
      { name: 'GAN' },
      { name: 'Diffusion Models' },
      { name: 'Stable Diffusion' },
    ],
  },
];