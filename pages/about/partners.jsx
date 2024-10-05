import Banner from "@/components/general/Banner";
import PageContainer from "@/components/general/PageContainer";
import SectionHeader from "@/components/general/SectionHeader";
import { partnerList } from "@/utils/general";
import PartnersImage from "@/images/partners.webp"

const Partners = () => {
  return (
    <PageContainer className="flex flex-col gap-10 py-10">
      <Banner images={PartnersImage} />

      <SectionHeader title="Partners" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-white gap-6">
        {partnerList.map(({link, content, className}, index)=>(
          <div className={`flex flex-col justify-center items-center gap-3 text-center p-5 py-14 ${className}`} key={index}>
            <p>{content}</p>
            {link && <a href={link.path} className="underline" target="_blank" rel="noreferrer">
              {link.label}
            </a>}
          </div>
        ))}
      </div>
    </PageContainer>
  );
};

export default Partners;
