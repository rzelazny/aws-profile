import React from 'react';
import { Container, Row, Col, Media} from 'reactstrap';

import Headshot from "../../static/images/Headshot.jpg";
import Rutgers from "../../static/images/Rutgers.png";
import PSU from "../../static/images//PSU.png";
import AboutContent from './AboutContent';

const About = () => {
    const content = AboutContent.en;

    return (

        <Container fluid className="container">
            <Row>
                {/* <!-- Headshot column --> */}
                <Col md="3">
                    <img src={Headshot} alt="Ryan Zelazny headshot" className="img-fluid mx-auto d-block" id="headshot"/>
                </Col>
                {/* <!-- About me text column --> */}
                <Col md="9">
                    <header>
                        <h2>About Me</h2>
                        <hr />
                    </header>
                    <p>{content.paraOne}</p>
                    <p>Recently I've been expanding my skill set. I've completed Rutgers University's full stack coding boot camp, and continue to work on my MERN stack skills. </p>
                    <header>
                        <h2>Experience and Skills</h2>
                    </header>
                    <p>Ten years working in the insurance industry has left me with more than coding experience. I'm able to bridge the communication gap between highly technical
                            users and less tech saavy business users.</p>
                    <p>I'm used to working with tight deadlines that can shift abruptly with new regulations. It's made me flexible and skilled at adjusting project plans on the fly.</p>
                    <header>
                        <h2>Education</h2>
                    </header>
                    {/* <!-- Education Row 1 --> */}
                    <Row>
                        <Col md="1">
                            <img src={Rutgers} className="img-fluid mx-auto d-block icon" alt="Rutgers Icon" />
                        </Col>
                        <Col md="11">
                            <p>Rutgers University - Coding Bootcamp</p>
                        </Col>
                    </Row>
                    {/* <!-- Education Row 2 --> */}
                    <Row>
                        <Col md="1">
                            <img src={PSU} className="img-fluid mx-auto d-block icon" alt="PSU Icon" />
                        </Col>
                        <Col md="11">
                            <p>Pennsylvania State University - Bachelor of Information Science and Technology</p>
                        </Col>
                    </Row>
                    <h2>Technologies and Languages</h2>
                    <p>React, Node, Express, Bootstrap, JavaScript, SQL, NoSQL, StepWise, VBA</p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;