import ReviewCard from "../../components/ReviewCard";
import { copyrightSign } from "../../assets/icons";
import { footerLogo } from "../../assets/images";
import { reviews, footerLinks, socialMedia } from "../../constants";
import { Button } from "../../components";
const Review = () => {
  return (
    <>
      <section className="max-container flex flex-col items-center gap-9 p-4 lg:h-full md:mt-4">
        <div className="dark:text-slate-50">
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
        <div className="flex justify-between items-center max-lg:flex-col gap-10 md:mt-10 dark:text-slate-50">
          <h3 className="text-2xl md:text-4xl md:leading-[68px] lg:w-1/2 font-palanquin font-bold">
            Sign Up for
            <span className="text-coral-red"> Updates </span>& Newsletter
          </h3>
          <div className="lg:w-1/2 w-full flex justify-between items-center max-sm:flex-col p-2.5 sm:border sm:border-slate-gray rounded-full">
            <input
              type="text"
              placeholder="subscribe@nike.com"
              className="input ps-6 bg-transparent focus:outline-none focus:border-transparent dark:placeholder:text-slate-50"
            />

            <div className="max-sm:w-full flex items-center justify-center mt-3 md:mt-0">
              <Button label="Sign Up" />
            </div>
          </div>
        </div>
      </section>
      <footer className="w-full bg-black dark:bg-slate-50 p-5">
        <div className="flex justify-between items-start flex-wrap max-lg:flex-col">
          <div className="flex w-1/2 flex-col items-start max-w-sm md:mb-0 mb-5 ">
            <a href="/">
              <img
                src={footerLogo}
                alt="logo"
                width={150}
                height={46}
                className="m-0 dark:invert dark:filter"
              />
            </a>
            <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
              Get shoes ready for the new term at your nearest Nike store. Find
              Your perfect Size In Store. Get Rewards
            </p>
            <div className="flex items-center gap-5 mt-8">
              {socialMedia.map((icon) => (
                <div
                  className="flex justify-center items-center w-10 h-10 bg-white rounded-full"
                  key={icon.alt}
                >
                  <img src={icon.src} alt={icon.alt} width={20} height={20} className="dark:invert dark:filter"/>
                </div>
              ))}
            </div>
          </div>
          <div className="flex w-1/2 justify-between lg:gap-10 gap-5 flex-wrap">
            {footerLinks.map((section) => (
              <div key={section.title} className="mb-8">
                <h4 className="font-montserrat text-xl leading-normal font-medium mb-4 text-white">
                  {section.title}
                </h4>
                <ul>
                  {section.links.map((link) => (
                    <li
                      className="mt-2 font-montserrat text-base leading-normal text-white-400 hover:text-slate-gray"
                      key={link.name}
                    >
                      <a href={link.link}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-between text-white-400 md:mt-12 max-sm:flex-col max-sm:items-center">
          <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
            <img
              src={copyrightSign}
              alt="copyright sign"
              width={16}
              height={16}
              className="rounded-full m-0"
            />
            <p>Copyright. All rights reserved.</p>
          </div>
          <p className="font-montserrat cursor-pointer mt-4 max-sm:mt-0">
            Terms & Conditions
          </p>
        </div>
      </footer>
    </>
  );
};

export default Review;
