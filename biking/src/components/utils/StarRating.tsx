import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

const StarRating: React.FC = () => {
  const [rating, setRating] = useState(4);

  // Catch Rating value
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
        size={20}
        onPointerEnter={onPointerEnter}
        onPointerLeave={onPointerLeave}
        onPointerMove={onPointerMove}
        initialValue={rating}
        readonly={true}
        fillColor="#0080FF"
      />
    </div>
  );
};

export default StarRating;
