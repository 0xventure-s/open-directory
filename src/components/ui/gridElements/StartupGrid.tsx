import { Startup } from "@/interface";
import StartupCard from "../cards/Startup";

interface Props {
  startups: Startup[];
}

export default function StartupGrid({ startups }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
      {startups.map((startup) => (
        <StartupCard key={startup.name} startup={startup} />
      ))}
    </div>
  );
}
