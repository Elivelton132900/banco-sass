import Header from "../Header/Header";
import AccountScreen from "../AccountScreen/AccountScreen";
import { useState } from "react";

import style from './App.module.scss'

function App() {

  const [saldo, setSaldo] = useState<number>(100)

  return (
    <div className="App">
      <Header />
      <div className={style.containerScreens}>
        <AccountScreen saldo={saldo} setSaldo={setSaldo} />
      </div>
    </div>
  );
}

export default App;
