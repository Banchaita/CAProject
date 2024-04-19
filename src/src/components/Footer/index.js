import React from "react";
import { Layout } from "antd";
const { Footer } = Layout;

const Footer = () => {
  return (
    <>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Motu Grocery ©{new Date().getFullYear()} Created by Moc Con
      </Footer>
    </>
  );
};

export default Footer;
