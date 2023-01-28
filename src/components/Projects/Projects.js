import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import expenses from "../../Assets/Projects/expenses.png";
import todo from "../../Assets/Projects/todo.png";
import flipkart from "../../Assets/Projects/flipkart.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="toDo"
              description="Let's say that we've been tasked with creating a proof-of-concept in React – an app that allows users to add, edit, and delete tasks they want to work on, and also mark tasks as complete without deleting them. "
              ghLink="https://github.com/chandanlog/ToDo"
              demoLink="https://chandanlog-todo-list.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expenses}
              isBlog={false}
              title="Expense-Item"
              description="Build a React Budget Tracker App Learn React & Context API with this Fun Project"
              ghLink="https://github.com/chandanlog/Expense-Item"
              demoLink="https://expense-item.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flipkart}
              isBlog={false}
              title="Flipkart"
              description="Flipkart clone is a ready-made remarkable multi-vendor eCommerce site built-in compleatly JavaScript that helps Entrepreneurs can start their own business like Flipkart, which allows the vendors to add products & users to buy the products easily with just a click."
              ghLink="https://github.com/chandanlog/Flipkart"
              demoLink="https://flipkart-project.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
