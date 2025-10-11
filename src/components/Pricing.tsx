import { siteOfferings } from "@/data/siteOfferings";

export default function Pricing() {
  return (
    <div id="pricing" className="pt-12">
      <div className="relative mb-12">
        <span className="absolute -top-4 text-sm text-slate-400">
          Get an accurate estimate
        </span>
        <h2 className="font-bold text-3xl lg:text-4xl text-[#A15AFF]">
          Free Consultation
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {siteOfferings.map((offering, index) => (
          <div
            key={index}
            className="bg-gray-800/50 rounded-xl p-4 sm:p-6 border border-gray-700/50 hover:border-gray-600/50 transition-colors"
          >
            <h3 className="font-bold text-xl mb-3 text-white">
              {offering.title}
            </h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {offering.description}
            </p>

            <div className="flex flex-col gap-2 mb-6">
              {offering.inclusions.map((inclusion, inclusionIndex) => (
                <span
                  key={inclusionIndex}
                  className={`text-sm ${
                    inclusionIndex === 0
                      ? "font-bold text-white"
                      : "text-gray-300"
                  }`}
                >
                  ✅ {inclusion}
                </span>
              ))}
            </div>

            {offering.itemizedOptions.length > 0 && (
              <div className="mt-4 pt-4 border-t border-gray-700/50">
                {offering.itemizedOptions.map((option, optionIndex) => (
                  <div key={optionIndex}>
                    <span className="text-sm font-bold text-white">
                      {option.label}
                    </span>
                    <div className="flex flex-col mt-2">
                      {option.options.map((subOption, subIndex) => (
                        <span
                          key={subIndex}
                          className="text-xs text-gray-400 ml-2"
                        >
                          - {subOption}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
