import React, { useEffect, useState } from "react";
import { Footer, Header, Topbar } from "../../../components/Layout";
import CommonBanner from "../../../components/CommonBanner";
import CommonAboutSection from "../../../components/CommonAboutSection";
import CommonCard from "../../../components/Card/CommonCard";
import QuickEnquiryFrom from "../../../components/Forms/QuickEnquiryFrom";
import banner from "../../../assets/images/herobanner-1.jpg";
import {
  ESIReturnAboutText,
  ESIReturnCardText,
} from "../../../constants/Paragram";

const ESIReturn = () => {
  const [cardtext1, setCardText1] = useState("");
  const [cardtext2, setCardText2] = useState("");
  const [cardtext3, setCardText3] = useState("");
  const [cardtext4, setCardText4] = useState("");
  const [cardtext5, setCardText5] = useState("");
  const [cardtext6, setCardText6] = useState("");
  const [cardtext7, setCardText7] = useState("");
  const [cardtext8, setCardText8] = useState("");

  useEffect(() => {
    if (ESIReturnCardText) {
      setCardText1(ESIReturnCardText[0]?.ESI);
      setCardText2(ESIReturnCardText[1]?.ESI_Contribution);
      setCardText3(ESIReturnCardText[2]?.Continued_Compliance);
      setCardText4(ESIReturnCardText[3]?.ESI_Benefits);
      setCardText5(ESIReturnCardText[4]?.ESI_Registration);
      setCardText6(ESIReturnCardText[5]?.Document_Collection);
      setCardText7(ESIReturnCardText[6]?.Return_Prepartion);
      setCardText8(ESIReturnCardText[7]?.Return_Filing);
    }
  }, [ESIReturnCardText]);
  return (
    <>
      <Topbar />
      <Header />
      <CommonBanner text="ESI Return" src={banner} />
      <CommonAboutSection text={ESIReturnAboutText} title="ESI" span="Return" />
      <CommonCard
        cardtilte="Reasons to"
        cardspan="Register a ESI"
        card1="ESI"
        card1text={cardtext1}
        crad2="ESI Contribution"
        cardtext2={cardtext2}
        card3="Continued Compliance"
        cardtext3={cardtext3}
        card4="ESI Benefits"
        cardtext4={cardtext4}
        card5="ESI Registration"
        cardtext5={cardtext5}
        card6="Document_Collection"
        cardtext6={cardtext6}
        card7="Return Prepartion"
        cardtext7={cardtext7}
        card8="Return Filing"
        cardtext8={cardtext8}
      />
      <QuickEnquiryFrom />
      <Footer />
    </>
  );
};

export default ESIReturn;
