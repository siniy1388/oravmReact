import React from 'react'
import {ReactSVG} from "react-svg";

class SVGLoader extends React.Component {
    render() {
        return <div>
            <ReactSVG
                renumerateIRIElements={false}
                src='https://cdn.shopify.com/s/files/1/0496/1029/files/Freesample.svg'
                afterInjection={this.afterInjection}
            />
        </div>
    }

    afterInjection = (error, svg) => {
        if (error) {
            console.error(error);
            return
        }
        const text = document.createElement('text');
        text.setAttribute('x', '100');
        text.setAttribute('y', '100');
        text.innerText = 'text';
        svg.appendChild(text);
    }
}

export default SVGLoader;