import React, { useState } from 'react';
import './Booking.css';
import emailjs from '@emailjs/browser';

const Booking = () => {
  const serviceId = 'service_uunsqmn'; // Replace with your EmailJS service ID
  const templateId= 'template_8ku59pg'; // Replace with your EmailJS template ID
  const publicKey = 'qmf3-cRchrmmQf_hb'; // Replace with your EmailJS public key

  const [formData, setFormData] = useState({
    fullName: '',
    country: '',
    email: '',
    phone: '',
    specificDates: '',
    travelDuration: '',
    adults: 1,
    children: 0,
    budget: '',
    preferredItinerary: '',
    notes: '',
    howHeard: '',
    otherSource: '',
  });

  const [submissionMessage, setSubmissionMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionMessage('Submitting booking request...');

    try {
      const response = await emailjs.sendForm(
        serviceId,
        templateId,
        e.target, // Use the form element directly
        publicKey
      );
      console.log('SUCCESS!', response.status, response.text);
      setFormData({ // Reset the form after successful submission
        fullName: '',
        country: '',
        email: '',
        phone: '',
        specificDates: '',
        travelDuration: '',
        adults: 1,
        children: 0,
        budget: '',
        preferredItinerary: '',
        notes: '',
        howHeard: '',
        otherSource: '',
      });
      setSubmissionMessage('Booking request submitted successfully! We will be in touch soon.');
    } catch (error) {
      console.log('FAILED...', error);
      setSubmissionMessage('Failed to submit booking request. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='booking-container'>
      <h2 className='booking-title'>Booking Form</h2>
      <form onSubmit={handleSubmit} className='booking-form'>
        <div className='form-section'>
          <h3 className='section-title'>Personal Information</h3>
          <div className='form-group fullName'>
            <label htmlFor="fullName" className='form-label'>Full Name:</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className='form-input'
            />
          </div>
          <div className='form-group'>
            <label htmlFor="country" className='form-label'>Country of Residence:</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
              className='form-input'
            />
          </div>
          <div className='form-group'>
            <label htmlFor="email" className='form-label'>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className='form-input'
            />
          </div>
          <div className='form-group'>
            <label htmlFor="phone" className='form-label'>Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className='form-input'
            />
          </div>
        </div>

        <div className='form-section'>
          <h3 className='section-title'>Trip Information</h3>
          <div className='form-group'>
            <label htmlFor="specificDates" className='form-label'>Do you have any specific dates?</label>
            <input
              type="text"
              id="specificDates"
              name="specificDates"
              value={formData.specificDates}
              onChange={handleChange}
              placeholder="e.g., June 2025 or 10th to 15th July"
              className='form-input'
            />
          </div>
          <div className='form-group'>
            <label className='form-label'>How long would you like to travel for?</label>
            <div>
              <div className='radio-group'>
                <input
                  type="radio"
                  id="lessThan5"
                  name="travelDuration"
                  value="Less than 5 nights"
                  checked={formData.travelDuration === 'Less than 5 nights'}
                  onChange={handleChange}
                  className='radio-input'
                />
                <label htmlFor="lessThan5" className='radio-label'>Less than 5 nights</label>
              </div>
              <div className='radio-group'>
                <input
                  type="radio"
                  id="5-7"
                  name="travelDuration"
                  value="5-7 nights"
                  checked={formData.travelDuration === '5-7 nights'}
                  onChange={handleChange}
                  className='radio-input'
                />
                <label htmlFor="5-7" className='radio-label'>5-7 nights</label>
              </div>
              <div className='radio-group'>
                <input
                  type="radio"
                  id="7-10"
                  name="travelDuration"
                  value="7-10 nights"
                  checked={formData.travelDuration === '7-10 nights'}
                  onChange={handleChange}
                  className='radio-input'
                />
                <label htmlFor="7-10" className='radio-label'>7-10 nights</label>
              </div>
              <div className='radio-group'>
                <input
                  type="radio"
                  id="10-15"
                  name="travelDuration"
                  value="10-15 nights"
                  checked={formData.travelDuration === '10-15 nights'}
                  onChange={handleChange}
                  className='radio-input'
                />
                <label htmlFor="10-15" className='radio-label'>10-15 nights</label>
              </div>
              <div className='radio-group'>
                <input
                  type="radio"
                  id="15-20"
                  name="travelDuration"
                  value="15-20 nights"
                  checked={formData.travelDuration === '15-20 nights'}
                  onChange={handleChange}
                  className='radio-input'
                />
                <label htmlFor="15-20" className='radio-label'>15-20 nights</label>
              </div>
              <div className='radio-group'>
                <input
                  type="radio"
                  id="moreThan20"
                  name="travelDuration"
                  value="More than 20 nights"
                  checked={formData.travelDuration === 'More than 20 nights'}
                  onChange={handleChange}
                  className='radio-input'
                />
                <label htmlFor="moreThan20" className='radio-label'>More than 20 nights</label>
              </div>
            </div>
          </div>
          <div className='form-group'>
            <label htmlFor="adults" className='form-label'>Number of adults:</label>
            <input
              type="number"
              id="adults"
              name="adults"
              min="1"
              value={formData.adults}
              onChange={handleChange}
              className='form-input'
            />
          </div>
          <div className='form-group'>
            <label htmlFor="children" className='form-label'>Number of children (0-14yrs):</label>
            <input
              type="number"
              id="children"
              name="children"
              min="0"
              value={formData.children}
              onChange={handleChange}
              className='form-input'
            />
          </div>
          <div className='form-group'>
            <label htmlFor="budget" className='form-label'>Ideal budget per person (USD):</label>
            <select
              id="budget"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
              className='form-select'
            >
              <option value="">Select Budget</option>
              <option value="Lead-in">$ Lead-in Buget: Typically starts at US$400+ per person, per day of service</option>
              <option value="Mid-range">$$ Mid-range Budget: Typically starts at US$600+ per person, per day of service</option>
              <option value="Luxury">$$$ Luxury Budget: Typically starts at US$800+ per person, per day of service</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor="preferredItinerary" className='form-label'>Do you have a preferred example itinerary?</label>
            <select
              id="preferredItinerary"
              name="preferredItinerary"
              value={formData.preferredItinerary}
              onChange={handleChange}
              className='form-select'
            >
              <option value="">Select Itinerary (Optional)</option>
              <option value="Big Cats & Gorillas">Big Cats & Gorillas: Kenya & Uganda</option>
              <option value="Great Migration Safari">Great Migration Safari</option>
              <option value="Kenya in 7 days">Kenya in 7 days</option>
              <option value="Best of Masai Mara & Serengeti">Best of Masai Mara & Serengeti</option>
              <option value="Combine Kenya & Victoria Falls">Combine Kenya & Victoria Falls</option>
              <option value="Northern Kenya: Culture & Conservation">Northern Kenya: Culture & Conservation</option>
              <option value="Bush to Beach">Bush to Beach</option>
              <option value="Honeymoon Safari">Honeymoon Safari</option>
              <option value="Highlights of Kenya & Tanzania">Highlights of Kenya & Tanzania</option>
              <option value="The Ultimate Kenyan Safari">The Ultimate Kenyan Safari</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor="notes" className='form-label'>Notes:</label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              rows="4"
              placeholder="Any other specific requests or information?"
              className='form-textarea'
            ></textarea>
          </div>
        </div>

        <div className='form-section'>
          <h3 className='section-title'>How did you hear about us?</h3>
          <div className='form-group'>
            <div className='radio-group'>
              <input
                type="radio"
                id="ololoWebsite"
                name="howHeard"
                value="Ololo Lodge website"
                checked={formData.howHeard === 'Ololo Lodge website'}
                onChange={handleChange}
                className='radio-input'
              />
              <label htmlFor="ololoWebsite" className='radio-label'>Ololo Lodge website</label>
            </div>
            <div className='radio-group'>
              <input
                type="radio"
                id="referral"
                name="howHeard"
                value="Referral from a friend"
                checked={formData.howHeard === 'Referral from a friend'}
                onChange={handleChange}
                className='radio-input'
              />
              <label htmlFor="referral" className='radio-label'>Referral from a friend</label>
            </div>
            <div className='radio-group'>
              <input
                type="radio"
                id="onlineSearch"
                name="howHeard"
                value="Online search engine"
                checked={formData.howHeard === 'Online search engine'}
                onChange={handleChange}
                className='radio-input'
              />
              <label htmlFor="onlineSearch" className='radio-label'>Online search engine</label>
            </div>
            <div className='radio-group'>
              <input
                type="radio"
                id="socialMedia"
                name="howHeard"
                value="Social media"
                checked={formData.howHeard === 'Social media'}
                onChange={handleChange}
                className='radio-input'
              />
              <label htmlFor="socialMedia" className='radio-label'>Social media</label>
            </div>
            <div className='radio-group'>
              <input
                type="radio"
                id="other"
                name="howHeard"
                value="Other"
                checked={formData.howHeard === 'Other'}
                onChange={handleChange}
                className='radio-input'
              />
              <label htmlFor="other" className='radio-label'>Other</label>
              {formData.howHeard === 'Other' && (
                <input
                  type="text"
                  name="otherSource"
                  placeholder="Please specify"
                  onChange={handleChange}
                  className='form-input'
                />
              )}
            </div>
          </div>
        </div>

        <button type="submit" className='submit-button' disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
        </button>

        {submissionMessage && <p className='submission-message'>{submissionMessage}</p>}
      </form>
    </div>
  );
};

export default Booking;