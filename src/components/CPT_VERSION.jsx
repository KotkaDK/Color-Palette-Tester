import React from 'react';

class CPT_VERSION extends React.Component {

    render() {
        return (
            <p><span style={{fontStyle: 'italic'}}>{this.props.version}</span>: {this.props.description}</p>
        );
    }

}

export default CPT_VERSION;