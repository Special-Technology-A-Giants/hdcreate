import Banner from "@/components/general/Banner";
import DonateForm from "@/components/general/DonateForm";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import DonateImage from "@/images/donate.webp"

const Donate = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-10">
      <Banner images={DonateImage} />

      <SectionHeader title="Donate" />

      <div className="flex flex-col gap-6 text-slate-600">

        
        
        <h2 className="uppercase font-bold">Why CREATE Needs your donations</h2>

        <p className="">
          We work with people who do not have the financial means to access the quality of the training we offer. It is to support these people that you make a donation to CREATE, to give them the opportunity to enter a learning space that will highlight their creativity, allow them to develop their talent and open the way to a professional career.
        </p>
        <h2 className="uppercase font-bold">How to donate?</h2>
        <p className="font-medium">
          You can donate via PayPal, PayStack, see below

        </p>
         
      </div>

      <div className="flex justify-center">

        <div className="w-full max-w-[500px]">
          <DonateForm />
        </div>

      </div>
    </PageContainer>
  );
};

export default Donate;
