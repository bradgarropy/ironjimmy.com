const displayPrice = price => {
    const formattedPrice = "$" + price.toFixed(2)
    return formattedPrice
}

const toCents = price => {
    const cents = price * 100
    return cents
}

export {displayPrice, toCents}
