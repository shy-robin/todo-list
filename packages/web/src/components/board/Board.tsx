import { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import ListItem from "../list-item/ListItem";
import ListItemDetail from "../list-item/ListItemDetail";
import Pagination from "../pagination/Pagination";
import Popup from "../popup/Popup";
import ReducerContext from "../../utils/context";

const StyledBoard = styled.div`
  margin-top: 20px;
  width: 50%;
`;

const Board = () => {
  const {
    checkedItems,
    curPage,
    currentItemId,
    itemDetail,
    list,
    pageSize,
    total,
  } = useContext(ReducerContext)!.state;
  const dispatch = useContext(ReducerContext)!.dispatch;

  const init = () => {
    dispatch({
      type: "updateCurrentItemId",
      currentItemId: 0,
    });
    dispatch({
      type: "updateCheckedItems",
      checkedItems: [1, 3],
    });
    dispatch({
      type: "updateTotal",
      total: 999,
    });
    dispatch({
      type: "updatePageSize",
      pageSize: 10,
    });
    dispatch({
      type: "updateCurPage",
      curPage: 2,
    });
    dispatch({
      type: "updateList",
      list: [
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
      ],
    });
    dispatch({
      type: "updateItemDetail",
      itemDetail: {
        title: "do homework",
        description: "xxxxx",
        createTime: 1676366892452,
      },
    });
  };

  useEffect(() => {
    init();
  }, []);

  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const handleListItemClick = (id: number) => {
    dispatch({
      type: "updateCurrentItemId",
      currentItemId: id,
    });
    setIsPopupVisible(true);
  };

  const handleListItemDotClick = (id: number) => {
    if (checkedItems.some((item) => item === id)) {
      dispatch({
        type: "updateCheckedItems",
        checkedItems: checkedItems.filter((item) => item !== id),
      });
    } else {
      dispatch({
        type: "updateCheckedItems",
        checkedItems: [...checkedItems, id],
      });
    }
  };

  const handleCancel = () => {
    setIsPopupVisible(false);
  };

  const handleSave = () => {
    setIsPopupVisible(false);
  };

  const handlePagePrev = (curPage: number, pageSize: number) => {
    dispatch({
      type: "updateCurPage",
      curPage,
    });
    dispatch({
      type: "updatePageSize",
      pageSize,
    });
  };

  const handlePageNext = (curPage: number, pageSize: number) => {
    dispatch({
      type: "updateCurPage",
      curPage,
    });
    dispatch({
      type: "updatePageSize",
      pageSize,
    });
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
