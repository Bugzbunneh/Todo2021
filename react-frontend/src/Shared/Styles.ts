import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';

export const gray1 = '#383737';
export const gray2 = '#5c5a5a';
export const gray3 = '#857c81';
export const gray4 = '#b9b9b9';
export const gray5 = '#e3e2e2';
export const gray6 = '#f7f8fa';

export const black1 = '#333333';
export const black2 = '#444444';

export const lightBlue1 = '#87CEEB';
export const lightBlue2 = '#6495ED';

export const lilac1 = '#96A9EB';

export const green1 = '#00CE30';
export const green2 = '#00B92B';
export const green3 = '#00A626';

export const red1 = '#8B0000';
export const red2 = '#FF0000';
export const red3 = '#DC143C';

export const accent1 = '#dbb365';
export const accent2 = '#efd197';

export const fontFamily = "'Segoe UI', 'Helvetica Neue',sans-serif";
export const fontSize = '16px';

const baseFieldCSS = css`
  box-sizing: border-box;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  margin-bottom: 5px;
  padding: 8px 10px;
  border: 1px solid ${gray5};
  border-radius: 5px;
  color: ${gray2};
  background-color: white;
  width: 100%;
  :focus {
    box-shadow: 0 0 5pt 4pt ${lightBlue2};
    outline: 0;
  }
  :disabled {
    background-color: ${gray6};
  }
`;

const baseButtonCSS = css`
  background-color: ${gray1};
  border: 2px solid;
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: bold;
  line-height: 1;
  padding: 0.5em 1.25em;

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const redPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0px ${red2};
  }
  50% {
    box-shadow: 0 0 20px 2px ${red3};
  }
  100% {
    box-shadow: 0 0 20px 0px transparent;
  }
`;

const greenPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0px ${green2};
  }
  50% {
    box-shadow: 0 0 20px 2px ${green3};
  }
  100% {
    box-shadow: 0 0 20px 0px transparent;
  }
`;

export const PrimaryButton = styled.button`
  ${baseButtonCSS};
  color: ${green2};
  background-color: ${gray1};
  cursor: pointer;

  :hover {
    animation: ${greenPulse} 1s;
    border-color: ${green1};
    color: ${gray6};
    background-color: ${gray2};
  }

  :active {
    background-color: ${gray3};
  }
`;

export const SecondaryButton = styled.button`
  ${baseButtonCSS};
  color: ${red2};
  background-color: ${gray1};
  cursor: pointer;

  :hover {
    animation: ${redPulse} 1s;
    border-color: ${red3};
    color: ${gray6};
    background-color: ${gray2};
  }

  :active {
    background-color: ${gray3};
  }
`;

export const linkStyle = css`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  padding: 5px 10px;
  background-color: transparent;
  color: ${gray2};
  text-decoration: none;
  cursor: pointer;
  :focus {
    outline-color: ${gray5};
  }
  :hover {
    background-color: ${gray4};
  }
  :active {
    background-color: ${gray3};
  }
`;

export const Fieldset = styled.fieldset`
  width: inherit;
  background-color: ${black2};
  border-radius: 8px;
  border: 1px solid ${black2};
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
`;

export const FieldContainer = styled.div`
  margin-bottom: 10px;
`;

export const FieldLabel = styled.label`
  font-weight: bold;
`;

export const DarkScrollbar = css`
  scrollbar-width: thin;
  scrollbar-color: ${lightBlue2} ${black2};
`;

export const FieldInput = styled.input`
  ${baseFieldCSS}
`;

export const FieldTextArea = styled.textarea`
  ${baseFieldCSS}
`;

export const FieldError = styled.div`
  font-size: 12px;
  color: red;
`;

export const FormButtonContainer = styled.div`
  margin: 30px 0px 0px 0px;
  padding: 20px 0px 0px 0px;
  border-top: 1px solid ${gray5};
`;

export const SubmissionSuccess = styled.div`
  color: ${green1};
`;

export const SubmissionFailure = styled.div`
  margin-top: 10px;
  color: red;
`;
