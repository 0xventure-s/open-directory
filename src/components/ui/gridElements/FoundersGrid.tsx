import { FounderCards } from "@/interface";
import FounderCard from "../cards/Founder";


interface Props {
    founder:FounderCards[]
}

export default function FounderGrid({founder}:Props) {
  return (
    <div  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
      {founder.map((founder) => (
        <FounderCard key={founder.image} founder={founder}/>
      ) )}
    </div>
  );
}