
export default function Home() {
  return (
    <main className="w-full max-w-3xl mx-auto pt-12 pb-12 px-6 sm:px-8">
      {/* HEADER SECTION */}
      <section className="mb-16 text-center sm:text-left">
        <div className="flex flex-col sm:flex-row items-center sm:justify-start gap-1 sm:gap-2 text-base text-slate-600 font-medium tracking-wide mb-6">
          <span>To: Navneeth Ramprasad</span>
          <span className="hidden sm:inline text-slate-300">|</span>
          <span>From: Tharun Kumar Gajula</span>
        </div>
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
          <h3 className="text-lg font-semibold text-slate-900">01. The Pitch</h3>
          <h4 className="text-base font-medium text-orange-700 mt-1">The Product & Operations Builder</h4>
        </div>
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-xl p-8 shadow-sm">
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              A Product-Minded Builder sitting at the intersection of Business Strategy and Technical Execution.
            </p>
            <p>
              Operating in the messy middle means doing the unglamorous work: translating Business Requirements, organizing chaotic data, or building internal tools to make the core business scalable.
            </p>
            <p>
              The goal is not a rigid title, but the effective intersection of Operations, Product, and Data. Ready to blur the lines and execute whatever is needed to accomplish the long-term vision of Praan Health.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 02: THE TOOLKIT */}
      <section className="mb-24 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">02. The Toolkit</h3>
          <h4 className="text-base font-medium text-orange-700 mt-1">What I Bring to the Table</h4>
        </div>
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-xl p-8 shadow-sm">
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              Over the last 5 years, the focus has been on picking up whatever tool solves the problem at hand:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span><strong>Product Management:</strong> Translating vague business goals into clear <strong>BRDs (Business Requirement Documents)</strong> and workflows that engineering teams can actually build.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span><strong>Data Analytics:</strong> Moving beyond data extraction to organize information into dashboards that drive decision-making (Excel, SQL, PowerBI).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span><strong>Workflow Automation & Building Tools:</strong> Identifying bottlenecks and writing the logic (Python/No-Code) to fix them permanently.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span><strong>The "Tech" Edge:</strong> Leveraging recent work at <strong>IISc (AI Executive Program)</strong> to structure operational data today so it is ready for AI models tomorrow, adhering to interpretability standards similar to the finance domain.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 03: WHERE I CAN PLUG IN */}
      <section className="mb-24 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">03. Where I Can Plug In</h3>
          <h4 className="text-base font-medium text-orange-700 mt-1">How I Can Help Praan (Day 1)</h4>
        </div>
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-xl p-8 shadow-sm">
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              Based on what you are building, here is where I can add immediate value without needing a heavy ramp-up:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span><strong>Technical Product Management:</strong> Bridging the gap between your Clinical Team and Tech Team. I can translate medical protocols into technical specifications (User Stories/Workflows) for your app.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span><strong>Academy Operations:</strong> Building the tracking systems to monitor trainer performance and quality consistency across cities.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span><strong>Special Projects:</strong> Acting as a deployable resource for the Founder's Office to execute 0-to-1 internal initiatives.</span>
              </li>
            </ul>
            <div className="pt-2">
              <p><strong>Test My Fitment:</strong> I am ready to execute a specific project or "0 to 1" initiative you have in mind as a practical screening process to prove my value to Praan Health.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 04: THE PROOF & COMMITMENT */}
      <section className="mb-24 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">04. The Proof & Commitment</h3>
          <h4 className="text-base font-medium text-orange-700 mt-1">Builders Build</h4>
        </div>
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-xl p-8 shadow-sm">
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              Your culture emphasizes "Builders." I believe in demonstrating capability rather than just listing it.
            </p>
            <div>
              <p className="font-bold text-slate-900 mb-2">The Context:</p>
              <p>
                I am not a web developer. Last week, I did not have the skill to build what you see linked below. But I had clear intent, a problem statement, and a deadline. I used AI tools and persistence to move from <strong>Idea &gt; Logic &gt; Design &gt; Deployment</strong> over the weekend.
              </p>
            </div>
            <p>
              Most applicants send a PDF. I built a comprehensive Clinical Operating System (Yukti OS) because <strong>builders build.</strong>
            </p>

            <div className="pt-4 border-t border-slate-100 mt-4">
              <p className="font-bold text-slate-900 mb-2">Why I Built This:</p>
              <p className="mb-4">
                True "Skin in the Game" means personal alignment. This is not just a role; it is a problem that fits my long-term arc.
              </p>
              <p>
                I want to dedicate my craft to building the infrastructure of care that our parents deserve.
              </p>
            </div>
          </div>
        </div>

        {/* YUKTI PORTAL CARD */}
        <a
          href="https://yukti-os.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="block group relative overflow-hidden rounded-xl border border-orange-200 bg-white/60 p-8 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-orange-400 hover:shadow-md active:scale-[0.99]"
        >
          {/* Decorative Glow */}
          <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-orange-100 blur-3xl transition-all group-hover:bg-orange-200" />

          <div className="relative flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Project Yukti • Phase 2</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-700 transition-colors">
                The Clinical Assessment Engine (Yukti OS)
              </h3>
              <p className="text-sm text-slate-500 max-w-lg">
                A fully functional operational dashboard simulating Praan's 15-point intake protocol, risk logic, and patient tracking.
              </p>
            </div>

            <div className="flex-shrink-0">
              <span className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition-colors group-hover:bg-orange-600">
                Launch Builder's Lab
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </span>
            </div>
          </div>
        </a>
      </section>

      {/* FOOTER */}
      <footer className="mt-20 mb-12 border-t border-slate-200/60 pt-8">
        <div className="flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-6">
          <div>
            <p className="text-slate-900 font-medium">Built by Tharun Kumar Gajula</p>
            <p className="text-xs text-slate-400 mt-1">Bangalore, India // 2026</p>
          </div>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <a href="https://www.linkedin.com/in/tharungajula/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 cursor-pointer transition-colors">LinkedIn</a>
            <a href="https://github.com/tharungajula2" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 cursor-pointer transition-colors">GitHub</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
