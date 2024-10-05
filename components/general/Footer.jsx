import { Chat } from "react-iconly"
import PageContainer from "./PageContainer"
import { footerRoute } from "@/utils/general"
import Link from "next/link"

const Footer = () => {
    return(
        <>
            <button className="py-4 px-7 inline-flex items-center gap-2 fixed right-5 bottom-5 bg-secondary rounded-full text-white font-bold">

                <span><Chat set="bold" /></span>
                <span>Let&apos;s Chat</span>
                
            </button>
            <PageContainer className="bg-primary py-20 flex flex-col gap-10 pb-3 text-white sm:items-center">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 sm:gap-10">

                    <ul className="flex flex-col gap-2">

                        {footerRoute.slice(0, 3).map(({label, path}, index)=>(
                            <li key={index}>
                                <Link className="inline-flex font-medium" href={path}>
                                    {label}
                                </Link>
                            </li>
                        ))}

                    </ul>

                    <ul className="flex flex-col gap-2">

                        {footerRoute.slice(3, 6).map(({label, path}, index)=>(
                            <li key={index}>
                                <Link className="inline-flex font-medium" href={path}>
                                    {label}
                                </Link>
                            </li>
                        ))}

                    </ul>
                    <ul className="flex flex-col gap-2">

                        {footerRoute.slice(6, 9).map(({label, path}, index)=>(
                            <li key={index}>
                                <Link className="inline-flex font-medium" href={path}>
                                    {label}
                                </Link>
                            </li>
                        ))}

                    </ul>
                    <ul className="flex flex-col gap-2">

                        {footerRoute.slice(9, ).map(({label, path}, index)=>(
                            <li key={index}>
                                <Link className="inline-flex font-medium" href={path}>
                                    {label}
                                </Link>
                            </li>
                        ))}

                    </ul>

                </div>

                <p className="font-bold">Copyright Create {new Date().getFullYear()} - by Yanibes Consulting</p>


            </PageContainer>
        
        </>
    )
}

export default Footer