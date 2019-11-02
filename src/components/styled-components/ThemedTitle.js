import styled from 'vue-styled-components';

const themeProps = { color: String };

const ThemedTitle = styled('div', themeProps)`
  color: ${props => props.color};   
  margin-bottom: 12px;
  font-size: 28px;
`;

export default ThemedTitle;