import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../../components/Layout";
import CommonBanner from "../../../components/CommonBanner";
import CommonAboutSection from "../../../components/CommonAboutSection";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import banner from "../../../assets/images/banner9.jpg";
import {
  CreditScoreCheckAboutText,
  CreditScoreCheckCardText,
} from "../../../constants/Paragram";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CreditScoreCheck = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (CreditScoreCheckCardText) {
      setCardText1(CreditScoreCheckCardText[0]?.Credit_Report);
      setCardText2(CreditScoreCheckCardText[1]?.Credit_Score);
      setCardText3(CreditScoreCheckCardText[2]?.Purminder_Kaur);
      setCardText4(CreditScoreCheckCardText[3]?.Rating_Agencies);
      setCardText5(CreditScoreCheckCardText[4]?.Credit_Report_Information);
    }
  }, [CreditScoreCheckCardText]);

  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="Credit Score Check" src={banner} />
      <CommonAboutSection
        text={CreditScoreCheckAboutText}
        title="Credit Score"
        span="Check"
      />
      <CommonCard
        cardtilte="Reasons to Credit"
        cardspan="Score Check [CIBIL]"
        card1="Credit Report"
        card1text={cardtext1}
        crad2="Credit Score"
        cardtext2={cardtext2}
        card3="Purminder Kaur & Associates Can Help"
        cardtext3={cardtext3}
        card4="Rating Agencies"
        cardtext4={cardtext4}
        card5="Credit Report Information"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with credit <span>score verification</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Requesting Credit Report</p>
                <p className="text">
                  Purminder Kaur & Associates will apply on your behalf to the
                  three credit rating agencies in India, requesting a copy of
                  your Credit Report. The application will be made along with
                  the necessary supporting documents.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Credit Report Review</p>
                <p className="text">
                  Once you have received a copy of the credit report from the
                  rating agencies, an Purminder Kaur & Associates Expert will
                  help you understand the Credit Report and provide advice on
                  improving your Credit Score.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Rating Dispute</p>
                <p className="text">
                  In case you notice any incorrect information on your Credit
                  Report, an Purminder Kaur & Associates Expert will help you
                  raise a request with the Rating Agency for review and removal
                  of incorrect information.
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

export default CreditScoreCheck;
