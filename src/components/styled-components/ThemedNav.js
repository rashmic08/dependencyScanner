import styled from 'vue-styled-components';

const themeProps = { color: String };

const ThemedNav = styled('ul', themeProps)`
  background: ${props => props.color};
  color: white;
  position: fixed;
  top: 0;
  width: 100%;
  line-height: 25px;
  text-align: center;
`;

export default ThemedNav;