import { useContext } from "react";
import { ListContext } from "../App";

function List() {
  const list = useContext(ListContext);

  //Funtion for displaying the timestamp in readable format\\
  function getReadableTime(greeting) {
    const newTime = new Date(greeting);

    return `${newTime.toLocaleTimeString()}`;
  }
  function getReadableDate(greeting) {
    const newDate = new Date(greeting);

    return `${newDate.toLocaleDateString()}`;
  }
  return !list.length ? (
    <h1 className="empty-text">No greetings yet</h1>
  ) : (
    <ul className="greetings">
      {list.map((greeting) => (
        <li className="greeting" key={greeting.id}>
          <div className="time-stamp-wrap">
            <span className="time-stamp">{getReadableTime(greeting.id)}</span>
            <span className="time-stamp">{getReadableDate(greeting.id)}</span>
          </div>
          {greeting.text}
        </li>
      ))}
    </ul>
  );
}

export default List;
