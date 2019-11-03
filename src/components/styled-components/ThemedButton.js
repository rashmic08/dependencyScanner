import styled from 'vue-styled-components';

const themeProps = { color: String };

const ThemedButton = styled('button', themeProps)`
  background-color: ${props => props.color};
  color: white;  
  border: 1px solid transparent;
  border-radius: 4px;
  justify-content: center;
  padding-bottom: calc(0.5em - 1px);
  padding-left: 1em;
  padding-right: 1em;
  padding-top: calc(0.5em - 1px);
  text-align: center;
  white-space: nowrap;
`;

export default ThemedButton;