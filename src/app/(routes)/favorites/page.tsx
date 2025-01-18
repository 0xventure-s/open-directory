"use client";

import { useState, useEffect } from "react";
import StartupCard from "@/components/ui/cards/Startup";
import { getStartups } from "@/pagination/startups";
import { useFavoriteStore } from "@/store/favoritesStore";
import { Startup } from "@/interface";

export default function FavoritesPage() {
  const [startups, setStartups] = useState<Startup[]>([]); // Inicializas startups como un array vacío
  const { favorites } = useFavoriteStore();

  // Usas useEffect para cargar las startups de manera asíncrona
  useEffect(() => {
    const fetchStartups = async () => {
      const fetchedStartups = await getStartups();
      setStartups(fetchedStartups); // Actualizas el estado con los datos obtenidos
    };

    fetchStartups();
  }, []); // El array vacío asegura que se ejecute solo una vez cuando el componente se monta

  // Filtras las startups favoritas
  const favoriteStartups = startups.filter((startup) => favorites.includes(startup.id));

  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="space-y-11">
        <h2 className="text-2xl font-bold">Mis Favoritos</h2>
        <div className="grid gap-6 md:grid-cols-3 grid-cols-1">
          {favoriteStartups.length > 0 ? (
            favoriteStartups.map((startup) => (
              <StartupCard key={startup.id} startup={startup} />
            ))
          ) : (
            <p>No tienes favoritos aún.</p>
          )}
        </div>
      </div>
    </main>
  );
}
