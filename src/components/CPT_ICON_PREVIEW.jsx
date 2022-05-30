import React from 'react';

import { ReactComponent as SettingsIcon } from './assets/settings.svg';

class CPT_ICON_PREVIEW extends React.Component {

    render() {
        return (
            <div className={this.props.background + "-id-hideable"}>
                <div className={this.props.background + " preview-box"}>
                    <SettingsIcon fill={this.props.first_color} className={this.props.first_color + "-fill icon-preview icon " + this.props.first_color + "-id-hideable"}/>
                    <SettingsIcon fill={this.props.second_color} className={this.props.second_color + "-fill icon-preview icon " + this.props.second_color + "-id-hideable"}/>
                    <SettingsIcon fill={this.props.third_color} className={this.props.third_color + "-fill icon-preview icon " + this.props.third_color + "-id-hideable"}/>
                    <SettingsIcon fill={this.props.fourth_color} className={this.props.fourth_color + "-fill icon-preview icon " + this.props.fourth_color + "-id-hideable"}/>
                </div>
                <br/>
            </div>
        );
    }

}

export default CPT_ICON_PREVIEW;