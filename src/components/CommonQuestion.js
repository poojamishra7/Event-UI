import React from 'react'

const CommonQuestion = () => {
  return (
    <div className="bsb-faq-2 bg-light py-3 py-md-5 py-xl-8">
        <div className="container">
            <div className="row gy-5 gy-lg-0 justify-content-center">
                <h2 className="h1 mt-5 mb-3 text-center">Some Of The Commonly Asked Questions</h2>
    
                <div className="accordion mt-4  " id="accordionExample">
                    <div className="accordion-item mb-4 shadow-sm">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                How Do I Change My Billing Information?
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>To change your billing information, please follow these steps:</p>
                                <ul>
                                    <li>Go to our website and sign in to your account.</li>
                                    <li>Click on your profile picture in the top right corner of the page and select "Account Settings."</li>
                                    <li>Under the "Billing Information" section, click on "Edit."</li>
                                    <li>Make your changes and click on "Save."</li>
                                </ul>
                            </div>
                        </div>
                    </div>
    
                    <div className="accordion-item mb-4 shadow-sm">
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                How Do I Cancel My Subscription?
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>To cancel your subscription, please follow these steps:</p>
                                <ul>
                                    <li>Log in to your account on our website.</li>
                                    <li>Navigate to the "Subscription" section.</li>
                                    <li>Find the option to "Cancel Subscription."</li>
                                    <li>Confirm your cancellation.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item mb-4 shadow-sm">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                How Do I Cancel My Subscription?
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>To cancel your subscription, please follow these steps:</p>
                                <ul>
                                    <li>Log in to your account on our website.</li>
                                    <li>Navigate to the "Subscription" section.</li>
                                    <li>Find the option to "Cancel Subscription."</li>
                                    <li>Confirm your cancellation.</li>
                                </ul>
                            </div>
                        </div>
                    </div>



                    <div className="accordion-item mb-4 shadow-sm">
                        <h2 className="accordion-header" id="headingFour">
                            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                How Do I Cancel My Subscription?
                            </button>
                        </h2>
                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>To cancel your subscription, please follow these steps:</p>
                                <ul>
                                    <li>Log in to your account on our website.</li>
                                    <li>Navigate to the "Subscription" section.</li>
                                    <li>Find the option to "Cancel Subscription."</li>
                                    <li>Confirm your cancellation.</li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div className="accordion-item mb-4 shadow-sm">
                        <h2 className="accordion-header" id="headingFive">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                                How Do I Cancel My Subscription?
                            </button>
                        </h2>
                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>To cancel your subscription, please follow these steps:</p>
                                <ul>
                                    <li>Log in to your account on our website.</li>
                                    <li>Navigate to the "Subscription" section.</li>
                                    <li>Find the option to "Cancel Subscription."</li>
                                    <li>Confirm your cancellation.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="accordion-item mb-4 shadow-sm">
                        <h2 className="accordion-header" id="headingSix">
                            <button className="accordion-button collapsed " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                How Do I Cancel My Subscription?
                            </button>
                        </h2>
                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <p>To cancel your subscription, please follow these steps:</p>
                                <ul>
                                    <li>Log in to your account on our website.</li>
                                    <li>Navigate to the "Subscription" section.</li>
                                    <li>Find the option to "Cancel Subscription."</li>
                                    <li>Confirm your cancellation.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CommonQuestion
