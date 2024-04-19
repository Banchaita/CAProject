import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../../components/Layout";
import CommonBanner from "../../../components/CommonBanner";
import CommonAboutSection from "../../../components/CommonAboutSection";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import banner from "../../../assets/images/banner.jpg";
import {
  ShareTransferAboutText,
  ShareTransferCardText,
} from "../../../constants/Paragram";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ShareTransfer = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (ShareTransferCardText) {
      setCardText1(ShareTransferCardText[0]?.Share_holders);
      setCardText2(ShareTransferCardText[1]?.Directors);
      setCardText3(ShareTransferCardText[2]?.Authorised_Capital);
      setCardText4(ShareTransferCardText[3]?.Articles_of_Association);
      setCardText5(ShareTransferCardText[4]?.Paid_up_Capital);
    }
  }, [ShareTransferCardText]);
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="Share Transfer" src={banner} />
      <CommonAboutSection
        text={ShareTransferAboutText}
        title="Share"
        span="Transfer"
      />
      <CommonCard
        cardtilte="Reasons to Share"
        cardspan="Transfer"
        card1="Shareholders"
        card1text={cardtext1}
        crad2="Directors"
        cardtext2={cardtext2}
        card3="Authorised Capital"
        cardtext3={cardtext3}
        card4="Articles of Association"
        cardtext4={cardtext4}
        card5="Paid up Capital"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with <span> Share Transfer Process</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Review</p>
                <p className="text">
                  A Business Expert will review the present shareholding of the
                  Company and the Articles of Association to understand the
                  background of the Company prior to beginning the process. The
                  review would take 1 – 3 working days.{" "}
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Document Preparation</p>
                <p className="text">
                  The necessary documents are will be prepared by an Expert for
                  transferring shares of the company from one person or entity
                  to another. Documents will be prepared by the Expert in 3 – 5
                  working days depending on complexity.{" "}
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Share Issue</p>
                <p className="text">
                  Based on the share transfer documentation submitted to the
                  Company, an Expert will help prepare the necessary
                  documentation for accepting the share transfer and issuing of
                  shares to the new shareholder in 5 – 10 working days.{" "}
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

export default ShareTransfer;
