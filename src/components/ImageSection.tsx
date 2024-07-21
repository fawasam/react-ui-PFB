import { HeroImages } from "../utils/userImage";
import Element1 from "../assets/images/hero/element1.png";
import Element2 from "../assets/images/hero/element2.png";
import Element3 from "../assets/images/hero/element3.png";

const ImageSection = () => {
  return (
    <section className="w-[40%] m-auto z-0 relative">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%",
          margin: "auto",
        }}
      >
        {HeroImages.map((imgUrl, index) => (
          <img
            key={index}
            src={imgUrl}
            alt={`Hero Image ${index + 1}`}
            className={"animate "}
            style={{
              height: "auto",
              alignSelf: index % 2 !== 0 ? "flex-start" : "flex-end",
            }}
          />
        ))}
      </div>
      <div className="absolute top-[-20px] left-[-100px]">
        <img src={Element1} alt="element1" />
      </div>
      <div className="absolute top-[70%] left-[50px]">
        <img src={Element2} alt="element2" />
      </div>
      <div className="absolute top-[30%] right-[-70px]">
        <img src={Element3} alt="element3" />
      </div>
    </section>
  );
};

export default ImageSection;
