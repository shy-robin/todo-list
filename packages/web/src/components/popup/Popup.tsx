import { createPortal } from "react-dom";
import styled from "styled-components";

const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  color: #fff;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
`;

const StyledPopup = styled.div`
  width: 60%;
  height: 500px;
  margin-top: 200px;
  background-color: #505257;
  border-radius: 10px;
  position: relative;
`;

const CloseButton = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: #aaa;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

interface PopupProps {
  showCloseButton?: boolean;
  children?: JSX.Element;
}

const Popup = (props: PopupProps) => {
  const { showCloseButton = false, children } = props;
  return createPortal(
    <Modal>
      <StyledPopup>
        {showCloseButton && <CloseButton />}
        {children}
      </StyledPopup>
    </Modal>,
    document.body
  );
};

export default Popup;
