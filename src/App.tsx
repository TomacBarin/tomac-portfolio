import { useState } from 'react';
import { useTheme } from './contexts/ThemeContext';
import './App.css';   // <-- viktig!

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
    <div className="app-container">
      <div className="main-content">
        
        {/* VÄNSTER KOLUMN */}
        <div className="left-column">
          {/* Dark mode prick */}
          <button 
            onClick={toggleTheme} 
            className="theme-toggle" 
            aria-label="Växla tema"
          >
            {/* Inget innehåll här */}
          </button>

          <h1 className="section-title">{currentSection.title}</h1>

          {/* HORISONTELL NAVIGATION */}
          <div className="nav-container">
            <button onClick={goPrev} className="nav-triangle left">◀</button>
            <div className="nav-line"></div>
            <button onClick={goNext} className="nav-triangle right">▶</button>
          </div>
        </div>

        {/* VERTIKAL DIVIDER */}
        <div className="vertical-divider">
          <button className="scroll-arrow up">▲</button>
          {/* Själva linjen */}
          <div className="vertical-line"></div>
          <button className="scroll-arrow down">▼</button>
        </div>

        {/* HÖGER KOLUMN */}
        <div className="right-column">
          <div className="content-area">
            {/* Inget h2 här längre – vi ser rubriken till vänster */}
            <div className="content-text">
              {currentSection.key === 'tomac' && (
                <p>Här kommer en kort, personlig presentation av mig – Tomac. Fullstackutvecklare, 3D-grafiker, ljuddesigner och humaniorastudent från Lunds universitet. Här kommer en kort, personlig presentation av mig – Tomac. Fullstackutvecklare, 3D-grafiker, ljuddesigner och humaniorastudent från Lunds universitet.Här kommer en kort, personlig presentation av mig – Tomac. Fullstackutvecklare, 3D-grafiker, ljuddesigner och humaniorastudent från Lunds universitet.Här kommer en kort, personlig presentation av mig – Tomac. Fullstackutvecklare, 3D-grafiker, ljuddesigner och humaniorastudent från Lunds universitet.Här kommer en kort, personlig presentation av mig – Tomac. Fullstackutvecklare, 3D-grafiker, ljuddesigner och humaniorastudent från Lunds universitet.Här kommer en kort, personlig presentation av mig – Tomac. Fullstackutvecklare, 3D-grafiker, ljuddesigner och humaniorastudent från Lunds universitet.Här kommer en kort, personlig presentation av mig – Tomac. Fullstackutvecklare, 3D-grafiker, ljuddesigner och humaniorastudent från Lunds universitet.Här kommer en kort, personlig presentation av mig – Tomac. Fullstackutvecklare, 3D-grafiker, ljuddesigner och humaniorastudent från Lunds universitet.Här kommer en kort, personlig presentation av mig – Tomac. Fullstackutvecklare, 3D-grafiker, ljuddesigner och humaniorastudent från Lunds universitet.Här kommer en kort, personlig presentation av mig – Tomac. Fullstackutvecklare, 3D-grafiker, ljuddesigner och humaniorastudent från Lunds universitet.</p>
              )}
              {currentSection.key === 'fullstack' && (
                <p>Här lägger vi in mina projekt och kunskaper inom React, TypeScript, Node m.m.</p>
              )}
              {currentSection.key === 'humaniora' && <p>Mina akademiska studier inom humaniora (över 260 hp från Lunds universitet).</p>}
              {currentSection.key === '3d' && <p>Här kommer galleri med mina 3D-projekt...</p>}
              {currentSection.key === 'sound' && <p>Här kommer information om min ljuddesign...</p>}
              {currentSection.key === 'contact' && <p>Kontaktinformation + länkar till GitHub och LinkedIn.</p>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;