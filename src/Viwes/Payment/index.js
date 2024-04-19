import React, { useState, useEffect } from "react";
import { Footer, Header, Topbar } from "../../components/Layout";
import banner from "../../assets/images/banner-4.jpg";
import CommonBanner from "../../components/CommonBanner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import qrcode from "../../assets/images/qr-code.png";

const Payment = () => {
  const [count, setCount] = useState(5); // Initial countdown value
  const [showPayment, setShowPayment] = useState(false); // State to control showing Payment component

  useEffect(() => {
    // Countdown logic
    const timer = setInterval(() => {
      if (count === 0) {
        clearInterval(timer); // Stop the countdown when it reaches 0
        setShowPayment(true); // Show the Payment component
      } else {
        setCount(count - 1); // Decrement count every second
      }
    }, 1000);

    // Cleanup function to clear the timer when component unmounts
    return () => clearInterval(timer);
  }, [count]); // Run the effect whenever count changes

  return (
    <div className="countdown-container">
      {showPayment ? (
        <>
          <Topbar />
          <Header />
          <CommonBanner text="Payment" src={banner} url="/payment" />
          <section className="hm-about-sec">
            <Container>
              <Row>
                <Col className="hm-about-what-sec">
                  <h2>
                    Payment <span> Details</span>
                  </h2>
                </Col>
              </Row>
              <Row className="justify-content-md-center mt-3">
                <Col>
                  <img
                    src={qrcode}
                    alt=""
                    srcset=""
                    width={300}
                    className="withgst"
                  />
                  <p>With GST</p>
                </Col>
                <Col>
                  <img
                    src={qrcode}
                    alt=""
                    srcset=""
                    width={300}
                    className="withoutgst"
                  />
                  <p>Without GST</p>
                </Col>
              </Row>
            </Container>
          </section>
          <Footer />
        </>
      ) : (
        <div className="countdown">
          <h1 className="countdown-text">{count}</h1>
          <p className="countdown-info">
            Page will be visible after countdown finishes...
          </p>
          {count === 0 && <div className="countdown-timer"></div>}
        </div>
      )}
    </div>
  );
};

export default Payment;
