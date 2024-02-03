import React, { useState } from "react";
import { Col, Row } from "antd";
import { Divider } from "antd";
import { useSelector } from "react-redux";
import { selectFormData } from "../../../redux/formSlice";

export default function PetSummary() {
  const [images, setImages] = useState({
    img1: "https://images.unsplash.com/photo-1588022274642-f238f77ec193?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    img2: "https://images.unsplash.com/photo-1539555348673-7b2cc1ee62be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    img3: "https://images.unsplash.com/photo-1554456854-55a089fd4cb2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    img4: "https://images.unsplash.com/photo-1579038144560-0cf69470be08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  });

  const formData = useSelector(selectFormData);

  const [activeImg, setActiveImage] = useState(images.img1);

  return (
    <>
      <div className="px-5 pb-8">
        <div className="flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
          <div className="flex flex-col gap-6 lg:w-2/4">
            <img
              src={activeImg}
              alt=""
              className="w-full h-full aspect-square object-cover rounded-xl"
            />
            <div className="flex flex-row justify-evenly">
              <img
                src={images.img1}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img1)}
              />
              <img
                src={images.img2}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img2)}
              />
              <img
                src={images.img3}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img3)}
              />
              <img
                src={images.img4}
                alt=""
                className="w-24 h-24 rounded-md cursor-pointer"
                onClick={() => setActiveImage(images.img4)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 lg:w-2/4 pr-5">
            <div className="pt-3">
              <span className="text-blue-600 font-semibold">Type</span>
              <h1 className="text-3xl font-bold">{formData.petType}</h1>
            </div>
            <p className="text-xl text-gray-700">{formData.petDescription}</p>
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
                  <div className="">{formData.petBreed}</div>
                </div>
              </Col>
              <Col span={12}>
                <div className="flex text-lg">
                  <div className="font-semibold">Gender :&nbsp;</div>
                  <div className="">{formData.petGender}</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <div className="flex text-lg">
                  <div className="font-semibold">Age :&nbsp;</div>
                  <div>{formData.age}</div>
                  <div>&nbsp;Year(s)</div>
                </div>
              </Col>
              <Col span={8}>
                <div className="flex text-lg">
                  <div className="flex text-lg">
                    <div className="font-semibold">Weight :&nbsp;</div>
                    <div>{formData.weight}</div>
                    <div>&nbsp;Kg(s)</div>
                  </div>
                </div>
              </Col>
              <Col span={8}>
                <div className="flex text-lg">
                  <div className="flex text-lg">
                    <div className="font-semibold">Height :&nbsp;</div>
                    <div>{formData.height}</div>
                    <div>&nbsp;cm(s)</div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="text-lg font-semibold">
                  Residential Address :&nbsp;
                  <span className="font-normal">{formData.address}</span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="text-lg font-semibold">
                  Diet :&nbsp;
                  <span className="font-normal">{formData.diet}</span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="text-lg font-semibold">
                  Allergies :&nbsp;
                  <span className="font-normal">{formData.allergies}</span>
                </div>
              </Col>
            </Row>
            <Divider
              orientation="left"
              style={{ borderColor: "black", fontSize: "1.2rem" }}
            >
              Medical Records
            </Divider>
            <Row>
              <Col span={12}>
                <div className="flex text-lg">
                  <div className="font-semibold">Vaccinated:&nbsp;</div>
                  <div>{formData.vaccinationStatus}</div>
                </div>
              </Col>
              <Col span={12}>
                <div className="flex text-lg">
                  <div className="flex text-lg">
                    <div className="font-semibold">
                      Recent Vaccination :&nbsp;
                    </div>
                    <div>
                      {formData.vaccinationDate
                        ? formData.vaccinationDate
                        : "N/A"}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="text-lg font-semibold pb-5">
                  Medical History :&nbsp;
                  <span className="font-normal">{formData.medicalHistory}</span>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
}
