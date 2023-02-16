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

export type DistributeAction<T> = T extends string
  ? `set${Capitalize<T>}`
  : never;

export type ActionType = DistributeAction<keyof State>;

export interface Action extends Partial<State> {
  type: ActionType;
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
    case "setCurrentItemId":
      return {
        ...state,
        currentItemId: action.currentItemId || initialState.currentItemId,
      };
    case "setCheckedItems":
      return {
        ...state,
        checkedItems: action.checkedItems || initialState.checkedItems,
      };
    case "setTotal":
      return {
        ...state,
        total: action.total || initialState.total,
      };
    case "setPageSize":
      return {
        ...state,
        pageSize: action.pageSize || initialState.pageSize,
      };
    case "setCurPage":
      return {
        ...state,
        curPage: action.curPage || initialState.curPage,
      };
    case "setList":
      return {
        ...state,
        list: action.list || initialState.list,
      };
    case "setItemDetail":
      return {
        ...state,
        itemDetail: action.itemDetail || initialState.itemDetail,
      };
    default:
      throw new Error(`No such action type: ${action.type}`);
  }
};
