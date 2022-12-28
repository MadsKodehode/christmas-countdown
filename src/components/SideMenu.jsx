import { IoMdArrowDropright, IoMdArrowDropleft } from "react-icons/io";
import { useState } from "react";
import List from "./List";
function SideMenu() {
  const [isActive, setIsActive] = useState(false);

  return isActive ? (
    <aside className="menu">
      <div className="menu-head">
        <h1 className="menu-title">Dear Santa</h1>
        <IoMdArrowDropleft
          title="Close Greetings"
          className="arrow-close"
          onClick={() => setIsActive((current) => !current)}
        ></IoMdArrowDropleft>
      </div>
      <List></List>
    </aside>
  ) : (
    <IoMdArrowDropright
      title="Show Greetings"
      className="arrow-open"
      onClick={() => setIsActive((current) => !current)}
    ></IoMdArrowDropright>
  );
}
export default SideMenu;
