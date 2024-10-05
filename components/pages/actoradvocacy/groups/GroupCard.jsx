import Image from "next/image";

const GroupCard = ({image, title, members, type, id}) => {
    return(
        <div className="py-5 border-t flex gap-7 items-center">

            <div className="">
                <Image src={image} alt={title} className="w-[120px] tex-xs" />
            </div>

            <div className="flex-1 flex flex-col gap-2">
                <h2 className="text-xl">{title}</h2>

                <p>{type} . {members} member{members && isFinite(members) > 1? "s": ""}</p>
            </div>

            <div className="">

                <button className="py-2 px-6 text-white bg-secondary">
                    Join
                </button>

            </div>



        </div>

    )
}

export default GroupCard;