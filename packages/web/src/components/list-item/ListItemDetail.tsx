import { useState } from "react";
import styled from "styled-components";

const StyledListItemDetail = styled.div`
  padding: 30px;
`;

const StyledItem = styled.div`
  margin-bottom: 10px;
`;

const ItemTitle = styled.div`
  font-size: 20px;
  margin-bottom: 10px;
`;

const ItemInput = styled.input.attrs({
  placeholder: "Please input description",
})`
  width: 100%;
  font-size: 18px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  border-radius: 5px;
  padding: 5px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  border-style: none;
  &:focus {
    outline: none;
  }
`;

const ItemTextarea = styled.textarea.attrs({
  placeholder: "Please input description",
  rows: 10,
})`
  width: 100%;
  font-size: 18px;
  background-color: rgba(255, 255, 255, 0.1);
  color: #fff;
  border-radius: 5px;
  padding: 5px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  border-style: none;
  resize: none;
  &:focus {
    outline: none;
  }
`;

interface ItemProps {
  title: string;
  content: string;
  type: "title" | "description";
  onChange: (newVal: string) => void;
}

const Item = (props: ItemProps) => {
  const { title, content, type, onChange } = props;
  return (
    <StyledItem>
      <ItemTitle>{title}</ItemTitle>
      {type === "title" ? (
        <ItemInput value={content} onChange={(e) => onChange(e.target.value)} />
      ) : (
        <ItemTextarea
          value={content}
          onChange={(e) => onChange(e.target.value)}
        />
      )}
    </StyledItem>
  );
};

const StyledBottom = styled.div`
  left: 30px;
  right: 30px;
  position: absolute;
  bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BottomTime = styled.span`
  font-size: 12px;
`;

const BottomButtons = styled.div``;

const buttonStyle = {
  color: {
    primary: "#fff",
    normal: "#fff",
  },
  backgroundColor: {
    primary: "rgba(255,255,255,0.4)",
    normal: "rgba(255,255,255,0.1)",
  },
};

const BottomButton = styled.button<{ t: "primary" | "normal" }>`
  font-size: 20px;
  margin-left: 10px;
  padding: 4px 6px;
  background-color: red;
  border-radius: 5px;
  cursor: pointer;
  color: ${(props) => buttonStyle.color[props.t]};
  background-color: ${(props) => buttonStyle.backgroundColor[props.t]};
`;

interface BottomProps {
  time: number;
  onCancel: () => void;
  onSave: () => void;
}

const Bottom = (props: BottomProps) => {
  const { time, onCancel, onSave } = props;

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

  return (
    <StyledBottom>
      <BottomTime>created at: {formatTime(time)}</BottomTime>
      <BottomButtons>
        <BottomButton t="normal" onClick={onCancel}>
          cancel
        </BottomButton>
        <BottomButton t="primary" onClick={onSave}>
          save
        </BottomButton>
      </BottomButtons>
    </StyledBottom>
  );
};

interface ListItemDetailProps {
  title: string;
  description: string;
  createTime: number;
  onCancel: () => void;
  onSave: () => void;
}
const ListItemDetail = (props: ListItemDetailProps) => {
  const { title: t, description: d, createTime, onCancel, onSave } = props;
  const [title, setTitle] = useState(t);
  const [description, setDescription] = useState(d);

  return (
    <StyledListItemDetail>
      <Item
        title="Title:"
        content={title}
        onChange={(newVal) => setTitle(newVal)}
        type="title"
      />
      <Item
        title="Description:"
        content={description}
        onChange={(newVal) => setDescription(newVal)}
        type="description"
      />
      <Bottom time={createTime} onCancel={onCancel} onSave={onSave} />
    </StyledListItemDetail>
  );
};

export default ListItemDetail;
