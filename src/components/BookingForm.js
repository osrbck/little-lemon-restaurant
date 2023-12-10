import React from 'react';

function BookingForm({
  selectedDate,
  setSelectedDate,
  selectedTime,
  setSelectedTime,
  numberOfGuests,
  setNumberOfGuests,
  selectedOccasion,
  setSelectedOccasion,
  availableTimes,
  onSubmit
}) {
  return (
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px' }} onSubmit={onSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />

      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>

      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={numberOfGuests}
        onChange={(e) => setNumberOfGuests(parseInt(e.target.value, 10))}
      />

      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={selectedOccasion} onChange={(e) => setSelectedOccasion(e.target.value)}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
