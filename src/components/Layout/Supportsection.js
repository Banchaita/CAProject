import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "../Card/Card";
import SupportCard from "../Card/SupportCard";

const Supportsection = () => {
  return (
    <>
    <section className="hm-services-sec">
        <Container>
          <Row>
            <Col className="hm-services-title">
              <h2>
              Reason To Choose<span> Purminder Kaur & Associates</span>
              </h2>
              <p>
              We build trust and sustainable relationship, and have been
              continuing this for over 8 years. Continuous Value Addition to
              clients is what we strive for. We are partners in your growth. We
              don't work FOR our clients, we work WITH them. Our major emphasis
              is on understanding the clients' business & needs and formulating
              their solutions. Thereby maintaining.
              </p>
            </Col>

            <Col>
              <SupportCard />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Supportsection;
