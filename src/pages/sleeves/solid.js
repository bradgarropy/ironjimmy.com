import React from "react"
import PropTypes from "prop-types"
import {graphql} from "gatsby"
import Layout from "../../components/Layout"
import Container from "../../styles/Container"
import ProductGrid from "../../styles/ProductGrid"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCartPlus} from "@fortawesome/free-solid-svg-icons"
import {displayPrice} from "../../utils/price"

const Solid = ({data}) => {
    console.log(data)

    const image =
        "https://images.ctfassets.net/d3ttfid6hh7h/2FjRKCSeKxhkLSTOBszVuJ/cb9cd3cac2845356579138755863c58b/IMG_4774.HEIC"
    const description =
        "Select your center and sleeve colors, choose the weight of your barbell, and specify the brand and model so I can custom fit your sleeve to your barbell. Don't forget to enter what you want on your custom leather tag!"
    const sleeveColors = ["Red", "Orange", "Yellow", "Green", "Blue"]
    const barColors = ["Black", "Grey"]
    const weights = ["15kg", "20kg"]

    return (
        <Layout>
            <Container>
                <ProductGrid>
                    <div>
                        <img src={image}/>
                        <p>{description}</p>
                    </div>

                    <div>
                        <h1>Solid Sleeve</h1>
                        <p>{displayPrice(70)}</p>

                        <p>Sleeve Color</p>
                        {sleeveColors.map((color, index) => (
                            <div key={index}>{color}</div>
                        ))}

                        <p>Bar Color</p>
                        {barColors.map((color, index) => (
                            <div key={index}>{color}</div>
                        ))}

                        <label>Weight</label>
                        <select>
                            {weights.map((weight, index) => (
                                <option key={index} value={weight}>
                                    {weight}
                                </option>
                            ))}
                        </select>

                        <label>Tag</label>
                        <input type="text"/>

                        <label>Brand</label>
                        <input type="text"/>

                        <label>Model</label>
                        <input type="text"/>

                        <label>Notes</label>
                        <textarea/>

                        <button>
                            <FontAwesomeIcon icon={faCartPlus}/> Add To Cart
                        </button>
                    </div>
                </ProductGrid>
            </Container>
        </Layout>
    )
}

Solid.propTypes = {
    data: PropTypes.object.isRequired,
}

export const query = graphql`
    {
        allContentfulSleeves {
            edges {
                node {
                    contentful_id
                    image {
                        file {
                            url
                        }
                    }
                    name
                    price
                }
            }
        }
    }
`

export default Solid
