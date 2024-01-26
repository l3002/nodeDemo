import ThemeSwitcher from "./ThemeSwitcher.js";
import SquareRow from "./SquareRow.js";
import { useState } from "react";

export default function Board() {
  const [nextSelector, setSelector] = useState(0);
  const [values, setValue] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  function checkState(symbol) { }

  function handleClick(i, j) {
    const nextValues = values.slice();
    if (nextSelector % 2 === 0) {
      nextValues[i][j] = "o";
    } else {
      nextValues[i][j] = "x";
    }
    setSelector(nextSelector + 1);
    setValue(nextValues);
  }

  return (
    <div className="App min-vh-100 d-flex justify-content-center align-items-center">
      <div>
        <ThemeSwitcher />
      </div>
    </div>
  );
}
