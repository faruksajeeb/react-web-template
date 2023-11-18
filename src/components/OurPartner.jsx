import React from 'react';
import OurPartner1 from "../assets/images/our_partner/logos_google.png";
import OurPartner2 from "../assets/images/our_partner/Trello-logo-blue 1.png";
import OurPartner3 from "../assets/images/our_partner/logos_monday.png";
import OurPartner4 from "../assets/images/our_partner/Notion.png";
import OurPartner5 from "../assets/images/our_partner/Slack.png";

const OurPartner = () => {
    return (
        <div className='container-fluid'>
            <div className="row bg-light p-3">
                <div className="col-md-12">
                <img src={OurPartner1} className="hero-img p-2 px-7"  width="20%" />
                <img src={OurPartner2} className="hero-img p-2 px-7"  width="20%" />
                <img src={OurPartner3} className="hero-img p-2 px-7"  width="20%" height=""/>
                <img src={OurPartner4} className="hero-img p-2 px-7"  width="20%" height=""/>
                <img src={OurPartner5} className="hero-img p-2 px-7"  width="20%" height=""/>
                </div>
            </div>            
        </div>
    );
};

export default OurPartner;