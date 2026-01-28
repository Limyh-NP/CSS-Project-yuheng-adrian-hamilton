// Helper function to validate form
export const validateForm = (formData) => {
  const newErrors = {};
  
  if (!formData.name.trim()) {
    newErrors.name = 'Name is required';
  }
  
  if (!formData.email.trim()) {
    newErrors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = 'Email is invalid';
  }
  
  if (!formData.phone.trim()) {
    newErrors.phone = 'Phone is required';
  }
  
  if (!formData.selectedPackage) {
    newErrors.selectedPackage = 'Please select a package';
  }
  
  return newErrors;
};

// Helper to get package by ID
export const getPackageById = (packages, id) => {
  return packages.find(pkg => pkg.id === id);
};

// LocalStorage helpers
export const loadSubmissions = () => {
  try {
    const saved = localStorage.getItem('contactSubmissions');
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error('Error loading submissions:', e);
    return [];
  }
};

export const saveSubmissions = (submissions) => {
  try {
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    return true;
  } catch (e) {
    console.error('Error saving submissions:', e);
    return false;
  }
};

export const createSubmission = (formData) => {
  return {
    id: Date.now(),
    submittedAt: new Date().toISOString(),
    ...formData
  };
};

// ==================== INLINE STYLES WITH ANIMATIONS ====================

export const getHeaderStyles = () => ({
  textAlign: 'center',
  marginBottom: '30px',
  fontSize: '1.1rem',
  animation: 'fadeInUp 0.6s ease-out 0.2s backwards',
});

export const getViewSubmissionsButtonStyles = (isHovered = false) => ({
  background: '#800000d9',
  color: 'white',
  border: 'none',
  padding: '12px 24px',
  borderRadius: '8px',
  fontSize: '1rem',
  fontWeight: '600',
  cursor: 'pointer',
  boxShadow: '0 2px 8px rgba(128,0,0,0.3)',
  transition: 'all 0.3s ease',
  transform: isHovered ? 'translateY(-2px) scale(1.05)' : 'translateY(0)',
});

export const getSubmissionsContainerStyles = () => ({
  maxWidth: '1000px',
  margin: '0 auto 40px',
  background: 'white',
  padding: '30px',
  borderRadius: '16px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
  animation: 'slideUp 0.6s ease-out',
});

export const getSubmissionsHeaderStyles = () => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',
});

export const getSubmissionsTitleStyles = () => ({
  color: '#800000d9',
  margin: 0,
  fontSize: '1.5rem',
});

export const getClearAllButtonStyles = () => ({
  background: '#ff4444',
  color: 'white',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '6px',
  fontSize: '0.9rem',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
});

export const getSubmissionsListStyles = () => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
});

export const getSubmissionCardStyles = () => ({
  border: '2px solid #e0e0e0',
  borderRadius: '12px',
  padding: '20px',
  background: '#fafafa',
  position: 'relative',
  animation: 'fadeInUp 0.5s ease-out',
});

export const getDeleteButtonStyles = () => ({
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: '#ff4444',
  color: 'white',
  border: 'none',
  borderRadius: '50%',
  width: '28px',
  height: '28px',
  cursor: 'pointer',
  fontSize: '16px',
  transition: 'all 0.3s ease',
});

export const getSubmissionGridStyles = () => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '15px',
});

export const getSubmissionTextStyles = () => ({
  margin: '5px 0',
});

export const getSubmissionMessageStyles = () => ({
  margin: '10px 0 0',
  paddingTop: '10px',
  borderTop: '1px solid #ddd',
});

export const getPackageSectionTitleStyles = () => ({
  color: '#800000d9',
  fontSize: '1.5rem',
  marginBottom: '20px',
  textAlign: 'center',
  animation: 'fadeInDown 0.6s ease-out 0.3s backwards',
});

export const getErrorMessageStyles = () => ({
  color: '#ff4444',
  background: '#fff5f5',
  padding: '12px',
  borderRadius: '8px',
  marginBottom: '15px',
  textAlign: 'center',
  border: '1px solid #ff4444',
  animation: 'shake 0.5s ease-in-out',
});

