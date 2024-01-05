import { useCursorPosition } from "../hooks/useCursorPosition";


const CursorPosition: React.FC = () => {
  const { x, y } = useCursorPosition();

  return (
    <div>
      <p>X축: {x}</p>
      <p>Y축: {y}</p>
    </div>
  );
};

export default CursorPosition;