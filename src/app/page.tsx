import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="px-4 sm:px-8 lg:px-24 xl:px-48 py-6 sm:py-8 flex flex-col gap-12 sm:gap-20 lg:gap-32 font-light">
        <main className="space-y-[10rem]">
          <Hero />
          <Pricing />
          <FAQ />
          <About />
          {/* <CallToAction /> */}
        </main>
      </div>

      <Footer />
    </div>
  );
}
