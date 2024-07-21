import HeartEmoji from "../assets/images/HeartEmoji.png";
import SmileEmoji from "../assets/images/smileEmoji.png";
import CoolEmoji from "../assets/images/coolEmoji.png";

const Emoji = () => {
  return (
    <>
      <div className="absolute top-[-50px] left-[100px]">
        <img src={SmileEmoji} alt="Heart" className="" />
      </div>
      <div className="absolute top-[-50px] right-[100px]">
        <img src={HeartEmoji} alt="Smile" className="" />
      </div>
      <div className="absolute top-[60px] right-[-10px]">
        <img src={CoolEmoji} alt="Cool" className="" />
      </div>
    </>
  );
};

export default Emoji;
