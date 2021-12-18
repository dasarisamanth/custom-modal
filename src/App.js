import styled, { ThemeProvider } from "styled-components";
import Navbar from "./Components/Navbar/Navbar";
import { theme } from "./tokens";
import ModalProvider from "./Components/Context/ModalProvider";
import ButtonContainer from "./Components/ButtonContainer/ButtonContainer";

function App() {
  const Container = styled.div`
    height: 90vh;
    background: ${({ theme }) => theme.colors.greyLight};
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  return (
    <ThemeProvider theme={theme}>
      <ModalProvider>
        <Navbar />
        <Container>
          <ButtonContainer />
        </Container>
      </ModalProvider>
    </ThemeProvider>
  );
}

export default App;
