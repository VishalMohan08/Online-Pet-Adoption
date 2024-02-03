import React, { useState } from "react";
import { Col, Row } from "antd";
import { Divider } from "antd";
import NavBar from "../../../components/navbar";
import Footer from "../../../components/footer";

export default function PetPage2() {
  const [images, setImages] = useState({
    img1: "https://images.unsplash.com/photo-1567355187824-332fc4c3dcb4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80",
    img2: "https://images.unsplash.com/photo-1622177577032-326d38124646?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",
    img3: "https://images.unsplash.com/photo-1622177577091-e0cfebddffed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1886&q=80",
    img4: "https://images.unsplash.com/photo-1661214955614-c42171f2a5a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  });

  const [activeImg, setActiveImage] = useState(images.img1);

  return (
    <>
      <NavBar />
      <div className="px-5">
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
              <span className=" text-blue-600 font-semibold">Cat</span>
              <h1 className="text-3xl font-bold">Luna</h1>
            </div>
            <p className="text-xl text-gray-700">
              Luna, our one-year-old feline enchantress, is a bundle of energy
              and curiosity. With sleek ebony fur and striking moonlit eyes,
              she's a picture of elegance. Her playful antics brighten our home,
              as she pounces on toys and explores every nook. Luna's purrs and
              cuddles make her a cherished member of our family.{" "}
            </p>
            {/*<h6 className="text-2xl font-semibold">Rs. 4000.00</h6>*/}
            <div className="flex flex-row items-center gap-12">
              <button className="bg-blue-600 text-white font-semibold py-3 px-16 rounded-xl h-full">
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
                  <div className="">Birman</div>
                </div>
              </Col>
              <Col span={12}>
                <div className="flex text-lg">
                  <div className="font-semibold">Gender :&nbsp;</div>
                  <div className="">Female</div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={8}>
                <div className="flex text-lg">
                  <div className="font-semibold">Age :&nbsp;</div>
                  <div>1</div>
                  <div>&nbsp;Year(s)</div>
                </div>
              </Col>
              <Col span={8}>
                <div className="flex text-lg">
                  <div className="flex text-lg">
                    <div className="font-semibold">Weight :&nbsp;</div>
                    <div>5.4</div>
                    <div>&nbsp;Kg(s)</div>
                  </div>
                </div>
              </Col>
              <Col span={8}>
                <div className="flex text-lg">
                  <div className="flex text-lg">
                    <div className="font-semibold">Height :&nbsp;</div>
                    <div>35.6</div>
                    <div>&nbsp;cm(s)</div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="text-lg font-semibold">
                  Diet :&nbsp;
                  <span className=" font-normal">
                    Luna's diet consists of high-quality cat food, both dry and
                    wet, tailored to her age and nutritional needs. She enjoys a
                    balanced mix of protein, carbohydrates, and essential
                    nutrients. We feed her twice a day, with portions
                    recommended by our vet, and always provide fresh water. Luna
                    occasionally savors cat-safe treats but maintains a healthy
                    weight through portion control.
                  </span>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="text-lg font-semibold">
                  Allergies :&nbsp;
                  <span className=" font-normal">
                    To manage her pollen allergy, we keep her indoors during
                    peak pollen seasons, ensuring clean and filtered air
                    indoors. Regular grooming helps remove pollen from her fur.
                    Our vet prescribed allergy medication to ease her symptoms,
                    and we use hypoallergenic cat litter to minimize irritants.
                    Luna's comfort and well-being are our top priorities.
                  </span>
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
                  <div className="font-semibold">Vaccinated :&nbsp;</div>
                  <div>Yes</div>
                </div>
              </Col>
              <Col span={12}>
                <div className="flex text-lg">
                  <div className="flex text-lg">
                    <div className="font-semibold">
                      Recent Vaccination :&nbsp;
                    </div>
                    <div>20/08/2023</div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <div className="text-lg font-semibold pb-5">
                  Medical History :&nbsp;
                  <span className=" font-normal">
                    Healthy
                  </span>
                </div>
              </Col>
            </Row>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
