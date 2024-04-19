import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../components/Layout";
import QuickEnquiryFrom from "../../components/Forms/QuickEnquiryFrom";
import banner from "../../assets/images/Trademark.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  CopyrightRegistrationAboutText,
  CopyrightRegistrationCardText,
} from "../../constants/Paragram";
import CommonBanner from "../../components/CommonBanner";
import CommonAboutSection from "../../components/CommonAboutSection";
import CommonCard from "../../components/Card/CommonCard";

const CopyrightRegistration = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (CopyrightRegistrationCardText) {
      setCardText1(CopyrightRegistrationCardText[0]?.Legal_Protection);
      setCardText2(CopyrightRegistrationCardText[1]?.Branding_or_Goodwill);
      setCardText3(CopyrightRegistrationCardText[2]?.Global_Protection);
      setCardText4(
        CopyrightRegistrationCardText[3]?.Restricts_Unauthorized_Reproduction
      );
      setCardText5(CopyrightRegistrationCardText[4]?.Creation_of_Asset);
    }
  }, [CopyrightRegistrationCardText]);
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="Copyright Registration" src={banner} />
      <CommonAboutSection
        text={CopyrightRegistrationAboutText}
        title="Copyright"
        span="Registration"
      />
      <CommonCard
        cardtilte="Reasons to Register"
        cardspan=" a Copyright "
        card1="Legal Protection"
        card1text={cardtext1}
        crad2="Branding or Goodwill"
        cardtext2={cardtext2}
        card3="Global Protection"
        cardtext3={cardtext3}
        card4="Restricts Unauthorized Reproduction"
        cardtext4={cardtext4}
        card5="Creation of Asset"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with <span>copyright registration</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Application Preparation</p>
                <p className="text">
                  Our Copyright Expert will prepare the copyright application.
                  We will prepare your application within 2 – 3 working days
                  based on the information provided.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Copyright Filing</p>
                <p className="text">
                  Once, the copyright application is prepared and signed by you,
                  we can file it with the Copyright Registrar electronically or
                  manually.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Copyright Registration</p>
                <p className="text">
                  Once the copyright application is filed with the Registrar,
                  the Government processing will start. Copyright registration
                  takes anywhere between 2 – 3 months.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <QuickEnquiryFrom />
      <Footer />
    </>
  );
};

export default CopyrightRegistration;
