import { useState } from "react";
import styled from "styled-components";
import ListItem, { ListItemProps } from "../list-item/ListItem";

const StyledBoard = styled.div`
  margin-top: 20px;
  width: 50%;
  height: 80%;
`;

const Board = () => {
  const [currentItemId, setCurrentItemId] = useState(0);
  const [checkedItems, setCheckedItems] = useState([1, 3]);
  const list: ListItemProps[] = [
    {
      id: 0,
      index: 1,
      title: "demo1",
      total: 342,
      status: 0,
    },
    {
      id: 1,
      index: 2,
      title: "demo1fds",
      total: 342,
      status: 0,
    },
    {
      id: 2,
      index: 3,
      title: "demo1fds",
      total: 342,
      status: 0,
    },
    {
      id: 3,
      index: 4,
      title: "demo13",
      total: 342,
      status: 1,
    },
  ];

  const handleListItemClick = (id: number) => {
    if (checkedItems.some((item) => item === id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
    setCurrentItemId(id);
  };

  return (
    <StyledBoard>
      {list.map((item) => {
        return (
          <ListItem
            {...item}
            isActive={currentItemId === item.id}
            isChecked={checkedItems.some((i) => i === item.id)}
            onListItemClick={handleListItemClick}
          />
        );
      })}
    </StyledBoard>
  );
};

export default Board;
