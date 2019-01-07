import React from "react"
import PropTypes from "prop-types"
import "../scss/SleeveForm.scss"

class SleeveForm extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    }

    render = () => {
        return (
            <form className="sleeve-form" onSubmit={this.props.onSubmit}>
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

                <button>Buy</button>
            </form>
        )
    }
}

export default SleeveForm