export const getPackageCardStyles = (isSelected, color) => ({
  position: 'relative',
  border: isSelected ? `4px solid ${color}` : '1px solid #ccc',
  transform: isSelected ? 'scale(1.05)' : 'scale(1)',
  boxShadow: isSelected 
    ? `0 8px 24px ${color}40, 0 0 0 4px ${color}20` 
    : '0 4px 8px rgba(0,0,0,0.1)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  animation: isSelected ? 'pulse 2s ease-in-out infinite' : 'none',
});

export const getCheckmarkBadgeStyles = (color) => ({
  position: 'absolute',
  top: '10px',
  right: '10px',
  background: color,
  color: 'white',
  width: '35px',
  height: '35px',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '20px',
  fontWeight: 'bold',
  zIndex: 10,
  boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  animation: 'checkmarkPop 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
});

export const getPackageImageStyles = () => ({
  height: '120px',
  transition: 'transform 0.4s ease',
});

export const getPackageContentStyles = () => ({
  padding: '15px',
});

export const getPackageNameStyles = (isSelected, color) => ({
  marginBottom: '8px',
  color: isSelected ? color : '#000',
  transition: 'color 0.3s ease',
});

export const getPackagePriceStyles = (color) => ({
  fontSize: '1.8rem',
  fontWeight: 'bold',
  color: color,
  margin: '8px 0',
  animation: 'fadeIn 0.6s ease-out',
});

export const getPackageDurationStyles = () => ({
  color: '#666',
  fontSize: '1rem',
  margin: '5px 0',
});

export const getPackageDescriptionStyles = () => ({
  color: '#777',
  fontSize: '0.9rem',
  fontStyle: 'italic',
  marginTop: '8px',
});

export const getFormContainerStyles = () => ({
  maxWidth: '800px',
  margin: '50px auto 0',
  background: 'white',
  padding: '40px',
  borderRadius: '16px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
  animation: 'slideUp 0.7s ease-out 0.4s backwards',
});

export const getFormTitleStyles = () => ({
  color: '#800000d9',
  fontSize: '1.8rem',
  marginBottom: '25px',
  textAlign: 'center',
  animation: 'fadeIn 0.6s ease-out',
});

export const getSuccessBannerStyles = () => ({
  background: 'linear-gradient(135deg, #4caf50, #45a049)',
  color: 'white',
  padding: '20px',
  borderRadius: '12px',
  marginBottom: '25px',
  textAlign: 'center',
  animation: 'successBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
});

export const getSuccessIconStyles = () => ({
  fontSize: '2rem',
  display: 'inline-block',
  animation: 'spin 0.6s ease-out',
});

export const getSuccessTitleStyles = () => ({
  margin: '10px 0 5px',
});

export const getSuccessMessageStyles = () => ({
  margin: 0,
});

export const getFormStyles = () => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const getLabelStyles = () => ({
  fontWeight: '600',
  color: '#333',
  display: 'block',
  marginBottom: '8px',
  transition: 'color 0.3s ease',
});

export const getInputStyles = (hasError) => ({
  width: '100%',
  padding: '14px',
  border: hasError ? '2px solid #ff4444' : '2px solid #e0e0e0',
  borderRadius: '10px',
  fontSize: '1rem',
  background: hasError ? '#fff5f5' : '#fafafa',
  boxSizing: 'border-box',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  animation: hasError ? 'shake 0.5s ease-in-out' : 'none',
});

export const getErrorTextStyles = () => ({
  color: '#ff4444',
  fontSize: '0.875rem',
  marginTop: '4px',
  display: 'block',
  animation: 'fadeIn 0.3s ease-out',
});

export const getFormRowStyles = () => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px',
});

export const getTextareaStyles = () => ({
  width: '100%',
  padding: '14px',
  border: '2px solid #e0e0e0',
  borderRadius: '10px',
  fontSize: '1rem',
  background: '#fafafa',
  fontFamily: 'inherit',
  resize: 'vertical',
  boxSizing: 'border-box',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
});

