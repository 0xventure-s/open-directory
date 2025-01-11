import { Button } from "@/components/ui/button";
import StartupGrid from "@/components/ui/gridElements/StartupGrid";
import { startups } from "@/seed/seed";
import Link from "next/link";

  const startupsPage = startups

export default function StartupPage() {


  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="space-y-12">
        {/* Startups Preview */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Startups Destacadas</h2>
            <Button variant="outline" asChild>
              <Link href="https://www.google.com">
                + Agregar Startup 
              </Link>
            </Button>
          </div>
          <div>    
          
            <StartupGrid startups={startupsPage}/>
          </div>
        </section>
      </div>
    </main>
  );
}

