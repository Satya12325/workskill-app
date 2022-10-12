import React from "react";
import profile from "../../assets/profile.svg";
import wipro from "../../assets/wipro.svg"
import ebay from "../../assets/ebay.svg"
import freshwork from "../../assets/freshwork.svg"

function Right(props) {
    return (
        <div className="companyCard">
            <div className="btnParent">
                <div className="mentor">
                    <p>Mentored by</p>
                </div>
            </div>
            <div className="profileLogo">
                <div className="profileImg">
                    <img src={profile} alt="" />
                    <p>Rhea Punjabi</p>
                </div>
                <div className="companyLOgo">
                    <img src={wipro} alt="" />
                    <img src={ebay} alt="" /><br/>
                    <img src={freshwork} alt="" />
                </div>
            </div>
            <div>
                <p className="normalParagraph">Career Coach & Corporate Trainer</p>
            </div>
        </div>
    );
}

export default Right;
