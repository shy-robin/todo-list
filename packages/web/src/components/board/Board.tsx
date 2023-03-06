import { useEffect } from "react";
import styled from "styled-components";
import ListItem from "../list-item/ListItem";
import ListItemDetail from "../list-item/ListItemDetail";
import Pagination from "../pagination/Pagination";
import Popup from "../popup/Popup";
import useStore from "../../hooks/useStore";
import useKeymap from "../../hooks/useKeymap";
import {
  handlePageNext,
  handlePagePrev,
  handleCheckToggle,
  handleItemDetailOpen,
  handleItemDetailCancel,
  handleItemDetailSave,
} from "../../utils/handlers";

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
    isItemDetailVisible,
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

  useKeymap(store);

  return (
    <StyledBoard>
      {list.map((item) => {
        return (
          <ListItem
            {...item}
            isActive={currentItemId === item.id}
            isChecked={checkedItems.some((i) => i === item.id)}
            onListItemClick={(id) => handleItemDetailOpen(store, id)}
            onListItemDotClick={(id) => handleCheckToggle(store, id)}
            key={item.id}
          />
        );
      })}
      <Pagination
        total={total}
        pageSize={pageSize}
        curPage={curPage}
        onPrev={() => handlePagePrev(store)}
        onNext={() => handlePageNext(store)}
        style={{ marginTop: "30px" }}
      ></Pagination>
      {isItemDetailVisible && (
        <Popup>
          <ListItemDetail
            {...itemDetail}
            onCancel={() => handleItemDetailCancel(store)}
            onSave={() => handleItemDetailSave(store)}
          />
        </Popup>
      )}
    </StyledBoard>
  );
};

export default Board;
