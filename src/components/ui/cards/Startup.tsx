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
  Ticket,
} from "lucide-react";
import { useState } from "react";

export default function StartupCard() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card className="w-120 h-fit">
      <CardHeader className="flex flex-row items-center gap-4">
        <div className="h-16 w-16 rounded-lg overflow-hidden  p-1">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dise%C3%B1o%20sin%20t%C3%ADtulo%20-%202024-05-01T123845.623-IDKnUaDWnDc91fG9RWhIbqMsFIy3Ld.png"
            alt="Eventum logo"
            className="h-full w-full object-contain rounded-lg"
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-lg font-bold">Eventum</h3>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span className="text-xs">Catamarca, Argentina</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-xs text-muted-foreground">
          Plataforma de ticketing digital que simplifica la venta de entradas,
          permitiendo a organizadores vender más en menos pasos mientras ofrece
          una experiencia fluida para los compradores.
        </p>

        <div className="mt-2" />

        <div className="flex flex-wrap gap-1">
          <Badge variant="secondary">
            <Ticket className="mr-1 h-3 w-3" />
            Ticketing
          </Badge>
          <Badge variant="secondary">SaaS</Badge>
          <Badge className="bg-emerald-500/10 text-emerald-500">
            <TrendingUp className="mr-1 h-3 w-3" />
            Seed
          </Badge>
        </div>

        <div className="mt-2" />

        <div className="space-y-1">
          <div className="flex -space-x-1 pt-2">
            {[
              { name: "F1", image: "/placeholder.svg?height=32&width=32" },
              { name: "F2", image: "/placeholder.svg?height=32&width=32" },
              { name: "F3", image: "/placeholder.svg?height=32&width=32" },
            ].map((founder, i) => (
              <Avatar key={i} className="h-8 w-8 border-2 border-background">
                <AvatarImage src={founder.image} alt={founder.name} />
                <AvatarFallback>{founder.name}</AvatarFallback>
              </Avatar>
            ))}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-between p-2">
        <div className="flex gap-1">
          <Button variant="ghost" size="icon">
            <Globe className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Twitter className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <LinkedIn className="h-4 w-4" />
          </Button>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsLiked(!isLiked)}
          className={isLiked ? "text-red-500" : ""}
        >
          <Heart className="h-4 w-4" fill={isLiked ? "currentColor" : "none"} />
        </Button>
      </CardFooter>
    </Card>
  );
}
