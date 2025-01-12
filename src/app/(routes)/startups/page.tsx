"use client"
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import StartupGrid from "@/components/ui/gridElements/StartupGrid";
import { startups } from "@/seed/seed";
import { useState } from "react";

const startupsPage = startups;

export default function StartupPage() {
  const [open, setOpen] = useState(false);

  return (
    <main className="flex-1 p-6 overflow-y-auto md:p-8">
      <div className="space-y-12">
        {/* Startups Preview */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Startups Destacadas</h2>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">+ Agregar Startup</Button>
              </DialogTrigger>
              <DialogContent className="max-w-[90%] lg:w-auto mx-auto  rounded">
                <DialogHeader>
                  <DialogTitle>Agregar Startup</DialogTitle>
                  <DialogDescription>
                    Ingrese los detalles de la nueva startup aquí.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Nombre
                    </Label>
                    <Input id="name" className="col-span-3" />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                      Web o Red social
                    </Label>
                    <Input id="description" className="col-span-3" />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    type="submit"
                    variant={"default"}
                    className="bg-blue-500 hover:bg-blue-600"
                    onClick={() => setOpen(false)}
                  >
                    Enviar
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
          <div>
            <StartupGrid startups={startupsPage} />
          </div>
        </section>
      </div>
    </main>
  );
}
