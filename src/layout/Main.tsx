import styled from "styled-components";

function Main() {
  return (
    <StMain>
      <StAside></StAside>
      <StContent></StContent>
    </StMain>
  );
}

const StMain = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
  margin-top: 0.3rem;
  gap: 0.3rem;
`;

const StAside = styled.aside`
  min-width: var(--aside-width);
  height: 100%;
  background-color: #605e63;
`;

const StContent = styled.div`
  width: 100%;
  height: 100%;
  background-color: #605e63;
`;

export default Main;
