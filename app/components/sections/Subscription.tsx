import React from "react";
import Button from "../Button";

const SubscriptionSection: React.FC = () => {
  return (
    <div className="text-orange-800 bg-black">
        <div className="subs-grad-section  pt-16 md:pt-32  pb-36 px-2 md:px-4">
          <div className="flex justify-center flex-col items-center mb-4 md:mb-2">
            <div className="text-white text-3xl md:text-7xl text-center w-full ">
              <span className="text-gray-500">B</span>
              <span className="text-gray-500">E</span>
              <span className="text-gray-600">C</span>
              <span className="text-gray-600">O</span>
              <span className="text-gray-600">M</span>
              <span className="text-gray-600">E</span>
              <span className="text-gray-700"> </span>
              <span className="text-gray-700">P</span>
              <span className="text-gray-700">A</span>
              <span className="text-gray-700">R</span>
              <span className="text-gray-700">T</span>
              <span> </span>
              <span className="text-gray-700">O</span>
              <span className="text-gray-700">F</span>
              <span className="text-gray-700"> </span>
              <span className="text-gray-700">T</span>
              <span className="text-gray-700">H</span>
              <span className="text-gray-700">E</span>
            </div>
            <h1 className="text-gray-100 text-2xl md:text-7xl mb-4">
              ACONOMY COMMUNITY
            </h1>
          </div>

          <p className="text-gray-300 mb-10 mx-auto text-center">
            Are you keen to dive deeper into Blockchain, Financial markets, and
            Aconomy? <br />
            Sign up with your email address to stay updated and never miss any{" "}
            <br /> important news or updates.
          </p>
          <form className="flex flex-col items-center md:items-start sm:flex-row justify-center gap-4">
            <span>
              <input
                type="email"
                placeholder="YOUR EMAIL"
                className="bg-gray-500 w-full md:w-[35vw] text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-500"
              />

              <div className="mt-4 flex items-start px-4 md:gap-2">
                <input
                  type="checkbox"
                  className="form-checkbox h-4 w-4 bg-gray-600 text-orange-600"
                />
                <span className="text-xs text-gray-500 text-center sm:text-left max-w-sm">
                  I agree to receive newsletters and promotional emails from
                  Aconomy (you can unsubscribe at any time).
                </span>
              </div>
            </span>
            <Button text="SIGN UP" type="apply" />
          </form>
        </div>
    </div>
  );
};

export default SubscriptionSection;
