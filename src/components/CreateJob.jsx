import React from "react";
import CreateJobStyle from "../scss/createjob.module.scss";

const CreateJob = () => {



  return (
    <div className={CreateJobStyle.container}>
      <div className={CreateJobStyle.head}>
        <h1>Create New Job</h1>
      </div>

      <div class={CreateJobStyle.containerForm}>
        <form class={CreateJobStyle.form}>
          <div className={CreateJobStyle.jobInput}>
            <label for="inlineFormInputName">Job Name</label>
            <input
              type="text"
              class="form-control mr-sm-2"
              id="inlineFormInputName"
              required
            />
          </div>

          <div className={CreateJobStyle.selectPriority}>
            <label class="sr" for="inlineFormInputGroupUsername">
              Job Priority
            </label>
            <select
              type="selected"
              class="form-control mr-sm-2"
              id="inlineFormInputName"
              placeholder="Choose Priority"
              required
            />
          </div>

          <div className={CreateJobStyle.createBtn}>
            <button type="submit" class="btn btn-primary">
              + Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateJob;
