import React from "react";

const NewsSection = () => {
  return (
    <>
      <section className="news-block-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>
                News <span>Section</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="news-item-box">
                <h3>News</h3>
                <marquee
                  id="m2"
                  height="283"
                  direction="up"
                  srolldelay="20"
                  scrollamount="1"
                  onmouseover="this.stop();"
                  onmouseout="this.start();"
                >
                  <table
                    id="ctl00_DataList1"
                    cellspacing="0"
                    border="0"
                    style={{width:"100%",borderCollapse:"collapse"}}
                  >
                    <tr>
                      <td>
                        <div className="news2d">
                          {" "}
                          <a className="hedingnews">18 Dec 19</a>{" "}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="news2d">
                          {" "}
                          <a href="#">
                            Govt Informs 15th FFC About Implausibility of
                            Meeting Revenue Targets of 5 Years
                          </a>{" "}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="news2d">
                          {" "}
                          <a href="#">
                            No excuses, target over Rs 1 lakh crore GST
                            collection in remaining months
                          </a>{" "}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="news2d">
                          {" "}
                          <a href="#">
                            GST Council meeting today: Lease rates, refund for
                            exporters on agenda
                          </a>{" "}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="news2d">
                          {" "}
                          <a href="#">
                            GST Council meeting today. Will Nirmala Sitharaman
                            increase GST rates, slabs?
                          </a>{" "}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="news2d">
                          {" "}
                          <a href="#">
                            CBIC further extends enabling New Changes in GSTR-9
                            and GSTR-9C to Dec 21
                          </a>{" "}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="news2d">
                          {" "}
                          <a className="hedingnews">17 Dec 19</a>{" "}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="news2d">
                          {" "}
                          <a href="#">
                            Industry Favours New GSTR Slow Implementation &amp;
                            4-digits HSN Code
                          </a>{" "}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="news2d">
                          {" "}
                          <a href="#">
                            Centre releases over Rs 35,000 crore as pending GST
                            compensation to states{" "}
                          </a>{" "}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="news2d">
                          {" "}
                          <a href="#">
                            States get GST dues ahead of key meet
                          </a>{" "}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="news2d">
                          {" "}
                          <a href="#">
                            Under Fire, Govt Releases Rs 35,298 Crore GST
                            Compensation to States
                          </a>{" "}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="news2d">
                          {" "}
                          <a href="#">
                            CBDT extends date for Third Instalment of Advance
                            Tax for FY 2019-20 in North Eastern States
                          </a>{" "}
                        </div>
                      </td>
                    </tr>
                  </table>
                </marquee>
              </div>
            </div>
            <div className="col-md-4">
              <div className="news-item-box">
                <h3>Due Date Reminder</h3>
                <table
                  id="ctl00_DataListGovind"
                  cellspacing="0"
                  border="0"
                  style={{borderCollapse:"collapse"}}
                >
                  <tbody>
                    <tr>
                      <td>
                        <a id="ctl00_DataListGovind_ctl00_lb1" href="#">
                          Jan
                        </a>
                      </td>
                      <td>
                        <a id="ctl00_DataListGovind_ctl01_lb1" href="#">
                          Feb
                        </a>
                      </td>
                      <td>
                        <a id="ctl00_DataListGovind_ctl02_lb1" href="#">
                          Mar
                        </a>
                      </td>
                      <td>
                        <a id="ctl00_DataListGovind_ctl03_lb1" href="#">
                          Apr
                        </a>
                      </td>
                      <td>
                        <a id="ctl00_DataListGovind_ctl04_lb1" href="#">
                          May
                        </a>
                      </td>
                      <td>
                        <a id="ctl00_DataListGovind_ctl05_lb1" href="#">
                          June
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a id="ctl00_DataListGovind_ctl06_lb1" href="#">
                          July
                        </a>
                      </td>
                      <td>
                        <a id="ctl00_DataListGovind_ctl07_lb1" href="#">
                          Aug
                        </a>
                      </td>
                      <td>
                        <a id="ctl00_DataListGovind_ctl08_lb1" href="#">
                          Sep
                        </a>
                      </td>
                      <td>
                        <a id="ctl00_DataListGovind_ctl09_lb1" href="#">
                          Oct
                        </a>
                      </td>
                      <td>
                        <a id="ctl00_DataListGovind_ctl10_lb1" href="#">
                          Nov
                        </a>
                      </td>
                      <td>
                        <a id="ctl00_DataListGovind_ctl11_lb1" href="#">
                          Dec
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a id="ctl00_DataListGovind_ctl12_lb1" href="#">
                          All
                        </a>
                      </td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <marquee
                  id="ml"
                  height="203"
                  direction="up"
                  srolldelay="20"
                  scrollamount="1"
                  onmouseover="this.stop();"
                  onmouseout="this.start();"
                >
                  <div className="news_blog">
                    {" "}
                    <span className="hedingnews">30 Dec 19</span>{" "}
                    <span className="arrownews">
                      furnishing of challan-cum-statement in respect of tax
                      deducted u/s 194-IA in month of November 19
                    </span>{" "}
                    <br />
                  </div>
                  <div className="news_blog">
                    {" "}
                    <span className="hedingnews">30 Dec 19</span>{" "}
                    <span className="arrownews">
                      Due date for furnishing of challan-cum-statement in
                      respect of tax deducted u/s 194-IB in month of November 19
                    </span>{" "}
                    <br />
                  </div>
                  <div className="news_blog">
                    {" "}
                    <span className="hedingnews">07 Jan 20</span>{" "}
                    <span className="arrownews">
                      Payment of TDS of December 2019 (For Govt deductors paying
                      through challan)
                    </span>{" "}
                    <br />
                  </div>
                  <div className="news_blog">
                    {" "}
                    <span className="hedingnews">11 Jan 20</span>{" "}
                    <span className="arrownews">
                      Filing of GSTR-1 for the month of Dec, 2019 , whose
                      turnover &gt; 1.5cr
                    </span>{" "}
                    <br />
                  </div>
                  <div className="news_blog">
                    {" "}
                    <span className="hedingnews">13 Jan 20</span>{" "}
                    <span className="arrownews">
                      Filing of GSTR-6 for input service distributor for the
                      month of December 2019
                    </span>{" "}
                    <br />
                  </div>
                </marquee>
              </div>
            </div>

            <div className="col-md-4">
              <div className="news-item-box">
                <h3>Blog News</h3>
                <marquee
                  id="m2"
                  height="283"
                  direction="up"
                  scrolldelay="20"
                  scrollamount="1"
                  onmouseover="this.stop();"
                  onmouseout="this.start();"
                >
                  <li className="Prodetails">
                    <span style={{fontWeight:"bold"}}>09 Dec 2019</span>{" "}
                    <span style={{fontWeight:"bold"}}>
                      <a target="_blank" href="#">
                        About Us
                      </a>{" "}
                      -
                    </span>
                    <span>
                      ASSOCIATES&nbsp;is a professional firm of Chartered
                      Accountants s...
                    </span>
                  </li>
                </marquee>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsSection;
