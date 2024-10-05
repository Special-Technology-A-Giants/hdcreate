import { UserImage } from "@/images"
import Image from "next/image"
import { Heart } from "react-iconly"

const BlogCard = ({image, date, authorImage, authorName, time, title, description, views, comments, likes, ...props }) => {
    return(

        <div className="grid grid-cols-1 border min-h-[320px] md:grid-cols-2" {...props}>

            <div className="relative">

                <Image src={image} alt={title} fill className="object-cover object-top" />

            </div>

            <div className="flex flex-col justify-between gap-4 px-5 pt-5">

                <div className="flex flex-col gap-6">

                    <div className="flex items-end gap-3">

                        <Image src={authorImage? authorImage : UserImage} alt={authorName} className="w-[50px] h-[50px] rounded-full bg-slate-200" />
                        
                        <div className="flex flex-col gap-2">
                            <p>{authorName? authorName : "-"}</p>
                            <p>{date} . {time}</p>
                        </div>

                    </div>

                    <h2 className="text-lg font-bold sm:text-2xl md:text-3xl text-primary">{title}</h2>
                    
                    <p className="text-slate-700">{description.length > 200? `${description.slice(0, 200)}...`: description}</p> 
                    
                </div>

                <div className="flex items-center justify-between gap-6 py-4 border-t text-slate-700 border-t-slate-400">

                    <div className="flex items-center gap-6">
                        <span>{views? views: 0} Views</span>
                        <span>{comments? comments: 0} Comments</span>
                    </div>

                    <span className="inline-flex items-center gap-2">
                        {likes? likes: 0} 
                        <span className="text-secondary">
                            <Heart />
                            
                        </span>
                    </span>
                    
                </div>


            </div>

        </div>

    )
}

export default BlogCard