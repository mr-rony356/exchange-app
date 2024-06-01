import Image from "next/image";
import ImageCard from "./components/cards/ImageCard";
import ParcentageCard from "./components/cards/TextPercent";
import Hero from "./components/sections/Hero";
import LogosGrid from "./components/sections/LogoSection";
import Performance from "../public/images/perfromance.svg";
import AconomyCard from "../public/images/Aconomy Card.svg";
import PerformanceCard from "./components/cards/PerformanceCard";
import Button from "./components/Button";
import WealthCard from "./components/cards/WealthCard";
import Support from "../public/images/support.png";
import SubscriptionSection from "./components/sections/Subscription";

export default function Home() {
  return (
    <div className="flex flex-col  justify-between gap-16">
      <Hero />
      <LogosGrid />

        <div className="  pt-24 px-4 md:px-16 container mx-auto ">
          <div className="text">
            <p className="mb-6 text-sm text-orange-500">ACONOMY PLATFORM</p>
            <h1 className="text-3xl md:text-6xl w-full  md:max-w-3xl mb-24  ">
              Investing on the blockchain is a lucrative way for high returns in
              the current transformation of the financial markets.
            </h1>
          </div>
          <div className="card grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-16 md:gap-8 place-items-center">
            <ImageCard
              title="Simple Asset Allocation"
              subtitle="Easily allocate your investments across your chosen assets with just a few simple clicks."
              imageUrl="/images/firstcard.svg"
            />
            <ImageCard
              title="Simple Asset Allocation"
              subtitle="Easily allocate your investments across your chosen assets with just a few simple clicks."
              imageUrl="/images/firstcard.svg"
            />
            <ImageCard
              title="Simple Asset Allocation"
              subtitle="Easily allocate your investments across your chosen assets with just a few simple clicks."
              imageUrl="/images/firstcard.svg"
            />
            <ImageCard
              title="Simple Asset Allocation"
              subtitle="Easily allocate your investments across your chosen assets with just a few simple clicks."
              imageUrl="/images/firstcard.svg"
            />
          </div>
          <div className="my-16 card">
            <div className=" grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-16 md:gap-8 ">
              <ParcentageCard value="7.6" subtitle="Total Value Locked" />
              <ParcentageCard value="7.6" subtitle="Total Value Locked" />
              <ParcentageCard value="7.6" subtitle="Total Value Locked" />
              <ParcentageCard value="7.6" subtitle="Total Value Locked" />
              <ParcentageCard value="7.6" subtitle="Total Value Locked" />
            </div>
            <div>
              <p className="max-w-2xl text-sm text-gray-700">
                * Average yield per year, up to the given percentage. “Why ‘up
                to’?” you ask — because the APY on crypto and blockchain
                investments fluctuates based on variables both in the protocol
                and the market.
              </p>
            </div>
          </div>
        </div>
      <section className="radial-grad">
        <div className=" text-white pt-24 ">
          <div className="flex justify-end  items-end ">
            <div className="flex justify-start flex-col items-start  w-2/3 md:w-1/2">
              <div className="text-white text-4xl md:text-7xl  text-left">
                <span className="text-gray-500">E</span>
                <span className="text-gray-500">X</span>
                <span className="text-gray-600">P</span>
                <span className="text-gray-600">E</span>
                <span className="text-gray-600">R</span>
                <span className="text-gray-600">I</span>
                <span className="text-gray-700">E</span>
                <span className="text-gray-700">N</span>
                <span className="text-gray-700">C</span>
                <span className="text-gray-700">E</span>
              </div>
              <p className="text-white text-4xl md:text-7xl  text-left uppercase ">
                FINANCE 3.0 NOW
              </p>
            </div>
          </div>
          <div className="flex gap-8 flex-col md:flex-row items-center py-8  w-full container mx-auto md:px-16 px-4 !pr-0">
            <div className="w-full md:w-2/5">
              <p className="text-orange-500 uppercase">native cryptocurrency</p>
              <h1 className="my-8 text-3xl md:text-5xl">
                AEC: The platform's driving force.
              </h1>
              <div>
                <PerformanceCard
                  imageUrl="/images/dollar.svg"
                  title="Low Selling Pressure"
                  subtitle="No initial coin oRering (ICO) or airdrops, solely for growth-oriented investors"
                />
                <PerformanceCard
                  imageUrl="/images/dollar.svg"
                  title="Total Value Locked"
                  subtitle="7.6"
                />
                <PerformanceCard
                  imageUrl="/images/dollar.svg"
                  title="Total Value Locked"
                  subtitle="7.6"
                />
              </div>
              <div className="flex  gap-6 my-4">
                <Button text="READ MORE" type="apply" />
                <Button text="BUY EUM" type="discover" />
              </div>
            </div>
            <div className="w-full md:w-3/5">
              <Image src={Performance} alt="image" />
            </div>
          </div>
        </div>
        {/* <div className=" flex flex-col gap-12  text-white items-center  justify-center w-full">
          <div className="max-w-4xl text-center">
            <p className="text-orange-500 text-center my-8 ">ACONOMY CARD</p>
            <h1 className="text-center text-3xl md:text-5xl mb-24 ">
              Utilize cryptocurrency for <br /> transactions in over 46 million
              stores.
            </h1>
            <div className="flex justify-center">
              <Image src={AconomyCard} alt="image" />
            </div>
          </div>
        </div> */}
      </section>
      <section className="bg-black">
        <div className="container mx-auto md:px-16  px-4  text-white">
          <div className="flex items-center gap-8 flex-col md:flex-row">
            <div>
              <p className="text-orange-500 text-sm py-4">ACONOMY PLATFOMR</p>
              <h1 className="text-3xl md:text-5xl">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio,
                blanditiis!
              </h1>
            </div>
            <div>
              <p className="text-gray-500 text-lg">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Inventore officiis perferendis tempore odit enim consequuntur.
                Beatae omnis vitae provident sit optio similique laudantium
                neque minima?
              </p>
            </div>
          </div>
          <hr className="text-white w-full my-12" />
        </div>
      </section>
      <section>
        <div className="container mx-auto md:px-16  px-4  text-black">
          <h1 className="  text-4xl md:text-5xl max-w-2xl my-32 capitalize ">
            The Evolotion of <br /> Walth management
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
            <WealthCard
              title="title"
              subtitle={["First subtitle", "Second subtitle"]}
              imageUrl="/images/BTC.svg"
            />
            <WealthCard
              title="title"
              subtitle={["First subtitle", "Second subtitle"]}
              imageUrl="/images/BTC.svg"
            />
            <WealthCard
              title="title"
              subtitle={["First subtitle", "Second subtitle"]}
              imageUrl="/images/BTC.svg"
            />
          </div>
        </div>
      </section>
      <section className="bg-black text-white">
        <div className="container mx-auto md:px-16  px-4 ">
          <div className="text-center lg:mt-32 mt-16">
            <p className="text-orange-500 text-base py-4 ">SUPPORT</p>
            <h1 className="text-4x md:text-6xl">Lorem, ipsum dolor.</h1>
          </div>
          <div className="flex items-center flex-col md:flex-row gap-8">
            <div className="flex flex-col gap-8 w-full md:w-3/6">
              <div>
                <p className="text-xl md:text-2xl ">24/7 Support</p>
                <p className="py-2 text-gray-500 text-base">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate id repellat magni, veritatis corrupti voluptates?
                </p>
              </div>
              <div>
                <p className="text-xl md:text-2xl ">24/7 Support</p>
                <p className="py-2 text-gray-500 text-base">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate id repellat magni, veritatis corrupti voluptates?
                </p>
              </div>
              <div>
                <p className="text-xl md:text-2xl ">24/7 Support</p>
                <p className="py-2 text-gray-500 text-base">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate id repellat magni, veritatis corrupti voluptates?
                </p>
              </div>
              <div>
                <p className="text-xl md:text-2xl ">24/7 Support</p>
                <p className="py-2 text-gray-500 text-base">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Cupiditate id repellat magni, veritatis corrupti voluptates?
                </p>
              </div>
            </div>
            <div className="w-full md:w-3/6 ">
              <Image src={Support} alt="image" />
            </div>
          </div>
        </div>
      </section>
      <SubscriptionSection />
      {/* <section className="bg-black text-white">
      <div className="container mx-auto md:px-16  px-4 ">

        </div>
      </section> */}
    </div>
  );
}
