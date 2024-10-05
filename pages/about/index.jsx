import Banner from "@/components/general/Banner";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import AboutImage from "@/images/about_create.webp"

const About = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-10">
      <Banner images={AboutImage}  />

      <SectionHeader title="Create"/>

      <div className="flex flex-col gap-6 text-slate-600">

        <p className="font-medium">
          The Centre For Creative Arts Education (CREATE) is a non-profit organization dedicated to moulding lives and crafting the future.
        </p>
        <p className="font-medium">
          For us at the centre, growth as an actor and as a human being is synonymous with the development of communities and humanity.
        </p>
        <p className="font-medium">
          Our works are focused on the development of the most vulnerable but talented in our communities, which includes: the girl child, women and young people from poor and/or post-conflict communities.
        </p>
        <p className="font-medium">
          We therefore create a safe environment free from fear and discrimination where creativity is encouraged and talent is developed into skills for sustainable wealth, socio-political change and the courage to lead.
        </p>
        <p className="font-medium">
          Through a well-structured curriculum and a repertoire of professionals as trainers and mentors, we nurture talents into skills.
        </p>
      </div>
    </PageContainer>
  );
};

export default About;
