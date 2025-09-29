import Image from "next/image";

export default function Home() {
  return (
    <div className="px-[12rem] py-5 flex flex-col gap-40 font-light">
      <header>
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
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="prose-xl prose-headings dark:prose-invert flex flex-col gap-18">
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
              Contact Us
            </button>
          </div>

          <Image src="/hero_1.png" alt="hero image" width={500} height={500} />
        </div>

        {/* Pricing */}
        <div>
          <div className="relative">
            <span className="absolute -top-4 text-sm text-slate-400">
              Get an accurate estimate
            </span>
            <h2 className="font-bold text-[#A15AFF]">Free Consultation</h2>
          </div>

          <div className="grid grid-cols-3 gap-5">
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
        <div></div>

        {/* About */}
        <div></div>

        {/* Pre-footer CTA */}
        <div></div>
      </main>
      <footer></footer>
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
