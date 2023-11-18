import React from 'react';

const Footer = () => {
    return (
        <div className='container-fluid bg-dark text-white'>
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-4">
                        <h2 className='fw-bold text-light'>WEB LOGO</h2>
                        <p className='text-light'>Some footer text about the  Agency. Just a little description to help people understand you better</p>
                    </div>
                    <div className="col-md-4 text-light">
                        <h5 className=' text-light '>Quick Links</h5>
                        <ul className='list-unstyled'>
                            <li><a href="" className='text-light'>Service </a></li>
                            <li><a href="" className='text-light'>Porfolio </a></li>
                            <li><a href="" className='text-light'>About Us </a></li>
                            <li><a href="" className='text-light'>Contant Us </a></li>
                        </ul>
                    </div>
                    <div className="col-md-4 text-light">
                        <h5 className=' text-light'>Address</h5>
                        <p>Design Agency Head Office.
Airport Road
United Arab Emirate</p>
                    </div>
                </div>
                <div className="row">
                    <p>Copyright Design Agency 2022</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;