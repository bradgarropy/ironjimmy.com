const displayPrice = price => {
    const formattedPrice = "$" + parseFloat(price).toFixed(2)
    return formattedPrice
}

const toCents = price => {
    const cents = parseFloat(price) * 100
    return cents
}

export {displayPrice, toCents}
