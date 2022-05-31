import React from 'react';

function setText(event) {

    let text;

    if (document.getElementById(event.id).value === "" || document.getElementById(event.id).value === null) {
        text = "This is a preview of the colored text";
    } else if (document.getElementById(event.id).value.match(/[^a-zA-Z0-9]/g)) {
        text = document.getElementById(event.id).value.replace(/[^a-zA-Z0-9, -.?!]/g, "");
        document.getElementById(event.id).value = text;
    } else {
        text = document.getElementById(event.id).value;
    }

    // get all elements with class "text-preview"
    let textPreviews = document.getElementsByClassName('text-preview');

    // loop through all elements
    for (let i = 0; i < textPreviews.length; i++) {
        textPreviews[i].innerHTML = text;
    }

}

class CPT_TEXT_AREA extends React.Component {

    render() {
        return (
            <div>
                <input type="text" spellCheck={false} className="dark-border text-input" id={this.props.identifier} onChange={e => setText(e.target)} placeholder="Write some text..." maxlength="157"/>
            </div>
        );
    }

}

export default CPT_TEXT_AREA;