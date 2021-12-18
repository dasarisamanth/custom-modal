import React from "react";
import styled from "styled-components";

export default function Navbar(props) {
  const NavBar = styled.nav`
    background: ${(props) => props.theme.colors.gradient.nav};
    padding: 20px 20px;
    position: relative;
    display: flex;
    justify-content: space-between;
  `;
  const Home = styled.div`
    font-size: ${(props) => props.theme.fonts.sizes.xl};
    color: ${(props) => props.theme.colors.greyLight};
    font-weight: ${(props) => props.theme.fonts.weight.semibold};
    font-family: ${({ theme }) => theme.fonts.family["averta"]};
  `;
  return (
    <NavBar>
      <Home>Stacked Modal</Home>
    </NavBar>
  );
}
