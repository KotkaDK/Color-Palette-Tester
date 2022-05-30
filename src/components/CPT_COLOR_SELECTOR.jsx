import React from 'react';
import CPT_VISIBILITY_BUTTON from './CPT_VISIBILITY_BUTTON';

function changeColor(event) {

    // if enter key is pressed
    let color = document.getElementById(event.id).value;
    document.getElementById(event.id).value = color.toUpperCase();

    // check if document.getElementById(event.id).value contains any non-alphanumeric characters
    if (color.match(/[^a-zA-Z0-9]/g)) {
        // remove all non-alphanumeric characters except for #
        color = color.replace(/[^a-zA-Z0-9#]/g, "").toUpperCase();;
        // set the textarea value to the new text
        document.getElementById(event.id).value = color;
    }

     // check if color is a valid hex code
    if (color.charAt(0) !== "#") { 
        document.documentElement.style.setProperty(`--${event.id}-color`, "#FFFFFF");
        document.getElementById(event.id).value = "#FFFFFF";
        return;
    }
    if (color.length === 7) { 
        if (!color.match(/^#[0-9A-F]{6}$/i)) { 
            document.documentElement.style.setProperty(`--${event.id}-color`, "#FFFFFF");
            document.getElementById(event.id).value = "#FFFFFF";
            return;
        } else {
            document.documentElement.style.setProperty(`--${event.id}-color`, color);
            exportCSS();
            return;
        }
    }

}

function randomizeColor(event) {

    // generate a random hex code of 7 characters
    let hex = "#";
    for (let i = 0; i < 6; i++) {
        hex += Math.floor(Math.random() * 16).toString(16);
    }

    // uppercase hex
    hex = hex.toUpperCase();

    // get first class of event
    let colorID = event.classList[0];

    // get all elements that have the tag input and class of colorID
    let elements = document.getElementsByTagName("input");

    // remove all elements without the class of colorID
    for (let i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains(colorID)) {
            elements[i].value = hex;
            changeColor(elements[i]);
        }
    }

    exportCSS();

}

function exportCSS () {

    // get all elements with the class "color-selector"
    let elements = document.getElementsByClassName("color-selector");

    let cssText = `:root{--light-color:${elements[0].value};--primary-color:${elements[1].value};--secondary-color:${elements[2].value};--tertiary-color:${elements[3].value};--dark-color:${elements[4].value};}`;

    // Get the elements with hex input as class
    let hex_input = document.getElementsByClassName("hex-input")[0];

    // set value of hex input to css text
    hex_input.value = cssText;

}

class CPT_COLOR_SELECTOR extends React.Component {

    render() {
        return (
            <div>
                <div>
                    <CPT_VISIBILITY_BUTTON type={this.props.type} isActive={this.props.isActive}/>
                    <button onClick={e => randomizeColor(e.target)} className={this.props.type + "-id utility"}>Random</button>
                    <div className={this.props.type + " color-preview"}/>
                    <input className={this.props.type + "-id color-selector"} onChange={e => changeColor(e.target)} maxLength="7" type="text" id={this.props.type} name={this.props.type} defaultValue={this.props.hex}/>
                    <label for={this.props.type}>{this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1) + " color"}</label>
                </div>
                <br/>
            </div>
        );
    }

}

export default CPT_COLOR_SELECTOR;