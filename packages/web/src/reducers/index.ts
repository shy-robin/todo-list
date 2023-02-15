import { ListItemProps } from "../components/list-item/ListItem";

interface ItemDetail {
  title: string;
  description: string;
  createTime: number;
}

export interface State {
  currentItemId: number;
  checkedItems: number[];
  total: number;
  pageSize: number;
  curPage: number;
  list: ListItemProps[];
  itemDetail: ItemDetail;
}

export interface Action extends Partial<State> {
  type:
    | "updateCurrentItemId"
    | "updateCheckedItems"
    | "updateTotal"
    | "updatePageSize"
    | "updateCurPage"
    | "updateList"
    | "updateItemDetail";
}

export const initialState: State = {
  currentItemId: 0,
  checkedItems: [],
  total: 0,
  pageSize: 0,
  curPage: 0,
  list: [],
  itemDetail: {
    title: "",
    description: "",
    createTime: 0,
  },
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "updateCurrentItemId":
      return {
        ...state,
        currentItemId: action.currentItemId || initialState.currentItemId,
      };
    case "updateCheckedItems":
      return {
        ...state,
        checkedItems: action.checkedItems || initialState.checkedItems,
      };
    case "updateTotal":
      return {
        ...state,
        total: action.total || initialState.total,
      };
    case "updatePageSize":
      return {
        ...state,
        pageSize: action.pageSize || initialState.pageSize,
      };
    case "updateCurPage":
      return {
        ...state,
        curPage: action.curPage || initialState.curPage,
      };
    case "updateList":
      return {
        ...state,
        list: action.list || initialState.list,
      };
    case "updateItemDetail":
      return {
        ...state,
        itemDetail: action.itemDetail || initialState.itemDetail,
      };
    default:
      throw new Error(`No such action type: ${action.type}`);
  }
};
