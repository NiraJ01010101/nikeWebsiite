/* eslint-disable react/prop-types */
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div
      className="flex justify-center items-center flex-col rounded-lg p-6 sm:p-10 dark:bg-gray-700"
      style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
    >
      <img
        src={imgURL}
        alt="customer"
        className="rounded-full object-cover w-14 h-14 sm:w-32 sm:h-32"
      />
      <p className="mt-6 max-w-sm text-center info-text md:text-base text-sm dark:text-slate-50">{feedback}</p>
      <div className="mt-3 flex justify-center items-center gap-2.5">
        <img
          src={star}
          alt="rating star"
          className="object-contain m-0"
        />
        <p className="md:text-xl text-base font-montserrat text-slate-gray">{rating}</p>
      </div>
      <h3 className="mt-1 font-palanquin text-2xl sm:text-4xl text-center font-bold dark:text-slate-50">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
