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
          <h2 className="text-4xl font-palanquin font-bold">
            Our <span className="text-coral-red"> Popular </span> Products
          </h2>
          <p className="lg:max-w-xl mt-2 font-poppins text-slate-gray text-center">
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

        <div className="flex justify-between items-center max-lg:flex-col gap-8 w-full mt-20">
          <div className="flex flex-1 flex-col ms-5">
            <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
              We Provide You
              <span className="text-coral-red"> Super </span>
              <span className="text-coral-red">Quality </span> Shoes
            </h2>
            <p className="mt-4 lg:max-w-lg info-text">
              Ensuring premium comfort and style, our meticulously crafted
              footwear is designed to elevate your experience, providing you
              with unmatched quality, innovation, and a touch of elegance.
            </p>
            <p className="mt-6 lg:max-w-lg info-text">
              Our dedication to detail and excellence ensures your satisfaction
            </p>
            <div className="mt-11">
              <Button label="View details" />
            </div>
          </div>

          <div className="flex-1 flex justify-center items-center">
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

        <section className="flex items-center max-xl:flex-col-reverse max-container p-4 mt-20 md:gap-60">
          <div className="w-1/3 relative">
            <div className="absolute flex justify-center items-center -right-24 top-1/2 animate-spin-slow ">
              <img className="w-40 rounded-full" src={offer04} alt="" />
            </div>
            <div className="">
              <div className="flex gap-5">
                <img className="rounded-lg w-1/2" src={offer01} alt="" />
                <img className="rounded-lg w-1/2" src={offer02} alt="" />
              </div>
              <div className="mt-4">
                <img
                  className="rounded-lg w-full bg-black"
                  src={offer03}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/3">
            <h2 className="text-4xl font-palanquin font-bold">
              <span className="text-coral-red">Special </span>
              Offer
            </h2>
            <p className="mt-4 info-text">
              Embark on a shopping journey that redefines your experience with
              unbeatable deals. From premier selections to incredible savings,
              we offer unparalleled value that sets us apart.
            </p>
            <p className="mt-6 info-text">
              Navigate a realm of possibilities designed to fulfill your unique
              desires, surpassing the loftiest expectations. Your journey with
              us is nothing short of exceptional.
            </p>
            <div className="mt-11 flex flex-wrap gap-4">
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
