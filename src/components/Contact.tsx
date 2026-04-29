import { Mail, Phone, MessageCircle } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-black">
      <div className="max-w-2xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-12">
          Contattaci
        </h2>

        <div className="flex flex-col items-center space-y-8">
          <a
            href="https://wa.me/393345813761?text=Ciao,%20vorrei%20informazioni%20sui%20corsi%20di%20guida%20in%20pista"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 p-8 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-600/50"
          >
            <div className="flex items-center justify-center mb-4">
              <MessageCircle size={48} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-2">
              Scrivici su WhatsApp
            </h3>
            <p className="text-white/90 text-center">
              Ti risponderemo nel minor tempo possibile e sceglieremo insieme la data e la pista più adatta a te in base alla tua esperienza.
            </p>
          </a>

          <div className="w-full space-y-4">
            <h3 className="text-xl font-bold text-white text-center">Contatti Diretti</h3>
            <div className="flex flex-col items-center space-y-3">
              <a
                href="mailto:Apex61ridingschool@gmail.com"
                className="flex items-center text-white/80 hover:text-red-600 transition-colors"
              >
                <Mail className="mr-3 flex-shrink-0" size={20} />
                <span className="break-all">Apex61ridingschool@gmail.com</span>
              </a>
              <a
                href="tel:+393345813761"
                className="flex items-center text-white/80 hover:text-red-600 transition-colors"
              >
                <Phone className="mr-3 flex-shrink-0" size={20} />
                <span>+39 334 5813761</span>
              </a>
            </div>
          </div>

          <div className="text-center">
            <p className="text-white/70 leading-relaxed text-sm">
              Siamo qui per rispondere a tutte le tue domande e aiutarti a scegliere il corso più adatto a te.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
