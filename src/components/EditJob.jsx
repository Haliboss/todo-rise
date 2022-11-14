import { useEffect, useState } from "react";
import { useJobContext } from "../context/JobProvider";


const EditJob = ({ editItem }) => {

  const { id, name, priority } = editItem; 

  const [modalPriority, setModalPriority] = useState(priority);

  const { jobs, setJobs } = useJobContext();

  useEffect(() => {
    setModalPriority(priority);
  }, [priority]);

  const editJob = (id) => {

    const newList = JSON.parse(localStorage.getItem("jobs"));

    const secondNewList = newList.map((job) => {
  
      if (job.id === id) {
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

  console.log(jobs);

  const handleSubmit = (e) => {
    e.preventDefault();
    editJob(id, name, priority);
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
                    disabled //!
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pri" className="form-label">
                    Priority
                  </label>
                  <select
                    id="priority"
                    value={modalPriority || ""}
                    onChange={(e) => setModalPriority(e.target.value)}
                    className="form-select"
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
