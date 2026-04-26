import { useState } from 'react';
import { useTheme } from './contexts/ThemeContext';

const sections = [
  { key: 'tomac', title: 'Tomac' },
  { key: 'fullstack', title: 'Fullstack' },
  { key: 'humaniora', title: 'Humaniora' },
  { key: '3d', title: '3D-grafik' },
  { key: 'sound', title: 'Ljuddesign' },
  { key: 'contact', title: 'Kontakt' },
] as const;

type Section = typeof sections[number];

function App() {
  const { isDark, toggleTheme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentSection = sections[currentIndex];

  const goPrev = () => setCurrentIndex((prev) => (prev - 1 + sections.length) % sections.length);
  const goNext = () => setCurrentIndex((prev) => (prev + 1) % sections.length);

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)] flex items-center justify-center p-8 lg:p-16 font-light">
      {/* Huvudcontainer – max bredd och höjd för att matcha din mockup */}
      <div className="flex w-full max-w-[1480px] h-[88vh] relative">

        {/* VÄNSTER KOLUMN */}
        <div className="w-[440px] flex-shrink-0 flex flex-col justify-center items-center relative">
          {/* Dark mode prick */}
          <button
            onClick={toggleTheme}
            className="absolute top-8 left-8 w-7 h-7 rounded-full border-2 border-[var(--text)] flex items-center justify-center hover:scale-110 transition-transform text-xl"
            aria-label="Växla tema"
          >
            ●
          </button>

          {/* Stor rubrik – endast en åt gången */}
          <h1 className="text-7xl lg:text-8xl tracking-tighter text-center mb-12">
            {currentSection.title}
          </h1>

          {/* HORISONTELL NAV – linje + trianglar */}
          <div className="flex items-center w-80">
            <button
              onClick={goPrev}
              className="text-5xl hover:text-gray-400 transition-colors px-4 py-2"
              aria-label="Föregående"
            >
              ◀
            </button>

            <div className="flex-1 h-px bg-[var(--text)]" />

            <button
              onClick={goNext}
              className="text-5xl hover:text-gray-400 transition-colors px-4 py-2"
              aria-label="Nästa"
            >
              ▶
            </button>
          </div>
        </div>

        {/* VERTIKAL DIVIDER – nu med trianglar upp/ner */}
        <div className="w-px bg-[var(--text)] mx-12 lg:mx-24 relative flex flex-col justify-between py-8">
          {/* Övre triangel (klickbar senare för scroll upp) */}
          <button className="text-4xl hover:text-gray-400 transition-colors">
            ▲
          </button>

          {/* Nedre triangel (klickbar senare för scroll ner) */}
          <button className="text-4xl hover:text-gray-400 transition-colors">
            ▼
          </button>
        </div>

        {/* HÖGER KOLUMN – responsiv */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-auto pr-8">
            <div className="text-xl max-w-2xl leading-relaxed">
              {currentSection.key === 'tomac' && (
                <p>Här kommer en kort, personlig presentation av mig – Tomac. Fullstackutvecklare, 3D-grafiker, ljuddesigner och humanist med över 260 hp från Lunds universitet.</p>
              )}
              {currentSection.key === 'fullstack' && (
                <p>Här lägger vi in mina projekt och kunskaper inom React, TypeScript, Node m.m.</p>
              )}
              {currentSection.key === 'humaniora' && (
                <p>Mina akademiska studier inom humaniora vid Lunds universitet...</p>
              )}
              {currentSection.key === '3d' && <p>Här kommer galleri med 3D-grafik...</p>}
              {currentSection.key === 'sound' && <p>Här kommer information om ljuddesign...</p>}
              {currentSection.key === 'contact' && <p>Kontaktinformation + länkar till GitHub och LinkedIn.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;