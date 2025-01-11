import { Ventures } from "@/interface";
import VentureCapitalCard from "../cards/Ventures";


interface Props{
  ventures: Ventures[]
}

export default function VentureGrid({ventures}:Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 grid-cols-1">
      {ventures.map(ventures => (
        <VentureCapitalCard key={ventures.website} ventures={ventures}/>
      ))}
    </div>
  );
}