import InputField from "@/components/general/InputField"

const MailingList = () => {
    return(
        <div className="flex flex-col gap-10">

            
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-center">Join CREATE&apos;s Mailing List</h2>

            <form className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <InputField label="First name" inputClassName="bg-primary text-white" placeholder="First name" />
                    <InputField label="Last name" inputClassName="bg-primary text-white" placeholder="Last name" />
                    <InputField label="Email" inputClassName="bg-primary text-white" placeholder="Enter your email here" />
                    <InputField label="Company" inputClassName="bg-primary text-white" placeholder="Company" />
                    <InputField label="Phone" inputClassName="bg-primary text-white" placeholder="Phone" />

                </div>

                <div className="flex justify-end items-center">
                    <button className="py-3 px-5 bg-secondary text-white">
                        Subscribe Now
                    </button>
                </div>
            </form>



        </div>
    )
}

export default MailingList