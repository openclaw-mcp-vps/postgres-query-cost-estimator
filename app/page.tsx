export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* Hero */}
        <section className="text-center mb-20">
          <div className="inline-block bg-[#161b22] border border-[#30363d] rounded px-3 py-1 text-xs text-[#58a6ff] mb-6">
            developer-tools
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">
            Estimate Postgres Query Costs
            <span className="text-[#58a6ff]"> Before Running</span>
          </h1>
          <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
            Connect your database, paste a SQL query, and get a full EXPLAIN plan breakdown — cost estimates, row counts, and resource usage — before you hit run.
          </p>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="inline-block bg-[#58a6ff] text-[#0d1117] font-bold px-8 py-3 rounded hover:bg-[#79b8ff] transition-colors"
          >
            Get Started — $10/mo
          </a>
          <div className="mt-10 bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-left text-sm">
            <div className="text-[#8b949e] mb-2">-- paste your query</div>
            <div className="text-[#c9d1d9]">SELECT * FROM orders o</div>
            <div className="text-[#c9d1d9] ml-4">JOIN users u ON u.id = o.user_id</div>
            <div className="text-[#c9d1d9] ml-4">WHERE o.created_at &gt; NOW() - INTERVAL &apos;30 days&apos;;</div>
            <div className="mt-3 border-t border-[#30363d] pt-3">
              <div className="text-[#3fb950]">✓ Estimated cost: 842.15</div>
              <div className="text-[#3fb950]">✓ Rows: ~12,400 &nbsp;|&nbsp; Seq Scan on orders</div>
              <div className="text-yellow-400">⚠ Missing index on orders.created_at</div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
          <div className="max-w-sm mx-auto bg-[#161b22] border-2 border-[#58a6ff] rounded-xl p-8 text-center">
            <div className="text-[#58a6ff] font-bold text-sm uppercase tracking-widest mb-2">Pro</div>
            <div className="text-5xl font-bold text-white mb-1">$10</div>
            <div className="text-[#8b949e] mb-6">per month</div>
            <ul className="text-left space-y-3 mb-8 text-sm">
              {[
                "Unlimited query analyses",
                "Connect multiple databases",
                "EXPLAIN plan visualizer",
                "Index recommendations",
                "Cost trend history",
                "Email support"
              ].map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="text-[#3fb950]">✓</span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <a
              href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
              className="block bg-[#58a6ff] text-[#0d1117] font-bold py-3 rounded hover:bg-[#79b8ff] transition-colors"
            >
              Start Now
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
          <div className="space-y-6">
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">Does it run the query on my database?</h3>
              <p className="text-[#8b949e] text-sm">No. We use <code className="text-[#58a6ff]">EXPLAIN</code> (without <code className="text-[#58a6ff]">EXECUTE</code>), so your data is never touched and no rows are returned or modified.</p>
            </div>
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">Which Postgres versions are supported?</h3>
              <p className="text-[#8b949e] text-sm">Any Postgres version 10 and above is supported, including managed services like RDS, Supabase, Neon, and Railway.</p>
            </div>
            <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-6">
              <h3 className="text-white font-semibold mb-2">Is my connection string stored?</h3>
              <p className="text-[#8b949e] text-sm">Connection strings are encrypted at rest and never logged. You can delete them from your account at any time.</p>
            </div>
          </div>
        </section>

        <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
          &copy; {new Date().getFullYear()} Postgres Query Cost Estimator. Built for backend developers and DBAs.
        </footer>
      </div>
    </main>
  )
}
