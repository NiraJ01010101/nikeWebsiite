/* eslint-disable react/prop-types */
import { star } from "../assets/icons";
const ProductCard = ({ imgURL, price, name, rating }) => {
  return (
    <>
      <div
        className="flex flex-1 flex-col w-full max-sm:w-full p-4 rounded-xl dark:bg-gray-700"
        style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
      >
        <img src={imgURL} alt={name} className="w-[282px] h-[282px]" />
        <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="rating icon" width={24} height={24} />
          <p className="font-montserrat text-base sm:text-xl leading-normal text-slate-gray ">
            {rating}
          </p>
        </div>
        <h3 className="mt-2 md:text-2xl sm:text-lg text-base leading-normal font-semibold font-palanquin drop-shadow-none dark:text-slate-300">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red sm:text-xl text-lg leading-normal drop-shadow-none">
          {price}
        </p>
      </div>
    </>
  );
};

export default ProductCard;
