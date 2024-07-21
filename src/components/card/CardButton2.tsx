import Arrow from "../../assets/images/arrow-right.png";
const CardButton2 = () => {
  return (
    <div className="flex justify-end mt-12">
      <button className="text-dark  w-[200px] h-[60px] bg-white rounded-full  font-bold text-base flex items-center justify-center drop-shadow-lg border-b-4 border-[#ccc]">
        Deploy
        <img src={Arrow} alt="Arrow" className="ml-1" />
      </button>
    </div>
  );
};

export default CardButton2;
