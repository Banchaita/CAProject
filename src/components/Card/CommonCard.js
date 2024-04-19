import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CommonCard = ({
  cardtilte,
  cardspan,
  card1,
  card1text,
  crad2,
  cardtext2,
  card3,
  cardtext3,
  card4,
  cardtext4,
  card5,
  cardtext5,
  card6,
  cardtext6,
  card7,
  cardtext7,
  card8,
  cardtext8,


}) => {



  return (
    <>
      <section className="hm-services-sec">
        <Container>
          <Row>
            <Col className="hm-about-what-sec" xs={12} md={12} lg={12}>
              <h2>
                {cardtilte} <span> {cardspan}</span>
              </h2>
            </Col>
          </Row>

          <div class="card-container">
            <a class="card1" href="#">
              <h3>{card1}</h3>
              <p class="small">{card1text}</p>
              <div class="go-corner" href="#">
                <div class="go-arrow">→</div>
              </div>
            </a>

            <a class="card1" href="#">
              <h3>{crad2}</h3>
              <p class="small">{cardtext2}</p>
              <div class="go-corner" href="#">
                <div class="go-arrow">→</div>
              </div>
            </a>

            <a class="card1" href="#">
              <h3>{card3}</h3>
              <p class="small">{cardtext3}</p>
              <div class="go-corner" href="#">
                <div class="go-arrow">→</div>
              </div>
            </a>

            <a class="card1" href="#">
              <h3>{card4}</h3>
              <p class="small">{cardtext4}</p>
              <div class="go-corner" href="#">
                <div class="go-arrow">→</div>
              </div>
            </a>

           

            {cardtext5 && card5 ? (
               <a class="card1" href="#">
               <h3>{card5}</h3>
               <p class="small">{cardtext5}</p>
               <div class="go-corner" href="#">
                 <div class="go-arrow">→</div>
               </div>
             </a>
            ) : null}


            {cardtext6 && card6 ? (
              <a className="card1" href="#">
                <h3>{card6}</h3>
                <p className="small">{cardtext6}</p>
                <div className="go-corner" href="#">
                  <div className="go-arrow">→</div>
                </div>
              </a>
            ) : null}

            {cardtext7 && card7 ? (
              <a className="card1" href="#">
                <h3>{card7}</h3>
                <p className="small">{cardtext7}</p>
                <div className="go-corner" href="#">
                  <div className="go-arrow">→</div>
                </div>
              </a>
            ) : null}
            {cardtext8 && card8 ? (
              <a className="card1" href="#">
                <h3>{card8}</h3>
                <p className="small">{cardtext8}</p>
                <div className="go-corner" href="#">
                  <div className="go-arrow">→</div>
                </div>
              </a>
            ) : null}
          </div>
        </Container>
      </section>
    </>
  );
};

export default CommonCard;
