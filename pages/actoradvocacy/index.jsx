import Banner from "@/components/general/Banner";
import PageContainer from "@/components/general/PageContainer";
import ActorAdvocacyImage from "@/images/actor_advocacy.webp";
import SectionHeader from "@/components/general/SectionHeader";

const ActorAdvocacy = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-10">
      <Banner images={ActorAdvocacyImage} />

      <SectionHeader title="Actor Advocacy" />

      <div className="flex flex-col gap-6 text-slate-600">
        
        <h2 className="uppercase font-bold">Who is an Actor Advocate?</h2>
        <ul className="pl-10 list-decimal">

            <li>Actor Advocates understand their role as the voice of the people</li>
            <li>Actor Advocates use their craft and art in service to cause and communities</li>
            <li>Actor Advocates recognize the power of craft to contribute to positive social transformation</li>
            <li>Actor Advocates write and perform powerful, socially-relevant plays</li>
            <li>Actor Advocates empower themselves by creating their own work</li>
            <li>Actor Advocates seek for ways and means to make use of the industry without being used by the industry</li>
            <li>Actor Advocates refuse to be defined actors or a people by external forces such as money or status but rather by the richness of their humanity, creativity and sense of fulfillment</li>

        </ul>
        <p className="font-medium">
          In early 2014 Hilda Dokubo (Executive Director, CREATE) and Kester Oshioreame (Coverer, Exercise Your Write) met and the idea of the Actor Advocate was born
        </p>
        <p className="font-medium">
          The centre believes that the Niger Delta communities and the theatre/film community at large are ripe for a conversation about actors, art, craft, social engagement and service. Gone are the days of actors passively going to auditions and sending out head shots. Now is the time for actors to identify active ways that they can use their craft to affect social transformation and/or create work with strong socially relevant themes
        </p>
        <p className="font-medium">
          In September 2015, Hilda Dokubo created a discussion tagged art for reform. This occasion provided the first public forum for the Actor Advocate conversation. In January 2016 the centre provided a platform to continue the discussion introducing socio-political issues to her programs
        </p>
        <p className="font-medium">The studio is interested in continuing the Actor Advocate discussion and turning it into a movement. The studio aims to continue the vital discussion that began in 2014 and invite more artists and audiences into the discussion through a series of performances, talks and events.
        </p>
      </div>

    </PageContainer>
  );
};

export default ActorAdvocacy;
