import { TiTick } from "react-icons/ti";
const Card = ({ id, title, description, price, isSelected, onClick }) => {
  return (
    <div
      className="flex items-center justify-between "
      onClick={() => onClick(id)}
    >
      <div
        style={{
          border: "1px solid #2C2C2C",
        }}
        className={`flex w-full items-center justify-between p-4 m-2 border-[]  rounded-xl cursor-pointer ${
          isSelected ? "bg-[#FDFD35] shadow-inner" : "bg-transparent text-black"
        }`}
      >
        <div className="text-lg ">
          <span className="text-3xl font-medium">{id} </span>
          {title}
          <br />
          <span className="text-sm text-[#777]">{description}</span>
        </div>

        <div className="text-lg text-[#595959] font-normal">
          From Only <br />
          <span className="text-lg font-bold text-[#FE4446]">{price}</span>
        </div>
      </div>
      <div
        className={`aspect-square p-2 shadow-inner rounded-full ${
          isSelected ? "bg-[#FCFC35]" : "bg-[#FCFFEE]"
        }`}
      >
        <TiTick
          className={`${isSelected ? "text-[#000]" : "text-[#BDBD79]"}`}
        />
      </div>
    </div>
  );
};
export default Card;
