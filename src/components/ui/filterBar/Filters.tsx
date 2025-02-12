"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Globe,
  Heart,
  Book,
  ShoppingCart,
  Car,
  Cpu,
  Home,
  Camera,
  Shield,
  Rocket,
  Tractor,
  ChevronDown,
  Move,
  Server,
  WebhookIcon,
  Pizza,
  FrameIcon,
  Dna,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface FilterCategory {
  icon: React.ReactNode;
  label: string;
  id: string;
}

const filterCategories: FilterCategory[] = [
  {
    icon: <FrameIcon className="h-3 w-3 text-pink-500" />,
    label: "EmergingTech",
    id: "EmergingTech",
  },
  {
    icon: <Globe className="h-3 w-3 text-blue-500" />,
    label: "Fintech",
    id: "Fintech",
  },
  {
    icon: <Dna className="h-3 w-3 text-green-400" />,
    label: "BioTech",
    id: "BioTech",
  },
  {
    icon: <Heart className="h-3 w-3 text-red-500" />,
    label: "HealthTech",
    id: "HealthTech",
  },
  {
    icon: <Tractor className="h-3 w-3 text-amber-700" />,
    label: "AgroTech",
    id: "AgroTech",
  },
  {
    icon: <Car className="h-3 w-3 text-gray-500" />,
    label: "LogisticsTech",
    id: "LogisticsTech",
  },
  {
    icon: <Book className="h-3 w-3 text-yellow-500" />,
    label: "EdTech",
    id: "EdTech",
  },
  {
    icon: <Shield className="h-3 w-3 text-teal-500" />,
    label: "CyberSecurity",
    id: "CyberSecurity",
  },
  {
    icon: <Home className="h-3 w-3 text-orange-500" />,
    label: "PropTech",
    id: "PropTech",
  },
  {
    icon: <Cpu className="h-3 w-3 text-indigo-500" />,
    label: "Blockchain",
    id: "Blockchain",
  },
  {
    icon: <Rocket className="h-3 w-3 text-yellow-400" />,
    label: "SaaS",
    id: "SaaS",
  },
  {
    icon: <Server className="h-3 w-3 text-green-600" />,
    label: "AI/ML",
    id: "AI/ML",
  },
  {
    icon: <Camera className="h-3 w-3 text-purple-500" />,
    label: "Hardware + SaaS",
    id: "Hardware + SaaS",
  },
  {
    icon: <Move className="h-3 w-3 text-gray-400" />,
    label: "Mobility",
    id: "Mobility",
  },
  {
    icon: <ShoppingCart className="h-3 w-3 text-green-500" />,
    label: "Ecommerce",
    id: "Ecommerce",
  },
  {
    icon: <WebhookIcon className="h-3 w-3 text-blue-500" />,
    label: "InfrastructureTech",
    id: "InfrastructureTech",
  },
  {
    icon: <Pizza className="h-3 w-3 text-red-400" />,
    label: "FoodTech",
    id: "FoodTech",
  },
];

export function FilterBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const activeFilters = searchParams.getAll("marketType");

  const toggleFilter = (filterId: string) => {
    const params = new URLSearchParams(searchParams);

    if (activeFilters.includes(filterId)) {
      params.delete("marketType", filterId);
    } else {
      params.append("marketType", filterId);
    }

    params.delete("page"); // Resetear paginación
    router.replace(`${pathname}?${params.toString()}`);
  };

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("marketType");
    router.replace(`${pathname}?${params.toString()}`);
    setIsOpen(false);
  };

  const FilterButtons = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
      {filterCategories.map((category) => (
        <div
          key={category.id}
          onClick={() => toggleFilter(category.id)}
          className="cursor-pointer"
        >
          <Button
            variant={
              activeFilters.includes(category.id) ? "default" : "outline"
            }
            size="sm"
            className={cn(
              "h-8 px-2 text-xs font-medium justify-start gap-1 w-full ",
              activeFilters.includes(category.id) &&
                "border-blue-500 border text-black"
            )}
            aria-label={`Filtrar por ${category.label}`}
          >
            {category.icon}
            <span className="truncate">{category.label}</span>
          </Button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full mb-4">
      {/* Versión desktop */}
      <div className="hidden md:block">
        <FilterButtons />
      </div>

      {/* Versión mobile */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              {activeFilters.length > 0
                ? `${activeFilters.length} filtros activos`
                : "Ver filtros"}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh]">
            <SheetHeader className="flex flex-row items-center justify-between">
              <SheetTitle>Filtros</SheetTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar filtros"
              ></Button>
            </SheetHeader>
            <div className="mt-4 overflow-y-auto max-h-[calc(80vh-4rem)]">
              <FilterButtons />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Contador de filtros activos */}
      {activeFilters.length > 0 && (
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {activeFilters.length} filtros activos
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 px-2 text-xs"
            onClick={clearFilters}
            aria-label="Limpiar filtros"
          >
            Limpiar filtros
          </Button>
        </div>
      )}
    </div>
  );
}
