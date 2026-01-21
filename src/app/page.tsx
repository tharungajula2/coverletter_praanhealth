import BuildersLab from "@/components/BuildersLab";

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
          <h4 className="text-base font-medium text-orange-700 mt-1">The Product-Minded Generalist</h4>
        </div>
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-xl p-8 shadow-sm">
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              I am a Product-Minded Generalist who builds the systems that make teams efficient.
            </p>
            <p>
              I operate in the messy middle: between Strategy and Execution. Whether it is defining Product Requirements, organizing chaotic data, or building internal tools, I exist to make the core business scalable.
            </p>
            <p>
              I am not looking for a rigid title. I am looking for the intersection of Operations, Product, and Data, but I am ready to blur the lines and do whatever is needed to accomplish the long-term vision of Praan Health.
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
              I have spent the last 5 years working across different domains, picking up whatever tool was needed to solve the problem at hand:
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span><strong>Product Management:</strong> I have experience translating vague business goals into clear <strong>BRDs (Business Requirement Documents)</strong> and workflows that engineering teams can actually build.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span><strong>Data Analytics:</strong> I don't just extract data; I organize it into dashboards that help decision-making (Excel, SQL, PowerBI).</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span><strong>Workflow Automation & Building Tools:</strong> I have a track record of identifying bottlenecks and writing the logic (Python/No-Code) to fix them.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-slate-400 mt-1">•</span>
                <span><strong>The "Tech" Edge:</strong> My recent work at <strong>IISc (AI Executive Program)</strong> allows me to understand how to structure operational data today so it is ready for AI models tomorrow, following the interpretability and explainability requirements as per regulations similar to the finance domain.</span>
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

      {/* SECTION 04: THE PROOF */}
      <section className="mb-24 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">04. The Proof</h3>
          <h4 className="text-base font-medium text-orange-700 mt-1">Builders Only</h4>
        </div>
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-xl p-8 shadow-sm">
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              Your culture emphasizes "Builders." I believe in demonstrating capability rather than just listing it.
            </p>
            <p><strong>The Context:</strong></p>
            <p>
              I am not a web developer. Last week, I did not have the skill to build what you see below. But I had clear intent, a problem statement, and a deadline. I used AI tools and persistence to move from <strong>Idea &gt; Logic &gt; Design &gt; Deployment</strong> over the weekend.
            </p>
            <p>
              Most applicants send a PDF. I built this interactive prototype because <strong>builders build.</strong> I wanted to prove I have the <strong>Product Intuition</strong> to understand your user, the <strong>Clinical Depth</strong> to respect your protocols, and the <strong>Resourcefulness</strong> to simply figure it out.
            </p>
          </div>
        </div>
      </section>

      {/* COMPONENT: THE BUILDER'S LAB */}
      <BuildersLab />

      {/* SECTION 05: THE WHY */}
      <section className="mb-12 space-y-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">05. Skin in the Game</h3>
          <h4 className="text-base font-medium text-orange-700 mt-1">Why I Built This.</h4>
        </div>
        <div className="bg-white/80 backdrop-blur-xl border border-slate-200/60 rounded-xl p-8 shadow-sm">
          <div className="space-y-6 text-slate-700 leading-relaxed">
            <p>
              True "Skin in the Game" means personal alignment. I am not just looking for a role; I am looking to solve this specific problem because it matters to me personally and professionally.
            </p>
            <p>
              You will get my best work because this mission aligns with my own long-term arc. I want to align my craft with your cause and contribute to building the infrastructure of care that our parents deserve.
            </p>

            <p className="font-bold text-slate-900 text-lg pt-4 border-t border-slate-100 mt-6">
              Let's get to work.
            </p>
          </div>
        </div>
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
