import "./App.css";
import "./styles/colorPalette.css";
import SideMenu from "./components/SideMenu";
import { RiSendPlaneFill } from "react-icons/ri";
import { useState, createContext } from "react";
import { useEffect } from "react";
import Countdown from "./hooks/utils";
//Context for list state
export const ListContext = createContext();
function App() {
  const { days, hours, minutes, seconds } = Countdown();

  //Input State
  const [input, setInput] = useState("");

  //List State
  const [list, setList] = useState([]);

  //Greeting object
  const greeting = {
    text: input,
    id: "",
  };

  //Add greeting function\\
  function addGreeting(greeting) {
    //Setting the id inside the function so it gives a more exact date when this function runs
    greeting.id = Date.now();

    const newGreeting = [...list, greeting];

    setList(newGreeting);

    setInput("");
  }

  //Keydown handler function
  function keyHandle(e) {
    if (e.key === "Enter") {
      addGreeting(greeting);
    }
  }

  return (
    <div className="App">
      <main className="main">
        <ListContext.Provider value={list}>
          <SideMenu></SideMenu>
        </ListContext.Provider>

        <section className="wrapper">
          <div className="top-wrap">
            <h2 className="top-title">Time until</h2>
          </div>
          <div className="bot-wrap">
            <h2 className="bot-title">ChistMas</h2>
          </div>
          <h1 className="counter">
            {days}d {hours}h {minutes}m {seconds}s
          </h1>

          <span className="input-wrapper">
            <input
              type="text"
              className="greet"
              placeholder="Write a greeting"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={keyHandle}
              autoFocus
            ></input>

            <RiSendPlaneFill
              className="send"
              onClick={() => addGreeting(greeting)}
            ></RiSendPlaneFill>
          </span>
        </section>
      </main>
    </div>
  );
}

export default App;
