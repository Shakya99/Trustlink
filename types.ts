import { LucideIcon } from "lucide-react";

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

export interface MilestoneStep {
  id: number;
  title: string;
  description: string;
}
