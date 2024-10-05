import Banner from "@/components/general/Banner";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import CurriculumImage from "@/images/curriculum.webp"

const Curriculum = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-10">
      <Banner images={CurriculumImage} />

      <SectionHeader title="Curriculum & Courses" />

      <div className="flex flex-col gap-6 text-slate-600">
        
        <h2 className="uppercase font-bold">We dispose of 3 entry points within our organization for future students:</h2>
        <ul className="pl-10 list-disc">

            <li>
              
              <h2 className="uppercase font-bold">Performance and Media</h2>
              <p className="underline font-medium">Category</p>
              <p>National Innovative Diploma Entry</p>
              <p className="underline font-medium">Requirements</p>
              <p>Having 5 credits including Literature and English</p>
              <p>Approbating any of national entrance exams</p>
              <p>Passing the access auditions</p>
            </li>
            <li>
              
              <h2 className="uppercase font-bold">Direct Career Entry</h2>
              <p className="underline font-medium">Category</p>
              <p>National Diploma</p>
              <p className="underline font-medium">Requirements</p>
              <p>1 year of work experience as a production artist (e.g. assistant, minor roles or extras etc.)</p>
              <p>Having any background in literature, including English</p>
              <p>Experiencing a change of career</p>
            </li>
            <li>
              
              <h2 className="uppercase font-bold">CREATE Certified</h2>
              <p className="underline font-medium">Category</p>
              <p>Certificate </p>
              <p className="underline font-medium">Admitted Profiles</p>
              <p>People of all ages (children to adults)</p>
              <p>Talented, teachable, ready to learn</p>
              <p className="underline font-medium">Requirements</p>
              <p>Pass the set of auditions, even if they don’t have to acquire any former knowledge or schools certificate in link with the profession</p>
            </li>

        </ul>

        <h2 className="uppercase font-bold">Our goal is to release to the market professional and blooming actors for theatres, films and television. In order to meet this objective, we have at our disposal different safety policies:</h2>
        <ul className="pl-10 list-disc">

            <li>Children protection policy</li>
            <li>Safety Policies</li>
            <li>Use of materials</li>

        </ul>
      </div>

      <div className="flex items-center gap-8">
        <p>Registration fees</p>

        <button className="text-white font-medium bg-primary py-2 px-7">Click Here</button>
      </div>

    </PageContainer>
  );
};

export default Curriculum;
