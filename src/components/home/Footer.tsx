import styled from 'styled-components';

export const Footer = () => {
  return (
    <Bottom style={{ fontSize: '10px' }}>
      <div style={{ fontSize: '14px' }}>축제기획단 X 멋쟁이사자처럼 중앙대학교</div>
      <br />© 2025 CAU LIKELION All rights reserved.
    </Bottom>
  );
};
export default Footer;

const Bottom = styled.div`
  background-color: #e0efff;
  color: #364153;
  text-align: center;
  padding: 20px;
`;
