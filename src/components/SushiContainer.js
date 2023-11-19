import React, { useState, useEffect } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer(props) {
  const [sushiList, setSushiList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3001/sushis") 
      .then((response) => response.json())
      .then((data) => setSushiList(data));
  }, []); // Empty dependency array to run the effect only once on mount

  const handleMoreButtonClick = () => {
    // Ensure currentIndex is a number
    const nextSushiSet = sushiList.slice(currentIndex, currentIndex + 4);
    setSushiList(nextSushiSet);
    setCurrentIndex(currentIndex + 4);
  };

  const handleSushiClick = (clickedSushi) => {
    // Check if the sushi has already been eaten
    if (!clickedSushi.eaten) {
      // Simulate eating the sushi by updating its 'eaten' status
      const updatedSushiList = sushiList.map((sushi) =>
        sushi === clickedSushi ? { ...sushi, eaten: true } : sushi
      );

      // Update the sushi list in state
      setSushiList(updatedSushiList);
    }
  };

  return (
    <div className="belt">
      {/* Render Sushi components here! */}
      <MoreButton onMoreButtonClick={handleMoreButtonClick} />
      {sushiList.map((sushi, index) => (
        <Sushi
          key={index}
          name={sushi.name}
          price={sushi.price}
          image={sushi.image}
          eaten={sushi.eaten}
          onSushiClick={() => handleSushiClick(sushi)}
        />
      ))}
    </div>
  );
}

export default SushiContainer;
