import { useEffect, useState } from "react";
import { getPeople } from "../../services";
import { PeopleProps } from "../../types/people";
import PeopleCard from "../card/PeopleCard";

const TopPeople = () => {
  const [data, setData] = useState<PeopleProps[]>([]);

  useEffect(() => {
    const fechPeople = async () => {
      try {
        const response = await getPeople();
        setData(response);
      } catch (error) {
        console.error(error);
      }
    };
    fechPeople();
  }, []);

  return (
    <section className="w-full bg-darkPrimary px-8 py-8 text-white">
      <h2 className="font-sans text-xl font-medium">Top People</h2>

      <div className="flex w-full items-center gap-4 overflow-x-auto overflow-y-hidden">
        {data.map((people) => (
          <PeopleCard
            key={people.id}
            id={people.id}
            name={people.name}
            popularity={people.popularity}
            known_for_department={people.known_for_department}
            profile_path={people.profile_path}
          />
        ))}
      </div>
    </section>
  );
};

export default TopPeople;
