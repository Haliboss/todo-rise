import React, { useContext, useState } from "react";
import styled from "styled-components";
import { JobContext } from "../context/JobProvider";


const Container = styled.div`
  margin: 1rem;
`;

const Title = styled.div`
  font-weight: 400;
`;
const Button = styled.button`
  background-color: rgb(0, 122, 222);
  color: white;
  border: none;
  border-radius: 3px;
  padding: 4px;
  margin-top: 1rem;
  cursor: pointer;
    @media (max-width: 768px) {
    width: 90%;
    margin-top: 1rem;
  }
`;

const Label = styled.label`
  font-size: 0.8rem;
  opacity: 0.5;
  display: block;
`;

const FormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FormControl = styled.div`
  margin: 0;
  @media (max-width: 768px) {
    width:100%;
  }
`;

const FormInput = styled.input`
  width: 60vw;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 0;
  @media (max-width: 768px){
    width: 100%;
  }
`;

const Select = styled.select`
  width: 20vw;
  border-radius: 2px;
  padding: 2px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CreateJob = () => {

  const [name, setName] = useState("");

  const [priority, setPriority] = useState("");

  const { jobs, setJobs, setLocalStorage } = useContext(JobContext);

  //! CRUD Operations - Create
  const createJob = () => {
    const job = {
      id: new Date().getTime(),
      name,
      priority,
    };

    setJobs([...jobs, job]);
    setName("");
    setPriority("");

    if (name.trim().length === 0) {
      alert("required field");
      return;
    }

    if (priority.trim().length === 0) {
      alert("required field");
      return;
    }
    setLocalStorage([...jobs, job]);
  };

  const editName = (e) => {
    setName(e.target.value);
  };

  const editPriority = (e) => {
    setPriority(e.target.value);
  };

  return (
    <Container>
      <Title>Create New Job</Title>
      <FormContainer>
        <FormControl>
          <Label htmlFor="name"> Job Name</Label>
          <FormInput
            type="text"
            id="name"
            value={name}
            onChange={editName}
            required
          ></FormInput>
        </FormControl>
        <FormControl>
          <Label htmlFor="priority">Priority</Label>
          <Select
            id="priority"
            value={priority}
            onChange={editPriority}
            required
          >
            <option value="">Choose</option>
            <option value="urgent">Urgent</option>
            <option value="regular">Regular</option>
            <option value="trivial">Trivial</option>
          </Select>
        </FormControl>
        <Button onClick={() => createJob()}>+ Create</Button>
      </FormContainer>
    </Container>
  );
};

export default CreateJob;
