import BtnAdd from "../assets/images/btnAdd.png";

interface HeroCardProps {
  title: string;
  value: string;
  option: string;
}
const HeroCard = ({ title, value, option }: HeroCardProps) => {
  return (
    <div>
      <div className="w-[600px] h-[220px] bg-white rounded-2xl text-dark relative">
        <div className="p-6 ">
          <h2 className="text-[2rem]">
            {title}{" "}
            <span className="text-[1rem]">
              {option !== "" && "(" + option + ")"}
            </span>
          </h2>

          <span className="text-[5.3rem]">{value}</span>
          <img src={BtnAdd} alt="btn" className="absolute top-4 right-4" />
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
