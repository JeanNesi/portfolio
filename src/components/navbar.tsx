"use client";

import Link from "next/link";
import ThemeToggleButton from "./themeButton";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

export default function Navbar() {
  const navbarLinks = ["Projetos", "Contatos"];
  const socialMedias = [
    {
      icon: <LinkedinLogo />,
      url: "https://www.linkedin.com/in/jeancarlosnesi/",
    },
    {
      icon: <GithubLogo />,
      url: "https://github.com/JeanNesi",
    },
  ];

  return (
    <header
      className="
        hidden 
        md:flex
        max-w-screen-lg 
        w-full 
        bg-slate-900/[0.3] 
        backdrop-blur-xl p-4 
        rounded-xl 
        justify-between
        "
    >
      <nav className="flex gap-10">
        {navbarLinks.map((link) => (
          <Link
            key={link}
            href={link}
            className="hover:opacity-70 transition-all"
          >
            {link}
          </Link>
        ))}
      </nav>

      <nav className="flex gap-10">
        {socialMedias.map((media) => (
          <Link
            key={media.url}
            href={media.url}
            target="_blank"
            className="hover:scale-110 transition-all"
          >
            {media.icon}
          </Link>
        ))}
        <ThemeToggleButton />
      </nav>
    </header>
  );
}
