import ActionNaidLogo from "@/images/actionaid-nigeria-internship.jpg";
import BenChristyLogo from "@/images/BenChristy-LG.png";
import FordFoundationLogo from "@/images/ford-foundation-logo.png";
import CanadaLogo from "@/images/T130-Canada.png";
import WVLLogo from "@/images/wvl_nigeria.jpg";
import WomenDevelopmentResourceLogo from "@/images/kebetkache_women_development_resource_ce.png";
import GalleryImage1 from "@/images/gallery1.webp"
import GalleryImage2 from "@/images/gallery2.webp"
import GalleryImage3 from "@/images/gallery3.webp"
import GalleryImage4 from "@/images/gallery4.webp"
import GalleryImage5 from "@/images/gallery5.webp"
import GalleryImage6 from "@/images/gallery6.webp"
import GalleryImage7 from "@/images/gallery7.webp"
import GalleryImage8 from "@/images/gallery8.webp"
import GalleryImage9 from "@/images/gallery9.webp"
import GalleryImage10 from "@/images/gallery10.webp"
import GalleryImage11 from "@/images/gallery11.webp"
import GalleryImage12 from "@/images/gallery12.webp"
import GalleryImage13 from "@/images/gallery13.webp"
import GalleryImage14 from "@/images/gallery14.webp"
import GalleryImage15 from "@/images/gallery15.webp"
import GalleryImage16 from "@/images/gallery16.webp"
import PerformingMediaAndArtImage from "@/images/performing_and_media_parser.svg";
import YouthInitiatives from "@/images/youth_initiative_svg.svg";
import Contact from "@/images/women_empowerment.svg";
import CommunityDevelopment from "@/images/community_development_svg.svg";
import Blog from "@/images/blog_svg.svg";
import SignUp from "@/images/signup_svg.svg";
import Volunteer from "@/images/volunteer_svg.svg";
import WomenEmpowerment from "@/images/contact_svg.svg";
import { BLogRegistration, LogoImage, OrangeBrigadeImage1, OrangeBrigadeImage2, OrangeBrigadeImage3, OrangeBrigadeImage4, OrangeBrigadeImage5, OrangeBrigadeInnerBannerImage1 } from "@/images";


