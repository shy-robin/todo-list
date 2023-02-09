import styled from "styled-components";

const Wrapper = styled.div`
  font-size: 22px;
  width: 100%;
  text-align: center;
  padding: 20px;
  box-sizing: border-box;
`;

const Header = () => {
  return (
    <>
      <Wrapper>Todo List</Wrapper>
    </>
  );
};

export default Header;
