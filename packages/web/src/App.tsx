import { useReducer, useMemo } from "react";
import { reducer, initialState } from "./reducers/index";
import ReducerContext from "./utils/context";
import styled from "styled-components";
import Header from "./components/header/Header";
import Board from "./components/board/Board";

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #282c34;
  color: #fff;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(
    () => ({
      state,
      dispatch,
    }),
    [state, dispatch]
  );

  return (
    <ReducerContext.Provider value={contextValue}>
      <StyledApp>
        <Header />
        <Board />
      </StyledApp>
    </ReducerContext.Provider>
  );
};

export default App;
