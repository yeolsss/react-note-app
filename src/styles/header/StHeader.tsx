import styled from "styled-components";

export const StHeader = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  gap: 0.3rem;
`;

export const StTitle = styled.div`
  display: flex;
  min-width: var(--aside-width);
  height: 100%;
  background-color: #817e7e;
  > div {
    display: flex;
    width: 50%;
    height: 50%;
    margin: auto 3.5rem;
    > h1 {
      margin-left: 1rem;
      font-size: 2.4rem;
      font-weight: bold;
    }
    > div {
    }
  }
`;

export const StSubTitle = styled.div`
  width: 100%;
  height: 100%;
  background-color: #817e7e;
  display: flex;
  position: relative;
  > div:first-child {
    display: flex;
    width: 100%;
    > div {
      margin: auto 2rem;
      > h1 {
        margin-left: 1rem;
        font-size: 2.4rem;
        font-weight: bold;
      }
    }
  }
`;

export const StPlusBtn = styled.div`
  width: 5rem;
  height: 5rem;
  position: absolute;
  top: 50%;
  right: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-50%);
  border-radius: 2.5rem;

  > svg {
    width: 100%;
    height: 100%;
  }
`;
