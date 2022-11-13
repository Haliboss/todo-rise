// import { Modal } from "react-bootstrap";
// import { useContext, useState } from "react";
// import { Context } from "../context";
// import { DeleteIcon } from "../images/delete_icon.png";

// const DeleteModal = () => {
//   const [deleteModalVisible, setDeleteModalVisible] = useState(false);

//   const { deleteJob } = useContext(Context);


//   return (
//     <Modal
//       centered
//       show={deleteModalVisible}
//       onHide={() => handleDeleteModal()}
//     >
//       <Modal.Body className="p-5 text-center">
//         <WarnIcon width={45} src={WarnSVG} />

//         <ModalTitle>Are you sure you want to delete it?</ModalTitle>

//         <ButtonWrapper>
//           <Button
//             src={DeleteIcon}
//             buttonType={0}
//             marginRight
//             onClick={() => handleDeleteModal()}
//           />
//           <Button buttonType={2} onClick={() => deleteJob()} />
//         </ButtonWrapper>
//       </Modal.Body>
//     </Modal>
//   );
// };

// export default DeleteModal;
