import { navRoutes } from "@/utils/general";
import Link from "next/link";
import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const MobileNav = ()=> {

    const [activeBar, setActiveBar] = useState(NaN);

    return(
        <ul className="flex flex-col gap-6">

            {navRoutes.map(({label, path, children}, index)=>(
                <li key={index} className="w-full">

                    <span className="inline-flex justify-between w-full font-bold text-primary">
                        <Link href={path}  className="inline-flex">
                            {label}
                        </Link>

                        {children && <button onClick={()=>{
                            setActiveBar(prevState => prevState !== index? index : NaN)
                        }}>

                            {activeBar === index? <FaAngleUp />: <FaAngleDown />}
                            
                        </button>}
                        
                    </span>


                    {children && <ul className={`flex flex-col gap-6 overflow-hidden duration-300 text-slate-800 font-medium ${activeBar === index? "h-auto py-6 px-3": "h-0"}`}>

                        {children.map(({label, path}, index)=>(
                            <li key={index} className="inline-flex flex-col">

                                <Link href={path} className="inline-flex">
                                    {label}
                                </Link>

                            </li>
                        ))}

                    </ul>}

                </li>
            ))}
                    
        </ul>
    )
}

export default MobileNav