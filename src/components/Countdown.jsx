import { useEffect, useState } from "react";
import CountdownTimer from "../utils/CountdownUtils";

function ExpiredCountdown() {
  return <h1>Merry Christmas!</h1>;
}
function Timer({ days, hours, minutes, seconds }) {
  return (
    <>
      <div className="top-wrap">
        <h2 className="top-title">Time until</h2>
      </div>
      <div className="bot-wrap">
        <h2 className="bot-title">ChistMas</h2>
      </div>
      <h1 className="counter">
        {days}d {hours}h {minutes}m {seconds}s
      </h1>
    </>
  );
}
function Countdown() {
  const { days, hours, minutes, seconds } = CountdownTimer();

  //A small little detail but basically this just waits for
  //the CountdownTimer to recieve the date values
  const [canShow, setCanShow] = useState(false);

  useEffect(() => {
    const timeOut = setTimeout(() => setCanShow(true), 1000);
    return () => clearTimeout(timeOut);
  });

  if (days + hours + minutes + seconds <= 0) {
    if (canShow) {
      return <ExpiredCountdown></ExpiredCountdown>;
    } else {
      return <h1>Loading...</h1>;
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

export default Countdown;
