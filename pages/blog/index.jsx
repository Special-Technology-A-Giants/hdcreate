import PageContainer from "@/components/general/PageContainer"
import SectionHeader from "@/components/general/SectionHeader"
import BlogCard from "@/components/pages/blog/BlogCard"
import { blogList } from "@/utils/general"
import Link from "next/link"
import { FaSearch } from "react-icons/fa"

const Blog = () => {
    return(
        <PageContainer className="flex flex-col gap-10 py-20">
            <SectionHeader title="Blog" />
            <div className="flex items-center justify-between gap-10">

                <h2>All post</h2>

                <div className="flex items-center gap-10">
                    <button>
                        <FaSearch />
                    </button>

                    <Link href="" className="inline-flex px-4 py-2 border border-secondary-400 text-secondary-400">
                        Login/Sign up
                    </Link>
                </div>
                
            </div>

            <div className="grid grid-cols-1 gap-6">
                {blogList.map((data, index)=>(
                    <BlogCard {...data} key={index} />
                ))}
            </div>
        </PageContainer>
    )
}

export default Blog

