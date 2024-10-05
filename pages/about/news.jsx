import Banner from "@/components/general/Banner";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import NewsImage from "@/images/news.webp"

const News = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-10">
      <Banner images={NewsImage} />

      <SectionHeader title="News and updates" />

      <div className="flex flex-col gap-6 text-slate-600">

        
        
            <h2 className="uppercase font-bold">Dates of the next auditions</h2>

        

            <ul className="pl-10 list-disc">

                <li>7th April 2021: Official Opening of Registrations</li>
                <li>7th April 2021: Official Opening of Registrations</li>

            </ul>
            <h2 className="uppercase font-bold">Important information for the trainees</h2>
            <p className="font-medium">Next programs setting up</p>

            <ul className="pl-10 list-disc">

                <li>Theatre and cine clubs in schools</li>
                <li>Training for young girls in storytelling for advocacy</li>
                <li>Training for parents on early warning signals about abuses on minors</li>

            </ul>
            
      </div>
    </PageContainer>
  );
};

export default News;
