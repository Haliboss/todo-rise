import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin2Line } from "react-icons/ri";
import { useJobContext } from "../context/JobProvider";
import EditJob from "./EditJob";

const Container = styled.div`
  //height: 100%;
  margin: 1rem;
`;
const Title = styled.h1`
  font-size: 1rem;
`;
const FilterContainer = styled.div`
  background-color: #f5f5f5;
  //padding: 1rem;
  display: flex;
  justify-content: space-between;
  /* flex-direction: row; */
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
`;
const Select = styled.select`
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 0.4rem;
  width: 20vw;
  margin-left: 3rem;
`;
const Label = styled.label`
  display: block;
  opacity: 0.5;
  //margin-bottom: 0.2rem;
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
`;
const JobName = styled.div`
  font-size: 1rem;
  width: 30%;
`;
const JobPriority = styled.div`
  font-size: 1rem;
  width: 70px;
`;
const ListHead = styled.div`
  background-color: #f5f5f5;
  //padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const ListLine = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const Th = styled.th`
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

  useEffect(() => {
    let result = [...jobs];
    if (filterName) {
      result = result.filter((job) => job.name.includes(filterName));
    }
    if (filterPriority) {
      result = result.filter((job) => job.priority.includes(filterPriority));
    }
    setFilteredJobs(result);
  }, [jobs, filterName, filterPriority]);

  const deleteJob = (id) => {
    const deletedJobsById = jobs.filter((item) => item.id !== id);
    setJobs(deletedJobsById);
    setLocalStorage(deletedJobsById);
  };

  console.log(filteredJobs);
  const data = filteredJobs;
  const listedJob = () => {
    const priorities = ["urgent", "regular", "trivial"];

    let mainJobs = [];
    const sortPrio = () => {
      priorities.map((item) => {
        const urgent = data.filter((job) => job.priority === item);
        let jobNames = [];
        for (let i = 0; i < urgent.length; i++) {
          jobNames.push(urgent[i].name);
        }
        const sortedJobNames = jobNames.sort();

        for (let i = 0; i < sortedJobNames.length; i++) {
          mainJobs.push(
            urgent.filter((item) => item.name === sortedJobNames[i])
          );
        }
      });
      console.log(mainJobs);
    };
    sortPrio();
    //console.log(sortedJobNames);
    console.log(mainJobs);
    //setFilteredJobs(mainJobs);
  };

  listedJob();

  return (
    <Container>
      <div className="d-flex justify-content-between">
        <Title>Job List</Title>
        <div>
          ({filteredJobs.length}/{jobs.length})
        </div>
      </div>

      <FilterContainer>
        <FormControl>
          {/* <Label htmlFor="name">Name</Label> */}
          <FormInput
            type="text"
            id="name"
            value={filterName}
            onChange={editName}
            searchIcon
          ></FormInput>
        </FormControl>
        <FormControl>
          {/* <Label htmlFor="priority">Priority</Label> */}
          <Select
            id="priority"
            value={filterPriority}
            onChange={editPriority}
            placeholder="Select Priority"
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
        {filteredJobs.map((job) => (
          <Job key={job.id}>
            <JobName>{job.name}</JobName>
            <JobPriority>{job.priority}</JobPriority>
            <Icons>
              <CiEdit
                size={20}
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#edit-modal"
                className="me-2 text-warning"
                onClick={() => setEditItem(job)}
              />
            
              <RiDeleteBin2Line onClick={() => deleteJob(job.id)} />
            </Icons>
          </Job>
        ))}
      </ListContainer>
      {filteredJobs.length === 0 && (
        <div>
          <p>No jobs found</p>
        </div>
      )}
      <EditJob editItem={editItem} />
    </Container>
  );
};

export default JobList;
