import { LinkedIn } from "./socials";

export default function Footer() {
  return (
    <footer className="bg-[#1A162A] border-t border-[#232040] py-8 px-4 sm:px-8 lg:px-24 xl:px-48 mt-16">
      <div className="flex flex-col md:flex-row items-center justify-between text-[#d1d1d1] text-sm space-y-4 md:space-y-0 gap-6 md:gap-0">
        <div className="flex items-center gap-2">
          <span>&copy; {new Date().getFullYear()} Sophons</span>
          <span className="hidden md:inline">·</span>
          <a
            href="mailto:sophons.dev@gmail.com"
            className="hover:underline hover:text-white transition-colors"
          >
            Contact
          </a>
        </div>
        <LinkedIn />
      </div>
    </footer>
  );
}
