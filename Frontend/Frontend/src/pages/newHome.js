import React from "react";
import NavBar from "../components/navbar";
import "../../src/pages/newHome.css";
import { Link } from "react-router-dom"; // Import Link
import ThreeDogs from "../assets/LandingPage/ThreeDogs.jpg";
import Dog from "../assets/LandingPage/Dog.jpg";
import Doooog from "../assets/LandingPage/HouseDog.jpg";
import Doog from "../assets/LandingPage/LandingDog.jpg";
import SleeptCat from "../assets/LandingPage/SleepCat.jpg";
import Footer from "../components/footer";

export default function LandingPage() {
  return (
    <>
      <NavBar />
      <div className="grotesk mx-auto ">
        <section className="w-full items-center justify-center ff356b 97ff35">
          <div className="mx-auto inline-block items-center p-3 pt-0 lg:flex lg:flex-wrap lg:pt-4 bg-[#fca311]">
            <div className="pl-10 lg:w-3/6 hover:underline text-white">
              <Link to="/allpets">
                <h2 className="max-w-xl lg:text-[4.2em] text-3xl hover:underline font-bold leading-none text-white inline-block">
                  Discover adorable furry companions!{" "}
                </h2>

                <p className="mt-6 max-w-2xl text-xl font-semibold text-white">
                  Find loving homes for your furry friends!{" "}
                </p>
              </Link>
            </div>
            <div className="mb-20 mt-44 hidden w-full flex-col lg:mt-12 lg:inline-block lg:w-3/6">
              <img src={ThreeDogs} alt="Hero" />
            </div>
          </div>
          <h2 className="pt-14 pb-4 text-2xl font-bold text-white lg:text-3xl text-center bg-[#14213d]">
            Adopt a Loving Companion Today!
          </h2>
          <div className="mt- text-center bg-[#14213d] text-white hover:underline">
            <Link to="/faq">
              <h2 className="mb-4 text-4xl font-bold sm:text-5xl">
                About Our Pet Adoption Program
              </h2>
            </Link>
            <div className="text-white">
              <div
                className="
                max-w-9xl
                mx-auto
                flex
                flex-col
                items-center
                justify-center
                px-5
              "
              >
                <div className="mr-0 mb-6 w-full text-center lg:w-2/3">
                  <p className="mb-4 text-lg leading-relaxed">
                    At our pet adoption program, we are dedicated to finding
                    loving homes for animals in need. Our mission is to provide
                    a safe and caring environment for every pet we rescue.
                  </p>
                </div>
                <img
                  className="
                  lg:w-5/7
                  mb-40
                  hidden
                  w-5/6
                  rounded object-cover
                  object-center
                  lg:inline-block 
                  lg:w-4/6
                "
                  src={Dog}
                  alt="img"
                />

                <img
                  className="
                mb-24
                inline-block
                w-5/6
                rounded
                object-cover object-center
                lg:hidden
                lg:w-4/6 
              "
                  src={ThreeDogs}
                  alt="img"
                />
              </div>
            </div>
          </div>
          <div className="bg-white text-white ">
            <div className="mx-auto flex flex-col items-center px-5 lg:flex-row bg-[#ffb703]">
              <div className="mb-16 flex flex-col text-left hover:underline lg:mb-0 lg:w-1/2 lg:flex-grow lg:items-start lg:pr-16 lg:pr-6 text-white">
              <Link to="/allpets">

                <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl ">
                  Help Us Save More Lives!
                </h2>
                <p className="font-3xl mb-8 font-semibold leading-relaxed text-white">
                  Your support matters. Together, we can make a difference in
                  the lives of these animals. Join us in our mission to provide
                  them with a better future.
                </p>
</Link>
              </div>
              <div className="lg:w-full lg:max-w-2xl">
                <img src={SleeptCat} alt="img" />
              </div>
            </div>
            <div className="bg-[#219ebc] text-white">
              <div className="mx-auto flex flex-col px-5 text-left lg:flex-row">
                <div className="hidden lg:inline-block lg:w-full lg:max-w-xl">
                  <img src={Doooog} alt="img" />
                </div>
                <div className="flex flex-col pt-0 text-left hover:underline lg:w-1/2 lg:flex-grow lg:items-start lg:pl-16 lg:pl-24 lg:pt-24">
                <Link to="/newpet">

                  <h2 className="mb-4 text-4xl font-bold leading-none sm:text-5xl">
                    Find a Loving Home for Your Pet!{" "}
                  </h2>
                  <p className="mb-8 font-semibold leading-relaxed text-white">
                    Discover a warm and caring home for your beloved pet! Our
                    platform connects pet owners with compassionate families,
                    ensuring a loving environment for your furry friend's
                    happiness.
                  </p>
                  </Link>
                </div>
                <div className="inline-block lg:hidden lg:w-full lg:max-w-xl">
                  <img src={ThreeDogs} alt="img" />
                </div>
              </div>
            </div>
            <div className="mx-auto bg-[#f7a072]">
              <div className="max-w-8xl mx-auto px-5 pt-10 lg:px-24">
                <div className="mt-6 flex w-full flex-col text-left lg:text-center">
                  <h3 className="text-5xl font-bold text-white">
                    Help Us Make a Difference!
                  </h3>
                </div>
              </div>
            </div>
            <div className="text-white bg-[#f7a072]">
              <div className="max-w-8xl mx-auto flex flex-col px-5 py-10 text-white lg:flex-row">
                <div className="lg:mb-0 lg:w-full lg:max-w-xl">
                  <img
                    className="rounded object-cover object-center"
                    alt="image"
                    src={Doog}
                  />
                </div>
                <div className="items-left flex flex-col pt-8 text-left lg:w-1/2 lg:flex-grow lg:items-start lg:pl-32 lg:pl-48 lg:text-left">
                  <h2 className="mb-2 text-lg leading-tight text-black sm:text-lg">
                    Adopt a Pet, Save a Life!
                  </h2>
                  <h2 className="mb-6 text-lg font-bold sm:text-lg">
                    Be a Hero.
                  </h2>
                  <h2 className="mb-4 text-3xl font-bold sm:text-3xl">
                    Every pet deserves a loving home. Make a difference by
                    adopting a furry friend today.
                  </h2>
                  <a
                    href="/allpets"
                    className="underline mt-12 text-lg font-bold leading-relaxed"
                  >
                    Explore Our Pets
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
