import React from 'react';
import ExperienceCard from "./ExperienceCard";
import { Jumbotron } from './migration';
import { Container } from "react-bootstrap";

import "C:/Users/Lazaro Diaz/Documents/blog/home/src/scss/custom.scss";


const Experience = ({ experiences }) => {
  return (
    <section className="section">
      <Container>
        <Jumbotron className="bg-white">
          <h2 className="display-4 mb-5 text-center">
            {experiences.heading}
          </h2>
          <div className="experience-container">
            {experiences.data.map((data, index) => (
              <ExperienceCard key={index} data={data} />
            ))}
          </div>
        </Jumbotron>
      </Container>
    </section>
  );
};

export default Experience;
