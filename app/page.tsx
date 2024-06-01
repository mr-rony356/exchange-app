import Image from "next/image";
import ImageCard from "./components/cards/ImageCard";
import Hero from "./components/sections/Hero";
import LogosGrid from "./components/sections/LogoSection";
import Performance from "../public/images/perfromance.svg";
import PerformanceCard from "./components/cards/PerformanceCard";
import Button from "./components/Button";
import WealthCard from "./components/cards/WealthCard";
import Support from "../public/images/support.png";
import SubscriptionSection from "./components/sections/Subscription";
import HeaderText from "./components/TextHeader";
import RoadmapSection from "./components/sections/Roadmap";
import Market from "../public/images/market.svg";
import Accordion from "./components/sections/Accordian";

export default function Home() {
  return (
    <div className="flex flex-col  justify-between gap-24 container mx-auto px-4 md:px-20">
      <Hero />
      <LogosGrid />

      <div className=" py-24">
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
      </div>

      <section className="relative">
        <div className="circle"></div>
        <div className=" text-white ">
          <div className="flex justify-end  items-end ">
            <div className="flex justify-start flex-col items-start  w-2/3 md:w-[55%]">
              <div className="text-white text-4xl md:text-[82px] leading-snug  text-left">
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
          <div className="flex gap-4 flex-col md:flex-row items-center py-8 relative  w-full">
            <div className="w-full md:w-1/2">
              <p className="text-orange-500 uppercase">native cryptocurrency</p>
              <HeaderText text="The Aconomy Platform is the driving force behind your access to the world of Earnings." />
              <div className="flex flex-col gap-12 -mt-6">
              <p className="text-gray-400 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum quis maxime neque hic. Atque repellat explicabo
                  aliquid eligendi voluptas! Autem.{" "}
                </p>
                <p className="text-gray-400 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum quis maxime neque hic. Atque repellat explicabo
                  aliquid eligendi voluptas! Autem.{" "}
                </p>
                <p className="text-gray-400 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum quis maxime neque hic. Atque repellat explicabo
                  aliquid eligendi voluptas! Autem.{" "}
                </p>
              </div>
              <div className=" my-10">
                <Button text="READ MORE" type="apply" />
              </div>
            </div>
            <div className="w-full md:w-1/2 ">
              <Image
                src={Performance}
                alt="image"
                className="xl:absolute top-24"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className=" text-white">
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
          <Accordion></Accordion>
        </div>
      </section>
      <section>
        <HeaderText
          text="The Evolution of /
          Wealth Management"
        />
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
      </section>
      <RoadmapSection />
      <section className="mt-6 lg:mt-48">
        <div className="w-full text-center flex justify-center">
          <Image src={Market} alt="image" objectFit="cover" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 place-items-center my-10">
        <PerformanceCard subtitle="With exclusive access to world-leading brands such as Apple, Amazon, Uber, Spotify, and more." imageUrl="/images/circular.svg" />
        <PerformanceCard subtitle="With exclusive access to world-leading brands such as Apple, Amazon, Uber, Spotify, and more." imageUrl="/images/circular.svg" />
        <PerformanceCard subtitle="With exclusive access to world-leading brands such as Apple, Amazon, Uber, Spotify, and more." imageUrl="/images/circular.svg" />
        <PerformanceCard subtitle="With exclusive access to world-leading brands such as Apple, Amazon, Uber, Spotify, and more." imageUrl="/images/circular.svg" />
        </div>
      </section>

      <section className="bg-black text-white">
        <div className="text-center mb-10">
          <p className="text-orange-500 text-base py-4 ">SUPPORT</p>
          <h1 className="text-4x md:text-6xl">
            Professional, Reliable, Secure
          </h1>
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
      </section>
      <SubscriptionSection />
    </div>
  );
}
