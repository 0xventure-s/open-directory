import MainLayout from "@/components/layout/MainLayout";
import { Button } from "@/components/ui/button";
import FounderCard from "@/components/ui/cards/Founder";
import StartupCard from "@/components/ui/cards/Startup";
import VentureCapitalCard from "@/components/ui/cards/Ventures";
import Link from "next/link";

export default function NamePage() {
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <StartupCard />
            <StartupCard />
            <StartupCard />
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Startups Destacadas</h2>
            <Button variant="outline" asChild>
              <Link href="/startups">Ver todas</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <FounderCard/>
          <FounderCard/>
          <FounderCard/>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Startups Destacadas</h2>
            <Button variant="outline" asChild>
              <Link href="/startups">Ver todas</Link>
            </Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <VentureCapitalCard/>
            <VentureCapitalCard/>
            <VentureCapitalCard/>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}
