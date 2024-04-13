/* eslint-disable react/prop-types */
import { star } from "../assets/icons";
const ProductCard = ({imgURL,price,name,rating}) => {
  return (
    <>
      <div className="flex flex-1 flex-col w-full max-sm:w-full">
        <img src={imgURL} alt={name} className="w-[282px] h-[282px]" />
        <div className="mt-8 flex justify-start gap-2.5">
          <img src={star} alt="rating icon" width={24} height={24} />
          <p className="font-montserrat text-xl leading-normal text-slate-gray ">
            {rating}
          </p>
        </div>
        <h3 className="mt-2 text-2xl leading-normal font-semibold font-palanquin drop-shadow-none">
          {name}
        </h3>
        <p className="mt-2 font-semibold font-montserrat text-coral-red text-2xl leading-normal drop-shadow-none">
          {price}
        </p>
      </div>
    </>
  );
};

export default ProductCard;
