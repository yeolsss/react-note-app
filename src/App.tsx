import { Outlet } from "react-router-dom";
import Header from "./layout/Header";
import styled from "styled-components";
function App() {
  return (
    <StContainer>
      <Header />
      <Outlet />
    </StContainer>
  );
}

const StContainer = styled.section`
  min-width: 80rem;
  max-width: 90%;
  width: 100%;
  height: 80%;
  max-height: 80%;
  min-height: 70rem;
  box-shadow: var(--box-shadow);
  margin: auto;
  border-radius: var(--container-border-radius);
  overflow: hidden;
`;

export default App;
