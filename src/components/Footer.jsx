import React from "react";
import styled from "styled-components";
import img from "../images/image001.png";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgb(245,245,245);
  margin: 1rem;
  padding: 0.3rem;
  border-radius: 3px;
  img {
    @media (max-width: 768px) {
      width: 70%;
    }
  }
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

const RiseIcon = styled.div`
  font-size: 1.5rem;
  color: #e5e5e5;
  cursor: pointer;
  margin-right: 1rem;
  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-right: 0.1rem;
  }
`;

const GetRepo = styled.a`
  font-size: 0.7rem;
  color: #888787;
  cursor: pointer;
  text-decoration: none;
`;

const Dev = styled.div`
  font-size: 0.8rem;
  color: #e5e5e5;
  margin-right: 0.5rem;
  cursor: pointer;
  a {
    text-decoration: none;
    color: #807e7e;
    @media (max-width: 768px) {
    font-size: 0.6rem;
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <FooterSection>
        <RiseIcon>
          <img src={img} alt="logo" />
        </RiseIcon>
        <GetRepo href="https://github.com/Haliboss/todo-rise">
          Get the Repo
        </GetRepo>
      </FooterSection>

      <Dev>
        <a href="https://www.linkedin.com/in/haliboss/">@2022 Haliboss</a>
      </Dev>
    </Container>
  );
};

export default Footer;
