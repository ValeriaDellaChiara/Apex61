import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const heroImages = [
  'Foto_iniziale_1.JPG',
  'Foto iniziale 4.JPG',
  'Foto_iniziale_2.JPG',
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {heroImages.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === currentImage ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="absolute inset-0 bg-black/60 z-10" />
          <img
            src={img}
            alt={`Racing ${idx + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      <div className="relative z-20 text-center px-4 animate-fade-in flex flex-col items-center">
        <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter drop-shadow-2xl italic">
           <span className="text-red-600"></span>
        </h1>
        <div className="space-y-4 mb-12">
          <p className="text-2xl md:text-3xl text-white font-bold tracking-[0.2em] uppercase">
            Guida. Impara. Migliora.
          </p>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed italic">
            Vivi l'adrenalina della pista con un vero campione, qualunque sia il tuo livello
          </p>
        </div>
        <button
          onClick={() => scrollToSection('courses')}
          className="bg-red-600 hover:bg-red-500 text-white px-10 py-4 rounded-xl text-lg font-bold tracking-widest transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)] group"
        >
          <span className="flex items-center gap-2">
            SCOPRI I NOSTRI CORSI
            <ChevronDown className="group-hover:translate-y-1 transition-transform" />
          </span>
        </button>
      </div>

      <button
        onClick={() => scrollToSection('intro')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white animate-bounce"
      >
        <ChevronDown size={40} />
      </button>
    </section>
  );
}
