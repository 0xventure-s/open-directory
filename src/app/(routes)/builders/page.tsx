// app/builders/page.tsx
import { getPersons } from "@/actions/startups";
import { Button } from "@/components/ui/button";
import { FilterBarBuilders } from "@/components/ui/filterBar/FilterBarBuilders";
import FounderGrid from "@/components/ui/gridElements/FoundersGrid";
import Link from "next/link";

// Tipo para los searchParams
interface BuildersPageProps {
  searchParams: Promise<{
    role?: string | string[];
  }>;
}

export default async function BuildersPage({ searchParams }: BuildersPageProps) {
  // Resolver la promesa de searchParams
  const params = await searchParams;
  
  // Normalizar los roles a un array
  const roles = Array.isArray(params?.role) 
    ? params.role 
    : params?.role 
      ? [params.role] 
      : [];

  const persons = await getPersons({ roles });

  return (
    <div>
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="space-y-12">
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Builders Destacados</h2>
              <Button variant="outline" className="border-blue-200" asChild>
                <Link href="https://www.google.com">+ Agregar Builders</Link>
              </Button>
            </div>
            
            <FilterBarBuilders />
            
            <div className="mt-4">
              <FounderGrid person={persons} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}