import Pattern from "../../assets/images/Pattern.png";
import CardButton from "./CardButton";
import CardButton2 from "./CardButton2";
interface CardUIProps {
  title: string;
  description: string;
  bgColor: string;
  textColor?: string;
  buttonTitle: string;
  btnBgColor: string;
  btnBorderColor: string;
  isBtn1?: boolean;
}

const CardUI = ({
  title,
  description,
  bgColor,
  textColor,
  buttonTitle,
  btnBgColor,
  btnBorderColor,
  isBtn1,
}: CardUIProps) => {
  console.log(bgColor);

  return (
    <div className={`w-[400px] h-[260px] rounded-3xl   relative ${bgColor}`}>
      <div
        className={`flex flex-col p-6   ${
          textColor ? "text-${textColor}" : "text-dark"
        } `}
      >
        <h2 className="text-heading2 font-[500] mb-4">{title}</h2>
        <p className="leading-tight font-[400]">{description}</p>
        {!isBtn1 ? (
          <CardButton
            buttonTitle={buttonTitle}
            btnBgColor={btnBgColor}
            btnBorderColor={btnBorderColor}
          />
        ) : (
          <CardButton2 />
        )}
        <img
          src={Pattern}
          alt="Pattern"
          className="absolute bottom-0 right-0"
        />
      </div>
    </div>
  );
};

export default CardUI;
