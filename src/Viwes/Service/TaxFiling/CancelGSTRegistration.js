import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../../components/Layout";
import CommonBanner from "../../../components/CommonBanner";
import CommonAboutSection from "../../../components/CommonAboutSection";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import banner from "../../../assets/images/herobanner-1.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  CancelGSTRegistrationAbout,
  CancelGSTRegistrationCardText,
} from "../../../constants/Paragram";

const CancelGSTRegistration = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (CancelGSTRegistrationCardText) {
      setCardText1(CancelGSTRegistrationCardText[0]?.GSTIN);
      setCardText2(CancelGSTRegistrationCardText[1]?.Stock_Details);
      setCardText3(CancelGSTRegistrationCardText[2]?.Tax_Liability);
      setCardText4(CancelGSTRegistrationCardText[3]?.Tax_Credit);
    }
  }, [CancelGSTRegistrationCardText]);

  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="Cancel GST Registration" src={banner} />
      <CommonAboutSection
        text={CancelGSTRegistrationAbout}
        title="Cancel GST"
        span="Registration"
      />
      <CommonCard
        cardtilte="Reasons to Cancel "
        cardspan="GST Registration"
        card1="GSTIN"
        card1text={cardtext1}
        crad2="Stock Details"
        cardtext2={cardtext2}
        card3="Tax Liability"
        cardtext3={cardtext3}
        card4="Tax Credit"
        cardtext4={cardtext4}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with cancellation<span> of GST Registration</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Application Preparation</p>
                <p className="text">
                  An Purminder Kaur & Associates GST Expert will prepare your
                  GST registration cancellation application and collect the
                  documents necessary for filing of application with the GST
                  Department{" "}
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Application Filing</p>
                <p className="text">
                  Once the application is prepared and verified, Purminder Kaur
                  & Associates will submit the GST registration cancellation
                  application to the GST Department along with details of
                  Authorised Signatory.{" "}
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">ARN Generation</p>
                <p className="text">
                  Once the application and the attached supporting documents are
                  uploaded, the GST Department would allot a ARN number. An
                  Purminder Kaur & Associates GST expert will track the ARN
                  number to completion.{" "}
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

export default CancelGSTRegistration;
