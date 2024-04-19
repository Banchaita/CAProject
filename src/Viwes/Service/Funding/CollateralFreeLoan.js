import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../../components/Layout";
import CommonBanner from "../../../components/CommonBanner";
import CommonAboutSection from "../../../components/CommonAboutSection";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import banner from "../../../assets/images/banner9.jpg";
import {
  CollateralFreeLoanAboutText,
  CollateralFreeLoanCardText,
} from "../../../constants/Paragram";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CollateralFreeLoan = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (CollateralFreeLoanCardText) {
      setCardText1(CollateralFreeLoanCardText[0]?.Term_Loan);
      setCardText2(CollateralFreeLoanCardText[1]?.Working_Capital);
      setCardText3(CollateralFreeLoanCardText[2]?.Bank_Guarantee);
      setCardText4(CollateralFreeLoanCardText[3]?.Letter_of_Credit);
      setCardText5(CollateralFreeLoanCardText[4]?.Mortgage_Loan);
    }
  }, [CollateralFreeLoanCardText]);
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="Collateral Free Loan" src={banner} />
      <CommonAboutSection
        text={CollateralFreeLoanAboutText}
        title="Collateral"
        span="Free Loan"
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
                How we help with <span> collateral free loan</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Understanding</p>
                <p className="text">
                  Prior to preparing the Detailed Project Report and CMA data,
                  our Financial Experts will work with you to understand your
                  business, proposed plans and capital requirement.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Project Preparation</p>
                <p className="text">
                  Based on our understanding of your Business and the
                  information collected, our Financial Experts will prepare a
                  Detailed Project Report for your business.
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

export default CollateralFreeLoan;
