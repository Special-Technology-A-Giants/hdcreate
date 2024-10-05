import Banner from "@/components/general/Banner";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import HildaImage from "@/images/hilda.webp";

const HildaDokubo = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-10">
      <Banner images={HildaImage} />

      <SectionHeader title="Hilda Dokubo" />

      <div className="flex flex-col gap-6 text-slate-600">

        
        
        <h2 className="uppercase font-bold">Founder Hilda Dokubo</h2>

        <p className="font-medium">
          ACTOR, TEACHER, PHILANTHROPIST, ACTIVIST
        </p>
        <p className="font-medium">
          Hilda Dokubo is a Nigerian award-winning film actress, activist and youth advocate who once served as special adviser on youth affairs to Peter Odili, a former governor of Rivers State
        </p>

        <ul className="pl-10 list-disc">

            <li>Over 25 years of professional acting experience</li>
            <li>Multi-award winning Nollywood superstar</li>
            <li>Former special adviser on youth affairs to a state governor</li>
            <li>Mentors kids and teens</li>
            <li>Theatre and studio professional</li>

        </ul>
        <p className="font-medium">
          Hilda Dokubo is an actress, activist, talent scout and acting coach, life skills trainer, conference speaker and mentor. She is the executive director of the Centre for Creative Arts Education, which is a one stop support centre for women and youths were art forms are used to educate, engage and empower youths and women in communities especially post conflict communities.
        </p>
        <p className="font-medium">
          Her works are aimed at building communities free from fear, discrimination and poverty; where talent and creative thinking is encouraged and translated into skills and the courage to lead and make positive decisions.
        </p>
        <p className="font-medium">
          Working with individuals, institutions and organisations each year 600 young people are trained in different crafts, 35 women are supported to set up and start-up small business, 4 schools are visited weekly and provided leadership training, young people are encouraged to lead as they are provided these opportunities through out our programs.
        </p>
        <p className="font-medium">
          Yearly 50 young people are selected for a mentorship/coaching program where they work with successful people in the careers of their choice.
        </p>
      </div>
    </PageContainer>
  );
};

export default HildaDokubo;
