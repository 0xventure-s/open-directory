import { Button } from "@/components/ui/button";
import FounderGrid from "@/components/ui/gridElements/FoundersGrid";
import { founderCards } from "@/seed/seed";
import Link from "next/link";

const founder = founderCards;

export default function StartupPage() {
  return (
    <div>
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-12">
          {/* Startups Preview */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Startups Destacadas</h2>
              <Button variant="outline" asChild>
                <Link href="https://www.google.com">+ Agregar Founder</Link>
              </Button>
            </div>
            <div>
              <FounderGrid founder={founder} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
