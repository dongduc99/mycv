import React, { Component } from 'react';

class Skills extends Component {
    render() {
        return (
            <div>
                <div className = "card">
                    <div className = "card-content">
                        <h6><strong>PROFESSIONL SKILLS</strong></h6>
                        <div className = "row mt-top">
                            <div className = "col s6">
                                <p>HTML</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate blue" style={{width : '89%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>CSS</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate blue" style={{width : '75%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>Javascipt</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate blue" style={{width : '80%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>Jquery</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate blue" style={{width : '95%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>C++</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate blue" style={{width : '80%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>Java</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate blue" style={{width : '80%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>Dart</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate blue" style={{width : '40%'}}></div>
                                </div>
                            </div>
                            <div className = "col s6">
                                <p>SQL</p>
                                <div className = "progress grey lighten-1">
                                    <div className = "determinate blue" style={{width : '67%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Skills;