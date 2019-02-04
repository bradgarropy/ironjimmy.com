import React from "react"
import {StaticQuery, graphql} from "gatsby"
import Layout from "../components/Layout"
import Image from "../components/Image"
import Container from "../styles/Container"
import ProductCategoryHeader from "../styles/ProductCategoryHeader"
import ProductGrid from "../styles/ProductGrid"
import ProductPreview from "../styles/ProductPreview"
import {displayPrice} from "../utils/price"

const Straps = () => (
    <StaticQuery
        query={query}
        render={data => {
            const products = data.allShopifyProduct.edges

            return (
                <Layout>
                    <Container>
                        <ProductCategoryHeader>
                            <h1>Lifting Straps</h1>
                            <Image src="https://images.ctfassets.net/d3ttfid6hh7h/6jTvsieHobKyzGyNtSCtxs/d4d0e540ec2516df60a41133644e579f/straps.jpg"/>
                        </ProductCategoryHeader>

                        <ProductGrid columns="2">
                            {products.map(product => {
                                product = product.node

                                const id = product.shopifyId
                                const type = product.productType.toLowerCase()
                                const handle = product.handle
                                const title = product.title
                                const price =
                                    product.priceRange.minVariantPrice.amount
                                const image = product.images[0].originalSrc

                                const link = `/${type}/${handle}`

                                return (
                                    <ProductPreview key={id}>
                                        <a href={link}>
                                            <Image src={image}/>
                                        </a>

                                        <a href={link}>
                                            <h2>{title}</h2>
                                        </a>

                                        <p>{displayPrice(price)}</p>
                                    </ProductPreview>
                                )
                            })}
                        </ProductGrid>
                    </Container>
                </Layout>
            )
        }}
    />
)

const query = graphql`
    {
        allShopifyProduct(filter: {productType: {eq: "Straps"}}) {
            edges {
                node {
                    shopifyId
                    productType
                    handle
                    title
                    priceRange {
                        minVariantPrice {
                            amount
                        }
                    }
                    images {
                        originalSrc
                    }
                }
            }
        }
    }
`

export default Straps
