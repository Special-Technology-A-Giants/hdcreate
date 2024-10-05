import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { FaFacebookF } from "react-icons/fa"
import { MdClose } from "react-icons/md"

const SignUpContent = () => {

    const {pathname, query} = useRouter()
    const {nav} = query || {}
    const [isReadMore, setIsReadMore] = useState(false)

    return(
        <div className="bg-white flex flex-col gap-5 p-10 rounded-md font-inter">


            <div className="flex justify-end w-full">
                <Link href={pathname} className="font-bold text-xl">
                    <MdClose />
                </Link>
            </div>

            <div className="flex flex-col  gap-3 items-center">
                <h1 className="text-2xl font-medium">{nav === "login"?"Log in" : "Sign up"}</h1>
                <p className="text-sm">{nav === "login"?"New to this site?" : "Already a member?"} <Link className="text-secondary-700 underline" href={nav=== "login"? `${pathname}?nav=signup`: `${pathname}?nav=login`}>{nav === "login"?"Sign up" : "Log in"}</Link></p>
            </div>

            <button className="border px-4 py-3 rounded-md flex items-center">
                
                <p className="flex-1 text-center text-sm">{nav === "login"?"Log in" : "Sign up"} with Google</p>

            </button>

            <button className="bg-[#1878F2] text-white border px-4 py-3 rounded-md flex items-center">
                
                <span className="text-[#1878F2] inline-flex bg-white w-[30px] min-w-[30px] h-[30px] rounded-full items-end text-xl flex justify-center"><FaFacebookF /></span><p className="flex-1 text-center text-sm">{nav === "login"?"Log in" : "Sign up"} with Facebook</p>

            </button>

            <div className="flex items-center">
                <div className="h-[1px] flex-1 bg-slate-400"></div>
                <p className="px-2">OR</p>
                <div className="h-[1px] flex-1 bg-slate-400"></div>
            </div>

            <button className="border px-4 py-3 rounded-md flex items-center">
                
                <p className="flex-1 text-center text-sm">{nav === "login"?"Log in" : "Sign up"} with Email</p>

            </button>

            {nav === "signup" && <p className="text-xs text-center"><input type="checkbox" checked={true} /> Sign up to this site with a public profile <button className="text-slate-700 underline" onClick={()=>{setIsReadMore(prevState => !prevState)}}>Read {isReadMore? "less" : "more"}</button> {isReadMore && <><br /><br />Your profile will be set to public automatically when you sign up. You can change this later in your profile settings.</>}</p>}
        

        </div>
    )
}

export default SignUpContent