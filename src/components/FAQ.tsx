import { faq } from "@/data/faq";

export default function FAQ() {
  return (
    <div id="faq" className="pt-12">
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 lg:gap-12">
        <div className="lg:w-1/3">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">
            Frequently Asked <br /> Questions
          </h2>
          <p className="text-slate-300 max-w-md text-sm leading-relaxed">
            We compiled a list of answers to address your most pressing
            questions regarding our Services.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:gap-4 lg:w-2/3">
          {faq.map((item, index) => (
            <details
              key={index}
              className="border border-slate-300/20 p-3 sm:p-4 rounded-xl hover:bg-slate-300/10 transition-all duration-300 group"
            >
              <summary className="font-medium cursor-pointer select-none text-white group-hover:text-blue-400 transition-colors">
                {item.question}
              </summary>
              <p className="mt-3 text-gray-300 leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
