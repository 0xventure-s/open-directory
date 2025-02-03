"use client";

import { useState, useEffect } from "react";
import StartupCard from "@/components/ui/cards/Startup";
import { Skeleton } from "@/components/ui/skeleton";
import { useFavoriteStore } from "@/store/favoritesStore";
import { Startup } from "@/interface";
import { getStartups } from "@/actions/startups";

export default function FavoritesPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [startups, setStartups] = useState<Startup[]>([]);
  const { favorites } = useFavoriteStore();

  useEffect(() => {
    const fetchStartups = async () => {
      try {
        const fetchedStartups = await getStartups();
        setStartups(fetchedStartups);
      } catch (error) {
        console.error("Error fetching startups:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStartups();
  }, []);

  const favoriteStartups = startups.filter((startup) => 
    favorites.includes(startup.id)
  );

  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="space-y-11">
        <h2 className="text-2xl font-bold">Mis Favoritos</h2>
        
        <div className="grid gap-6 md:grid-cols-3 grid-cols-1">
          {isLoading ? (
            // Skeleton Loading
            Array(3).fill(0).map((_, index) => (
              <div key={index} className="space-y-4">
                <Skeleton className="h-[200px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[200px]" />
                  <Skeleton className="h-4 w-[180px]" />
                </div>
              </div>
            ))
          ) : favoriteStartups.length > 0 ? (
            favoriteStartups.map((startup) => (
              <StartupCard key={startup.id} startup={startup} />
            ))
          ) : (
            <p className="text-gray-500">No tienes favoritos aún.</p>
          )}
        </div>
      </div>
    </main>
  );
}