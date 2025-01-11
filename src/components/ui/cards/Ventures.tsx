"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Globe, MapPin, TrendingUp } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Ventures } from "@/interface";

interface Props {
  ventures: Ventures;
}

export default function VentureCapitalCard({ ventures }: Props) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-3 p-4">
        <div className="h-12 w-12 rounded-lg overflow-hidden bg-muted">
          <Image
            src={ventures.logo}
            alt={`${ventures.name} logo`}
            className="h-full w-full object-cover"
            height={48}
            width={48}
          />
        </div>
        <div className="flex flex-col">
          <h3 className="text-base font-semibold">{ventures.name}</h3>
          <div className="flex items-center gap-1 text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span className="text-xs">{ventures.location}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-2 px-4 pb-2">
        <div className="flex flex-wrap gap-1">
          {ventures.investmentStages.map((stage, index) => (
            <Badge
              key={index}
              className="bg-emerald-500/10 text-emerald-500 text-xs"
            >
              <TrendingUp className="mr-1 h-2.5 w-2.5" />
              {stage}
            </Badge>
          ))}
        </div>

        <div className="flex flex-wrap gap-1">
          {ventures.sectors.map((sector, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {sector}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-end p-2">
        <Button variant="ghost" size="icon" className="h-6 w-6" asChild>
          <Link
            href={ventures.website}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Globe className="h-3 w-3" />
            <span className="sr-only">Visit website</span>
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
