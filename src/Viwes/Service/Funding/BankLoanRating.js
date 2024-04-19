import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../../components/Layout";
import CommonBanner from "../../../components/CommonBanner";
import CommonAboutSection from "../../../components/CommonAboutSection";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import banner from "../../../assets/images/banner9.jpg";
import {
  BankLoanRatingAboutText,
  BankLoanRatingCardText,
} from "../../../constants/Paragram";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BankLoanRating = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (BankLoanRatingCardText) {
      setCardText1(BankLoanRatingCardText[0]?.Term_Loan);
      setCardText2(BankLoanRatingCardText[1]?.Working_Capital);
      setCardText3(BankLoanRatingCardText[2]?.Bank_Guarantee);
      setCardText4(BankLoanRatingCardText[3]?.Letter_of_Credit);
      setCardText5(BankLoanRatingCardText[4]?.Mortgage_Loan);
    }
  }, [BankLoanRatingCardText]);
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="Bank Loan Rating" src={banner} />
      <CommonAboutSection
        text={BankLoanRatingAboutText}
        title="Bank Loan"
        span="Rating"
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
                How we help with bank <span>loan rating advisory</span>
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
                <p className="title">Advisory</p>
                <p className="text">
                  Based on the information gathered, advisory on bank loan
                  rating is provided to the client and hand-holding is done
                  during meetings with rating agencies.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Rating Advisory</p>
                <p className="text">
                  Post the release of rating by the agency, a discussion is
                  completed with the client and rating agency to ensure the
                  rating is inline with the performance of the enterprise
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

export default BankLoanRating;
