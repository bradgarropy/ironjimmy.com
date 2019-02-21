const camelToDash = input => {
    let output = ""

    for (let character of input) {
        character === character.toUpperCase()
            ? (output = output + "-" + character.toLowerCase())
            : (output = output + character)
    }

    return output
}

module.exports = {
    camelToDash,
}
