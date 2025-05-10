import React, { SetStateAction, useState } from 'react';
import { rewardStamp } from '../../../../../services/apis/stamp/rewardStamp';
import { AxiosError } from 'axios';
import { stampBoardInfo } from '../../../../../services/apis/stamp/stampBoardInfo';
import { styled } from 'styled-components';

interface BoothClear {
  boothId: number;
  isClear: boolean;
}
interface StampBoardDayData {
  id: number;
  type: number;
  firstReward: boolean;
  secondReward: boolean;
  thirdReward: boolean;
  isBoothClear: BoothClear[];
}

interface Props {
  setOpenRewardPwModal: React.Dispatch<SetStateAction<boolean>>;
  selectedDate: { label: string; value: number | string };
  isRewarded: Record<number, boolean>;
  setStampData: React.Dispatch<SetStateAction<StampBoardDayData[]>>;
}

const PwPushModal = ({ setOpenRewardPwModal, selectedDate, isRewarded, setStampData }: Props) => {
  // 로딩표현
  const [isLoading, setIsLoading] = useState(false);

  // 지금 입력받는 데이터
  const [pwData, setPwData] = useState<string>('');

  // 값 변경시 동작
  const handleInputChange = (value: string) => {
    setPwData(value);
  };

  // 에러문구 띄우기용
  const [isError, setIsError] = useState<{ error: boolean; message: string }>({ error: false, message: '' });

  const handleClickPwButton = async () => {
    setIsLoading(true);
    const pw = pwData;

    let degree = 0;
    if (isRewarded[1] == false) {
      degree = 1;
    } else if (isRewarded[2] == false) {
      degree = 2;
    } else if (isRewarded[3] == false) {
      degree = 3;
    }

    try {
      const response = await rewardStamp(selectedDate.value!, degree, pw);
      setIsLoading(false);
      setOpenRewardPwModal(false);

      // 갱신된 도장판 정보 받아오고 정보 업데이트
      try {
        // 스탬프 정보 받아오기
        const responseStampInfo = await stampBoardInfo();
        setStampData(responseStampInfo.result);
      } catch (error) {
        localStorage.removeItem('accessToken');
        alert('로그아웃되었습니다. 다시 로그인해주세요.');
        // 데이터 가져오기 실패시 다시 로그인 화면으로
        window.location.href = '/stamp/auth';
      }
    } catch (e) {
      setIsLoading(false);
      // 에러 구현
      const error = e as AxiosError<{ code: string; message: string }>;
      if (error.response?.data) {
        const errorCode = error.response.data.code;
        if (errorCode == 'COMMON500') {
          alert('예기치 못한 오류 발생. 다시 시도해주세요');
        } else if (errorCode == 'REWARD4001') {
          setIsError({ error: true, message: '도장 개수가 불충분합니다.' });
        } else if (errorCode == 'PW400') {
          setIsError({ error: true, message: '비밀번호가 일치하지 않습니다.' });
        } else if (errorCode == 'REWARD4003') {
          setIsError({ error: true, message: '이미 상품을 수령하였습니다.' });
        } else if (errorCode == 'REWARD4002') {
          alert('이미 상품을 수령했거나 상품 수령 조건을 충족하지 못했습니다.');
        }
      }
    }
  };

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>축제기획단 부스</Title>
        <SubTitle>상품 응모를 위해 축기단에게 화면을 보여주세요.</SubTitle>
      </TitleWrapper>
      <StyledInput
        placeholder="비밀번호를 입력해주세요"
        type="password"
        value={pwData}
        onChange={(e) => handleInputChange(e.target.value)}
      ></StyledInput>
      {isError?.error ? <ErrorLine>비밀번호가 일치하지 않습니다</ErrorLine> : <EmptyBox />}
      <ButtonWrapper>
        <StyledButton
          onClick={() => {
            setOpenRewardPwModal(false);
          }}
          type={'cancle'}
        >
          취소
        </StyledButton>
        <StyledButton onClick={handleClickPwButton} type={'confirm'}>
          확인
        </StyledButton>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default PwPushModal;

const Wrapper = styled.div`
  width: 93%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Title = styled.div`
  color: #030712;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`;

const SubTitle = styled.div`
  color: #6a7282;
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const StyledInput = styled.input`
  display: flex;
  height: 48px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid #d1d5dc;
  background: #fff;
  padding-left: 12px;

  color: #6a7282;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`;

const StyledButton = styled.button<{ type: string }>`
  display: flex;
  height: 48px;
  width: 155px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  background-color: ${({ type }) => (type == 'confirm' ? '#1447e6' : '#D1D5DC')};
  color: ${({ type }) => (type == 'confirm' ? '#ffffff' : '#6A7282')};
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ErrorLine = styled.div`
  color: #fb2c36;
  font-size: 10px;
  height: 15px;
  padding-left: 10px;
  margin-top: -20px;
`;

const EmptyBox = styled.div`
  height: 15px;
  width: 90%;
`;
