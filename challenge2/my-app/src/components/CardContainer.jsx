import React from "react";
import Card from "./Card";
import "../styles/CardContainer.css";
import waffleImg from '../assets/images/image-waffle-desktop.jpg';
import cremeBruleImg from "../assets/images/image-creme-brulee-desktop.jpg";
import macaronImg from "../assets/images/image-macaron-desktop.jpg";
import tiramisuImg from "../assets/images/image-tiramisu-desktop.jpg";
import baklavaImg from "../assets/images/image-baklava-desktop.jpg";
import lemonMeringuePieImg from "../assets/images/image-meringue-desktop.jpg";
import redValvetCakeImg from "../assets/images/image-cake-desktop.jpg";
import saltedCaramelBrownie from "../assets/images/image-brownie-desktop.jpg";
import pannaCottaImg from "../assets/images/image-panna-cotta-desktop.jpg";

const CardContainer = () => {
    const cardsData = [
        {
          img: waffleImg,
          name: "Waffle",
          description: "Waffle with berries",
          price: "$6.50",
        },
        {
            img: cremeBruleImg,
            name: "Creme Brulee",
            description: "Vanilla Bean Creme Brulee",
            price: "$7.00",
          },
          {
            img: macaronImg,
            name: "Macaron",
            description: "Macaron Mix of five",
            price: "$8.00",
          },
          {
            img: tiramisuImg,
            name: "Tiramisu",
            description: "Classic Tiramisu",
            price: "$5.50",
          },
          {
            img: baklavaImg,
            name: "Baklava",
            description: "Pistachio Baklava",
            price: "$4.00",
          },
          {
            img: lemonMeringuePieImg,
            name: "Pie",
            description: "Lemon Meringue Pie",
            price: "$5.00",
          },
          {
            img: redValvetCakeImg,
            name: "Cake",
            description: "Red Valvet Cake",
            price: "$4.50",
          },
          {
            img: saltedCaramelBrownie,
            name: "Brownie",
            description: "Salted Caramel Brownie",
            price: "$5.50",
          },
          {
            img: pannaCottaImg,
            name: "Panna Cotta",
            description: "Vanilla Panna Cotta",
            price: "$6.50",
          },
      ];
      return <div className="card-container">
                {cardsData.map((data, index) => (
                <Card
                    key={index}
                    img={data.img}
                    name={data.name}
                    description={data.description}
                    price={data.price}
                />
                ))}
        </div>
    
}

export default CardContainer;