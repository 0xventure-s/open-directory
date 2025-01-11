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
import { LinkedinIcon as LinkedIn, Twitter, Building2 } from "lucide-react";
import Link from "next/link";
import { FounderCards } from "@/interface";

interface Props {
  founder: FounderCards;
}

export default function FounderCard({ founder }: Props) {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center gap-3 p-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={founder.image} alt={founder.name} />
          <AvatarFallback>
            {founder.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h3 className="text-base font-semibold">{founder.name}</h3>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Building2 className="h-3 w-3" />
            <span className="text-xs">{founder.startup}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-2 px-4 pb-2">
        <p className="text-xs text-muted-foreground">{founder.role}</p>

        <div className="flex flex-wrap gap-1">
          {founder.skills.map((skill, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-end p-2 gap-2">
        {founder.socialLinks.linkedIn && (
          <Button variant="ghost" size="icon" className="h-6 w-6" asChild>
            <Link
              href={founder.socialLinks.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn className="h-3 w-3" />
              <span className="sr-only">LinkedIn profile</span>
            </Link>
          </Button>
        )}
        {founder.socialLinks.twitter && (
          <Button variant="ghost" size="icon" className="h-6 w-6" asChild>
            <Link
              href={founder.socialLinks.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className="h-3 w-3" />
              <span className="sr-only">Twitter profile</span>
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