export const getSelectionSummaryStyles = () => ({
  background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
  padding: '20px',
  borderRadius: '12px',
  border: '2px solid #800000d9',
  animation: 'expandIn 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
});

export const getSummaryTitleStyles = () => ({
  margin: '0 0 12px 0',
  color: '#800000d9',
  fontSize: '1.2rem',
});

export const getSummaryContentStyles = () => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const getSummaryLabelStyles = () => ({
  fontWeight: '600',
  color: '#555',
});

export const getSummaryValueStyles = () => ({
  fontWeight: '700',
  fontSize: '1.1rem',
  animation: 'fadeIn 0.4s ease-out',
});

export const getSubmitButtonStyles = (isHovered = false) => ({
  background: 'linear-gradient(135deg, #800000d9, #a00000)',
  color: 'white',
  border: 'none',
  padding: '16px 32px',
  borderRadius: '12px',
  fontSize: '1.1rem',
  fontWeight: '700',
  cursor: 'pointer',
  boxShadow: isHovered ? '0 8px 24px rgba(128, 0, 0, 0.4)' : '0 4px 16px rgba(128, 0, 0, 0.3)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: isHovered ? 'translateY(-3px) scale(1.02)' : 'translateY(0)',
  position: 'relative',
  overflow: 'hidden',
});

export const getContactInfoContainerStyles = () => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '20px',
  marginTop: '50px',
  maxWidth: '1000px',
  margin: '50px auto 0',
});

export const getContactInfoCardStyles = (isHovered = false) => ({
  background: 'white',
  padding: '25px',
  borderRadius: '16px',
  textAlign: 'center',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0)',
  animation: 'fadeInUp 0.6s ease-out backwards',
});

export const getContactIconStyles = () => ({
  fontSize: '2.5rem',
  marginBottom: '12px',
  display: 'inline-block',
  transition: 'transform 0.3s ease',
});

export const getContactTitleStyles = () => ({
  color: '#800000d9',
  margin: '0 0 10px 0',
  fontSize: '1.2rem',
});

export const getContactContentStyles = () => ({
  color: '#666',
  margin: 0,
  lineHeight: '1.6',
});

// ==================== ANIMATION KEYFRAMES (Added as style tag injection) ====================
export const injectAnimationStyles = () => {
  if (typeof document !== 'undefined' && !document.getElementById('contact-animations')) {
    const style = document.createElement('style');
    style.id = 'contact-animations';
    style.textContent = `
      @keyframes checkmarkPop {
        0% {
          transform: scale(0) rotate(-180deg);
          opacity: 0;
        }
        60% {
          transform: scale(1.2) rotate(10deg);
        }
        100% {
          transform: scale(1) rotate(0deg);
          opacity: 1;
        }
      }

      @keyframes successBounce {
        0% {
          opacity: 0;
          transform: translateY(-20px) scale(0.95);
        }
        60% {
          transform: translateY(5px) scale(1.02);
        }
        100% {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes spin {
        from {
          transform: rotate(0deg);
        }
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
        20%, 40%, 60%, 80% { transform: translateX(5px); }
      }

      @keyframes expandIn {
        from {
          opacity: 0;
          transform: scaleY(0);
          max-height: 0;
        }
        to {
          opacity: 1;
          transform: scaleY(1);
          max-height: 200px;
        }
      }

      @keyframes pulse {
        0%, 100% {
          box-shadow: 0 8px 24px var(--pulse-color, rgba(128, 0, 0, 0.25)), 
                      0 0 0 4px var(--pulse-color-light, rgba(128, 0, 0, 0.125));
        }
        50% {
          box-shadow: 0 12px 32px var(--pulse-color, rgba(128, 0, 0, 0.4)), 
                      0 0 0 8px var(--pulse-color-light, rgba(128, 0, 0, 0.2));
        }
      }
    `;
    document.head.appendChild(style);
  }
};