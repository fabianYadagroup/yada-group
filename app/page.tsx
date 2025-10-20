export default function YadaGroupLanding() {
  const fyxer = "https://app.fyxer.com/e/fabian25/30";
  const email = "dealflow@yadagroup.com";

  return (
    <div className="min-h-screen w-full bg-zinc-950 text-zinc-100">
      {/* NAV */}
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-zinc-950/70 border-b border-zinc-800">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-amber-500 to-yellow-300" />
            <span className="text-lg font-semibold tracking-wide">YADA GROUP</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm text-zinc-300">
            <a href="#who" className="hover:text-white">Who we work with</a>
            <a href="#how" className="hover:text-white">Our approach</a>
            <a href="#why" className="hover:text-white">Why YADA</a>
          </nav>
          <div className="flex items-center gap-3">
            <a href={fyxer} className="rounded-xl bg-amber-500/90 hover:bg-amber-400 text-zinc-950 px-4 py-2 font-medium">Book a call</a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_50%_-200px,rgba(234,179,8,0.15),transparent)]" />
        <div className="mx-auto max-w-5xl px-6 pt-20 pb-16">
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
            We help entrepreneurs <span className="text-amber-400">scale smarter</span>—by acquiring the pieces that multiply growth.
          </h1>
          <p className="mt-6 text-zinc-300 max-w-2xl">
            YADA GROUP isn't just advising others—we're scaling ourselves the same way we help others grow. Through strategic acquisitions, partnerships, and operational excellence, we acquire and build businesses that create lasting value and compounding growth.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href={fyxer} className="rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 px-6 py-3 font-semibold text-center">Book an intro</a>
            <a href="#who" className="rounded-xl border border-zinc-800 hover:border-zinc-700 text-zinc-200 px-6 py-3 text-center">Who we work with</a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-zinc-400">
            <span>Rooted in real estate, evolved into multi-industry acquisitions</span>
            <span className="h-1 w-1 rounded-full bg-zinc-700" />
            <span>Entrepreneurial capital • SPVs • Partnership growth model</span>
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section id="who" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Built for builders</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {[{
            title: "Founders & Operators",
            body: "We help entrepreneurs grow strategically—through acquisitions, partnerships, and bolt-ons that accelerate what's already working.",
          },{
            title: "Investors",
            body: "Partner or co-invest with us in scalable, cash-flowing opportunities that blend asset ownership with active growth.",
          },{
            title: "Sellers / Owners",
            body: "Exploring a sale or growth partner? We move fast with creative structures and hands-on execution to build on your success.",
          }].map((c,i) => (
            <div key={i} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <h3 className="text-lg font-semibold">{c.title}</h3>
              <p className="mt-3 text-sm text-zinc-300">{c.body}</p>
              <a href={fyxer} className="mt-6 inline-block text-amber-400 hover:text-amber-300 text-sm font-medium">Book a call →</a>
            </div>
          ))}
        </div>
      </section>

      {/* APPROACH */}
      <section id="how" className="mx-auto max-w-6xl px-6 py-16 border-t border-zinc-900">
        <h2 className="text-2xl md:text-3xl font-semibold">Our approach</h2>
        <ol className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
          {[{
            n:"01",
            t:"Spot potential",
            d:"We find overlooked brands, assets, and opportunities with strong fundamentals and loyal customers.",
          },{
            n:"02",
            t:"Structure the deal",
            d:"We design win-win partnerships or acquisitions that align incentives and amplify performance.",
          },{
            n:"03",
            t:"Scale together",
            d:"We apply proven systems, leadership, and capital to grow every venture into a lasting brand.",
          }].map((s,i)=> (
            <li key={i} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <div className="text-amber-400 text-xs font-mono">{s.n}</div>
              <div className="mt-2 text-lg font-semibold">{s.t}</div>
              <p className="mt-2 text-zinc-300">{s.d}</p>
            </li>
          ))}
        </ol>
        <a href={fyxer} className="mt-8 inline-block rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 px-6 py-3 font-semibold">Start a conversation</a>
      </section>

      {/* WHY YADA */}
      <section id="why" className="mx-auto max-w-6xl px-6 py-16 border-t border-zinc-900">
        <h2 className="text-2xl md:text-3xl font-semibold">Why YADA</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6 text-sm">
          {[{
            h:"Entrepreneur-first",
            p:"We've been in your shoes—operators who know how to spot growth levers and move fast without breaking the model.",
          },{
            h:"Hands-on growth",
            p:"We don't just invest—we build. Every deal includes operational depth and long-term alignment.",
          },{
            h:"Long-term value",
            p:"We focus on real assets, recurring cash flow, and sustainable growth that compounds year after year.",
          }].map((b,i)=> (
            <div key={i} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
              <div className="text-lg font-semibold">{b.h}</div>
              <p className="mt-2 text-zinc-300">{b.p}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA / CONTACT */}
      <section className="mx-auto max-w-6xl px-6 py-16 border-t border-zinc-900">
        <div className="rounded-3xl border border-zinc-800 bg-gradient-to-tr from-zinc-900 to-zinc-800 p-8 md:p-12">
          <h3 className="text-2xl md:text-3xl font-semibold">Let's explore a deal.</h3>
          <p className="mt-3 text-zinc-300 max-w-2xl">If you're ready to grow through acquisition, partnership, or smart capital, we'll help you structure, scale, and sustain that growth.</p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href={fyxer} className="rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 px-6 py-3 font-semibold text-center">Book an intro</a>
            <a href={`mailto:${email}`} className="rounded-xl border border-zinc-700 hover:border-zinc-600 px-6 py-3 text-center">{email}</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-900">
        <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-zinc-400 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-lg bg-gradient-to-tr from-amber-500 to-yellow-300" />
            <span>© {new Date().getFullYear()} YADA GROUP. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#who" className="hover:text-zinc-200">Who we work with</a>
            <a href="#how" className="hover:text-zinc-200">Our approach</a>
            <a href="#why" className="hover:text-zinc-200">Why YADA</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

