import { Persons } from "@/interface";
import FounderCard from "../cards/Founder";


interface Props {
    person:Persons[]
}

export default function FounderGrid({person}:Props) {
  return (
    <div className="relative">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 grid-cols-1">
        {person.map((person) => (
          <FounderCard key={person.image} person={person}/>
        ))}
      </div>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md z-10">
        <h2 className="text-white text-3xl font-bold">Próximamente</h2>
      </div>
    </div>
  );
}