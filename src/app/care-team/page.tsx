import Image from "next/image";
import Therapist1  from '../../assets/images/therapist1.jpg';
import Therapist2  from '../../assets/images/therapist2.jpg'
import Therapist3  from '../../assets/images/therapist3.jpg'
const therapists = [
  { id: 1, name: "Therapist One", imageUrl: Therapist1 },   
  { id: 2, name: "Therapist Two", imageUrl: Therapist2 },
  { id: 3, name: "Therapist Three", imageUrl: Therapist3 },
  { id: 4, name: "Therapist Three", imageUrl: Therapist3 },
  // Add more therapists here
];

const CareTeam = () => {
  return (
    <>
     <h1 className="font-antic text-[#283C63] text-[30px] leading-[1.2em] mb-[25px] lg:text-[40px] lg:mb-[50px]">
     Care Team
    </h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-[20px] gap-y-[20px] lg:gap-y-[40px]">
      {therapists.map((therapist) => (
        <div key={therapist.id} className="">
          <Image src={therapist.imageUrl} alt={therapist.name} className="rounded-[20px] w-full aspect-square cover" />
          <h4 className="mt-4 font-gotham">{therapist.name}</h4>
        </div>
      ))}
    </div>
    </>
  );
}; 

export default CareTeam;
