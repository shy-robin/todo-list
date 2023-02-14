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
  return (
    <StyledApp>
      <Header />
      <Board />
    </StyledApp>
  );
};

export default App;
