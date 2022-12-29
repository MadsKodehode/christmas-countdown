import "./App.css";
import "./styles/colorPalette.css";
import SideMenu from "./components/SideMenu";

import { useState, createContext } from "react";
import Countdown from "./components/Countdown";
import Input from "./components/Input";
//Context for list state
export const ListContext = createContext();

function App() {
  //List State
  const [list, setList] = useState([]);

  return (
    <div className="App">
      <main className="main">
        <ListContext.Provider value={[list, setList]}>
          <SideMenu></SideMenu>
          <Countdown></Countdown>
          <Input></Input>
        </ListContext.Provider>
      </main>
    </div>
  );
}

export default App;
