import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../components/Layout";
import QuickEnquiryFrom from "../../components/Forms/QuickEnquiryFrom";
import banner from "../../assets/images/Trademark.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  TrademarkRenewalAboutText,
  TrademarkRenewalCardText,
} from "../../constants/Paragram";
import CommonBanner from "../../components/CommonBanner";
import CommonAboutSection from "../../components/CommonAboutSection";
import CommonCard from "../../components/Card/CommonCard";

const TrademarkRenewal = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (TrademarkRenewalCardText) {
      setCardText1(TrademarkRenewalCardText[0]?.File_Professionally);
      setCardText2(TrademarkRenewalCardText[1]?.Year_Protection);
      setCardText3(TrademarkRenewalCardText[2]?.Trademark_Journal);
      setCardText4(TrademarkRenewalCardText[3]?.Timeline);
      setCardText5(TrademarkRenewalCardText[4]?.Trademark_Infringement);
    }
  }, [TrademarkRenewalCardText]);
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="Trademark Renewal" src={banner} />
      <CommonAboutSection
        text={TrademarkRenewalAboutText}
        title="Trademark"
        span="Renewal"
      />
      <CommonCard
        cardtilte="Important Aspects of "
        cardspan="Renewing Trademark"
        card1="File Professionally"
        card1text={cardtext1}
        crad2="10 Year Protection"
        cardtext2={cardtext2}
        card3="Trademark Journal"
        cardtext3={cardtext3}
        card4="Timeline"
        cardtext4={cardtext4}
        card5="Trademark Infringement"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with <span>trademark renewal</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Consultation</p>
                <p className="text">
                  An Purminder Kaur & Associates Trademark Expert would
                  determine the details of registration for which renewal
                  application must be filed.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Preparing Opposition</p>
                <p className="text">
                  Based on the discussion and course of action decided, a
                  trademark renewal application is prepared by the Purminder
                  Kaur & Associates Trademark Expert.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Renewal Filing</p>
                <p className="text">
                  On obtaining the consent of the client, the trademark renewal
                  application is filed with the Trademark Registry and the
                  processing of the application is tracked.
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

export default TrademarkRenewal;
