'use client';
import { useState } from 'react';
import styles from '../css/page.moduleAdrian.css';
import { itineraryData } from '../js/itinerary-data';
import {
  capitalizeFirstLetter,
  getTimePeriods,
  getCardStyles,
  getCardImageStyles,
  getCardNameStyles,
  getCardsContainerStyles,
  getModalOverlayStyles,
  getModalContentStyles,
  getCloseButtonStyles,
  getTabButtonsContainerStyles,
  getTabButtonStyles,
  getModalImageStyles,
} from '../js/itinerary-helpers';

export default function Itinerary() {
  const [selected, setSelected] = useState(null);
  const [activeTab, setActiveTab] = useState('morning');
  const [tabContentKey, setTabContentKey] = useState(0);

  const handleCardClick = (item) => {
    setSelected(item);
    setActiveTab('morning');
    setTabContentKey(0);
  };

  const handleCloseModal = () => {
    setSelected(null);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setTabContentKey(prev => prev + 1); // Force re-render with animation
  };

  const renderTabContent = () => {
    const data = selected[activeTab];
    return (
      <article key={tabContentKey} style={{ animation: 'fadeIn 0.4s ease-in-out' }}>
        <img
          src={data.img}
          alt={activeTab}
          style={getModalImageStyles()}
        />
        <section>
          <h4 style={{ marginTop: '15px', marginBottom: '10px' }}>Things to Do:</h4>
          <ul>
            {data.todo.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </section>
        <footer style={{ marginTop: '15px', paddingTop: '10px', borderTop: '1px solid #eee' }}>
          <p>
            <strong>Where to eat:</strong> {data.eat}
          </p>
        </footer>
      </article>
    );
  };

  return (
    <section className={styles.section}>
      <header>
        <h2 className={styles.h2}>Daily Itinerary Guide</h2>
        <p>Click a location to see suggestions for morning, afternoon, and evening.</p>
      </header>

      {/* Cards */}
      <main style={getCardsContainerStyles()}>
        {itineraryData.map((item) => (
          <article
            key={item.name}
            onClick={() => handleCardClick(item)}
            style={getCardStyles()}
          >
            <img
              src={item.img}
              alt={item.name}
              style={getCardImageStyles()}
            />
            <p style={getCardNameStyles()}>{item.name}</p>
          </article>
        ))}
      </main>

      {/* Modal */}
      {selected && (
        <aside
          onClick={handleCloseModal}
          style={getModalOverlayStyles()}
        >
          <article
            onClick={(e) => e.stopPropagation()}
            style={getModalContentStyles()}
          >
            <button
              onClick={handleCloseModal}
              style={getCloseButtonStyles()}
              aria-label="Close modal"
            >
              ×
            </button>

            <header>
              <h3>{selected.name}</h3>
            </header>

            {/* Tabs */}
            <nav style={getTabButtonsContainerStyles()}>
              {getTimePeriods().map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  style={getTabButtonStyles(activeTab === tab)}
                  aria-pressed={activeTab === tab}
                >
                  {capitalizeFirstLetter(tab)}
                </button>
              ))}
            </nav>

            {renderTabContent()}
          </article>
        </aside>
      )}
    </section>
  );
}