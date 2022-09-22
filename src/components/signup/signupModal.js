import "./SignupModal.scss";

function SignupModal() {
  // 모달 끄기
  const closeModal = () => {
    // setModalOpen(false);
  };

  return (
    <div className="modal-container">
      <button className="close" onClick={closeModal}>
        X
      </button>
      <p>모달창입니다.</p>
    </div>
  );
}
export default SignupModal;
