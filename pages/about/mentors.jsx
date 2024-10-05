import Banner from "@/components/general/Banner";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import { mentorsList } from "@/utils/general";
import Image from "next/image";
import ActivitiesImage from "@/images/mentors.webp";

const MentorCard = ({name, descriptions, image}) => {

    return(
        <div className="flex flex-col gap-6">
            <h2 className="font-bold text-lg md:text-xl">{name}</h2>

            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">

                <div className="w-[150px] h-[150px] bg-slate-100 text-black">
                    <Image src={image} alt={name} />
                </div>

                <div className="flex-1 flex flex-col gap-6">

                    {descriptions && (Array.isArray(descriptions)? descriptions.map((content, index)=>(
                        <p className="text-slate-300" key={index}>{content}</p>
                    )) : descriptions )}

                </div>


            </div>
        </div>
    )

}

const Mentors = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-10">
      <Banner images={ActivitiesImage} />

      <SectionHeader title="Mentors & Trainers" />

      <div className="bg-primary text-white p-10 md:p-20 flex-col flex gap-10 md:gap-20">

        {mentorsList.map((details, index)=>(
            <MentorCard {...details} key={index} />
        ))}

      </div>

      
    </PageContainer>
  );
};

export default Mentors;
