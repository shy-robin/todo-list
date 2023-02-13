import styled from "styled-components";

const StyledHeader = styled.div`
  font-size: 22px;
  width: 100%;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
`;

const Header = () => {
  return <StyledHeader>Todo List</StyledHeader>;
};

export default Header;
