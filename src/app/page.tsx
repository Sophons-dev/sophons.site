import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#14101E] to-[#1F192E]">
      <Header />

      <div className="px-4 sm:px-8 lg:px-24 xl:px-48 py-6 sm:py-8 flex flex-col font-light">
        <main className="prose-xl prose-headings dark:prose-invert flex flex-col">
          <Hero />
          <div className="border-t border-gray-700/30 my-12 sm:my-20 lg:my-32"></div>
          <Pricing />
          <div className="border-t border-gray-700/30 my-12 sm:my-20 lg:my-32"></div>
          <FAQ />
          <div className="border-t border-gray-700/30 my-12 sm:my-20 lg:my-32"></div>
          <About />
          <div className="border-t border-gray-700/30 my-12 sm:my-20 lg:my-32"></div>
          <CallToAction />
        </main>
      </div>

      <Footer />
    </div>
  );
}
