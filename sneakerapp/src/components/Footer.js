import React from "react"

export default function Footer(props){
    const currDate=new Date();
    const currYear=currDate.getFullYear();
    return (
        <div>
            <div className="footer--firstline">
                <span className="footer--subscribe">
                    Subscribe to our newsletter
                    <div classNameName="input-group mb-3">
                        <input type="text" classNameName="form-control" placeholder="your@gmail.com" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                        <span classNameName="input-group-append">
                            <button classNameName="btn btn-outline-secondary" type="button">Join</button>
                        </span>
                    </div>
                </span>
                <span><i className="fa-solid fa-phone"></i>
                        Contact Us 
                    <div className="contact--link">
                        555-123-4567
                    </div>
                </span>
                <span><i className="fa-solid fa-envelope"></i>
                        Email Us 
                    <div className="contact--link">
                        customercare@sneaker.com
                    </div>
                </span>
            </div>
            <div className="contactus">
                <a href="" className="contactus--icon"><i className="fa-brands fa-instagram"></i></a>
                <a href="" className="contactus--icon"><i className="fa-brands fa-twitter"></i></a>
                <a href="" className="contactus--icon"><i className="fa-brands fa-facebook"></i></a>
                <a href="" className="contactus--icon"><i className="fa-brands fa-linkedin"></i></a>
                <a href="" className="contactus--icon"><i className="fa-brands fa-whatsapp"></i></a>
            </div>
            <div className="contactus--copyright">&#169; CopyRight.All rights reserver {currYear}</div>
        </div>
    )
}