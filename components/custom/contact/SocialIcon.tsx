"use client";

import React from "react";
import { FaGithub, FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { SocialLinkType } from "./contact.data";

interface SocialIconProps {
	iconType: SocialLinkType["iconType"];
}

export function SocialIcon({ iconType }: SocialIconProps): React.ReactElement | null {
	switch (iconType) {
		case "twitter":
			return <FaSquareXTwitter className="h-5 w-5" />;
		case "github":
			return <FaGithub className="h-5 w-5" />;
		case "linkedin":
			return <FaLinkedin className="h-5 w-5" />;
		default:
			return null;
	}
}
