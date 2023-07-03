const shape = require("./shape.js");

class square extends shape {

    render() {
        return `<svg height="500" width="500" xmins="http://www.w3.org/2000/svg">
        <rect x="73" y="40" width="160" height="160" fill="${this.color}" />
        <text fill="${this.textColor}" font-size="75" x="172" y="250">${this.text}</text>
        </svg>`
    }

}

module.exports = square.js
