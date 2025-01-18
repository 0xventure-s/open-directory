// components/ui/gridElements/StartupGrid.tsx

import { Startup } from "@/interface";
import StartupCard from "../cards/Startup";


interface Props {
  startups: Startup[];
}

export default function StartupGrid({ startups }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {startups.map((startup) => (
        <StartupCard key={startup.id} startup={startup} />
      ))}
    </div>
  );
}