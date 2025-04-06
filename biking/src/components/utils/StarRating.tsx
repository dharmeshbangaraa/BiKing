import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

interface StarRatingProp {
  size: number;
  readonly: boolean;
}

const StarRating: React.FC<StarRatingProp> = ({ size, readonly }) => {
  const [rating, setRating] = useState(4);

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value: number, index: number) =>
    console.log(value, index);

  return (
    <div className="App">
      <Rating
        onClick={handleRating}
        SVGstyle={{ display: "inline-block", paddingTop: 0 }}
        size={size}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        initialValue={rating}
        readonly={readonly}
        fillColor="#0080FF"
      />
    </div>
  );
};

export default StarRating;
