import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../context";

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
  padding: 5px;
  //width: 100%;

  @media (min-width: 576px) {
    width: 120px;
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
  //border: 2px solid red;
  width: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const FormControl = styled.div`
  margin: 0;
  @media (min-width: 768px) {
    margin-right: 12px;
  }
`;

const FormInput = styled.input`
  width: 60vw;
  border: 1px solid #ccc;
  border-radius: 2px;
  padding: 0;
`;

const Select = styled.select`
  width: 20vw;
  border-radius: 2px;
  padding: 2px;
`;

const CreateJob = () => {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("");

  const { addJob } = useContext(Context);

  const createJob = () => {
    const job = {
      name,
      priority,
    };

    addJob({ type: "CREATE_JOB", payload: job });

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
