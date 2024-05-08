import React from "react";
import "./footer.css";
const footer = () => {
    return (
        <div>
            <div className="footer" id="footer">
                <div className="footer_content">
                    <div className="footer_content_left">
                        Presbyterian Hopital
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Ratione eaque et quod velit, optio consequatur
                            amet. Distinctio, eaque. Perferendis nam neque modi
                            qui laudantium. Aut quod dignissimos molestias odio
                            odit, enim, aliquam dicta cum atque exercitationem
                            qui expedita. Quibusdam iste modi explicabo hic
                            minus quia? Non rem id ipsam eius.
                        </p>
                        {/* <div className="footer_social_icons">
                            <img src={assets.facebook_icon} alt="" />
                            <img src={assets.twitter_icon} alt="" />
                            <img src={assets.linkedin_icon} alt="" />
                        </div> */}
                    </div>
                    <div className="footer_content_center">
                        <h2>COMPANY</h2>
                        <ul>
                            <li href="#homw">Home </li>
                            <li href="#aboutus">About us </li>
                            <li href="#contacts">contacts </li>
                        </ul>
                    </div>
                    <div className="footer_content_right">
                        <h2>GET IN TOUCH </h2>
                        <ul>
                            <li>eyehospital@gmail.com </li>
                            <li>+237692670661</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="footer_copyright">
                    Copyright 2024 © presbyterian hospital - All Right Reserved.
                </p>
            </div>
        </div>
    );
};

export default footer;
