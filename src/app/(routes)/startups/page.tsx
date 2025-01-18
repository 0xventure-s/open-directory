
import { FilterStartups } from "@/components/filters/StartupFilters";
import StartupGrid from "@/components/ui/gridElements/StartupGrid";

import { Startup } from "@/interface";
import { getStartups } from "@/pagination/startups";

export default async function StartupPage() {
  const startups: Startup[] = await getStartups();

  return (
    <main className="flex-1 p-4 overflow-y-auto md:p-6 lg:p-8">
      <div className="space-y-4 md:space-y-6">
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl md:text-2xl font-bold">Startups Destacadas</h2>
          </div>
          <FilterStartups />
          <div className="mt-4">
            <StartupGrid startups={startups} />
          </div>
        </section>
      </div>
    </main>
  );
}

