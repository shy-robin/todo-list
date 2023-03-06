import { useContext } from "react";
import ReducerContext from "../utils/context";
import { State, Action, ActionType, DistributeAction } from "../reducers/index";

export type SetState = {
  [key in keyof State as DistributeAction<key>]: (newVal: State[key]) => void;
};

export type Store = SetState & {
  state: State;
  dispatch: React.Dispatch<Action>;
};

const useStore = () => {
  const state = useContext(ReducerContext)!.state;
  const dispatch = useContext(ReducerContext)!.dispatch;
  const rst: any = {
    state,
    dispatch,
  };

  const genActionType = (str: string) => {
    return `set${str[0].toUpperCase()}${str.slice(1)}` as ActionType;
  };

  Object.keys(state).forEach((item) => {
    rst[genActionType(item)] = (newVal: any) => {
      dispatch({
        type: genActionType(item),
        [item]: newVal,
      });
    };
  });

  return rst as Store;
};

export default useStore;
