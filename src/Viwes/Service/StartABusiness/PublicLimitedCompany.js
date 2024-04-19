import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../../components/Layout";
import CommonBanner from "../../../components/CommonBanner";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import banner from "../../../assets/images/banner-8.jpg";
import {
  PublicLimitedCompanyAboutText,
  PublicLimitedCompanyCardText,
} from "../../../constants/Paragram";
import CommonAboutSection from "../../../components/CommonAboutSection";

const PublicLimitedCompany = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (PublicLimitedCompanyCardText) {
      setCardText1(PublicLimitedCompanyCardText[0]?.Separate_Legal_Entity);
      setCardText2(PublicLimitedCompanyCardText[1]?.Easy_Transferability);
      setCardText3(PublicLimitedCompanyCardText[2]?.Owning_Property);
      setCardText4(PublicLimitedCompanyCardText[3]?.Uninterrupted_Existance);
      setCardText5(PublicLimitedCompanyCardText[4]?.Borrowing_Capacity);
    }
  }, [PublicLimitedCompanyCardText]);
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="Public Limited Company" src={banner} />
      <CommonAboutSection
        text={PublicLimitedCompanyAboutText}
        title="Public Limited"
        span="Company"
      />
      <CommonCard
        cardtilte="Reasons to Register a Limited"
        cardspan="Company"
        card1="Separate Legal Entity"
        card1text={cardtext1}
        crad2="Easy Transferability"
        cardtext2={cardtext2}
        card3="Owning Property"
        cardtext3={cardtext3}
        card4="Uninterrupted Existence"
        cardtext4={cardtext4}
        card5="Borrowing Capacity"
        cardtext5={cardtext5}
      />
      <QuickEnquiryFrom />
      <Footer />
    </>
  );
};

export default PublicLimitedCompany;
