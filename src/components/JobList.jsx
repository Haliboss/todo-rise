import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { Context } from "../context";

const Container = styled.div`
  height: 100%;
`;
const Title = styled.h1`
  font-size: 1rem;
`;
const FilterContainer = styled.table`
  background-color: #f5f5f5;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const FormControl = styled.div`
  margin: 1rem 0;
`;
const FormInput = styled.input`
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 0.5rem;
  width: 100%;
`;
const Select = styled.select`
  border-radius: 3px;
  border: 1px solid #ccc;
  padding: 0.5rem;
`;
const Label = styled.label`
  display: block;
  opacity: 0.5;
  margin-bottom: 0.2rem;
`;
const Button = styled.button`
  background: rgb(0, 112, 222);
  color: #fff;
  border-radius: 3px;
  width: 100%;
  padding: 0.5rem;
  margin-top: 1.5rem;
  border: none;
  cursor: pointer;
  &:hover {
    background: rgb(0, 92, 182);
  }
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
`;
const JobPriority = styled.div`
  font-size: 1rem;
`;
const DeleteButton = styled.button`
  background: rgb(0, 112, 222);
  color: #fff;
  border-radius: 3px;
  border: none;
  cursor: pointer;
  &:hover {
    background: rgb(0, 92, 182);
  }
`;

const JobList = () => {
  const { jobs, dispatcher } = useContext(Context);
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


  const deleteJob = (index) => {
    dispatcher({ type: "DELETE_JOB", payload: index });
  };



  return (
    <Container>
      <Title>Job List</Title>
      <div>
        ({filteredJobs.length}/{jobs.length})
      </div>
      <FilterContainer>
        <FormControl>
          <Label htmlFor="name">Name</Label>
          <FormInput
            type="text"
            id="name"
            value={filterName}
            onChange={editName}
            disabled
          ></FormInput>
        </FormControl>
        <FormControl>
          <Label htmlFor="priority">Priority</Label>
          <Select id="priority" value={filterPriority} onChange={editPriority}
          placeholder="Select Priority">
            <option value="">Priority (All)</option>
            <option value="urgent">Urgent</option>
            <option value="regular">Regular</option>
            <option value="trivial">Trivial</option>
          </Select>
        </FormControl>
      </FilterContainer>
      <ListContainer>
        {filteredJobs.map((job, index) => (
          <Job key={index}>
            <JobName>{job.name}</JobName>
            <JobPriority>{job.priority}</JobPriority>
            <DeleteButton onClick={() => deleteJob(index)}>Delete</DeleteButton>
          </Job>
        ))}
      </ListContainer>
      {filteredJobs.length === 0 && (
        <div>
          <p>No jobs found</p>
        </div>
      )}
    </Container>
  );
};


export default JobList;
