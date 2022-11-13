//import { useEffect, useState } from "react";
//import { useJobContext } from "../context/JobProvider";

const EditJob = (e) => {
  //   e.preventDefault();

  //   const { jobs, setJobs } = useJobContext();

  //   console.log(e.target.value);

  //   // useEffect(() => {
  //   //   setTitle(newTitle);
  //   //   setDescription(newDescription);
  //   // }, [newTitle, newDescription]);

  //   // //! Update (PUT:Whole Update,PATCH :Partially Update)
  //   const editJob = (id) => {

  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     editJob(id, { title, description });
  //     setTitle("");
  //     setDescription("");
  //   };

  return (
    <div>
      <div className="modal fade" id="edit-modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Job Edit
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter your title"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">
                    Description
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="desc"
                    placeholder="Enter your Description"
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditJob;
