import Globe from "../assets/images/globe.png";
import UserImages from "../utils/userImage";
import Arc from "../assets/images/arc.png";
import Arc1 from "../assets/images/arc2.png";
import Arc2 from "../assets/images/arc3.png";
import Emoji from "./Emoji";
import Img11 from "../assets/images/user/map1.1.png";
import Img71 from "../assets/images/user/map7.1.png";
import Img72 from "../assets/images/user/map7.2.png";

const Map = () => {
  const radius = 350;
  const images = UserImages.map((imageSrc, index, array) => {
    const angle = (index / (array.length - 1)) * Math.PI; // Distribute over half-circle
    const x = radius + radius * Math.cos(angle); // Calculate x position
    const y = radius - radius * Math.sin(angle); // Calculate y position for top half-circle
    return (
      <img
        key={index}
        src={imageSrc}
        alt={`User ${index}`}
        style={{
          position: "absolute",
          left: `${x}px`,
          top: `${y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
    );
  });

  return (
    <>
      <div className="flex items-center justify-center relative mt-16">
        <Emoji />
        {/* main Arc  */}
        <div className="z-10">
          <img src={Arc} alt="Arc" className=" w-[695px] h-[390px] " />
          {images}
        </div>
        {/* Left Arc   */}
        <div className="absolute bottom-[-10px] left-[-100px]">
          <img src={Arc2} alt="Arc1" className="" />
        </div>
        <div className="absolute bottom-[-30px] left-[-130px]">
          <img src={Img11} alt="Arc1" className="" />
        </div>

        {/* Right Arc  */}
        <div className="absolute bottom-[150px] right-[-70px]">
          <img src={Arc1} alt="Arc2" className="rotate" />
        </div>
        <div className="absolute bottom-[210px] right-[-70px]">
          <img src={Img71} alt="Arc1" className="" />
        </div>
        <div className="absolute bottom-[140px] right-[-90px]">
          <img src={Img72} alt="Arc1" className="" />
        </div>

        {/* Globe  */}
        <div className="mt-[2rem] absolute top-3 ">
          <img src={Globe} alt="Globe" className="w-[599px] h-[455px]" />
        </div>
      </div>
    </>
  );
};

export default Map;
