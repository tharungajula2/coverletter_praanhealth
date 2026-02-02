
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
          Product • Data Analytics • Operations
        </h1>
        <h2 className="text-xl font-medium text-orange-700 mt-2">
          Bridging Business Strategy and Technical Execution
        </h2>
      </section>

      {/* SECTION 01: THE PROFESSIONAL SUMMARY */}
      <section className="mb-24 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">01. The Professional Summary</h3>
          <h4 className="text-base font-medium text-orange-700 mt-1">Connecting the Dots</h4>
        </div>
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-xl p-8 shadow-sm">
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              I operate at the intersection of Business Strategy and Technical Execution.
            </p>
            <p>
              My experience spans the full spectrum of delivery - from translating vague business requirements into clear technical specifications, to transforming raw data into predictive machine learning models, and building custom automation tools that solve operational bottlenecks.
            </p>
            <p>
              I prioritize the necessary, unglamorous work that connects Operations, Product, and Data. <strong>My goal is simple:</strong> To blur the lines between these functions and execute whatever infrastructure is needed to accomplish the long-term vision of Praan Health.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 02: THE EXECUTION ENGINE */}
      <section className="mb-24 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">02. The Execution Engine</h3>
          <h4 className="text-base font-medium text-orange-700 mt-1">Capabilities & Immediate Impact</h4>
        </div>
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-xl p-8 shadow-sm">
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              Over the last 5 years, the focus has been on picking up whatever tool solves the problem at hand. Here is how that toolkit translates to value for Praan Health from Day 1:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span><strong>Technical Product Management</strong><br />Bridging the gap between Clinical Teams and Engineering. This involves translating medical protocols and business goals into clear BRDs (Business Requirement Documents), user stories, and workflows that developers can actually build.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span><strong>Data Intelligence & AI</strong><br />Moving beyond simple data extraction to manage the full data lifecycle. Whether it involves cleaning raw data or designing dashboards for the Founder's Office, the focus is on building predictive machine learning models and AI solutions that drive decision-making.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span><strong>Operations & Automation</strong><br />Identifying bottlenecks in daily workflows and building the logic to fix them. For initiatives like the Praan Academy, this means creating tracking systems and automation layers (using Python or No-Code) to monitor quality and consistency at scale.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span><strong>0-to-1 Execution</strong><br />Acting as a deployable resource for special projects. Ready to execute internal initiatives that need a "Builder" mindset—owning the process from idea to deployment without needing a heavy ramp-up.</span>
              </li>
            </ul>
            <div className="pt-2">
              <p><strong>Test My Fitment:</strong> Ready to execute a specific project or initiative as a practical screening process to prove value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03: THE PROOF & COMMITMENT */}
      <section className="mb-24 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">03. The Proof & Commitment</h3>
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
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">PROJECT YUKTI • EXPERIMENTAL BUILD</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-700 transition-colors">
                Clinical Workflow Prototype (Yukti OS)
              </h3>
              <p className="text-sm text-slate-500 max-w-lg">
                A personal exploration of patient data workflows. Simulates device inputs and AI analysis to visualize how a connected care journey could look.
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
