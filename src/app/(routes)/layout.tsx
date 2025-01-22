"use client"

import { Button } from "@/components/ui/button";

import { SideBar } from "@/components/ui/sidebar/Sidebar";
import { Menu } from 'lucide-react';
import Image from "next/image";
import { useState } from "react";

export default function NewLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen">
      <SideBar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <div className="flex-1 flex flex-col md:ml-64">
        <header className="sticky top-0 z-20 bg-white border-b p-4 flex items-center">
          <Button
            variant="ghost"
            className="md:hidden mr-2"
            onClick={() => setIsSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </Button>
          <div className="flex justify-center w-[290px]">
          <Image src={"/arbanner.png"} height={180} width={180} alt="Logo"/>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
}

