const formatPrice = price => {
    const formattedPrice = "$" + price.toFixed(2)
    return formattedPrice
}

export default formatPrice
