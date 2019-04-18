import React, {useContext} from "react"
import styled from "styled-components"
import AddToCart from "./AddToCart"
import {isDefaultOption, isColorOption} from "../../utils/shopify"
import Form from "../../styles/Form"
import FormField from "../../styles/FormField"
import ProductContext from "../../context/ProductContext"

const StyledProductForm = styled(Form)`
    justify-items: stretch;

    p {
        margin: 0;
    }
`

const ProductForm = () => {
    const productContext = useContext(ProductContext)

    const {
        product,
        onSubmit,
        onOptionsChange,
        onAttributesChange,
    } = productContext

    const {options, productType, tags, availableForSale} = product

    return (
        <StyledProductForm onSubmit={onSubmit}>
            {options.map((option, index) => {
                const {name, values} = option

                if (!isDefaultOption(name) && !isColorOption(name)) {
                    return (
                        <FormField key={index} onChange={onOptionsChange}>
                            <label>{name}</label>
                            <select name={name}>
                                {values.map((value, index) => (
                                    <option key={index} value={value}>
                                        {value}
                                    </option>
                                ))}
                            </select>
                        </FormField>
                    )
                }
            })}

            {tags.includes("custom-color") && (
                <>
                    <FormField onChange={onAttributesChange}>
                        <label htmlFor="left-color">Left Color</label>
                        <input type="text" id="left-color" name="Left Color"/>
                    </FormField>

                    <FormField onChange={onAttributesChange}>
                        <label htmlFor="right-color">Right Color</label>
                        <input
                            type="text"
                            id="right-color"
                            name="Right Color"
                        />
                    </FormField>
                </>
            )}

            {productType.toLowerCase() === "sleeves" && (
                <>
                    <FormField onChange={onAttributesChange}>
                        <label htmlFor="tag">Tag</label>
                        <input type="text" id="tag" name="Tag" maxLength="10"/>
                    </FormField>

                    <FormField onChange={onAttributesChange}>
                        <label htmlFor="collar-measurement">
                            Collar Measurement
                        </label>
                        <input
                            type="text"
                            id="collar-measurement"
                            name="Collar Measurement"
                        />
                    </FormField>

                    <FormField onChange={onAttributesChange}>
                        <label htmlFor="brand">Brand</label>
                        <input type="text" id="brand" name="Brand"/>
                    </FormField>

                    <FormField onChange={onAttributesChange}>
                        <label htmlFor="model">Model</label>
                        <input type="text" id="model" name="Model"/>
                    </FormField>

                    <FormField onChange={onAttributesChange}>
                        <label htmlFor="special-instructions">
                            Special Instructions
                        </label>
                        <textarea
                            id="special-instructions"
                            name="Special Instructions"
                        />
                    </FormField>
                </>
            )}

            <AddToCart
                soldOut={!availableForSale}
                comingSoon={tags.includes("coming-soon")}
            />
        </StyledProductForm>
    )
}

export default ProductForm
