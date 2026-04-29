import React, { useState } from 'react';
import { Award, Trophy, ChevronDown, ChevronUp } from 'lucide-react';

export function Instructor() {
  const [isExpanded, setIsExpanded] = useState(false);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-zinc-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Il Tuo Istruttore
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative group">
              <img
                src="Ale.JPG"
                alt="Alessandro Zaccone"
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col items-center justify-center bg-black/40 p-4 rounded-xl border border-white/5">
                <Trophy size={32} className="text-red-600 mb-2" />
                <span className="text-white font-bold text-center text-sm">Campione Mondiale MotoE 2025</span>
              </div>
              <div className="flex flex-col items-center justify-center bg-black/40 p-4 rounded-xl border border-white/5">
                <Award size={32} className="text-red-600 mb-2" />
                <span className="text-white font-bold text-center text-sm">10+ Anni Esperienza</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-4xl font-bold text-white mb-2">
                Alessandro Zaccone
              </h3>
              <p className="text-red-600 text-2xl font-bold tracking-wider uppercase">Zac61</p>
            </div>

            <div className="space-y-4 text-white/90 text-lg leading-relaxed">
              <p>
                Alessandro Zaccone, <span className="text-white font-semibold">campione del mondo MotoE 2025</span>, ha corso nel 2022 in Moto2 con il team Gresini e vanta oltre 10 anni di esperienza su piste internazionali.
              </p>
              <p>
                Con lui non imparerai solo ad andare più veloce, ma a <span className="text-white font-semibold">guidare meglio, in sicurezza e con consapevolezza</span>.
              </p>
              
              <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isExpanded ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                <div className="p-6 bg-white/5 rounded-2xl border border-white/10 space-y-4 text-white/80 text-base italic">
                  <p>
                    Alessandro Zaccone è un giovane e talentuoso pilota motociclistico italiano nato il 16 gennaio 1999 a Rimini, famosa città della Romagna.
                  </p>
                  <p>
                    Fin da bambino ha mostrato grande passione e talento per le due ruote: nel 2008 è stato campione regionale di minimoto e quarto a livello nazionale, iniziando così un percorso che lo ha portato a correre su diversi palcoscenici internazionali, dalle minimoto al CIV, dalla FIM CEV Moto2 alle Supersport, fino al campionato mondiale MotoE.
                  </p>
                  <p>
                    La sua carriera è stata fatta di dedizione e crescita costante: dopo l’esperienza in Moto2, ha trovato la sua dimensione nella categoria elettrica MotoE, dove ha conquistato numerosi podi, pole position e ha vinto il Campionato del Mondo MotoE nel 2025, affermandosi come uno dei protagonisti più solidi della scena.
                  </p>
                  <p>
                    Zaccone è conosciuto per il suo stile di guida grintoso e la capacità di competere ai massimi livelli, trasformando le sfide in opportunità e rendendo orgogliosi tanti appassionati italiani.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-red-500 hover:text-red-400 font-bold transition-colors group mt-2"
              >
                {isExpanded ? (
                  <>Mostra meno <ChevronUp size={20} className="group-hover:-translate-y-1 transition-transform" /></>
                ) : (
                  <>Scopri di più sull'istruttore <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform" /></>
                )}
              </button>

              <p className="text-xl text-red-600 font-bold pt-4">
                È il momento di salire in sella.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="bg-red-600 hover:bg-red-500 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/50"
              >
                PRENOTA ORA
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
