import Image from "next/image";
import CopyMail from "./copy-mail";
import { LinkedIn } from "./socials";

export default function Hero() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 items-start lg:justify-between">
      <div className="w-full flex flex-col gap-6 items-center lg:items-start text-center lg:text-left">
        <div className="relative">
          <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl">
            Got an Idea?
          </h1>
          <span className="block lg:absolute lg:bottom-1 text-xl sm:text-2xl lg:text-[28px] text-white font-light">
            Lets build that.
          </span>
        </div>
        <p className="max-w-[55ch] text-base sm:text-lg leading-relaxed text-gray-300">
          At Sophons, we turn{" "}
          <strong className="text-white">ideas into reality</strong>—building
          high-converting landing pages, streamlining workflows with internal
          tools, and handling the tech so you can focus on innovation.
        </p>
        <a
          href="mailto:sophons.dev@gmail.com"
          className="rounded-full w-fit px-6 sm:px-8 py-3 bg-[#4285F4] hover:bg-[#3367d6] transition-colors text-white font-medium text-base sm:text-lg text-center"
        >
          Get in touch!
        </a>
        <div>
          <span className="italic text-gray-300 text-sm">Our socials:</span>
          <div className="flex items-center gap-4">
            <LinkedIn />
            <CopyMail version={"icon-only"} />
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <Image
          src="/hero_1.png"
          alt="hero image"
          width={500}
          height={500}
          className="rounded-lg shadow-2xl"
        />
      </div>
    </div>
  );
}
