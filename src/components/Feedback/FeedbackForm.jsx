import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const FeedbackForm = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleReviewSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form action="">
        <div>
          <h3 className="text-[16px] leading-5 font-semibold text-textColor mb-4 mt-0">
            How would you rate the overall experience?*
          </h3>

          <div className="">
            {[...Array(5).keys()].map((_, index) => {
              index += 1;

              return (
                <button
                  key={index}
                  type="button"
                  className={`${
                    index <= (rating || hover)
                      ? "text-yellowColor"
                      : "text-gray-400"
                  } bg-transparent text-[22px] border-none outline-none cursor-pointer`}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
                >
                  <span>
                    <AiFillStar />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-7">
          <h3 className="text-[16px] leading-5 font-semibold text-textColor mb-4 mt-0">
            Share your feedback or suggestion*
          </h3>

          <textarea
            className="border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4 py-3 rounded-md"
            rows="5"
            placeholder="Write your message"
            onChange={(e) => setReviewText(e.target.value)}
          ></textarea>
        </div>

        <button className="btn" type="submit">
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;
