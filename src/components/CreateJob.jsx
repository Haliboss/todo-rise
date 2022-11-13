import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "../context";

const Container = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: column;
  
`;
const Title = styled.h1`
  font-size: 1rem;
  font-weight: 400;
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
const Label = styled.label`
  display: block;
  opacity: 0.5;
  margin-bottom: 0.2rem;
`;
const FormCaontainer = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
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
      <FormCaontainer>
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
          <Select id="priority" value={priority} onChange={editPriority} required>
            <option value="urgent">Urgent</option>
            <option value="regular">Regular</option>
            <option value="trivial">Trivial</option>
          </Select>
        </FormControl>
        <FormControl>
          <Button onClick={()=> createJob()}>+ Create</Button>  
        </FormControl>
      </FormCaontainer>
    </Container>

  )
};

export default CreateJob;
