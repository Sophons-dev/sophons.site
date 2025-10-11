import { about } from "@/data/about";

export default function About() {
  return (
    <div id="about" className="pt-12">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 sm:mb-8 text-white">
        Who Are We?
      </h2>
      <div className="space-y-4 sm:space-y-6">
        {about.map((paragraph, index) => (
          <p
            key={index}
            className="text-gray-300 leading-relaxed text-base sm:text-lg"
          >
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}
