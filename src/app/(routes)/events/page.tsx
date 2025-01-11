import { Button } from "@/components/ui/button";
import { EventCard } from "@/components/ui/cards/Event";
import Link from "next/link";

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
           <Link href="https://www.google.com">
             + Agregar Venture 
           </Link>
         </Button>
       </div>
       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
         <EventCard date={20}/>
         <EventCard date={20}/>
         <EventCard date={20}/>
         <EventCard date={20}/>
         <EventCard date={20}/>
         <EventCard date={20}/>
         
       </div>
     </section>
   </div>
 </main>
 </div>
  );
}