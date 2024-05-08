import React from "react";
import pic1 from "./../images/eyes.jpg";
import pic2 from "./../images/download (2).jpg";
import pic3 from "./../images/download (1).jpg";
import pic4 from "./../images/download.jpg";
import "./body.css";
const Body = () => {
    return (
        <div>
            <h1>We are a Paediatric Eye Hospital Limbe</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis eum soluta enim dolores quia nemo sed repellendus
                quaerat explicabo atque molestiae sunt, ea quas a quasi, dolorum
                facilis deleniti provident vel consequatur dignissimos. Quos
                iure placeat tempora consequatur saepe aperiam praesentium
                recusandae magni molestiae dolores, dolorum nihil eveniet atque
                impedit ut similique distinctio molestias sint perferendis?
                Excepturi reprehenderit commodi expedita sed blanditiis
                perferendis corrupti, magnam odit esse ullam repellendus tenetur
                repudiandae at sapiente nemo nobis, sit, maiores quis adipisci
                quaerat non alias aliquam! Asperiores aut, saepe quos aspernatur
                veniam tempore sapiente exercitationem minima natus consectetur
                adipisci animi a at labore nemo pariatur esse. Nemo velit
                pariatur ipsam eos temporibus fugiat odio ab excepturi, voluptas
                distinctio saepe animi ipsum laboriosam a, at aspernatur.
            </p>
            <img src={pic1} height={300} width={300} alt="" />
            <img src={pic2} height={300} width={300} alt="" />
            <img src={pic3} height={300} width={300} alt="" />
            <img src={pic4} height={300} width={300} alt="" />
        </div>
    );
};

export default Body;
