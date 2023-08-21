"use client";

import MobileNavbar from "@/components/mobileNavbar";
import Navbar from "@/components/navbar";
import { IconContext } from "@phosphor-icons/react";

export default function Home() {
  return (
    <IconContext.Provider
      value={{
        size: "24px",
      }}
    >
      <main className="flex min-h-screen flex-col items-center justify-between p-8 ">
        <Navbar />
        <MobileNavbar />
      </main>
    </IconContext.Provider>
  );
}
