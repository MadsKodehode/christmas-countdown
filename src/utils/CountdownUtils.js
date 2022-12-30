import { useState, useEffect, createContext } from "react";

//Function for displaying countdown
function CountdownTimer() {
  //Making a date variable with current date
  const today = new Date();

  //Making a target date variable that stores time of christmas
  const christmas = new Date(today.getFullYear(), 11, 30);

  //State for storing remaining time
  const [remainingTime, setRemainingTime] = useState(null);

  //State for if its christmas
  const [isChristmas, setIsChristmas] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      //If todays date and month is indeed christmas
      //then stop timer and set isChristmas to true
      if (
        today.getDate() === christmas.getDate() &&
        today.getMonth() === christmas.getMonth()
      ) {
        setIsChristmas(true);

        return () => clearInterval(timer);
      } else {
        setIsChristmas(false);
      }

      //If its after christmas it will set the date to next
      if (today > christmas) {
        christmas.setFullYear(christmas.getFullYear() + 1);
      }

      //Storing the remaining time in ms
      setRemainingTime(christmas - today);
    }, 1000);

    //Cleaning up the interval
    return () => clearInterval(timer);
  }, [christmas, isChristmas]); //Re run effect if this changes

  //Using the function to convert to readable time
  // and returning it to be displayed in our app
  return convertToReadable(remainingTime);
}

//Function that converts the remainigTime to a readable format
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

export default CountdownTimer;
