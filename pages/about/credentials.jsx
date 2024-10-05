import Banner from "@/components/general/Banner";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import CredentialImage from "@/images/credentials.webp"

const Credentials = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-10">
      <Banner images={CredentialImage} />

      <SectionHeader title="Credentials" />

      <div className="flex flex-col gap-6 text-slate-600">
        
        <h2 className="uppercase font-bold">Academic Institutions</h2>

        <ul className="pl-10 list-disc">

            <li>Information to be updated soon</li>

        </ul>

        <h2 className="uppercase font-bold">Government Administrations</h2>

        <ul className="pl-10 list-disc">

            <li>National Board for Technical Education (NBTE) enlisted in the Joint Admission and Matriculation Board (JAMB)</li>

        </ul>
      </div>
    </PageContainer>
  );
};

export default Credentials;
