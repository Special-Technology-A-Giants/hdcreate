import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Organization",
    url: "https://www.createstars.org/",
    // logo: "https://www.createstars.org/android-chrome-512x512.png",
    name: "Create Stars",
    image: "https://www.createstars.org/_next/static/media/logo.bd501a81.svg",
    email: "info@createstars.org",
    description:
      "Our mission is to build a Nigerian society without poverty, discrimination and fear; where talents and creative thinking are encouraged and translated into sustainable wealth and the courage to lead and make innovative, positive decisions.",
    address:
      "R 33A Megamound Estate, Lekki County Homes,  Ikotun Lekki,  Lagos  Nigeria",
    telephone: "+234 803 645 1488",
    sameAs: "https://www.createstars.org/",
    employee: {
      "@type": "Person",
      name: "Krukrubo Obeleye JACKLYN",
      image: "https://www.createstars.org/about/mentors",
      url: "https://www.createstars.org/about/mentors",
      jobTitle:
        "Krukrubo Obeleye Jacklyn is a Creative Artist, a lawyer, Teacher and an Administrator by profession. She has worked in various capacity as Special Adviser to LGA Council on Legal matters, Head of Legal Unit with State Government Agency, as a legal practitioner with a private chamber and head of Legal Department in CREATE.",
      spouse: {
        "@type": "Person",
        name: "Krukrubo-Karibi Ibiyekaribo MORGAN",
        image: "https://www.createstars.org/about/mentors",
        url: "https://www.createstars.org/about/mentors",
        jobTitle:
          "Krukrubo-Karibi Ibiyekaribo Morgan is a Finance & Administrative professional whose wealth of experience span across different sectors of the economy i.e. Banking & Finance, Hospitality, Oil & Gas, Marketing, Public Sector & Creative industry",
      },
    },
    founder: {
      "@type": "Person",
      name: "HILDA DOKUBO",
      image:
        "https://www.createstars.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhilda.008625dc.webp&w=2048&q=75",
      url: "https://www.createstars.org/about/hildadokubo",
      jobTitle: "ACTOR, TEACHER, PHILANTHROPIST, ACTIVIST",
    },
    sponsor: {
      "@type": "Organization",
      name: "National Film and Video Censors Board",
      url: "https://www.nfvcb.gov.ng",
    },
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index, noarchive" />
        <meta name="Googlebot" content="follow, index, noarchive" />
        <meta name="application-name" content="Createstars" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Createstars" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#3457D5" />
        <link rel="robots" href="/robots.txt" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta
          name="keywords"
          content="hilda, HildaStars, Hilda createstars createstars hilda, createstars lekki, createstars lagos, Create, Stars, Createstars, Create Stars, foundation, Create Stars Foundation, Createstarsfoundation, Stars Foundation, Create Foundation, Createfoundation"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon-16x16.png" type="image/png" />
        <link rel="shortcut icon" href="/favicon-32x32.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
        />
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        {/* <meta
          name="google-site-verification"
          content={process.env.NEXT_PUBLIC_GOOGLE_INDEX_VERIFICATION_ID}
        /> */}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
