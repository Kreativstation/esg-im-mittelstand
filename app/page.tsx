export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">

      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <span className="text-xl font-bold text-green-700">ESG im Mittelstand</span>
        <a
          href="https://www.linkedin.com/company/esg-im-mittelstand/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-green-700 hover:underline"
        >
          LinkedIn →
        </a>
      </nav>

      {/* Hero */}
      <section
        className="relative px-8 py-36 text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 max-w-3xl mx-auto">
          <span className="inline-block mb-4 text-xs font-semibold uppercase tracking-widest text-cyan-300 bg-white/10 px-3 py-1 rounded-full">
            Nachhaltigkeit für den Mittelstand
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            ESG — einfach, praxisnah und<br className="hidden md:block" /> für den Mittelstand.
          </h1>
          <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto">
            Wir begleiten mittelständische Unternehmen auf dem Weg zu mehr Nachhaltigkeit —
            von der Strategie bis zur Berichterstattung.
          </p>
          <a
            href="https://www.linkedin.com/company/esg-im-mittelstand/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-cyan-600 transition-colors"
          >
            Jetzt vernetzen
          </a>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-gray-50 py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12">Die drei ESG-Säulen</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                letter: "E",
                title: "Environment",
                desc: "CO₂-Reduktion, Ressourceneffizienz und Klimastrategie — messbar und umsetzbar.",
              },
              {
                letter: "S",
                title: "Social",
                desc: "Faire Arbeitsbedingungen, Diversität und gesellschaftliche Verantwortung im Unternehmen.",
              },
              {
                letter: "G",
                title: "Governance",
                desc: "Transparente Unternehmensführung, Compliance und nachhaltige Entscheidungsstrukturen.",
              },
            ].map(({ letter, title, desc }) => (
              <div key={letter} className="bg-white rounded-xl p-8 shadow-sm">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-green-100 text-green-700 font-bold text-xl mb-4">
                  {letter}
                </div>
                <h3 className="font-semibold text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="max-w-3xl mx-auto px-8 py-20 text-center">
        <h2 className="text-2xl font-bold mb-6">Warum ESG im Mittelstand?</h2>
        <p className="text-gray-500 text-base leading-relaxed mb-8">
          Neue EU-Regulierungen wie die CSRD betreffen auch den Mittelstand — direkt oder
          über Lieferketten. Wir helfen Ihnen, Anforderungen zu verstehen, Chancen zu
          erkennen und Nachhaltigkeit als echten Wettbewerbsvorteil zu nutzen.
        </p>
        <ul className="inline-flex flex-col gap-3 text-left text-sm text-gray-600">
          {[
            "Praxisorientierte Beratung ohne Berater-Jargon",
            "Netzwerk aus Unternehmern, Experten und Partnern",
            "Aktuelle Inhalte zu Regulierung & Best Practices",
            "Community auf LinkedIn mit tausenden Followern",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="mt-0.5 text-green-600">✓</span>
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="bg-green-700 text-white py-16 px-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Werden Sie Teil der Community</h2>
        <p className="text-green-100 mb-8 max-w-md mx-auto">
          Folgen Sie uns auf LinkedIn und bleiben Sie über ESG-Themen im Mittelstand auf dem Laufenden.
        </p>
        <a
          href="https://www.linkedin.com/company/esg-im-mittelstand/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-cyan-600 font-semibold px-8 py-3 rounded-lg hover:bg-cyan-50 transition-colors"
        >
          Auf LinkedIn folgen
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-xs text-gray-400">
        © {new Date().getFullYear()} ESG im Mittelstand e.V. — Alle Rechte vorbehalten.
      </footer>
    </main>
  );
}
