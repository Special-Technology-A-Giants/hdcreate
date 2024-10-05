import PageContainer from "@/components/general/PageContainer"
import GroupCard from "@/components/pages/actoradvocacy/groups/GroupCard"
import { RouteNames, groupList } from "@/utils/general"
import Link from "next/link"
import { useState } from "react"

const Groups = ({tab})=> {

    return(
        <PageContainer className="py-10 flex flex-col gap-6">

            <div className="flex items-center gap-6">
                <h2 className="text-lg font-black md:text-2xl">Study Groups</h2>

                <select className="font-san outline-none w-[170px]">
                    <option value="recent-activity">Select by recent activity</option>
                    <option value="alphabetical">A-Z</option>
                    <option value="member-count">Member Count</option>
                </select>
                
            </div>

            <div className="border px-2">

                <div className="flex pt-5">

                    <Link href={`${RouteNames.ActorAdvocacy.path}/groups?tab=all`} className={`py-3 px-5 ${tab === "all"? "border-b-2 border-b-primary": ""}`}>All (2)</Link>
                    <Link href={`${RouteNames.ActorAdvocacy.path}/groups?tab=my-group`} className={`py-3 px-5 ${tab === "my-group"? "border-b-2 border-b-primary": ""}`}>My groups</Link>
                    <Link href={`${RouteNames.ActorAdvocacy.path}/groups?tab=suggested`} className={`py-3 px-5 ${tab === "suggested"? "border-b-2 border-b-primary": ""}`}>Suggested Group</Link>

                </div>

                {groupList.map((data, index)=>(
                    <GroupCard {...data} key={index} />
                ))}
            </div>

        </PageContainer>
    )
}

export default Groups

export const getServerSideProps = ({query}) => {
    let {tab} = query;

    if(!tab){
        tab = "all"
    }
    return{
        props: {
            tab 
        }
    }
}