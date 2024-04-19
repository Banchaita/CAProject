import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../../components/Layout";
import CommonBanner from "../../../components/CommonBanner";
import CommonAboutSection from "../../../components/CommonAboutSection";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import banner from "../../../assets/images/banner.jpg";
import {
  WindingUpofCompanyAboutText,
  WindingUpofCompanyAboutSubText,
} from "../../../constants/Paragram";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WindingUpofCompany = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (WindingUpofCompanyAboutSubText) {
      setCardText1(WindingUpofCompanyAboutSubText[0]?.Avoid_Compliance);
      setCardText2(WindingUpofCompanyAboutSubText[1]?.Fast_to_Close);
      setCardText3(WindingUpofCompanyAboutSubText[2]?.Low_Cost);
      setCardText4(WindingUpofCompanyAboutSubText[3]?.Avoid_Fines);
      setCardText5(WindingUpofCompanyAboutSubText[4]?.Easy_to_Close);
    }
  }, [WindingUpofCompanyAboutSubText]);
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="Winding Up of Company" src={banner} />
      <CommonAboutSection
        text={WindingUpofCompanyAboutText}
        title="Winding Up ofy"
        span="Company"
      />
      <CommonCard
        cardtilte="Reasons to Winding"
        cardspan="Up of a Company"
        card1="Avoid Compliance"
        card1text={cardtext1}
        crad2="Fast to Close"
        cardtext2={cardtext2}
        card3="Low Cost"
        cardtext3={cardtext3}
        card4="Avoid Fines"
        cardtext4={cardtext4}
        card5="Easy to Close"
        cardtext5={cardtext5}
      />
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                How we help with winding<span> up of a company</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Company Review</p>
                <p className="text">
                  A Business Expert reviews the activities of the Company and
                  determines if it is ready for winding up and advises on the
                  formalities. The review process would be complete in 2 – 3
                  working days.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Document Preparation</p>
                <p className="text">
                  The necessary documents are prepared by an Expert for winding
                  up of the company along with all attachments for signature.
                  Documents will be prepared by the Expert in 10 – 15 working
                  days depending on the size of company.
                </p>
              </div>
            </Col>
            <Col sm={12} md={4}>
              <div className="support-Limited-card">
                <p className="title">Winding Up Application</p>
                <p className="text">
                  Company winding up application along with the necessary
                  documents are submitted to the MCA. MCA will usually approve
                  the application for winding up and closing of the company in
                  about 3 to 6 months, subject to processing time.{" "}
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

export default WindingUpofCompany;
