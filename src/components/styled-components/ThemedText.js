import styled from 'vue-styled-components';

const themeProps = { color: String };

const ThemedText = styled('p', themeProps)`
  color: ${props => props.color};  
  font-size: 16px;
`;

export default ThemedText;