import { useEffect } from "react";
import styled from "styled-components";
import ListItem from "../list-item/ListItem";
import useStore from "../../hooks/useStore";
import useKeymap from "../../hooks/useKeymap";
import {
  handlePageChange,
  handleCheckToggle,
  handleItemDetailOpen,
  handleItemDetailCancel,
  handleItemDetailSave,
} from "../../utils/handlers";
import { Pagination, Modal, Form, Input, Button } from "antd";

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

  const formatTime = (timestamp: number) => {
    const d = new Date(timestamp);
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const date = d.getDate();
    const hour = d.getHours();
    const min = d.getMinutes();
    const sec = d.getSeconds();
    return `${year}-${month}-${date} ${hour}:${min}:${sec}`;
  };

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
        simple
        total={total}
        pageSize={pageSize}
        current={curPage}
        onChange={(page) => handlePageChange(store, page)}
        style={{ marginTop: "30px" }}
      ></Pagination>
      <Modal
        title="详情"
        open={isItemDetailVisible}
        onOk={() => handleItemDetailSave(store)}
        onCancel={() => handleItemDetailCancel(store)}
        footer={[
          <Button key="cancel" onClick={() => handleItemDetailCancel(store)}>
            取消
          </Button>,
          <Button
            key="save"
            type="primary"
            ghost
            onClick={() => handleItemDetailSave(store)}
          >
            保存
          </Button>,
        ]}
      >
        <Form>
          <Form.Item label="标题" labelCol={{ span: 4 }}>
            <Input value={itemDetail.title} />
          </Form.Item>
          <Form.Item label="描述" labelCol={{ span: 4 }}>
            <Input.TextArea value={itemDetail.description} />
          </Form.Item>
          <Form.Item label="创建时间" labelCol={{ span: 4 }}>
            {formatTime(itemDetail.createTime)}
          </Form.Item>
        </Form>
      </Modal>
    </StyledBoard>
  );
};

export default Board;
