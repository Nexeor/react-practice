import { useState } from "react";
// import "./ListGroup.css";
import styled from "styled-components";

interface ListGroupProps {
  colors: string[];
  onSelectItem: (item: string) => void;
}

const List = styled.ul`
  list-style: decimnal;
  padding: 10;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

function ListGroup({ colors, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <List>
      {colors.map((color, index) => (
        <ListItem
          active={index === selectedIndex}
          key={index}
          onClick={() => {
            setSelectedIndex(index);
            onSelectItem(color);
          }}
        >
          {color}
        </ListItem>
      ))}
    </List>
  );
}

export default ListGroup;
