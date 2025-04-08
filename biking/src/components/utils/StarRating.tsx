import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

interface StarRatingProp {
  size: number;
  readonly: boolean;
  onChange?: (id: string, rating: number) => void;
  id: string;
}

const StarRating: React.FC<StarRatingProp> = ({
  size,
  readonly,
  onChange,
  id,
}) => {
  const [rating, setRating] = useState(0);

  const handleRating = (rate: number) => {
    setRating(rate);
    onChange?.(id, rate);
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
