import ThemeSwitcher from "./ThemeSwitcher.js";
import SquareRow from "./SquareRow.js";
import { useState } from "react";

export default function Board() {
  const [winner, setWinner] = useState(null);
  const [nextSelector, setSelector] = useState(0);
  const [values, setValue] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [dont, setDont] = useState(false);

  function checkState() {
    const a = [
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]]
    ];

    for (let i = 0; i < 8; ++i) {
      if (values[a[i][0][0]][a[i][0][1]]
        && values[a[i][0][0]][a[i][0][1]] === values[a[i][1][0]][a[i][1][1]]
        && values[a[i][0][0]][a[i][0][1]] === values[a[i][2][0]][a[i][2][1]]) {
        setWinner(values[a[i][0][0]][a[i][0][1]]);
      }
    }
  }

  function onClickForReset() {
    if (nextSelector < 9 && !winner) {
      setDont(true);
      return;
    }
    setSelector(0);
    setDont(false);
    setWinner(null);
    setValue([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);
  }

  function handleClick(i, j) {
    if (winner || values[i][j] !== null) {
      return;
    }
    setDont(false);
    const nextValues = values.slice();
    if (nextSelector % 2 === 0) {
      nextValues[i][j] = "o";
    } else {
      nextValues[i][j] = "x";
    }
    setSelector(nextSelector + 1);
    setValue(nextValues);
    checkState();
  }

  return (
    <div className="board">
      <ThemeSwitcher />
      {nextSelector === 9 && !winner ? <div>It's a Draw</div> : null}
      {dont ? <div>Don't do that!!</div> : null}
      {winner ? <div>Winner is {winner}</div> : null}
      <div className="reset">
        <button type="reset" onClick={onClickForReset}>Reset Table</button>
      </div>
      <div>
        <SquareRow rowValue={0} values={values} onClick={handleClick} />
        <SquareRow rowValue={1} values={values} onClick={handleClick} />
        <SquareRow rowValue={2} values={values} onClick={handleClick} />
      </div>
    </div>
  );
}
