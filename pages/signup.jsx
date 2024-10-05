import Banner from "@/components/general/Banner";
import PageContainer from "@/components/general/PageContainer";
import Registration from "@/components/general/Registration";
import SectionHeader from "@/components/general/SectionHeader";
import SignUpImage from "@/images/signup.webp"

const SignUp = () => {
  return <PageContainer className="flex flex-col gap-10 py-10">
      <Banner images={SignUpImage} />

      <SectionHeader title="Sign Up" />

      <div className="flex flex-col gap-6 text-slate-600">
        <p className="">
          Have you always wanted to pursue acting but didn&apos;t know how to
          begin? Are you a professional actor frustrated by classes that
          don&apos;t make you a better, more employable actor? We offer very
          focused but fun classes for beginners, intermediate actors (perhaps
          transitioning from another area of the arts), and advanced
          professionals
        </p>
        <p className="">
          The Hilda Dokubo Acting Studios’ philosophy is that artists can draw
          upon all different acting techniques and form an individual toolbox,
          their own Golden Box. We will help you to develop your own “Golden
          Box” of techniques and tools.
        </p>


      </div>
    
        <Banner />

      <div className="self-center max-w-[550px] w-full">
        <Registration />
      </div>
    </PageContainer>;
};

export default SignUp;
