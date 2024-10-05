import Banner from "@/components/general/Banner";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import YouthImage from "@/images/youth_talent.webp";

const YouthTalent = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-10">
      <Banner images={YouthImage} />

      <SectionHeader title="Youth Talent" />

      <div className="flex flex-col gap-6 text-slate-600">
        
        <h2 className="uppercase font-bold">Become an actor who is totally…</h2>
        
        <p className="font-medium">
          ALIVE - You will learn to bring a new depth of personal meaning to your work.
        </p>
        <p className="font-medium">
          EXPRESSIVE - You will claim great freedom as you learn to get out of your own way.
        </p>
        <p className="font-medium">
          SPONTANEOUS - You will begin to follow your instinct as you become truly responsive.
        </p>
        <p className="font-medium">
          AVAILABLE - You will discover a deep sensitivity to the actors you work with.
        </p>
        <p className="font-medium">
          PRESENT - You will strengthen your ability to be fully attentive to every moment.
        </p>
        <p className="font-medium">
          TRUE - You will gain the rare ability to be simple and authentic.
        </p>
      </div>

    </PageContainer>
  );
};

export default YouthTalent;
