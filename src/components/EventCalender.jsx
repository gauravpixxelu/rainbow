import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Calendar = () => {
  const [holidays, setHolidays] = useState([]);

  useEffect(() => {
    fetchHolidays();
  }, []);

  const fetchHolidays = async () => {
    try {
      const response = await axios.get(
        'https://date.nager.at/Api/v2/NextPublicHolidays/IN'
      );
      setHolidays(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const Month = ({ month }) => {
    const renderDays = () => {
      const days = [];
      const daysInMonth = new Date(month.getFullYear(), month.getMonth() + 1, 0).getDate();

      // Loop through the days in the month
      for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(month.getFullYear(), month.getMonth(), i);
        const isHoliday = checkHoliday(date);

        const dayStyle = isHoliday ? 'day holiday' : 'day';

        days.push(
          <div key={i} className={dayStyle}>
            <span className="date">{i}</span>
            {isHoliday && (
              <span className="holiday-name">
                {isHoliday.name} - {isHoliday.date}
              </span>
            )}
          </div>
        );
      }

      return days;
    };

    const checkHoliday = (date) => {
      if (holidays.length === 0) {
        return null;
      }

      const holiday = holidays.find((holiday) => {
        const holidayDate = new Date(holiday.date);
        return (
          date.getFullYear() === holidayDate.getFullYear() &&
          date.getMonth() === holidayDate.getMonth() &&
          date.getDate() === holidayDate.getDate()
        );
      });

      return holiday || null;
    };

    return (
      <div className="month">
        <h2>{month.toLocaleString('en-US', { month: 'long', year: 'numeric' })}</h2>
        <div className="days-container">{renderDays()}</div>
      </div>
    );
  };

  const renderMonths = () => {
    const months = [];
    const currentDate = new Date();

    // Loop through the 12 months
    for (let i = 0; i < 12; i++) {
      const month = new Date(currentDate.getFullYear(), i);
      months.push(<Month key={i} month={month} />);
    }

    return months;
  };

  return <div className="calendar">{renderMonths()}</div>;
};

export default Calendar;
