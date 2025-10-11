"use client";

import CopyMail from "./copy-mail";

export default function CallToAction() {
  return (
    <div id="contact" className="pt-12">
      <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-white">
        Don&apos;t Know Where to Start?
      </h2>
      <p className="text-gray-300 text-lg mb-4">
        Feeling a little lost? That&apos;s completely normal.
      </p>
      <p className="text-[#D1D1D1] text-lg leading-relaxed max-w-2xl mb-8">
        Let&apos;s talk. Schedule a free, no-obligation consultation with our
        team. We&apos;ll listen to your goals and help you find the perfect
        package for your business and budget. No pressure, just a friendly chat
        to get you on the right track.
      </p>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <a
          href="mailto:sophons.dev@gmail.com"
          className="rounded-full w-fit px-8 py-3 bg-[#4285F4] hover:bg-[#3367d6] transition-colors text-white font-medium text-lg text-center"
        >
          Get in touch!
        </a>
        <CopyMail />
      </div>
    </div>
  );
}
