import React from 'react';

function changeVisibility(event) {

    // Get the color class name of the event
    let color = event.className.split(" ")[0] + "-hideable";

    // Get the text of the event
    let text = event.textContent;

    // get all elements with the color class name
    let elements = document.getElementsByClassName(color);

    // Set text to hide if show 
    if (text === "Show") {
        event.textContent = "Hide"; 
    } else {
        event.textContent = "Show";
    }

    // loop through all elements with the color class name
    for (let i = 0; i < elements.length; i++) {
            
            // if the text is visible
            if (text === "Hide") {
                elements[i].style.display = "none";
            } else {

                if (elements[i].tagName === "BUTTON" || elements[i].tagName === "svg") {
                    elements[i].style.display = "inline";
                } else if (elements[i].tagName === "P") {
                    elements[i].style.display = "block";
                    elements[i].style.width = "100%";
                } else {
                    elements[i].style.display = "inline-block";
                    elements[i].style.width = "100%";
                }

            }

    }

}

class CPT_VISIBILITY_BUTTON extends React.Component {

    render() {
        return (
            <div>
                <button onClick={e => changeVisibility(e.target)} className={this.props.type + "-id utility"} disabled={this.props.isActive}>Hide</button>
            </div>
        );
    }

}

export default CPT_VISIBILITY_BUTTON;