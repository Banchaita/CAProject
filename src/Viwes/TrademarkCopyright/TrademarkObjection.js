import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../components/Layout";
import QuickEnquiryFrom from "../../components/Forms/QuickEnquiryFrom";
import banner from "../../assets/images/Trademark.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  TrademarkObjectionAboutText,
  TrademarkObjectionCardText,
} from "../../constants/Paragram";
import CommonBanner from "../../components/CommonBanner";
import CommonAboutSection from "../../components/CommonAboutSection";
import CommonCard from "../../components/Card/CommonCard";

const TrademarkObjection = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (TrademarkObjectionCardText) {
      setCardText1(TrademarkObjectionCardText[0]?.Respond_Professionally);
      setCardText2(TrademarkObjectionCardText[1]?.Process);
      setCardText3(TrademarkObjectionCardText[2]?.Trademark_Journal);
      setCardText4(TrademarkObjectionCardText[3]?.Timeline);
      setCardText5(TrademarkObjectionCardText[4]?.Trademark_Objection);
    }
  }, [TrademarkObjectionCardText]);
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="Trademark Objection" src={banner} />
      <CommonAboutSection
        text={TrademarkObjectionAboutText}
        title="Trademark"
        span="Objection"
      />
      <CommonCard
        cardtilte="Important Aspects of "
        cardspan="Replying to Trademark Objection"
        card1="Respond Professionally"
        card1text={cardtext1}
        crad2="Process"
        cardtext2={cardtext2}
        card3="Trademark Journal"
        cardtext3={cardtext3}
        card4="Timeline"
        cardtext4={cardtext4}
        card5="Trademark Objection"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with replying <span> to trademark objection</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Consultation</p>
                <p className="text">
                  An Purminder Kaur & Associates Trademark Expert would
                  determine the reason for objection and determine a course of
                  action to address the concerns of the Trademark Examiner –
                  cited in the Trademark Examination report.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Reply Drafting</p>
                <p className="text">
                  Based on the discussion and course of action decided, a reply
                  letter is drafted by an Purminder Kaur & Associates Trademark
                  Expert.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Reply Filing</p>
                <p className="text">
                  On obtaining the consent of the applicant, the Trademark Reply
                  is filed with the Trademark Registry and the processing of the
                  application is tracked.
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

export default TrademarkObjection;
