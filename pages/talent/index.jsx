import Banner from "@/components/general/Banner";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import TalentImage from "@/images/talent.webp"

const ActorAdvocacy = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-10">
      <Banner images={TalentImage} />

      <SectionHeader title="Talent's Programs" />

      <div className="flex flex-col gap-6 text-slate-600">
        
        <h2 className="uppercase font-bold">CREATE Talents Programs</h2>
        <p className="font-medium">
          At CREATE, we train professional and amateur actors by dispensing courses for kids, young as well as senior actors. Our courses are designed to meet the individual needs, and they fit to the industries requirements, training and development.
        </p>
        <p className="font-medium">
          We create a safe, inclusive and secure environment of learning, by setting up small and age appropriate classes. We run a well-structured curriculum, we have a team a professional trainers and mentors. Our organization is self-sufficient and its makes creativity and innovation easy and fun. We enable our talented artists to connect with the rest of the world.
        </p>
        <p className="font-medium">
          For us at CREATE, growths as a creative and as a human being are synonymous with the development of communities and humanity. Our programs or long courses can help anyone of any age, or ability develop new skills or pursue a particular passion, uncover innate talent or unleash your inner entrepreneurial zeal.
        </p>
        <p className="font-medium">
          We work with you to follow your dreams improve your career prospects, to start that creative business or change your creative direction. Our outstanding reputation and integrity for excellence, and our collaborative relationships give us real influence and stability.
        </p>
        <h2 className="uppercase font-bold">Student&apos;s benefits</h2>
        <ul className="pl-10 list-decimal">

            <li>National of the Best Acting Class: get satisfied as a performer</li>
            <li>Form part of a educational centre accredited and licensed by National Board of Education</li>
            <li>Get a chance to work own productions, by having the opportunity to develop a first project as a media person with us</li>
            <li>Be recommended to renowned companies in the industry (producers, directors and agencies owners)</li>

        </ul>
        <h2 className="uppercase font-bold">Admissions Rules</h2>
        <ul className="pl-10 list-decimal">

            <li>Registration is non-transferable and non-refundable fee</li>
            <li>Payments: training fees should be paid two weeks prior start of date, except when implement plan has been approved</li>
            <li>Admission process through register</li>
            <li>All applicants should pass their pre try out admission</li>

        </ul>
        <p className="font-medium">
          The centre reserves the right to accept or deny admissions.
        </p>
        <p className="font-medium">
          All applications for minors should be done by a parent or a guardian/teacher and accompanied by a consent note signed by them. As for young adults, (between 16 and 18 years old included) the student-to-be himself/herself must sign a compliance agreement. In addition to his/her signature, another person (a responsible adult) should sign as guarantor.
        </p>
      </div>

    </PageContainer>
  );
};

export default ActorAdvocacy;
