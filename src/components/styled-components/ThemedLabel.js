import styled from 'vue-styled-components';

const themeProps = { color: String };

const ThemedLabel = styled('p', themeProps)`
  color: ${props => props.color};   
  padding-bottom: 5px;
  padding-top: 5px;
  font-size: 16px;
  font-weight: bold;
`;

export default ThemedLabel;