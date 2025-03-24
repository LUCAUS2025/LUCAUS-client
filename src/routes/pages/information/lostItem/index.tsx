import styled from 'styled-components';

const LostItem = () => {
  return (
    <>
      <Container>
        분실물을 발견했어요. <br />
        어떻게 해야하나요? 🤔
      </Container>
    </>
  );
};
export default LostItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  // height: 30vh;
  padding: 16px;
  background-color: #f9fafb;
  border-radius: 8px;
`;
