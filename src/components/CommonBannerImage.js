import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BreadcrumbExample from "./Breadcrumb";

const CommonBannerImage = ({ src, text,url }) => {
  return (
    <Container fluid className="p-0">
      <Row className="no-gutters">
        <Col xs={12} className="common-banner-image-container position-relative">
          <img className="banner-image img-fluid" src={src} alt="Banner" />
          <div className="overlay"></div>
          <BreadcrumbExample text={text} url={url} />
        </Col>
      </Row>
    </Container>
  );
};

export default CommonBannerImage;
