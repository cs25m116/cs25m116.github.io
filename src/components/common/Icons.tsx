import { Github, Linkedin, Mail, Twitter, Youtube, GraduationCap, BookOpen, Eye, Sparkles, Cpu, AudioLines, FlaskConical, FileText, Network } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const social: Record<string, LucideIcon> = { github: Github, linkedin: Linkedin, email: Mail, twitter: Twitter, youtube: Youtube, scholar: GraduationCap, medium: BookOpen };
export const SocialIcon = ({ name, size = 18 }: { name: string; size?: number }) => {
  const I = social[name] ?? FileText;
  return <I size={size} aria-hidden />;
};
const research: Record<string, LucideIcon> = { eye: Eye, sparkles: Sparkles, cpu: Cpu, audio: AudioLines, flask: FlaskConical, network: Network };
export const ResearchIcon = ({ name, size = 20 }: { name?: string; size?: number }) => {
  const I = (name && research[name]) || FlaskConical;
  return <I size={size} aria-hidden />;
};
