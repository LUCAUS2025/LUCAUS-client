import styled from 'styled-components';
import { Icon } from '../common/GoBackButton';

const Toast = () => {
  return (
    <Container>
      <Icon src="/images/common/info.webp" alt="information" />
      <Notice>텍스트</Notice>
      <Icon src="/images/common/refresh.webp" alt="새로고침" />
    </Container>
  );
};
export default Toast;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #f3f4f6;
  padding: 12px;
  border-radius: 12px;
  width: 100%;
`;

const Notice = styled.div`
  width: 80%;
  font-size: 16px;
  color: #364153;
`;
