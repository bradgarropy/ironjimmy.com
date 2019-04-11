const capitalize = input => {
    const output = input
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.substring(1))
        .join(" ")

    return output
}

const stripParams = input => {
    const output = input.split("?")[0]
    return output
}

module.exports = {
    capitalize,
    stripParams,
}
