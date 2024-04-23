import { products, services } from "../../constants";
import { shoe8, offer03, offer01, offer02, offer04 } from "../../assets/images";
import { ProductCard, Button, ServiceCard } from "../../components";
import { arrowRight } from "../../assets/icons";
const Shoping = () => {
  return (
    <>
      <section
        id="products"
        className="flex flex-col justify-center items-center max-container p-4"
      >
        {/* lg:h-full max-sm:w-full */}
        <div className="flex flex-col justify-center gap-5 items-center ">
          <h2 className="font-palanquin font-bold text-center xl:text-8xl md:text-6xl sm:text-5xl text-4xl max-sm:text-3xl dark:text-slate-50">
            Our <span className="text-coral-red "> Popular </span> Products
          </h2>
          <p className="font-poppins text-slate-gray xl:text-lg md:text-base sm:text-sm text-xs md:leading-6 sm:leading-5 text-center">
            Experience top-notch quality and style with our sought-after
            selections.
            <br /> Discover a world of comfort, design, and value.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14">
          {products.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>

        <div className="flex justify-between items-center flex-col lg:flex-row gap-8 w-full mt-20">
          <div className="flex flex-1 flex-col lg:ms-5 dark:text-slate-50">
            <h2 className="font-palanquin capitalize text-4xl lg:text-3xl xl:text-4xl font-bold max-w-lg ">
              We Provide You
              <span className="text-coral-red"> Super </span>
              <span className="text-coral-red">Quality </span> Shoes
            </h2>
            <p className="mt-4 lg:mt-6 info-text lg:max-w-lg xl:max-w-none">
              Ensuring premium comfort and style, our meticulously crafted
              footwear is designed to elevate your experience, providing you
              with unmatched quality, innovation, and a touch of elegance.
            </p>
            <p className="mt-6 lg:mt-8 info-text lg:max-w-lg xl:max-w-none">
              Our dedication to detail and excellence ensures your satisfaction
            </p>
            <div className="mt-8 lg:mt-11">
              <Button label="View details" />
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center mt-8 lg:mt-0">
            <img
              src={shoe8}
              alt="product detail"
              width={570}
              height={522}
              className="object-contain"
            />
          </div>
        </div>

        <div className="flex justify-center flex-wrap gap-9 w-full mt-20">
          {services.map((service) => (
            <ServiceCard key={service.label} {...service} />
          ))}
        </div>

        <section className="flex items-center max-xl:flex-col-reverse max-container p-4 mt-20 lg:gap-60 gap-20">
          <div className="md:w-1/3 relative">
            <div className="absolute md:flex justify-center items-center lg:-right-24 lg:top-1/2 top-24 -right-16  animate-spin-slow hidden">
              <img className="lg:w-40 w-24 rounded-full" src={offer04} alt="" />
            </div>
            <div className="">
              <div className="flex flex-col md:flex-row gap-5">
                <img className="rounded-xl md:w-1/2" src={offer01} alt="" />
                <img className="rounded-xl md:w-1/2" src={offer02} alt="" />
              </div>
              <div className="mt-4">
                <img
                  className="rounded-xl md:w-full bg-black"
                  src={offer03}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:w-full lg:max-w-[33%] dark:text-slate-50">
            <h2 className="text-4xl lg:text-3xl font-palanquin font-bold ">
              <span className="text-coral-red">Special </span>
              Offer
            </h2>
            <p className="mt-4 info-text md:text-base text-sm">
              Embark on a shopping journey that redefines your experience with
              unbeatable deals. From premier selections to incredible savings,
              we offer unparalleled value that sets us apart.
            </p>
            <p className="mt-6 info-text md:text-base text-sm">
              Navigate a realm of possibilities designed to fulfill your unique
              desires, surpassing the loftiest expectations. Your journey with
              us is nothing short of exceptional.
            </p>
            <div className="mt-8 lg:mt-11 flex flex-wrap gap-4">
              <Button label="Shop now" iconURL={arrowRight} />
              <Button
                label="Learn more"
                backgroundColor="bg-white"
                borderColor="border-slate-gray"
                textColor="text-slate-gray"
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Shoping;
