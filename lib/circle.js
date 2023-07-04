const shape = require("./shape.js");

class circle extends shape {

    render() {
        return `<svg height="500" width="500" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="115" r="80" fill="${this.color}" />
        <text fill="${this.textColor}" font-size="75" x="172" y="250">${this.text}</text>
        </svg>`
    }

}

module.exports = circle