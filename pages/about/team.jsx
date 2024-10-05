import Banner from "@/components/general/Banner";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import TeamImage from "@/images/team.webp"

const About = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-10">
      <Banner images={TeamImage} />

      <SectionHeader title="Team" />

      
    </PageContainer>
  );
};

export default About;
