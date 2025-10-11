export interface ItemizedOption {
  label: string;
  options: string[];
}

export interface SiteOffering {
  title: string;
  description: string;
  inclusions: string[];
  itemizedOptions: ItemizedOption[];
}

export const siteOfferings: SiteOffering[] = [
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
