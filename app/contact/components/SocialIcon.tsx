"use client";

import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Github, Linkedin } from "lucide-react";
import { SocialLinkType } from "../data";

interface SocialIconProps {
  iconType: SocialLinkType["iconType"];
}

export function SocialIcon({ iconType }: SocialIconProps): React.ReactNode {
  switch (iconType) {
    case "twitter":
      return <FaSquareXTwitter className="h-5 w-5" />;
    case "github":
      return <Github className="h-5 w-5" />;
    case "linkedin":
      return <Linkedin className="h-5 w-5" />;
    default:
      return null;
  }
}
