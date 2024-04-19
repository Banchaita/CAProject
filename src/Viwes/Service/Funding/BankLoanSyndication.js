import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../../components/Layout";
import CommonBanner from "../../../components/CommonBanner";
import CommonAboutSection from "../../../components/CommonAboutSection";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import banner from "../../../assets/images/banner9.jpg";
import {
  BankLoanSyndicationAboutText,
  BankLoanSyndicationCardText,
} from "../../../constants/Paragram";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BankLoanSyndication = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (BankLoanSyndicationCardText) {
      setCardText1(BankLoanSyndicationCardText[0]?.Bank_Loan_Syndication);
      setCardText2(BankLoanSyndicationCardText[1]?.Financial_Professional);
      setCardText3(BankLoanSyndicationCardText[2]?.Purminder_Kaur);
      setCardText4(BankLoanSyndicationCardText[3]?.Types_of_Bank_Loan);
      setCardText5(BankLoanSyndicationCardText[4]?.Loan_Without_Collateral);
    }
  }, [BankLoanSyndicationCardText]);
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="Bank Loan Syndication" src={banner} />
      <CommonAboutSection
        text={BankLoanSyndicationAboutText}
        title="Bank Loan"
        span="Syndication"
      />
      <CommonCard
        cardtilte="Reasons to"
        cardspan="Bank Loan Syndicationg"
        card1="Bank Loan Syndication"
        card1text={cardtext1}
        crad2="Financial Professional"
        cardtext2={cardtext2}
        card3="Purminder Kaur & Associates Can Help"
        cardtext3={cardtext3}
        card4="Types of Bank Loan"
        cardtext4={cardtext4}
        card5="Loan Without Collateral"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with <span> bank loan syndication</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Understanding</p>
                <p className="text">
                  Prior to preparing the Detailed Project Report, our Financial
                  Experts will work with you to understand your business,
                  proposed plans and capital requirement.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Project Preparation</p>
                <p className="text">
                  Based on our understanding of your Business and the
                  information collected, our Financial Experts will a Detailed
                  Project Report for your business.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Project Finalization</p>
                <p className="text">
                  Once the Detailed Project Report is prepared, we will help
                  submit the same to Banks and help you with the process until
                  the capital is syndicated.
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

export default BankLoanSyndication;
