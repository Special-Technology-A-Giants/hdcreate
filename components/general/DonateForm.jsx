import { Calendar } from "react-iconly";
import InputField from "./InputField";

const DonateForm = ({title, subtitle}) => {

    return(
        <div className="flex flex-col gap-10">
            
            <h2 className="uppercase font-bold text-lg sm:text-xl md:text-2xl text-center">{title? title : "Support our cause"}</h2>

            <form className="grid grid-cols-1 gap-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        <InputField label="First name" inputClassName="bg-primary text-white" placeholder="First name" />
                        <InputField label="Last name" inputClassName="bg-primary text-white" placeholder="Last name" />
                    </div>
                    <InputField label="Email" inputClassName="bg-primary text-white" placeholder="Enter your email here" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <InputField label="I'm Donating in the name of" type="select" options={[
                            {
                                value: "self",
                                label: "Self"
                            },
                            {
                                value: "organization",
                                label: "An organization"
                            },
                            
                            {
                                value: "others",
                                label: "Others"
                            },
                            
                        ]} inputClassName="bg-primary text-white" placeholder="" inputParentClassName="text-white" />

                        
                        <InputField label="Organization\ Honoree name:" inputClassName="bg-primary text-white" placeholder="Optional" />

                    </div>

                        <InputField label="Leave us a comment:" type="textarea" inputClassName="bg-primary text-white" placeholder="We'd love to hear from you" />

                        <InputField label="Tell us how you heard of us:" type="textarea" inputClassName="bg-primary text-white" placeholder="Help us reach more people" />
                    

                    <div className="flex items-center gap-3">

                        
                     <button className="py-3 px-5 text-white bg-primary mt-5">
                        Donate
                    </button>
                     <div></div>

                    </div>

                    <button className="py-3 px-5 text-white bg-primary mt-5">
                        Finish
                    </button>

            </form>
        </div>
    )

}

export default DonateForm;