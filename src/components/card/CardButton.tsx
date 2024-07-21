interface CardButtonProps {
  buttonTitle: string;
  btnBgColor: string;
  btnBorderColor: string;
}
const CardButton = ({
  buttonTitle,
  btnBgColor,
  btnBorderColor,
}: CardButtonProps) => {
  console.log(btnBorderColor);

  return (
    <div className="absolute bottom-6 right-6 z-10">
      <button
        className={`w-[130px] h-[35px] ${btnBgColor} rounded-3xl border-4 ${btnBorderColor} text-white font-bold text-[1rem] transform rotate-[-12.8deg] `}
      >
        {buttonTitle}
      </button>
    </div>
  );
};

export default CardButton;
