import React from "react";
import { Button, Result } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function AdoptSuccess() {

    const navigate = useNavigate();

  const location = useLocation();
  const { name } = location.state;

  return (
    <>
      <NavBar />
      <Result
        status="success"
        title={`You can adopt ${name}!`}
        subTitle="Please visit your nearest PetAdopt center for more details."
        extra={[
          <Button key="home" onClick={() => navigate("/")}>
            Home
          </Button>,
        ]}
      />
      <Footer />
    </>
  );
}
