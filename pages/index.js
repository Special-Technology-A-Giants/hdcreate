import PageContainer from "@/components/general/PageContainer";
import { CovidBanner, DonateImage, TeamImage } from "@/images";
import { RouteNames, galleryImages, partnerListImage, whatWeDo } from "@/utils/general";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef } from "react";

export default function Home() {
  const videoRef = useRef(null)

  const playVideo = useCallback(()=>{

    videoRef.current.play();

  }, [])

  useEffect(()=>{
    setTimeout(()=>{

      playVideo();

    })
  }, [playVideo])
  return (
    <PageContainer className="flex flex-col gap-10">

      <div className="w-full">
        <video ref={videoRef} autoPlay={true} src="/home_video.mp4" loop={true} muted autoplay />
      </div>

      <div className="flex flex-col gap-4">

        <h2 className="uppercase font-bold text-lg md:text-3xl text-center">Welcome to CREATE</h2>
        <p className="font-medium text-slate-700 md:text-xl text-center">Centre for Creative Arts Education</p>

        <Image src={CovidBanner} alt="Covid 19 Banner" className="self-center" />

      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        {whatWeDo.map(({className, image, description, path, title}, index)=>(
          <div className={`py-10 md:py-20 px-5 md:px-10 flex flex-col items-center justify-center gap-4 text-center text-white ${className}`} key={index}>

            <Image src={image} alt={title} className="w-full max-w-[100px]" />

            <h2 className="font-bold text-lg md:text-xl">{title}</h2>
            <p className="text-slate-200 text-sm">{description}</p>

            <Link href={path} className={`py-3 inline-flex text-sm font-medium px-5 ${index > 3? "bg-primary" : "bg-secondary"}`}>

              Read More

            </Link>
            
          </div>
        ))}

      </div>

      <div className="flex bg-primary">

        <div className="flex-1">

          

          <Image className="w-full" src={TeamImage} alt="Hdcreate Team" />

        </div>
        <div className="flex flex-col gap-6 items-center md:items-start text-center md:text-left md:py-20 py-10 px-5 md:px-10 text-white md:max-w-[300px]">

          <h2 className="font-bold text-lg md:text-3xl">Meet the Team</h2>

          <p className="text-slate-200">AT CREATE, we are a team of dedicated professionals and volunteers who are driven by the need to support and encourage initiatives that affect positively our community</p>

          <Link href={""} className="py-3 text-sm font-medium px-5 bg-secondary inline-flex">
            Read More
          </Link>

        </div>

      </div>


      <div className="flex flex-col gap-10 md:gap-14">

          <h2 className="uppercase text-lg md:text-xl font-bold text-center">Partners and supporters</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-end">

            {partnerListImage.map((image,index)=>(
              <Image src={image} alt="partners" key={index} />
            ))}

          </div>

      </div>

      <div className="bg-secondary text-white py-10 md:py-20 flex flex-col gap-10">

          <h2 className="uppercase text-lg md:text-xl font-bold text-center">Gallery</h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6">

            {galleryImages.map((image, index)=>(

              <Image src={image} alt="" key={index} />

            ))}

          </div>

      </div>

      <div className="flex">

        <div className="flex-1">

          <Image className="w-full" src={DonateImage} alt="Donate to hdcreate" />

        </div>
        <div className="flex flex-col justify-center gap-6 items-center text-center md:py-20 py-10 px-5 md:px-10 text-black md:max-w-[300px]">

          <h2 className="font-bold text-lg md:text-3xl">DONATE</h2>

          <p className="text-slate-700">Help us to implement value-added projects that will showcase talent and generate income for for those in need.</p>
          <p className="text-slate-700"> PayPal, PayStack and other Mobile Money Options Available </p>

          <Link href={""} className="py-3 text-sm font-medium px-5 text-white bg-primary inline-flex">
            Read More
          </Link>

        </div>

      </div>



    </PageContainer>
  )
}
