import Banner from "@/components/general/Banner";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import CommunityImage from "@/images/community.webp";

const Community = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-10">
      <Banner images={CommunityImage} />

      <SectionHeader title="Community development" />

      <div className="flex flex-col gap-6 text-slate-600">
        
        <h2 className="uppercase font-bold">CREATE Community Development Initiatives</h2>
        
        <p className="font-medium">
          At CREATE, through our activities in the area of Art, Media and Film Production, we work actively to build peaceful communities. We try to foster dialogue within the communities in which we intervene
        </p>
        <p className="font-medium">
          We are driven by the desire to build a close relationship with the people in the communities that work with us. Such a relationship is based on respect and mutual understanding, as well as the promotion and the development of creativity and talent. In some cases, we see ourselves as an organisation that bridges the intergenerational gap and acts as a facilitator of discussions on topics as gender equity
        </p>
        <p className="font-medium">
          For us, this is about laying the foundation for a harmonious society in Nigeria and Africa in general, while putting women and young talent in the front line.
        </p>
      </div>

    </PageContainer>
  );
};

export default Community;
