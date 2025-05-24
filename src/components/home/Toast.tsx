import styled from 'styled-components';
import { Icon } from '../common/GoBackButton';
import { getshortNotice } from '../../services/apis/notice';
import { useEffect, useState } from 'react';
import { s } from 'framer-motion/dist/types.d-CtuPurYT';

const Toast = () => {
  const [shortNotice, setShortNotice] = useState<string | null>(null);

  const getToastMessage = () => {
    getshortNotice()
      .then((res) => {
        // console.log(res);
        if (res.result[0].info.length > 0) {
          setShortNotice(res.result[0].info);
        } else {
          setShortNotice('2025 루카우스 웹사이트가 종료되었습니다');
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getToastMessage();
  }, []);

  return (
    <Container>
      <Icon src="/images/common/Info.webp" alt="information" style={{ marginLeft: '4px' }} />
      {shortNotice && shortNotice.length > 0 ? (
        <Notice>{shortNotice}</Notice>
      ) : (
        <Notice>2025년 루카우스 웹사이트 운영 기간이 종료되었습니다.</Notice>
      )}
    </Container>
  );
};
export default Toast;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #f3f4f6;
  padding: 12px 0 12px 0;
  border-radius: 12px;
  width: 100%;
  margin-top: 1rem;
`;

const Notice = styled.div`
  width: 89%;
  font-size: 16px;
  color: #364153;
`;
