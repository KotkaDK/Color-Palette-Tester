import React from 'react';

function exportCSS () {

    // get all elements with the class "color-selector"
    let elements = document.getElementsByClassName("color-selector");

    let cssText = `:root{--light-color:${elements[0].value};--primary-color:${elements[1].value};--secondary-color:${elements[2].value};--tertiary-color:${elements[3].value};--dark-color:${elements[4].value};}`;

    // Get the elements with hex input as class
    let hex_input = document.getElementsByClassName("hex-input")[0];

    // set value of hex input to css text
    hex_input.value = cssText;

    navigator.clipboard.writeText(cssText);

}

class CPT_CSS_AREA extends React.Component {

    render() {
        return (
            <div>
                <button className="dark dark-border light-text" onClick={exportCSS}>Export</button>
                <br/>
                <input type="text" id={this.props.identifier} spellCheck={false} placeholder="Some CSS..." className="text-input hex-input" readOnly={true}/>
            </div>
        );
    }

}

export default CPT_CSS_AREA;