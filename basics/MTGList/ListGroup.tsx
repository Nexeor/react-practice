import { useState } from "react";

interface ListGroupProps {
  colors: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ colors, onSelectItem }: ListGroupProps) {
  const [selectedItem, setSelectedItem] = useState(-1);

  return (
    <ul className="list-group">
      {colors.map((color, index) => (
        <li
          className={
            selectedItem === index
              ? "list-group-item active"
              : "list-group-item"
          }
          key={index}
          onClick={() => {
            setSelectedItem(index);
            onSelectItem(color);
          }}
        >
          {color}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