export const RouteNames = {
    Home: {
        label: "Home",
        path: "/",
        showIn: ["nav", "footer"],
        children: null,
        Icon: ""
    },

    AboutCreate: {
        label: "About Create",
        path: "/about",
        showIn: ["nav", "footer"],
        children: null,
        Icon: "",
        children: [

            {
                label: "Mission & Values",
                path: "/about/mission",
                children: null,
                Icon: "",

            },

            {
                label: "Hilda Dokubo",
                path: "/about/hildadokubo",
                children: null,
                Icon: "",

            },

            {
                label: "Team",
                path: "/about/team",
                children: null,
                Icon: "",

            },

            {
                label: "Activities",
                path: "/about/activities",
                children: null,
                Icon: "",

            },

            {
                label: "Mentors & Trainers",
                path: "/about/mentors",
                children: null,
                Icon: "",

            },

            {
                label: "Credentials",
                path: "/about/credentials",
                children: null,
                Icon: "",

            },

            {
                label: "Partners",
                path: "/about/partners",
                children: null,
                Icon: "",

            },

            {
                label: "News & Updates",
                path: "/about/news",
                children: null,
                Icon: "",

            },

            {
                label: "Donate",
                path: "/about/donate",
                children: null,
                Icon: "",

            }

        ]
    },

    TalentProgram: {
        label: "Talents Program",
        path: "/talent",
        showIn: ["nav", "footer"],
        children:[ 
            
            {
                label: "Curriculum",
                path: "/talent/curriculum",
                children: null,
                Icon: "",
            },

            {
                label: "Tuition",
                path: "/talent/tuition",
                children: null,
                Icon: "",
                
            }
    
        ],
        Icon: ""
    },


    YouthInitiatives: {
        label: "Teen and Youth Initiatives",
        path: "/youth",
        showIn: ["nav", "footer"],
        children: [
            {
                label: "Talent",
                path: "/youth/talent",
                children: null,
                Icon: "",
            },

            {
                label: "Youth Power",
                path: "/youth/power",
                children: null,
                Icon: "",
            },

            {
                label: "Youth Parliament",
                path: "/youth/parliament",
                children: null,
                Icon: "",
            }
        ],
        Icon: ""
    },

    
    OrangeBrigade: {
        label: "Orange Brigade",
        path: "/orangebrigade",
        showIn: ["nav"],
        children: null,
        Icon: ""
    },

    WomenEmpowerment: {
        label: "Women Empowerment",
        path: "/women",
        showIn: ["nav", "footer"],
        children: null,
        Icon: ""
    },

    CommunityDevelopment: {
        label: "Community Development",
        path: "/community",
        showIn: ["nav", "footer"],
        children: null,
        Icon: ""
    },

    
    ActorAdvocacy: {
        label: "Actor Advocacy",
        path: "/actoradvocacy",
        showIn: ["nav"],
        children: [
            {
                label: "Course List",
                path: "/actoradvocacy/courses",
                children: null,
                Icon: "",
            },

            {
                label: "Group List",
                path: "/actoradvocacy/groups",
                children: null,
                Icon: "",
            },

            {
                label: "Members",
                path: "/actoradvocacy/members",
                children: null,
                Icon: "",
            }
        ],
        Icon: ""
    },

    Blog: {
        label: "Blog",
        path: "/blog",
        showIn: ["nav", "footer"],
        children: null,
        Icon: ""
    },

    SignUp: {
        label: "Sign Up",
        path: "/signup",
        showIn: ["nav", "footer"],
        children: null,
        Icon: ""
    },

    
    GetInvolved: {
        label: "Get Involved",
        path: "/get-involved",
        showIn: ["nav"],
        children: null,
        Icon: ""
    },

    BookOnline: {
        label: "Book Online",
        path: "",
        showIn: ["footer"],
        children: null,
        Icon: ""
    },

    Volunteer: {
        label: "Volunteer",
        path: "",
        showIn: ["footer"],
        children: null,
        Icon: ""
    },

    Donate: {
        label: "Donate",
        path: "",
        showIn: ["footer"],
        children: null,
        Icon: ""
    },

    Contacts: {
        label: "Contacts",
        path: "/contacts",
        showIn: ["nav", "footer"],
        children: null,
        Icon: ""
    }
},
allRoutes = Object.keys(RouteNames).map((key)=>RouteNames[key]),
footerRoute = allRoutes.filter(route => route.showIn.includes("footer")),
navRoutes = allRoutes.filter(route => route.showIn.includes("nav")),
activitiesList = [
    {
        content: "Acting Classes",
        className: "bg-[#F2BF5E]"
    },

    {
        content: "Effective Communication Classes",
        className: "bg-[#E75122]"
    },
    

    {
        content: "Etiquette Training",
        className: "bg-[#663898]"
    },

    {
        content: "Business Development",
        className: "bg-[#FF6161]"
    },
    
    {
        content: "Personal Growth",
        className: "bg-[#536EB7]"
    },

    {
        content: "Advocacy & Mentorship",
        className: "bg-[#75CBA8]"
    },

    {
        content: "Career Consulting",
        className: "bg-[#0D54BD]"
    },
    
    {
        content: "Health & Well-Being",
        className: "bg-[#299486]"
    },

    {
        content: "Financial Autonomy & Entrepreneurship",
        className: "bg-[#624D26]"
    }
],
mentorsList = [
    {
        image: "",
        descriptions: [
            "Ayodele TAIWO Ayodele Taiwo is a seasoned Book Writing Consultant, an Author and a Scholar. For over a decade, she has consulted for several clients within and outside Nigeria. She writes biographies, movie scripts, and reviews. In addition, she writes books from her client's sermons and seminar papers. Alongside; she edits, proofreads and also subtitles films.",
            "She has a Bachelor and Master’s degree in Linguistics from the University of Ibadan. She equally has a PGD in Theatre Arts from the University of Ibadan; and another PGD (also in Theatre Arts) from the University of Lagos. Currently, she is wrapping up her second Master’s degree in Theatre Arts (Dramatic Theory and Criticism Major) from the University of Lagos",
            "She is married to Olumuyiwa Adedoyin Taiwo. Their union is blessed with Sharon Temidun and Hadassah Mojoyin. She resides in Lagos, Nigeria."
        ],
        name: "Ayodele TAIWO"
    },

    {
        image: "",
        descriptions: [
            "A committed and professional Business and Media/Movie practitioner, with over 30 years of experience as an audio-visual/movie director",
            "Ruke’s first involvement with the Nigerian movie industry was in 1992, when the industry was just starting. A graduate of Dramatic Arts, from the University of Ife, he studied under Nobel Laureate – Wole Soyinka",
            "An educator, producer, writer, actor, editor and director, he holds an MBA in Human Resources Management, a PRINCE2 Project management certificate, a Post Graduate Certificate in Education and an LLB in Law"
        ],
        name: "Ruke AMATA"
    },

    {
        image: "",
        descriptions: [
            "Don Kester is a certified marriage mentor, relationship coach and affiliate with TIMFA, Texas, USA. He is equally a certified Mental Health Therapist. He has been exposed to trainings in media arts, leadership, advertising and theology. He is married with children",
            "Holds a first degree in Creative Arts with a bias for Script Writing. His second degree is in Public Administration. All from the University of Port Harcourt, Nigeria",
            "He is the convener of #ExerciseYourWrite (a Creative Enterprise). He is an inspirational author with published titles to his name.He is the COO, The Mouthpiece Media Services",
            "He is a communicator and trainer who effectively facilitates at academic, spiritual and professional for a challenging and inspiring people to living their dreams"
        ],
        name: "Don KESTER"
    },

    {
        image: "",
        descriptions: [
            "Krukrubo-Karibi Ibiyekaribo Morgan is a Finance & Administrative professional whose wealth of experience span across different sectors of the economy i.e. Banking & Finance, Hospitality, Oil & Gas, Marketing, Public Sector & Creative industry",
            "He has worked in different organisations and has risen to head several departments through teamwork and exceptional leadership skills",
            "He holds two Master’s degrees, one from the Robert Gordon University Aberdeen (MSc Int’l Marketing Management) & the second from the Rivers State University (MBA Management option), a Bachelor’s Degree in Banking & Finance from Rivers State University, Certificate in Market & Social Research from Pan Atlantic University, Lagos and presently undergoing a professional certification program with the Association of National Accountants of Nigeria (ANAN)",
            "Mr. Krukrubo K.I. Morgan is married with four beautiful children"
        ],
        name: "Krukrubo-Karibi Ibiyekaribo MORGAN"
    },

    {
        image: "",
        descriptions: [
            "Krukrubo Obeleye Jacklyn is a Creative Artist, a lawyer, Teacher and an Administrator by profession. She has worked in various capacity as Special Adviser to LGA Council on Legal matters, Head of Legal Unit with State Government Agency, as a legal practitioner with a private chamber and head of Legal Department in CREATE.",
            "She holds both Bachelor and Certificate of Arts Degrees in Theater Arts from the University of Port Harcourt and an LLB Degree in Law from Rivers State University, B.L Nigerian Law School. Her passion for creative arts has always endeared her to teaching youth on how to enhance their innate creative abilitie.",
            "She is happily married with four beautiful kids."
        ],
        name: "Krukrubo Obeleye JACKLYN"
    }
],
partnerList = [
    {
        content: "National Film and Video Censors Board",
        link: {
            path: "www.nfvcb.gov.ng",
            label: "www.nfvcb.gov.ng"
        },
        className: "bg-[#E75122]"
    },

    {
        content: "Casting Call Africa",
        link: {
            path: "www.castingcallafrica.com",
            label: "castingcallafrica.com"
        },
        className: "bg-[#FF6161]"
    },

    
    {
        content: "Createsstars Mediaworks & Productions",
        className: "bg-[#536EB7]"
    },

    {
        content: "Ben and Cristy Consultants",
        className: "bg-[#75CBA8]"
    }
],
whatWeDo = [
    {
        image: PerformingMediaAndArtImage,
        title: "Performing and Media Art Programs",
        description: "At CREATE, we identify, nurture and grow artistic talents",
        path: RouteNames.TalentProgram.path,
        className: "bg-[#1B2D80]"
    },

    {
        image: YouthInitiatives,
        title: "Youth Initiatives",
        description: "At CREATE, we educate, mentor and coach young minds",
        path: RouteNames.YouthInitiatives.path,
        className: "bg-[#0D54BD]"
    },

    {
        image: WomenEmpowerment,
        title: "Women Empowerment",
        description: "At CREATE, we empower, mentor and encourage female learners through gender advocacy. ",
        path: RouteNames.WomenEmpowerment.path,
        className: "bg-[#4188F2]"
    },

    {
        image: CommunityDevelopment,
        title: "Community Development",
        description: "At CREATE, we build and maintain peaceful communities.",
        path: RouteNames.CommunityDevelopment.path,
        className: "bg-[#57C4F2]"
    },

    {
        image: Blog,
        title: "Blog",
        description: "Tune in to get the last updates about CREATE activities",
        path: RouteNames.Blog.path,
        className: "bg-[#E75122]"
    },

    {
        image: SignUp,
        title: "Sign Up",
        description: "Registration for Hilda Dokubo Masterclass",
        path: RouteNames.SignUp.path,
        className: "bg-[#FF4040]"
    },

    {
        image: Volunteer,
        title: "Volunteer",
        description: "Join CREATE Volunteers Team and make a difference",
        path: RouteNames.Volunteer.path,
        className: "bg-[#E21C1C]"
    },

    {
        image: Contact,
        title: "Contact",
        description: "We are always available, so don't hesitate to contact us",
        path: RouteNames.Volunteer.path,
        className: "bg-[#F27D5A]"
    }
],
partnerListImage = [
    ActionNaidLogo,
    BenChristyLogo,
    FordFoundationLogo,
    CanadaLogo,
    WVLLogo,
    WomenDevelopmentResourceLogo


],
galleryImages = [
    GalleryImage1,
    GalleryImage2,
    GalleryImage3,
    GalleryImage4,
    GalleryImage5,
    GalleryImage6,
    GalleryImage7,
    GalleryImage8,
    GalleryImage9,
    GalleryImage10,
    GalleryImage11,
    GalleryImage12,
    // GalleryImage13,
    // GalleryImage14,
    // GalleryImage15,
    // GalleryImage16,
],
blogList = [
    {
        image: BLogRegistration,
        title: "Registration Open on April 7, 2021",
        description: "Students and avid learners, you are invited to join CREATE and become part of one of the most intringuing experiences ever. You will learn to gain more confidence about yourself through acting, personal development, empowerment. You will meet interesting, funny yet serious mentors and trainers whose sole objective is to help you reach your full potential.",
        content: [
            "Students and avid learners, you are invited to join CREATE and become part of one of the most intringuing experiences ever. You will learn to gain more confidence about yourself through acting, personal development, empowerment. You will meet interesting, funny yet serious mentors and trainers whose sole objective is to help you reach your full potential. "
        ],
        views: 7,
        comments: 0,
        likes: 1,
        date: "Apr 2, 2021",
        time: "1 min"
    },

    {
        image: LogoImage,
        title: "Save the Date: May 3, 2021",
        description: "CREATE Course Program officially starts Get set, ready, Go!!!! Welcome to the CREATE Course Program students #CREATELagos #Lagos #HildaDoKubo #ActingClasses #Course",
        content: [
            "CREATE Course Program officially starts",
            "Get set, ready, Go!!!!",
            "Welcome to the CREATE Course Program students.",
            "#CREATELagos #Lagos #HildaDoKubo #ActingClasses #Course",
        ],
        views: 4,
        comments: 0,
        likes: 1,
        date: "Apr 27, 2021",
        time: "1 min"
    }
],
groupList = [
    {
        title: "Business of Acting",
        image: "",
        members: 1,
        id: "1",
        type: "Public",

    },

    {
        title: "Understanding the Team & Professional Ethnics",
        image: "",
        members: 2,
        id: "3",
        type: "Public",

    }
],
orangeBrigadeImage = [
    OrangeBrigadeImage1,
    OrangeBrigadeImage2,
    OrangeBrigadeImage3,
    OrangeBrigadeImage4,
    OrangeBrigadeImage5,
],

orangeBrigadeImageSlide = [
    OrangeBrigadeImage5,
    OrangeBrigadeImage4,
    OrangeBrigadeInnerBannerImage1
]
;