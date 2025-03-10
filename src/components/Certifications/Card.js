import React from "react";
import Card from "react-bootstrap/Card";

function CardItem(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Title>{props.title}</Card.Title>
    </Card>
  );
}
export default CardItem;
