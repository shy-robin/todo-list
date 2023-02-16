import { useState, useEffect } from "react";
import styled from "styled-components";
import ListItem from "../list-item/ListItem";
import ListItemDetail from "../list-item/ListItemDetail";
import Pagination from "../pagination/Pagination";
import Popup from "../popup/Popup";
import useStore from "../../hooks/useStore";

const StyledBoard = styled.div`
  margin-top: 20px;
  width: 50%;
`;

const Board = () => {
  const store = useStore();
  const {
    checkedItems,
    curPage,
    currentItemId,
    itemDetail,
    list,
    pageSize,
    total,
  } = store.state;
  const {
    setTotal,
    setCurPage,
    setCurrentItemId,
    setList,
    setPageSize,
    setItemDetail,
    setCheckedItems,
  } = store;

  const init = () => {
    setTotal(999);
    setCurPage(2);
    setCurrentItemId(0);
    setCheckedItems([1, 3]);
    setPageSize(10);
    setList([
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
    ]);
    setItemDetail({
      title: "do homework",
      description: "xxxxx",
      createTime: 1676366892452,
    });
  };

  useEffect(() => {
    init();
  }, []);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleListItemClick = (id: number) => {
    setCurrentItemId(id);
    setIsPopupVisible(true);
  };

  const handleListItemDotClick = (id: number) => {
    if (checkedItems.some((item) => item === id)) {
      setCheckedItems(checkedItems.filter((item) => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  const handleCancel = () => {
    setIsPopupVisible(false);
  };

  const handleSave = () => {
    setIsPopupVisible(false);
  };

  const handlePagePrev = (curPage: number, pageSize: number) => {
    setCurPage(curPage);
    setPageSize(pageSize);
  };

  const handlePageNext = (curPage: number, pageSize: number) => {
    setCurPage(curPage);
    setPageSize(pageSize);
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
            onListItemDotClick={handleListItemDotClick}
            key={item.id}
          />
        );
      })}
      <Pagination
        total={total}
        pageSize={pageSize}
        curPage={curPage}
        onPrev={handlePagePrev}
        onNext={handlePageNext}
        style={{ marginTop: "30px" }}
      ></Pagination>
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
