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

  const handleCardClick = (item) => {
    setSelected(item);
    setActiveTab('morning');
  };

  const handleCloseModal = () => {
    setSelected(null);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    const data = selected[activeTab];
    return (
      <>
        <img
          src={data.img}
          alt={activeTab}
          style={getModalImageStyles()}
        />
        <ul>
          {data.todo.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        <p>
          <strong>Where to eat:</strong> {data.eat}
        </p>
      </>
    );
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.h2}>Daily Itinerary Guide</h2>
      <p>Click a location to see suggestions for morning, afternoon, and evening.</p>

      {/* Cards */}
      <div style={getCardsContainerStyles()}>
        {itineraryData.map((item) => (
          <div
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
          </div>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          onClick={handleCloseModal}
          style={getModalOverlayStyles()}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={getModalContentStyles()}
          >
            <button
              onClick={handleCloseModal}
              style={getCloseButtonStyles()}
            >
              ×
            </button>

            <h3>{selected.name}</h3>

            {/* Tabs */}
            <div style={getTabButtonsContainerStyles()}>
              {getTimePeriods().map((tab) => (
                <button
                  key={tab}
                  onClick={() => handleTabChange(tab)}
                  style={getTabButtonStyles(activeTab === tab)}
                >
                  {capitalizeFirstLetter(tab)}
                </button>
              ))}
            </div>

            {renderTabContent()}
          </div>
        </div>
      )}
    </section>
  );
}