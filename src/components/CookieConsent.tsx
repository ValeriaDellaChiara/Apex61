import { useState, useEffect } from 'react';

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] p-4 animate-fade-in-up">
      <div className="max-w-4xl mx-auto bg-zinc-900/95 backdrop-blur-md border border-white/10 p-6 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <h4 className="text-white font-bold mb-2">Informativa sui Cookie</h4>
          <p className="text-white/70 text-sm leading-relaxed">
            Questo sito utilizza i cookie per migliorare l'esperienza dell'utente e analizzare il traffico. Continuando a navigare, accetti il nostro utilizzo dei cookie.
          </p>
        </div>
        <div className="flex gap-4">
          <button
            onClick={acceptCookies}
            className="bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-lg font-bold text-sm transition-all duration-300 whitespace-nowrap"
          >
            Accetta tutto
          </button>
        </div>
      </div>
    </div>
  );
}
