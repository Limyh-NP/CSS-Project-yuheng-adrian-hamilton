// itinerary-helpers.js - Helper functions for itinerary functionality

/**
 * Capitalizes the first letter of a string
 * Used for formatting tab labels (morning -> Morning)
 */
export function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Returns the available time periods
 */
export function getTimePeriods() {
  return ['morning', 'afternoon', 'evening'];
}

/**
 * Renders the inline styles for a location card
 */
export function getCardStyles() {
  return {
    width: '280px',
    padding: '0',
    borderRadius: '12px',
    border: '1px solid #ccc',
    textAlign: 'center',
    cursor: 'pointer',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    backgroundColor: '#fff',
  };
}

/**
 * Renders the inline styles for a card image
 */
export function getCardImageStyles() {
  return {
    width: '100%',
    height: '140px',
    borderRadius: '12px 12px 0 0',
    objectFit: 'cover',
  };
}

/**
 * Renders the inline styles for a card name
 */
export function getCardNameStyles() {
  return {
    fontWeight: 'bold',
    margin: '15px 8px',
    fontSize: '1.1rem',
  };
}

/**
 * Renders the inline styles for the cards container
 */
export function getCardsContainerStyles() {
  return {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '16px',
    justifyContent: 'center',
  };
}

/**
 * Renders the inline styles for modal overlay
 */
export function getModalOverlayStyles() {
  return {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  };
}

/**
 * Renders the inline styles for modal content
 */
export function getModalContentStyles() {
  return {
    background: '#fff',
    padding: '25px',
    borderRadius: '16px',
    width: '90%',
    maxWidth: '900px',
    maxHeight: '90vh',
    overflowY: 'auto',
    position: 'relative',
  };
}

/**
 * Renders the inline styles for close button
 */
export function getCloseButtonStyles() {
  return {
    position: 'absolute',
    top: '10px',
    right: '10px',
    background: '#ff5c5c',
    border: 'none',
    color: '#fff',
    borderRadius: '50%',
    width: '28px',
    height: '28px',
    cursor: 'pointer',
  };
}

/**
 * Renders the inline styles for tab buttons container
 */
export function getTabButtonsContainerStyles() {
  return {
    display: 'flex',
    gap: '10px',
    marginBottom: '10px',
  };
}

/**
 * Renders the inline styles for a tab button
 */
export function getTabButtonStyles(isActive) {
  return {
    flex: 1,
    padding: '8px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    cursor: 'pointer',
    background: isActive ? '#800000d9' : '#f0f0f0',
    color: isActive ? '#fff' : '#000',
  };
}

/**
 * Renders the inline styles for modal image
 */
export function getModalImageStyles() {
  return {
    width: '90%',
    maxWidth: '700px',
    height: 'auto',
    objectFit: 'cover',
    borderRadius: '12px',
    display: 'block',
    margin: '0 auto 15px',
  };
}