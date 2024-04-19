import React, { useState } from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";

export default function Header() {
  const [openBasic, setOpenBasic] = useState(false);

  return (
    <>
      <MDBNavbar expand="lg" light bgColor="light">
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenBasic(!openBasic)}
          >
            <MDBIcon icon="bars" fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar open={openBasic}>
            <MDBNavbarNav
              className="mx-auto mb-2 mb-lg-0"
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <MDBNavbarItem>
                <MDBNavbarLink active aria-current="page" href="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/about">About</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Service
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem>
                      <MDBNavbarLink href="#">
                        <a href="/start_a_business">Start a Business</a>
                      </MDBNavbarLink>
                      <ul className="dropdown-menu dropdown-submenu">
                        <MDBDropdownItem>
                          <MDBNavbarLink>
                            <a href="/service/start_a_business/proprietorship">
                              {" "}
                              Proprietorship
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/start_a_business/partnership">
                              {" "}
                              Partnership
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/start_a_business/one_person_company">
                              {" "}
                              One Person Company
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/start_a_business/limited_liability_partnership">
                              {" "}
                              Limited Liability Partnership
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/start_a_business/private_limited_company">
                              {" "}
                              Private Limited Company
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/start_a_business/public_limited_company">
                              {" "}
                              Public Limited Company
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                      </ul>
                    </MDBDropdownItem>

                    <MDBDropdownItem>
                      <MDBNavbarLink href="#">
                        <a href="http://">Registrations</a>
                      </MDBNavbarLink>
                      <ul className="dropdown-menu dropdown-submenu">
                        <MDBDropdownItem>
                          <MDBNavbarLink>
                            <a href="http://"> GST Registration</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://">
                              {" "}
                              GST Registration For Foreigners
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://"> Temporary GST Registration</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://"> Professional Tax</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://"> Tan Registration </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://"> PF Registration</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>

                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://"> ESI Registration</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://"> MSME Registration</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://"> Import Export Code</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://"> Fssai Registration</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://"> Digital Signature</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://"> Trade License</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                      </ul>
                    </MDBDropdownItem>

                    <MDBNavbarItem>
                      <MDBNavbarLink href="#">
                        <a href="http://">Auditing</a>
                      </MDBNavbarLink>
                    </MDBNavbarItem>

                    <MDBDropdownItem>
                      <MDBNavbarLink href="#">
                        <a>Compliance</a>
                      </MDBNavbarLink>
                      <ul className="dropdown-menu dropdown-submenu">
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/compliance/change_company_name">
                              Change Company Name
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/compliance/registered_office_change">Registered office Change</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://"> Add Directors</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/compliance/remove_directors">
                              {" "}
                              Remove Directors
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/compliance/increase_authorized_capital">
                              {" "}
                              Increase Authorized Capital{" "}
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/compliance/share_transfer">
                              {" "}
                              Share Transfer
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>

                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/compliance/MOA_amendment">
                              {" "}
                              Moa Amendment
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/compliance/add_partner">
                              {" "}
                              Add Partner
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/compliance/winding_up_of_company">
                              {" "}
                              Winding up of company
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/compliance/winding_up_of_LLP">
                              {" "}
                              Winding up of LLP
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                      </ul>
                    </MDBDropdownItem>

                    <MDBDropdownItem>
                      <MDBNavbarLink href="#">
                        <a href="">Tax Filing</a>
                      </MDBNavbarLink>
                      <ul className="dropdown-menu dropdown-submenu">
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/tax_filing/business_tax_filing">
                              Business Tax Filing
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/tax_filing/TDS_return">
                              TDS Return
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/tax_filing/ESI_return">
                              ESI Return
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/tax_filing/cancel_GST_registration">
                              Cancel GST Registrations
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                      </ul>
                    </MDBDropdownItem>

                    <MDBDropdownItem>
                      <MDBNavbarLink href="#">
                        <a href="">Funding</a>
                      </MDBNavbarLink>
                      <ul className="dropdown-menu dropdown-submenu">
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/funding/business_plan_preparation">
                              Business Plan Preparation
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/funding/CMA_report_preparation">
                              CMA Report Preparation
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/funding/bank_loan_rating">
                              Bank Lone Rating
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/funding/credit_score_check">
                              Credit Score Check
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/funding/term_loan">Team Lone</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/funding/working_capital">
                              Working Capital{" "}
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/funding/collateral_free_loan">
                              Collateral Freelone
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="/service/funding/bank_loan_syndication">
                              Bank Lone Syndication
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                      </ul>
                    </MDBDropdownItem>

                    <MDBNavbarItem>
                      <MDBNavbarLink href="#">
                        <a href="http://">Document Center</a>
                      </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                      <MDBNavbarLink href="#">
                        <a href="http://">Tax Planning</a>
                      </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                      <MDBNavbarLink href="#">
                        <a href="http://">SSI (Aadhar Udyog Registration)</a>
                      </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                      <MDBNavbarLink href="#">
                        <a href="http://">ISO Certification</a>
                      </MDBNavbarLink>
                    </MDBNavbarItem>
                    <MDBNavbarItem>
                      <MDBNavbarLink href="#">
                        <a href="http://">
                          Shop & Act Establishment Registration
                        </a>
                      </MDBNavbarLink>
                    </MDBNavbarItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    Knowledge Bank
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBDropdownItem link>Calculators</MDBDropdownItem>
                    <MDBDropdownItem link>Acts</MDBDropdownItem>
                    <MDBDropdownItem>
                      <MDBNavbarLink href="#">
                        <a href="http://">Rules</a>
                      </MDBNavbarLink>
                      <ul className="dropdown-menu dropdown-submenu">
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://">Direct Tax Rules</a>
                          </MDBNavbarLink>
                          <ul className="dropdown-menu dropdown-submenu two-submenu">
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Income Tax Rule</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Wealth Tax Rule 1957</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">
                                  Income Declaration Scheme Rule 2016
                                </a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                          </ul>
                        </MDBDropdownItem>

                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://">Indirect Tax Rules</a>
                          </MDBNavbarLink>
                          <ul className="dropdown-menu dropdown-submenu two-submenu">
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">GST Valuation Rules 2016</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Service Tax Rules</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">
                                  Central Sales Tax (Delhi) Rules 2005
                                </a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">
                                  Central Sales Tax (Maharashtra) Rules
                                </a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Customs Valuation Rules</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Cenvat Credit Rules 2017</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Entry Tax Rules</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                          </ul>
                        </MDBDropdownItem>

                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://">Corporate Laws Rules</a>
                          </MDBNavbarLink>
                          <ul className="dropdown-menu dropdown-submenu two-submenu">
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Companies Rules 2014</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">
                                  Limited Liability Partnership Rules 2009
                                </a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">LLP Winding up Rules 2012</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">
                                  The Companies Unpaid Dividend Rules 1978
                                </a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                          </ul>
                        </MDBDropdownItem>

                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://">VAT Laws Rules</a>
                          </MDBNavbarLink>
                          <ul className="dropdown-menu dropdown-submenu two-submenu">
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">
                                  Delhi Value Added Tax Rules 2005
                                </a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">
                                  Maharashtra Value Added Tax Rules 2005
                                </a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">
                                  West Bengal Value Added Tax Act 2003
                                </a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Tamilnadu VAT Rules 2007</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">
                                  Punjab Value Added Tax Rules
                                </a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                          </ul>
                        </MDBDropdownItem>

                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://">Other States</a>
                          </MDBNavbarLink>
                          <ul className="dropdown-menu dropdown-submenu two-submenu">
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Profession Tax Rules</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">
                                  NBFC Acceptance of Public Deposits Reserve
                                  Bank Directions 1998
                                </a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">
                                  NBFC and Miscellaneous Non-Banking
                                  CompaniesAdvertisement_Rules_1977
                                </a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Tamilnadu VAT Rules 2007</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">
                                  Punjab Value Added Tax Rules
                                </a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                          </ul>
                        </MDBDropdownItem>

                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://">GST Rules</a>
                          </MDBNavbarLink>
                          <ul className="dropdown-menu dropdown-submenu two-submenu">
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">CGST Rules 2017</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">IGST Rules 2017</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                          </ul>
                        </MDBDropdownItem>
                      </ul>
                    </MDBDropdownItem>

                    <MDBDropdownItem>
                      <MDBNavbarLink href="#">
                        <a href="http://">Forms</a>
                      </MDBNavbarLink>
                      <ul className="dropdown-menu dropdown-submenu">
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://">Income Tax Forms</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://">ROC Forms (Cas Act 2013)</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://">ROC Forms (Cas Act 1956)</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://">Income Declaration Forms</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://">Wealth Tax Forms</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://">
                              Companies Unpaid Dividend Forms
                            </a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://">NBFCS Forms</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://">LLP Winding Up</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://">FEMA Forms</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>
                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://">LLP Forms</a>
                          </MDBNavbarLink>
                        </MDBDropdownItem>

                        <MDBDropdownItem>
                          <MDBNavbarLink href="#">
                            <a href="http://">CGST Forms</a>
                          </MDBNavbarLink>
                          <ul className="dropdown-menu dropdown-submenu">
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">GST Forms</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Accounts and Records</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Advance Ruling</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Appeals and Revision</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Assessment and audit</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Composition</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Demands and Recovery</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Input Tax Credit</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">
                                  Inspection, Search and Seizure
                                </a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Offences and Penalties</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Offences and Penalties</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Payment Tax</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Refund</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Registration</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Returns</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Transitional Provisions</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                            <MDBDropdownItem>
                              <MDBNavbarLink href="#">
                                <a href="http://">Value of Supply</a>
                              </MDBNavbarLink>
                            </MDBDropdownItem>
                          </ul>
                        </MDBDropdownItem>
                      </ul>
                    </MDBDropdownItem>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="#">Careers</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/contactus">Contacts Us</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/payment">Payment</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
