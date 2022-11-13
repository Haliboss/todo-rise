//import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { useJobContext } from "../context/JobProvider";
//import { useJobContext } from "../context/JobProvider";

const EditJob = ({ editItem }) => {
  console.log(editItem);

  const { id, name, priority } = editItem;

  //const { getLocalJobs } = useJobContext();

  const [modalPriority, setModalPriority] = useState(priority);

  console.log(priority)
  //   e.preventDefault();

  const { jobs, setJobs } = useJobContext();

  //   console.log(e.target.value);

  useEffect(() => {
    setModalPriority(priority);
  }, [priority]);

  //   // //! Update (PUT:Whole Update,PATCH :Partially Update)
  const editJob = (id) => {
    const newList = JSON.parse(localStorage.getItem("jobs"));
    console.log(newList);
    // for (let i = 0; i < newList.lenght; i++) {

    // }
    const secondNewList = newList.map((job) => {
      console.log(typeof id)
      console.log(typeof job.id);
      if (String(job.id) === String(id)) {
        return { ...job, priority: modalPriority };
      } else {
        return job
      }
      
    });
    console.log(secondNewList);
    localStorage.setItem("jobs", JSON.stringify
    (secondNewList));
    setJobs(secondNewList)
    setModalPriority('')    
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editJob(id, name, priority);
    //setTitle("");
    //setDescription("");
  };

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
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter your title"
                    required
                    value={name || ""}
                    disabled
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="desc" className="form-label">
                    Priority
                  </label>
                  <select
                    id="priority"
                    value={modalPriority || ""}
                    onChange={(e) => setModalPriority(e.target.value)}
                    placeholder="Select Priority"
                  >
                    <option value="">Priority (All)</option>
                    <option value="urgent">Urgent</option>
                    <option value="regular">Regular</option>
                    <option value="trivial">Trivial</option>
                  </select>
                  {/* <input
                    type="text"
                    className="form-control"
                    required
                    value={modalPriority || ""}
                    onChange={(e)=>setModalPriority(e.target.value)}
                  /> */}
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
                onClick={handleSubmit}
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
