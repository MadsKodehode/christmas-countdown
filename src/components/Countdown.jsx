import { useEffect, useState } from "react";
import CountdownTimer from "../utils/CountdownUtils";
import Snowflake1 from "../images/path30.svg";
import Snowflake2 from "../images/path46.svg";
//Expired time component
function ExpiredCountdown() {
  return (
    <>
      <h1 className="christmas-msg">Merry Christmas</h1>
      <p className="filthy">You filthy animal</p>
      <div className="snow">
        <img className="snowflake" src={Snowflake1}></img>
        <img className="snowflake" src={Snowflake2}></img>
        <img className="snowflake" src={Snowflake1}></img>
        <img className="snowflake" src={Snowflake2}></img>
        <img className="snowflake" src={Snowflake1}></img>
        <img className="snowflake" src={Snowflake2}></img>
        <img className="snowflake" src={Snowflake1}></img>
        <img className="snowflake" src={Snowflake2}></img>
        <img className="snowflake" src={Snowflake1}></img>
        <img className="snowflake" src={Snowflake2}></img>
        <img className="snowflake" src={Snowflake1}></img>
        <img className="snowflake" src={Snowflake2}></img>
        <img className="snowflake" src={Snowflake1}></img>
        <img className="snowflake" src={Snowflake2}></img>
        <img className="snowflake" src={Snowflake1}></img>
        <img className="snowflake" src={Snowflake2}></img>
        <img className="snowflake" src={Snowflake1}></img>
        <img className="snowflake" src={Snowflake2}></img>
        <img className="snowflake" src={Snowflake1}></img>
        <img className="snowflake" src={Snowflake2}></img>
      </div>
    </>
  );
}

//Timer display component
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
