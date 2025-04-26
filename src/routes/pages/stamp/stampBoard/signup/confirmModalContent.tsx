interface ConfirmModalContentProps {
  studentId: string;
  name: string;
  onCancel: () => void;
  onConfirm: () => void;
}

const ConfirmModalContent = ({ studentId, name, onCancel, onConfirm }: ConfirmModalContentProps) => {
  return (
    <>
      <div>정보를 맞게 입력하셨나요?</div>
      <div>
        <div>학번</div>
        <div>{studentId}</div>
      </div>
      <div>
        <div>이름</div>
        <div>{name}</div>
      </div>
      <div>
        <div>입력하신 정보는 광장기획전 참여 상품 응모에 활용됩니다.</div>
        <div>학번과 이름을 정확히 입력해주세요.</div>
      </div>
      <div>
        <button onClick={onCancel}>취소</button>
        <button onClick={onConfirm}>맞게 입력했어요</button>
      </div>
    </>
  );
};

export default ConfirmModalContent;
