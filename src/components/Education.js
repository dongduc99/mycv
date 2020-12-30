import React, { Component } from 'react';

class Education extends Component {
    render() {
        return (
            <div>
                <div className = "card">
                    <div className="card-content">
                        <h6><strong>EDUCATION</strong></h6>
                        <table className="striped">
                            <thead>
                                <tr>
                                    <th>Certificate</th>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                               
                               
                                <tr>
                                    <td>Java develoment</td>
                                    <td>Jan 2018</td>
                                   
                                </tr>
                                <tr>
                                    <td>Android develoment</td>
                                    <td>Jan 2020</td>
                                   
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;