import Image from "next/image";

export default function Home() {
  return (
    <div className="px-[12rem] py-5">
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
      <main>
        <div className="flex gap-4 items-start justify-between my-40">
          <div className="prose-lg prose-headings: dark:prose-invert w-full flex flex-col">
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
      </main>
      <footer></footer>
    </div>
  );
}
