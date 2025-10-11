import Image from "next/image";

export default function Header() {
  return (
    <header className="px-[12rem] sticky top-0 z-50 bg-background/80 backdrop-blur-sm py-2">
      <nav className="flex justify-between items-center">
        <Image
          src="/sophons_logo_1.png"
          alt="Sophons Logo"
          width={140}
          height={40}
          className="h-10 w-auto"
        />
        <ul className="flex justify-between gap-8 text-sm [&_li]:flex [&_li]:items-center">
          <li>
            <a href="#" className="hover:text-blue-400 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="hover:text-blue-400 transition-colors"
            >
              Pricing
            </a>
          </li>
          <li>
            <a href="#faq" className="hover:text-blue-400 transition-colors">
              FAQ
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-400 transition-colors">
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-blue-400 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
