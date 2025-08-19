import Image from "./Image";

const CustomerItem = ({ imgsrc, title, subtitle }) => {
  return (
    <div className="text-center mt-[70px]">
      <div className="mx-auto w-[58px] h-[58px]  rounded-full bg-black flex justify-center items-center border-[10px] border-gray-400">
        <Image className="w-[70%]" src={imgsrc} />
      </div>
      <h3 className="mt-5 font-poppins font-semibold text-md lg:text-[20px] text-black-black leading-8">{title}</h3>
      <h4 className="font-poppins font-normal text-xs lg:text-[14px] leading-5 text-black">{subtitle}</h4>
    </div>
  );
};

export default CustomerItem;
