import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../../components/Layout";
import CommonBanner from "../../../components/CommonBanner";
import CommonAboutSection from "../../../components/CommonAboutSection";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import banner from "../../../assets/images/banner9.jpg";
import {
  CMAReportPreparationAboutText,
  CMAReportPreparationCardText,
} from "../../../constants/Paragram";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CMAReportPreparation = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (CMAReportPreparationCardText) {
      setCardText1(CMAReportPreparationCardText[0]?.Term_Loan);
      setCardText2(CMAReportPreparationCardText[1]?.Working_Capital);
      setCardText3(CMAReportPreparationCardText[2]?.Bank_Guarantee);
      setCardText4(CMAReportPreparationCardText[3]?.Letter_of_Credit);
      setCardText5(CMAReportPreparationCardText[4]?.Mortgage_Loan);
    }
  }, [CMAReportPreparationCardText]);
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="CMA Report Preparation" src={banner} />
      <CommonAboutSection
        text={CMAReportPreparationAboutText}
        title="CMA Report"
        span="Preparation"
      />
      <CommonCard
        cardtilte="Different Types of "
        cardspan="Bank Loan Facilities"
        card1="Term Loan"
        card1text={cardtext1}
        crad2="Working Capital"
        cardtext2={cardtext2}
        card3="Bank Guarantee"
        cardtext3={cardtext3}
        card4="Letter of Credit"
        cardtext4={cardtext4}
        card5="Mortgage Loan"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with bank <span>CMA report preparation</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Engagement Advisory</p>
                <p className="text">
                  A Business Expert will review the business profile, financial
                  information and loan documentation to understand the
                  background of the business.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">A Draft Report</p>
                <p className="text">
                  Based on the information gathered, the draft CMA report is
                  prepared.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Final Report</p>
                <p className="text">
                  Post the preparation of draft report and discussion with
                  client, final CMA report is prepared, verified and submitted.
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

export default CMAReportPreparation;
