import "./App.css";
import "./styles/colorPalette.css";
import SideMenu from "./components/SideMenu";

import { useState, createContext, useEffect } from "react";
import TimerDisplay from "./components/TimerDisplay";
import Input from "./components/Input";
//Context for list state
export const ListContext = createContext();
const localKey = "greetings";
function App() {
  //List State with localstorage
  const [list, setList] = useState(() => {
    return JSON.parse(localStorage.getItem(localKey)) || [];
  });

  useEffect(() => {
    localStorage.setItem(localKey, JSON.stringify(list));
  }, [list]);

  return (
    <div className="App">
      <main className="main">
        <ListContext.Provider value={[list, setList]}>
          <SideMenu></SideMenu>
          <TimerDisplay></TimerDisplay>
          <Input></Input>
        </ListContext.Provider>
      </main>
    </div>
  );
}

export default App;
