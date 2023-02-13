import styled from "styled-components";

export const enum ItemStatus {
  TODO = 0,
  DONE = 1,
}

const StyledListItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const itemColor: { [ItemStatus.TODO]: string; [ItemStatus.DONE]: string } = {
  [ItemStatus.DONE]: "rgba(255, 255, 255, 0.25)",
  [ItemStatus.TODO]: "rgba(255, 255, 255, 1)",
};

const StyledListItemContent = styled.div<{
  isActive?: boolean;
  status: ItemStatus;
}>`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: ${(props) =>
    props.status === ItemStatus.DONE ? "line-through" : "unset"};
  color: ${(props) => itemColor[props.status]};
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  background-color: ${(props) =>
    props.isActive ? "rgba(255, 255, 255, 0.2)" : "none"};
`;

const CheckBox = styled.div<{ status: ItemStatus }>`
  border: 1px solid #ddd;
  border: ${(props) => `1px solid ${itemColor[props.status]}`};
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 10px;
  position: relative;
`;

const CheckBoxDot = styled.div<{ status: ItemStatus }>`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => itemColor[props.status]};
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Index = styled.div`
  width: 30px;
  color: #ddd;
  margin-left: 10px;
`;

export interface ListItemProps {
  id: number;
  title: string;
  index: number;
  total: number;
  status: ItemStatus;
  isActive?: boolean;
  isChecked?: boolean;
  onListItemClick?: (id: number) => void;
}
const ListItem = (props: ListItemProps) => {
  const {
    id,
    title,
    index,
    total,
    status,
    isActive = false,
    isChecked = false,
    onListItemClick = () => {},
  } = props;
  return (
    <StyledListItem>
      <StyledListItemContent
        isActive={isActive}
        status={status}
        onClick={() => onListItemClick(id)}
      >
        <CheckBox status={status}>
          {isChecked && <CheckBoxDot status={status} />}
        </CheckBox>
        <span>{title}</span>
      </StyledListItemContent>
      <Index>{isActive && `${index}/${total}`}</Index>
    </StyledListItem>
  );
};

export default ListItem;
