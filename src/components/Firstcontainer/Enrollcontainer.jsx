import React from "react";
import clock from "../../assets/clock.svg";
import immediate from "../../assets/immedite.svg";
import dedline from "../../assets/dedline.svg";

import SmCard from "./Card";

function Enrollcontainer(props) {
    const enroll = [
        {
            id: 1,
            logo: clock,
            time: "12 weeks",
            details: "Fully Online",
        },
        {
            id: 2,
            logo: immediate,
            time: "Intermediate",
            details: "Prior Experience Mandatory",
        },
        {
            id: 3,
            logo: dedline,
            time: "30th march 22",
            details: "Registration Deadline",
        },
    ];

    return (
        <div className="enrollmaincontainer">
            <div className="smcardContainer">
                {enroll.map((item) => (
                    <SmCard {...item} />
                ))}
            </div>
            <div className="btn-container">
                <div className="firstBtn">
                    <button className="btn">Enroll Now @ 499/-</button>
                    <p>
                        <span style={{ fontWeight: "700" }}>547</span> eople enrolled in
                        last 24hrs
                    </p>
                </div>
                <div className="SecoundBtn">
                    <div className="btns">
                        <h5>Register Now</h5>
                        Start march 30
                    </div>
                    <div>
                        <p>
                            <span style={{ fontWeight: "700" }}>47,000</span> already enrolled
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Enrollcontainer;
