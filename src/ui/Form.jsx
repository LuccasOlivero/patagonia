import styled, { css } from "styled-components";

const Form = styled.form`
  overflow: hidden;
  font-size: 1.4rem;
  margin: 0 auto;
  width: 100%;
  max-width: 900px;

  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 3rem;

      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
    `}

    ${(props) =>
    props.type === "medium" &&
    css`
      width: 50%;
      padding: 2.4rem 3rem;
      background-color: var(--color-grey-0);
    `}
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
