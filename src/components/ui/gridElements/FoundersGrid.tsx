
import { Persons } from "@/interface";
import FounderCard from "../cards/Founder";


interface Props {
    person:Persons[]
}

export default function FounderGrid({person}:Props) {
  return (
    <div  className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 grid-cols-1">
      {person.map((person) => (
        <FounderCard key={person.image} person={person}/>
      ) )}
    </div>
  );
}