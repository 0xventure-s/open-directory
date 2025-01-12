"use client";

import { startups } from "@/seed/seed";
import StartupCard from "@/components/ui/cards/Startup";
import { useFavoriteStore } from "@/store/favoritesStore";

export default function FavoritesPage() {
  const { favorites } = useFavoriteStore();
  const favoriteStartups = startups.filter((startup) => favorites.includes(startup.id));

  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="space-y-11">
     <h2 className="text-2xl font-bold">Mis Favoritos</h2>
      <div className="grid gap-6 md:grid-cols-3 grid-cols-1 ">
        {favoriteStartups.length > 0 ? (
          favoriteStartups.map((startup) => (
            <StartupCard key={startup.id} startup={startup} />
          ))
        ) : (
          <p>No tienes favoritos aún.</p>
        )}
      </div></div>
    </main>
  );
}
