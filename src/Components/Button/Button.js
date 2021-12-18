import React from "react";
import styled from "styled-components";

export default function Button({ buttonText, onClickHandler }) {
  const Button = styled.button`
    padding: 15px 15px;
    background: ${({ theme }) => theme.colors.blueLight};
    border-radius: 6px;
    border: none;
    cursor: pointer;
  `;
  return (
    <div>
      <Button onClick={onClickHandler}>{buttonText}</Button>
    </div>
  );
}
