
export function Header() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="/Logo.png"
            alt="Apex 61"
            className="h-12 md:h-14 w-auto hover:scale-105 transition-transform duration-300"
          />
        </div>

        <button
          onClick={scrollToContact}
          className="bg-red-600 hover:bg-red-500 text-white px-8 py-3 rounded-lg font-bold text-sm tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/50"
        >
          PRENOTA ORA
        </button>
      </div>
    </header>
  );
}
