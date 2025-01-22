"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Rocket,
  Cpu,
  BadgeDollarSign,
  Briefcase,
  Leaf,
  User,
  Palette,
  Scale,
  Building,
  GitFork,
  Server,
  Globe,
  BookOpen,
  Shield,
  BarChart,
  Mic,
  HeartHandshake,
  Terminal,
  Mail,
  FlaskConical,
  ChevronDown,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const roles = [
  {
    id: "CEO",
    icon: <Rocket className="h-3 w-3 text-purple-500" />,
    label: "CEO",
  },
  { id: "CTO", icon: <Cpu className="h-3 w-3 text-blue-500" />, label: "CTO" },
  {
    id: "CMO",
    icon: <BadgeDollarSign className="h-3 w-3 text-green-500" />,
    label: "CMO",
  },
  {
    id: "Founder",
    icon: <Briefcase className="h-3 w-3 text-orange-500" />,
    label: "Founder",
  },
  {
    id: "Investor",
    icon: <Leaf className="h-3 w-3 text-emerald-500" />,
    label: "Investor",
  },
  {
    id: "PM",
    icon: <GitFork className="h-3 w-3 text-fuchsia-500" />,
    label: "Product Manager",
  },
  {
    id: "Designer",
    icon: <Palette className="h-3 w-3 text-pink-500" />,
    label: "Design Lead",
  },
  {
    id: "Engineer",
    icon: <Terminal className="h-3 w-3 text-cyan-500" />,
    label: "Tech Lead",
  },
  {
    id: "Legal",
    icon: <Scale className="h-3 w-3 text-amber-600" />,
    label: "Legal Counsel",
  },
  {
    id: "Ops",
    icon: <Building className="h-3 w-3 text-gray-500" />,
    label: "Operations",
  },
  {
    id: "Sales",
    icon: <BarChart className="h-3 w-3 text-lime-500" />,
    label: "Sales Lead",
  },
  {
    id: "HR",
    icon: <User className="h-3 w-3 text-rose-500" />,
    label: "HR Manager",
  },
  {
    id: "Analyst",
    icon: <Globe className="h-3 w-3 text-indigo-500" />,
    label: "Data Analyst",
  },
  {
    id: "Advisor",
    icon: <HeartHandshake className="h-3 w-3 text-red-500" />,
    label: "Advisor",
  },
  {
    id: "Researcher",
    icon: <FlaskConical className="h-3 w-3 text-teal-500" />,
    label: "Researcher",
  },
  {
    id: "DevOps",
    icon: <Server className="h-3 w-3 text-violet-500" />,
    label: "DevOps",
  },
  {
    id: "Comms",
    icon: <Mic className="h-3 w-3 text-yellow-600" />,
    label: "Communications",
  },
  {
    id: "Education",
    icon: <BookOpen className="h-3 w-3 text-sky-500" />,
    label: "Education",
  },
  {
    id: "Security",
    icon: <Shield className="h-3 w-3 text-cyan-600" />,
    label: "Cybersecurity",
  },
  {
    id: "Recruiter",
    icon: <Mail className="h-3 w-3 text-amber-500" />,
    label: "Talent Acquisition",
  },
];

export function FilterBarBuilders() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const activeRoles = searchParams.getAll("role");

  const toggleRole = (role: string) => {
    const params = new URLSearchParams(searchParams);

    if (activeRoles.includes(role)) {
      params.delete("role", role);
    } else {
      params.append("role", role);
    }

    params.delete("page");
    router.replace(`${pathname}?${params.toString()}`);
  };

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams);
    params.delete("role");
    router.replace(`${pathname}?${params.toString()}`);
    setIsOpen(false);
  };

  const RoleButtons = () => (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
      {roles.map((role) => (
        <div
          key={role.id}
          onClick={() => toggleRole(role.id)}
          className="cursor-pointer"
        >
          <Button
            variant={activeRoles.includes(role.id) ? "default" : "outline"}
            size="sm"
            className={cn(
              "h-8 px-2 text-xs font-medium justify-start gap-1 w-full",
              activeRoles.includes(role.id) &&
                "border-blue-500 border text-black"
            )}
          >
            {role.icon}
            <span className="truncate">{role.label}</span>
          </Button>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full mb-4">
      {/* Desktop */}
      <div className="hidden md:block">
        <RoleButtons />
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              {activeRoles.length > 0
                ? `${activeRoles.length} filtros activos`
                : "Ver filtros"}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh]">
            <SheetHeader className="flex flex-row items-center justify-between">
              <SheetTitle>Filtros de Roles</SheetTitle>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
              ></Button>
            </SheetHeader>
            <div className="mt-4 overflow-y-auto max-h-[calc(80vh-4rem)]">
              <RoleButtons />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Clear Filters */}
      {activeRoles.length > 0 && (
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {activeRoles.length} filtros activos
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="h-6 px-2 text-xs"
            onClick={clearFilters}
          >
            Limpiar filtros
          </Button>
        </div>
      )}
    </div>
  );
}
