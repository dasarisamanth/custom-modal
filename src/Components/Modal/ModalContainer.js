import React from "react";
import styled, { keyframes } from "styled-components";

const fade = keyframes`
from {
  opacity: 0;
}
to {
  opacity: 1;
}`;

const StyledModalContainer = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  animation: 1s ${fade};
  overflow: auto;
  background: ${(props) => props.bg};
  width: ${(props) => props.width};
  padding: 15px;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 5px;
  top: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 15px;
`;
const ModalContainer = ({
  width,
  onClose,
  children,
  className,
  bg,
  modalName,
}) => {
  console.log(width, "we");
  return (
    <StyledModalContainer width={width} bg={bg} className={className}>
      <Header>
        <div>{modalName}</div>
        <CloseButton onClick={onClose}>x</CloseButton>
      </Header>
      {children}
    </StyledModalContainer>
  );
};

export default ModalContainer;
