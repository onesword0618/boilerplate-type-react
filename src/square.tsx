import React from 'react';

type ISquare = 'X' | 'O' | null;
interface SquareProps {
  value: ISquare;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({value, onClick}) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};

export default Square;
