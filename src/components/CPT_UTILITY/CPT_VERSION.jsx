import React from 'react';

/*
    This component is used to display the version and the description of that version.
    It is used in the history section.
*/

class CPT_VERSION extends React.Component {

    render() {
        return (
            <p><span style={{fontStyle: 'italic'}}>{this.props.version}</span>: {this.props.description}</p>
        );
    }

}

export default CPT_VERSION;