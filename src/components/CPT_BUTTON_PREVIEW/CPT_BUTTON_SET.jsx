import React from 'react';
import CPT_BUTTON from './CPT_BUTTON';

/*
    This component is used to create a preview set of buttons that can be used to test a color scheme.
    It uses the CPT_BUTTON component and it is used in the Button preview section.
*/

class CPT_BUTTON_SET extends React.Component {

    render() {

        return (
            <div>
                <CPT_BUTTON type="tertiary" text="Tertiary" color={this.props.color}/>
                <CPT_BUTTON type="secondary" text="Secondary" color={this.props.color}/>
                <CPT_BUTTON type="primary" text="Primary" color={this.props.color}/>
            </div>
        );
    }

}

export default CPT_BUTTON_SET;