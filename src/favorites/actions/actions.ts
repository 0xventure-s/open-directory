"use client";

import { getCookie, hasCookie, setCookie } from "cookies-next";

export const getFavorite = () => {
  if (hasCookie("favorite")) {
    const cookieFavorite = JSON.parse(
      (getCookie("favorite") as string) ?? "{}"
    );
    return cookieFavorite;
  }

  return {};
};

export const addStartupToFavorite = (startupId: string) => {
  const getFavoriteCookie = getFavorite();

  getFavoriteCookie[startupId] = true;

  setCookie("favorite", JSON.stringify(getFavoriteCookie));
};

export const deleteStartupToFavorite = (startupId: string) => {
  const getFavoriteCookie = getFavorite();

  delete getFavoriteCookie[startupId];

  setCookie("favorite", JSON.stringify(getFavoriteCookie));
};
