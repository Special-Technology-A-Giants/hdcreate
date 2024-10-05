import Image from "next/image";

const Banner = ({images, left}) => {

    if(!images){
        images = [];
    }

    return(
        <div className="w-full h-[200px] sm:h-[350px]  md:h-[500px] relative">

            {Array.isArray(images)? (
                images.map((image, index)=>{
                    <div className={`absolute w-full max-h-full h-auto flex ${left? "justify-start" : "justify-center"}`}>
                      <Image src={image} alt="banner image" className="h-auto" />
                    </div>;
                })

            ): (
                    <div className="absolute w-full h-full flex justify-center">
                        <Image src={images} alt="banner image" />
                    </div>

            )}
        </div>
    )
}

export default Banner