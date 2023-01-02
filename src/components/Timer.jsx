//Timer component
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
export default Timer;
