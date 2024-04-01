import React from "react";
import Lottie from "lottie-react";
import homepage from "../assets/homepage.png";
import animationD from "../assets/phone4.json";
import GX from "../assets/GX.png";
import { BiFace, BiSolidBank, BiCode } from "react-icons/bi";

const Home = () => {
  return (
    <div className=" bg-[#e1ebe0]">
      <div className="md:px-12 px-6 gap-2 grid md:grid-cols-2 m-auto">
        <div className="my-auto mx-auto">
          <h1 className=" font-bold font-inter text-[#244334] text-4xl md:text-6xl leading-tight ">
            Elevate Your Wealth With Our Seamless Wallet Solution
          </h1>
          <p className="py-8 text-[#244334] leading-relaxed">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In facilis
            fugit cupiditate sequi, magni, placeat asperiores hic, nam quae ipsa
            nulla? Aspernatur nihil corrupti quo.
          </p>
          <div className=" flex ">
            <button className="py-1 px-3 border-1 rounded-md text-white bg-[#244334]">
              Sign Up
            </button>
            <button className="py-1 px-3 border-1 rounded-md">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <Lottie animationData={animationD} className=" h-[100%] " />
        </div>
      </div>
      <div className="bg-white h-[70vh]">
        <div className="p-8 mx-auto grid md:grid-cols-2">
          <div>
            <img src={homepage} alt="pictures" className=" h-[70%]" />
          </div>
          <div className="my-12">
            <div className="mx-12">
              <h1 className=" font-extrabold  text-4xl text-[#244334] ">
                Introducting The Wallet
              </h1>
              <p className="pt-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
                repellat?
              </p>
              <p className="py-4">
                Why Choose Us
                <ul className=" list-disc px-8">
                  <li>Option One</li>
                  <li>Option two</li>
                  <li>Option three</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#e1ebe0] h-[90vh]">
        <div className="grid md:grid-cols-2 p-8">
          <div className="my-8">
            <h1 className="font-extrabold text-4xl my-4 text-[#244334]">
              Second Heading
            </h1>

            <p className="mt-52">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repudiandae architecto ex adipisci nobis, libero harum, iste a
              dolores impedit sapiente veniam natus et ipsum excepturi vitae
              suscipit minus, quae repellendus sit itaque illo sequi dolorum
              ipsa? Facilis excepturi sunt, animi hic eligendi, magnam fugiat
              quo asperiores, quidem officia tenetur mollitia.
            </p>
          </div>
          <div>
            <img src={GX} alt="alternative" className="h-[70%]" />
          </div>
        </div>
      </div>

      <div className="bg-white py-8">
        <h1 className="text-center font-extrabold text-2xl ">How It Works</h1>
        <div className="p-8 grid md:grid-cols-3 gap-6 justify-center text-center">
          <div className=" justify-center text-center">
            <p>
              <BiFace size={35} className="mx-auto text-[#244334]" />
            </p>
            <h1 className="font-bold text-xl py-4">Individuals</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              enim cum repudiandae blanditiis rerum rem nulla illo saepe,
              repellat dignissimos.
            </p>
          </div>
          <div>
            <BiSolidBank size={35} className="mx-auto text-[#244334]" />
            <h1 className="font-bold text-xl py-4 ">Businesses</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              enim cum repudiandae blanditiis rerum rem nulla illo saepe,
              repellat dignissimos.
            </p>
          </div>
          <div className="justify-center">
            <BiCode className="mx-auto text-[#244334]" size={35} />
            <h1 className="font-bold text-xl py-4">Developers</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
              enim cum repudiandae blanditiis rerum rem nulla illo saepe,
              repellat dignissimos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
