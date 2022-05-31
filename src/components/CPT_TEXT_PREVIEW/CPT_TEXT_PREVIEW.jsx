import React from 'react';

class CPT_TEXT_PREVIEW extends React.Component {

    render() {

        let breaker = null;

        if (this.props.hasBreaker === false) {
            breaker = null;
        } else {
            breaker = <br/>
        }

        return (
            <div className={this.props.background + "-id-hideable"}>
                <div className={this.props.background + " preview-box"}>
                    <p className={this.props.first_color + "-text text-preview " + this.props.first_color + "-id-hideable"}>This is a preview of the colored text</p>
                    <p className={this.props.second_color + "-text text-preview " + this.props.second_color + "-id-hideable"}>This is a preview of the colored text</p>
                    <p className={this.props.third_color + "-text text-preview " + this.props.third_color + "-id-hideable"}>This is a preview of the colored text</p>
                    <p className={this.props.fourth_color + "-text text-preview " + this.props.fourth_color + "-id-hideable"}>This is a preview of the colored text</p>
                </div>
                {breaker}
            </div>
        );
    }

}

export default CPT_TEXT_PREVIEW;