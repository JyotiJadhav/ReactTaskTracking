import React, { Component } from 'react';

class Progress extends Component {
    render() {
        return (
            <div>
                <span className="margin-25p">Devlopment</span>
                <span className="progress-bar-progress">2/8</span>
                <div className="w3-border">
                    <div className="w3-grey" ></div>
                </div>
            </div>
        )
    }
}

export default Progress;

