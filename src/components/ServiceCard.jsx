/* eslint-disable react/prop-types */
const ServiceCard = ({ imgURL, label, subtext }) => {
  return (
    <div
      className="flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] px-6 sm:px-10 py-10 sm:py-16 bg-white dark:bg-gray-700"
      style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
    >
      <div className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
        <img src={imgURL} alt={label} width={24} height={24} />
      </div>
      <h3 className="mt-5 font-palanquin md:text-3xl text-xl leading-normal font-bold dark:text-slate-50">
        {label}
      </h3>
      <p className="mt-3 break-words font-montserrat text-lg md:text-base leading-normal text-slate-gray">
        {subtext}
      </p>
    </div>
  );
};

export default ServiceCard;
