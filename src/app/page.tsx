export default function Home() {
  return (
    <main className="w-full max-w-3xl mx-auto pt-12 pb-12 px-6 sm:px-8">
      {/* HEADER SECTION */}
      <section className="mb-16 text-center sm:text-left">
        <p className="text-base text-slate-600 font-medium tracking-wide mb-4">
          To: Navneeth Ramprasad <span className="text-slate-400 px-2">|</span> From: Tharun Kumar Gajula
        </p>
        <h1 className="text-4xl font-serif font-medium text-slate-900 tracking-tight">
          A Builder for the Founder's Office
        </h1>
        <h2 className="text-xl font-medium text-orange-700 mt-2">
          Product, Operations, and Data Execution.
        </h2>
      </section>

      {/* SECTION 01: THE PITCH */}
      <section className="mb-24 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">I am not a "Head of Education" or a "D2C Expert."</h3>
          <h4 className="text-base font-medium text-orange-700 mt-1">I am a Product-Minded Generalist who builds the systems that make teams efficient.</h4>
        </div>
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-xl p-8 shadow-sm">
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              I saw your search for leaders in Academy and D2C. While I am not a clinician or a retail founder, I am the <strong>Infrastructure Builder</strong> who supports those leaders.
            </p>
            <p>
              I operate in the messy middle—between Strategy and Execution. Whether it's defining Product Requirements, organizing chaotic data, or building internal tools, I exist to make the core business scalable.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 02: THE TOOLKIT */}
      <section className="mb-24 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">What I Bring to the Table</h3>
          <h4 className="text-base font-medium text-orange-700 mt-1">A hybrid background of Corporate Discipline + Freelance Agility.</h4>
        </div>
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-xl p-8 shadow-sm">
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              I have spent the last 5 years working across different domains, picking up whatever tool was needed to solve the problem at hand:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span><strong>Product Management:</strong> I have experience translating vague business goals into clear <strong>BRDs (Business Requirement Documents)</strong> and workflows that engineering teams can actually build.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span><strong>Data Analytics:</strong> I don’t just extract data; I organize it into dashboards that help decision-making (Excel, SQL, Tableau).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span><strong>Workflow Automation:</strong> I have a track record of identifying bottlenecks and writing the logic (Python/No-Code) to fix them.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span><strong>The "Deep Tech" Edge:</strong> My recent work at <strong>IISc (Deep Learning)</strong> allows me to understand how to structure operational data today so it is ready for AI models tomorrow.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 03: WHERE I CAN PLUG IN */}
      <section className="mb-24 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">How I Can Help Praan (Day 1)</h3>
          <h4 className="text-base font-medium text-orange-700 mt-1">Product Management & Academy Operations.</h4>
        </div>
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-xl p-8 shadow-sm">
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              Based on what you are building, here is where I can add immediate value without needing a heavy ramp-up:
            </p>
            <ol className="space-y-4 list-decimal list-outside ml-4 pl-2">
              <li>
                <strong>Technical Product Management:</strong> Bridging the gap between your Clinical Team and Tech Team. I can translate medical protocols into technical specifications (User Stories/Workflows) for your app.
              </li>
              <li>
                <strong>Academy Operations:</strong> Building the tracking systems to monitor trainer performance and quality consistency across cities.
              </li>
              <li>
                <strong>Special Projects:</strong> Acting as a deployable resource for the Founder’s Office to execute 0-to-1 internal initiatives.
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* SECTION 04: THE PROOF */}
      <section className="mb-24 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Builders Only</h3>
          <h4 className="text-base font-medium text-orange-700 mt-1">Why I built this app.</h4>
        </div>
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-xl p-8 shadow-sm">
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Your culture emphasizes 'Builders.' I believe in demonstrating capability rather than just listing it.
            </p>
            <p>
              I built this web application over the weekend to show that I can move from <strong>Idea → Logic → Design → Deployment</strong> rapidly. I am ready to bring this same ownership to Praan.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 05: THE WHY */}
      <section className="mb-12 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Skin in the Game</h3>
          <h4 className="text-base font-medium text-orange-700 mt-1">Alignment with the Long Arc.</h4>
        </div>
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-xl p-8 shadow-sm">
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              I am drawn to Praan because you are solving a long-arc problem. I want to use my energy to build systems that respect human dignity and scale preventative health.
            </p>
            <p className="font-medium text-slate-900">
              I am ready to work in <strong>Product Management, Academy Infrastructure, or the Founder's Office</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center text-sm text-slate-400 mt-8 mb-0 space-y-2">
        <p>Built by Tharun Kumar Gajula // India // 2026</p>
        <div className="flex justify-center gap-4">
          <span>LinkedIn</span>
          <span>Portfolio/Github</span>
        </div>
      </footer>
    </main>
  );
}
