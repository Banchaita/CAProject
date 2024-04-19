import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faRocket } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const VisionCard = () => {
  return (
    <Container>
      <Row>
        <Col sm={12} md={4}>
          <div className="supportcard">
            <div className="icon">
              <FontAwesomeIcon icon={faEye} style={{ color: "#05044D" }} />
            </div>
            <p className="title">Our Vision</p>
            <p className="text">
              To make accounting easy and accessible to businesses by providing
              quality Accounting, Auditing and Taxation Services according to
              the Industry and Legal Standards globally.
            </p>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="supportcard">
            <div className="icon">
              <FontAwesomeIcon icon={faRocket} style={{ color: "#05044D" }} />
            </div>
            <p className="title">Our Mission</p>
            <p className="text">
              To expand to all Metropolitan cities in India and have a host of
              Fortune 500 Companies as clients.
            </p>
          </div>
        </Col>
        <Col sm={12} md={4}>
          <div className="supportcard">
            <div className="icon">
              <FontAwesomeIcon icon={faHeart} style={{ color: "#05044D" }} />
            </div>
            <p className="title">Our Values</p>
            <p className="text">
              Monitoring and Communication of Accounting Milestones to clients.
              Transparency in all client dealings. Uphold highest standards of
              clients privacy.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default VisionCard;
