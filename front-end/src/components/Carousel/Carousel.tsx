import { useState } from "react";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";
import RatingCard from "../RatingCard/RatingCard";
import "./Carousel.scss";
import RatingsType from "../../types/ratingsType"; // Importing RatingsType

type CarouselProps = {
  ratings: RatingsType[];
};

const Carousel = ({ ratings }: CarouselProps) => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    if (counter === ratings.length - 1) {
      setCounter(0);
    } else {
      setCounter(counter + 1);
    }
    console.log("Increment triggered. Counter:", counter);
    console.log("Ratings array:", ratings);
  };

  const handleDecrement = () => {
    if (counter === 0) {
      setCounter(ratings.length - 1);
    } else {
      setCounter(counter - 1);
    }
    console.log("Decrement triggered. Counter:", counter);
    console.log("Ratings array:", ratings);
  };

  if (ratings.length === 0) {
    return <div>No ratings available. Please add a rating.</div>;
  }

  return (
    <div className="carousel">
      <button
        className="carousel__arrow carousel__arrow--left"
        aria-label="Navigate left"
        onClick={handleDecrement}
      >
        <img src={leftArrow} alt="Left arrow to navigate carousel" />
      </button>
      <div className="carousel__content">
        <RatingCard {...ratings[counter]} />
      </div>
      <button
        className="carousel__arrow carousel__arrow--right"
        aria-label="Navigate right"
        onClick={handleIncrement}
      >
        <img src={rightArrow} alt="Right arrow to navigate carousel" />
      </button>
    </div>
  );
};

export default Carousel;