import { FaSquareXTwitter } from "react-icons/fa6";
import { Github, Linkedin } from "lucide-react";

export type SocialLinkType = {
  name: string;
  url: string;
  iconType: "twitter" | "github" | "linkedin";
};

export const socialLinks: SocialLinkType[] = [
  {
    name: "Twitter",
    url: "https://twitter.com/Harshthakur2002",
    iconType: "twitter",
  },
  {
    name: "GitHub",
    url: "https://github.com/harshthakur2002",
    iconType: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/harshthakur2002",
    iconType: "linkedin",
  },
];
