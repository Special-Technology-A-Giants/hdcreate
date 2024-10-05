import PageContainer from "@/components/general/PageContainer"
import Registration from "@/components/general/Registration";
import { FordFoundationLogo, OrangeBrigadeAd, OrangeBrigadeImage1, OrangeBrigadeInnerBannerImage2 } from "@/images";
import { orangeBrigadeImage, orangeBrigadeImageSlide } from "@/utils/general";
import Image from "next/image";
import Slider from "react-slick";

const OrangeBrigade = () => {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    const simpleSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true
    };
    return <PageContainer className="py-10 flex flex-col gap-10">
            <Slider {...settings}>

                {orangeBrigadeImage.map((image, index)=>(
                    <div className="h-[350px] relative" key={image}>
                        <Image src={image} alt="orange brigade" fill className="object-cover" />
                    </div>

                ))}
                
            </Slider>

            <h2 className="text-secondary text-center text-lg md:text-2xl"> We all wish to live in a world without violence. Orange Brigade is a project that uses cinema as its main advocacy and awareness tool.</h2>

            <video className="bg-slate-200" />

            <p className="text-secondary text-center md:text-lg">Orange Brigade is a thought-provoking and eye-opening initiative that aims to deal with the alarming increase in violence against women and children. It is a program of CREATE which strives to change lives by employing the use of cinema as a beneficial tool for spreading awareness about this issue. This program aims to not only raise awareness about the issue but also help people find a solution to it.</p>

            <Slider {...simpleSettings}>

                {orangeBrigadeImageSlide.map((image, index)=>(
                    <div className="relative h-[450px]" key={index}>
                        <Image src={image} className="object-cover" fill quality={100} alt="orange brigade" />
                    </div>

                ))}
            </Slider>
            
            <p className="text-secondary text-center md:text-lg">Orange Brigade aims to stop violence, create awareness, and show people the story of gender based violence around them, with the ultimate goal of change in mind. Our movies and workshops are designed for sensitizing people about gender based violence against women and children.</p>

            <div className="grid grid-cols-1 md:grid-cols-3">

                <Image src={OrangeBrigadeImage1} alt="" />
                <Image className="self-center" src={FordFoundationLogo} alt="" />
                <Image src={OrangeBrigadeInnerBannerImage2} alt="" />

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="">
                    <p className="text-secondary text-center md:text-left">
                        In so many ways, Nigeria is failing its female citizens. To stop gender-based abuse and safeguard its most vulnerable citizens, it is imperative that responsible citizenry support the government by taking action quickly following the recent wave of violence. It&apos;s the same narrative everywhere you look: women and girls have been brutally attacked, whether they&apos;re in refugee camps or states all throughout the country.
                    </p>
                    <p className="text-secondary text-center md:text-left">
                        The current covid-19 epidemic has resulted in higher levels of violence against women and girls, according to the Nigerian Police, which recorded over 1000 reported rape crimes between January and May 2022. In addition, there are a larger number of survivors who opted to remain silent, scared of the perpetrator(s) and much more afraid of a society where rape culture and victim-blaming are common. There have been marches by various groups to protest the rape and killings of multiple women and children, all victims of rape and violence. It was as a result of this movement that the Orange Brigade was formed to better inform and prepare our children by torch lighting the issues through theatre and cine
                    </p>
                </div>

                <video src="" controls />

                <Image src={OrangeBrigadeAd} alt="" />

            </div>

            <div className="flex justify-center">

                <div className="w-full max-w-[500px]">

                    <Registration />

                </div>


            </div>



      </PageContainer>;
}

export default OrangeBrigade