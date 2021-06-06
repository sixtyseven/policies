import styled from "styled-components";

const Container = styled.div`
  ${(props) => {
    const { theme } = props;
    return `
      display: flex;
      flex-direction: column;
      > .dates {
        display: flex;
      }
    `;
  }}
`;

export { Container };
