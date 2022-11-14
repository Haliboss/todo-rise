import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useJobContext } from "../context/JobProvider";
import EditJob from "./EditJob";
import DeleteJob from "./DeleteIcon";

const Container = styled.div`
  margin: 1rem;
`;
const Title = styled.h1`
  font-size: 1rem;
`;
const FilterContainer = styled.div`
  background-color: rgb(241,244,255);
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.2rem;
  border: 1px solid #e5e5e5;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const FormControl = styled.div`
  width: 100%;
`;
const FormInput = styled.input`
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 0.3rem;
  width: 70vw;
  margin: 0.5rem 1rem;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
const Select = styled.select`
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 0.4rem;
  width: 20vw;
  margin: 0.5rem 1rem;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Icons = styled.div`
  cursor: pointer;
  text-align: right;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Job = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #e5e5e5;
  border-radius: 3px;
  padding: 0.2rem;
  font-weight: 300;
  margin-bottom: 0.2rem;
`;
const JobName = styled.div`
  font-size: 1rem;
  width: 30%;
`;
const JobPriority = styled.div`
  font-size: 1rem;
  width: 30%;
`;
const ListHead = styled.div`
  background-color: rgb(228,234,253);
  border: 1px solid #e5e5e5;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 0.2rem;
`;
const ListLine = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;
const Th = styled.div`
  padding: 0.4rem;
`;

const JobList = () => {
  const { jobs, setJobs, setLocalStorage } = useJobContext();
  const [editItem, setEditItem] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterPriority, setFilterPriority] = useState("");

  const editName = (e) => {
    setFilterName(e.target.value);
  };

  const editPriority = (e) => {
    setFilterPriority(e.target.value);
  };

  //! Filter Jobs - Name and Priority
  useEffect(() => {
    let result = [...jobs];
    if (filterName) {
      result = result.filter((job) => job.name.includes(filterName));
    }
    if (filterPriority) {
      result = result.filter((job) => job.priority.includes(filterPriority));
    }

    //! List Jobs - Name and Priority 
    const listedJob = () => {
      const priorities = ["urgent", "regular", "trivial"];

      let mainJobs = [];
      const sortPrio = () => {
        priorities.map((item) => {
          const urgent = result?.filter((job) => job.priority === item);
          let jobNames = [];
          for (let i = 0; i < urgent.length; i++) {
            jobNames.push(urgent[i].name);
          }
          const sortedJobNames = jobNames.sort();

          for (let i = 0; i < sortedJobNames.length; i++) {
            mainJobs.push(
              ...urgent.filter((item) => item.name === sortedJobNames[i])
            );
          }
          return mainJobs;
        });
        //console.log(mainJobs);
      };
      sortPrio();

      setFilteredJobs(mainJobs);
    };
    listedJob();
  }, [jobs, filterName, filterPriority]);

  //! CRUD operations - Delete
  const deleteJob = (id) => {
    const deletedJobsById = jobs.filter((item) => item.id !== id);
    setJobs(deletedJobsById);
    setLocalStorage(deletedJobsById);
  };

  return (
    <Container>
      <div className="d-flex justify-content-between">
        <Title>Job List</Title>
        <div>
          ({filteredJobs?.length}/{filteredJobs?.length})
        </div>
      </div>
      <FilterContainer>
        <FormControl>
          <FormInput
            id="name"
            value={filterName}
            onChange={editName}
            searchIcon
            className="form-control"
            type="text"
            placeholder="Search by name"
          ></FormInput>
        </FormControl>
        <FormControl>
          <Select
            id="priority"
            value={filterPriority}
            onChange={editPriority}
            role="button"
          >
            <option value="">Priority (All)</option>
            <option value="urgent">Urgent</option>
            <option value="regular">Regular</option>
            <option value="trivial">Trivial</option>
          </Select>
        </FormControl>
      </FilterContainer>
      <ListContainer>
        <ListHead>
          <ListLine>
            <Th>Name</Th>
            <Th>Priority</Th>
            <Th>Action</Th>
          </ListLine>
        </ListHead>
        {filteredJobs?.map((job, key) => (
          <Job key={key}>
            <JobName>{job?.name}</JobName>
            <JobPriority>{job?.priority}</JobPriority>
            <Icons>
              <CiEdit
                size={20}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#edit-modal"
                className="me-2 text-warning"
                onClick={() => setEditItem(job)}
              />

              <RiDeleteBin2Line
                size={20}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#delete-modal"
                className="text-danger"
                //OnClick={() => deleteJob(job.id)}
              />
            </Icons>
          </Job>
        ))}
      </ListContainer>
      {filteredJobs.length === 0 && (
        <div>
          <p>No jobs found</p>
        </div>
      )}
      <DeleteJob editItem={editItem} deleteJob={deleteJob}/>
      <EditJob editItem={editItem} />
    </Container>
  );
};

export default JobList;
