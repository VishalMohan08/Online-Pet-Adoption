import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import { Divider } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import NavBar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function PetPage() {
  const [images, setImages] = useState({
    img1: "https://images.unsplash.com/photo-1588022274642-f238f77ec193?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    img2: "https://images.unsplash.com/photo-1539555348673-7b2cc1ee62be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    img3: "https://images.unsplash.com/photo-1554456854-55a089fd4cb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    img4: "https://images.unsplash.com/photo-1579038144560-0cf69470be08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto.format&fit=crop&w=2070&q=80",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  const [petData, setPetData] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/public/pet/${id}`)
      .then((response) => {
        const data = response.data;
        setPetData(data);
      })
      .catch((error) => console.error("Error fetching pet data: ", error));
  }, [id]);

  const handleAdopt = () => {
    const petDTO = {
      id: petData.id,
      ownerUsername: localStorage.getItem("userName"),
    };

    const authToken = localStorage.getItem("authToken");

    console.log(petDTO);
    axios
      .post("/user/adopt/pet", petDTO, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          navigate("/adopted", { state: { name: petData.name } });
        }
      })
      .catch((error) => console.error("Error adopting the pet: ", error));
  };

  return (
    <>
      <NavBar />
      <div className="px-5">
        {petData && (
          <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
            <div className="flex flex-col gap-6 lg:w-2/4">
              <img
                src={activeImg}
                alt=""
                className="w-full h-full aspect-square object-cover rounded-xl"
              />
              <div className="flex flex-row justify-evenly">
                {Object.keys(images).map((imgKey, index) => (
                  <img
                    key={index}
                    src={images[imgKey]}
                    alt=""
                    className="w-24 h-24 rounded-md cursor-pointer"
                    onClick={() => setActiveImage(images[imgKey])}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4 lg:w-2/4 pr-5">
              <div className="pt-3">
                <span className="text-blue-600 font-semibold">
                  {petData.type}
                </span>
                <h1 className="text-3xl font-bold">{petData.name}</h1>
              </div>
              <p className="text-xl text-gray-700">{petData.description}</p>
              <div className="flex flex-row items-center gap-12">
                <button
                  className="bg-blue-600 text-white font-semibold py-3 px-16 rounded-xl h-full"
                  onClick={handleAdopt}
                >
                  Adopt!
                </button>
              </div>
              <Divider
                orientation="left"
                style={{ borderColor: "black", fontSize: "1.2rem" }}
              >
                Details
              </Divider>
              <Row>
                <Col span={12}>
                  <div className="flex text-lg">
                    <div className="font-semibold">Breed :&nbsp;</div>
                    <div>{petData.breed}</div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="flex text-lg">
                    <div className="font-semibold">Gender :&nbsp;</div>
                    <div>{petData.gender}</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={8}>
                  <div className="flex text-lg">
                    <div className="font-semibold">Age :&nbsp;</div>
                    <div>{petData.petMedical.age}</div>
                    <div>&nbsp;Year(s)</div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="flex text-lg">
                    <div className="font-semibold">Weight :&nbsp;</div>
                    <div>{petData.petMedical.weight}</div>
                    <div>&nbsp;Kg(s)</div>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="flex text-lg">
                    <div className="font-semibold">Height :&nbsp;</div>
                    <div>{petData.petMedical.height}</div>
                    <div>&nbsp;cm(s)</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div className="text-lg font-semibold">
                    Residential Address :&nbsp;
                    <span className="font-normal">{petData.address}</span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div className="text-lg font-semibold">
                    Diet :&nbsp;
                    <span className="font-normal">
                      {petData.petDiet.dietType}
                    </span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div className="text-lg font-semibold">
                    Allergies :&nbsp;
                    <span className="font-normal">
                      {petData.petDiet.allergies}
                    </span>
                  </div>
                </Col>
              </Row>
              <Row>
                <Divider
                  orientation="left"
                  style={{ borderColor: "black", fontSize: "1.2rem" }}
                >
                  Medical Records
                </Divider>
                <Col span={12}>
                  <div className="flex text-lg">
                    <div className="font-semibold">Vaccinated :&nbsp;</div>
                    <div>{petData.petMedical.vaccinated ? "Yes" : "No"}</div>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="flex text-lg">
                    <div className="font-semibold">
                      Recent Vaccination :&nbsp;
                    </div>
                    <div>{petData.petMedical.recentVaccination || "N/A"}</div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={24}>
                  <div className="text-lg font-semibold pb-5">
                    Medical History :&nbsp;
                    <span className="font-normal">
                      {petData.petMedical.medicalHistory}
                    </span>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}
