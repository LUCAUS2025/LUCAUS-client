import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const TheFooter = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Buttons>
        <Button onClick={() => navigate('/')}>
          <Logo src="/images/footer/home.webp" alt="home" />
          <div>홈</div>
        </Button>
        <Button onClick={() => navigate('/stage')}>
          <Logo src="/images/footer/stage.webp" alt="stage" />
          <div>공연</div>
        </Button>
        <Button onClick={() => navigate('/booth')}>
          <Logo src="/images/footer/booth.webp" alt="booth" />
          <div>거리문화제</div>
        </Button>
        <Button onClick={() => navigate('/foodTruck')}>
          <Logo src="/images/footer/foodTruck.webp" alt="foodTruck" />
          <div>푸드트럭</div>
        </Button>
        <Button onClick={() => navigate('/information')}>
          <Logo src="/images/footer/information.webp" alt="information" />
          <div>정보</div>
        </Button>
      </Buttons>
    </Wrapper>
  );
};

export const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  z-index: 3;
`;

const Buttons = styled.div`
  background-color: #fafafa;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 2%;
`;

const Button = styled.button`
  background-color: #fafafa;
  color: #6a7282;
  border: none;
  padding: 2%;
  cursor: pointer;
  gap: 5%;
`;

const Logo = styled.img`
  width: 30px;
  height: 30px;
`;
