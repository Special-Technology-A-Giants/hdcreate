import Banner from "@/components/general/Banner";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import { activitiesList } from "@/utils/general";
import ActivitiesImage from "@/images/activities.webp";

const Activities = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-10">
      <Banner images={ActivitiesImage} />

      <SectionHeader title="Activites" />

      <p className="font-medium">
          At CREATE, we have a host of activities geared towards women at all stage; child, teenage, young adult and mature women.
        </p>

        <div className="grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

            {activitiesList.map(({content, className}, index)=>(
                <div className={`flex justify-center items-center h-[220px] text-white font-bold ${className}`} key={index}>

                    <p>{content}</p>

                </div>
            ))}

        </div>

    </PageContainer>
  );
};

export default Activities;
