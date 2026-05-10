import heroData from "@/data/hero.json";

const { skillsCard } = heroData;

export function SkillsCard() {
  return (
    <div className="w-full lg:w-80 lg:shrink-0 flex flex-col rounded-[2rem] border-[2.5px] border-black overflow-hidden">
      {/* Header strip */}
      <div className="bg-[#D3E65E] px-5 py-4 flex items-center justify-between border-b-[2.5px] border-black">
        <span className="font-display text-sm uppercase tracking-widest text-black">
          {skillsCard.label}
        </span>
        <span className="flex items-center gap-1.5 font-body text-xs text-black/70">
          <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
          {skillsCard.available}
        </span>
      </div>

      {/* Stats row */}
      <div className="bg-[#FFA8C7] border-b-[2.5px] border-black px-5 py-3 grid grid-cols-3 divide-x-[1.5px] divide-black/20">
        {skillsCard.stats.map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col items-center px-2 first:pl-0 last:pr-0"
          >
            <span className="font-display text-xl text-black leading-none">
              {stat.value}
            </span>
            <span className="font-body text-[10px] text-black/60 uppercase tracking-wide mt-0.5 text-center">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {/* Skills body */}
      <div className="bg-[#FAFAF5] flex-1 flex flex-col divide-y divide-black/10 px-5 py-4 gap-4">
        {skillsCard.skills.map((group) => (
          <div key={group.category} className="pt-3 first:pt-0">
            <p className="font-body text-[10px] font-bold uppercase tracking-[0.15em] text-black/40 mb-2">
              {group.category}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="font-body text-xs text-black border border-black/20 rounded-full px-2.5 py-0.5 bg-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
