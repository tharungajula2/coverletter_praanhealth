export default function Home() {
  return (
    <main className="w-full max-w-[840px] mx-auto pb-12 px-6 sm:px-8">

      {/* Dedication */}
      {/* Dedication */}
      {/* Dedication */}
      <div className="pt-12 pb-8 text-left">
        <p className="text-base font-medium text-slate-500 font-sans tracking-wide leading-relaxed">
          To<br />
          Navneeth Ramprasad
        </p>
      </div>

      {/* SECTION 1: Intro Header */}
      <section className="pt-12 md:pt-16 pb-16 border-b border-slate-200/40">
        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 ease-out">
          <span className="inline-block px-3 py-1 rounded-full bg-slate-100/80 text-[10px] font-semibold text-slate-400 uppercase tracking-[0.2em] border border-slate-200 backdrop-blur-sm">
            A personal note
          </span>
          <h1 className="text-4xl md:text-5xl font-light text-slate-900 leading-[1.1] tracking-tight">
            Why I want to build with <span className="font-normal text-slate-800">Praan Health</span>
          </h1>
          <p className="text-xl text-slate-500 font-light max-w-2xl leading-relaxed">
            Observations on the intersection of preventative health, data, and user agency.
          </p>
        </div>
      </section>

      {/* SECTION 2: Where I Fit */}
      <div className="relative">
        {/* Subtle decorative line for left alignment continuity */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-200/50 to-transparent -translate-x-8 hidden lg:block" />

        <section className="py-24 space-y-16">
          {/* Chapter Marker */}
          <div className="flex items-center space-x-4">
            <span className="text-slate-300 text-xs font-medium uppercase tracking-widest">01</span>
            <div className="h-px w-8 bg-slate-200"></div>
            <span className="text-slate-400 text-xs font-medium uppercase tracking-widest">The Operating Intersection</span>
          </div>

          <div>
            <div className="space-y-6 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-2">Where I Fit</h2>
                <p className="text-sm font-medium text-slate-500 uppercase tracking-widest">
                  Product × Academy × Quality × Systems
                </p>
              </div>
              <p className="text-xl text-slate-600 font-light max-w-3xl leading-relaxed">
                My work lives in the connective tissue between tools, people, and standards — ensuring that high-stakes healthcare systems function with consistency and humanity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Product Card */}
              <div className="bg-white/80 backdrop-blur-xl rounded-xl p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-700 hover:scale-[1.005]">
                <h3 className="text-lg font-medium text-slate-900 mb-4">Product</h3>
                <div className="space-y-4">
                  <p className="text-slate-600 font-light text-base leading-relaxed">
                    <span className="font-medium text-slate-400 text-[10px] uppercase tracking-widest block mb-2">Responsibility</span>
                    Translating clinical philosophy and operational goals into clear product logic, workflows, and decision-support tools.
                  </p>
                  <div className="pt-4 border-t border-slate-200/60">
                    <p className="text-slate-600 font-light text-base leading-relaxed">
                      <span className="font-medium text-emerald-700/90 text-[10px] uppercase tracking-widest block mb-2">Outcome</span>
                      Products that reinforce judgment instead of replacing it.
                    </p>
                  </div>
                </div>
              </div>

              {/* Academy Card */}
              <div className="bg-white/80 backdrop-blur-xl rounded-xl p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-700 hover:scale-[1.005]">
                <h3 className="text-lg font-medium text-slate-900 mb-4">Academy</h3>
                <div className="space-y-4">
                  <p className="text-slate-600 font-light text-base leading-relaxed">
                    <span className="font-medium text-slate-400 text-[10px] uppercase tracking-widest block mb-2">Responsibility</span>
                    Designing capability systems beyond content — role pathways, certification logic, case-based calibration, and continuous upskilling.
                  </p>
                  <div className="pt-4 border-t border-slate-200/60">
                    <p className="text-slate-600 font-light text-base leading-relaxed">
                      <span className="font-medium text-emerald-700/90 text-[10px] uppercase tracking-widest block mb-2">Outcome</span>
                      Skills that compound instead of decaying.
                    </p>
                  </div>
                </div>
              </div>

              {/* Quality Card */}
              <div className="bg-white/80 backdrop-blur-xl rounded-xl p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-700 hover:scale-[1.005]">
                <h3 className="text-lg font-medium text-slate-900 mb-4">Quality</h3>
                <div className="space-y-4">
                  <p className="text-slate-600 font-light text-base leading-relaxed">
                    <span className="font-medium text-slate-400 text-[10px] uppercase tracking-widest block mb-2">Responsibility</span>
                    Building mechanisms that preserve care quality at scale — audits, feedback loops, recertification, and outcome-linked learning.
                  </p>
                  <div className="pt-4 border-t border-slate-200/60">
                    <p className="text-slate-600 font-light text-base leading-relaxed">
                      <span className="font-medium text-emerald-700/90 text-[10px] uppercase tracking-widest block mb-2">Outcome</span>
                      Predictable, humane care across teams and locations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Systems Card */}
              <div className="bg-white/80 backdrop-blur-xl rounded-xl p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-700 hover:scale-[1.005]">
                <h3 className="text-lg font-medium text-slate-900 mb-4">Systems</h3>
                <div className="space-y-4">
                  <p className="text-slate-600 font-light text-base leading-relaxed">
                    <span className="font-medium text-slate-400 text-[10px] uppercase tracking-widest block mb-2">Responsibility</span>
                    Designing with failure modes in mind, assuming drift unless actively designed against.
                  </p>
                  <div className="pt-4 border-t border-slate-200/60">
                    <p className="text-slate-600 font-light text-base leading-relaxed">
                      <span className="font-medium text-emerald-700/90 text-[10px] uppercase tracking-widest block mb-2">Outcome</span>
                      Fewer silent failures and more resilient operations.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* SECTION 3: Hard Systems Principles */}
      <section className="py-24 space-y-16">
        {/* Chapter Marker */}
        <div className="flex items-center space-x-4">
          <span className="text-slate-300 text-xs font-medium uppercase tracking-widest">02</span>
          <div className="h-px w-8 bg-slate-200"></div>
          <span className="text-slate-400 text-xs font-medium uppercase tracking-widest">Operating Principles</span>
        </div>

        <div className="space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-2">How I Think About Hard Systems</h2>
          <p className="text-xl text-slate-600 font-light max-w-3xl leading-relaxed">
            Principles shaped by working in environments where errors compound silently and quality erosion appears late.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Principle 1 */}
          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-700 hover:scale-[1.005] flex flex-col justify-center">
            <h3 className="text-lg font-medium text-slate-900 mb-3">Auditability over Cleverness</h3>
            <div className="w-8 h-px bg-slate-200/80 mb-4"></div>
            <p className="text-slate-600 font-light text-base leading-relaxed">
              Systems should be inspectable and explainable, especially when decisions affect health, safety, or long-term outcomes.
            </p>
          </div>

          {/* Principle 2 */}
          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-700 hover:scale-[1.005] flex flex-col justify-center">
            <h3 className="text-lg font-medium text-slate-900 mb-3">Quality Must Be Designed</h3>
            <div className="w-8 h-px bg-slate-200/80 mb-4"></div>
            <p className="text-slate-600 font-light text-base leading-relaxed">
              Quality does not emerge from good intentions; it survives only when explicitly encoded into workflows and incentives.
            </p>
          </div>

          {/* Principle 3 */}
          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-700 hover:scale-[1.005] flex flex-col justify-center">
            <h3 className="text-lg font-medium text-slate-900 mb-3">Human Judgment Is a Feature</h3>
            <div className="w-8 h-px bg-slate-200/80 mb-4"></div>
            <p className="text-slate-600 font-light text-base leading-relaxed">
              Systems should support judgment under uncertainty, not attempt to automate it away.
            </p>
          </div>

          {/* Principle 4 */}
          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-700 hover:scale-[1.005] flex flex-col justify-center">
            <h3 className="text-lg font-medium text-slate-900 mb-3">Learning Must Be Continuous</h3>
            <div className="w-8 h-px bg-slate-200/80 mb-4"></div>
            <p className="text-slate-600 font-light text-base leading-relaxed">
              One-time training fails. Systems must continuously absorb feedback from real outcomes and edge cases.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4: Builder Mindset */}
      <section className="py-24 space-y-16">
        {/* Chapter Marker */}
        <div className="flex items-center space-x-4">
          <span className="text-slate-300 text-xs font-medium uppercase tracking-widest">03</span>
          <div className="h-px w-8 bg-slate-200"></div>
          <span className="text-slate-400 text-xs font-medium uppercase tracking-widest">Execution Bias</span>
        </div>

        <div className="space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-2">Builder Mindset</h2>
          <p className="text-xl text-slate-600 font-light max-w-3xl leading-relaxed">
            How I translate intent into working systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Item 1 */}
          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-700 hover:scale-[1.005] group">
            <div className="space-y-6">
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest group-hover:text-slate-500 transition-colors">If there is a model...</p>
              <div className="flex items-start text-slate-700">
                <span className="mr-4 text-slate-300 text-lg group-hover:text-slate-400 transition-colors translate-y-[2px]">→</span>
                <span className="text-lg font-light leading-snug">I build the scorecard and dashboard</span>
              </div>
            </div>
          </div>

          {/* Item 2 */}
          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-700 hover:scale-[1.005] group">
            <div className="space-y-6">
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest group-hover:text-slate-500 transition-colors">If there is a workflow...</p>
              <div className="flex items-start text-slate-700">
                <span className="mr-4 text-slate-300 text-lg group-hover:text-slate-400 transition-colors translate-y-[2px]">→</span>
                <span className="text-lg font-light leading-snug">I map it, automate it, and stress-test it</span>
              </div>
            </div>
          </div>

          {/* Item 3 */}
          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-700 hover:scale-[1.005] group">
            <div className="space-y-6">
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest group-hover:text-slate-500 transition-colors">If there is knowledge...</p>
              <div className="flex items-start text-slate-700">
                <span className="mr-4 text-slate-300 text-lg group-hover:text-slate-400 transition-colors translate-y-[2px]">→</span>
                <span className="text-lg font-light leading-snug">I structure it so others can actually use it</span>
              </div>
            </div>
          </div>

          {/* Item 4 */}
          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-700 hover:scale-[1.005] group">
            <div className="space-y-6">
              <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest group-hover:text-slate-500 transition-colors">If there is complexity...</p>
              <div className="flex items-start text-slate-700">
                <span className="mr-4 text-slate-300 text-lg group-hover:text-slate-400 transition-colors translate-y-[2px]">→</span>
                <span className="text-lg font-light leading-snug">I turn it into an operating system</span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* SECTION 5: Academy as Quality Engine */}
      <section className="py-24 space-y-16">
        {/* Chapter Marker */}
        <div className="flex items-center space-x-4">
          <span className="text-slate-300 text-xs font-medium uppercase tracking-widest">04</span>
          <div className="h-px w-8 bg-slate-200"></div>
          <span className="text-slate-400 text-xs font-medium uppercase tracking-widest">The Quality Engine</span>
        </div>

        <div className="space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-2">Why Academy Is the Quality Engine</h2>
          <p className="text-xl text-slate-600 font-light max-w-3xl leading-relaxed">
            Alignment of people, product, and quality over time.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {/* Block 1: Academy vs HR */}
          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-700 hover:scale-[1.005]">
            <div className="md:flex md:items-start md:space-x-8 lg:space-x-12">
              <h3 className="text-lg font-medium text-slate-900 shrink-0 min-w-[12rem] mb-4 md:mb-0">Academy ≠ HR</h3>
              <p className="text-slate-600 font-light text-lg leading-relaxed max-w-2xl">
                HR focuses on hiring, compliance, and roles. Academy focuses on capability, judgment, and consistency. In healthcare, confusing these leads to quality drift.
              </p>
            </div>
          </div>

          {/* Block 2: Quality Infrastructure */}
          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-700 hover:scale-[1.005]">
            <div className="md:flex md:items-start md:space-x-8 lg:space-x-12">
              <h3 className="text-lg font-medium text-slate-900 shrink-0 min-w-[12rem] mb-4 md:mb-0">Academy Is Infrastructure</h3>
              <p className="text-slate-600 font-light text-lg leading-relaxed max-w-2xl">
                Quality cannot be inspected in at the end. It must be trained, reinforced, and updated continuously. Academy is where standards become explicit and repeatable.
              </p>
            </div>
          </div>

          {/* Block 3: The Reinforcement Loop */}
          <div className="bg-white/80 backdrop-blur-xl rounded-xl p-8 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-700 hover:scale-[1.005]">
            <div className="md:flex md:items-start md:space-x-8 lg:space-x-12">
              <h3 className="text-lg font-medium text-slate-900 shrink-0 min-w-[12rem] mb-4 md:mb-0">The Loop</h3>
              <p className="text-slate-600 font-light text-lg leading-relaxed max-w-2xl">
                Product defines workflows. Academy trains people to operate within them. Quality closes the loop through feedback. When these drift apart, scale breaks silently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Value Early */}
      <section className="py-24 space-y-16">
        {/* Chapter Marker */}
        <div className="flex items-center space-x-4">
          <span className="text-slate-300 text-xs font-medium uppercase tracking-widest">05</span>
          <div className="h-px w-8 bg-slate-200"></div>
          <span className="text-slate-400 text-xs font-medium uppercase tracking-widest">Early Contribution</span>
        </div>

        <div className="space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-2">How I’d Add Value Early</h2>
          <p className="text-xl text-slate-600 font-light max-w-3xl leading-relaxed">
            What I would focus on before trying to scale anything.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          {/* Column 1: Observe */}
          <div className="space-y-8">
            <h3 className="text-lg font-medium text-slate-900 border-b border-slate-100 pb-4">Observe</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 text-slate-300 transform translate-y-1">→</span>
                <span className="text-slate-600 font-light text-lg leading-relaxed">Listening to teams delivering care.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-slate-300 transform translate-y-1">→</span>
                <span className="text-slate-600 font-light text-lg leading-relaxed">Watching how decisions are actually made.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-slate-300 transform translate-y-1">→</span>
                <span className="text-slate-600 font-light text-lg leading-relaxed">Identifying inconsistency, drift, and workarounds.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-slate-300 transform translate-y-1">→</span>
                <span className="text-slate-600 font-light text-lg leading-relaxed">Surfacing where teams rely on tribal knowledge.</span>
              </li>
            </ul>
          </div>

          {/* Column 2: Build */}
          <div className="space-y-8">
            <h3 className="text-lg font-medium text-slate-900 border-b border-slate-100 pb-4">Build</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 text-slate-300 transform translate-y-1">→</span>
                <span className="text-slate-600 font-light text-lg leading-relaxed">Structuring role-based capability pathways.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-slate-300 transform translate-y-1">→</span>
                <span className="text-slate-600 font-light text-lg leading-relaxed">Translating clinical intent into teachable systems.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-slate-300 transform translate-y-1">→</span>
                <span className="text-slate-600 font-light text-lg leading-relaxed">Designing certification and calibration logic.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-slate-300 transform translate-y-1">→</span>
                <span className="text-slate-600 font-light text-lg leading-relaxed">Creating feedback loops between outcomes, training, and protocols.</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-slate-300 transform translate-y-1">→</span>
                <span className="text-slate-600 font-light text-lg leading-relaxed">Ensuring product and academy reinforce each other.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 7: Why This Matters */}
      <section className="py-24 space-y-16">
        {/* Chapter Marker */}
        <div className="flex items-center space-x-4">
          <span className="text-slate-300 text-xs font-medium uppercase tracking-widest">06</span>
          <div className="h-px w-8 bg-slate-200"></div>
          <span className="text-slate-400 text-xs font-medium uppercase tracking-widest">Personal Alignment</span>
        </div>

        <div className="space-y-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-light text-slate-900 mb-2">Why This Matters to Me</h2>
          <p className="text-xl text-slate-600 font-light max-w-3xl leading-relaxed">
            A brief note on personal alignment and long-term orientation.
          </p>
        </div>

        <div className="space-y-8 max-w-3xl">
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            I prefer long-arc problems where the work compounds quietly over time. In my experience, healthcare and aging care are among the few sectors that truly reward this kind of patience and rigor.
          </p>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            Building systems that respect human dignity while ensuring clinical safety is rare, difficult work. That is exactly why I want to do it.
          </p>
          <p className="text-xl text-slate-600 font-light leading-relaxed">
            This isn’t just about solving a puzzle for me. It’s about building infrastructure that matters beyond the next quarter.
          </p>
        </div>
      </section>

      {/* SECTION 8: Final Exit Note */}
      <section className="py-24 md:py-32">
        <p className="text-slate-400 font-light text-lg text-center max-w-2xl mx-auto">
          I share this purely as a demonstration of thinking, leaving the door open without pressure or expectation.
        </p>
      </section>

      {/* Footer */}
      <footer className="pt-12 pb-6 text-center opacity-80">
        <div className="space-y-6">
          <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed max-w-xl mx-auto">
            Built as a personal thinking artifact.<br />
            Shared with respect for long-term systems and the people who steward them.
          </p>
          <div className="space-y-1">
            <p className="text-sm md:text-base text-slate-500 font-medium tracking-wide">
              Tharun
            </p>
            <p className="text-xs text-slate-400 uppercase tracking-widest">
              India · 2026
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
