import Banner from "@/components/general/Banner";
import PageContainer from "@/components/general/PageContainer";
import Registration from "@/components/general/Registration";
import GetInvolvedImage from "@/images/get_involved.webp"
import SectionHeader from "@/components/general/SectionHeader";

const GetInvolved = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-10">
      <Banner images={GetInvolvedImage} />

      <SectionHeader title="Get Involved" />

      <div className="flex flex-col gap-3 text-slate-600">
        <h2 className="uppercase font-bold">At CREATE, opportunities abound for you to get involved. You can sign up here for the programs by booking online or you can become one of CREATE&apos;s volunteers by registering here</h2>
        <h2 className="uppercase font-bold">Benefits of becoming a Volunteer at CREATE</h2>

        <ul className="pl-10 list-disc">

            <li>Being part of CREATE as a volunteer is an opportunity to</li>
            <li>Get the first to know about the viability of the programs</li>
            <li>Interact with the communities</li>
            <li>Develop project management skills</li>
            <li>Access to internships with partner organizations & institutions</li>
            <li>Become at the end of the day a professional trainer within our organization</li>
            <li>Gain in experience and credit face to producers, directors and agencies owners</li>

        </ul>

        
      </div>

      <div className="self-center max-w-[550px] w-full">
        <Registration />
      </div>
    </PageContainer>
  );
};

export default GetInvolved;
