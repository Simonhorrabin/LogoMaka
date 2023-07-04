const shape = require("./shape.js");

class triangle extends shape {

    render() {
        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />
        <text fill="${this.textColor}" font-size="75" x="172" y="250">${this.text}</text>
        </svg>`
    }

}

module.exports = triangle