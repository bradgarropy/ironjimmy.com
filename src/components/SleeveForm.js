import React from "react"
import PropTypes from "prop-types"
import StripeCheckout from "react-stripe-checkout"
import Icon from "../../static/icons/iron-jimmy-icon.png"
import {toCents} from "../utils/price"
import "../scss/SleeveForm.scss"

class SleeveForm extends React.Component {
    static propTypes = {
        sleeve: PropTypes.object.isRequired,
    }

    onSubmit = event => {
        event.preventDefault()
        return
    }

    onToken = token => {
        const {sleeve} = this.props

        const url = "/.netlify/functions/payment"
        const data = {
            token,
            amount: toCents(sleeve.price),
        }
        const options = {
            method: "POST",
            body: JSON.stringify(data),
        }

        fetch(url, options)
            .then(response => response.json())
            .then(response => console.log(response))
    }

    render = () => {
        const {sleeve} = this.props

        return (
            <form className="sleeve-form" onSubmit={this.onSubmit}>
                <div className="sleeve-form-field">
                    <label>Weight</label>
                    <select>
                        <option value="20">20KG</option>
                        <option value="15">15KG</option>
                    </select>
                </div>

                <div className="sleeve-form-field">
                    <label>Brand</label>
                    <input type="text"/>
                </div>

                <div className="sleeve-form-field">
                    <label>Model</label>
                    <input type="text"/>
                </div>

                <StripeCheckout
                    token={this.onToken}
                    stripeKey={process.env.STRIPE_PUBLISHABLE_KEY}
                    image={Icon}
                    name="Iron Jimmy"
                    description={sleeve.name}
                    amount={toCents(sleeve.price)}
                    locale="auto"
                    zipCode={true}
                    billingAddress={true}
                >
                    <button>Buy</button>
                </StripeCheckout>
            </form>
        )
    }
}

export default SleeveForm
