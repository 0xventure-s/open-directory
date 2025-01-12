import { create } from "zustand";
import { persist } from "zustand/middleware";

interface FavoriteStore {
  favorites: string[];
  addFavorite: (id: string) => void;
  removeFavorite: (id: string) => void;
}

export const useFavoriteStore = create<FavoriteStore>()(
  persist(
    (set) => ({
      favorites: [],
      addFavorite: (id) =>
        set((state) => ({
          favorites: [...state.favorites, id],
        })),
      removeFavorite: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((fav) => fav !== id),
        })),
    }),
    {
      name: "favorites-storage",
      // Persistimos solo los favoritos
      partialize: (state) => ({ favorites: state.favorites }),
    }
  )
);
