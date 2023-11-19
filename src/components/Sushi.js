import React from "react";

function Sushi(props) {
  const {name, price, image, eaten, onSushiClick } = props;
  return (
    <div className="sushi">
      <div className="plate" onClick={ () => onSushiClick(props)}>
        {/* Tell me if this sushi has been eaten! */}
        {eaten ? null : (
          <img
            src={image} /* Give me an image source! */
             alt={name} /* Give me a name! */
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {/* Give me a name! */} - ${/* Give me a price! */}
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
