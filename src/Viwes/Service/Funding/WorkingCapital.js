import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../../components/Layout";
import CommonBanner from "../../../components/CommonBanner";
import CommonAboutSection from "../../../components/CommonAboutSection";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import banner from "../../../assets/images/banner9.jpg";
import {
  WorkingCapitalAboutText,
  WorkingCapitalCardText,
} from "../../../constants/Paragram";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WorkingCapital = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (WorkingCapitalCardText) {
      setCardText1(WorkingCapitalCardText[0]?.Term_Loan);
      setCardText2(WorkingCapitalCardText[1]?.Working_Capital);
      setCardText3(WorkingCapitalCardText[2]?.Bank_Guarantee);
      setCardText4(WorkingCapitalCardText[3]?.Letter_of_Credit);
      setCardText5(WorkingCapitalCardText[4]?.Mortgage_Loan);
    }
  }, [WorkingCapitalCardText]);
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="Working Capital" src={banner} />
      <CommonAboutSection
        text={WorkingCapitalAboutText}
        title="Working"
        span="Capital"
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
                How we help with <span> working capital loan</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Document Collection</p>
                <p className="text">
                  An Purminder Kaur & Associates Capital Syndication Expert will
                  collect the necessary information and documents for
                  preparation of project report.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Application Processing</p>
                <p className="text">
                  Once the application is prepared and submitted in the required
                  format, Officials from the Bank or Financial Institution will
                  process the application and verify the particulars presented
                  in the application.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Sanction & Disbursement</p>
                <p className="text">
                  Application is scrutinized by the Bank or Financial
                  Institution. If the application is in order, loan is
                  sanctioned and disbursed.
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

export default WorkingCapital;
