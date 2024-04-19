import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../../components/Layout";
import CommonBanner from "../../../components/CommonBanner";
import banner from "../../../assets/images/banner-8.jpg";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import CommonAboutSection from "../../../components/CommonAboutSection";
import {
  LimitedLiabilityPartnershipAcboutText,
  LimitedLiabilityPartnershipCardText,
} from "../../../constants/Paragram";
import CommonCard from "../../../components/Card/CommonCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const LimitedLiabilityPartnership = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");
  const [cardtext6, setCardText6] = useState("");
  const [cardtext7, setCardText7] = useState("");

  useEffect(() => {
    if (LimitedLiabilityPartnershipCardText) {
      setCardText1(
        LimitedLiabilityPartnershipCardText[0]?.Separate_Legal_Entity
      );
      setCardText2(
        LimitedLiabilityPartnershipCardText[1]?.Uninterrupted_Existence
      );
      setCardText3(
        LimitedLiabilityPartnershipCardText[2]?.Easy_Transferability
      );
      setCardText4(LimitedLiabilityPartnershipCardText[3]?.Audit_NOT_Required);
      setCardText5(LimitedLiabilityPartnershipCardText[4]?.Owning_Property);
      setCardText6(
        LimitedLiabilityPartnershipCardText[5]?.Identity_and_Address_Proof
      );
      setCardText7(
        LimitedLiabilityPartnershipCardText[6]?.Registered_Office_Proof
      );
    }
  }, [LimitedLiabilityPartnershipCardText]);
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="Limited Liability Partnership" src={banner} />
      <CommonAboutSection
        text={LimitedLiabilityPartnershipAcboutText}
        title="Limited Liability"
        span="Partnership"
      />
      <CommonCard
        cardtilte="Reasons to Register a Limited"
        cardspan="Liability Partnership"
        card1="Separate Legal Entity"
        card1text={cardtext1}
        crad2="Uninterrupted Existence"
        cardtext2={cardtext2}
        card3="Easy Transferability"
        cardtext3={cardtext3}
        card4="Audit NOT Required"
        cardtext4={cardtext4}
        card5="Owning Property"
        cardtext5={cardtext5}
        card6="Identity and Address Proof"
        cardtext6={cardtext6}
        card7="Registered Office Proof"
        cardtext7={cardtext7}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with <span> LLP registration</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Digital Signature & DIN</p>
                <p className="text">
                  Digital Signature Certificate(DSC) and Designated Partner
                  Identification Number(DPIN) is obtained for the proposed
                  Partners of the LLP. DPIN and DSC can be obtained for the
                  proposed Partners within 5 to 7 days.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Name Approval</p>
                <p className="text">
                  A minimum of one and a maximum of six names choices must be
                  submitted to the MCA. Subject to availability, naming
                  guidelines and MCA processing time, name approval can be
                  obtained in 5 to 7 working days.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">LLP Registration</p>
                <p className="text">
                  Incorporation documents can be submitted to the MCA along with
                  an application for incorporation. MCA will usually approve the
                  application for incorporation of LLP in 10 to 12 days, subject
                  to their processing time.
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

export default LimitedLiabilityPartnership;
