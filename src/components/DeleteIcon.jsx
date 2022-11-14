import React from "react";

const DeleteJob = ({editItem, deleteJob}) => {

  const { id } = editItem;  

  const handleDelete = () => {
    deleteJob(id);
  };


  return (
    <div id="delete-modal" className="modal fade">
      <div className="modal-dialog modal-confirm">
        <div className="modal-content">
          <div className="modal-header flex-column"></div>
          <div className="modal-body">
            <p className="text-center">Are you sure you want to delete it?</p>
          </div>
          <div className="modal-footer justify-content-center">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteJob;
