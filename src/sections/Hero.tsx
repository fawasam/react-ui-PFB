import GridLines from "../assets/images/gridLines.png";
import HeroCard from "../components/HeroCard";
import ImageSection from "../components/ImageSection";
import BtnImg from "../assets/images/btn.png";
const Hero = () => {
  return (
    <main className="  flex items-center justify-center relative flex-col w-full">
      <div className="">
        <div className="absolute top-0 left-0 right-0 ">
          <img src={GridLines} alt="" className="w-full h-full" />
        </div>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 0,
          }}
        >
          <div
            style={{
              width: "30vh",
              height: "100vh",
              backgroundColor: "#6B61FF",
              filter: "blur(2500px)",
            }}
          ></div>
        </div>
        <div className="flex flex-col items-center text-center">
          <h2
            className="text-[56px]  font-[800] w-[900px] uppercase mt-[12rem] tracking-tighter leading-[84px]"
            style={{
              background: "-webkit-linear-gradient(45deg ,#fff, #6B61FF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Empowering the Digital Era:
            <br /> Decentarlizing Entertainment
          </h2>
          <p className="text-[1rem] md:w-[800px] font-[500] mt-12 w-fit">
            Join the world’s first DePIN: Revolutionizing Content Streaming with
            faster, Safer <br /> and Cheaper Access
          </p>
          <button className="w-[200px] h-[56px] rounded-full bg-blue-dark mt-[2rem] z-10">
            Coming Soon{" "}
            <span>
              <img src={BtnImg} alt="btn" className="inline" />
            </span>
          </button>
        </div>
      </div>
      <ImageSection />
      <div className="grid grid-cols-2 gap-10 mt-[6rem] relative">
        <HeroCard title="No. of Node Operators" value="2000" option="" />
        <HeroCard
          title="Data Transferred in TB"
          value="12,000"
          option="last 30 days"
        />
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "30%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{
            width: "250px",
            height: "250px",
            backgroundColor: "#6B61FF",
            filter: "blur(1000px)",
          }}
        ></div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          right: "30%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          style={{
            overflow: "hidden",
            width: "250px",
            height: "250px",
            backgroundColor: "#6B61FF",
            filter: "blur(1000px)",
          }}
        ></div>
      </div>
    </main>
  );
};

export default Hero;
