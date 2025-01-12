"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Heart,
  Globe,
  Twitter,
  LinkedinIcon as LinkedIn,
  MapPin,
  TrendingUp,
} from "lucide-react";

import { Startup } from "@/interface";
import Link from "next/link";
import Image from "next/image";
import { useFavoriteStore } from "@/store/favoritesStore";


interface Props {
  startup: Startup;
}

export default function StartupCard({ startup }: Props) {
  const { favorites, addFavorite, removeFavorite } = useFavoriteStore();
  const isFavorite = favorites.includes(startup.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(startup.id);
    } else {
      addFavorite(startup.id);
    }
  };

  return (
    <Card className="w-120 h-fit">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="h-16 w-16 rounded-lg overflow-hidden  p-1">
          <Image
            src={startup.logosrc}
            alt={startup.name}
            className="h-full w-full object-contain rounded-lg"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">{startup.name}</h3>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-xs">{startup.location}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-xs text-muted-foreground">{startup.description}</p>
        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary">{startup.market.type}</Badge>
          <Badge variant="secondary">{startup.type.name}</Badge>
          <Badge className="bg-emerald-500/10 text-emerald-500">
            <TrendingUp className="mr-1 h-3 w-3" />
            {startup.investment.serie}
          </Badge>
        </div>
        <div className="flex -space-x-1 pt-2">
          {startup.founders.map((founder, i) => (
            <Avatar key={i} className="h-8 w-8 border-2 border-background">
              <AvatarImage src={founder.image} alt={founder.name} />
              <AvatarFallback>{founder.name[0]}</AvatarFallback>
            </Avatar>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between p-2">
        <div className="flex gap-1">
          <Link href={startup.socialLinks.web} target="_blank">
            <Button variant="ghost" size="icon">
              <Globe className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={startup.socialLinks.twitter} target="_blank">
            <Button variant="ghost" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={startup.socialLinks.linkedin} target="_blank">
            <Button variant="ghost" size="icon">
              <LinkedIn className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <Button variant="ghost" size="icon" onClick={toggleFavorite}>
          <Heart className={`h-4 w-4 ${isFavorite ? "text-red-500" : "text-gray-500"}`} />
        </Button>
      </CardFooter>
    </Card>
  );
}
