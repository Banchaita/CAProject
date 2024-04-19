import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../../components/Layout";
import CommonBanner from "../../../components/CommonBanner";
import CommonAboutSection from "../../../components/CommonAboutSection";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import banner from "../../../assets/images/herobanner-1.jpg";
import {
  TDSReturnAboutText,
  TDSReturnCardText,
} from "../../../constants/Paragram";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const TDSReturn = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (TDSReturnCardText) {
      setCardText1(TDSReturnCardText[0]?.TAN);
      setCardText2(TDSReturnCardText[1]?.TDS_Payments);
      setCardText3(TDSReturnCardText[2]?.TAN_Facilitation_Center);
      setCardText4(TDSReturnCardText[3]?.Proprietorship_Require_TAN);
      setCardText5(TDSReturnCardText[4]?.Validity);
    }
  }, [TDSReturnCardText]);
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="TDS Return" src={banner} />
      <CommonAboutSection text={TDSReturnAboutText} title="TDS" span="Return" />
      <CommonCard
        cardtilte="Reasons to TDS"
        cardspan="Return Filing"
        card1="TAN – Tax deduction Account Number"
        card1text={cardtext1}
        crad2="TDS Payments"
        cardtext2={cardtext2}
        card3="TAN Facilitation Center"
        cardtext3={cardtext3}
        card4="Proprietorship Require TAN"
        cardtext4={cardtext4}
        card5="Validity"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with <span> TDS return filing</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Document Collection</p>
                <p className="text">
                  An Purminder Kaur & Associates TDS Expert will collect the
                  necessary information and documents for preparation of TDS
                  return for your business.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Return Prepartion</p>
                <p className="text">
                  Based on the documents and information presented, an Purminder
                  Kaur & Associates TDS expert will prepare your TDS return and
                  send for your approval.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Return Filing</p>
                <p className="text">
                  Once the TDS return is verified and approved by you, our TDS
                  expert will file your TDS return with the Income Tax
                  department.
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

export default TDSReturn;
