import React from 'react';

/*
    This component is used to create a button of a certain type and color scheme.
    It is used in the CPT_BUTTON_SET component.
*/

class CPT_BUTTON extends React.Component {

    render() {

        let button = null;
        let color = this.props.color;

        switch (this.props.type) {
            case 'primary':
                button = <button className={`${color}-id-hideable ${color} ${color}-border light-text preview-button`}>{this.props.text}</button>;
                break;
            case 'secondary':
                button = <button className={`${color}-id-hideable light ${color}-border ${color}-text preview-button`}>{this.props.text}</button>;
                break;
            case 'tertiary':
                button = <button className={`${color}-id-hideable light light-border ${color}-text underline preview-button`}>{this.props.text}</button>;
                break;
            default:
                button = <button className={`${color}-id-hideable ${color} ${color}-border light-text preview-button`}>{this.props.text}</button>;
                break;
        }

        return (
            <div>
                {button}
            </div>
        );
    }

}

export default CPT_BUTTON;