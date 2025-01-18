'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Globe, Heart, Book, ShoppingCart, Leaf, Car, Cpu, Home, Camera, Shield, Ticket, Users, Settings, Rocket, TrendingUp, Tractor, ChevronDown } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface FilterCategory {
  icon: React.ReactNode
  label: string
  id: string
}

const filterCategories: FilterCategory[] = [
  { icon: <Globe className="h-3 w-3 text-blue-500" />, label: "Fintech", id: "fintech" },
  { icon: <Heart className="h-3 w-3 text-red-500" />, label: "Healthtech", id: "healthtech" },
  { icon: <Book className="h-3 w-3 text-yellow-500" />, label: "Edtech", id: "edtech" },
  { icon: <ShoppingCart className="h-3 w-3 text-green-500" />, label: "Ecommerce", id: "ecommerce" },
  { icon: <Leaf className="h-3 w-3 text-green-400" />, label: "Greentech", id: "greentech" },
  { icon: <Car className="h-3 w-3 text-gray-500" />, label: "Mobility", id: "mobility" },
  { icon: <Cpu className="h-3 w-3 text-indigo-500" />, label: "AI & Data", id: "aidata" },
  { icon: <Home className="h-3 w-3 text-orange-500" />, label: "PropTech", id: "proptech" },
  { icon: <Camera className="h-3 w-3 text-purple-500" />, label: "MediaTech", id: "mediatech" },
  { icon: <Shield className="h-3 w-3 text-teal-500" />, label: "Cybersecurity", id: "cybersecurity" },
  { icon: <Ticket className="h-3 w-3 text-pink-500" />, label: "TicketTech", id: "tickettech" },
  { icon: <Users className="h-3 w-3 text-blue-400" />, label: "CommunityTech", id: "communitytech" },
  { icon: <Settings className="h-3 w-3 text-gray-400" />, label: "Technology", id: "technology" },
  { icon: <Tractor className="h-3 w-3 text-amber-700" />, label: "AgriTech", id: "agritech" },
  { icon: <Rocket className="h-3 w-3 text-yellow-400" />, label: "Startups", id: "startups" },
  { icon: <TrendingUp className="h-3 w-3 text-green-600" />, label: "Growth", id: "growth" }
]

export function FilterStartups() {
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)

  const toggleFilter = (filterId: string) => {
    setActiveFilters(prev => 
      prev.includes(filterId) 
        ? prev.filter(id => id !== filterId)
        : [...prev, filterId]
    )
  }

  const clearFilters = () => {
    setActiveFilters([])
    setIsOpen(false)
  }

  const FilterButtons = () => (
    <div className="grid grid-cols-2 sm:grid-cols-10 sm:gap-0 sm:gap-y-2 gap-2">
      {filterCategories.map((category) => (
        <Button
          key={category.id}
          variant="outline"
          size="sm"
          onClick={() => toggleFilter(category.id)}
          className={cn(
            "h-8 sm:w-32 px-2 text-xs font-medium justify-start",
            activeFilters.includes(category.id) && "border-blue-600 text-black"
          )}
        >
          {category.icon}
          <span className="ml-1 truncate">{category.label}</span>
        </Button>
      ))}
    </div>
  )

  return (
    <div className="w-full mb-4">
      {/* Desktop version */}
      <div className="hidden md:block">
        <FilterButtons />
      </div>

      {/* Mobile version */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="w-full justify-between">
              {activeFilters.length > 0 ? `${activeFilters.length} filtros activos` : "Ver filtros"}
              <ChevronDown className="h-4 w-4 ml-2" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh]">
            <SheetHeader className="flex flex-row items-center justify-between">
              <SheetTitle>Filtros</SheetTitle>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
               
              </Button>
            </SheetHeader>
            <div className="mt-4 overflow-y-auto max-h-[calc(80vh-4rem)]">
              <FilterButtons />
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Active filters count and clear button */}
      {activeFilters.length > 0 && (
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {activeFilters.length} filtros activos
          </span>
          <Button 
            variant="outline" 
            size="sm"
            className="h-6 px-2 text-xs"
            onClick={clearFilters}
          >
            Limpiar filtros
          </Button>
        </div>
      )}
    </div>
  )
}
