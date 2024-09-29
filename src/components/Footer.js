import React,{ useState } from 'react';
import axios from 'axios';
const Footer = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [success_message,setSuccessMsg] = useState('');
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const saveEmail = async ()=> {
        debugger;
        try {
            if(email){
                let url = process.env.BACKEND_URL || "http://localhost:4000";
                url += "/saveEmail?email_id=" + encodeURIComponent(email);    
                const response = await axios.get(url);    
                if (response && response.status === 200) {
                    setSuccessMsg('Thank you !!! Our team will contact you soon');
                }
            }else{
                setMessage('Sorry, Email Id is required.');
            }
            
        } catch (error) {
            console.error('Error saving email:', error);
            setMessage('Sorry, there was an issue saving your email. Please try again.');
        }
    }    
    return (
        <div>
            <footer className="footer pb-4">
                <div className="">
                    <div className="row">
                        <div className="col-lg-3">
                            <h5>Quick Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Occassion</a></li>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Venues</a></li>
                                <li><a href="#">Contact Us</a></li>
                                <li><a href="#">Account</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <div className="row">
                                <h5>Occassion</h5>
                                <div className="col-6">
                                    <ul className="list-unstyled">
                                        <li><a href="#">Birthday Party</a></li>
                                        <li><a href="#">Anniversary</a></li>
                                        <li><a href="#">Weddings</a></li>
                                        <li><a href="#">Engagement</a></li>
                                        <li><a href="#">Corporate Events</a></li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <ul className="list-unstyled">
                                        <li><a href="#">Welcome Baby</a></li>
                                        <li><a href="#">Inauguration Ceremony</a></li>
                                        <li><a href="#">Bachelor Party</a></li>
                                        <li><a href="#">Baby Shower</a></li>
                                        <li><a href="#">Photography</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 GIT">
                            <h5>Get In Touch</h5>
                            <ul className="list-unstyled">
                                <li><p><i className="fa-solid fa-phone mr-3"></i> + 01 234 567 88</p></li>
                                <li><p><i className="fa-solid fa-envelope mr-3"></i> info@gmail.com</p></li>
                                <li className="">
                                    <a className="btn" role="button"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a className="btn" role="button"><i className="fa-brands fa-instagram"></i></a>
                                    <a className="btn" role="button"><i className="fa-brands fa-pinterest-p"></i></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3 sub-sec">
                            <h5>Sign Up And Save</h5>
                            <p>Subscribe To Get Special Offers, Free Giveaways, And-Once-In-A-Lifetime Deals.</p>
                            <form>
                                <input id="email" type="email" onChange={handleEmailChange} placeholder="Enter Your Email"/>
                            </form>
                            <button className="p-3 px-5" onClick={saveEmail}>Send</button>
                            <p style={{color:'red'}}>{message}</p>
                            <p style={{color:'green'}}>{success_message}</p>
                        </div>
                    </div>
                    <hr className="mt-5" />
                        <div className="row mt-3 footer-below">
                            <div className="col-lg-6">
                                <a href="#" className="">Privacy Policy</a>
                                <a href="#" className="link2">Terms & Conditions</a>
                            </div>
                            <div className="col-lg-6 text-lg-end text-start copy-section">
                                &copy; 2024 Event Planner | All Rights Reserved
                            </div>
                        </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
