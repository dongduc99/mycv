import React, { Component } from 'react';
import ImgProfile from '../Image/dpd.jpg'
class Profile extends Component {
    render() {
        return (
            <div>
                <div className = 'card'>
                    <div className = 'card-image'>
                        <img className = 'activator' src = {ImgProfile} alt = "Dong Phuoc Duc"/>
                     </div>
                     <div className = "card-content">
                         <span className = "card-title activator grey-text text-darken-4">Dong Phuoc Duc</span>
                         <p>Android Developer</p>
                     </div>
                </div>
            </div>
        );
    }
}

export default Profile;

