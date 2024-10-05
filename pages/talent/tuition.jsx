import Banner from "@/components/general/Banner"
import PageContainer from "@/components/general/PageContainer"
import { RouteNames } from "@/utils/general"
import Link from "next/link"
import TuitionImage from "@/images/tuition.webp"

const Tuition = () => {
    return(
        <PageContainer className="flex flex-col gap-10 py-10">
            
        
            <h1 className="uppercase font-bold md:text-xl text-center">Tuition</h1>
            <h1 className="font-medium text-center">Hilda Dokubo Acting Masterclass</h1>

             <div className="flex flex-col gap-6 text-slate-600">

                <p className="font-medium">
                    Center For Creative Arts Education is offering a hybrid acting class for young and aspiring adult actors!
                </p>
                <p className="font-medium">
                    You can become a professional stage or screen actor through our classes and workshops. We offer training for beginners, career crossover actors, actors wanting special coaching on characterization.
                </p>
                <p className="font-medium">
                    Let&apos;s help you find the answers to questions about featuring in films, Nollywood, Auditions, Casting Directors, playing the role and becoming a professional actor.
                </p>
                <p className="font-medium">
                    Be trained by the best acting coach/academy in Africa. We are accredited and licensed.
                </p>
                <p className="font-medium">
                NOTE: At the end of the training, you will receive a certificate.
                </p>

                <Banner images={TuitionImage} left={true} />

                <h2 className="font-bold">NOTE: At the end of the training, you will receive a certificate.</h2>
                <ul className="pl-10 list-decimal">

                    <li>Effective Reading, Listening and Speaking Methods</li>
                    <li>Understanding The Script</li>
                    <li>The Actor as a storyteller</li>
                    <li>Understanding Acting techniques</li>
                    <li>Improvisation as Technique / Genre</li>
                    <li>The Actors Drill (Breathing, Movement, Concentration, Voice, Spontaneity etc.)</li>
                    <li>Creating A Life and Becoming (Characterization)</li>
                    <li>Finding Objectives ( Line, Scene and Script etc)</li>
                    <li>Entrepreneurship: Acting As A Business</li>
                    <li>Understanding Industry terminologies.</li>

                </ul>

                

                <h2 className="font-bold">Bonus</h2>
                <ul className="pl-10 list-decimal">

                    <li>Getting an agent (detailed process with tips/tricks)</li>
                    <li>How to get Information (yourself or through an agent)</li>
                    <li>Compiling your resume / portfolio: (what kinds of things to put on them, and when. eg Photo, Video)</li>

                </ul>

                <p className="font-bold"> Price: N70,000 (Duration: 1 Week)</p>
                <p className="font-bold">Price: N200,000 (Duration 4 Weeks)</p>
                <p className="font-bold">Naira Account Details:</p>
                <p className="font-medium">Access Bank<br />0032290230<br />CENTER FOR CREATIVE ARTS EDUCATION</p>
                <p className="font-medium">GT BANK<br />0037943643<br />CENTER FOR CREATIVE ARTS EDUCATION</p>
                <p className="font-bold">OR</p>
                <p className="font-bold">Dollar Account Details</p>
                <p className="font-medium">GT Bank<br />0595027344<br />CENTER FOR CREATIVE ARTS EDUCATION</p>
                <p className="font-bold">Price: $120 (Duration: 1 Week)</p>
                <p className="font-bold">Price: $350 (Duration 4 Weeks)</p>
                <p>For More Information:<br />Phone: +2348036451488 (Whatsapp, Text, Calls)<br />Email: admissions@createstars.org</p>

                <Link className="inline-flex py-3 px-8 bg-primary text-white font-bold self-start" href={RouteNames.SignUp.path}>

                    Sign Up

                </Link>

             </div>



        </PageContainer>
    )
}

export default Tuition