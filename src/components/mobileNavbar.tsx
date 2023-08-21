"use client";

import Link from "next/link";
import ThemeToggleButton from "./themeButton";
import { GithubLogo, House, LinkedinLogo, User } from "@phosphor-icons/react";
import { usePathname, useRouter } from "next/navigation";

export default function MobileNavbar() {
  const router = usePathname();

  const navbarLinks = [
    {
      url: "/",
      icon: <House key={1} />,
    },
    { url: "https://github.com/JeanNesi", icon: <User key={2} /> },
    {
      url: "https://www.linkedin.com/in/jeancarlosnesi/",
      icon: <LinkedinLogo key={3} />,
    },
  ];
  {
    console.log(router);
  }
  return (
    <header
      className="
        hidden
        max-md:flex 
        bg-gray-600/[0.3] 
        backdrop-blur-xl 
        py-2.5
        px-4 
        rounded-xl 
        justify-between
        fixed
        bottom-4
        "
    >
      <nav className="flex align-middle">
        {navbarLinks.map((link, i) => (
          <Link
            key={link.url}
            href={link.url}
            target="_blank"
            className={`
            flex
            items-center
            hover:scale-110 
            transition-all
            py-2
            px-4
            rounded-xl 
            ${router === link.url ? "bg-slate-300" : ""}`}
          >
            {link.icon}
          </Link>
        ))}
        <div
          className="
            flex
            px-4 
            py-2
            items-center
            "
        >
          <ThemeToggleButton />
        </div>
      </nav>
    </header>
  );
}
