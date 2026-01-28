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

// ==================== INLINE STYLES ====================
// These replace the long inline styles in the JSX

export const getHeaderStyles = () => ({
  textAlign: 'center',
  marginBottom: '30px',
  fontSize: '1.1rem'
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
  transform: isHovered ? 'translateY(-2px)' : 'translateY(0)'
});

export const getSubmissionsContainerStyles = () => ({
  maxWidth: '1000px',
  margin: '0 auto 40px',
  background: 'white',
  padding: '30px',
  borderRadius: '16px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
});

export const getSubmissionsHeaderStyles = () => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px'
});

export const getSubmissionsTitleStyles = () => ({
  color: '#800000d9',
  margin: 0,
  fontSize: '1.5rem'
});

export const getClearAllButtonStyles = () => ({
  background: '#ff4444',
  color: 'white',
  border: 'none',
  padding: '8px 16px',
  borderRadius: '6px',
  fontSize: '0.9rem',
  cursor: 'pointer'
});

export const getSubmissionsListStyles = () => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px'
});

export const getSubmissionCardStyles = () => ({
  border: '2px solid #e0e0e0',
  borderRadius: '12px',
  padding: '20px',
  background: '#fafafa',
  position: 'relative'
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
  fontSize: '16px'
});

export const getSubmissionGridStyles = () => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '15px'
});

export const getSubmissionTextStyles = () => ({
  margin: '5px 0'
});

export const getSubmissionMessageStyles = () => ({
  margin: '10px 0 0',
  paddingTop: '10px',
  borderTop: '1px solid #ddd'
});

export const getPackageSectionTitleStyles = () => ({
  color: '#800000d9',
  fontSize: '1.5rem',
  marginBottom: '20px',
  textAlign: 'center'
});

export const getErrorMessageStyles = () => ({
  color: '#ff4444',
  background: '#fff5f5',
  padding: '12px',
  borderRadius: '8px',
  marginBottom: '15px',
  textAlign: 'center',
  border: '1px solid #ff4444'
});

export const getPackageCardStyles = (isSelected, color) => ({
  position: 'relative',
  border: isSelected ? `4px solid ${color}` : '1px solid #ccc',
  transform: isSelected ? 'scale(1.05)' : 'scale(1)',
  boxShadow: isSelected ? `0 8px 24px ${color}40` : '0 4px 8px rgba(0,0,0,0.1)',
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
  animation: 'rotateIn 0.5s ease-out'
});

export const getPackageImageStyles = () => ({
  height: '120px'
});

export const getPackageContentStyles = () => ({
  padding: '15px'
});

export const getPackageNameStyles = (isSelected, color) => ({
  marginBottom: '8px',
  color: isSelected ? color : '#000'
});

export const getPackagePriceStyles = (color) => ({
  fontSize: '1.8rem',
  fontWeight: 'bold',
  color: color,
  margin: '8px 0'
});

export const getPackageDurationStyles = () => ({
  color: '#666',
  fontSize: '1rem',
  margin: '5px 0'
});

export const getPackageDescriptionStyles = () => ({
  color: '#777',
  fontSize: '0.9rem',
  fontStyle: 'italic',
  marginTop: '8px'
});

export const getFormContainerStyles = () => ({
  maxWidth: '800px',
  margin: '50px auto 0',
  background: 'white',
  padding: '40px',
  borderRadius: '16px',
  boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
});

export const getFormTitleStyles = () => ({
  color: '#800000d9',
  fontSize: '1.8rem',
  marginBottom: '25px',
  textAlign: 'center'
});

export const getSuccessBannerStyles = () => ({
  background: 'linear-gradient(135deg, #4caf50, #45a049)',
  color: 'white',
  padding: '20px',
  borderRadius: '12px',
  marginBottom: '25px',
  textAlign: 'center',
  animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
});

export const getSuccessIconStyles = () => ({
  fontSize: '2rem'
});

export const getSuccessTitleStyles = () => ({
  margin: '10px 0 5px'
});

export const getSuccessMessageStyles = () => ({
  margin: 0
});

export const getFormStyles = () => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px'
});

export const getLabelStyles = () => ({
  fontWeight: '600',
  color: '#333',
  display: 'block',
  marginBottom: '8px'
});

export const getInputStyles = (hasError) => ({
  width: '100%',
  padding: '14px',
  border: hasError ? '2px solid #ff4444' : '2px solid #e0e0e0',
  borderRadius: '10px',
  fontSize: '1rem',
  background: hasError ? '#fff5f5' : '#fafafa',
  boxSizing: 'border-box'
});

export const getErrorTextStyles = () => ({
  color: '#ff4444',
  fontSize: '0.875rem',
  marginTop: '4px',
  display: 'block'
});

export const getFormRowStyles = () => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '20px'
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
  boxSizing: 'border-box'
});

export const getSelectionSummaryStyles = () => ({
  background: 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
  padding: '20px',
  borderRadius: '12px',
  border: '2px solid #800000d9'
});

export const getSummaryTitleStyles = () => ({
  margin: '0 0 12px 0',
  color: '#800000d9',
  fontSize: '1.2rem'
});

export const getSummaryContentStyles = () => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
});

export const getSummaryLabelStyles = () => ({
  fontWeight: '600',
  color: '#555'
});

export const getSummaryValueStyles = () => ({
  fontWeight: '700',
  fontSize: '1.1rem'
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
  transition: 'all 0.3s ease',
  transform: isHovered ? 'translateY(-3px)' : 'translateY(0)'
});

export const getContactInfoContainerStyles = () => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '20px',
  marginTop: '50px',
  maxWidth: '1000px',
  margin: '50px auto 0'
});

export const getContactInfoCardStyles = (isHovered = false) => ({
  background: 'white',
  padding: '25px',
  borderRadius: '16px',
  textAlign: 'center',
  boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
  transition: 'transform 0.3s ease',
  transform: isHovered ? 'translateY(-5px)' : 'translateY(0)'
});

export const getContactIconStyles = () => ({
  fontSize: '2.5rem',
  marginBottom: '12px'
});

export const getContactTitleStyles = () => ({
  color: '#800000d9',
  margin: '0 0 10px 0',
  fontSize: '1.2rem'
});

export const getContactContentStyles = () => ({
  color: '#666',
  margin: 0,
  lineHeight: '1.6'
});