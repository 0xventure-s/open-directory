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
  Rocket,
  Twitter,
  MapPin,
  Book,
  Leaf,
  ShoppingCart,
  Car,
  Home,
  Camera,
  Shield,
  Users,
  Settings,
  Tractor,
  Cpu,
  Ticket,
  Server,
  WebhookIcon,
  Pizza,
  Move,
} from "lucide-react";
import { Startup } from "@/interface";
import Link from "next/link";
import Image from "next/image";
import { useFavoriteStore } from "@/store/favoritesStore";

const iconMapping: Record<string, React.ReactNode> = {
  Fintech: <Globe className="mr-1 h-3 w-3 text-blue-500" />,
  HealthTech: <Heart className="mr-1 h-3 w-3 text-red-500" />,
  EdTech: <Book className="mr-1 h-3 w-3 text-yellow-500" />,
  Ecommerce: <ShoppingCart className="mr-1 h-3 w-3 text-green-500" />,
  Greentech: <Leaf className="mr-1 h-3 w-3 text-green-400" />,
  LogisticsTech: <Car className="mr-1 h-3 w-3 text-gray-500" />,
  Blockchain: <Cpu className="mr-1 h-3 w-3 text-indigo-500" />,
  PropTech: <Home className="mr-1 h-3 w-3 text-orange-500" />,
  MediaTech: <Camera className="mr-1 h-3 w-3 text-purple-500" />,
  CyberSecurity: <Shield className="mr-1 h-3 w-3 text-teal-500" />,
  TicketTech: <Ticket className="mr-1 h-3 w-3 text-pink-500" />,
  CommunityTech: <Users className="mr-1 h-3 w-3 text-blue-400" />,
  Technology: <Settings className="mr-1 h-3 w-3 text-gray-400" />,
  AgroTech: <Tractor className="mr-1 h-3 w-3 text-amber-700" />,
  SaaS: <Rocket className="mr-1 h-3 w-3 text-yellow-400" />,
  "AI/ML": <Server className="mr-1 h-3 w-3 text-green-600" />,
  "Hardware + SaaS": <Camera className="mr-1 h-3 w-3 text-purple-500" />,
  Mobility: <Move className="mr-1 h-3 w-3 text-gray-400" />,
  InfrastructureTech: <WebhookIcon className="mr-1 h-3 w-3 text-blue-500" />,
  FoodTech: <Pizza className="mr-1 h-3 w-3 text-red-400" />,
};
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
        <div className="h-16 w-16 rounded-lg overflow-hidden p-1">
          <Image
            src={`/logosrc/${startup.logosrc}`}
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
          <Badge variant="secondary">
            {" "}
            {iconMapping[startup.marketIcon] || startup.typeIcon}{" "}
            {startup.marketType}
          </Badge>
          <Badge variant="secondary">{startup.typeName}</Badge>
          {startup.investmentIcon && (
            <Badge className="bg-emerald-500/10 text-emerald-500">
              {iconMapping[startup.investmentIcon!]} {startup.investmentSerie}
            </Badge>
          )}
        </div>
        <div className="flex -space-x-1 pt-2">
          {startup.founders.map((founder, i) => (
            <div className="relative group" key={i}>
              <Avatar className="h-8 w-8 border-2 border-background">
                <Link  href={founder.linkFounder || "/"}>
                  <AvatarImage
                    src={founder.image}
                    alt={founder.name}
                  />
                </Link>
                <AvatarFallback>{founder.name[0]}</AvatarFallback>
              </Avatar>
              <div className="absolute left-0 z-10 hidden w-fit p-2 text-sm text-white bg-black rounded-md group-hover:block whitespace-nowrap">
                <Link href={founder.linkFounder || "/"} className="hover:underline">
                  {founder.name} 
                </Link>
              </div>
            </div>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-between p-2">
        <div className="flex gap-1">
          <Link href={startup.socialWeb} target="_blank">
            <Button variant="ghost" size="icon">
              <Globe className="h-4 w-4" />
            </Button>
          </Link>
          <Link href={startup.socialTwitter} target="_blank">
            <Button variant="ghost" size="icon">
              <Twitter className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <Button variant="ghost" size="icon" onClick={toggleFavorite}>
          <Heart
            className={`h-4 w-4 ${
              isFavorite ? "text-red-500" : "text-gray-500"
            }`}
          />
        </Button>
      </CardFooter>
    </Card>
  );
}
