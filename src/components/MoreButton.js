import React from "react";

function MoreButton(props) {

  const { onMoreButtonClick } = props;
  return <button onClick= { () => onMoreButtonClick()} /* Fill me in! */ >More sushi!</button>;
}

export default MoreButton;


