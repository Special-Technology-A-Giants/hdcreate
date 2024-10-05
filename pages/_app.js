import Footer from "@/components/general/Footer";
import Nav from "@/components/general/Nav";
import SEO from "@/components/general/SEO";
import "@/styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      {!Component.hideDefaultSEO && (
        <SEO
          title={Component.title}
          description={Component.description}
          image={Component.image}
          imageDescription={Component.imageDescription}
        />
      )}

      <Nav />

      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>

      <Footer />
    </>
  );
}
