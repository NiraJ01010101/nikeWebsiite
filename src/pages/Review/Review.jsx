import ReviewCard from "../../components/ReviewCard";
import { reviews } from "../../constants";

const Review = () => {
  return (
    <section className="max-container flex flex-col items-center justify-center gap-9 lg:h-full">
      <div>
        <h3 className="font-palanquin text-center text-4xl font-bold">
          What Our
          <span className="text-coral-red"> Customers </span>
          Say?
        </h3>
        <p className="m-auto mt-4 max-w-lg  text-center info-text font-poppins">
          Hear genuine stories from our satisfied customers about their
          exceptional experiences with us.
        </p>
      </div>
      <div>
        <div className="flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              imgURL={review.imgURL}
              customerName={review.customerName}
              rating={review.rating}
              feedback={review.feedback}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
