import styled from "styled-components";

const Container = styled.div`
  ${(props) => {
    const { theme } = props;
    return `
      background-color: ${theme.backgroundColor.secondary};
    `;
  }}
`;

export { Container };
