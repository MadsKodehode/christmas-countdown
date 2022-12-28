import { useState, useEffect } from "react";
function Countdown() {
  //Making a date variable with current date
  const today = new Date();

  //Making a target date variable that stores time of christmas
  const christmas = new Date(today.getFullYear(), 11, 25);
  const [remainingTime, setRemainingTime] = useState(null);

  useEffect(() => {
    const timer = setInterval(() => {
      //If its past this years christmas it will set fullyear to next year
      if (today > christmas) {
        christmas.setFullYear(christmas.getFullYear() + 1);
      }

      setRemainingTime(christmas - today);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return convertToReadable(remainingTime);
}

function convertToReadable(remaining) {
  const days = Math.floor(remaining / (1000 * 60 * 60 * 24));

  const hours = Math.floor(
    (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

  return {
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

export default Countdown;
