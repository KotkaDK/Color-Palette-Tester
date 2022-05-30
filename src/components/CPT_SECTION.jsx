import React from 'react';

class CPT_SECTION extends React.Component {

    render() {
        return (
            <div>
                <fieldset>
                    <legend style={{fontWeight: 'bold'}}>{this.props.title}</legend>
                    <p>{this.props.description}</p>
                    <hr/>
                    {this.props.children}
                </fieldset>
                <br/>
            </div>
        );
    }

}

export default CPT_SECTION;