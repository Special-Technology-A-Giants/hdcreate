import Head from "next/head";
import Script from "next/script";

const SEO = ({title, description, image, imageDescription, locale}) => {
    return(

        <>
        
        
            <Head>
        
                <title>{title? title : "Hilda Site"}</title>
                <meta property="og:title" content={title? title : "Hilda Site"} />
                
                <meta name="description" content={description? description : ""} />
                <meta property="og:description" content={description? description : ""} />
                
                <meta property="og:image" content={image? image : "/meta_image.png"} />
                <meta name="twitter:card" content={image? image : "/meta_image.png"} />
                <link rel="apple-touch-icon" href={image? image : "/meta_image.png"} />
        
                <meta property="og:image:alt" content={imageDescription? imageDescription : "Hilda Site"} /> 
                <meta property="og:locale" content={locale? locale :"en_US"} />
                <meta property="og:type" content="website" />
        
        
            </Head>
            <Script src="https://www.google-analytics.com/analytics.js" async></Script>
        </>


)}

export default SEO;