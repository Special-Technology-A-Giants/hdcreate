const Location = ({title, mapLink}) => {

    return <div className="flex flex-col gap-10">
        <h2 className="uppercase font-bold text-lg sm:text-xl md:text-2xl text-center">
          {title ? title : "Location"}
        </h2>

        <iframe title="Google Maps" aria-label="Google Maps" data-src="" className="bg-slate-100 w-full h-[500px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253709.87191308933!2d3.278743532778985!3d6.494218354868642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf7163126d9a7%3A0xf6239b9af571e374!2sMegamound%20Estate!5e0!3m2!1sen!2sng!4v1685543763918!5m2!1sen!2sng" referrerpolicy="no-referrer-when-downgrade" loading="lazy" />
      </div>;

}

export default Location