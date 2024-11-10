import Mercury from "./Mercury";
import Venus from "./Venus";
import Earth from "./Earth";
import Mars from "./Mars";
import "./App.css";

import { useState } from "react";

function App() {
  const [tab1, setTab1] = useState(true);
  const [tab2, setTab2] = useState(false);
  const [tab3, setTab3] = useState(false);
  const [tab4, setTab4] = useState(false);

  const tab1Handler = () => {
    setTab1(true);
    setTab2(false);
    setTab3(false);
    setTab4(false);
  };
  const tab2Handler = () => {
    setTab1(false);
    setTab2(true);
    setTab3(false);
    setTab4(false);
  };
  const tab3Handler = () => {
    setTab1(false);
    setTab2(false);
    setTab3(true);
    setTab4(false);
  };
  const tab4Handler = () => {
    setTab1(false);
    setTab2(false);
    setTab3(false);
    setTab4(true);
  };

  return (
    <div className="container">
      <div className="tabs">
        <button onClick={tab1Handler} className={tab1 ? "active" : ""}>
          Mercury
        </button>
        <button onClick={tab2Handler} className={tab2 ? "active" : ""}>
          Venus
        </button>
        <button onClick={tab3Handler} className={tab3 ? "active" : ""}>
          Earth
        </button>
        <button onClick={tab4Handler} className={tab4 ? "active" : ""}>
          Mars
        </button>
      </div>
      <div className="content">
        {tab1 && <Mercury />}
        {tab2 && <Venus />}
        {tab3 && <Earth />}
        {tab4 && <Mars />}
      </div>
    </div>
  );
}

export default App;
