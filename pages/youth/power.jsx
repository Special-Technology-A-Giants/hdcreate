import Banner from "@/components/general/Banner";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import YouthImage from "@/images/youth_power.webp";

const YouthPower = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-10">
      <Banner images={YouthImage} />

      <SectionHeader title="Youth Power" />

    </PageContainer>
  );
};

export default YouthPower;
