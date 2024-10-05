import Banner from "@/components/general/Banner";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import WomenImage from "@/images/women_empowerment.webp";

const WomenEmpowerment = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-10">
      <Banner images={WomenImage} />

      <SectionHeader title="Women Empowerment" />

      <div className="flex flex-col gap-6 text-slate-600">
        
        <h2 className="uppercase font-bold">CREATE Women Empowerment Initiatives</h2>
        
        <p className="font-medium">
          At CREATE, we put women at the heart of our activities by raising their awareness around certain social and health issues. We also assist them at different levels, so that they can gain financial autonomy and participate actively in building their community. We create workshops and discussion spaces in order to exchange with them regarding the difficulties they encounter on a daily basis. The dialogue covers various topics, including
        </p>
        <ul className="pl-10 list-disc">

            <li>Sexually transmitted diseases (with a focus on HIV-AIDS)</li>
            <li>Gender-based violence</li>
            <li>Sexual abuses and physical aggression</li>

        </ul>
        <p className="font-medium">
          On the social level, we encourage these women to initiate a dialogue in order to create and maintain a climate of exchange that is peaceful and respectful. On the economic level, we finance their professional projects, so that they can set up and run their own business. We provide training in the following areas:
        </p>
        <ul className="pl-10 list-disc">

            <li>Project management skills</li>
            <li>Financial management</li>
            <li>Tasks organization</li>

        </ul>
        <p className="font-medium">
          At CREATE, we put women at the center of our activities. We empower and educate them, so that they can generate a minimum income to support their families..
        </p>
      </div>

    </PageContainer>
  );
};

export default WomenEmpowerment;
