export const dynamic = 'force-dynamic';
export const revalidate = 0;

import { getFreshRandomStartups,  } from "@/actions/startups";
/* eslint-disable @typescript-eslint/no-unused-vars */
  
import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import VentureCapitalCard from "@/components/ui/cards/Ventures";
import FounderGrid from "@/components/ui/gridElements/FoundersGrid";
import StartupGrid from "@/components/ui/gridElements/StartupGrid";
import VentureGrid from "@/components/ui/gridElements/VenturesGrid";
import Link from "next/link";



export default async function NamePage() {

  const startups = await getFreshRandomStartups(9);
  


  return (
    <MainLayout>
      <div className="space-y-12">
        {/* Startups Preview */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Startups Destacadas</h2>
            <Button variant="outline" asChild>
              <Link href="/startups">Ver todas</Link>
            </Button>
          </div>
          <div className="grid gap-6 lg:flex">
            <StartupGrid startups={startups}/>
          </div>
        </section>

        {/* <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Builders Descatados</h2>
            <Button variant="outline" asChild>
              <Link href="/startups">Ver todas</Link>
            </Button>
          </div>
          <div className="grid gap-6 "> */}
          {/* <FounderGrid person={persons}/> */}
          {/* </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Ventures Destacados</h2>
            <Button variant="outline" asChild>
              <Link href="/startups">Ver todas</Link>
            </Button>
          </div>
          <div className="grid gap-6"> */}
            {/* <VentureGrid ventures={venture}/> */}
          {/* </div>
        </section> */}
      </div>
    </MainLayout>
  );
}
