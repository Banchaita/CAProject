import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WhatWeDo = () => {
  return (
    <section className="hm-about-sec">
      <Container>
        <Row>
          <Col className="hm-about-what-sec">
            <h2>
              What <span> We Do</span>
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h6 className='text-center mt-4'>We assist clients in Audits, Tax & Accounting and other services</h6>
            <p>
              We at Purminder Kaur & Associates provide many services for Income Tax, International Tax and Transfer Pricing,
              Goods and Services Tax (GST), Book Keeping & Accounting in Tally as well as Quickbooks Accounting, Auditing, 
              India Entry Services and Overseas Business Setup Services and many more financial services.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default WhatWeDo;
