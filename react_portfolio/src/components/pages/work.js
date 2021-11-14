import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import ProjectCard from "../project";
import projects from '../../projects.json';
import "./style.css";

export default class Work extends Component {
    state = { projects };
    render() {
        return (
            <div className="projects-div">
                <Row md={12} className="justify-content-md-center project-header"><Col>My Projects</Col></Row>
                <Row className="justify-content-md-center project-sub"><Col>Here are some of my projects<br></br>If you would like to take a deeper dive follow the deployment link or the repo link</Col></Row>
                <Row xs={1} md={2} className="g-4 justify-content-md-center">
                    {
                        this.state.projects.map(project => (
                            
                            <ProjectCard
                                id={project.id}
                                key={project.id}
                                image={process.env.PUBLIC_URL + project.image}
                                name={project.name}
                                repo={project.repo}
                                deployed={project.deployed}
                            />
                        ))
                    }
                </Row>
            </div >
        )
    }
}