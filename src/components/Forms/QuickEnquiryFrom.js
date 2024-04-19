import React from "react";
import contactimg from '../../assets/images/QuickEnquiryImg.png'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const QuickEnquiryFrom = () => {
  return (
    <section className="hm-contactus-sec">
      <Container>
        <Row>
          <Col lg={6} className="mt-s">
            <div className="contact_form">
              <Row>
                <Col md={12} className="hm-contactus-title">
                  <h2>Quick<span>Enquiry</span></h2>
                  <p>Please send us your query and we'll be happy to assist you</p>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Enter Name *" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Control type="email" placeholder="Enter Email Address *" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Control type="text" maxLength={12} placeholder="Enter Phone" />
                  </Form.Group>
                </Col>
                <Col md={6}>
                <Form.Group>
                    <Form.Control type="text" maxLength={12} placeholder="Enter City" />
                  </Form.Group>
                </Col>
                <Col xs={12} className="text-center">
                  <Button variant="primary" type="submit" className="btn-send">Submit</Button>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg={6}>
            <figure className="image-wrap image-wrap-1 bg-athens-gray-inner">
              <img src={contactimg} alt="" className="img-fluid" style={{marginLeft:"45%"}}/>
            </figure>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default QuickEnquiryFrom;
