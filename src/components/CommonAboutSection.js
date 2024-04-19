import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CommonAboutSection = ({ text, title, span, listItem, subtext }) => {
  const [subtext1, setSubText1] = useState("");
  const [subtext2, setSubText2] = useState("");
  const [subtext3, setSubText3] = useState("");

  useEffect(() => {
    if (subtext) {
      setSubText1(subtext[0].Voluntary_Winding_Up);
      setSubText2(subtext[1].Striking_Off);
      setSubText3(subtext[2].Winding_Up_by_Tribunal);
    }
  }, [subtext]);

  return (
    <>
      <section className="hm-about-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec">
              <h2>
                {title} <span>{span}</span>
              </h2>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>{text}</p>

              {subtext1 ? (
                <p>
                  <h4 className="start">Voluntary Winding Up</h4>
                  {subtext1}
                </p>
              ) : null}

              {subtext2 ? (
                <p>
                  <h4 className="start">Striking Off</h4>
                  {subtext2}
                </p>
              ) : null}

              {subtext3 ? (
                <p>
                  <h4 className="start">Winding Up by Tribunal</h4>
                  {subtext3}
                  {listItem ? (
                    <ul>
                      {listItem.map((item, index) => (
                        <li key={index}>{item.reason}</li>
                      ))}
                    </ul>
                  ) : null}
                </p>
              ) : null}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default CommonAboutSection;
