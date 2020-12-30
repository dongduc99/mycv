import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div>
                <div className = "card">
                    <div className = "card-content">
                        <h6 className = "mt-bottom" ><strong>ABOUT ME</strong></h6>
                        <p className = "grey-text">I am a Mobile programmer, with experience and youth I will definitely do my best for the job</p>
                    </div>
                    <div className ="card-action">
                        <h6><strong>PERSONAL INFO</strong></h6>
                        <div className = "row mt">
                            <div className="col s12 m6 16 x16">
                                <p><strong>Address: </strong>Da Nang</p>
                                <p><strong>Email: </strong>dongphuocducdn1999@gmail.com</p>
                                <p><strong>Phone: </strong>0898210911</p>       
                            </div>
                            <div className = "s12 m6 16 x16">
                            <p><strong>Main Language: </strong>VietNamese</p>
                                <p><strong>Second Language: </strong>English</p>
                            
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;