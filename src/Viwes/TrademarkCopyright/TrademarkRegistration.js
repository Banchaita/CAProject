import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../components/Layout";
import QuickEnquiryFrom from "../../components/Forms/QuickEnquiryFrom";
import banner from "../../assets/images/Trademark.jpg";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TrademarkRegistrationAboutText, TrademarkRegistrationCardText } from "../../constants/Paragram";
import CommonBanner from "../../components/CommonBanner";
import CommonAboutSection from "../../components/CommonAboutSection";
import CommonCard from "../../components/Card/CommonCard";





const TrademarkRegistration = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");
  const [cardtext6, setCardText6] = useState("");
  const [cardtext7, setCardText7] = useState("");
  const [cardtext8, setCardText8] = useState("");

  useEffect(() => {
    if (TrademarkRegistrationCardText) {
      setCardText1(TrademarkRegistrationCardText[0]?.Legal_Protection);
      setCardText2(TrademarkRegistrationCardText[1]?.Unique_Identity);
      setCardText3(TrademarkRegistrationCardText[2]?.Trust_or_Goodwill);
      setCardText4(TrademarkRegistrationCardText[3]?.Creation_of_Asset);
      setCardText5(TrademarkRegistrationCardText[4]?.Global_Trademark_Filing);
      setCardText6(TrademarkRegistrationCardText[5]?.Identity_and_Business_Proof);
      setCardText7(TrademarkRegistrationCardText[6]?.Logo_with_Tagline);
      setCardText8(TrademarkRegistrationCardText[7]?.Form48_and_User_Affidavit);
    }
  }, [TrademarkRegistrationCardText]);
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="Trademark Registration" src={banner} />
      <CommonAboutSection
        text={TrademarkRegistrationAboutText}
        title="Trademark"
        span="Registration"
      />
      <CommonCard
        cardtilte="Reasons to Register"
        cardspan="a Trademark"
        card1="Legal Protection"
        card1text={cardtext1}
        crad2="Unique Identity"
        cardtext2={cardtext2}
        card3="Trust or Goodwill"
        cardtext3={cardtext3}
        card4="Creation of Asset"
        cardtext4={cardtext4}
        card5="Global Trademark Filing"
        cardtext5={cardtext5}
        card6="Identity and Business Proof"
        cardtext6={cardtext6}
        card7="Logo with Tagline"
        cardtext7={cardtext7}
        card8="Form-48 and User Affidavit"
        cardtext8={cardtext8}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with <span> trademark registration</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Application Preparation</p>
                <p className="text">
                  Our Trademark Expert will prepare the trademark application
                  for your business based on your requirements and information.
                  We will prepare your application based on the information
                  provided.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Trademark Filing</p>
                <p className="text">
                  Once, the trademark application is prepared and signed by you,
                  we can file it with the Trademark Registrar immediately. Once,
                  the application is filed with the Registrar you can start
                  using the TM symbol.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Trademark Registration</p>
                <p className="text">
                  Once the trademark application is filed with the Registrar,
                  the Government processing will start. We will provide
                  trademark application status tracking through SMS, Email and
                  iCFO Platform.
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

export default TrademarkRegistration;
