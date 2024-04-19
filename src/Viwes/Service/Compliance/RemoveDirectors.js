import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../../components/Layout";
import CommonBanner from "../../../components/CommonBanner";
import CommonAboutSection from "../../../components/CommonAboutSection";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import banner from "../../../assets/images/banner.jpg";
import {
  RemoveDirectorsAboutText,
  RemoveDirectorsCardText,
} from "../../../constants/Paragram";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const RemoveDirectors = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (RemoveDirectorsCardText) {
      setCardText1(RemoveDirectorsCardText[0]?.Managing_Director);
      setCardText2(RemoveDirectorsCardText[1]?.Executive_Director);
      setCardText3(RemoveDirectorsCardText[2]?.Additional_Director);
      setCardText4(RemoveDirectorsCardText[3]?.Ordinary_Director);
      setCardText5(RemoveDirectorsCardText[4]?.Alternate_Director);
    }
  }, [RemoveDirectorsCardText]);
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="Remove Directors" src={banner} />
      <CommonAboutSection
        text={RemoveDirectorsAboutText}
        title="Remove"
        span="Directors"
      />
      <CommonCard
        cardtilte="Types of Director "
        cardspan="in a Company "
        card1="Managing Director"
        card1text={cardtext1}
        crad2="Executive Director"
        cardtext2={cardtext2}
        card3="Additional Director"
        cardtext3={cardtext3}
        card4="Ordinary Director"
        cardtext4={cardtext4}
        card5="Alternate Director"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with <span> resignation of director</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Advisory</p>
                <p className="text">
                  The procedure for removing a Director from the Board of a
                  company would depend on the existing Board of Directors. Our
                  Experts will advise you on the procedure relevant for you.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Board Resolutions</p>
                <p className="text">
                  Once you obtain an understanding of the procedures involved in
                  removing a Director from your Company, our Experts will draft
                  the necessary Resolutions for the procedure.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Filing</p>
                <p className="text">
                  Once the Board Resolutions are passed, our Experts will
                  prepare and file the necessary documents with the Ministry of
                  Corporate Affairs to register the removal of Director.
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

export default RemoveDirectors;
