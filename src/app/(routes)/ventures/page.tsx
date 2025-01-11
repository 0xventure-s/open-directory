import { Button } from "@/components/ui/button";
import VentureGrid from "@/components/ui/gridElements/VenturesGrid";
import { ventures } from "@/seed/seed";
import Link from "next/link";

const venturesCapitals = ventures

export default function VenturePage() {
  return (
    <div>
       <main className="flex-1 p-6 overflow-y-auto">
      <div className="space-y-12">
        {/* Startups Preview */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Startups Destacadas</h2>
            <Button variant="outline" asChild>
              <Link href="https://www.google.com">
                + Agregar Venture 
              </Link>
            </Button>
          </div>
          <div >
            <VentureGrid ventures={venturesCapitals}/>
          </div>
        </section>
      </div>
    </main>
    </div>
  );
}