import styled from 'styled-components';
import { Icon } from '../common/GoBackButton';

const Toast = () => {
  return (
  <Container>
    <Icon src="/images/common/back.webp" alt="닫기" />
  </Container>
  );
};
export default Toast;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #f3f4f6;
  padding: 12px;
  border-radius: 12px;
  width: 100%;
`;
