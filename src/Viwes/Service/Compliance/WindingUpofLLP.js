import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../../components/Layout";
import CommonBanner from "../../../components/CommonBanner";
import CommonAboutSection from "../../../components/CommonAboutSection";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import banner from "../../../assets/images/banner.jpg";
import {
  WindingUpofLLPAboutSubText,
  WindingUpofLLPCardText,
  WindingUpofLLPListItems,
  WindingUpofLLPAboutText,
} from "../../../constants/Paragram";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WindingUpofLLP = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (WindingUpofLLPCardText) {
      setCardText1(WindingUpofLLPCardText[0]?.Avoid_Compliance);
      setCardText2(WindingUpofLLPCardText[1]?.Avoid_Fines);
      setCardText3(WindingUpofLLPCardText[2]?.Low_Cost);
      setCardText4(WindingUpofLLPCardText[3]?.Easy_to_Close);
      setCardText5(WindingUpofLLPCardText[4]?.Easy_Process);
    }
  }, [WindingUpofLLPCardText]);
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="Winding Up of LLP" src={banner} />
      <CommonAboutSection
        text={WindingUpofLLPAboutText}
        title="Winding Up"
        span="of LLP"
        subtext={WindingUpofLLPAboutSubText}
        listItem={WindingUpofLLPListItems}
      />
      <CommonCard
        cardtilte="Reasons to Wind"
        cardspan="Up LLP"
        card1="Avoid Compliance"
        card1text={cardtext1}
        crad2="Avoid Fines"
        cardtext2={cardtext2}
        card3="Low Cost"
        cardtext3={cardtext3}
        card4="Easy to Close"
        cardtext4={cardtext4}
        card5="Easy Process"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with <span>Winding Up</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Document Preparation</p>
                <p className="text">
                  A Business Expert reviews the activities of the LLP and
                  determines the documents required for commencing LLP winding
                  up. The review process would be complete in 2 – 3 working
                  days.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Document Submission</p>
                <p className="text">
                  The necessary documents are prepared by an Expert for winding
                  up of the LLP. Documents will be prepared by the Expert in 10
                  – 15 working days, based on the documents and information
                  provided.{" "}
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Winding Up Process</p>
                <p className="text">
                  LLP winding up documents and application is submitted to begin
                  the process. Throughout the process, the application is
                  tracked and necessary filings are made to wind up affairs of
                  the LLP.{" "}
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

export default WindingUpofLLP;
