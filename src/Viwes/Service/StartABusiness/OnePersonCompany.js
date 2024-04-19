import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../../components/Layout";
import CommonBanner from "../../../components/CommonBanner";
import banner from "../../../assets/images/banner-8.jpg";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import CommonAboutSection from "../../../components/CommonAboutSection";
import {
  OnePersonCompanyAcboutText,
  OnePersonCompanyCardText,
} from "../../../constants/Paragram";
import CommonCard from "../../../components/Card/CommonCard";

const OnePersonCompany = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");

  useEffect(() => {
    if (OnePersonCompanyCardText) {
      setCardText1(OnePersonCompanyCardText[0]?.Single_Promoter);
      setCardText2(OnePersonCompanyCardText[1]?.Uninterrupted_Existence);
      setCardText3(OnePersonCompanyCardText[2]?.Easy_Transferability);
      setCardText4(OnePersonCompanyCardText[3]?.Borrowing_Capacity);
      setCardText5(OnePersonCompanyCardText[4]?.Owning_Property);
    }
  }, [OnePersonCompanyCardText]);
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="One Person Company" src={banner} />
      <CommonAboutSection
        text={OnePersonCompanyAcboutText}
        title="One Person"
        span="Company"
      />
      <CommonCard
        cardtilte="Reasons to Register a"
        cardspan="One Person Company"
        card1="Single Promoter"
        card1text={cardtext1}
        crad2="Uninterrupted Existence"
        cardtext2={cardtext2}
        card3="Easy Transferability"
        cardtext3={cardtext3}
        card4="Borrowing Capacity"
        cardtext4={cardtext4}
        card5="Owning Property"
        cardtext5={cardtext5}
      />

      <QuickEnquiryFrom />
      <Footer />
    </>
  );
};

export default OnePersonCompany;
