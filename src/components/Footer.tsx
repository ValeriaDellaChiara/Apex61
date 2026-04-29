import { Flag, Mail, Phone, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
 
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-12">
      <div className="max-w-6xl mx-auto px-4">
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center mb-4">
              <Flag className="text-red-600 mr-2" size={24} />
              <h3 className="text-xl font-bold text-white">Corsi di moto</h3>
            </div>
            <p className="text-white/70">
              Corsi di guida sportiva in pista per principianti ed esperti.
            </p>
          </div>

          <div className="flex flex-col items-center text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Contatti</h4>
            <div className="space-y-2">
              <a
                href="mailto:Apex61ridingschool@gmail.com<"
                className="flex items-center justify-center text-white/70 hover:text-red-600 transition-colors"
              >
                <Mail className="mr-2" size={16} />
                <span className="text-sm">Apex61ridingschool@gmail.com</span>
              </a>
              <a
                href="tel:+393345813761"
                className="flex items-center justify-center text-white/70 hover:text-red-600 transition-colors"
              >
                <Phone className="mr-2" size={16} />
                <span className="text-sm">+39 334 581 3761</span>
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center text-center">
            <h4 className="text-lg font-semibold text-white mb-4">Social</h4>
            <div className="flex space-x-6 justify-center">
              <a
                href="https://www.facebook.com/alesessantuno/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-red-600 transition-colors transform hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook size={28} />
              </a>
              <a
                href="https://www.instagram.com/apex61_ridingschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-red-600 transition-colors transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram size={28} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center text-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            © 2024 Riding school. Tutti i diritti riservati.
          </p>
          <button
            onClick={scrollToTop}
            className="text-red-600 hover:text-red-500 font-semibold text-sm transition-colors"
          >
            Torna su
          </button>
        </div>

      </div>
    </footer>
  );
}
