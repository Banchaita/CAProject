import React from "react";
import Footer from "../../components/Layout/Footer";
import { Aboutsection, Header, Topbar } from "../../components/Layout";
import CommonBanner from "../../components/CommonBanner";
import banner from "../../assets/images/banner-5.jpg";
import ContactFrom from "../../components/Forms/ContactFrom";
import { Container, Row, Col } from "react-bootstrap";

const Contact = () => {
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="Contact US" src={banner} url="/contactus" />
      <ContactFrom />
      <section className="hm-contactus-sec">
        <Container>
          <Row className="justify-content-md-center">
            <Col md={6}>
              <h2 className="hm-about-title">
                Get <span> In Touch</span>
              </h2>
              <div className="address">
                <p>Purminder Kaur & Associates</p>
                <ul>
                  <li>
                    <strong>Address : </strong>
                    SCF- 79, First Floor, Phase – XI, Mohali, Punjab – 160062
                  </li>
                  <li>
                    <strong>Phone : </strong> 0172-5122215
                  </li>
                  <li>
                    <strong>Email: </strong> info@capka.co.in
                  </li>
                  <li>
                    <strong>Website: </strong> www.capka.co.in
                  </li>
                </ul>
              </div>
            </Col>
            <Col md={6}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6862.740014143434!2d76.74565!3d30.679863999999995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fec52046e35e3%3A0xc40943b5b4664914!2sPurminder%20Kaur%20%26%20Associates!5e0!3m2!1sen!2sus!4v1713257681353!5m2!1sen!2sus"
                width="720"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
