import { useState } from "react";
import styled from "styled-components";
import ListItem, { ListItemProps } from "../list-item/ListItem";
import ListItemDetail from "../list-item/ListItemDetail";
import Popup from "../popup/Popup";

const StyledBoard = styled.div`
  margin-top: 20px;
  width: 50%;
  height: 100%;
`;

const Board = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
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
  const itemDetail = {
    title: "do homework",
    description: "xxxxx",
    createTime: 1676366892452,
  };

  const handleListItemClick = (id: number) => {
    if (checkedItems.some((item) => item === id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
    setCurrentItemId(id);
    setIsPopupVisible(true);
  };

  const handleCancel = () => {
    setIsPopupVisible(false);
  };

  const handleSave = () => {
    setIsPopupVisible(false);
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
            key={item.id}
          />
        );
      })}
      {isPopupVisible && (
        <Popup>
          <ListItemDetail
            {...itemDetail}
            onCancel={handleCancel}
            onSave={handleSave}
          />
        </Popup>
      )}
    </StyledBoard>
  );
};

export default Board;
