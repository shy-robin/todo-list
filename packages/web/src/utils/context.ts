import { createContext } from "react";
import { State, Action } from "../reducers/index";

export interface ContextValue {
  state: State;
  dispatch: React.Dispatch<Action>;
}

const ReducerContext = createContext<null | ContextValue>(null);

export default ReducerContext;
