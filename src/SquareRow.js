import Square from "./Square";

export default function SquareRow({ rowValue, values, onClick }) {
  return (
    <div className="squareRow">
      <Square
        value={values[rowValue][0]}
        onClick={() => onClick(rowValue, 0)}
      />
      <Square
        value={values[rowValue][1]}
        onClick={() => onClick(rowValue, 1)}
      />
      <Square
        value={values[rowValue][2]}
        onClick={() => onClick(rowValue, 2)}
      />
    </div>
  );
}
