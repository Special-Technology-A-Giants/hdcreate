import Banner from "@/components/general/Banner";
import PageContainer from "@/components/general/PageContainer";
import Registration from "@/components/general/Registration";
import SectionHeader from "@/components/general/SectionHeader";

const Courses = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-10">

      <SectionHeader title="Course List" />

      <div className="flex flex-col gap-3 text-slate-600">

        <h2 className="text-center my-20">No Available Programs</h2>
       

        
      </div>
    </PageContainer>
  );
};

export default Courses;
