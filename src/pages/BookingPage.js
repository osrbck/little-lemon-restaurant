import React, { useState } from 'react';
import BookingForm from '../components/BookingForm';

function BookingPage() {
  // State variables for form fields
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState('Birthday');

  // State variable for available booking times
  const [availableTimes] = useState([
    '17:00', '18:00', '19:00', '20:00', '21:00', '22:00'
  ]);

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Add your logic for form submission here, e.g., sending data to a server
    console.log('Form submitted:', {
      selectedDate,
      selectedTime,
      numberOfGuests,
      selectedOccasion
    });
  };

  return (
    <div className='container'>
      <BookingForm
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
        numberOfGuests={numberOfGuests}
        setNumberOfGuests={setNumberOfGuests}
        selectedOccasion={selectedOccasion}
        setSelectedOccasion={setSelectedOccasion}
        availableTimes={availableTimes}
        onSubmit={handleSubmit}
      />
    </div>
  );
}

export default BookingPage;
