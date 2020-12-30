import React, { Component } from 'react';

class Experience extends Component {
    render() {
        return (
            <div>
                <div className = "card">
                    <div className = "card-content">
                        <h6><strong>EXPERIENCE</strong></h6>
                        <div className = "row">
                            <div className = "col s12 m4 l4 xl4">
                                <p className = "teal year_exp white-text">
                                    Nov <strong> 2017</strong> - March <strong> 2019</strong>
                                </p>
                            </div>
                            <div className = "col s12 m8 l8 x18">
                                <blockquote className = "no-pad">
                                    <h6 className = "no-pad mt-bottom">
                                        <strong>JAVA DEVELOPER</strong>
                                    </h6>
                                    <p>I do some small projects for studying at school
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col s12 m4 l4 xl4">
                                <p className = "teal year_exp white-text">
                                    Jan <strong> 2020</strong> Current <strong> 2020</strong>
                                </p>
                            </div>
                            <div className = "col s12 m8 l8 x18">
                                <blockquote className = "no-pad">
                                    <h6 className = "no-pad mt-bottom">
                                        <strong>ANDROID DEVELOPER</strong>
                                    </h6>
                                    <p>I work on a classroom booking project with my team in mobile programming.
                                        Currently, I am learning more Flutter to do projects and serve for work later
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;