'use client';
import { useState, useEffect } from 'react';
import styles from '../css/page.moduleAdrian.css';
import { tourPackages, contactInfo } from '../js/contact-data';
import {
  validateForm,
  getPackageById,
  loadSubmissions,
  saveSubmissions,
  createSubmission,
  getHeaderStyles,
  getPackageSectionTitleStyles,
  getErrorMessageStyles,
  getPackageCardStyles,
  getCheckmarkBadgeStyles,
  getPackageImageStyles,
  getPackageContentStyles,
  getPackageNameStyles,
  getPackagePriceStyles,
  getPackageDurationStyles,
  getPackageDescriptionStyles,
  getFormContainerStyles,
  getFormTitleStyles,
  getSuccessBannerStyles,
  getSuccessIconStyles,
  getSuccessTitleStyles,
  getSuccessMessageStyles,
  getFormStyles,
  getLabelStyles,
  getInputStyles,
  getErrorTextStyles,
  getFormRowStyles,
  getTextareaStyles,
  getSelectionSummaryStyles,
  getSummaryTitleStyles,
  getSummaryContentStyles,
  getSummaryLabelStyles,
  getSummaryValueStyles,
  getSubmitButtonStyles,
  getContactInfoContainerStyles,
  getContactInfoCardStyles,
  getContactIconStyles,
  getContactTitleStyles,
  getContactContentStyles,
} from '../js/Contact-helpers';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    selectedPackage: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [savedSubmissions, setSavedSubmissions] = useState([]);
  const [hoveredStates, setHoveredStates] = useState({});

  // Load saved submissions on mount
  useEffect(() => {
    setSavedSubmissions(loadSubmissions());
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handlePackageClick = (packageId) => {
    setFormData(prev => ({
      ...prev,
      selectedPackage: prev.selectedPackage === packageId ? '' : packageId
    }));
    if (errors.selectedPackage) {
      setErrors(prev => ({ ...prev, selectedPackage: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const submission = createSubmission(formData);
    const updatedSubmissions = [...savedSubmissions, submission];
    
    setSavedSubmissions(updatedSubmissions);
    saveSubmissions(updatedSubmissions);
    
    console.log('Form submitted and saved:', submission);
    setSubmitted(true);
    
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        selectedPackage: '',
      });
    }, 3000);
  };

  const handleHover = (key, isHovered) => {
    setHoveredStates(prev => ({ ...prev, [key]: isHovered }));
  };

  const getSelectedPackage = () => {
    return getPackageById(tourPackages, formData.selectedPackage);
  };

  return (
    <section className={styles.section}>
      <header>
        <h2 className={styles.h2}>Contact Us - Book Your Package</h2>
        <p style={getHeaderStyles()}>
          Select a package and fill in your details to get started
        </p>
      </header>



      {/* Package Cards */}
      <article>
        <header>
          <h3 style={getPackageSectionTitleStyles()}>Choose Your Package</h3>
        </header>
        {errors.selectedPackage && (
          <p style={getErrorMessageStyles()}>{errors.selectedPackage}</p>
        )}
        <div className={styles.cardsContainer}>
          {tourPackages.map((pkg) => (
            <article
              key={pkg.id}
              onClick={() => handlePackageClick(pkg.id)}
              className={styles.card}
              style={getPackageCardStyles(formData.selectedPackage === pkg.id, pkg.color)}
            >
              {formData.selectedPackage === pkg.id && (
                <div style={getCheckmarkBadgeStyles(pkg.color)}>✓</div>
              )}
              <img
                src={pkg.img}
                alt={pkg.name}
                className={styles.cardImg}
                style={getPackageImageStyles()}
              />
              <div style={getPackageContentStyles()}>
                <p 
                  className={styles.cardName}
                  style={getPackageNameStyles(formData.selectedPackage === pkg.id, pkg.color)}
                >
                  {pkg.name}
                </p>
                <p style={getPackagePriceStyles(pkg.color)}>${pkg.price}</p>
                <p style={getPackageDurationStyles()}>{pkg.duration}</p>
                <p style={getPackageDescriptionStyles()}>{pkg.description}</p>
              </div>
            </article>
          ))}
        </div>
      </article>

      {/* Contact Form */}
      <article style={getFormContainerStyles()}>
        <header>
          <h3 style={getFormTitleStyles()}>Your Contact Information</h3>
        </header>

        {submitted && (
          <div style={getSuccessBannerStyles()}>
            <span style={getSuccessIconStyles()}>🎉</span>
            <h4 style={getSuccessTitleStyles()}>Thank You!</h4>
            <p style={getSuccessMessageStyles()}>Your inquiry has been saved successfully.</p>
          </div>
        )}

        <form onSubmit={handleSubmit} style={getFormStyles()}>
          <fieldset style={{ border: 'none', padding: 0, margin: 0 }}>
            <legend style={{ ...getLabelStyles(), fontSize: '1rem', marginBottom: '20px' }}>Personal Information</legend>
            <div>
              <label style={getLabelStyles()}>Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                style={getInputStyles(errors.name)}
              />
              {errors.name && <span style={getErrorTextStyles()}>{errors.name}</span>}
            </div>

            <div style={getFormRowStyles()}>
              <div>
                <label style={getLabelStyles()}>Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  style={getInputStyles(errors.email)}
                />
                {errors.email && <span style={getErrorTextStyles()}>{errors.email}</span>}
              </div>

              <div>
                <label style={getLabelStyles()}>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+65 XXXX XXXX"
                  style={getInputStyles(errors.phone)}
                />
                {errors.phone && <span style={getErrorTextStyles()}>{errors.phone}</span>}
              </div>
            </div>

            <div>
              <label style={getLabelStyles()}>Message (Optional)</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your travel preferences or any questions..."
                rows="5"
                style={getTextareaStyles()}
              />
            </div>
          </fieldset>

          {formData.selectedPackage && (
            <div style={getSelectionSummaryStyles()}>
              <h4 style={getSummaryTitleStyles()}>Selected Package</h4>
              <div style={getSummaryContentStyles()}>
                <span style={getSummaryLabelStyles()}>Package:</span>
                <span style={getSummaryValueStyles()}>
                  {getSelectedPackage()?.name} - ${getSelectedPackage()?.price}
                </span>
              </div>
            </div>
          )}

          <button 
            type="submit"
            style={getSubmitButtonStyles(hoveredStates.submitBtn)}
            onMouseOver={() => handleHover('submitBtn', true)}
            onMouseOut={() => handleHover('submitBtn', false)}
          >
            Send Inquiry →
          </button>
        </form>
      </article>

      {/* Contact Information */}
      <aside style={getContactInfoContainerStyles()}>
        {contactInfo.map((info, index) => (
          <article 
            key={index}
            style={getContactInfoCardStyles(hoveredStates[`contact${index}`])}
            onMouseOver={() => handleHover(`contact${index}`, true)}
            onMouseOut={() => handleHover(`contact${index}`, false)}
          >
            <div style={getContactIconStyles()}>{info.icon}</div>
            <h4 style={getContactTitleStyles()}>{info.title}</h4>
            <p style={getContactContentStyles()}>{info.content}</p>
          </article>
        ))}
      </aside>
    </section>
  );
}