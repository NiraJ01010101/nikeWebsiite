import { useState } from "react";
import { statistics, shoes } from "../../constants";
import { bigShoe2 } from "../../assets/images";
import { arrowRight } from "../../assets/icons";
import { Button } from "../../components";

const Home = () => {
  const [showImage, setshowImage] = useState(bigShoe2);
  return (
    <>
      <section
        id="home-container"
        className="w-full flex xl:flex-row flex-col items-center gap-10 max-container mt-auto p-8"
        style={{ height: "calc(100vh - 53px)" }}
      >
        <div className="relative xl:w-2/5 justify-center items-start w-full max-xl:padding-x text-center xl:text-left">
          <p className="text-base md:text-lg sm:text-base font-montserrat text-coral-red">
            Our Summer collections
          </p>
          <h1 className="md:mt-10 font-palanquin xl:text-8xl md:text-6xl sm:text-5xl text-4xl max-sm:text-3xl font-bold dark:text-slate-50">
            <span className="xl:bg-white xl:whitespace-nowrap relative z-10 md:pr-10 rounded-md ">
              The New Arrival
            </span>
            <br />
            <span className="text-coral-red inline-block md:mt-4">Nike</span> Shoes
          </h1>
          <p className="font-poppins text-slate-gray xl:text-lg md:text-base sm:text-sm text-xs md:leading-6 sm:leading-5 mt-3 mb-5 md:mt-6 md:mb-14">
            Discover stylish Nike arrivals, quality comfort, and innovation for
            your active life.
          </p>
          <div className="flex justify-center lg:justify-start">
            <Button label=" Shop now" iconURL={arrowRight} />
          </div>

          <div className="flex justify-start items-start flex-wrap w-full md:mt-16 mt-5 lg:gap-16 gap-8 ">
            {statistics?.map((stat, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 "
              >
                <div
                  className="p-4 bg-slate-50 rounded-md"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
                >
                  <div className="flex items-center">
                    <div>
                      <h3 className="text-lg font-semibold">{stat.value}</h3>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-full basis-1/2 md:basis-1/2 relative flex-1 flex justify-center items-start max-lg:pb-48 max-md:pb-20 bg-hero bg-cover bg-center rounded ">
          <img
            src={showImage}
            alt="shoe colletion"
            // width={610}
            // height={502}
            className="object-contain relative z-10 lg:mt-20 max-w-full"
                    />

          <div className="flex sm:gap-6 gap-4 absolute bottom-[2%] sm:left-[10%] max-sm:px-6">
            {shoes?.length !== 0 &&
              shoes?.map((elem) => {
                return (
                  <>
                    <div
                      className={`border-2 rounded-xl ${
                        showImage === elem.bigShoe
                          ? "opacity-50"
                          : "border-transparent"
                      } cursor-pointer max-sm:flex-1 transition duration-300 ease-in-out`}
                      onClick={() => setshowImage(elem.bigShoe)}
                    >
                      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
                        <img
                          src={elem.thumbnail}
                          alt="shoe colletion"
                          width={127}
                          height={103.34}
                          className="object-contain "
                        />
                      </div>
                    </div>
                  </>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
