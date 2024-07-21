import Cards from "../components/card/Cards";
import Map from "../components/Map";
import VectorLine from "../assets/images/Vector.png";
const Features = () => {
  return (
    <section className="bg-secondary-light flex flex-col items-center justify-center w-full mt-[200px]  ">
      <hr className="w-[40%]  text-[#ccc] " />
      <div className="mt-12 ">
        <div className="absolute top-0 z-1">
          <img src={VectorLine} alt="" />
        </div>
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[2rem]  font-bold w-[900px]">
            FanCloud CDN network revolutionizes video infrastructure with
            community-driven Innovation
          </h2>
          <p className="text-[1rem] md:w-[800px] font-[500] mt-12 w-fit">
            FanCloud pioneers a new era of connectivity with its decentralised
            content delivery network (dCDN), leveraging a global network of
            community-powered nodes. By harnessing a decentralised architecture,
            dCDN drastically reduces data transfer and compute costs while
            enhancing load time. Join FanCloud’s dCDN network and experience the
            future of seamless, secure and community- driven consumption
          </p>
        </div>
      </div>
      <div className="mb-32">
        <Map />
      </div>
      <Cards />
    </section>
  );
};

export default Features;
