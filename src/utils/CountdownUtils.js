import { useState, useEffect } from "react";

//Function that makes a countdown to christmas and also
//returns remaining time converted using the convertToReadable function
function RemainingTime() {
  //Todays date
  const today = new Date();

  //Date of christmas
  const christmas = new Date(today.getFullYear(), 12, 3);

  //Remaining time state
  const [remainingTime, setRemainingTime] = useState(null);

  //Christmas state
  const [isChristmas, setIsChristmas] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      //If todays date and month is indeed christmas
      //then set isChristmas to true and stop timer

      if (
        today.getDate() === christmas.getDate() &&
        today.getMonth() === christmas.getMonth()
      ) {
        setIsChristmas(true);

        return () => clearInterval(timer);

        //If its after christmas it will set the date to next christmas
      } else if (today > christmas) {
        setIsChristmas(false);
        christmas.setFullYear(christmas.getFullYear() + 1);
      }

      //Storing the remaining time in ms
      setRemainingTime(christmas - today);
    }, 1000);

    //Cleaning up the interval so it doesnt stack
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

export default RemainingTime;
