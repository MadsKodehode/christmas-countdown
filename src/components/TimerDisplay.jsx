import { useEffect, useState } from "react";
import RemainingTime from "../utils/CountdownUtils";
import ExpiredCountdown from "./ExpiredCountdown";
import Timer from "./Timer";
//Component for displaying timer or expired timer
function TimerDisplay() {
  const { days, hours, minutes, seconds } = RemainingTime();

  //A small little detail but basically this just waits for
  //the TimerDisplay to recieve the date values
  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => setCanShow(true), 1000);
    return () => clearTimeout(timeOut);
  });

  if (days + hours + minutes + seconds <= 0) {
    if (canShow) {
      return <ExpiredCountdown></ExpiredCountdown>;
    } else {
      return <h1 className="loading">Calculating time until Christmas...</h1>;
    }
  } else {
    return (
      <Timer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      ></Timer>
    );
  }
}

export default TimerDisplay;
