import Banner from "@/components/general/Banner";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import MissionImage from "@/images/missions.webp";

const Mission = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-10">
      <Banner images={MissionImage} />

      <SectionHeader title="Mission & Values" />

      <div className="flex flex-col gap-6 text-slate-600">
        
        <h2 className="uppercase font-bold">Our Mission</h2>

        <p className="font-medium">
          Our mission is to build a Nigerian society without poverty, discrimination and fear; where talents and creative thinking are encouraged and translated into sustainable wealth and the courage to lead and make innovative, positive decisions.
        </p>
        <h2 className="uppercase font-bold">Our Process</h2>
        <p className="font-medium">
          The Centre Operates the 3 E-model: <br />Educate <br />Engage <br />Empower.
        </p>
        <h2 className="uppercase font-bold">Our Commitment</h2>
        <p className="font-medium">
          We will love you unconditionally.<br />We will teach you uncompromisingly.<br />We will encourage you unceasingly.
        </p>
      </div>
    </PageContainer>
  );
};

export default Mission;
