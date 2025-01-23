"use client";

import { useState } from "react";
import { SideBar } from "@/components/ui/sidebar/Sidebar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <SideBar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex-1 flex flex-col md:ml-64">
        <header className="sticky top-0 z-20 bg-white  p-4 flex items-center">
          <Button
            variant="ghost"
            className="md:hidden mr-2"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex justify-center w-[290px]">
            <Image src={"/arbanner.png"} height={180} width={180} alt="Logo"  className="sm:hidden"/>
          </div>
        </header>
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
