import React, { useEffect, useState } from "react";

const ReservationCalender = () => {
  const [currentDate, setCureentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [startDate, setStartDate] = useState();
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, 1);
    const days = [];

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    setDaysInMonth(days);
    setStartDate(new Date(year, month, 1).getDay());
  }, [currentDate]);

  const daysName = ["MON", "TUE", "WED", "THUR", "FRI", "SAT", "SUN"];
  const prevMonth = () => {
    setCureentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  };

  const nextMonth = () => {
    setCureentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  };

  const handleDateClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="calender">
        <div className="header">
          <button onClick={prevMonth}>&lt;</button>
          <span>
            {currentDate.toLocaleString("default", { month: "long" })}
            {currentDate.getFullYear()}
          </span>
          <button onClick={nextMonth}>&gt;</button>
        </div>
        <div className="day-names">
          {daysName.map((day) => (
            <div className="day-name" key={day}>
              {day}
            </div>
          ))}
        </div>
        <div className="days">
          {Array.from({ length: startDate }).map((_, index) => (
            <div className="empty-day"></div>
          ))}
          {daysInMonth.map((day) => (
            <div
              key={day}
              className={`day ${
                day.getDate() === new Date().getDate() &&
                day.getMonth() === new Date().getMonth()
                  ? "today"
                  : ""
              } ${
                selectedDate &&
                day.toDateString() === selectedDate.toDateString()
                  ? "selected"
                  : ""
              }`}
              onClick={() => handleDateClick(day)}
            >
              {day.getDate()}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReservationCalender;
