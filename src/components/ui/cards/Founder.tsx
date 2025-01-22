"use client";


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
import {Persons } from "@/interface";


interface Props {
  person: Persons;
}

export default function FounderCard({ person }: Props) {
  return (
    <Card className="w-full ">
      <CardHeader className="flex flex-row items-center gap-3 p-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={person.image} alt={person.name} />
          <AvatarFallback>
            {person.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <h3 className="text-base font-semibold">{person.name}</h3>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Building2 className="h-3 w-3" />
            <span className="text-xs">{person.startup}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-1 px-4 pb-1">
        <p className="text-xs text-muted-foreground">{person.role}</p>
      </CardContent>

      <CardFooter className="flex justify-end p-2 gap-2">
        {person.Linkedin&& (
          <Button variant="ghost" size="icon" className="h-6 w-6" asChild>
            <Link
              href={person.Linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn className="h-3 w-3" />
              <span className="sr-only">LinkedIn profile</span>
            </Link>
          </Button>
        )}
        {person.Twitter && (
          <Button variant="ghost" size="icon" className="h-6 w-6" asChild>
            <Link
              href={person.Twitter}
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
