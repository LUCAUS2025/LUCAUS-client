import React from 'react';
import styled from 'styled-components';
import { Box } from './Watching';
import { BlackButton } from '../common/BaseButton';

export const Description = styled.div`
  margin-top: 16px;
  line-height: 1.5;
`;

const Ticketing: React.FC = () => {
  return (
    <>
      <Box>
        <div>
          본무대 입장 QR
          <br />
          여기서 바로 확인하세요!
        </div>
        <BlackButton onClick={() => window.open('https://festival.cau.ac.kr/index.html', '_blank')}>
          바로가기
        </BlackButton>
      </Box>
      <Description>
        <h3>[2025 LUCAUS 본무대 입장 안내]</h3>
        <strong>🌊입장 시간 안내</strong>
        <br />
        ❗티켓별 대기 및 입장 시간
        <br />
        ✔A티켓 : 12:25 - 12:55 / 13:00 - 13:30
        <br />
        ✔B티켓 : 13:00 - 13:30 / 13:35 - 14:05
        <br />
        ✔C티켓 : 13:35 - 14:05 / 14:10 - 14:40
        <br />
        ✔D티켓 : 14:10 - 14:40 / 14:45 - 15:15
        <br />
        ✔E티켓 : 14:45 - 15:15 / 15:20 - 15:50
        <br />
        ✔F티켓 : 15:20 - 15:50 / 15:55 - 16:25
        <br />
        ✔G티켓 : 15:55 - 16:25 / 16:30 - 입장 마감까지
        <br />
        *좌측 대기 시간에 대기 후, 우측 입장 시간에 입장 시작할 예정입니다.
        <br />
        *대기 시간에 오셔서, 바닥에 붙여진 본인 번호에 맞게 대기 부탁드립니다.
        <br />
        <br />
        <strong>🌊입장 안내</strong>
        <br />
        ❗입장 시 안내사항
        <br />
        ※본인 티켓의 타임이 입장 중인 경우, 현재 입장 중인 줄의 맨 뒤에서 입장이 가능합니다.
        <br />
        ※본인의 입장 시간을 놓쳐 다른 티켓의 입장 시간에 온 경우, 현재 입장 중인 줄의 맨 뒤에서 입장이 가능합니다.
        <br />
        ※대기구역 바닥에 붙여진 번호와 본인의 입장 번호가 맞게 서주시길 바랍니다.
        <br />
        ※안전 확보를 위하여, 스탠딩 전환 후 입장 및 재입장은 불가합니다.
        <br />
        ※일차별로 스탠딩 전환 시간은 상이합니다.
        <br />
        -1일차 : 18시 / 2일차 : 19시 / 3일차 : 19시 30분
        <br />
        <br />
        ❗입장 시 준비물
        <br />
        ✔e-ID (캡쳐본 불가능)
        <br />
        ✔신분증
        <br />
        *주민등록증, 운전면허증, 여권, 외국인 등록증, 모바일 신분증
        <br />
        *정부24/PASS 가능
        <br />
        ✔온라인 티켓팅 QR코드(캡쳐본 불가능)
        <br />
        *위 3가지 항목 모두 확인이 되어야 입장이 가능합니다.
        <br />
        *본인 확인이 어려울 시, 입장 제한될 수 있습니다. 따라서, 본인 식별이 가능한 신분증 지참해주시길 바랍니다.
        <br />
        <br />
        ❗주의사항
        <br />
        ✔본무대 반입금지 물품은 입장시 수거하여 보관 후 본무대 종료 이후 돌려드립니다.
        <br />
        ✔도장 훼손 시 재입장이 어려울 수 있습니다.
        <br />
        ✔잔디광장 내부 및 통행로가 협소한 관계로 추가입장은 받지 않을 예정입니다.
        <br />
        <br />
        주최 : 중앙대학교 서울캠퍼스 67대 총학생회 울림
        <br />
        주관 : 중앙대학교 서울캠퍼스 2025 LUCAUS 축제기획단
        <br />
        <br />
        *본 게시물은 대체 텍스트를 포함하고 있습니다.
      </Description>
    </>
  );
};

export default Ticketing;
