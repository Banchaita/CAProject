import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../../components/Layout";
import CommonBanner from "../../../components/CommonBanner";
import CommonAboutSection from "../../../components/CommonAboutSection";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import banner from "../../../assets/images/herobanner-1.jpg";
import {
  BusinessTaxFilingAboutText,
  BusinessTaxFilingCardText,
} from "../../../constants/Paragram";

const BusinessTaxFiling = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (BusinessTaxFilingCardText) {
      setCardText1(BusinessTaxFilingCardText[0]?.Dedicated_Advisor);
      setCardText2(BusinessTaxFilingCardText[1]?.Accounting);
      setCardText3(BusinessTaxFilingCardText[2]?.GST_Return_Filing);
      setCardText4(BusinessTaxFilingCardText[3]?.Income_Tax_Return_Filing);
      setCardText5(BusinessTaxFilingCardText[4]?.TDS_Return_Filing);
    }
  }, [BusinessTaxFilingCardText]);
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="Business Tax Filing" src={banner} />
      <CommonAboutSection
        text={BusinessTaxFilingAboutText}
        title="Business Tax"
        span="Filing"
      />
      <CommonCard
        cardtilte="Purminder Kaur & Associates Business"
        cardspan="Tax Filing Service Includes"
        card1="Dedicated Advisor"
        card1text={cardtext1}
        crad2="Accounting"
        cardtext2={cardtext2}
        card3="GST Return Filing"
        cardtext3={cardtext3}
        card4="Income Tax Return Filing"
        cardtext4={cardtext4}
        card5="TDS Return Filing"
        cardtext5={cardtext5}
      />
      <QuickEnquiryFrom />
      <Footer />
    </>
  );
};

export default BusinessTaxFiling;
