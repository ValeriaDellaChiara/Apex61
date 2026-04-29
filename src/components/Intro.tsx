import { Check } from 'lucide-react';

export function Intro() {
  return (
    <section id="intro" className="py-12 bg-black">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-white/80 text-sm mb-3">I nostri corsi sono aperti a</p>
        <div className="flex flex-wrap justify-center gap-3 mb-4">
          {['Principianti', 'Amatori', 'Piloti esperti'].map((item) => (
            <span key={item} className="inline-flex items-center text-white text-sm">
              <Check className="text-red-600 mr-2" size={30} />
              {item}
            </span>
          ))}
        </div>
        <p className="text-white/70 text-sm leading-relaxed">
          Non serve essere un professionista per vivere la pista… serve solo voler iniziare.
        </p>
      </div>
    </section>
  );
}
