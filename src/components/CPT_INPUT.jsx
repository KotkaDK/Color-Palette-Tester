import React from 'react';
import CPT_TEXT_AREA from './CPT_TEXT_AREA';

class CPT_INPUT extends React.Component {

    render() {
        return (
            <div>
                <p>{this.props.description}</p>
                <CPT_TEXT_AREA identifier="text-to-preview"/>
                <hr/>
            </div>
        );
    }

}

export default CPT_INPUT;