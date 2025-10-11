import Image from "next/image";

export default function Home() {
  return (
    <div className="px-[12rem] py-5 flex flex-col gap-40 font-light">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm py-2">
        <nav className="flex justify-between">
          <Image
            src="/sophons_logo_1.png"
            alt="Sophons Logo"
            width={140}
            height={40}
          />
          <ul className="flex justify-between gap-10 text-sm [&_li]:flex [&_li]:items-center">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#faq">FAQ</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="prose-xl prose-headings dark:prose-invert flex flex-col gap-[5rem]">
        {/* Hero Section */}
        <div className="flex gap-4 items-start justify-between">
          <div className="w-full flex flex-col">
            <div className="relative">
              <h1 className="font-bold">Got an Idea?</h1>
              <span className="absolute bottom-1 text-[28px] text-white font-light">
                Lets build that.
              </span>
            </div>
            <p className="max-w-[55ch]">
              At Sophons, we turn <strong>ideas into reality</strong>—building
              high-converting landing pages, streamlining workflows with
              internal tools, and handling the tech so you can focus on
              innovation.
            </p>
            <button className="rounded-full w-fit px-6 py-1 bg-[#236CFF]">
              ✉️ Contact Us
            </button>
          </div>

          <Image src="/hero_1.png" alt="hero image" width={500} height={500} />
        </div>

        {/* Pricing */}
        <div id="pricing" className="pt-[3rem]">
          <div className="relative">
            <span className="absolute -top-4 text-sm text-slate-400">
              Get an accurate estimate
            </span>
            <h2 className="font-bold text-[#A15AFF]">Free Consultation</h2>
          </div>

          <div className="grid grid-cols-3 gap-[2rem]">
            {siteOfferings.map((value, key) => {
              return (
                <div key={key}>
                  <h3 className="font-bold">{value.title}</h3>
                  <p className="text-sm text-slate-300">{value.description}</p>
                  <div className="flex flex-col gap-0">
                    {value.inclusions.map((option, index) => (
                      <span
                        key={index}
                        className={`text-md ${index === 0 ? "font-bold" : ""}`}
                      >
                        ✅ {option}
                      </span>
                    ))}
                  </div>

                  {/* Itemized Options */}
                  <div className="mt-2">
                    {value.itemizedOptions.map((option, index) => (
                      <span
                        key={index}
                        className={`text-md ${index === 0 ? "font-bold" : ""}`}
                      >
                        {option.label}
                        <div className="flex flex-col">
                          {option.options.map((option, index) => (
                            <span key={index} className="text-sm font-light">
                              - {option}
                            </span>
                          ))}
                        </div>
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ */}
        <div
          id="faq"
          className="pt-[3rem] prose-xl prose-headings dark:prose-invert flex items-baseline justify-between"
        >
          {/* FAQ Title and Intro (Left Side) */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white">
              Frequently Asked <br /> Questions
            </h2>
            <p className="text-slate-300 max-w-md text-sm">
              We compiled a list of answers to address your most pressing
              questions regarding our Services.
            </p>
          </div>

          {/* FAQ Items (Right Side) */}
          <div className="flex flex-col gap-4 w-[75ch]">
            {faq.map((value, key) => {
              return (
                <details
                  key={key}
                  className="border p-2 rounded-xl border-slate-300/20 text-md hover:bg-slate-300/10 transition-all duration-300"
                >
                  <summary className="font-medium cursor-pointer select-none">
                    {value.question}
                  </summary>
                  <p>{value.answer}</p>
                </details>
              );
            })}
          </div>
        </div>

        {/* About */}
        <div
          id="about"
          className="prose-xl pt-[3rem] prose-headings dark:prose-invert"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white">
            Who Are We?
          </h2>
          {about.map((value, key) => {
            return <p key={key}>{value}</p>;
          })}
        </div>

        {/* Pre-footer CTA */}
        <div id="pre-footer-cta"></div>
      </main>

      <div className="prose-xl pt-[3rem] prose-headings dark:prose-invert">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white">
          Don't Know Where to Start?
        </h2>
        <p>Feeling a little lost? That's completely normal.</p>
        <p className="text-[#D1D1D1] text-lg leading-relaxed max-w-2xl">
          Let's talk. Schedule a free, no-obligation consultation with our team.
          We'll listen to your goals and help you find the perfect package for
          your business and budget. No pressure, just a friendly chat to get you
          on the right track.
        </p>
        <button className="rounded-full w-fit px-8 py-3 bg-[#4285F4] text-white font-medium text-lg">
          Get in touch!
        </button>
        <div className="flex items-center gap-2 text-white text-lg">
          <span>✉️ sophons.dev@gmail.com</span>
        </div>
      </div>

      <footer className="bg-[#1A162A] border-t border-[#232040] py-6 px-4 flex flex-col md:flex-row items-center justify-between text-[#d1d1d1] text-sm space-y-3 md:space-y-0 gap-6 md:gap-0">
        <div className="flex items-center gap-2">
          <span>&copy; {new Date().getFullYear()} Sophons.dev</span>
          <span className="hidden md:inline">·</span>
          <a
            href="mailto:sophons.dev@gmail.com"
            className="hover:underline hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://x.com/sophonsdev"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sophons Twitter/X"
            className="hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M20.89 4.37h-3.55l-3.08 4.01-3.68-4.01H3.03l7.42 8.12L3 19.63h3.55l3.32-4.32 4.09 4.32h4.19l-7.82-8.64 7.56-7.92zm-2.93 13.02h-1.69l-2.83-3.01-2.29 3.01H6.25l5.23-5.56 5.48 5.56z"
              />
            </svg>
          </a>
          <a
            href="https://github.com/sophons"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sophons GitHub"
            className="hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.112.82-.26.82-.577v-2.17c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.084-.731.084-.731 1.205.085 1.84 1.236 1.84 1.236 1.072 1.834 2.809 1.305 3.495.997.108-.775.419-1.306.762-1.607-2.666-.305-5.466-1.334-5.466-5.931 0-1.309.469-2.381 1.235-3.221-.123-.304-.535-1.527.117-3.183 0 0 1.008-.323 3.301 1.23a11.52 11.52 0 0 1 3.004-.404c1.018.005 2.045.138 3.003.404 2.292-1.553 3.297-1.23 3.297-1.23.653 1.656.242 2.879.12 3.183.77.84 1.234 1.912 1.234 3.221 0 4.609-2.804 5.624-5.476 5.921.43.372.814 1.102.814 2.222v3.293c0 .32.217.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

const siteOfferings = [
  {
    title: "Starter",
    description:
      "Perfect for businesses that need a strong online presence to turn visitors into customers.",
    inclusions: [
      "1 year free hosting included",
      "No ongoing maintenance required",
      "SEO optimized",
      "Fast, modern static site",
      "External links (socials, forms, etc.)",
    ],
    itemizedOptions: [],
  },
  {
    title: "Expand",
    description:
      "For startups and businesses that need a website that sells, books, and performs — not just one that looks good.",
    inclusions: [
      "1 year free hosting included",
      "SEO optimized",
      "Online store or booking system",
      "Secure payment gateway integration",
      "AI-powered add-ons (chatbots, personalization, smart recommendations)",
      "Custom design & third-party integrations",
    ],
    itemizedOptions: [
      {
        label: "Monthly Maintenance Plan: starting at $250/mo.",
        options: [
          "Security, updates, and performance monitoring",
          "Additional fees apply for advanced integrations",
        ],
      },
    ],
  },
  {
    title: "Custom",
    description:
      "For businesses that need total flexibility, powerful internal tools, and seamless integrations to scale smarter.",
    inclusions: [
      "1 year free hosting included",
      "Custom dashboards & internal tools",
      "External app integrations (CRM, ERP, APIs)",
      "Scalable, high-performance architecture",
      "Tailored workflows & automation",
    ],
    itemizedOptions: [
      {
        label: "Monthly Maintenance Plan: starting at $470/mo.",
        options: ["Upkeep fees for complex system integrations"],
      },
    ],
  },
];

const faq = [
  {
    question: "How much does a website from Sophons cost?",
    answer:
      "We believe that professional web development should be accessible. Our prices vary based on what you need: from web presence and specials to ecommerce, different tools. This is also true for our exceptional quality! With this base and individual, passing the best we can get directly on to you.",
  },
  {
    question: "How long will it take to build my website?",
    answer:
      "Project timelines depend on your requirements and the complexity of features. Most standard landing pages and websites launch within 2-4 weeks. Larger or custom projects may take 4-8 weeks or more. You'll get a timeline estimate after our initial discussion.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes! Every website we build is fully responsive—meaning it works beautifully on phones, tablets, and desktops.",
  },
  {
    question: "Can I update my website myself after launch?",
    answer:
      "Currently, all updates are done-for-you—just let us know and we'll handle everything, so you don’t have to worry about any technical steps. If you need routine changes or want maintenance, we offer convenient service plans to keep your site fresh.",
  },
  {
    question: "Do you provide hosting and domain registration?",
    answer:
      "We include 1 year of hosting for free with all plans. If you don’t have a domain, we’ll help you find and register the perfect one for your business.",
  },
  {
    question:
      "Can you integrate third-party tools (like CRMs, booking systems, analytics)?",
    answer:
      "Yes! We specialize in integrations, from e-commerce to booking to analytics, payments, email marketing, and more. Tell us what you need, and we’ll make it happen.",
  },
  {
    question: "Is SEO included?",
    answer:
      "Definitely—every site comes with SEO fundamentals baked in. We use best practices for speed, accessibility, and search ranking. Need advanced SEO? We also offer custom packages.",
  },
  {
    question: "What does the process look like?",
    answer:
      "After an initial call to discuss your vision, we’ll send a proposal. Once approved, we handle design, development, content, testing, launch, and ongoing support. You’ll always know what’s happening at each stage.",
  },
  {
    question: "Do you offer ongoing support after my site is live?",
    answer:
      "Yes—we offer optional maintenance and support plans for updates, security, monitoring, and new features. Or, you can manage things on your own. Your choice!",
  },
];

const about = [
  "Sophons is a NEW web development service provider on a mission to bring your digital vision to life. We specialize in building high-performance, modern web experiences that are as unique as your business.",
  "At our core, we believe that proven, real technology should be accessible to everyone. We take the stress out of the equation for you—from lightning-fast code to clear and affordable processes, to robust conversion platforms that drive sales.",
  "But our passion is in building clarity for you. We excel at creating powerful information tools and flawless code that boost your brand’s credibility and provide deep insight into your operations. We love to solve complex challenges, bringing individuals, ideas, data, info, and integration with accuracy, best practices, and intelligent systems.",
  "Whether you’re a trailblazer needing a simple, professional website or an enterprise looking to build a concrete, custom application, we’re here to be your trusted partner. Our commitment is simple: we deliver reliable solutions that just work.",
];
