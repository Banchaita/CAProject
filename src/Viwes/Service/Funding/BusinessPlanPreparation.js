import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../../components/Layout";
import CommonBanner from "../../../components/CommonBanner";
import CommonAboutSection from "../../../components/CommonAboutSection";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import banner from "../../../assets/images/banner9.jpg";
import {
  BusinessPlanPreparationAboutText,
  BusinessPlanPreparationCardText,
} from "../../../constants/Paragram";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const BusinessPlanPreparation = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (BusinessPlanPreparationCardText) {
      setCardText1(BusinessPlanPreparationCardText[0]?.Business_Plan);
      setCardText2(BusinessPlanPreparationCardText[1]?.Financial_Professional);
      setCardText3(BusinessPlanPreparationCardText[2]?.Purminder_Kaur);
      setCardText4(
        BusinessPlanPreparationCardText[3]?.Well_Drafted_Business_Plan
      );
      setCardText5(BusinessPlanPreparationCardText[4]?.Capital_Syndication);
    }
  }, [BusinessPlanPreparationCardText]);
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="Business Plan Preparation" src={banner} />
      <CommonAboutSection
        text={BusinessPlanPreparationAboutText}
        title="Business Plan"
        span="Preparation"
      />
      <CommonCard
        cardtilte="Reasons to Business"
        cardspan="Plan Preparation"
        card1="Business Plan"
        card1text={cardtext1}
        crad2="Financial Professional"
        cardtext2={cardtext2}
        card3="Purminder Kaur & Associates Can Help"
        cardtext3={cardtext3}
        card4="Well Drafted Business Plan"
        cardtext4={cardtext4}
        card5="Capital Syndication"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with <span>business plan preparation</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Understanding</p>
                <p className="text">
                  Prior to preparing the business plan, our Financial Experts
                  will work with you to understand your business, proposed plans
                  and capital requirement.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Business Plan Preparation</p>
                <p className="text">
                  Based on our understanding of your startup business and the
                  information collected, our Financial Experts will draft a
                  business plan for your startup.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Business Plan Finalization</p>
                <p className="text">
                  Once the draft business plan is prepared, you can provided
                  your comments or inputs to finalize and prepare the final
                  business plan and investor pitch.
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

export default BusinessPlanPreparation;
