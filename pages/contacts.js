import Banner from "@/components/general/Banner";
import Location from "@/components/general/Location";
import PageContainer from "@/components/general/PageContainer"
import SectionHeader from "@/components/general/SectionHeader";
import MailingList from "@/components/pages/contact/MailingListForm";
import ContactImage from "@/images/contacts.webp"


const Contact = () => {
    return<PageContainer className="flex flex-col gap-10 py-10">

        <Banner images={ContactImage} />

        <SectionHeader title="Contacts" />

        <div className="flex flex-col gap-3 text-slate-600 font-medium">
            <h2 className="uppercase font-bold text-black">Create Office</h2>

            <p>R 33A Megamound Estate, Lekki County Homes,</p>
            <p>Ikotun Lekki,</p>
            <p>Lagos</p>
            <p>Nigeria</p>
            <p>Tel: +234 803 645 1488</p>
            <p>Mob: +234 802 510 8850</p>
            <p>Email: info@createstars.org</p>
            <p>www.createstars.org</p>
        </div>

        <Location />

        <div className="self-center max-w-[550px] w-full">

            <MailingList />

        </div>

    </PageContainer>
}

export default Contact;