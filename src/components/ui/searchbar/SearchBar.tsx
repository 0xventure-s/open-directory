"use client";
import { Search } from "lucide-react";
import { Input } from "../input";
import { useState } from "react";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="flex flex-col my-1 ">
      <header className="flex h-14 lg:h-[39px] items-center gap-4  bg-card px-6">
        <div className="w-full flex-1">
          <form className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar startups, founders, VCs..."
                className="w-full bg-background shadow-none appearance-none pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </form>
        </div>
      </header>
    </div>
  );
}
