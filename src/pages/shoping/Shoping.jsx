import { products } from "../../constants";
import { shoe8 } from "../../assets/images";
import { ProductCard, Button } from "../../components";
const Shoping = () => {
  return (
    <>
      <section
        id="products"
        className="flex flex-col justify-center items-center "
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

        <div className="flex justify-between items-center max-lg:flex-col gap-8 w-full max-container mt-20">
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
      </section>
    </>
  );
};

export default Shoping;
