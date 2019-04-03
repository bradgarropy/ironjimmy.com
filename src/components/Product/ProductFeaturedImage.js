import React, {useContext} from "react"
import Img from "gatsby-image"
import ProductContext from "../../context/ProductContext"

const ProductFeaturedImage = () => {
    const productContext = useContext(ProductContext)
    const {product, featuredImage} = productContext
    const {title} = product

    return <Img fluid={featuredImage} alt={title}/>
}

export default ProductFeaturedImage
