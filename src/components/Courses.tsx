import { useState } from 'react';
import { MapPin, Ruler, ExternalLink, Check } from 'lucide-react';
import { tracks } from '../data/tracks';

export function Courses() {
  const [selectedTrack, setSelectedTrack] = useState(tracks[0]);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const currentPricing = selectedTrack.pricing || { individual: 450, group: 220 };

  const courseIncludes = [
    'Briefing iniziale',
    'Lezione teorica',
    'Sessioni in pista',
    'Analisi della guida',
    'Correzione errori',
    'Video on board',
    'Assistenza base moto',
    'Debriefing finale'
  ];

  return (
    <section id="courses" className="py-8 bg-black">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">
          I Nostri Corsi
        </h2>

        <div className="mb-12">
  <div className="flex flex-wrap justify-center gap-3">
    {tracks.map((track) => (
      <button
        key={track.id}
        onClick={() => setSelectedTrack(track)}
        className={`px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 ${
          selectedTrack.id === track.id
            ? 'bg-red-600 text-white shadow-lg scale-105'
            : 'bg-zinc-800 text-white/70 hover:text-white hover:bg-zinc-700 hover:scale-105'}`}
      >
        {track.name}
      </button>
    ))}
  </div>
</div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-lg">
            <img
              src={selectedTrack.imageUrl}
              
              alt={selectedTrack.name}
              className="w-full h-80 object-contain"
            />
          </div>

          <div className="text-center space-y-2">
  <h3 className="text-3xl font-bold text-white">{selectedTrack.name}</h3>
  <div className="flex justify-center items-center gap-6 text-white/80 text-base">
    <span className="flex items-center">
      <Ruler className="text-red-600 mr-2" size={16} />
      {selectedTrack.length}
    </span>
    <span className="flex items-center">
      <MapPin className="text-red-600 mr-2" size={16} />
      {selectedTrack.location}
    </span>
  </div>
  <a
    href={selectedTrack.mapsUrl}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center text-red-600 hover:text-red-500 text-base font-semibold transition-colors mt-2"
  >
    <ExternalLink className="mr-1" size={14} />
    Vedi su Google Maps
  </a>
</div>

<div className="text-center">
  <h4 className="text-white font-semibold mb-6 text-base">Cosa Include il Corso</h4>
  <div className="flex flex-wrap justify-center gap-3">
    {courseIncludes.map((item) => (
      <span
        key={item}
        className="inline-flex items-center text-white/80 text-sm bg-zinc-900 px-3 py-1 rounded"
      >
        <Check className="text-red-600 mr-1" size={16} />
        {item}
      </span>
    ))}
  </div>
</div>

         <div className="flex justify-center items-start pt-6">
  
  <div className="w-56 text-center">
    <p className="text-white/60 text-base mb-1">Individuale</p>
    <p className="text-4xl font-bold text-white">€{currentPricing.individual}</p>
    <p className="text-white/60 text-base">/ giornata</p>
  </div>

  <div className="w-px h-32 bg-zinc-800 mx-10" />

  <div className="w-56 text-center">
    <p className="text-white/60 text-base mb-1">Gruppo</p>
    <p className="text-4xl font-bold text-white">€{currentPricing.group}</p>
    <p className="text-white/60 text-base">/ persona</p>
    <p className="text-white/50 text-xs mt-2">
      Anche nei corsi di gruppo sono previsti momenti one to one per un'esperienza personalizzata
    </p>
  </div>

</div>
        </div>

        <div className="mt-12 text-center space-y-6">
          <div className="inline-block">
            <h4 className="text-white font-semibold mb-2 text-sm">Note</h4>
            <ul className="text-white/60 text-xs space-y-1 text-center">
              <li>I prezzi possono essere leggermente variabili</li>
              <li>Moto e attrezzature NON incluse</li>
              <li>Eventuali danni NON inclusi</li>
              <li>Ingresso pista NON incluso</li>
            </ul>
          </div>
<div className="mt-8 text-center">
          <button
            onClick={scrollToContact}
            className="bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/50"
          >
            PRENOTA ORA
          </button>
        </div>
         <div className="border-t border-zinc-800 pt-6">
  <div className="inline-block">
    <div className="flex items-start justify-center gap-2">
  
      <div className="text-center">
        <h4 className="text-white font-semibold mb-2 text-lg">
          Pacchetti Speciali
        </h4>

        <p className="text-white/70 text-base mb-4 max-w-sm">
          Vuoi vivere più giornate in pista? Abbiamo pacchetti speciali a prezzo agevolato.
        </p>

        <button
          onClick={scrollToContact}
          className="text-red-600 hover:text-red-500 text-base font-semibold transition-all duration-200 hover:scale-105"
        >
          CONTATTACI PER MAGGIORI INFO
        </button>

      </div>

    </div>
  </div>
</div>
        </div>

      
      </div>
    </section>
  );
}
