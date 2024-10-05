import Banner from "@/components/general/Banner";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import YouthImage from "@/images/youth.webp"

const Youth = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-10">
      <Banner images={YouthImage} />

      <SectionHeader title="Youth Initiatives" />

      <div className="flex flex-col gap-6 text-slate-600">
        
        <h2 className="uppercase font-bold">CREATE Youth Initiatives</h2>
        
        <p className="font-medium">
          Through the different programs we offer, we focus on the talent and career development of young people in Nigerian society
        </p>
        <p className="font-medium">
          Our objective is to coach these young talents through both their professional and personal development. It is not only a question of putting high-level professional artists on the work market, but also of highlighting their personalities and their own blooming
        </p>
        <p className="font-medium">
          With this idea in mind, we give free rein to creativity and self-expression within our organisation, while ensuring that respect, tolerance and goodwill remain at the centre of all of the interactions.
        </p>
      </div>

    </PageContainer>
  );
};

export default Youth;
