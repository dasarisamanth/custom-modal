import React from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { useModalContext } from "../Context/ModalContext";
import ModalContainer from "../Modal/ModalContainer";

export default function ButtonContainer() {
  const modalCxt = useModalContext();
  const closeModal = () => modalCxt.closeModal();
  const closeModalTwo = () => modalCxt.closeModal();

  const DisplayImage = styled.img`
    src: "${(props) => props.src}";
    width: 100%;
    padding: 10px 0px;
  `;
  const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  `;
  const Footer = styled.div`
    display: flex;
    justify-content: space-between;
  `;
  const ModalTwo = () => {
    return (
      <ModalContainer width="500px" bg="gainsboro" onClose={closeModalTwo}>
        <ModalContent>
          <DisplayImage src="https://images.unsplash.com/photo-1563089145-599997674d42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
          <Button buttonText="close" onClickHandler={closeModalTwo} />
        </ModalContent>
      </ModalContainer>
    );
  };
  const openTwo = () => {
    return modalCxt.openModal({
      animationType: "slide-right",
      component: ModalTwo,
    });
  };
  const ModalOne = () => {
    return (
      <ModalContainer width="500px" bg="white" onClose={closeModal}>
        <ModalContent>
          <DisplayImage src="https://images.unsplash.com/photo-1557264337-e8a93017fe92?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
          <Footer>
            <Button buttonText="close" onClickHandler={closeModal} />
            <Button buttonText="Open Other" onClickHandler={openTwo} />
          </Footer>
        </ModalContent>
      </ModalContainer>
    );
  };
  const handle = () => {
    return modalCxt.openModal({
      animationType: "slide-left",
      component: ModalOne,
    });
  };
  return (
    <div>
      <Button buttonText="Open Modal" onClickHandler={handle} />
    </div>
  );
}
