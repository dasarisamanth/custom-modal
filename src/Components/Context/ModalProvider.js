import React from "react";
import ReactDOM from "react-dom";
import styled, { keyframes } from "styled-components";
import ModalContext from "./ModalContext";

const getAnimationType = ({ animationType }) => {
  if (animationType === "fade") {
    return keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 0.5;
    }`;
  }
  if (animationType === "slide-left") {
    return keyframes`
    from {
      transform: translateX(-100vw);
    }
    to {
      transform: translateX(0vw);
    }`;
  }
  if (animationType === "slide-right") {
    return keyframes`
    from {
      transform: translateX(100vw);
    }
    to {
      transform: translateX(0vw);
    }`;
  }
  return keyframes``;
};

const ModalWrap = styled("div")`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  opacity: 0.5;
  animation: 0.3s ${getAnimationType};
  animation-fill-mode: forwards;
  background-color: ${(props) => props.theme.colors.white};
`;

const modalAnimationType = ["fade", "slide-left", "slide-right"];

const ModalProvider = ({ children }) => {
  const modalElementRef = React.useRef(document.createElement("div"));
  modalElementRef.current.id = "modal";
  const modalIdRef = React.useRef(0); // this will hold the current modal id
  const [modals, setModals] = React.useState([]);

  React.useEffect(() => {
    document.body.appendChild(modalElementRef.current);

    const modalElement = modalElementRef.current;

    return () => {
      document.body.removeChild(modalElement);
    };
  }, []);

  const openModal = React.useCallback(function openModal({
    variant,
    animationType,
    component,
  }) {
    if (!modalAnimationType.includes(animationType)) {
      throw new Error(
        `Variant must be one of these ${modalAnimationType.toString()}`
      );
    }
    modalIdRef.current += 1;
    setModals((modalsState) => [
      ...modalsState,
      { modalId: modalIdRef.current, variant, animationType, component },
    ]);
  },
  []);

  const closeModal = React.useCallback(function closeModal({
    modalId = undefined,
  } = {}) {
    const closeModalId = modalId || modalIdRef.current;
    modalIdRef.current -= 1;
    setModals((modalsState) =>
      modalsState.filter((modal) => modal.modalId !== closeModalId)
    );
  },
  []);

  const renderModals = () => (
    <React.Fragment>
      {modals.map(({ modalId, animationType, component: Component }) => (
        <React.Fragment key={modalId}>
          <ModalWrap animationType={animationType} />
          <Component />
        </React.Fragment>
      ))}
    </React.Fragment>
  );

  const modalContextValue = {
    openModal,
    closeModal,
    currentModalId: modalIdRef.current,
  };

  return (
    <React.Fragment>
      <ModalContext.Provider value={modalContextValue}>
        {children}
        {ReactDOM.createPortal(renderModals(), modalElementRef.current)}
      </ModalContext.Provider>
    </React.Fragment>
  );
};

export default ModalProvider;
