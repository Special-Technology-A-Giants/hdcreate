import PageContainer from "@/components/general/PageContainer"

const Members = () => {
    return(
        <PageContainer className="flex flex-col gap-6 py-10 items-center">
            <h2 className="font-bold text-lg md:text-2xl">Log In to Connect With Members</h2>
            <p className="text-slate-700">View and follow other members, leave comments & more.</p>

            <button className="bg-secondary text-white inline-flex py-2 px-10">
                Login
            </button>
        </PageContainer>
    )
}

export default Members