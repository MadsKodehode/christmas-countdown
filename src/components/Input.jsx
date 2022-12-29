import { RiSendPlaneFill } from "react-icons/ri";
import { useContext, useState } from "react";
import { ListContext } from "../App";
function Input() {
  const [list, setList] = useContext(ListContext);

  //Input State
  const [input, setInput] = useState("");

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
  );
}
export default Input;
