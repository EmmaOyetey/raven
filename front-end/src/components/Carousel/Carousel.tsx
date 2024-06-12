import { useState } from "react";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";
import RatingCard from "../RatingCard/RatingCard";
import "./Carousel.scss";
import RatingsType from "../../types/ratingsType"; // Importing RatingsType
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

type CarouselProps = {
  ratings: RatingsType[];
};

const Carousel = ({ ratings }: CarouselProps) => {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    setCounter((counter + 1) % ratings.length);
  };

  const handleDecrement = () => {
    setCounter((counter - 1 + ratings.length) % ratings.length);
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
        <ArrowBackIosIcon style={{ color: "white" }} />
      </button>
      <div className="carousel__content">
        <RatingCard {...ratings[counter]} />
      </div>
      <button
        className="carousel__arrow carousel__arrow--right"
        aria-label="Navigate right"
        onClick={handleIncrement}
      >
        <ArrowForwardIosIcon style={{ color: "white" }} />
      </button>
    </div>
  );
};

export default Carousel;

