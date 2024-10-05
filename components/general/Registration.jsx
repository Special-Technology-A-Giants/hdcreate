import { Calendar } from "react-iconly";
import InputField from "./InputField";

const Registration = ({title, subtitle}) => {

    return(
        <div className="flex flex-col gap-10">
            
            <h2 className="uppercase font-bold text-lg sm:text-xl md:text-2xl text-center">{title? title : "Registration"}</h2>
            <p className="uppercase font-bold text-center">{subtitle? subtitle : "Register now!"}</p>
            <p className="uppercase font-bold text-center">please take the time to fill out the information below.</p>

            <form className="grid grid-cols-1 gap-6">

                    <InputField label="First name" inputClassName="bg-primary text-white" placeholder="First name" />
                    <InputField label="Last name" inputClassName="bg-primary text-white" placeholder="Last name" />
                    <InputField label="Email" inputClassName="bg-primary text-white" placeholder="Enter your email here" />
                    <InputField label="Birthday" inputClassName="bg-primary text-white" placeholder="" inputParentClassName="text-white" rightIcon={<Calendar />} />

                    <div className="flex items-center gap-3">

                        
                     <InputField label="Code" className="w-[110px] max-w-[110px]" type="select" inputClassName="bg-primary text-white" placeholder="+()" />
                     <InputField label="Phone" className="flex-1 w-auto" inputClassName="bg-primary text-white" placeholder="Your phone number" />

                    </div>

                    <button className="py-3 px-5 text-white bg-primary mt-5">
                        Continue
                    </button>

            </form>
        </div>
    )

}

export default Registration;