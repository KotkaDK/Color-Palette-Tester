import React from 'react';

/*
    This component is used to create a section of CPT components.
    It is used in the ReactJS app.js file.
*/

class CPT_SECTION extends React.Component {

    render() {

        let breaker = null;

        if (this.props.hasBreaker === false) {
            breaker = null;
        } else {
            breaker = <br/>
        }

        return (
            <div>
                <fieldset id={this.props.identifier} className={this.props.classes}>
                    <legend style={{fontWeight: 'bold'}}>{this.props.title}</legend>
                    <p>{this.props.description}</p>
                    <hr/>
                    {this.props.children}
                </fieldset>
                {breaker}
            </div>
        );
    }

}

export default CPT_SECTION;