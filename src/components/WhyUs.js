import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const WhyUs = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <section className="hm-services-sec">
      <Container>
        <Row>
          <Col className="hm-about-what-sec" xs={12} md={12} lg={12}>
            <h2>
              What <span> Us</span>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col xs={12} md={12} lg={12}>
            <p>
              You are the master of your field, we are in our field. Most people
              don’t service their cars at home. Instead, they bring them to a
              professional mechanic who can keep things running smoothly and
              spot potential issues. Small businesses need just the same
              attention from a professional.Same if you love your car you will
              take it for service at its authorized service station where all
              kind of treatments are available for your car. So we have all the
              relevant services under one roof where we can complete all legal
              and financial compliances of your business.
            </p>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="blog-1">
              <h5>Keep Your Business Healthy by regular monitoring</h5>
              <p>
                We do more than just tax filing. We take a comprehensive
                assessment of your finances and create a forecast through the
                year to keep your business in a healthy and prosperous state. It
                may feel daunting to let an outsider intimate details of how
                your business is run, especially if you’ve had trouble managing
                your finances in the past. But partnering with Purminder Kaur &
                Associates will actually help you to achieve your goals and set
                you up for long-term success.
              </p>
            </div>
          </Col>
          <Col xs={12} md={3} lg={4}>
            <div className="blog-1">
              <h5>Get all your deductions and reduce tax liability</h5>
              <p>
                During a busy tax season, most business owners are frantically
                thinking about how they can maximize on their deductions.
                However, by the end of the year it is too late to make an impact
                on that. We support you by easily identifying these potential
                deductions throughout the year and advise you how to make
                strategic decisions for year-end deductions. Many business
                owners forget to track and account for items like depreciation,
                out-of-pocket expenses and home office space. Don’t leave money
                on the table!
              </p>
            </div>
          </Col>
          <Col xs={12} md={3} lg={4}>
            <div className="blog-1">
              <h5>Save your time so you can focus on your core business</h5>
              <p>
                Most entrepreneurs think that a tight budget means they won’t be
                able to afford hiring an accountant. But if you think about how
                much time and effort you spend on trying to manage your finances
                yourself (not to mention the possible errors you could incur
                during reporting, and related losses from poor financial
                decisions), the benefits certainly outweigh the cost. As an
                entrepreneur, your focus should be on running your business.
                Investing with us and engaging us as an ongoing tactical
                business advisor will assist you in maintaining that focus and
                simultaneously keep you on the road toward your business goals.
              </p>
            </div>
          </Col>
          <Col xs={12} md={3} lg={4}>
            <div className="blog-2">
              <h5>Make real-time decisions and business Intelligence</h5>
              <p>
                When business owners often tell us that they wish they could
                easily calculate the potential consequences and implications of
                making a big office purchase or hiring more employees. Having us
                as your financial advisor to help you with budgeting and
                monitoring cash flow on a steady basis will allow you to
                navigate any hurdles that occur in real time. You can take a
                collaborative approach with us, allowing you to make decisions
                together based on the latest data and also take advantage of a
                consultative relationship that will help you make business
                decisions when you need to make them.
              </p>
            </div>
          </Col>
          <Col xs={12} md={3} lg={4}>
            <div className="blog-2">
              <h5>Plan for the future and help your business to grow</h5>
              <p>
                Finally, one of the biggest benefits of hiring us is getting
                advice on how to plan for the future. Together, we can pull
                reports from past months and examine the seasonality of your
                business. Doing this will help you determine the best time to
                buy inventory, and budget for big-ticket investments so that you
                can stay competitive and viable. As a business owner, you are
                most often preoccupied with the day-to-day operations of running
                your business. However, we take a step back and objectively look
                at the big picture to find the best way to support the longevity
                of your business.
                {/* The life of a business owner can be isolating, especially when you’re
                left with a pile of receipts and invoices to plow through at
                the end of the month or the year. It doesn’t have to be that
                way. As the saying goes,’Many hands make light work’; and
                partnering with Purminder Kaur & Associates who has a
                qualified and efficient team with expertise to guide you
                through your journey will set you up for lasting success. */}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyUs;
