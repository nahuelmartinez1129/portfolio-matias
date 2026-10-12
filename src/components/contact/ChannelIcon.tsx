import { Briefcase, FolderGit2, type LucideIcon, Mail, MessageCircle } from "lucide-react";
import type { ContactChannel } from "@/lib/contact";

const icons: Record<ContactChannel["id"], LucideIcon> = {
  whatsapp: MessageCircle,
  email: Mail,
  github: FolderGit2,
  linkedin: Briefcase,
};

export function ChannelIcon({ id, className = "size-5" }: { id: ContactChannel["id"]; className?: string }) {
  const Icon = icons[id];
  return <Icon aria-hidden="true" className={className} />;
}
