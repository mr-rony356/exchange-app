import ImageCard from "./components/cards/ImageCard";
import Hero from "./components/sections/Hero";
import LogosGrid from "./components/sections/LogoSection";

export default function Home() {
  return (
    <div className="flex flex-col  justify-between">
      <Hero />
      <LogosGrid />
      <section className="text-black  py-16 md:px-16 container mx-auto">
        <div className="text">
          <p>ACONOMY PLATFORM</p>
          <h1>
            Investing on the blockchain is a lucrative way for high returns in
            the current transformation of the financial markets.
          </h1>
        </div>
        <div className="card">
          <ImageCard title="Investment" subtitle="Investment" imageUrl="/images/firstcard.svg" />
        </div>
      </section>
    </div>
  );
}
